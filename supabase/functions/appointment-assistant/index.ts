import { streamChatCompletion, GatewayError, type GeminiChatMessage } from "npm:@lovable.dev/ai-gateway@0.1.13";
import { createUIMessageStream, createUIMessageStreamResponse, type UIMessage } from "npm:ai@7.0.146";
import { clinicPrompt } from "./clinic.ts";

const cors = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type", "Access-Control-Allow-Methods": "POST, OPTIONS" };
function safeError(error: unknown) {
  return error instanceof GatewayError ? error.message : "The assistant could not reply. Please call 073308 33964 or use WhatsApp.";
}
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405, headers: cors });
  try {
    const raw = await req.text();
    if (raw.length > 150000) return Response.json({ message: "This chat is too long. Please start a new conversation." }, { status: 413, headers: cors });
    const body = JSON.parse(raw);
    if (!Array.isArray(body.messages) || body.messages.length === 0 || body.messages.length > 100) return Response.json({ message: "Please start a new conversation." }, { status: 400, headers: cors });
    const messages: UIMessage[] = [];
    const turns: GeminiChatMessage[] = [{ role: "system", content: clinicPrompt }];
    for (const m of body.messages) {
      if (typeof m.id !== "string" || !["user", "assistant"].includes(m.role) || !Array.isArray(m.parts) || !m.parts.every((p: {type?: string; text?: unknown}) => p.type === "text" && typeof p.text === "string")) return Response.json({ message: "Invalid chat message." }, { status: 400, headers: cors });
      const content = m.parts.map((p: {text: string}) => p.text).join("\n");
      if (content.length > 6000) return Response.json({ message: "Please keep each message under 6,000 characters." }, { status: 400, headers: cors });
      messages.push(m);
      turns.push(m.role === "user" ? { role: "user", content } : { role: "assistant", content });
    }
    if (messages.at(-1)?.role !== "user") return Response.json({ message: "Please send a new message." }, { status: 400, headers: cors });
    const upstream = await streamChatCompletion({ model: "google/gemini-3.8-flash", messages: turns, max_tokens: 1200 }, { signal: req.signal });
    const iterator = upstream[Symbol.asyncIterator]();
    // Read the first event before headers so upstream denials keep their HTTP status.
    const first = await iterator.next();
    const stream = createUIMessageStream({
      originalMessages: messages,
      onError: safeError,
      execute: async ({ writer }) => {
        writer.write({ type: "start" });
        writer.write({ type: "text-start", id: "answer" });
        let chunk = first;
        let hasText = false;
        while (!chunk.done) {
          for (const choice of chunk.value.choices) {
            if (choice.delta.refusal) throw new Error(choice.delta.refusal);
            if (choice.delta.content) { hasText = true; writer.write({ type: "text-delta", id: "answer", delta: choice.delta.content }); }
            if (choice.finish_reason === "content_filter") throw new Error("The assistant cannot help with that request.");
          }
          chunk = await iterator.next();
        }
        if (!hasText) throw new Error("The assistant returned no answer. Please contact the clinic.");
        writer.write({ type: "text-end", id: "answer" });
        writer.write({ type: "finish" });
      },
      onFinish: () => { /* Chat is saved only in the visitor's browser. */ },
    });
    const headers = new Headers(cors);
    if (upstream.runId) { headers.set("X-Lovable-AIG-Run-ID", upstream.runId); headers.set("Access-Control-Expose-Headers", "X-Lovable-AIG-Run-ID"); }
    return createUIMessageStreamResponse({ stream, headers });
  } catch (error) {
    const status = req.signal.aborted ? 499 : error instanceof GatewayError ? error.httpStatus || 502 : 400;
    return Response.json({ message: safeError(error) }, { status, headers: cors });
  }
});
import { useEffect, useMemo, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { MessageCircle, Phone, Trash2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Conversation, ConversationContent, ConversationScrollButton } from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import { PromptInput, PromptInputTextarea, PromptInputFooter, PromptInputSubmit } from "@/components/ai-elements/prompt-input";
import { appointmentWhatsAppUrl, CHAT_STORAGE_KEY, readChat } from "@/lib/appointment-chat";

export default function AppointmentAssistant() {
  const [initialMessages] = useState(readChat);
  const [input, setInput] = useState("");
  const [storageError, setStorageError] = useState(false);
  const textarea = useRef<HTMLTextAreaElement>(null);
  const transport = useMemo(() => new DefaultChatTransport({
    api: `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/appointment-assistant`,
    headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY },
    fetch: async (url, init) => {
      const response = await fetch(url, init);
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.message || "The assistant is unavailable. Please contact the clinic.");
      }
      return response;
    },
  }), []);
  const { messages, sendMessage, status, stop, error, clearError, setMessages } = useChat({ id: "wecare-appointment", messages: initialMessages, transport });
  const busy = status === "submitted" || status === "streaming";
  useEffect(() => {
    try { localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages)); setStorageError(false); }
    catch { setStorageError(true); }
  }, [messages]);
  useEffect(() => { if (!busy) textarea.current?.focus(); }, [busy]);
  function send(text: string) {
    if (!text.trim() || busy) return;
    clearError(); setInput("");
    void sendMessage({ text: text.trim() });
    textarea.current?.focus();
  }
  return (
    <section aria-label="Clinic appointment assistant" className="overflow-hidden rounded-lg border border-border bg-card shadow-xs">
      <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-4">
        <div className="flex min-w-0 items-center gap-3">
          <img src="/favicon.ico" alt="We Care" className="h-10 w-10 rounded-md object-contain" />
          <div><h2 className="font-display text-lg font-bold">We Care Assistant</h2><p className="text-xs text-muted-foreground">Gemini · Appointment enquiries</p></div>
        </div>
        <Button size="icon" variant="ghost" title="Clear conversation" aria-label="Clear conversation" disabled={busy || !messages.length} onClick={() => { if (window.confirm("Clear this saved conversation?")) {setMessages([]); clearError(); textarea.current?.focus();} }}><Trash2 /></Button>
      </div>
      <Conversation className="h-[360px] min-h-0 md:h-[430px]" aria-label="Appointment conversation">
        <ConversationContent className="gap-6 p-5">
          {!messages.length && <div className="space-y-5 py-4">
            <p className="font-display text-2xl font-semibold">Let’s plan your clinic visit.</p>
            <p className="text-muted-foreground">Hello! What would you like to ask We Care Physiotherapy in Guntur?</p>
            <div className="flex flex-wrap gap-2">{["I’d like an appointment", "Where is the clinic?", "Do you offer home visits?"].map(text => <Button key={text} variant="outline" size="sm" className="whitespace-normal h-auto min-h-9 text-left" onClick={() => send(text)}>{text}<ArrowUpRight className="shrink-0" /></Button>)}</div>
          </div>}
          {messages.map(message => <Message from={message.role} key={message.id}><MessageContent className="break-words">{message.parts.map((part, index) => part.type === "text" ? <MessageResponse key={index} isAnimating={busy && message.role === "assistant"}>{part.text}</MessageResponse> : null)}</MessageContent></Message>)}
          {status === "submitted" && <p role="status" className="animate-pulse text-sm text-muted-foreground motion-reduce:animate-none">We Care Assistant is replying…</p>}
        </ConversationContent>
        <ConversationScrollButton aria-label="Scroll to latest message" />
      </Conversation>
      <div className="border-t border-border p-4 space-y-3">
        {error && <p role="alert" className="text-sm text-destructive">{error.message}</p>}
        {storageError && <p role="alert" className="text-sm text-destructive">Your browser could not save this chat.</p>}
        <PromptInput onSubmit={({text}) => send(text)}>
          <PromptInputTextarea ref={textarea} autoFocus value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about your clinic visit…" aria-label="Message the clinic assistant" maxLength={6000} className="min-h-[72px] text-base" />
          <PromptInputFooter className="justify-end"><PromptInputSubmit status={status} disabled={!busy && !input.trim()} onStop={stop} title={busy ? "Stop reply" : "Send message"} /></PromptInputFooter>
        </PromptInput>
        <p className="text-xs text-muted-foreground">AI, not medical advice. Chat stays in this browser; avoid sensitive medical details. Only the clinic confirms appointments.</p>
        <div className="flex flex-wrap gap-2">
          <Button asChild size="sm"><a href={appointmentWhatsAppUrl(messages)} target="_blank" rel="noopener noreferrer"><MessageCircle />Send to clinic on WhatsApp</a></Button>
          <Button asChild size="sm" variant="outline"><a href="tel:+917330833964"><Phone />Call clinic</a></Button>
        </div>
        <p className="text-xs text-muted-foreground">Press Send in WhatsApp to deliver your request.</p>
      </div>
    </section>
  );
}
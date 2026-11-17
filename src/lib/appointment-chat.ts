import type { UIMessage } from "ai";

export const CHAT_STORAGE_KEY = "wecare-appointment-chat-v1";
export function readChat(): UIMessage[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(CHAT_STORAGE_KEY) || "[]");
    if (!Array.isArray(value)) return [];
    return value.filter((m): m is UIMessage => typeof m?.id === "string" && ["user", "assistant"].includes(m.role) && Array.isArray(m.parts) && m.parts.every((p: { type?: string; text?: unknown }) => p.type === "text" && typeof p.text === "string"));
  } catch { return []; }
}
export function appointmentWhatsAppUrl(messages: UIMessage[]) {
  const details = messages.filter(m => m.role === "user").map(m => m.parts.filter(p => p.type === "text").map(p => p.text).join(" ")).join("\n");
  return `https://wa.me/917330833964?text=${encodeURIComponent(`Hello We Care Physiotherapy Clinic, I would like to request an appointment.\n\n${details}\n\nPlease confirm a suitable time.`)}`;
}
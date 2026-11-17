import { describe, it, expect } from "vitest";
import { appointmentWhatsAppUrl, CHAT_STORAGE_KEY, readChat } from "../lib/appointment-chat";
describe("appointment assistant", () => {
  it("hands patient details to clinic WhatsApp, not AI answers", () => {
    const url = new URL(appointmentWhatsAppUrl([{id:"1",role:"user",parts:[{type:"text",text:"Ravi, knee pain, tomorrow"}]},{id:"2",role:"assistant",parts:[{type:"text",text:"Not a confirmed appointment"}]}]));
    expect(url.pathname).toBe("/917330833964");
    expect(url.searchParams.get("text")).toContain("Ravi, knee pain, tomorrow");
    expect(url.searchParams.get("text")).not.toContain("Not a confirmed appointment");
  });
  it("restores the single browser conversation", () => {
    const messages = [{id:"1",role:"user",parts:[{type:"text",text:"Clinic hours?"}]}];
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
    expect(readChat()).toEqual(messages);
    localStorage.removeItem(CHAT_STORAGE_KEY);
  });
});
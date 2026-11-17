## Architecture
- Keep clinic AI prompts and model calls in the appointment-assistant Edge Function; the public website only sends chat messages.
- Use the server-only Lovable AI Gateway SDK for Gemini inference, adapting native events to AI SDK UI-message streaming and AI Elements; retain only one browser-local conversation to avoid server-side patient chat storage.
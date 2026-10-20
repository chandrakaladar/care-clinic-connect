## Architecture
- Keep clinic AI prompts and model calls in the appointment-assistant Edge Function; the public website only sends chat messages.
- Use AI SDK UI-message streaming and AI Elements for the assistant, with a single browser-local conversation and no server-side patient chat storage.
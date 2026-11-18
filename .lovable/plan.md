# WhatsApp lead assistant

## What it will do
- Reply to new WhatsApp enquiries around the clock using Gemini.
- Quote only clinic prices the owner provides; never guess fees or open appointment slots.
- Collect the details needed to request a booking, confirm a time only after checking availability, and hand difficult or uncertain enquiries to the clinic.

## Implementation
- The WhatsApp Business connection is now linked to this project.
- The current site foundation cannot receive incoming WhatsApp messages. Upgrade to a supported hosting foundation before adding the incoming-message receiver; keep AI prompts and Gemini calls in the existing server-side appointment assistant.
- Add a secure WhatsApp message receiver, booking/availability handling, human handoff, and a small set of tests for price quoting and booking rules.
- Keep only necessary appointment details; do not retain full chat transcripts.

## Waiting on the owner
- Approval to upgrade the site foundation, which is required for incoming WhatsApp automation.
- The clinic's exact price list and booking hours/availability source. Until supplied, the assistant will not quote prices or promise appointment times.

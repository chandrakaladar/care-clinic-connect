REVOKE SELECT, UPDATE, DELETE ON public.appointment_requests FROM anon, authenticated;

CREATE POLICY "No public read access to appointment requests"
ON public.appointment_requests
FOR SELECT
TO anon, authenticated
USING (false);
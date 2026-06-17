CREATE TABLE public.appointment_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name text NOT NULL,
  phone text NOT NULL,
  email text,
  concern text NOT NULL,
  message text,
  source text NOT NULL DEFAULT 'website',
  email_sent boolean NOT NULL DEFAULT false,
  email_error text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.appointment_requests TO anon;
GRANT INSERT ON public.appointment_requests TO authenticated;
GRANT ALL ON public.appointment_requests TO service_role;

ALTER TABLE public.appointment_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Website visitors can create appointment requests"
ON public.appointment_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(patient_name)) BETWEEN 2 AND 100
  AND length(regexp_replace(phone, '[^0-9]', '', 'g')) BETWEEN 10 AND 15
  AND length(trim(concern)) BETWEEN 2 AND 120
  AND (email IS NULL OR email = '' OR email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$')
);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_appointment_requests_updated_at
BEFORE UPDATE ON public.appointment_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
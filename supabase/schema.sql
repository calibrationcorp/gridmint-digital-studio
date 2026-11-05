-- Run in the Supabase SQL Editor before enabling inquiry capture.
create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  service text,
  message text not null,
  status text not null default 'new'
);
alter table public.inquiries enable row level security;
-- No public policies: inserts are made only by the server using SUPABASE_SERVICE_ROLE_KEY.
-- Never expose the service-role key in a NEXT_PUBLIC_ variable.

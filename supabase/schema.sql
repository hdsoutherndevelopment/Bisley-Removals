create table if not exists enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  kind text not null check (kind in ('quote', 'contact')),
  name text not null,
  email text,
  phone text,
  service text,
  message text,
  details jsonb default '{}'::jsonb,
  source text default 'website',
  status text default 'new'
);

alter table enquiries enable row level security;
-- No public policies: inserts happen server-side with the service role key only.

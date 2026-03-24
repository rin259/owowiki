create extension if not exists pgcrypto;

create table if not exists public.message_board_entries (
  id uuid primary key default gen_random_uuid(),
  qq_number text not null check (qq_number ~ '^[0-9]{5,11}$'),
  content text not null check (char_length(content) between 1 and 500),
  status text not null default 'approved' check (status in ('approved', 'rejected')),
  created_at timestamptz not null default now()
);

alter table public.message_board_entries
  alter column status set default 'approved';

update public.message_board_entries
set status = 'approved'
where status = 'pending';

alter table public.message_board_entries enable row level security;

drop policy if exists "public can submit messages" on public.message_board_entries;
create policy "public can submit messages"
on public.message_board_entries
for insert
to anon, authenticated
with check (
  qq_number ~ '^[0-9]{5,11}$'
  and char_length(content) between 1 and 500
);

drop policy if exists "public can read approved messages" on public.message_board_entries;
create policy "public can read approved messages"
on public.message_board_entries
for select
to anon, authenticated
using (status = 'approved');

create index if not exists idx_message_board_entries_created_at
on public.message_board_entries (created_at desc);

create index if not exists idx_message_board_entries_status
on public.message_board_entries (status);

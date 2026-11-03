-- Run once in Supabase SQL editor. All tables use Row Level Security.
create table if not exists admins (user_id uuid primary key references auth.users(id) on delete cascade, role text not null default 'editor' check (role in ('owner','editor')));
create or replace function is_admin() returns boolean language sql security definer set search_path=public stable as $$ select exists(select 1 from admins where user_id = auth.uid()) $$;

create table if not exists submissions (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('contact','volunteer','partner','membership','newsletter','event_registration')),
  name text check (char_length(name) <= 120),
  email text not null check (char_length(email) <= 200),
  category text check (char_length(category) <= 80),
  message text check (char_length(message) <= 3000),
  event_id uuid,
  consent boolean not null default false,
  status text not null default 'new' check (status in ('new','reviewed','archived')),
  created_at timestamptz not null default now()
);
alter table submissions enable row level security;
create policy "anyone can submit" on submissions for insert to anon, authenticated with check (consent = true and status = 'new');
create policy "admins read" on submissions for select to authenticated using (is_admin());
create policy "admins update" on submissions for update to authenticated using (is_admin());
create policy "admins delete" on submissions for delete to authenticated using (is_admin());

create table if not exists events (
  id uuid primary key default gen_random_uuid(), title text not null, description text, starts_on date not null, location text,
  ticket_url text, registration_open boolean not null default false, published boolean not null default false, created_at timestamptz default now());
create table if not exists opportunities (
  id uuid primary key default gen_random_uuid(), title text not null, category text not null, description text, source_url text not null,
  verified_on date, expires_on date, published boolean not null default false, created_at timestamptz default now());
alter table events enable row level security; alter table opportunities enable row level security;
create policy "public reads published events" on events for select using (published);
create policy "public reads live opportunities" on opportunities for select using (published and (expires_on is null or expires_on >= current_date));
create policy "admins manage events" on events for all to authenticated using (is_admin()) with check (is_admin());
create policy "admins manage opportunities" on opportunities for all to authenticated using (is_admin()) with check (is_admin());
-- After creating the founder's user in Authentication > Users, run:
-- insert into admins (user_id, role) select id,'owner' from auth.users where email='homeafar26@gmail.com';

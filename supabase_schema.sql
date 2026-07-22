-- Tabelas para o site institucional (leads + contatos)
-- Rode isso no SQL Editor do Supabase, no mesmo projeto usado pelo SOH Assessment.

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  telefone text not null,
  email text not null,
  created_at timestamptz not null default now(),
  pdf_downloaded boolean not null default false
);

create table if not exists contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  created_at timestamptz not null default now(),
  status text not null default 'pending'
);

-- Ativa Row Level Security (recomendado por padrão no Supabase).
-- Como o backend usa a service_role key, ele ignora essas políticas
-- automaticamente — isso aqui só bloqueia acesso direto via chave pública (anon).
alter table leads enable row level security;
alter table contacts enable row level security;

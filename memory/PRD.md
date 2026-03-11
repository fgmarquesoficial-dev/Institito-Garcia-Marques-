# PRD - Instituto Garcia Marques Website

## Original Problem Statement
Criar um site institucional premium para o Instituto Garcia Marques, focado em desenvolvimento humano, formação, mentoria e educação corporativa. O site deve transmitir autoridade, sofisticação, clareza e impacto, posicionando o instituto como referência no mercado brasileiro.

## User Personas
1. **Empreendedores e Líderes**: Buscam desenvolvimento de alta performance e liderança transformacional
2. **Profissionais**: Querem crescimento pessoal, reprogramação mental e melhoria de autoimagem
3. **Empresas**: Interessadas em educação corporativa e desenvolvimento de equipes
4. **Pessoas em Transformação**: Desejam despertar seu potencial ilimitado

## Core Requirements (Static)
- Site institucional premium com paleta preto/branco/dourado
- Design minimalista e sofisticado
- Header fixo com navegação responsiva
- Hero section impactante com CTA forte
- Seções: Sobre, Filosofia, Valores, Programas, Corporativo, Depoimentos, Contato
- Integração com WhatsApp
- Formulário de contato funcional
- Footer completo
- Design responsivo

## What's Been Implemented (Dec 2025)
### Frontend - Concluído
- ✅ Header fixo com logo real do instituto e navegação suave
- ✅ Hero Section com overlay escuro para contraste, CTAs dourados, estatísticas
- ✅ Seção Sobre com grid de diferenciais e imagens premium
- ✅ Seção Filosofia com quote impactante em fundo escuro
- ✅ Seção Valores com 11 valores essenciais do instituto
- ✅ Seção Programas com 3 programas principais:
  - Quem Pensa Faz Acontecer (R$ 4.999 grupo)
  - Efeito Espelho (Solicite Proposta)
  - Clube do Livro (Solicite Proposta)
- ✅ Seção Corporativa com 4 soluções empresariais
- ✅ Seção Depoimentos com 3 testemunhos
- ✅ Seção Contato com formulário e informações
- ✅ Footer completo com links e redes sociais
- ✅ Botão WhatsApp flutuante
- ✅ Design premium com paleta institucional
- ✅ Imagens profissionais via Unsplash
- ✅ Todos componentes usando Shadcn UI
- ✅ Mock data estruturado em arquivo separado

### Technical Stack
- Frontend: React 19 com Shadcn UI
- Styling: Tailwind CSS com paleta customizada
- Icons: Lucide React
- Toast: Sonner
- Mock Data: /app/frontend/src/data/mock.js

## Prioritized Backlog

### P0 - Backend Development (Next Phase)
- [ ] MongoDB schemas para contatos e leads
- [ ] API endpoints para formulário de contato
- [ ] Integração de email (SendGrid/SMTP)
- [ ] Armazenamento de submissões no banco
- [ ] Validação de dados backend

### P1 - Enhancements
- [ ] Animações de entrada (Framer Motion)
- [ ] SEO optimization (meta tags, structured data)
- [ ] Google Analytics integration
- [ ] Performance optimization
- [ ] Blog section para conteúdos

### P2 - Advanced Features
- [ ] Admin dashboard para gerenciar leads
- [ ] Sistema de agendamento online
- [ ] Integração com CRM
- [ ] Newsletter subscription
- [ ] Galeria de resultados/casos de sucesso

## Next Tasks List
1. Validar design premium com usuário
2. Ajustes finais baseados em feedback
3. Desenvolver backend para formulário de contato
4. Integrar APIs reais (remover mock)
5. Testes end-to-end
6. Deploy em produção

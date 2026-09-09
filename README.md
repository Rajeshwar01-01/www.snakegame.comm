# CodeMentor — C / C++ / Java Learning Platform

Production-oriented Next.js + TypeScript architecture for an animated programming academy.

## Included
- Premium dark developer UI and responsive shell
- Animated landing page with code/terminal demo
- Language/topic/course cards
- Dashboard/progress model
- Compiler API contract with sandbox-ready backend boundary
- Supabase/PostgreSQL schema
- Auth flow design (email verification + GitHub OAuth)
- Reusable component architecture
- Accessibility/reduced-motion foundations

## Run
```bash
npm install
npm run dev
```

Create `.env.local` from `.env.example` and connect Supabase/auth + a sandboxed compiler service before enabling production features.

## Security
Never execute submitted C/C++/Java source in the Next.js process. Send jobs to an isolated execution service with CPU, memory, timeout, output, filesystem and network restrictions.

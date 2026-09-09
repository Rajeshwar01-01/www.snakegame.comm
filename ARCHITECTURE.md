# Architecture

Browser → Next.js UI/API → Auth + PostgreSQL/Supabase
                           ↘ compiler job queue → isolated runner → compiler image → result
                           ↘ object storage for videos/avatars/projects
                           ↘ transactional email provider
                           ↘ AI gateway (optional)

Compiler runner requirements: non-root container, seccomp/AppArmor or equivalent, no host mounts, no network, CPU/memory/PID limits, wall-clock timeout, read-only base filesystem, ephemeral workspace, max source/input/output sizes, rate limits, per-user quotas, audit logs.

Auth: Supabase Auth handles email verification and GitHub OAuth. Server-side routes enforce verified email where required; secrets remain server-side environment variables.

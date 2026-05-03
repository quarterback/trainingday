# Training Day

A personal reference app for frameworks, career stories, and vocabulary translations. Single-user, password-gated, deployable to Vercel.

The whole product spec is one line: when you need to recall something, you can find it in under ten seconds.

## Stack

- Next.js 14 (App Router, TypeScript)
- Drizzle ORM + `postgres` driver (works against Vercel Postgres, Supabase, Neon, or local Postgres)
- Tailwind CSS
- Single-password gate via Edge middleware (HMAC-signed cookie). No accounts.

## Quick start (local)

1. Install dependencies.
   ```
   npm install
   ```
2. Create `.env.local` from the example and fill in:
   - `DATABASE_URL` — any Postgres connection string
   - `APP_PASSWORD` — whatever you want as the gate
   - `AUTH_SECRET` — long random hex (`openssl rand -hex 32`)
   ```
   cp .env.example .env.local
   ```
3. Push the schema and seed initial content.
   ```
   npm run db:push
   npm run db:seed
   ```
4. Run dev.
   ```
   npm run dev
   ```
5. Open http://localhost:3000, you'll be redirected to `/login`. Enter `APP_PASSWORD`.

## Deploy to Vercel

1. Push this branch to GitHub. Connect the repo to Vercel.
2. Add a Postgres integration (Vercel Postgres, Neon, or Supabase) — copy `DATABASE_URL` into Vercel project env vars. Add `APP_PASSWORD` and `AUTH_SECRET` too.
3. From a local checkout pointed at the production database, run `npm run db:push` once to create the tables, and `npm run db:seed` to load initial content.
4. Vercel will auto-deploy on push to the branch.

## Data model

Three tables, all with `text[]` arrays for tags and pill-style fields. See `lib/schema.ts`.

- **frameworks** — name, category, one-liner, when-to-use, vocabulary, how-to-drop-in, common phrasing, notes, source, tags.
- **stories** — title, 30s/2m/5m versions, frameworks exemplified, thinkers in dialogue, questions it answers, reference sentence, notes, tags.
- **translations** — your term ↔ standard terms, explanation, when-to-use-yours, when-to-use-theirs, tags.

## What ships in the seed

- Ten framework entries, fully written: STAR, SCQA, Cynefin, JTBD, Wardley Mapping, RACI, Kotter 8-Step, Mark Moore Public Value, **Delivery Forensics**, **Trajectory Management**.
- Three translation rows: `delivery_forensics`, `trajectory_management`, and a meta-translation (`quality_movement_for_public_services`) that captures the positioning argument vis-à-vis Six Sigma / Lean / TQM.
- Stories table is intentionally empty — write your own.

## UI

- `/` — search across all three tables, plus a sidebar to filter by framework category and content type. Cards expand on click; Edit swaps in an inline form.
- `/login` — password gate.
- `/quiz` — random entry by category and type. Pre-interview review mode.

Search uses Postgres `ILIKE` substring match across name/title, one-liner, notes, vocabulary, tags, and other free-text fields. Upgrade to `tsvector` + GIN once the entry count justifies it.

## Adding entries

The "New entry" button on the main page accepts framework / story / translation. Edit-in-place on any card. The seed file is also editable — re-run `npm run db:seed` to upsert by natural key.

## Schema changes

After editing `lib/schema.ts`:

```
npm run db:push
```

Drizzle Kit syncs the schema to the database. No migration files are committed initially — add them with `drizzle-kit generate` once the schema stabilizes.

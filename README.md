# Training Day

A personal reference app for frameworks, career stories, and vocabulary translations. Single-user, deployable to Vercel.

The whole product spec is one line: when you need to recall something, you can find it in under ten seconds.

## Stack

- Next.js 14 (App Router, TypeScript)
- Drizzle ORM + `postgres` driver (works against Vercel Postgres, Supabase, Neon, or local Postgres)
- Tailwind CSS
- No auth. If you want the deployed app private, turn on Vercel's built-in **Password Protection** (Project → Settings → Deployment Protection) — it's the platform's job, not the app's.

## Quick start (local)

1. Install dependencies.
   ```
   npm install
   ```
2. Create `.env.local` from the example and put your Postgres URL in it.
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
5. Open http://localhost:3000.

## Deploy to Vercel

1. Push this branch to GitHub. Connect the repo to Vercel.
2. **Set the env var in Vercel project settings → Environment Variables** for Production (and Preview if you want):
   - `DATABASE_URL` — Postgres connection string (Vercel Postgres / Neon / Supabase)
3. **Push the schema to the production database.** From a local checkout, set `DATABASE_URL` in `.env.local` to the *production* connection string, then run:
   ```
   npm run db:push
   npm run db:seed
   ```
   (You can revert `.env.local` to your dev DB afterward.)
4. Trigger a redeploy from Vercel (or push a commit). The site should now load.
5. (Optional) If you don't want it public, turn on Vercel **Password Protection** in the project settings — that gives you a platform-level gate without any app code.

### Troubleshooting "nothing loads"

- **Build fails on Vercel** — check the Build Logs tab. Share them if it's not obvious.
- **Build succeeds, every page is a 500** — usually `DATABASE_URL` is missing or wrong. Confirm in Project → Settings → Environment Variables.
- **App loads but search returns 500** — schema isn't pushed to the prod DB. Run `npm run db:push` against the production `DATABASE_URL` from your laptop.

## Data model

Three tables, all with `text[]` arrays for tags and pill-style fields. See `lib/schema.ts`.

- **frameworks** — name, category, one-liner, when-to-use, vocabulary, how-to-drop-in, common phrasing, notes, source, tags.
- **stories** — title, 30s/2m/5m versions, frameworks exemplified, thinkers in dialogue, questions it answers, reference sentence, notes, tags.
- **translations** — your term ↔ standard terms, explanation, when-to-use-yours, when-to-use-theirs, tags.

## What ships in the seed

- 25 framework entries spanning interview, communication, strategy, product, change-management, public-sector, design, and design-research categories — including owner-authored Delivery Forensics and Trajectory Management.
- 4 translation rows that capture positioning moves (Delivery Forensics ↔ FMEA/GAO, Trajectory Management ↔ hoshin kanri/PDCA/SPC, the meta-translation about quality movement for public services, and the design-discipline umbrella across Design Thinking / HCD / Double Diamond / Lean UX / Service Design / 18F Methods).
- Stories table is intentionally empty — write your own.

## UI

- `/` — search across all tables, plus a sidebar to filter by category and content type. Cards expand on click; Edit swaps in an inline form.
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

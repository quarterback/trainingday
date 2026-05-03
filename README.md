# Training Day

A personal reference app for frameworks, career stories, vocabulary translations, and books. Single-user, deployable to Vercel.

The whole product spec is one line: when you need to recall something, you can find it in under ten seconds.

## Stack

- Next.js 14 (App Router, TypeScript)
- Drizzle ORM + `postgres` driver (works against Vercel Postgres, Supabase, Neon, or local Postgres)
- Tailwind CSS
- No login. If you want the deployed app private, turn on Vercel's built-in **Password Protection** (Project → Settings → Deployment Protection) — it's the platform's job, not the app's.

## Deploy from the Vercel web UI (no terminal required)

This is the path if you don't want to touch a command line.

1. **Connect the repo to Vercel.** New Project → import this GitHub repo → deploy.
2. **Add a Postgres database.** Vercel → Storage → Create → Postgres (or Neon). Vercel will set `DATABASE_URL` automatically. If you use a different provider, paste the connection string into Project → Settings → Environment Variables as `DATABASE_URL`. Make sure all three environments (Production / Preview / Development) are checked.
3. **Add an admin token.** Project → Settings → Environment Variables → add `ADMIN_TOKEN` with a long random value (any 32+ character string you'll remember or store in a password manager). Check all three environments. This token gates the in-app setup actions.
4. **Redeploy.** Deployments tab → ⋯ on the latest → Redeploy. Wait for it to go green.
5. **Open `/admin` on the deployed URL.** Paste the `ADMIN_TOKEN` value, click Save, then run the three buttons in order:
   1. **Initialize database schema** — creates the four tables. Idempotent.
   2. **Seed framework & translation content** — loads the 25 frameworks and 4 translations.
   3. **Import books from Literal** — pulls your `FINISHED` shelf (default handle `ron`; override per-call from the page).
6. Done. Go to `/` and search.

After this, all three actions can be re-run any time from `/admin` (e.g. when you push schema changes or want to pull new books from Literal).

### Troubleshooting

- **Build fails on Vercel** — check the Build Logs tab. Share the log if it's not obvious.
- **App loads but every page is a 500** — `DATABASE_URL` is missing or wrong, OR the schema hasn't been initialized yet. Confirm the env var, then visit `/admin` and run "Initialize database schema."
- **`/admin` actions return 503** — `ADMIN_TOKEN` isn't set in Vercel env vars. Add it and redeploy.
- **`/admin` actions return 401** — token mismatch. Re-paste the token on the admin page.

## Local dev (optional, for editing seed content or schema)

If you do want to work locally:

```
npm install
cp .env.example .env.local       # fill in DATABASE_URL, ADMIN_TOKEN
npm run db:push                  # create tables
npm run db:seed                  # seed frameworks/translations
npm run dev                      # http://localhost:3000
```

Local equivalents to the admin buttons:

| Admin page button         | npm script              |
| ------------------------- | ----------------------- |
| Initialize database       | `npm run db:push`       |
| Seed content              | `npm run db:seed`       |
| Import from Literal       | `npm run import:literal`|

## Data model

Four tables, all with `text[]` arrays for tags and pill-style fields. See `lib/schema.ts`.

- **frameworks** — name, category, one-liner, when-to-use, vocabulary, how-to-drop-in, common phrasing, notes, source, tags.
- **stories** — title, 30s/2m/5m versions, frameworks exemplified, thinkers in dialogue, questions it answers, reference sentence, notes, tags.
- **translations** — your term ↔ standard terms, explanation, when-to-use-yours, when-to-use-theirs, tags.
- **books** — title, author, category, one-liner, how-to-reference, when-to-invoke, pairs-with, notes, tags, plus Literal metadata (ISBN, slug, id) and a `source` field. Unique on (title, author) so imports are idempotent.

## What ships in the seed

- 25 framework entries spanning interview, communication, strategy, product, change-management, public-sector, design, and design-research categories — including owner-authored Delivery Forensics and Trajectory Management.
- 4 translation rows that capture positioning moves (Delivery Forensics ↔ FMEA/GAO, Trajectory Management ↔ hoshin kanri/PDCA/SPC, the meta-translation about quality movement for public services, and the design-discipline umbrella across Design Thinking / HCD / Double Diamond / Lean UX / Service Design / 18F Methods).
- Stories and books tables are intentionally empty — populate stories by hand and books via the Literal import.

## UI

- `/` — search across all tables, plus a sidebar to filter by category and content type. Cards expand on click; Edit swaps in an inline form.
- `/quiz` — random entry by category and type. Pre-interview review mode.
- `/admin` — setup/seed/import actions for web-only operation.

Search uses Postgres `ILIKE` substring match across name/title, one-liner, notes, vocabulary, tags, and other free-text fields. Upgrade to `tsvector` + GIN once the entry count justifies it.

## Adding entries

The "New entry" button on the main page accepts framework / story / translation / book. Edit-in-place on any card. The seed file is also editable — re-run the seed action (admin button or `npm run db:seed`) to upsert by natural key.

## Schema changes

After editing `lib/schema.ts`, you have two equivalent paths:

- **Web:** push to GitHub → Vercel auto-deploys → visit `/admin` → click "Initialize database schema." `lib/setup-sql.ts` mirrors the schema as `CREATE TABLE IF NOT EXISTS` statements; **add ALTER TABLE statements there** for any field additions, since `IF NOT EXISTS` won't update an existing table's columns.
- **Local:** `npm run db:push` (drizzle-kit handles diffs and ALTER statements automatically).

For breaking changes, the local path is safer.

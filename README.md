# Training Day

A personal reference app for frameworks, career stories, vocabulary translations, and books.

When you need to recall something, you can find it in under ten seconds. That's the whole spec.

## How it works

Pure static site. Content lives in `data/*.ts` files in this repo. Pages render at build time. Search filters client-side. No database, no API routes, no auth, no env vars.

To add or edit content:

1. Open the relevant file on GitHub:
   - `data/frameworks.ts` — frameworks (the body of work)
   - `data/translations.ts` — vocabulary bridges
   - `data/stories.ts` — career stories
   - `data/books.ts` — books you'd reference
2. Click the pencil icon to edit in GitHub's web editor.
3. Add an entry following the existing pattern.
4. Commit. Vercel auto-rebuilds in about a minute.

## Stack

- Next.js 14 (App Router, TypeScript) — gets you a snappy SPA-like experience and Vercel auto-deploys
- Tailwind CSS
- Nothing else

## Data shapes

See `lib/types.ts` for the full type definitions. Every field except the headline ones (`name`/`title`/`yourTerm`/`category`/`author`) is optional — leave anything you don't want to write yet undefined.

## UI

- `/` — search across everything; sidebar filters by category and content type. Click a card to expand it.
- `/quiz` — random entry by category and type. Pre-interview review mode.

## Deploy

Already on Vercel. The included `vercel.json` pins the framework preset to Next.js. After any commit to this branch, Vercel rebuilds and redeploys automatically.

## Local dev (optional)

```
npm install
npm run dev
```

Open http://localhost:3000.

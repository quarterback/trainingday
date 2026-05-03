import { eq } from "drizzle-orm";
import { db } from "./db";
import { frameworks, stories, translations } from "./schema";
import { seedFrameworks } from "../seed/frameworks";
import { seedStories } from "../seed/stories";
import { seedTranslations } from "../seed/translations";

export interface SeedReport {
  frameworks: { inserted: number; updated: number };
  stories: { inserted: number; updated: number };
  translations: { inserted: number; updated: number };
}

// Idempotent upserts keyed on the natural identifier of each table:
// frameworks.name, stories.title, translations.your_term. Re-running picks
// up edits to the seed files without producing duplicates.
export async function runSeed(): Promise<SeedReport> {
  const report: SeedReport = {
    frameworks: { inserted: 0, updated: 0 },
    stories: { inserted: 0, updated: 0 },
    translations: { inserted: 0, updated: 0 },
  };

  for (const f of seedFrameworks) {
    const [existing] = await db
      .select({ id: frameworks.id })
      .from(frameworks)
      .where(eq(frameworks.name, f.name));
    if (existing) {
      await db
        .update(frameworks)
        .set({ ...f, updatedAt: new Date() })
        .where(eq(frameworks.id, existing.id));
      report.frameworks.updated++;
    } else {
      await db.insert(frameworks).values(f);
      report.frameworks.inserted++;
    }
  }

  for (const s of seedStories) {
    const [existing] = await db
      .select({ id: stories.id })
      .from(stories)
      .where(eq(stories.title, s.title));
    if (existing) {
      await db
        .update(stories)
        .set({ ...s, updatedAt: new Date() })
        .where(eq(stories.id, existing.id));
      report.stories.updated++;
    } else {
      await db.insert(stories).values(s);
      report.stories.inserted++;
    }
  }

  for (const t of seedTranslations) {
    const [existing] = await db
      .select({ id: translations.id })
      .from(translations)
      .where(eq(translations.yourTerm, t.yourTerm));
    if (existing) {
      await db
        .update(translations)
        .set({ ...t, updatedAt: new Date() })
        .where(eq(translations.id, existing.id));
      report.translations.updated++;
    } else {
      await db.insert(translations).values(t);
      report.translations.inserted++;
    }
  }

  return report;
}

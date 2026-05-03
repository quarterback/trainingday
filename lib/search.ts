import { sql } from "drizzle-orm";
import { db } from "./db";
import { frameworks, stories, translations } from "./schema";
import type { SearchResults } from "./types";

const LIMIT = 50;

export async function searchAll(q: string, category?: string): Promise<SearchResults> {
  const term = q.trim();
  const like = `%${term}%`;
  const hasQuery = term.length > 0;
  const hasCategory = !!category && category !== "all";

  const fwRows = await db
    .select()
    .from(frameworks)
    .where(
      sql`
        ${hasQuery ? sql`(
          ${frameworks.name} ILIKE ${like}
          OR ${frameworks.oneLiner} ILIKE ${like}
          OR coalesce(${frameworks.notes}, '') ILIKE ${like}
          OR coalesce(${frameworks.whenToUse}, '') ILIKE ${like}
          OR coalesce(${frameworks.howToDropIn}, '') ILIKE ${like}
          OR coalesce(${frameworks.commonPhrasing}, '') ILIKE ${like}
          OR coalesce(${frameworks.source}, '') ILIKE ${like}
          OR coalesce(array_to_string(${frameworks.vocabulary}, ' '), '') ILIKE ${like}
          OR coalesce(array_to_string(${frameworks.tags}, ' '), '') ILIKE ${like}
        )` : sql`true`}
        ${hasCategory ? sql`AND ${frameworks.category} = ${category}` : sql``}
      `,
    )
    .orderBy(frameworks.name)
    .limit(LIMIT);

  const stRows = await db
    .select()
    .from(stories)
    .where(
      hasQuery
        ? sql`
            ${stories.title} ILIKE ${like}
            OR ${stories.twoMinuteVersion} ILIKE ${like}
            OR coalesce(${stories.notes}, '') ILIKE ${like}
            OR coalesce(${stories.referenceSentence}, '') ILIKE ${like}
            OR coalesce(array_to_string(${stories.questionsItAnswers}, ' '), '') ILIKE ${like}
            OR coalesce(array_to_string(${stories.frameworksExemplified}, ' '), '') ILIKE ${like}
            OR coalesce(array_to_string(${stories.thinkersInDialogue}, ' '), '') ILIKE ${like}
            OR coalesce(array_to_string(${stories.tags}, ' '), '') ILIKE ${like}
          `
        : sql`true`,
    )
    .orderBy(stories.title)
    .limit(LIMIT);

  const trRows = await db
    .select()
    .from(translations)
    .where(
      hasQuery
        ? sql`
            ${translations.yourTerm} ILIKE ${like}
            OR coalesce(${translations.explanation}, '') ILIKE ${like}
            OR coalesce(${translations.whenToUseYours}, '') ILIKE ${like}
            OR coalesce(${translations.whenToUseTheirs}, '') ILIKE ${like}
            OR coalesce(array_to_string(${translations.standardTerms}, ' '), '') ILIKE ${like}
            OR coalesce(array_to_string(${translations.tags}, ' '), '') ILIKE ${like}
          `
        : sql`true`,
    )
    .orderBy(translations.yourTerm)
    .limit(LIMIT);

  return { frameworks: fwRows, stories: stRows, translations: trRows };
}

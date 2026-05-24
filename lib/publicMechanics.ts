// Public Mechanics Concept Cards — self-contained content model.
// Kept separate from the glossary types (lib/types.ts) so this whole
// section (lib + data/concepts.ts + data/cases.ts + components +
// app/public-mechanics) can be lifted out into the standalone site later.

export type CardStatus = "stable" | "working" | "deprecated";
export type CardScale = "individual" | "institutional" | "substrate";
export type CardRole = "diagnostic" | "prescriptive" | "structural";

export interface PMSource {
  title: string;
  url?: string;
}

export interface WorkedExample {
  caseSlug?: string; // links to a Case by slug
  name: string;
  text: string;
}

export interface ConceptAtWork {
  conceptSlug?: string; // links to a ConceptCard by slug
  name: string;
  text: string;
}

export interface ConceptCard {
  // frontmatter
  slug: string;
  title: string;
  shortTitle?: string;
  id: string; // PMCC-001 — stable citation handle, never reuse
  status: CardStatus;
  lastRevised: string; // ISO date
  author: string;
  introduced?: number | null;
  domains: string[];
  scale: CardScale;
  role: CardRole;
  relatedConcepts: string[]; // slugs
  cases: string[]; // slugs
  sources?: PMSource[];
  inheritedFrom?: string | null;
  // body
  whatItNames: string;
  whenSeeingIt: string[];
  howToApply: string;
  workedExamples: WorkedExample[];
  relatedNote: string;
  provenance: string;
}

export interface CaseStudy {
  // frontmatter
  slug: string;
  title: string;
  id: string; // PMCS-001
  status: CardStatus;
  lastRevised: string;
  domains: string[];
  conceptsIllustrated: string[]; // slugs
  primaryConcept: string; // slug
  sources?: PMSource[];
  // body
  situation: string;
  whatsActuallyHappening: string;
  conceptsAtWork: ConceptAtWork[];
  whyItMatters: string;
}

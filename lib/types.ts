// Plain TypeScript types for the four content kinds. Pure data — no ORM,
// no schema, no DB. Edit the files in /data, push to GitHub, Vercel
// rebuilds.

export interface Framework {
  name: string;
  category: string;
  oneLiner: string;
  whenToUse?: string;
  vocabulary?: string[];
  howToDropIn?: string;
  commonPhrasing?: string;
  notes?: string;
  source?: string;
  tags?: string[];
}

export interface StarAnswer {
  competency: string;
  prompt: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  learnings?: string;
}

export interface Story {
  title: string;
  twoMinuteVersion: string;
  thirtySecondVersion?: string;
  fiveMinuteVersion?: string;
  starAnswers?: StarAnswer[];
  frameworksExemplified?: string[];
  thinkersInDialogue?: string[];
  questionsItAnswers?: string[];
  referenceSentence?: string;
  notes?: string;
  tags?: string[];
}

export interface Translation {
  yourTerm: string;
  standardTerms: string[];
  explanation?: string;
  whenToUseYours?: string;
  whenToUseTheirs?: string;
  tags?: string[];
}

export interface Book {
  title: string;
  author: string;
  category?: string;
  oneLiner?: string;
  howToReference?: string;
  whenToInvoke?: string;
  pairsWith?: string[];
  notes?: string;
  tags?: string[];
}

export type EntryType = "framework" | "story" | "translation" | "book";

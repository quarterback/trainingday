"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Book, EntryType, Framework, Story, Translation } from "@/lib/types";

interface Props {
  frameworks: Framework[];
  stories: Story[];
  translations: Translation[];
  books: Book[];
}

type Entry =
  | { type: "framework"; entry: Framework }
  | { type: "story"; entry: Story }
  | { type: "translation"; entry: Translation }
  | { type: "book"; entry: Book };

function pickRandom<T>(items: T[]): T | null {
  if (items.length === 0) return null;
  return items[Math.floor(Math.random() * items.length)];
}

export default function QuizClient({ frameworks, stories, translations, books }: Props) {
  const params = useSearchParams();
  const [type, setType] = useState<EntryType>((params.get("type") as EntryType) ?? "framework");
  const [category, setCategory] = useState<string | null>(params.get("category"));
  const [current, setCurrent] = useState<Entry | null>(null);

  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const f of frameworks) set.add(f.category);
    for (const b of books) if (b.category) set.add(b.category);
    return Array.from(set).sort();
  }, [frameworks, books]);

  const next = useCallback(() => {
    if (type === "framework") {
      const pool = category ? frameworks.filter((f) => f.category === category) : frameworks;
      const picked = pickRandom(pool);
      setCurrent(picked ? { type: "framework", entry: picked } : null);
    } else if (type === "story") {
      const picked = pickRandom(stories);
      setCurrent(picked ? { type: "story", entry: picked } : null);
    } else if (type === "translation") {
      const picked = pickRandom(translations);
      setCurrent(picked ? { type: "translation", entry: picked } : null);
    } else {
      const pool = category ? books.filter((b) => b.category === category) : books;
      const picked = pickRandom(pool);
      setCurrent(picked ? { type: "book", entry: picked } : null);
    }
  }, [type, category, frameworks, stories, translations, books]);

  useEffect(() => {
    next();
  }, [next]);

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-4 px-6 py-6">
      <header className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Quiz</h1>
        <Link
          href="/"
          className="rounded border border-neutral-300 px-3 py-1 text-sm text-neutral-700 hover:bg-neutral-100"
        >
          Back to search
        </Link>
      </header>

      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="text-xs uppercase tracking-wider text-neutral-500">Type</span>
        {(["framework", "story", "translation", "book"] as EntryType[]).map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`rounded border px-2 py-1 text-xs capitalize ${
              type === t
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-300 text-neutral-700 hover:bg-neutral-100"
            }`}
          >
            {t}
          </button>
        ))}

        {(type === "framework" || type === "book") && (
          <>
            <span className="ml-4 text-xs uppercase tracking-wider text-neutral-500">Category</span>
            <button
              onClick={() => setCategory(null)}
              className={`rounded border px-2 py-1 text-xs ${
                category === null
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-neutral-300 text-neutral-700 hover:bg-neutral-100"
              }`}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded border px-2 py-1 text-xs capitalize ${
                  category === c
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-300 text-neutral-700 hover:bg-neutral-100"
                }`}
              >
                {c}
              </button>
            ))}
          </>
        )}
      </div>

      <div className="rounded-md border border-neutral-200 bg-white p-6">
        {!current && (
          <div className="text-sm text-neutral-500">
            No entries match. Edit <code>data/*.ts</code> in the repo to add entries.
          </div>
        )}
        {current?.type === "framework" && <FrameworkQuizCard f={current.entry} />}
        {current?.type === "story" && <StoryQuizCard s={current.entry} />}
        {current?.type === "translation" && <TranslationQuizCard t={current.entry} />}
        {current?.type === "book" && <BookQuizCard b={current.entry} />}
      </div>

      <button
        onClick={next}
        className="self-end rounded bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-neutral-700"
      >
        Next →
      </button>
    </main>
  );
}

function FrameworkQuizCard({ f }: { f: Framework }) {
  return (
    <div className="space-y-3">
      <div>
        <div className="text-xs uppercase tracking-wider text-neutral-500">{f.category}</div>
        <h2 className="text-2xl font-semibold text-neutral-900">{f.name}</h2>
      </div>
      <p className="text-base text-neutral-800">{f.oneLiner}</p>
      {f.whenToUse && (
        <p className="text-sm text-neutral-700">
          <span className="font-semibold">When to use: </span>
          {f.whenToUse}
        </p>
      )}
      {f.howToDropIn && (
        <p className="text-sm text-neutral-700">
          <span className="font-semibold">Drop-in: </span>
          {f.howToDropIn}
        </p>
      )}
      {f.vocabulary && f.vocabulary.length > 0 && (
        <p className="text-sm text-neutral-700">
          <span className="font-semibold">Vocabulary: </span>
          {f.vocabulary.join(", ")}
        </p>
      )}
    </div>
  );
}

function StoryQuizCard({ s }: { s: Story }) {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold text-neutral-900">{s.title}</h2>
      {s.referenceSentence && (
        <p className="text-sm italic text-neutral-700">{s.referenceSentence}</p>
      )}
      <p className="whitespace-pre-wrap text-base text-neutral-800">{s.twoMinuteVersion}</p>
    </div>
  );
}

function TranslationQuizCard({ t }: { t: Translation }) {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold text-neutral-900">{t.yourTerm}</h2>
      <p className="text-base text-neutral-800">↔ {t.standardTerms.join(", ")}</p>
      {t.explanation && <p className="text-sm text-neutral-700">{t.explanation}</p>}
    </div>
  );
}

function BookQuizCard({ b }: { b: Book }) {
  return (
    <div className="space-y-3">
      <div>
        {b.category && (
          <div className="text-xs uppercase tracking-wider text-neutral-500">{b.category}</div>
        )}
        <h2 className="text-2xl font-semibold text-neutral-900">{b.title}</h2>
        <p className="text-sm text-neutral-700">{b.author}</p>
      </div>
      {b.oneLiner && <p className="text-base text-neutral-800">{b.oneLiner}</p>}
      {b.howToReference && (
        <p className="text-sm text-neutral-700">
          <span className="font-semibold">How to reference: </span>
          {b.howToReference}
        </p>
      )}
      {b.whenToInvoke && (
        <p className="text-sm text-neutral-700">
          <span className="font-semibold">When to invoke: </span>
          {b.whenToInvoke}
        </p>
      )}
    </div>
  );
}

"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { EntryType } from "@/lib/types";
import type { Framework, Story, Translation } from "@/lib/schema";

type QuizResponse =
  | { type: "framework"; entry: Framework | null }
  | { type: "story"; entry: Story | null }
  | { type: "translation"; entry: Translation | null };

export default function QuizPage() {
  const params = useSearchParams();
  const [type, setType] = useState<EntryType>((params.get("type") as EntryType) ?? "framework");
  const [category, setCategory] = useState<string | null>(params.get("category"));
  const [categories, setCategories] = useState<string[]>([]);
  const [data, setData] = useState<QuizResponse | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/categories")
      .then((r) => r.json())
      .then(setCategories)
      .catch(() => {});
  }, []);

  const next = useCallback(async () => {
    setLoading(true);
    try {
      const sp = new URLSearchParams();
      sp.set("type", type);
      if (category && category !== "all") sp.set("category", category);
      const res = await fetch(`/api/quiz?${sp.toString()}`);
      setData((await res.json()) as QuizResponse);
    } finally {
      setLoading(false);
    }
  }, [type, category]);

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
        {(["framework", "story", "translation"] as EntryType[]).map((t) => (
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

        {type === "framework" && (
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
        {loading && <div className="text-sm text-neutral-500">Loading…</div>}
        {!loading && data?.entry === null && (
          <div className="text-sm text-neutral-500">
            No entries match. Add some from the main page.
          </div>
        )}
        {!loading && data?.entry && data.type === "framework" && (
          <FrameworkQuizCard f={data.entry} />
        )}
        {!loading && data?.entry && data.type === "story" && <StoryQuizCard s={data.entry} />}
        {!loading && data?.entry && data.type === "translation" && (
          <TranslationQuizCard t={data.entry} />
        )}
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

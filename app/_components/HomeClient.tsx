"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchBar } from "@/components/SearchBar";
import { Sidebar } from "@/components/Sidebar";
import { FrameworkCard } from "@/components/FrameworkCard";
import { StoryCard } from "@/components/StoryCard";
import { TranslationCard } from "@/components/TranslationCard";
import { BookCard } from "@/components/BookCard";
import type { Book, EntryType, Framework, Story, Translation } from "@/lib/types";

interface Props {
  frameworks: Framework[];
  stories: Story[];
  translations: Translation[];
  books: Book[];
}

function matchesQuery(haystack: Array<string | string[] | undefined | null>, q: string): boolean {
  if (!q) return true;
  const needle = q.toLowerCase();
  for (const piece of haystack) {
    if (!piece) continue;
    const text = Array.isArray(piece) ? piece.join(" ") : piece;
    if (text.toLowerCase().includes(needle)) return true;
  }
  return false;
}

export default function HomeClient({ frameworks, stories, translations, books }: Props) {
  const router = useRouter();
  const params = useSearchParams();

  const [q, setQ] = useState(params.get("q") ?? "");
  const [category, setCategory] = useState<string | null>(params.get("category"));
  const [type, setType] = useState<"all" | EntryType>(
    (params.get("type") as "all" | EntryType) ?? "all",
  );

  useEffect(() => {
    const sp = new URLSearchParams();
    if (q) sp.set("q", q);
    if (category) sp.set("category", category);
    if (type !== "all") sp.set("type", type);
    const next = sp.toString();
    router.replace(next ? `/?${next}` : "/", { scroll: false });
  }, [q, category, type, router]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const f of frameworks) set.add(f.category);
    for (const b of books) if (b.category) set.add(b.category);
    return Array.from(set).sort();
  }, [frameworks, books]);

  const filteredFrameworks = useMemo(
    () =>
      frameworks.filter(
        (f) =>
          (!category || f.category === category) &&
          matchesQuery(
            [
              f.name,
              f.oneLiner,
              f.notes,
              f.whenToUse,
              f.howToDropIn,
              f.commonPhrasing,
              f.source,
              f.vocabulary,
              f.tags,
            ],
            q,
          ),
      ),
    [frameworks, category, q],
  );

  const filteredStories = useMemo(
    () =>
      stories.filter((s) =>
        matchesQuery(
          [
            s.title,
            s.twoMinuteVersion,
            s.notes,
            s.referenceSentence,
            s.questionsItAnswers,
            s.frameworksExemplified,
            s.thinkersInDialogue,
            s.tags,
          ],
          q,
        ),
      ),
    [stories, q],
  );

  const filteredTranslations = useMemo(
    () =>
      translations.filter((t) =>
        matchesQuery(
          [
            t.yourTerm,
            t.explanation,
            t.whenToUseYours,
            t.whenToUseTheirs,
            t.standardTerms,
            t.tags,
          ],
          q,
        ),
      ),
    [translations, q],
  );

  const filteredBooks = useMemo(
    () =>
      books.filter(
        (b) =>
          (!category || b.category === category) &&
          matchesQuery(
            [
              b.title,
              b.author,
              b.oneLiner,
              b.howToReference,
              b.whenToInvoke,
              b.notes,
              b.pairsWith,
              b.tags,
            ],
            q,
          ),
      ),
    [books, category, q],
  );

  const showFrameworks = type === "all" || type === "framework";
  const showStories = type === "all" || type === "story";
  const showTranslations = type === "all" || type === "translation";
  const showBooks = type === "all" || type === "book";
  const categoryActive = !!category;

  const totalCount =
    (showFrameworks ? filteredFrameworks.length : 0) +
    (showStories && !categoryActive ? filteredStories.length : 0) +
    (showTranslations && !categoryActive ? filteredTranslations.length : 0) +
    (showBooks ? filteredBooks.length : 0);

  return (
    <div className="flex min-h-screen">
      <Sidebar
        categories={categories}
        selectedCategory={category}
        onSelectCategory={setCategory}
        selectedType={type}
        onSelectType={setType}
      />
      <main className="flex-1 px-6 py-6">
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          <header className="flex items-center justify-between gap-4">
            <h1 className="text-lg font-semibold">Training Day</h1>
            <div className="flex items-center gap-2">
              <Link
                href="/quiz"
                className="rounded border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-100"
              >
                Quiz me
              </Link>
            </div>
          </header>

          <SearchBar value={q} onChange={setQ} />

          <div className="text-xs text-neutral-500">
            {totalCount} result{totalCount === 1 ? "" : "s"}
          </div>

          <div className="flex flex-col gap-2">
            {showFrameworks &&
              filteredFrameworks.map((f) => <FrameworkCard key={`f-${f.name}`} framework={f} />)}
            {showBooks &&
              filteredBooks.map((b) => (
                <BookCard key={`b-${b.title}-${b.author}`} book={b} />
              ))}
            {showStories &&
              !categoryActive &&
              filteredStories.map((s) => <StoryCard key={`s-${s.title}`} story={s} />)}
            {showTranslations &&
              !categoryActive &&
              filteredTranslations.map((t) => (
                <TranslationCard key={`t-${t.yourTerm}`} translation={t} />
              ))}
            {totalCount === 0 && (
              <div className="rounded-md border border-dashed border-neutral-300 p-6 text-center text-sm text-neutral-500">
                No results. Edit <code>data/*.ts</code> in the repo to add entries.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

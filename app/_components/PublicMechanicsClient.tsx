"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { ConceptCardView } from "@/components/ConceptCardView";
import { CaseStudyView } from "@/components/CaseStudyView";
import type { CaseStudy, ConceptCard } from "@/lib/publicMechanics";

interface Props {
  concepts: ConceptCard[];
  cases: CaseStudy[];
}

type View = "all" | "concepts" | "cases";

function matches(haystack: Array<string | string[] | undefined | null>, q: string): boolean {
  if (!q) return true;
  const needle = q.toLowerCase();
  for (const piece of haystack) {
    if (!piece) continue;
    const text = Array.isArray(piece) ? piece.join(" ") : piece;
    if (text.toLowerCase().includes(needle)) return true;
  }
  return false;
}

export default function PublicMechanicsClient({ concepts, cases }: Props) {
  const [q, setQ] = useState("");
  const [view, setView] = useState<View>("all");
  const [domain, setDomain] = useState<string | null>(null);
  const [scale, setScale] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  const domains = useMemo(() => {
    const set = new Set<string>();
    for (const c of concepts) for (const d of c.domains) set.add(d);
    return Array.from(set).sort();
  }, [concepts]);

  const scales = ["individual", "institutional", "substrate"];
  const roles = ["diagnostic", "prescriptive", "structural"];

  const filteredConcepts = useMemo(
    () =>
      concepts.filter(
        (c) =>
          (!domain || c.domains.includes(domain)) &&
          (!scale || c.scale === scale) &&
          (!role || c.role === role) &&
          matches(
            [c.title, c.shortTitle, c.whatItNames, c.howToApply, c.relatedNote, c.provenance, c.whenSeeingIt, c.domains, c.id],
            q,
          ),
      ),
    [concepts, domain, scale, role, q],
  );

  const filteredCases = useMemo(
    () =>
      cases.filter((c) =>
        matches(
          [c.title, c.situation, c.whatsActuallyHappening, c.whyItMatters, c.domains, c.conceptsIllustrated, c.id],
          q,
        ),
      ),
    [cases, q],
  );

  const showConcepts = view === "all" || view === "concepts";
  const showCases = view === "all" || view === "cases";
  // domain/scale/role facets apply to concepts; when a concept facet is active, cases are hidden.
  const facetActive = !!domain || !!scale || !!role;
  const visibleCases = showCases && !facetActive ? filteredCases : [];

  const chip = (label: string, active: boolean, onClick: () => void) => (
    <button
      key={label}
      onClick={onClick}
      className={`rounded-full border px-2.5 py-0.5 text-xs ${
        active
          ? "border-neutral-800 bg-neutral-800 text-white"
          : "border-neutral-300 text-neutral-600 hover:bg-neutral-100"
      }`}
    >
      {label}
    </button>
  );

  return (
    <main className="min-h-screen px-6 py-6">
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        <header className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-lg font-semibold">Public Mechanics — Concept Cards</h1>
            <p className="text-xs text-neutral-500">
              A field guide to the Public Mechanics vocabulary. Cards name concepts; cases ground them.
            </p>
          </div>
          <Link
            href="/"
            className="shrink-0 rounded border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-100"
          >
            ← Training Day
          </Link>
        </header>

        <SearchBar value={q} onChange={setQ} />

        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-1">
            <span className="mr-1 text-[11px] uppercase tracking-wider text-neutral-400">Show</span>
            {chip("All", view === "all", () => setView("all"))}
            {chip("Concepts", view === "concepts", () => setView("concepts"))}
            {chip("Cases", view === "cases", () => setView("cases"))}
          </div>
          <div className="flex flex-wrap items-center gap-1">
            <span className="mr-1 text-[11px] uppercase tracking-wider text-neutral-400">Domain</span>
            {chip("any", !domain, () => setDomain(null))}
            {domains.map((d) => chip(d, domain === d, () => setDomain(domain === d ? null : d)))}
          </div>
          <div className="flex flex-wrap items-center gap-1">
            <span className="mr-1 text-[11px] uppercase tracking-wider text-neutral-400">Scale</span>
            {chip("any", !scale, () => setScale(null))}
            {scales.map((s) => chip(s, scale === s, () => setScale(scale === s ? null : s)))}
          </div>
          <div className="flex flex-wrap items-center gap-1">
            <span className="mr-1 text-[11px] uppercase tracking-wider text-neutral-400">Role</span>
            {chip("any", !role, () => setRole(null))}
            {roles.map((r) => chip(r, role === r, () => setRole(role === r ? null : r)))}
          </div>
        </div>

        {showConcepts && (
          <section className="flex flex-col gap-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Concepts ({filteredConcepts.length})
            </h2>
            {filteredConcepts.map((c) => (
              <ConceptCardView key={c.slug} concept={c} />
            ))}
            {filteredConcepts.length === 0 && (
              <div className="rounded-md border border-dashed border-neutral-300 p-4 text-center text-sm text-neutral-500">
                No concepts match.
              </div>
            )}
          </section>
        )}

        {showCases && (
          <section className="flex flex-col gap-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Cases ({visibleCases.length})
              {facetActive && <span className="ml-2 normal-case tracking-normal text-neutral-400">(clear domain/scale/role to show cases)</span>}
            </h2>
            {visibleCases.map((c) => (
              <CaseStudyView key={c.slug} caseStudy={c} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}

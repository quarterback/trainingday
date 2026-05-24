"use client";

import { useState } from "react";
import type { ConceptCard } from "@/lib/publicMechanics";

const statusStyles: Record<string, string> = {
  stable: "bg-green-100 text-green-800",
  working: "bg-amber-100 text-amber-800",
  deprecated: "bg-red-100 text-red-800",
};

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{label}</div>
      <div className="mt-1 text-sm text-neutral-800">{children}</div>
    </div>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1">
      {items.map((item) => (
        <span key={item} className="rounded bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700">
          {item}
        </span>
      ))}
    </div>
  );
}

export function ConceptCardView({ concept }: { concept: ConceptCard }) {
  const [open, setOpen] = useState(false);
  return (
    <div id={concept.slug} className="scroll-mt-4 rounded-md border border-neutral-200 bg-white">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-baseline justify-between gap-4 px-4 py-3 text-left hover:bg-neutral-50"
      >
        <div>
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-base font-semibold text-neutral-900">{concept.title}</span>
            <span className="font-mono text-xs text-neutral-400">{concept.id}</span>
            <span className={`rounded px-1.5 py-0.5 text-[10px] uppercase tracking-wider ${statusStyles[concept.status] ?? "bg-neutral-100 text-neutral-700"}`}>
              {concept.status}
            </span>
          </div>
          <p className="mt-1 text-sm text-neutral-700">{concept.whatItNames}</p>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-wider text-neutral-400">
            <span>{concept.scale}</span>
            <span>{concept.role}</span>
            <span className="normal-case tracking-normal text-neutral-500">{concept.domains.join(" · ")}</span>
          </div>
        </div>
        <span className="text-xs text-neutral-400">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="space-y-4 border-t border-neutral-200 px-4 py-4">
          <Section label="When you're seeing it">
            <ul className="list-disc space-y-1 pl-5">
              {concept.whenSeeingIt.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </Section>

          <Section label="How to apply it">
            <p className="whitespace-pre-wrap">{concept.howToApply}</p>
          </Section>

          {concept.workedExamples.length > 0 && (
            <Section label="Worked examples">
              <div className="space-y-2">
                {concept.workedExamples.map((ex, i) => (
                  <div key={i}>
                    <a href={ex.caseSlug ? `#${ex.caseSlug}` : undefined} className="font-medium text-neutral-900 underline-offset-2 hover:underline">
                      {ex.name}
                    </a>
                    <p className="text-neutral-800">{ex.text}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}

          <Section label="Related concepts">
            <p className="whitespace-pre-wrap">{concept.relatedNote}</p>
            {concept.relatedConcepts.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {concept.relatedConcepts.map((slug) => (
                  <a key={slug} href={`#${slug}`} className="rounded bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700 hover:bg-neutral-200">
                    {slug}
                  </a>
                ))}
              </div>
            )}
          </Section>

          {concept.cases.length > 0 && (
            <Section label="Cases">
              <div className="flex flex-wrap gap-1">
                {concept.cases.map((slug) => (
                  <a key={slug} href={`#${slug}`} className="rounded bg-blue-50 px-2 py-0.5 text-xs text-blue-700 hover:bg-blue-100">
                    {slug}
                  </a>
                ))}
              </div>
            </Section>
          )}

          <Section label="Provenance">
            <p className="whitespace-pre-wrap">{concept.provenance}</p>
            {concept.inheritedFrom && (
              <p className="mt-1 text-neutral-600">
                <span className="font-medium">Inherited from:</span> {concept.inheritedFrom}
              </p>
            )}
            {concept.introduced != null && (
              <p className="mt-1 text-neutral-600">
                <span className="font-medium">Introduced:</span> {concept.introduced}
              </p>
            )}
          </Section>

          {concept.sources && concept.sources.length > 0 && (
            <Section label="Sources">
              <ul className="space-y-0.5">
                {concept.sources.map((s, i) => (
                  <li key={i}>
                    {s.url ? (
                      <a href={s.url} target="_blank" rel="noreferrer" className="text-blue-700 underline-offset-2 hover:underline">
                        {s.title}
                      </a>
                    ) : (
                      s.title
                    )}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400">
            <span>Cite as: {concept.author} ({concept.introduced ?? "n.d."}). {concept.title}. Public Mechanics Concept Cards.</span>
            <span className="font-mono">{concept.id}</span>
            <span>rev. {concept.lastRevised}</span>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import type { CaseStudy } from "@/lib/publicMechanics";

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">{label}</div>
      <div className="mt-1 text-sm text-neutral-800">{children}</div>
    </div>
  );
}

export function CaseStudyView({ caseStudy }: { caseStudy: CaseStudy }) {
  const [open, setOpen] = useState(false);
  return (
    <div id={caseStudy.slug} className="scroll-mt-4 rounded-md border border-blue-200 bg-blue-50/30">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-baseline justify-between gap-4 px-4 py-3 text-left hover:bg-blue-50"
      >
        <div>
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-blue-800">Case</span>
            <span className="text-base font-semibold text-neutral-900">{caseStudy.title}</span>
            <span className="font-mono text-xs text-neutral-400">{caseStudy.id}</span>
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 text-[11px] text-neutral-500">
            <span>primary: <a href={`#${caseStudy.primaryConcept}`} className="underline-offset-2 hover:underline">{caseStudy.primaryConcept}</a></span>
            <span className="text-neutral-400">{caseStudy.domains.join(" · ")}</span>
          </div>
        </div>
        <span className="text-xs text-neutral-400">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="space-y-4 border-t border-blue-200 px-4 py-4">
          <Section label="The situation">
            <p className="whitespace-pre-wrap">{caseStudy.situation}</p>
          </Section>

          <Section label="What's actually happening">
            <p className="whitespace-pre-wrap">{caseStudy.whatsActuallyHappening}</p>
          </Section>

          <Section label="Concepts at work">
            <div className="space-y-2">
              {caseStudy.conceptsAtWork.map((c, i) => (
                <div key={i}>
                  <a href={c.conceptSlug ? `#${c.conceptSlug}` : undefined} className="font-medium text-neutral-900 underline-offset-2 hover:underline">
                    {c.name}
                  </a>
                  <p className="text-neutral-800">{c.text}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section label="Why this case matters">
            <p className="whitespace-pre-wrap">{caseStudy.whyItMatters}</p>
          </Section>

          {caseStudy.sources && caseStudy.sources.length > 0 && (
            <Section label="Sources">
              <ul className="space-y-0.5">
                {caseStudy.sources.map((s, i) => (
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

          <div className="text-xs text-neutral-400">
            <span className="font-mono">{caseStudy.id}</span> · rev. {caseStudy.lastRevised}
          </div>
        </div>
      )}
    </div>
  );
}

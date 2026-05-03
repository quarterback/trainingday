"use client";

import { useEffect, useRef, useState } from "react";

export function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (next: string) => void;
}) {
  const [draft, setDraft] = useState(value);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => setDraft(value), [value]);

  useEffect(() => {
    const t = setTimeout(() => {
      if (draft !== value) onChange(draft);
    }, 150);
    return () => clearTimeout(t);
  }, [draft, value, onChange]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT" && document.activeElement?.tagName !== "TEXTAREA") {
        e.preventDefault();
        ref.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <input
      ref={ref}
      autoFocus
      type="text"
      placeholder="Search frameworks, stories, translations…  (press / to focus)"
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      className="w-full rounded-md border border-neutral-300 bg-white px-4 py-2 text-base text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none"
    />
  );
}

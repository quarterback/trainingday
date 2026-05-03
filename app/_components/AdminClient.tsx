"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type LogEntry = {
  ts: string;
  text: string;
  level: "info" | "ok" | "error";
};

const STORAGE_KEY = "td_admin_token";

export default function AdminClient() {
  const params = useSearchParams();
  const tokenFromUrl = params.get("token") ?? "";
  const [token, setToken] = useState<string>("");
  const [tokenInput, setTokenInput] = useState<string>("");
  const [handle, setHandle] = useState<string>("ron");
  const [busy, setBusy] = useState<string | null>(null);
  const [log, setLog] = useState<LogEntry[]>([]);

  useEffect(() => {
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
      setTokenInput(tokenFromUrl);
      try {
        sessionStorage.setItem(STORAGE_KEY, tokenFromUrl);
      } catch {}
      return;
    }
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) {
        setToken(stored);
        setTokenInput(stored);
      }
    } catch {}
  }, [tokenFromUrl]);

  const tokenSet = token.length > 0;

  function append(text: string, level: LogEntry["level"] = "info") {
    setLog((l) => [...l, { ts: new Date().toLocaleTimeString(), text, level }]);
  }

  async function call(label: string, path: string) {
    if (!tokenSet) {
      append("Set the admin token first.", "error");
      return;
    }
    setBusy(label);
    append(`→ ${label}…`);
    try {
      const res = await fetch(path, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        append(`✗ ${label} failed (${res.status}): ${body.error ?? "unknown error"}`, "error");
      } else {
        append(`✓ ${label}: ${JSON.stringify(body)}`, "ok");
      }
    } catch (err) {
      append(`✗ ${label} threw: ${err instanceof Error ? err.message : String(err)}`, "error");
    } finally {
      setBusy(null);
    }
  }

  const importPath = useMemo(() => {
    const sp = new URLSearchParams();
    if (handle) sp.set("handle", handle);
    return `/api/admin/import-literal?${sp.toString()}`;
  }, [handle]);

  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col gap-6 px-6 py-8">
      <header className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Training Day · Admin</h1>
        <Link
          href="/"
          className="rounded border border-neutral-300 px-3 py-1 text-sm text-neutral-700 hover:bg-neutral-100"
        >
          Back to app
        </Link>
      </header>

      <section className="rounded-md border border-neutral-200 bg-white p-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
          Admin token
        </div>
        <p className="mt-1 text-sm text-neutral-600">
          Must match the <code className="rounded bg-neutral-100 px-1">ADMIN_TOKEN</code>{" "}
          environment variable in Vercel project settings. Stored in <code>sessionStorage</code> for
          this tab only.
        </p>
        <div className="mt-3 flex gap-2">
          <input
            type="password"
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            placeholder="ADMIN_TOKEN value"
            className="flex-1 rounded border border-neutral-300 px-2 py-1 text-sm focus:border-neutral-900 focus:outline-none"
          />
          <button
            onClick={() => {
              setToken(tokenInput);
              try {
                sessionStorage.setItem(STORAGE_KEY, tokenInput);
              } catch {}
              append(tokenInput ? "Token set." : "Token cleared.", "ok");
            }}
            className="rounded bg-neutral-900 px-3 py-1 text-sm text-white hover:bg-neutral-700"
          >
            Save
          </button>
        </div>
        <div className="mt-2 text-xs text-neutral-500">
          {tokenSet ? "Token is set for this tab." : "No token set yet."}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <Action
          title="1. Initialize database schema"
          description="Creates the four content tables (frameworks, stories, translations, books) and the books unique index. Idempotent — safe to run repeatedly. Run this first, after every deploy that changes the schema."
          buttonLabel="Run setup"
          onClick={() => call("Setup", "/api/admin/setup?token=" + encodeURIComponent(token))}
          disabled={busy !== null || !tokenSet}
          busy={busy === "Setup"}
        />
        <Action
          title="2. Seed framework & translation content"
          description="Upserts the framework and translation entries from the repo's seed files. Re-run any time you edit the seed files; existing rows are updated by name, new ones inserted."
          buttonLabel="Run seed"
          onClick={() => call("Seed", "/api/admin/seed?token=" + encodeURIComponent(token))}
          disabled={busy !== null || !tokenSet}
          busy={busy === "Seed"}
        />
        <Action
          title="3. Import books from Literal"
          description="Pulls your FINISHED shelf from Literal's public GraphQL API and inserts each book into the books table. Idempotent on (title, author) — re-runs preserve hand edits."
          buttonLabel="Import from Literal"
          onClick={() => call("Literal import", importPath + "&token=" + encodeURIComponent(token))}
          disabled={busy !== null || !tokenSet}
          busy={busy === "Literal import"}
        >
          <label className="mt-2 flex items-center gap-2 text-xs text-neutral-600">
            Literal handle:
            <input
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              className="rounded border border-neutral-300 px-2 py-0.5 text-xs focus:border-neutral-900 focus:outline-none"
            />
          </label>
        </Action>
      </section>

      <section className="rounded-md border border-neutral-200 bg-white p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Log</div>
          <button
            onClick={() => setLog([])}
            className="text-xs text-neutral-500 underline hover:text-neutral-700"
          >
            clear
          </button>
        </div>
        {log.length === 0 ? (
          <div className="text-sm text-neutral-400">No actions run yet.</div>
        ) : (
          <ul className="flex flex-col gap-1 font-mono text-xs">
            {log.map((entry, i) => (
              <li
                key={i}
                className={
                  entry.level === "ok"
                    ? "text-emerald-700"
                    : entry.level === "error"
                    ? "text-red-700"
                    : "text-neutral-700"
                }
              >
                <span className="text-neutral-400">[{entry.ts}]</span> {entry.text}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

function Action({
  title,
  description,
  buttonLabel,
  onClick,
  disabled,
  busy,
  children,
}: {
  title: string;
  description: string;
  buttonLabel: string;
  onClick: () => void;
  disabled: boolean;
  busy: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-md border border-neutral-200 bg-white p-4">
      <div className="font-semibold text-neutral-900">{title}</div>
      <p className="mt-1 text-sm text-neutral-600">{description}</p>
      {children}
      <button
        onClick={onClick}
        disabled={disabled}
        className="mt-3 rounded bg-neutral-900 px-3 py-1.5 text-sm text-white hover:bg-neutral-700 disabled:opacity-50"
      >
        {busy ? "Running…" : buttonLabel}
      </button>
    </div>
  );
}

import type { Metadata } from "next";
import { Suspense } from "react";
import PublicMechanicsClient from "../_components/PublicMechanicsClient";
import { concepts } from "@/data/concepts";
import { cases } from "@/data/cases";

export const metadata: Metadata = {
  title: "Public Mechanics — Concept Cards",
  description: "A field guide to the Public Mechanics vocabulary. Concepts and the cases that ground them.",
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PublicMechanicsClient concepts={concepts} cases={cases} />
    </Suspense>
  );
}

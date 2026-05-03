import type { NewTranslation } from "@/lib/schema";

export const seedTranslations: NewTranslation[] = [
  {
    yourTerm: "delivery_forensics",
    standardTerms: ["FMEA", "GAO post-program review", "IG audit", "after-action review"],
    explanation:
      "Delivery Forensics is the pre-hoc forensic discipline: doing the GAO/IG-style structural and procurement analysis before the failure manifests. FMEA is the closest existing tool inside the Six Sigma/TQM lineage but is built for manufacturing-defect failure modes, not political and structural ones. The cleaner positioning is as the pre-hoc complement to GAO post-hoc work — it locates the practice in a public-sector accountability tradition rather than a private-sector quality one.",
    whenToUseYours:
      "When you're inside a public-sector accountability conversation (GAO, IG, OMB, agency leadership) and need a frame that names political/structural failure modes as the actual unit of analysis. Also when the audience would hear 'FMEA' as cosplay rather than substance.",
    whenToUseTheirs:
      "Use 'FMEA' when you need legibility with procurement officers, federal PMOs, CMMI-shaped organizations, or anyone whose mental model is Six Sigma. Use 'GAO post-program review' when contrasting with after-the-fact forensics to make the pre-hoc claim concrete.",
    tags: ["translation", "public_sector", "quality_discipline", "owner_framework"],
  },
  {
    yourTerm: "trajectory_management",
    standardTerms: [
      "hoshin kanri",
      "PDCA",
      "Statistical Process Control drift detection",
      "trajectory correction maneuvers (TCM)",
      "program steering",
    ],
    explanation:
      "Six Sigma's variance-around-a-stable-process model doesn't map. The closer analogs are Deming's PDCA extended into continuous anticipation, Toyota's hoshin kanri (policy deployment with structured course correction), SPC's notion of process drift applied to outcomes, and aerospace/systems-engineering trajectory correction maneuvers. Trajectory Management names the practice of continuous vector-to-outcome assessment between milestone reviews — the thing milestone-based governance systematically misses.",
    whenToUseYours:
      "Public-sector program health conversations where 'trajectory' makes the moving-environment claim explicit, and where 'we're on track' (the milestone-review answer) is the wrong unit of analysis.",
    whenToUseTheirs:
      "'Hoshin kanri' if the audience speaks Lean. 'PDCA' for the broadest legibility. 'SPC drift' for quants and manufacturing-quality audiences. 'Program steering' as a neutral fallback that signals you're talking about ongoing course adjustment rather than after-the-fact review.",
    tags: ["translation", "public_sector", "quality_discipline", "owner_framework"],
  },
  {
    yourTerm: "quality_movement_for_public_services",
    standardTerms: ["Six Sigma", "Lean", "TQM", "DMAIC", "CMMI"],
    explanation:
      "Meta-translation. The quality movement gave the private sector pre-hoc disciplines for manufacturing and software — Six Sigma, Lean, TQM, DMAIC. Public services never got an equivalent, because the failure modes are political and structural rather than statistical. Delivery Forensics and Trajectory Management are positioned as that equivalent: pre-hoc disciplines for public-sector delivery risk, drawing on the GAO/IG accountability tradition rather than the manufacturing-quality tradition. This translation row exists so the search 'Six Sigma' surfaces the positioning argument as well as the individual framework entries.",
    whenToUseYours:
      "When you want to make the conceptual claim about public-sector quality discipline without inheriting the manufacturing-era baggage of Six Sigma's reputation (post-GE consulting product, methodology cosplay).",
    whenToUseTheirs:
      "Use Six Sigma / Lean / TQM language when the audience lives inside a CMMI-shaped organization and the cost of unfamiliar vocabulary outweighs the cost of conceptual borrowing. The translation buys legibility with procurement officers and federal PMOs in particular.",
    tags: ["translation", "positioning", "public_sector", "quality_discipline"],
  },
  {
    yourTerm: "design_discipline",
    standardTerms: [
      "Design Thinking",
      "Human-Centered Design",
      "Double Diamond",
      "Lean UX",
      "Service Design",
      "18F Methods",
      "user-centered design",
    ],
    explanation:
      "Same underlying moves — research the actual problem, diverge before converging, prototype cheaply, test against users, iterate — wrapped in different lineages. Picking which name to invoke is a positioning move, not a methodology choice. The discipline is what matters; the brand is a tool.",
    whenToUseYours:
      "Default to 'design discipline' or 'design practice' as the umbrella in skeptical rooms (engineers, executives, oversight bodies) where 'Design Thinking' has been hollowed out into post-it theater. It signals you're talking about real moves, not the consultant package. When the audience is design-fluent, just name the specific move — contextual inquiry, journey mapping, heuristic evaluation — without invoking any umbrella at all.",
    whenToUseTheirs:
      "'Design Thinking' for innovation workshops and startup audiences who already speak the vocabulary. 'Human-Centered Design' for public-sector and procurement audiences (it's in ISO 9241-210 and federal RFPs). 'Double Diamond' for UK and government digital service contexts. '18F Methods' for federal civic-tech rooms where the federal provenance matters. 'Service Design' when the work crosses channels and the audience needs to see front-stage and back-stage. 'Lean UX' for product orgs where build-measure-learn is the operating vocabulary. The choice is about which audience credits which lineage — not about which method you're using.",
    tags: ["translation", "positioning", "design", "interview"],
  },
];

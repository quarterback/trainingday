import type { NewFramework } from "@/lib/schema";

// Full entries — no thin stubs. The point of seed content is that you can
// actually rehearse from it on day one.
export const seedFrameworks: NewFramework[] = [
  {
    name: "STAR",
    category: "interview",
    oneLiner:
      "A four-part structure for behavioral answers: Situation, Task, Action, Result.",
    whenToUse:
      "Any behavioral interview question that asks you to describe a past experience (\"tell me about a time when…\"). Forces you to ground claims in a concrete example with an outcome.",
    vocabulary: ["situation", "task", "action", "result", "behavioral"],
    howToDropIn:
      "\"In [situation], my responsibility was [task]. I [action], and the result was [result].\"",
    commonPhrasing:
      "\"Tell me about a time when…\" / \"Walk me through a situation where…\" / \"Give me an example of…\"",
    notes:
      "STAR is table stakes — it makes you legible to interviewers, not impressive. The 'Result' is the part candidates underweight; quantify wherever honest. STAR-L (adding 'Learned') is a useful upgrade for self-aware reflection on failure stories.",
    source: "Originally formalized by DDI (Development Dimensions International) in the 1970s.",
    tags: ["interview", "communication", "storytelling"],
  },
  {
    name: "SCQA",
    category: "communication",
    oneLiner:
      "A four-part opening structure for any persuasive document or pitch: Situation, Complication, Question, Answer.",
    whenToUse:
      "Opening a memo, exec brief, or cold pitch. Forces you to surface the tension before naming your recommendation, so the audience cares about the answer.",
    vocabulary: ["situation", "complication", "question", "answer", "pyramid principle"],
    howToDropIn:
      "Lead with the shared frame (S), then the disruption (C), then the implicit question that creates (Q), then your one-sentence answer (A) before the supporting structure.",
    commonPhrasing:
      "Used implicitly when execs say \"so what's the ask?\" — SCQA pre-empts that by making the ask the answer to a question you've already raised.",
    notes:
      "Comes from Barbara Minto's Pyramid Principle (McKinsey, 1970s). The Complication is where amateurs fail — they describe the situation but never name what changed. Without C, there's no Q, and the A reads as a non-sequitur.",
    source: "Barbara Minto, The Pyramid Principle (1973).",
    tags: ["communication", "writing", "structure", "consulting"],
  },
  {
    name: "Cynefin",
    category: "strategy",
    oneLiner:
      "A sense-making framework that classifies problems into Clear, Complicated, Complex, Chaotic, and Confusion domains, each demanding a different response.",
    whenToUse:
      "When the team is debating *how* to solve something but disagreeing about *what kind of problem* it is. Cynefin lets you name the disagreement.",
    vocabulary: [
      "clear",
      "complicated",
      "complex",
      "chaotic",
      "confusion",
      "sense-categorize-respond",
      "sense-analyze-respond",
      "probe-sense-respond",
      "act-sense-respond",
    ],
    howToDropIn:
      "\"This isn't a complicated problem we can analyze our way through — it's complex, so we need to probe and sense before we commit to a response.\"",
    commonPhrasing:
      "Surfaces in change management, incident response, and strategy reviews where the failure mode is treating a complex problem like a complicated one.",
    notes:
      "Snowden's key insight: best practices only exist in the Clear domain; in Complex, you need emergent practice. Misclassifying complex as complicated is the most common organizational error and produces over-engineered solutions to moving targets.",
    source: "Dave Snowden, IBM, 1999. Updated several times since.",
    tags: ["strategy", "complexity", "decision-making", "change_management"],
  },
  {
    name: "Jobs To Be Done",
    category: "product",
    oneLiner:
      "Customers don't buy products; they hire them to do a job. Design and positioning follow from understanding the job, not the demographics.",
    whenToUse:
      "Product discovery, segmentation debates, or positioning conversations where the team is anchoring on user attributes instead of user goals.",
    vocabulary: [
      "job",
      "hire",
      "fire",
      "outcome",
      "progress",
      "milkshake",
      "functional job",
      "emotional job",
      "social job",
    ],
    howToDropIn:
      "\"What job is the customer hiring this for? If we knew that, the feature debate would resolve itself.\"",
    commonPhrasing:
      "Product reviews, roadmap arguments, customer-research debriefs.",
    notes:
      "Christensen's milkshake example is the canonical illustration. The framework's weakness is that it can be used to rationalize any decision after the fact; the discipline is to do the JTBD interview *before* committing.",
    source: "Clayton Christensen, The Innovator's Solution (2003); Tony Ulwick, Outcome-Driven Innovation.",
    tags: ["product", "discovery", "positioning"],
  },
  {
    name: "Wardley Mapping",
    category: "strategy",
    oneLiner:
      "A visual technique that plots the components of a value chain against their evolution stage (genesis → custom → product → commodity), exposing where to invest and where to outsource.",
    whenToUse:
      "Strategic planning, build-vs-buy debates, or platform strategy discussions where the team can't agree on what's core and what's commodity.",
    vocabulary: [
      "value chain",
      "evolution",
      "genesis",
      "custom-built",
      "product",
      "commodity",
      "inertia",
      "anchor",
      "pioneer-settler-town-planner",
    ],
    howToDropIn:
      "\"On the map, this component is in 'product' phase moving toward commodity — fighting that evolution wastes effort. We should ride it, not resist it.\"",
    commonPhrasing:
      "Strategy reviews, capability planning, platform investment debates.",
    notes:
      "Wardley's contribution is the *evolution axis*. Most strategy frameworks are static; Wardley's is the only one that takes seriously that components move through predictable stages. Pair with Cynefin for sense-making about which components live in which domain.",
    source: "Simon Wardley, On Being Lost (2015) and the Wardley Maps book.",
    tags: ["strategy", "platform", "value_chain"],
  },
  {
    name: "RACI",
    category: "operations",
    oneLiner:
      "A four-role accountability matrix for a task or decision: Responsible, Accountable, Consulted, Informed.",
    whenToUse:
      "Whenever ownership is unclear and the same work is being done twice or not at all. Forces the conversation about *who decides* vs *who does* vs *who needs to know*.",
    vocabulary: ["responsible", "accountable", "consulted", "informed", "DACI", "RAPID"],
    howToDropIn:
      "\"Before we start: who's Accountable for the decision, and who's Responsible for the work? If those are the same person, that's our risk.\"",
    commonPhrasing:
      "Project kickoffs, governance reviews, post-mortems where the failure was unclear ownership.",
    notes:
      "RACI's power is forcing exactly one Accountable per row. The common failure is to mark everyone Consulted, which pushes the bottleneck to whoever runs the meetings. Variants: DACI (Driver/Approver/Contributor/Informed), RAPID (Bain).",
    source: "PMI Project Management Body of Knowledge.",
    tags: ["operations", "governance", "accountability"],
  },
  {
    name: "Kotter 8-Step",
    category: "change_management",
    oneLiner:
      "A sequenced model for leading organizational change: urgency, coalition, vision, communication, empowerment, short-term wins, consolidation, anchoring.",
    whenToUse:
      "Large-scale change programs where the failure mode is announcing the destination without doing the political and emotional groundwork.",
    vocabulary: [
      "urgency",
      "guiding coalition",
      "vision",
      "short-term wins",
      "consolidation",
      "anchoring",
    ],
    howToDropIn:
      "\"We've skipped step one — there's no shared sense of urgency, so the rollout is hitting the same resistance Kotter predicts at this stage.\"",
    commonPhrasing:
      "Transformation programs, M&A integration, post-merger culture change.",
    notes:
      "Kotter's value is the *sequence*. Skipping step 1 (urgency) is the most common failure mode in public-sector and large-enterprise change programs. The model is criticized for being top-down and linear; pair with adaptive/complexity-aware models (Cynefin, Heifetz) for messier environments.",
    source: "John Kotter, Leading Change (1996).",
    tags: ["change_management", "leadership", "organizational"],
  },
  {
    name: "Mark Moore Public Value",
    category: "public_sector",
    oneLiner:
      "Public managers create value when their work satisfies three tests simultaneously: substantively valuable, politically and legally legitimate, and operationally feasible — the 'strategic triangle.'",
    whenToUse:
      "Public-sector strategy and program design, especially when defending a program to legislators, executives, or oversight bodies. Forces you to articulate value claims in terms a legislature can credit.",
    vocabulary: [
      "public value",
      "strategic triangle",
      "authorizing environment",
      "operational capacity",
      "value proposition",
    ],
    howToDropIn:
      "\"Substantively the program holds up. The question is whether the authorizing environment will sustain it, and whether we have the operational capacity to deliver — the other two corners of the triangle.\"",
    commonPhrasing:
      "Senior public-sector interviews, agency strategy retreats, congressional/legislative briefings on program rationale.",
    notes:
      "Moore's framework is the closest the public sector has to a unified strategy theory. Its critics argue 'public value' is too elastic to be falsifiable; defenders argue that's the point — it's a discipline of articulation, not a metric. Pair with Bozeman's 'public values failure' for sharper diagnosis.",
    source: "Mark H. Moore, Creating Public Value (Harvard, 1995).",
    tags: ["public_sector", "strategy", "governance", "legitimacy"],
  },
  {
    name: "Delivery Forensics",
    category: "public_sector",
    oneLiner:
      "Pre-hoc forensic reasoning about a public program's structural, procurement, and accountability conditions — the same diagnostic moves GAO and IGs perform after a program fails, but applied before failure manifests.",
    whenToUse:
      "Program design, milestone reviews, and procurement gates where the team is optimistic about delivery but the structural conditions for failure are visible to anyone trained to look for them.",
    vocabulary: [
      "failure mode",
      "structural risk",
      "accountability gap",
      "procurement integrity",
      "pre-hoc forensics",
      "delivery risk profile",
    ],
    howToDropIn:
      "\"Before we approve the milestone, let's run the forensics: which structural and procurement patterns we'd expect to see in a post-mortem are already visible right now?\"",
    commonPhrasing:
      "Senior delivery reviews, oversight conversations, GAO/IG-adjacent program assurance work.",
    notes:
      "Closest existing analog inside the quality movement is FMEA (Failure Mode and Effects Analysis), which sits in the Analyze phase of Six Sigma DMAIC. The case for Delivery Forensics is that public-program failure modes are categorically different from manufacturing defects — they're political, structural, and procurement-driven, and they don't show up in process variance data. The cleaner positioning is as the pre-hoc complement to GAO/IG post-hoc forensics rather than as an FMEA variant: it locates the practice in a public-sector accountability tradition rather than a private-sector quality one. Six Sigma legibility is available if useful, but inheriting the methodology cosplay is a cost.",
    source: "Owner's framework. Lineage: GAO program assessments, IG audit traditions, FMEA (DMAIC).",
    tags: ["public_sector", "delivery", "risk", "quality_discipline", "owner_framework"],
  },
  {
    name: "Trajectory Management",
    category: "public_sector",
    oneLiner:
      "Continuous assessment of whether a program's current vector still intersects its intended outcome, with explicit course-correction maneuvers between milestone reviews.",
    whenToUse:
      "Multi-year programs in changing environments where milestone reviews are too infrequent to catch drift, and where the assumption of a stable target is itself the risk.",
    vocabulary: [
      "trajectory",
      "vector",
      "course correction",
      "drift",
      "outcome intersection",
      "policy deployment",
    ],
    howToDropIn:
      "\"The milestone says we're green, but the trajectory check says the program's vector has drifted off the outcome we set. We need a course-correction now, not at the next review.\"",
    commonPhrasing:
      "Program steering committees, portfolio reviews, public-sector program health assessments.",
    notes:
      "Six Sigma maps poorly here because it assumes a stable process whose variance you reduce; trajectory management presumes the program is moving through a changing environment. Better lineages: Deming's PDCA cycle (extended forward into anticipation), Toyota's hoshin kanri (policy deployment with regular course correction), and the SPC notion of 'process drift' applied to outcomes rather than outputs. The aerospace/systems-engineering tradition of trajectory correction maneuvers is also a cleaner analogy than Six Sigma. Translation row 'trajectory_management' captures the specific bridges.",
    source: "Owner's framework. Lineage: PDCA (Deming), hoshin kanri (Toyota), SPC drift, aerospace TCM.",
    tags: ["public_sector", "delivery", "program_steering", "owner_framework"],
  },
];

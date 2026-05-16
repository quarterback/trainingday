import type { Framework } from "@/lib/types";

// Full entries — no thin stubs. Edit this file in GitHub's web editor to add
// or refine entries; Vercel rebuilds on push.
export const frameworks: Framework[] = [
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

  // —— Design process ——————————————————————————————————————————————————————

  {
    name: "Double Diamond",
    category: "design",
    oneLiner:
      "A four-phase design process — Discover, Define, Develop, Deliver — that makes the divergence/convergence rhythm of design work explicit through two sequenced diamonds.",
    whenToUse:
      "Framing a discovery-to-delivery program for a non-design audience, especially in public sector or government contexts where the UK Design Council lineage is recognized. Useful as a counterweight to teams that want to skip discovery and jump to deliver.",
    vocabulary: [
      "discover",
      "define",
      "develop",
      "deliver",
      "divergence",
      "convergence",
      "problem space",
      "solution space",
    ],
    howToDropIn:
      "\"We're being pushed to converge on a solution before we've finished diverging on the problem. The first diamond — discover and define — hasn't closed yet, so any answer we give is premature.\"",
    commonPhrasing:
      "Discovery-phase project framings, government digital service work (GDS, USDS, 18F), design leadership conversations.",
    notes:
      "Better umbrella than Design Thinking for public-sector audiences because (a) UK Design Council origin gives it government legibility and (b) the diamond shape forces the divergence/convergence move that the post-it-noted version of Design Thinking often skips. The risk is using it as a phase-gated Gantt chart, which kills the iteration. Pair with Cynefin to decide whether you can converge at all (complicated) or have to keep probing (complex).",
    source: "UK Design Council, 2005. Updated as the 'evolved' Double Diamond.",
    tags: ["design", "process", "discovery", "public_sector"],
  },
  {
    name: "Design Thinking",
    category: "design",
    oneLiner:
      "A five-mode design process — Empathize, Define, Ideate, Prototype, Test — popularized by IDEO and the Stanford d.school as a general-purpose problem-solving discipline.",
    whenToUse:
      "Framing a human-centered approach to a problem when the audience already speaks Design Thinking. Useful as shared vocabulary; less useful as actual methodology unless you treat the modes as moves rather than steps.",
    vocabulary: [
      "empathize",
      "define",
      "ideate",
      "prototype",
      "test",
      "point of view",
      "How Might We",
      "low-fidelity prototype",
    ],
    howToDropIn:
      "\"The empathize and define moves are doing real work here — what would change if we treated this as a problem-definition issue rather than a solutioning issue?\"",
    commonPhrasing:
      "Innovation workshops, executive offsites, consulting decks. The vocabulary appears in interviews even from people who'd otherwise disavow it.",
    notes:
      "Substantively contested. The five moves are real disciplines; the packaged version (post-its, sharpies, 'innovation theater') is what gets criticized — Lee Vinsel and others have argued it's been hollowed out into a consulting product. The defensible position: borrow the vocabulary because it's interoperable, but pair with research methods that have teeth (contextual inquiry, JTBD interviews) and a process frame with discipline about divergence/convergence (Double Diamond). Don't oversell it to engineers and skeptics — they've seen the post-it version and pattern-match.",
    source: "IDEO, Stanford d.school. Roots in Herbert Simon (The Sciences of the Artificial, 1969).",
    tags: ["design", "process", "innovation", "contested"],
  },
  {
    name: "Design Sprint",
    category: "design",
    oneLiner:
      "A five-day structured format — Map, Sketch, Decide, Prototype, Test — for getting from problem to validated prototype in one calendar week, originated at Google Ventures.",
    whenToUse:
      "When a team is stuck in analysis paralysis or consensus-blocked on a direction, and you can carve out a dedicated week with a small cross-functional group. The format's value is the time-box, not the artifacts.",
    vocabulary: [
      "sprint",
      "decider",
      "long-term goal",
      "Crazy Eights",
      "storyboard",
      "lightning demo",
      "How Might We",
    ],
    howToDropIn:
      "\"We've debated this for six weeks and we'll debate it for six more. A design sprint forces a decision and a real prototype in five days — let's spend the week instead of the quarter.\"",
    commonPhrasing:
      "Product team kickoffs, innovation programs, executive workshops, post-mortem retrospectives that name 'we should have sprinted that.'",
    notes:
      "Useful constraint-forcing function; a week is short enough that nobody gets to demand more research. Critique: the sprint assumes you already know roughly the problem and have access to five users by Friday. Skipping prior discovery means you sprint to a confidently wrong answer. Pair with prior research, not as a substitute for it. Also: don't run sprints when the underlying issue is political; no amount of post-it sketching will fix an authorizing-environment problem.",
    source: "Jake Knapp, Sprint (2016). Google Ventures.",
    tags: ["design", "process", "facilitation", "decision-making"],
  },
  {
    name: "Human-Centered Design (HCD)",
    category: "design",
    oneLiner:
      "An umbrella discipline that grounds design decisions in the needs, contexts, and behaviors of the people who'll use the result — IDEO's framing is Inspiration → Ideation → Implementation.",
    whenToUse:
      "When you need a phrase that signals 'we're not building from assumptions' to executives, procurement officers, or oversight bodies. Broader than Design Thinking; includes service design, ethnographic research, and systems-thinking traditions.",
    vocabulary: [
      "inspiration",
      "ideation",
      "implementation",
      "user research",
      "co-design",
      "participatory design",
    ],
    howToDropIn:
      "\"The HCD answer is to start with the people the program is supposed to serve and work back to the policy. Most of the time the policy looks different once you've done that.\"",
    commonPhrasing:
      "Public-sector RFPs, USDS / 18F / GDS framings, federal innovation conversations, anywhere 'user-centered' has become procurement vocabulary.",
    notes:
      "HCD is the discipline; Design Thinking is one packaged version of it. Use HCD when you want to invoke the lineage without inheriting the post-it baggage. The stronger move in public-sector contexts is to pair HCD with co-design / participatory design, which acknowledges that 'user' is doing a lot of work to flatten what are actually constituents, beneficiaries, and stakeholders with conflicting interests.",
    source: "IDEO, The Field Guide to Human-Centered Design. ISO 9241-210 codifies it formally.",
    tags: ["design", "process", "research", "public_sector"],
  },
  {
    name: "Lean UX",
    category: "design",
    oneLiner:
      "Apply lean-startup discipline to design work: build-measure-learn loops, hypothesis-driven design, minimum viable artifacts, validated learning over deliverables.",
    whenToUse:
      "Product environments where research-to-decision cycles are too slow and the team is shipping features without learning from them. Reframes 'design deliverables' as 'learning experiments.'",
    vocabulary: [
      "hypothesis",
      "MVP",
      "build-measure-learn",
      "validated learning",
      "design hypothesis",
      "assumption mapping",
      "experiment",
    ],
    howToDropIn:
      "\"Let's state the design hypothesis explicitly — what we believe, what we'd see if we're right, what we'd see if we're wrong — and run the smallest experiment that distinguishes them.\"",
    commonPhrasing:
      "Product team standups, roadmap reviews, growth team conversations, anywhere 'we're shipping but not learning' is the diagnosis.",
    notes:
      "Strong fit with Jobs-To-Be-Done for the hypothesis statement and with Wardley Mapping for the question of *what should we be experimenting on at all*. Failure mode: 'lean' becomes an excuse to skip user research entirely — the hypothesis is supposed to be informed, not invented. Also: hypothesis-driven design works for things you can measure quickly. For policy and public-sector outcomes that take years to manifest, lean UX collapses; pair with Trajectory Management for the long-horizon equivalent.",
    source: "Jeff Gothelf and Josh Seiden, Lean UX (2013).",
    tags: ["design", "product", "experimentation", "process"],
  },
  {
    name: "Service Blueprint",
    category: "design",
    oneLiner:
      "A diagram that maps a service across two axes: the user's journey on the front-stage, and the systems, staff, and back-stage processes that enable each step.",
    whenToUse:
      "When a service spans channels and teams and the failure modes are at the seams. Particularly useful in public-sector and operations work where 'the website works but the call-center doesn't know about the change' is the typical pattern.",
    vocabulary: [
      "front-stage",
      "back-stage",
      "line of visibility",
      "line of internal interaction",
      "support processes",
      "physical evidence",
      "moments of truth",
    ],
    howToDropIn:
      "\"The front-stage is fine. The blueprint shows the back-stage is broken: the data crosses three systems and two teams, and there's no owner for the hand-off.\"",
    commonPhrasing:
      "Service redesign work, customer experience reviews, public-sector program design, post-incident analyses where 'the user-facing piece worked but the internal process failed.'",
    notes:
      "Closest framework to capture the seam-failures that Delivery Forensics flags pre-hoc. The line of visibility is the diagnostic prompt: anything below it the user doesn't see, but it's where most service failures actually live. Pair with Journey Mapping (which is purely front-stage) for the full picture. Procurement-translation: 'business process map' is the term that gets you legibility with operations and IT audiences who'd dismiss 'service blueprint' as design jargon.",
    source: "G. Lynn Shostack, 'Designing Services That Deliver' (HBR, 1984). Updated by Nielsen Norman Group, This Is Service Design Doing.",
    tags: ["design", "service_design", "operations", "public_sector"],
  },

  // —— Design research ——————————————————————————————————————————————————————

  {
    name: "Journey Mapping",
    category: "design_research",
    oneLiner:
      "A visualization of the user's experience over time — actions, thoughts, emotions, touchpoints — across a single journey, used to surface friction and opportunity moments.",
    whenToUse:
      "Synthesizing user research into a shared artifact that a cross-functional team can argue about. Particularly useful when the team disagrees about where the actual problems live in the experience.",
    vocabulary: [
      "stages",
      "touchpoints",
      "actions",
      "thoughts",
      "emotions",
      "pain points",
      "moments of truth",
      "current-state map",
      "future-state map",
    ],
    howToDropIn:
      "\"The journey map says the friction isn't where we've been investing — it's two steps earlier, at the moment they have to make a decision without enough information.\"",
    commonPhrasing:
      "UX reviews, customer experience strategy, product discovery synthesis, public-sector service design.",
    notes:
      "Most teams produce journey maps that are too generic to be falsifiable. The discipline is to ground each step in actual research data (quotes, observation notes) and to be explicit about whether the map is current-state (descriptive, diagnostic) or future-state (proposal, design artifact). Pair with Service Blueprint to extend below the line of visibility — journey mapping alone tells you where it hurts but not why.",
    source: "Adaptive Path; Nielsen Norman Group has the most-cited canonical guide.",
    tags: ["design", "research", "synthesis"],
  },
  {
    name: "Nielsen's 10 Usability Heuristics",
    category: "design_research",
    oneLiner:
      "Ten general principles for evaluating interface usability — visibility of system status, match to real world, user control, consistency, error prevention, recognition over recall, flexibility, minimalist design, error recovery, help and documentation.",
    whenToUse:
      "Quick critique of an interface when you don't have time or budget for usability testing, or as a structured vocabulary in a design review. Pair with heuristic evaluation as the method that applies them.",
    vocabulary: [
      "visibility of system status",
      "match real world",
      "user control",
      "consistency and standards",
      "error prevention",
      "recognition vs recall",
      "flexibility and efficiency",
      "minimalist design",
      "error recovery",
      "help and documentation",
    ],
    howToDropIn:
      "\"By the heuristics, this fails on at least three: status visibility, error prevention, and recognition over recall. We can run a heuristic evaluation against the full ten and prioritize from there.\"",
    commonPhrasing:
      "Design crits, accessibility reviews, evaluating vendor demos, interviewing for design roles where the prompt is 'critique this UI.'",
    notes:
      "Cheap, fast, and durable — the heuristics from 1994 still hold up because they describe human cognition, not interface fashion. They are not a substitute for actual user testing, but they catch the worst issues at near-zero cost. The recognition-over-recall heuristic is the one that comes up most often in real design debates — visible options beat memorized ones almost always.",
    source: "Jakob Nielsen, '10 Usability Heuristics for User Interface Design' (1994).",
    tags: ["design", "research", "heuristics", "ux"],
  },
  {
    name: "Heuristic Evaluation",
    category: "design_research",
    oneLiner:
      "A discount usability method: 3–5 evaluators independently inspect an interface against a set of heuristics (typically Nielsen's 10), then merge findings to produce a prioritized issue list.",
    whenToUse:
      "Early-stage design review, vendor evaluation, or any context where actual usability testing is too slow or too expensive. Catches roughly 75% of major issues at a fraction of the cost.",
    vocabulary: [
      "discount usability",
      "evaluator",
      "severity rating",
      "frequency",
      "impact",
      "persistence",
      "cosmetic / minor / major / catastrophic",
    ],
    howToDropIn:
      "\"Before we commission user testing, let's do a heuristic evaluation — three of us, independently, against Nielsen's ten. We'll have a prioritized issue list by Friday and know whether testing is even worth it yet.\"",
    commonPhrasing:
      "Design reviews, accessibility audits, vendor demos, product due diligence.",
    notes:
      "The three-to-five evaluators is empirically grounded — Nielsen showed that one evaluator catches ~35% of issues, but five catch ~75%, with diminishing returns after that. Independence before merging is the discipline; if the evaluators discuss findings during, you get groupthink and miss issues. Heuristic evaluation answers 'what's wrong' but not 'what users actually do' — pair with at least one usability test before shipping.",
    source: "Jakob Nielsen and Rolf Molich, 'Heuristic Evaluation of User Interfaces' (1990).",
    tags: ["design", "research", "evaluation", "ux"],
  },
  {
    name: "Contextual Inquiry",
    category: "design_research",
    oneLiner:
      "A field-research method: observe users in their actual work context while they perform real tasks, with periodic master-apprentice questioning to surface tacit knowledge and workarounds.",
    whenToUse:
      "When the work is complex, situated, or full of workarounds you'd never hear about in a structured interview. Particularly useful for enterprise, public-sector, and operational contexts where what people actually do diverges from what the system thinks they do.",
    vocabulary: [
      "master-apprentice",
      "context",
      "artifact analysis",
      "work model",
      "interpretation session",
      "affinity diagramming",
    ],
    howToDropIn:
      "\"Survey data won't surface this — the workarounds are invisible to the people doing them. Contextual inquiry is the right method: shadow them, ask master-apprentice questions, then synthesize.\"",
    commonPhrasing:
      "Discovery research planning, enterprise UX projects, public-sector service redesign, anywhere 'why doesn't anyone use the system as designed' is the question.",
    notes:
      "More expensive and slower than interviews or surveys, but it's the only method that catches the gap between espoused process and actual practice. The master-apprentice frame matters: you're there to learn, not to interview. Pair with affinity diagramming for synthesis. The 18F Methods cards include a public-sector-tuned version of this.",
    source: "Hugh Beyer and Karen Holtzblatt, Contextual Design (1998).",
    tags: ["design", "research", "ethnography", "field_research"],
  },
  {
    name: "Card Sorting & Tree Testing",
    category: "design_research",
    oneLiner:
      "Card sorting elicits how users group concepts (informing information architecture); tree testing validates whether they can find things in a proposed structure. Used as a pair.",
    whenToUse:
      "Information architecture work — navigation redesigns, content strategy, taxonomy design — where the question is 'how should this be organized so people find what they need.'",
    vocabulary: [
      "open card sort",
      "closed card sort",
      "hybrid card sort",
      "tree test",
      "first-click test",
      "findability",
      "information architecture",
    ],
    howToDropIn:
      "\"Before we redesign the nav, let's run an open card sort to see how users actually group these, then validate the resulting tree with a tree test. If both pass, the IA is defensible.\"",
    commonPhrasing:
      "Website redesigns, content strategy projects, intranet and SharePoint cleanups, any 'no one can find anything' diagnosis.",
    notes:
      "Cheap to run remotely with tools like Optimal Workshop. Open sort tells you the user's mental model; closed sort validates a hypothesis you already have. Tree testing is the verification step — it tests the structure without the visual design confounding the result. Common failure: skipping the tree test and assuming the card sort result will work as navigation. It often won't; people group differently than they navigate.",
    source: "Donna Spencer, Card Sorting (2009). NN/g and Optimal Workshop have practitioner guides.",
    tags: ["design", "research", "information_architecture"],
  },
  {
    name: "How Might We (HMW)",
    category: "design",
    oneLiner:
      "A reframing technique that turns a problem statement into a generative question of the form 'How might we [verb] [noun] [for whom] [in what way]?' to open the solution space without committing to a solution.",
    whenToUse:
      "Transition between problem definition and ideation. Forces a particular grammatical move that produces actionable, generative questions instead of either too-narrow ('how do we add X feature') or too-broad ('how do we be better') prompts.",
    vocabulary: [
      "How Might We",
      "HMW",
      "problem reframing",
      "design challenge",
      "Goldilocks scope",
    ],
    howToDropIn:
      "\"Let me reframe that as a How Might We so we don't smuggle a solution into the problem statement: 'How might we help [user] do [job] without [constraint].'\"",
    commonPhrasing:
      "Design Sprint and Design Thinking workshops, product kickoffs, brainstorms, anywhere a meeting needs a generative prompt.",
    notes:
      "Originated at P&G, popularized by IDEO. The Goldilocks rule: too narrow and you've already designed the answer; too broad and you'll never converge. The grammar is doing real work — 'might' opens optionality, 'we' makes it collective, 'how' presupposes a doable answer. Useful even when the surrounding methodology is suspect; HMW reframing is one of the moves that survives the Design Thinking critique.",
    source: "Min Basadur (P&G); popularized by IDEO and Stanford d.school.",
    tags: ["design", "facilitation", "reframing", "ideation"],
  },
  {
    name: "User Story Mapping",
    category: "product",
    oneLiner:
      "A two-dimensional map of user activities (horizontal backbone) and the tasks/stories that support each activity (vertical), used to plan releases and surface gaps in the product narrative.",
    whenToUse:
      "Backlog grooming when the team has lost sight of the user narrative; release planning when scope is being cut and you need to see what slices still tell a coherent story end-to-end.",
    vocabulary: [
      "backbone",
      "walking skeleton",
      "release slice",
      "activities",
      "user tasks",
      "narrative flow",
      "MVP slice",
    ],
    howToDropIn:
      "\"The backlog is a flat list, which is why we keep cutting things that turn out to be load-bearing. Let's story-map it — the slice we ship has to be a complete walking skeleton across the backbone, not the top of the priority pile.\"",
    commonPhrasing:
      "Product planning, sprint and release planning, scope-cutting conversations, post-mortem retros where 'we shipped half a feature' is the diagnosis.",
    notes:
      "Patton's contribution is the second dimension. Flat backlogs lose the narrative; story maps preserve it. The 'walking skeleton' concept is the diagnostic move: cut vertically, not horizontally — every release slice should let a user complete an end-to-end activity, even if shallowly. Pair with JTBD for what the activities should be in the first place.",
    source: "Jeff Patton, User Story Mapping (2014).",
    tags: ["product", "planning", "agile", "narrative"],
  },
  {
    name: "Five Whys",
    category: "operations",
    oneLiner:
      "A root-cause analysis technique: ask 'why' iteratively (canonically five times) on a problem statement until you reach a systemic cause rather than a proximate symptom.",
    whenToUse:
      "Post-mortems, incident reviews, and any conversation where the team is treating a symptom and you suspect there's a structural cause one or two layers down.",
    vocabulary: [
      "root cause",
      "proximate cause",
      "systemic cause",
      "5 Whys",
      "fishbone diagram",
      "RCA",
    ],
    howToDropIn:
      "\"That's the proximate cause. Let's run the Five Whys — I'd bet two more layers down we hit a process or accountability issue, not a technical one.\"",
    commonPhrasing:
      "Post-mortems, incident reviews, quality programs, anywhere 'why did this keep happening' is the framing.",
    notes:
      "Cheap, fast, surprisingly effective when run with discipline. Failure modes: stopping too early (still a symptom), branching without tracking (one why often produces multiple legitimate next-whys), and using it on social/political problems where 'why' produces blame instead of insight. The cleaner version asks 'what conditions made this possible' rather than 'why did this person do this.' Lineage: Toyota Production System; Sakichi Toyoda. Often paired with the Ishikawa fishbone diagram.",
    source: "Sakichi Toyoda, Toyota Production System.",
    tags: ["operations", "quality", "post-mortem", "rca"],
  },

  // —— Public-sector design ————————————————————————————————————————————————

  {
    name: "18F Methods",
    category: "public_sector",
    oneLiner:
      "A public-sector design research toolkit organized by phase (Discover, Decide, Make, Validate) with discrete cards for methods like stakeholder mapping, KJ method, contextual inquiry, prioritization matrices, and lo-fi prototyping.",
    whenToUse:
      "Government and public-sector projects where the audience needs methods sourced from a federal practice rather than from IDEO or Silicon Valley. Particularly useful for procurement and oversight conversations.",
    vocabulary: [
      "discover",
      "decide",
      "make",
      "validate",
      "stakeholder mapping",
      "KJ method",
      "design hypothesis",
      "prioritization matrix",
      "lo-fi prototyping",
    ],
    howToDropIn:
      "\"In 18F's framing, we're still in Discover — stakeholder mapping and contextual inquiry are the right moves before we touch any design hypothesis. Decide and Make come after.\"",
    commonPhrasing:
      "Federal civic-tech work, USDS / 18F / state digital service conversations, government UX interviews.",
    notes:
      "The methods cards are a thin wrapper around standard UX research methods — the value is the federal-practice provenance. Use 18F Methods when 'IDEO' or 'NN/g' would land as private-sector cosplay; use IDEO/NN/g sources when the audience is industry. The discipline is the same; the citation changes the politics.",
    source: "18F Methods, https://methods.18f.gov.",
    tags: ["public_sector", "design", "research", "discovery"],
  },
  {
    name: "18F De-risking Government Technology",
    category: "public_sector",
    oneLiner:
      "A guide for federal and state procurement teams to avoid the failure patterns of large IT acquisitions — favors modular contracting, agile development, user-centered design, and cloud-native infrastructure over waterfall mega-procurements.",
    whenToUse:
      "Pre-RFP conversations, technology procurement strategy, post-failure reviews of large IT programs, and any context where the failure mode is 'big-bang fixed-price waterfall contract for a complex evolving system.'",
    vocabulary: [
      "modular contracting",
      "agile acquisition",
      "user-centered design",
      "cloud-native",
      "TechFAR",
      "Agile BPA",
      "human-centered procurement",
    ],
    howToDropIn:
      "\"The de-risking guide names this exact pattern. We're being asked to write a fixed-price, fixed-scope, multi-year contract for a system whose requirements will be wrong by year two. The modular-contracting move is the answer.\"",
    commonPhrasing:
      "Federal IT modernization conversations, state-level health and benefits IT, GAO and OIG findings on failed programs, procurement strategy.",
    notes:
      "Closest practical companion to Delivery Forensics — they share a thesis (public-sector IT failure is structural, not technical) and a remedy posture (intervene at procurement and contracting, not just at delivery). The TechFAR Handbook is the legal-procurement extension. Cite this in any conversation where 'we'll just do a big competitive procurement' is being treated as the safe option; the de-risking guide's contribution is documenting that 'safe' procurement is precisely what produces the famous failures.",
    source: "18F, De-risking Government Technology (https://derisking-guide.18f.gov).",
    tags: ["public_sector", "procurement", "delivery", "risk", "policy"],
  },

  // —— Delivery ————————————————————————————————————————————————————————————

  {
    name: "Scrum",
    category: "delivery",
    oneLiner:
      "An iterative delivery framework with fixed-length sprints, defined ceremonies, and three roles (Product Owner, Scrum Master, Dev Team) for delivering working software in small, reviewable increments.",
    whenToUse:
      "When a team needs a repeating rhythm to commit, deliver, and learn in short cycles, and when stakeholders want progress visibility without micro-managing the team.",
    vocabulary: [
      "sprint",
      "backlog",
      "sprint planning",
      "daily standup",
      "sprint review",
      "retrospective",
      "velocity",
      "definition of done",
      "increment",
      "Scrum Master",
      "Product Owner",
    ],
    howToDropIn:
      "\"The sprint cadence is the heartbeat — commit to what fits in two weeks, deliver it done, then inspect and adapt. Everything else is ceremony to support that loop.\"",
    commonPhrasing:
      "Software delivery teams, government agile contracts, digital transformation programs, any context where 'agile' is the stated method.",
    notes:
      "Scrum is a framework, not a methodology; it doesn't tell you how to code, only how to organize delivery. The most violated element is the definition of done — teams that ship 'mostly done' work accumulate invisible technical and design debt. The ceremonies have distinct purposes; collapsing or skipping them destroys the feedback loop they create. Common anti-pattern: 'Scrumfall' — sprint the execution while planning like waterfall. Pair with Kanban for teams doing ops/maintenance work alongside product sprints.",
    source: "Schwaber and Sutherland, The Scrum Guide (2020). Original: Jeff Sutherland and Ken Schwaber, 1995.",
    tags: ["delivery", "agile", "process", "sprints"],
  },
  {
    name: "Kanban",
    category: "delivery",
    oneLiner:
      "A visual workflow management system using a board, WIP limits per stage, and flow metrics (cycle time, lead time, throughput) to improve delivery pace and predictability.",
    whenToUse:
      "When work flow is unpredictable, priorities change frequently, or a team can't commit to fixed sprint scope. Also the right fit for ops and maintenance work alongside Scrum-based product work.",
    vocabulary: [
      "WIP limit",
      "cycle time",
      "lead time",
      "throughput",
      "pull system",
      "kanban board",
      "flow efficiency",
      "cumulative flow diagram",
      "blocker",
    ],
    howToDropIn:
      "\"The board shows three items blocked at QA and six in progress. The WIP limit exists precisely for this — we're overcommitted. We need to finish before we start. Pull, don't push.\"",
    commonPhrasing:
      "Product and engineering teams, support/ops workflows, service design workflows, portfolio management, any team where 'we have too much in flight' is a chronic condition.",
    notes:
      "Kanban's power is WIP limits — they force queues and blockers to become visible rather than just late. The most common mistake is a Kanban board without WIP limits, which is just a status tracker. Unlike Scrum, Kanban has no prescribed roles or ceremonies; you add them only if they serve the flow. David Anderson formalized the management practices; the original is Toyota's production card system. The cumulative flow diagram is underused — it shows where work piles up before a human even notices.",
    source: "David Anderson, Kanban: Successful Evolutionary Change (2010). Toyota Production System origin.",
    tags: ["delivery", "agile", "flow", "operations"],
  },
  {
    name: "Team Topologies",
    category: "delivery",
    oneLiner:
      "A model for structuring engineering organizations into four team types (Stream-aligned, Enabling, Complicated-Subsystem, Platform) and three interaction modes (Collaboration, X-as-a-Service, Facilitating) to optimize for flow.",
    whenToUse:
      "When cognitive load is crushing teams, when delivery is blocked by cross-team dependencies, when building a platform engineering strategy, or when re-orging a technology organization around software delivery rather than functional silos.",
    vocabulary: [
      "stream-aligned team",
      "enabling team",
      "complicated-subsystem team",
      "platform team",
      "collaboration",
      "X-as-a-Service",
      "facilitating",
      "cognitive load",
      "Conway's Law",
      "inverse Conway maneuver",
    ],
    howToDropIn:
      "\"The coupling problem here is organizational, not technical — we have feature teams waiting on a shared services org, which is a Collaboration pattern on something that should be X-as-a-Service. Team Topologies gives us the vocabulary to fix that.\"",
    commonPhrasing:
      "Engineering org design, platform strategy, DevOps transformation, re-org planning, any context where 'we're too dependent on other teams' is the bottleneck.",
    notes:
      "Team Topologies operationalizes Conway's Law — the org chart becomes the architecture, so design the org around the architecture you want (inverse Conway maneuver). The four team types are decision-making tools, not permanent boxes; the interaction mode for any given pair of teams should evolve over time. Enabling teams are the most underused type — they transfer capability and then dissolve, rather than becoming permanent dependencies. Pair with DORA metrics (Team Topologies predicts what will improve when you restructure right) and Domain-Driven Design for the technical side.",
    source: "Skelton and Pais, Team Topologies (2019).",
    tags: ["delivery", "org_design", "platform", "devops"],
  },
  {
    name: "Continuous Delivery",
    category: "delivery",
    oneLiner:
      "A software engineering discipline where every change is automatically built, tested, and kept deployment-ready, enabling frequent, low-risk releases by making deployment a routine operation rather than an event.",
    whenToUse:
      "When deployment is a source of risk, fear, or delay rather than a routine operation. The diagnostic: if the team 'saves up' changes for a release, the next release is where the risk has been accumulating.",
    vocabulary: [
      "deployment pipeline",
      "continuous integration",
      "continuous deployment",
      "trunk-based development",
      "feature flags",
      "blue-green deployment",
      "canary release",
      "deployment risk",
      "release train",
    ],
    howToDropIn:
      "\"Deployment fear is a symptom: we've made releases rare and therefore big. The CD move is to make releases small and frequent until they're boring. Every week without a pipeline is a week risk is accumulating, not decreasing.\"",
    commonPhrasing:
      "Engineering transformation, platform investment, DevOps adoption, architecture reviews, contracts or RFPs that require agile delivery.",
    notes:
      "Continuous Delivery (kept deployment-ready at all times) vs. Continuous Deployment (auto-deployed on merge) is a meaningful distinction — most teams should develop the discipline before the automation. Trunk-based development with short-lived branches is the enabling practice for CI; long-lived feature branches defeat it. The DORA metrics measure the outcomes of a mature CD practice. Political case: every sprint that ends without a deployable increment is a sprint where the program can't respond to a policy change or oversight finding.",
    source: "Jez Humble and David Farley, Continuous Delivery (2010).",
    tags: ["delivery", "devops", "engineering", "deployment"],
  },

  // —— DevOps / engineering metrics ————————————————————————————————————————

  {
    name: "DORA Metrics",
    category: "devops",
    oneLiner:
      "Four empirically-validated metrics measuring software delivery performance: Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service.",
    whenToUse:
      "Benchmarking delivery performance, making the investment case for CI/CD or testing infrastructure, or cutting through debates about engineering quality with data rather than opinion.",
    vocabulary: [
      "deployment frequency",
      "lead time for changes",
      "change failure rate",
      "time to restore service",
      "MTTR",
      "elite performer",
      "throughput",
      "stability",
      "State of DevOps",
    ],
    howToDropIn:
      "\"DORA gives us the benchmark. Our change failure rate and time to restore are in the 'medium' band — that means we invest in testing and observability before we increase deployment frequency, not after.\"",
    commonPhrasing:
      "Engineering leadership, platform team investment cases, DevOps maturity assessments, engineering OKRs, government digital service evaluations.",
    notes:
      "The four metrics split into two pairs: throughput (deployment frequency + lead time) and stability (change failure rate + time to restore). The key research finding: high performers don't trade off speed for stability — they achieve both. Throughput and stability are positively correlated in elite teams, not negatively. Teams that believe 'we have to slow down to improve quality' have it backwards; the research shows quality practice enables speed. Pair with Continuous Delivery (mechanisms) and Team Topologies (organizational pre-conditions).",
    source: "DORA (DevOps Research and Assessment); Forsgren, Humble, Kim, Accelerate (2018); Google Cloud DORA annual State of DevOps reports.",
    tags: ["devops", "delivery", "metrics", "engineering"],
  },

  // —— Service design ———————————————————————————————————————————————————————

  {
    name: "NN/g Journey Management",
    category: "service_design",
    oneLiner:
      "The ongoing organizational discipline of treating customer journeys as managed products — with named journey owners, journey KPIs, and governance — rather than as one-time mapping artifacts.",
    whenToUse:
      "When an organization has produced journey maps but nothing has improved because no one owns the journey end-to-end. Distinguishes the artifact (journey map) from the capability (journey management).",
    vocabulary: [
      "journey owner",
      "journey KPI",
      "journey governance",
      "orchestration",
      "journey portfolio",
      "current-state map",
      "future-state vision",
      "cross-functional journey team",
    ],
    howToDropIn:
      "\"The maps are done; the problem is no one owns the journey and we have no KPIs for it. That's the shift from journey mapping to journey management — it's an organizational capability, not a deliverable.\"",
    commonPhrasing:
      "CX strategy, service design maturity assessments, digital transformation programs, government/public sector service improvement, any post-mapping situation where 'we made the map, now what?'",
    notes:
      "NN/g's research found that high-maturity CX organizations assign named owners to journeys (analogous to product owners), define metrics that measure the whole journey rather than channel-specific KPIs, and run regular governance to coordinate the multiple internal teams that touch a single journey. The failure mode is journey maps as documents — published, archived, consulted once at launch, never updated. The management question is: who is accountable when the journey degrades? Pair with Service Blueprint (to give the journey owner visibility below the line of visibility) and OKRs (to operationalize journey KPIs quarterly).",
    source: "Gibbons, Sarah. 'Journey Management' (NN/g, 2018) and NN/g CX maturity research series.",
    tags: ["service_design", "cx", "design", "governance"],
  },

  // —— Product management ——————————————————————————————————————————————————

  {
    name: "OKRs (Objectives and Key Results)",
    category: "strategy",
    oneLiner:
      "A goal-setting framework pairing an ambitious qualitative objective with 2–5 measurable key results that define what success looks like, typically on a quarterly or annual cadence.",
    whenToUse:
      "When an org or team needs alignment between strategy and execution, and when 'we're busy' needs to be distinguished from 'we're moving the outcome we care about.'",
    vocabulary: [
      "objective",
      "key result",
      "committed OKR",
      "aspirational OKR",
      "stretch goal",
      "check-in",
      "grading",
      "input metric",
      "leading indicator",
    ],
    howToDropIn:
      "\"Let's separate the objective from the key results. If all the KRs are tasks ('launch X feature'), they're not results — rewrite them as measurable outcomes. Otherwise we'll finish the OKR without knowing if we succeeded.\"",
    commonPhrasing:
      "Strategy sessions, product roadmap reviews, exec team planning, portfolio alignment conversations, any situation where team effort and organizational priority are visibly decoupled.",
    notes:
      "OKRs are a forcing function for the question 'how would we know we succeeded?' — a question most goal statements never actually answer. The most common failure: key results that are tasks ('ship feature X') rather than outcomes ('increase metric Y by Z%'). Key results should be leading indicators of the objective, not the objective restated as an output. Andy Grove invented them at Intel in the 1970s; Google scaled and popularized them. Pair with North Star Metric (the enduring signal OKRs build toward) and Trajectory Management (the between-review monitoring discipline).",
    source: "Andy Grove, High Output Management (1983); John Doerr, Measure What Matters (2018).",
    tags: ["strategy", "product", "goal_setting", "alignment"],
  },
  {
    name: "RICE Scoring",
    category: "product",
    oneLiner:
      "A prioritization formula — (Reach × Impact × Confidence) / Effort — that converts subjective roadmap debates into an auditable, comparable score across candidates.",
    whenToUse:
      "Product roadmap discussions where everyone thinks their initiative is highest priority and the team needs a shared language for trade-offs that doesn't collapse into HiPPO (Highest Paid Person's Opinion).",
    vocabulary: [
      "reach",
      "impact",
      "confidence",
      "effort",
      "RICE score",
      "HiPPO",
      "prioritization debt",
    ],
    howToDropIn:
      "\"Run the RICE on each candidate and share the inputs. The conversation will shift from 'this is important' to 'show me your reach estimate and your confidence.' That's the right argument to have.\"",
    commonPhrasing:
      "Roadmap reviews, quarterly planning, product strategy, any prioritization session where the backlog is longer than the team and every stakeholder has a favorite.",
    notes:
      "The Confidence factor is the one that most productively shifts conversations — it requires people to admit how uncertain they are rather than asserting priority. The formula is a conversation tool, not an oracle; the value is in comparing inputs and exposing assumptions, not trusting the output. Common variant: weighted scoring matrices with custom dimensions for your context. MoSCoW is a lighter complement for rapid triage before RICE scoring. Pair with Opportunity Solution Tree to make sure you're scoring the right candidates in the first place.",
    source: "Sean McBride, Intercom, 'RICE: Simple Prioritization for Product Managers' (2016).",
    tags: ["product", "prioritization", "planning"],
  },
  {
    name: "MoSCoW Prioritization",
    category: "product",
    oneLiner:
      "A four-bucket scope triage: Must have (non-negotiable), Should have (important but not blocking), Could have (desirable if time allows), Won't have this time (explicitly deferred).",
    whenToUse:
      "Scope conversations in fixed-time or fixed-budget projects, sprint planning under delivery pressure, or any situation where you need explicit agreement on what's in and out of scope before the deadline arrives.",
    vocabulary: [
      "must have",
      "should have",
      "could have",
      "won't have",
      "timeboxing",
      "scope agreement",
      "DSDM",
    ],
    howToDropIn:
      "\"Before this goes to the sponsor: which items are Must Haves? If all of them are, we don't have a prioritization — we have a honesty problem. Let's MoSCoW it and find out.\"",
    commonPhrasing:
      "Agile projects, government IT delivery, fixed-price contracts, product scope reviews, sprint planning when scope pressure is high.",
    notes:
      "The discipline is in 'Won't have this time' — explicitly deciding what's out of scope now. Teams that skip this find 'Won't have' items quietly re-entering scope mid-delivery. Rule of thumb: if more than 60% of items are Must Haves, the prioritization is dishonest and needs another pass. MoSCoW originated in DSDM (Dynamic Systems Development Method) and survived as the prioritization vocabulary in UK government digital delivery and GDS. Pair with RICE for deeper scoring once you've triaged the rough categories.",
    source: "Dai Clegg, DSDM (Dynamic Systems Development Method), 1994.",
    tags: ["product", "prioritization", "scope", "planning"],
  },
  {
    name: "North Star Metric",
    category: "product",
    oneLiner:
      "A single metric that best captures the core value a product delivers to customers, serving as the organizing signal that cuts through competing metrics and aligns team effort.",
    whenToUse:
      "When a product team tracks too many metrics that point in different directions, when business metrics (revenue) and user metrics (engagement) are in tension, or when 'what are we optimizing for?' produces a different answer from each person in the room.",
    vocabulary: [
      "north star metric",
      "leading indicator",
      "lagging indicator",
      "input metric",
      "health metric",
      "guardrail metric",
      "vanity metric",
    ],
    howToDropIn:
      "\"We're optimizing three metrics that point in different directions. The north star question is: which single number, if it went up, would we be confident we're delivering real user value? Everything else is either a driver or a guardrail.\"",
    commonPhrasing:
      "Product strategy, growth team conversations, engineering alignment, exec reporting, quarterly OKR reviews.",
    notes:
      "The North Star Metric is useful because it forces the question of what 'user value' actually means for your product — revenue is a lagging indicator of it, engagement can be a vanity metric, usage can be inflated by friction. The best north stars are specific, measurable, and causally connected to long-term sustainable success. Input metrics (the levers teams pull) and guardrail metrics (things that can't be sacrificed) complete the picture. Pair with OKRs (the North Star is the enduring signal; OKRs are the quarterly moves toward it) and DORA (North Star measures product output; DORA measures delivery system health).",
    source: "Amplitude, 'The North Star Playbook' (2018). Concept developed across Spotify, Airbnb, and similar product-led companies.",
    tags: ["product", "strategy", "metrics", "alignment"],
  },
  {
    name: "Opportunity Solution Tree",
    category: "product",
    oneLiner:
      "A visual framework that connects a desired outcome to a mapped set of opportunities (unmet user needs), solution ideas, and experiments — keeping discovery grounded in outcomes rather than jumping to solutioning.",
    whenToUse:
      "Product discovery work where the team is three levels deep in solution mode before they've agreed on the opportunity they're addressing, or where user research is disconnected from delivery commitments.",
    vocabulary: [
      "outcome",
      "opportunity",
      "solution",
      "experiment",
      "assumption",
      "discovery tree",
      "opportunity space",
      "continuous discovery",
    ],
    howToDropIn:
      "\"We're already debating implementations when we haven't agreed on which opportunity we're targeting. Let's build the tree: outcome first, then the opportunity, then we can compare solutions as competing bets against the same target.\"",
    commonPhrasing:
      "Product discovery rituals, OKR-to-product translation, sprint goal setting, roadmap rationale conversations.",
    notes:
      "Teresa Torres developed this to bridge the gap between product strategy (outcomes, OKRs) and day-to-day discovery work. The structure prevents jumping from 'we learned something' to 'build the feature' — solutions must be candidates against a mapped opportunity, which is itself selected under a defined outcome. Each branch is a bet; the tree makes bets visible and comparable. The discipline is keeping it updated from real, recent evidence (weekly user touchpoints) rather than letting it calcify into assumptions. Pair with JTBD (for opportunity framing) and Lean UX (for the experiment design).",
    source: "Teresa Torres, Continuous Discovery Habits (2021).",
    tags: ["product", "discovery", "research", "planning"],
  },

  // —— UX engineering ——————————————————————————————————————————————————————

  {
    name: "WCAG / Web Accessibility",
    category: "ux_engineering",
    oneLiner:
      "The Web Content Accessibility Guidelines, organized around four principles (Perceivable, Operable, Understandable, Robust) and three conformance levels (A, AA, AAA) — the legal and ethical floor for digital interfaces.",
    whenToUse:
      "Any digital interface work. WCAG 2.1 AA is the legal standard in most jurisdictions — Section 508 in the US, WCAG 2.1 AA mandated for UK public sector, referenced in EU/EAA. Not optional for government services.",
    vocabulary: [
      "POUR",
      "perceivable",
      "operable",
      "understandable",
      "robust",
      "WCAG 2.1",
      "AA",
      "Section 508",
      "ARIA",
      "alt text",
      "focus management",
      "color contrast",
      "keyboard navigation",
      "screen reader",
    ],
    howToDropIn:
      "\"The legal floor for this is WCAG 2.1 AA. Let's run a quick audit against the four POUR principles and surface the critical failures before this gets to legal or procurement.\"",
    commonPhrasing:
      "Government digital services, healthcare and benefits systems, anything with Section 508 requirements, vendor evaluations, procurement conversations.",
    notes:
      "Accessibility is a design and engineering constraint, not a QA checklist at the end. It affects architecture (ARIA roles and landmark structure), content (alt text, link text that makes sense out of context), visual design (4.5:1 color contrast minimum for normal text), and engineering (focus management, keyboard navigation, skip links). Automated tools (axe, Lighthouse) catch roughly 30–40% of issues; the rest require manual testing with actual assistive technologies. Building it in from the start is far cheaper than retrofitting. In public-sector contracts, WCAG compliance is often a deliverable requirement — it should be in the definition of done.",
    source: "W3C WCAG 2.1 specification (2018). US: Section 508, ADA Title III. UK: Public Sector Bodies Accessibility Regulations.",
    tags: ["ux_engineering", "accessibility", "design", "compliance"],
  },
  {
    name: "Design Systems",
    category: "ux_engineering",
    oneLiner:
      "A collection of reusable components, design tokens, patterns, and documentation built and maintained as shared infrastructure, enabling multiple teams to build consistent interfaces at scale without duplicating decisions.",
    whenToUse:
      "When multiple teams or products are building UI independently and producing inconsistent results; when front-end work is duplicated across teams; when onboarding new designers or engineers is slow because there's no canonical reference.",
    vocabulary: [
      "design token",
      "component library",
      "pattern library",
      "atomic design",
      "single source of truth",
      "design-dev handoff",
      "governance model",
      "versioning",
      "accessibility baked-in",
    ],
    howToDropIn:
      "\"The inconsistency problem is a governance problem, but the design system is the structural answer — one canonical button component that everyone uses means we fix it once and the fix propagates everywhere.\"",
    commonPhrasing:
      "Platform/design engineering teams, product design maturity conversations, design-to-dev handoff, UI consistency, scaling a digital practice.",
    notes:
      "A design system is infrastructure, not a deliverable — it has to be maintained like software or it becomes a liability rather than an asset. The failure mode: a component library the team stops using because it doesn't keep pace with product needs or isn't discoverable. Governance matters as much as the components: who owns additions, how are decisions made, is it versioned with a changelog (it should be). Best-practice systems bake accessibility in at the component level so consuming teams get it for free. Reference implementations: UK GOV.UK Design System, USDS designsystem.digital.gov, Atlassian, Material Design.",
    source: "Brad Frost, Atomic Design (2016); Nathan Curtis (EightShapes); Invision Design Systems Handbook.",
    tags: ["ux_engineering", "design", "engineering", "platform"],
  },

  // —— Program management ——————————————————————————————————————————————————

  {
    name: "Benefits Realization Management (BRM)",
    category: "program_management",
    oneLiner:
      "A discipline for ensuring programs deliver intended business value — identifying and quantifying benefits up front, assigning benefit owners, and confirming actual value materialized after deployment.",
    whenToUse:
      "Large programs where the business case was strong enough to get funding but nobody tracks whether the promised benefits actually arrived post-launch. Particularly common in government IT modernization and enterprise transformation.",
    vocabulary: [
      "benefits register",
      "benefit owner",
      "investment thesis",
      "realization plan",
      "transition benefit",
      "end benefit",
      "dis-benefit",
      "post-implementation review",
    ],
    howToDropIn:
      "\"The business case projected significant savings. Who owns the benefits register? If nobody is tracking against it, we'll spend three years delivering and find out afterward whether we got any value at all — or whether the dis-benefits outweighed them.\"",
    commonPhrasing:
      "Program governance, gate reviews, business cases, post-implementation reviews, government IT modernization, OMB budget and performance conversations.",
    notes:
      "The core failure BRM exists to prevent: teams build what was specified, declare victory at go-live, and no one checks whether the anticipated benefits materialized. Benefits registers and named benefit owners force accountability for value, not just delivery. In government, the 'what did we actually get?' question in any post-implementation review is the BRM question — OMB guidance implicitly requires it. Pair with OKRs as the quarterly tracking vehicle for benefits and with Delivery Forensics (pre-hoc check on whether structural conditions for benefits realization even exist).",
    source: "Gerald Bradley, Benefit Realisation Management (2006); PMI Benefits Realization Management Framework (2019).",
    tags: ["program_management", "governance", "public_sector", "delivery"],
  },
  {
    name: "Theory of Change",
    category: "program_management",
    oneLiner:
      "A logic model tracing the pathway from activities and outputs to outcomes and long-term impact, making the causal assumptions in a program's intervention theory explicit and testable.",
    whenToUse:
      "Program design, grant applications, evaluation planning, and any context where you need to articulate why your intervention will produce the impact you claim and surface what has to be true for that to work.",
    vocabulary: [
      "inputs",
      "activities",
      "outputs",
      "outcomes",
      "impact",
      "assumptions",
      "preconditions",
      "causal pathway",
      "logic model",
      "intervention theory",
    ],
    howToDropIn:
      "\"Before we finalize the design, let's map the theory of change — specifically the assumptions. If we trace from activities to impact and name the preconditions, we'll find the weakest links before we've committed the budget.\"",
    commonPhrasing:
      "Government programs, nonprofit and foundation work, federal grant design, program evaluation (USAID, HHS, DOE), impact investing, legislative testimony on program rationale.",
    notes:
      "The theory of change is only useful if the assumptions are explicit and treated as hypotheses rather than narrative background. 'People will use the portal' is an assumption; 'case workers will change their workflow' is an assumption; both should be listed and tested. Distinguishes from a plain logic model (linear inputs-outputs-outcomes) by including the causal pathways and the assumptions — why and how this intervention should work. Pair with Trajectory Management (which monitors whether the causal pathway is actually holding during delivery) and Delivery Forensics (which stress-tests the structural assumptions before launch).",
    source: "Aspen Institute Roundtable on Community Change (1995); USAID Evaluation Learning series; CDC Program Evaluation Framework.",
    tags: ["program_management", "public_sector", "evaluation", "policy"],
  },
  {
    name: "Category Management 8-Step Process",
    category: "category_management",
    oneLiner:
      "The canonical retail playbook: Define → Role → Assess → Scorecard → Strategy → Tactics → Implement → Review. The end-to-end loop a category captain runs with a retailer.",
    whenToUse:
      "Whenever the work is 'manage a category' rather than 'launch a product'. It's the operating system the merchant calendar runs on — line reviews, planogram resets, joint business plans, and supplier negotiations all hang off these eight steps.",
    vocabulary: [
      "category definition",
      "category role",
      "category assessment",
      "category scorecard",
      "category strategy",
      "category tactics",
      "implementation",
      "category review",
      "line review",
      "JBP",
      "joint business plan",
    ],
    howToDropIn:
      "\"Which step are we actually at? If we haven't agreed the category's role for this retailer, debating the planogram is premature — we're arguing tactics before strategy.\"",
    commonPhrasing:
      "Buyer/merchant conversations, supplier line reviews, retailer joint business planning. The eight steps are the lingua franca: every CPG account team, every retailer's merchant org, every category captain deck.",
    notes:
      "Originated by Brian Harris (The Partnering Group) in the late 1980s, codified by AC Nielsen and ECR Europe in the 1990s. The framework's strength is also its weakness: it became methodology cosplay in many CPG orgs — decks that march through eight steps without the underlying data discipline. The real practitioners spend 70% of the time in Assess (steps 3 and 4); amateurs jump to Tactics. The IA parallel: it's essentially a service blueprint for the buyer–supplier relationship, with the planogram as the most visible artifact and the scorecard as the durable governance object.",
    source: "Brian Harris, The Partnering Group; ACNielsen 'Category Management: Positioning Your Organization to Win' (1992); ECR Europe Category Management Best Practices (1997).",
    tags: ["category_management", "retail", "process", "merchandising"],
  },
  {
    name: "Category Roles",
    category: "category_management",
    oneLiner:
      "Every category plays one of four roles in a retailer's portfolio: Destination, Routine, Occasional/Seasonal, or Convenience. The role dictates everything downstream — space, price, promo, assortment depth.",
    whenToUse:
      "Step 2 of the 8-step process, and the single most leveraged decision in category management. Used to align supplier and retailer on what 'winning' looks like in this category before any tactical conversation.",
    vocabulary: [
      "destination",
      "routine",
      "preferred",
      "occasional",
      "seasonal",
      "convenience",
      "fill-in",
      "traffic category",
      "profit category",
      "image category",
    ],
    howToDropIn:
      "\"Costco treats wine as a Destination category — that's why the assortment is curated, the prices are sharp, and the space is disproportionate to sales. For them it's an image and traffic play, not a margin play. We can't pitch them like it's a Routine category.\"",
    commonPhrasing:
      "Retailer strategy reviews, supplier JBPs, planogram resets. \"What role is this category for you?\" is the opening question of any serious category-captain conversation.",
    notes:
      "The four roles correspond loosely to BCG-matrix logic applied at the category level: Destination = star (over-invest), Routine = cash cow (defend), Occasional = question mark (selective bets), Convenience = dog (minimum viable presence). The trap is letting the supplier's view of the category drive role assignment — the role belongs to the retailer's strategy, not the brand's ambition. A category captain who fails to grasp this gets fired.",
    source: "ACNielsen / Brian Harris (1990s); operationalized in ECR Europe Category Management Best Practices.",
    tags: ["category_management", "retail", "strategy", "merchandising"],
  },
  {
    name: "Category Strategies (the Seven)",
    category: "category_management",
    oneLiner:
      "Once a role is set, the category gets assigned one or more strategies: Traffic Building, Transaction Building, Profit Generating, Cash Generating, Excitement Creating, Image Enhancing, Turf Defending.",
    whenToUse:
      "Step 5 of the 8-step process. Bridges the role (what the category does for the retailer) to the tactics (assortment, pricing, promotion, placement). Without explicit strategy choices, tactical decisions become incoherent.",
    vocabulary: [
      "traffic building",
      "transaction building",
      "profit generating",
      "cash generating",
      "excitement creating",
      "image enhancing",
      "turf defending",
      "basket size",
      "trip frequency",
    ],
    howToDropIn:
      "\"Diapers is a Traffic Building strategy for us — we run them at or below cost to drive trip frequency. The profit recovery happens in the adjacent baby-care aisle, which is Profit Generating. Treating both with the same margin discipline would destroy the model.\"",
    commonPhrasing:
      "Used inside merchant teams to justify margin variance across categories. Loss-leader pricing is the most famous expression of Traffic Building strategy.",
    notes:
      "The strategies aren't mutually exclusive — a strong category often plays two (e.g., Image Enhancing + Profit Generating for specialty cheese at Whole Foods). Turf Defending is the most under-named strategy: protecting share against a specific competitor (Aldi, Amazon, Costco) often justifies tactics that look irrational in isolation. The product-management parallel: this is the equivalent of choosing whether a feature is for acquisition, activation, retention, revenue, or referral — same logic, retail vocabulary.",
    source: "ACNielsen Category Management framework; refined in ECR practitioner literature.",
    tags: ["category_management", "retail", "strategy", "pricing"],
  },
  {
    name: "Consumer Decision Tree (CDT)",
    category: "category_management",
    oneLiner:
      "A hierarchical model of how shoppers actually choose within a category — the order of attributes they evaluate (e.g., for coffee: caffeine type → roast → size → brand → price). The IA of the shelf.",
    whenToUse:
      "When designing an assortment or planogram, segmenting the category, or arguing for adjacency changes. The CDT is the empirical answer to 'how should this category be organized from the shopper's perspective?'",
    vocabulary: [
      "consumer decision tree",
      "shopper decision hierarchy",
      "attribute hierarchy",
      "need state",
      "category segmentation",
      "decision node",
      "substitutability",
    ],
    howToDropIn:
      "\"The CDT for pet food shows shoppers decide species first, then life stage, then format — brand is the fourth node, not the first. If we organize the aisle by brand block, we're fighting how people actually shop, and we'll lose share to the retailer who blocks by life stage.\"",
    commonPhrasing:
      "Category insights briefs, planogram resets, range reviews. CPG insights teams (Nielsen, IRI/Circana, Kantar) sell CDT studies as a standard deliverable.",
    notes:
      "This is the closest retail analog to information architecture and card-sorting research — and the discipline is genuinely the same: empirical study of how a population mentally structures a domain. The mistake is treating CDT as a one-time study; shopper decision hierarchies shift with format (online vs. store), occasion (weekly shop vs. top-up), and life stage. A defensible CDT is segment-specific. Pair with Jobs To Be Done — JTBD names the job, CDT names the substitution set the shopper considers while doing it.",
    source: "Industry standard since the 1990s; methodologies from ACNielsen, IRI/Circana, Kantar, dunnhumby.",
    tags: ["category_management", "retail", "shopper", "information_architecture"],
  },
  {
    name: "Shopper Missions & Trip Types",
    category: "category_management",
    oneLiner:
      "Shoppers don't enter a store as 'customers' — they enter on a mission: stock-up, top-up, immediate consumption, meal-for-tonight, special occasion. Mission predicts basket, route, price sensitivity, and what 'good' looks like.",
    whenToUse:
      "Store layout, format strategy (convenience vs. supermarket vs. hypermarket), online vs. offline assortment, and any conversation where 'who is the customer' is the wrong question and 'what trip are they on' is the right one.",
    vocabulary: [
      "trip mission",
      "stock-up trip",
      "top-up trip",
      "fill-in trip",
      "immediate consumption",
      "meal solution",
      "occasion",
      "trip frequency",
      "basket size",
      "shopper segment",
    ],
    howToDropIn:
      "\"The shopper isn't loyal to a store — they're loyal to a mission. The same person does a Costco stock-up on Sunday, a Whole Foods meal-for-tonight on Wednesday, and a 7-Eleven immediate-consumption trip Friday afternoon. We're competing for the mission, not the person.\"",
    commonPhrasing:
      "Format strategy reviews, store-of-the-future workshops, online grocery strategy. Tesco's Clubcard era and dunnhumby's segmentation work made this the dominant frame in modern grocery.",
    notes:
      "This is Jobs To Be Done applied to retail visits rather than products — and it's older than JTBD as a formal framework. Trip mission is what every category captain who's earned their stripes leads with, because it's the unit of analysis that resolves debates about adjacency, format, and pricing. Online has not killed mission — Instacart, Amazon Fresh, and DoorDash all map to distinct missions, and the platforms that confuse missions (one-size-fits-all UX) lose to the ones that segment.",
    source: "Tesco / dunnhumby Clubcard analysis (1995+); IGD and Kantar shopper studies; Herb Sorensen's 'Inside the Mind of the Shopper' (2009).",
    tags: ["category_management", "retail", "shopper", "jtbd"],
  },
  {
    name: "Planogram (POG)",
    category: "category_management",
    oneLiner:
      "The shelf-level diagram specifying which SKU goes where, how many facings, at what eye-level. The visible artifact of category strategy and the operational handoff to store labor.",
    whenToUse:
      "Reset cycles (typically 1–2x per year per category), new-item launches, range rationalizations, and store-cluster differentiation. Every category review terminates in a planogram change or it didn't change anything.",
    vocabulary: [
      "planogram",
      "POG",
      "facings",
      "eye level",
      "vertical block",
      "horizontal block",
      "brand block",
      "segment block",
      "shelf flow",
      "POG software",
      "JDA",
      "Blue Yonder",
      "Apollo",
      "Spaceman",
    ],
    howToDropIn:
      "\"The planogram is the spec. If the category strategy doesn't show up at the shelf — facings, eye level, adjacency — it didn't happen. Stores don't execute strategies, they execute planograms.\"",
    commonPhrasing:
      "Universal in merchant and supplier conversations. \"Did we get the POG?\" is shorthand for \"did our recommendations actually land?\"",
    notes:
      "The PM equivalent: planogram is to category strategy what a high-fidelity Figma spec is to a feature plan — the artifact that survives the handoff. The discipline of constraint is similar: facing counts are scarce inventory, eye-level real estate is contested, and every SKU added requires another deleted. Software (Blue Yonder/JDA Space Planning, Symphony GOLD, RELEX) automates the geometry; judgment lives in the segmentation logic the planogram expresses. Online has its own version (search-results ordering, browse taxonomy) but the same battle: who controls placement controls economics.",
    source: "Origins in the 1960s; software era starting late 1980s (Apollo, Spaceman); modern stack dominated by Blue Yonder, Symphony GOLD, RELEX.",
    tags: ["category_management", "retail", "merchandising", "operations"],
  },
  {
    name: "Category Captaincy",
    category: "category_management",
    oneLiner:
      "The strategic arrangement where a retailer designates one supplier as the lead advisor for an entire category — handling assortment recommendations, planograms, and insights for the whole shelf, including competitors.",
    whenToUse:
      "Understanding the political economy of CPG–retailer relationships, sales account strategy, antitrust exposure conversations, and any analysis of why retailers favor certain brands at shelf.",
    vocabulary: [
      "category captain",
      "validator",
      "captain",
      "challenger",
      "advisor",
      "retailer–supplier collaboration",
      "shelf set",
      "trade desk",
    ],
    howToDropIn:
      "\"The category captain writes the planogram and recommends the assortment — including which competitors live and die on the shelf. It's the closest thing in retail to writing the rulebook for the game you're playing in.\"",
    commonPhrasing:
      "CPG account team strategy, retailer relationship reviews. Pepsi captains beverages at many US grocers; P&G captains baby and laundry care; Mars captains pet food. Smaller brands fight for 'validator' or 'co-captain' status.",
    notes:
      "Antitrust risk is real — the FTC has scrutinized captaincy arrangements for self-dealing (favoring own SKUs, suppressing competitors). Best-practice captains write recommendations a regulator could defend, then let the retailer's merchant make the final call. The dynamic to grasp: captaincy is earned through superior data and insights, not negotiated through trade terms — though once held, it becomes a moat. The structural analog in software: being the default vendor whose API/data model the customer builds around.",
    source: "Emerged in the 1990s alongside the 8-step process; FTC workshop on category management (2001).",
    tags: ["category_management", "retail", "strategy", "competition"],
  },
  {
    name: "KVI and Price Architecture",
    category: "category_management",
    oneLiner:
      "Known Value Items (KVIs) are the ~50–200 SKUs shoppers use to judge a store's overall price position. Win on KVIs and you can hold margin everywhere else. Lose on KVIs and the rest doesn't matter.",
    whenToUse:
      "Pricing strategy, EDLP vs. Hi-Lo decisions, competitive pricing audits, private-label tiering, and any conversation where the team treats the assortment as a flat pricing surface rather than a structured architecture.",
    vocabulary: [
      "KVI",
      "known value item",
      "price image",
      "EDLP",
      "everyday low price",
      "Hi-Lo",
      "price zone",
      "price ladder",
      "price tiering",
      "price elasticity",
      "background items",
      "price index",
    ],
    howToDropIn:
      "\"Shoppers anchor on KVIs — milk, eggs, bananas, Coke 12-pack, Heinz ketchup. Get those right relative to the competitive set and the rest of the basket can carry margin. It's a Pareto problem: 5% of SKUs drive 80% of price perception.\"",
    commonPhrasing:
      "Pricing committees, competitive intelligence reviews, EDLP/Hi-Lo strategy debates. Walmart's entire model rests on aggressive KVI pricing funded by background-item margin.",
    notes:
      "The information-architecture parallel: KVIs are the navigation labels users actually read — get those right and they trust the whole system. Modern price-image work is data-driven (eye-tracking, conjoint, EPOS basket analysis); the unsophisticated version is the buyer's gut list of 'the items shoppers check'. Pair with Halo & Cannibalization (KVIs often have low intrinsic margin but generate halo); contrast with Loss Leader (KVI is structural, loss leader is tactical).",
    source: "Practitioner concept; quantified by dunnhumby, Nielsen, and academic work on price image (Hamilton & Chernev, 2013).",
    tags: ["category_management", "retail", "pricing", "shopper"],
  },
  {
    name: "Good-Better-Best Tiering",
    category: "category_management",
    oneLiner:
      "Structuring assortment within a category into three (sometimes four) quality/price tiers so shoppers can self-select and the retailer can capture across price sensitivities. The architectural backbone of private-label strategy.",
    whenToUse:
      "Range planning, private-label strategy, opening-price-point decisions, premiumization conversations. Any time the question is 'should we have one product or three' the answer is usually three, structured.",
    vocabulary: [
      "good-better-best",
      "GBB",
      "opening price point",
      "OPP",
      "mid-tier",
      "premium tier",
      "private label",
      "store brand",
      "exclusive brand",
      "tiered architecture",
      "value tier",
    ],
    howToDropIn:
      "\"Without a Good-Better-Best ladder, we're forcing shoppers to choose between buying our product or not buying. With it, we're choosing for them which margin tier they land in. The conversion question becomes a mix question.\"",
    commonPhrasing:
      "Retail strategy reviews, private-label expansion plans, pricing committees. Costco's Kirkland, Target's Good & Gather/Threshold/Up&Up, Trader Joe's almost-entirely-private-label model are all expressions.",
    notes:
      "The mid-tier is usually the volume sweet spot; the premium tier sets the ceiling that makes the mid-tier look reasonable; the value tier defends against discounter encroachment. The trap is letting tiers compete with each other (cannibalization) rather than expand the addressable shopper base. SaaS pricing pages are the direct software analog — same psychology, same anchoring math, same temptation to over-engineer.",
    source: "Practitioner standard; formalized in pricing literature (Rafi Mohammed 'The Art of Pricing'; HBR work on tiered offerings).",
    tags: ["category_management", "retail", "pricing", "assortment"],
  },
  {
    name: "Space-to-Sales Ratio",
    category: "category_management",
    oneLiner:
      "The basic arithmetic check of merchandising fairness: a brand's share of shelf space should approximate its share of category sales. Deviations have to be defended on strategy, not inertia.",
    whenToUse:
      "Planogram resets, range reviews, supplier negotiation. The supplier who walks into a buyer meeting with a clean space-to-sales analysis showing under-spaced fast-movers and over-spaced dogs has done their homework.",
    vocabulary: [
      "space to sales",
      "share of shelf",
      "share of category",
      "facings",
      "linear feet",
      "days of supply",
      "DOS",
      "shelf productivity",
    ],
    howToDropIn:
      "\"Brand X is at 22% share of category but holds 14% of facings — it's structurally under-spaced and we're losing sales to out-of-stocks. Brand Y is at 8% share and 18% of facings; the math says rebalance.\"",
    commonPhrasing:
      "Buyer meetings, supplier line reviews, planogram software outputs. Every category review deck has a space-to-sales chart somewhere.",
    notes:
      "Space-to-sales is necessary but not sufficient — it ignores strategy (a destination SKU may earn more space than its share warrants), shopper decision tree (segments need minimum presence even if low share), and days-of-supply constraints (high-velocity SKUs need extra facings just to avoid stockouts between replenishments). The metric's job is to surface obvious imbalances, not to dictate the answer. The PM analog: feature usage data — necessary input, not the decision.",
    source: "Standard category management metric since the 1990s; embedded in all major space-planning software.",
    tags: ["category_management", "retail", "merchandising", "metrics"],
  },
  {
    name: "GMROI (Gross Margin Return on Inventory)",
    category: "category_management",
    oneLiner:
      "GMROI = Gross Margin $ / Average Inventory Cost. The single number that fuses margin and turn — the unit economics of retail. A category with thin margin but fast turn can beat a high-margin slow-mover.",
    whenToUse:
      "Range rationalization, category role debates, SKU productivity reviews, capital-allocation conversations. Any time someone argues for margin or turn in isolation, GMROI is the integrating frame.",
    vocabulary: [
      "GMROI",
      "gross margin return on inventory",
      "GMROII",
      "inventory turn",
      "stock turn",
      "sell-through",
      "weeks of supply",
      "sales per square foot",
      "sales per linear foot",
    ],
    howToDropIn:
      "\"This SKU has 45% margin but turns twice a year. The 18%-margin SKU next to it turns twelve times. GMROI on the second one is higher — it's earning the shelf, the first one isn't.\"",
    commonPhrasing:
      "Buyer reviews, merchant performance scorecards, finance discussions. Apparel and specialty retail lean on GMROI especially hard because seasonality punishes slow turn.",
    notes:
      "GMROI is to retail what unit economics (LTV/CAC) is to SaaS — the integrating ratio that prevents single-axis optimization. The trap is using it in isolation: a high-GMROI SKU might be a destination KVI you can't afford to delete, or a basket-builder whose value lives in attach rate. The discipline is to treat GMROI as one lens, alongside strategic role and basket contribution. The unsophisticated retailer optimizes GMROI to a flat assortment of fast-turning commodities and dies of price compression.",
    source: "Standard retail finance metric; codified in retail management textbooks (Levy & Weitz, Berman & Evans).",
    tags: ["category_management", "retail", "metrics", "finance"],
  },
  {
    name: "Range Architecture / Line Review",
    category: "category_management",
    oneLiner:
      "The structured annual or bi-annual process where a retailer reviews every SKU in a category, decides what stays, what gets cut, what's added, and what's repositioned. The merchant's roadmap planning.",
    whenToUse:
      "The supplier-side rhythm of category management — line reviews are when category captaincy, space-to-sales analysis, CDTs, and shopper insights all get cashed in. Miss the line review and you wait a year.",
    vocabulary: [
      "line review",
      "range review",
      "range plan",
      "assortment plan",
      "SKU rationalization",
      "delist",
      "introduction",
      "MFI",
      "must-have",
      "tail items",
      "long tail",
    ],
    howToDropIn:
      "\"The line review is the merchant's roadmap meeting. You don't get to relitigate it for twelve months. Everything — the CDT, the planogram, the JBP — feeds into one decision window.\"",
    commonPhrasing:
      "CPG sales calendars are built around major retailers' line review cycles (Walmart, Target, Kroger, Tesco, etc.). 'When's the next line review?' is the first question on any account plan.",
    notes:
      "The product-management parallel is direct: line review is the quarterly/annual roadmap planning meeting where bets are made and resources allocated. Same dynamics — political maneuvering, data theater, and a few decisive moments where preparation pays off. The crucial difference: physical-retail line reviews have hard space constraints (you can't ship a feature flag, you have to delete an SKU to make room). That constraint is the discipline software PMs often lack.",
    source: "Retail standard practice; described in trade press (Progressive Grocer, Retail Dive) and CPG account-management training.",
    tags: ["category_management", "retail", "process", "merchandising"],
  },
  {
    name: "Adjacency and Aisle Flow",
    category: "category_management",
    oneLiner:
      "What goes next to what. The spatial logic of the store — placing complementary categories close enough to drive cross-shop, separated enough to avoid confusion. Information architecture in three dimensions.",
    whenToUse:
      "Store layout, format design, planogram macro decisions, online browse taxonomy. The category-management questions 'where does the category sit in the store' and 'what's its left and right neighbor' are pure IA questions in disguise.",
    vocabulary: [
      "adjacency",
      "aisle flow",
      "macro space",
      "micro space",
      "destination aisle",
      "power aisle",
      "racetrack layout",
      "grid layout",
      "free-flow layout",
      "decompression zone",
      "cross-merchandising",
    ],
    howToDropIn:
      "\"Pasta and pasta sauce next to each other is obvious; pasta sauce and parmesan is the move that earns the basket. Adjacency design is asking 'what's the next step in the shopper's mental sentence?'\"",
    commonPhrasing:
      "Store-format reviews, new-store design, refresh programs. IKEA's forced racetrack is the most-cited adjacency design; Trader Joe's deliberate cross-merchandising of wine and cheese is another.",
    notes:
      "Direct mapping to IA: adjacency is the navigation design of physical space. The same principles apply — proximity implies relationship, hierarchy implies importance, sequence implies process. The retail discipline has decades of empirical data (heatmaps, basket affinity analysis, eye-tracking) on what works that the web IA community has only recently caught up with. Pair with Consumer Decision Tree (the within-category IA) and Trip Mission (the across-category IA at the store level).",
    source: "Underhill's 'Why We Buy' (1999); Sorensen's 'Inside the Mind of the Shopper' (2009); IGD store-layout literature.",
    tags: ["category_management", "retail", "information_architecture", "merchandising"],
  },
  {
    name: "Halo and Cannibalization",
    category: "category_management",
    oneLiner:
      "Halo: a SKU drives incremental sales of adjacent SKUs. Cannibalization: a new SKU steals from existing SKUs in the same range. Every assortment decision sits between these two forces; the question is the net.",
    whenToUse:
      "New-item launches, range extensions, promo planning, private-label introductions. Without halo/cannibalization analysis, every launch looks like growth in its own line and a mystery hole somewhere else.",
    vocabulary: [
      "halo",
      "halo effect",
      "cannibalization",
      "source of volume",
      "incremental",
      "transfer",
      "trade-in",
      "trade-up",
      "trade-down",
      "switching",
      "category growth",
    ],
    howToDropIn:
      "\"The new premium SKU added $200K in line sales but $140K of it came from our existing mid-tier — net incremental is $60K, not $200K. The source-of-volume analysis is the difference between a real launch and a vanity launch.\"",
    commonPhrasing:
      "Innovation reviews, post-launch analysis, JBP negotiations. Source-of-volume is the question CFOs ask innovation teams; the teams that have an answer get budget.",
    notes:
      "The SaaS analog is feature cannibalization — new tiers stealing from old tiers, new SKUs (in pricing) stealing from old SKUs. Same math, less measurement discipline in software because the unit economics are usually fuzzier. The category-management strength is decades of source-of-volume methodology (panel data, controlled-store tests, modeled counterfactuals). Worth borrowing wholesale into product decisions.",
    source: "Nielsen, IRI/Circana, Kantar source-of-volume methodology; academic work on category demand and substitution.",
    tags: ["category_management", "retail", "metrics", "innovation"],
  },
  {
    name: "OTIF (On Time In Full)",
    category: "category_management",
    oneLiner:
      "The supply-chain SLA between a supplier and a retailer: deliveries arrive on the agreed day (On Time) and complete (In Full). Below threshold (often 95–98%), fines and de-listing follow.",
    whenToUse:
      "Supplier scorecard conversations, joint business planning, supply-chain reviews, any analysis of why a supplier is losing share. OTIF is the retail equivalent of uptime — visible only when it breaks, fatal when it does.",
    vocabulary: [
      "OTIF",
      "on time in full",
      "OSA",
      "on-shelf availability",
      "fill rate",
      "case fill",
      "service level",
      "chargebacks",
      "fines",
      "vendor scorecard",
      "MABD",
      "must-arrive-by date",
    ],
    howToDropIn:
      "\"Walmart's OTIF threshold is non-negotiable — miss it and the chargebacks erase the margin on the order. OTIF isn't an ops metric, it's a commercial metric: it's the SLA we sell against.\"",
    commonPhrasing:
      "Supplier reviews, supply-chain meetings, JBPs. Walmart's OTIF program (rolled out 2017, tightened repeatedly) became the industry benchmark; Target's, Kroger's, Tesco's similar programs followed.",
    notes:
      "The product-engineering parallel is SLA/SLO discipline — quantified service-level promises with consequences. OTIF is more brutal than most software SLAs because the fines hit the same P&L line as the revenue, so a 'successful' shipment can be a money-loser. The structural insight: in retail, the supply chain and the commercial relationship aren't separable. A category captain who can't run OTIF doesn't get to keep captaincy regardless of how good the insights deck is.",
    source: "Walmart OTIF program (2017+); industry-wide standard; Gartner and Kearney supply-chain literature.",
    tags: ["category_management", "retail", "supply_chain", "metrics"],
  },
  {
    name: "Open-to-Buy (OTB)",
    category: "category_management",
    oneLiner:
      "The buyer's budget control system: at any moment, OTB = planned receipts − committed receipts. The number that says how much room is left to place new orders without breaking the inventory plan.",
    whenToUse:
      "Understanding how merchants make in-season decisions, why a 'great' product gets passed on (no OTB), and how seasonality, markdown cadence, and inventory carry interact. Fundamental to apparel, specialty retail, and any category with seasonal flow.",
    vocabulary: [
      "open-to-buy",
      "OTB",
      "planned receipts",
      "committed",
      "BOP",
      "EOP",
      "beginning-of-period inventory",
      "end-of-period inventory",
      "markdown",
      "weeks of supply",
      "sell-through",
      "in-season",
      "pre-season",
    ],
    howToDropIn:
      "\"It doesn't matter how good the product is — if the buyer has no OTB for the period, it's a no. The pitch isn't about the product, it's about freeing up OTB by accelerating markdowns on slow movers.\"",
    commonPhrasing:
      "Merchant conversations, especially in apparel and specialty retail. Vendor sales reps live and die by understanding their buyers' OTB position.",
    notes:
      "OTB is the financial equivalent of headcount or budget in a product org — the gating constraint on what new bets can be made regardless of merit. Understanding OTB is the difference between a vendor who pitches features and one who pitches the buyer's job. The discipline is calendared (monthly OTB calculations) and pre-committed (buys placed 3–9 months ahead in apparel), so the leverage moves come from helping the buyer move the constraint, not from arguing past it.",
    source: "Retail finance and buying textbooks; standard apparel and specialty-retail practice.",
    tags: ["category_management", "retail", "finance", "merchandising"],
  },
  {
    name: "SKU Rationalization",
    category: "category_management",
    oneLiner:
      "The disciplined trimming of the assortment — deleting slow-moving, duplicative, or low-GMROI SKUs to free space, simplify operations, and improve shopper navigation. The retail equivalent of feature deprecation.",
    whenToUse:
      "Annual range reviews, post-acquisition integration, margin pressure responses, complexity-reduction programs. Trader Joe's runs a permanent SKU-rationalization discipline (every new item bumps an existing one); most retailers run it episodically and accumulate tail.",
    vocabulary: [
      "SKU rationalization",
      "tail",
      "long tail",
      "ABC analysis",
      "Pareto",
      "delist",
      "discontinue",
      "must-have",
      "MFI",
      "must-be-in",
      "complexity cost",
    ],
    howToDropIn:
      "\"The bottom 30% of SKUs deliver 4% of category sales and 11% of complexity cost. Cutting them isn't a loss, it's a simplification dividend — better in-stocks on the survivors, clearer shopper navigation, fewer markdowns.\"",
    commonPhrasing:
      "Range reviews, supply-chain simplification initiatives, post-merger integration. 'Pruning the tail' is universal grocery-merchant vocabulary.",
    notes:
      "The product-management parallel is feature deprecation — same emotional resistance, same political dynamics, same compounding cost of carrying complexity. The retail discipline is older and harsher: physical shelf space forces the decision, and POS data makes the case quantitative. Worth borrowing as a mental model into software: which features are your tail SKUs, and what are they costing in support load, onboarding friction, and engineering surface area?",
    source: "ABC analysis (Pareto/Juran); standard category-management practice; lean and ECR literature.",
    tags: ["category_management", "retail", "assortment", "simplification"],
  },
];

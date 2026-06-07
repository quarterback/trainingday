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
    source: "Barbara Minto, The Pyramid Principle (1st ed. 1985; developed at McKinsey from the late 1960s).",
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

  // —— eCommerce metrics & finance —————————————————————————————————————————

  {
    name: "Conversion Rate & the eCommerce Funnel",
    category: "ecommerce",
    oneLiner:
      "Conversion rate (CVR) is the share of sessions that complete the goal — usually a purchase. The funnel breaks that single number into stages (land → browse → product view → add-to-cart → checkout → purchase) so you can see exactly where shoppers leak out.",
    whenToUse:
      "Any time a site-experience decision needs to be defended in terms of outcomes. CVR is the first number a merchandising leader is asked about, and the funnel is how you move from 'conversion is down' to 'add-to-cart held but checkout abandonment spiked — it's a payment/shipping problem, not a merchandising one.'",
    vocabulary: [
      "conversion rate",
      "CVR",
      "CR",
      "purchase funnel",
      "add-to-cart rate",
      "ATC",
      "cart abandonment",
      "checkout abandonment",
      "micro-conversion",
      "macro-conversion",
      "bounce rate",
      "exit rate",
      "session",
      "fallout",
    ],
    howToDropIn:
      "\"Site-wide CVR is the headline, but it hides the story. The funnel shows product-view-to-cart is healthy and cart-to-checkout fell off a cliff — so this is a checkout-friction problem, not a discovery or assortment problem. Let's not re-merchandise the PLP to fix a shipping-threshold issue.\"",
    commonPhrasing:
      "Weekly trade meetings, site performance reviews, exec dashboards. \"What's converting?\" and \"where's the funnel leaking?\" are the standing questions.",
    notes:
      "Benchmark CVR for most retail eComm sits roughly 1.5–3% (varies hugely by category, traffic source, and device — mobile converts well below desktop). The discipline is segmentation: a blended CVR is nearly useless because paid-social traffic, branded-search traffic, and returning customers convert at wildly different rates. Distinguish micro-conversions (add-to-cart, sign-up, wishlist) from the macro-conversion (purchase) so you can diagnose mid-funnel. The product-analytics parallel is exact — this is the AARRR/pirate-metrics funnel applied to a storefront. Pair with RPV (which fuses CVR and AOV so you don't optimize conversion at the expense of basket size).",
    source: "Standard digital-commerce metric. Benchmarks: Baymard Institute (cart abandonment ~70%), Adobe/Contentsquare digital experience benchmarks.",
    tags: ["ecommerce", "metrics", "conversion", "merchandising"],
  },
  {
    name: "AOV, UPT & Basket Economics",
    category: "ecommerce",
    oneLiner:
      "Average Order Value (AOV) is revenue divided by orders; Units Per Transaction (UPT) is items per order. Together they describe basket size — the lever that grows revenue without needing a single extra visitor.",
    whenToUse:
      "Promotion design, free-shipping-threshold setting, cross-sell and bundling decisions, and any conversation about growing revenue when traffic is flat. AOV is the merchandiser's most direct revenue lever because it's downstream of placement, recommendations, and thresholds you actually control.",
    vocabulary: [
      "average order value",
      "AOV",
      "units per transaction",
      "UPT",
      "average selling price",
      "ASP",
      "attach rate",
      "cross-sell",
      "upsell",
      "basket building",
      "bundling",
      "free-shipping threshold",
      "add-on",
    ],
    howToDropIn:
      "\"Traffic is capped this quarter, so growth has to come from basket. Two levers: AOV via the free-shipping threshold and cross-sell on the PDP, and UPT via 'complete the look' and bundle merchandising. A $5 threshold move usually shifts AOV more than any banner we could run.\"",
    commonPhrasing:
      "Trade reviews, promo planning, merchandising QBRs. \"Traffic, conversion, AOV\" is the revenue triad every eComm leader recites.",
    notes:
      "Decompose carefully: AOV = ASP (average selling price) × UPT. A rising AOV driven by UPT (more items) is healthier than one driven by ASP alone (which can just mean discounting stopped). The classic intervention is the free-shipping threshold set just above current AOV — it's the single highest-ROI basket lever in eComm, well-documented to lift order value. The trap is chasing AOV with high-discount bundles that lift the top line and crush margin; always read AOV next to margin rate. The SaaS analog is expansion revenue / seat-and-add-on economics — same 'grow the existing relationship' logic.",
    source: "Standard retail/eCommerce finance. Free-shipping-threshold effects documented by Baymard, Deloitte holiday studies, and UPS/comScore Pulse of the Online Shopper.",
    tags: ["ecommerce", "metrics", "finance", "merchandising"],
  },
  {
    name: "Revenue Per Visit (RPV)",
    category: "ecommerce",
    oneLiner:
      "RPV = Conversion Rate × Average Order Value (equivalently, revenue ÷ sessions). The single metric that connects a site-experience decision to revenue, because it captures both whether people buy and how much they spend.",
    whenToUse:
      "Whenever you need to prove a merchandising or UX change was net-positive and not just a conversion trick. RPV is the answer to the JD line about 'connecting site experience decisions to revenue' — it's the metric that won't let you cheat one half of the funnel to inflate the other.",
    vocabulary: [
      "revenue per visit",
      "RPV",
      "revenue per visitor",
      "RPV = CVR × AOV",
      "revenue per session",
      "EPC",
      "earnings per click",
      "topline",
      "demand",
    ],
    howToDropIn:
      "\"Don't show me conversion in isolation. The aggressive discount lifted CVR 8% but cut AOV 12% — RPV is down, so the change destroyed value even though the conversion chart looks like a win. RPV is the metric we should be A/B testing against, not raw CVR.\"",
    commonPhrasing:
      "A/B test readouts, merchandising experiment reviews, executive scorecards. The metric that separates a real win from a vanity win.",
    notes:
      "RPV is the cleanest decision metric in eCommerce because it's a product of the two things merchandisers move — conversion and basket — and it strips out the traffic-volume noise that masks whether the experience itself improved. The discipline: set RPV (not CVR) as the primary metric on most merchandising and UX experiments, with margin as a guardrail so you don't buy revenue with discount. Closely related to GMROI in the physical-retail section: both are integrating ratios that prevent single-axis optimization. The web-analytics tooling reports the same idea as 'revenue per visit' or 'per session'; in affiliate/paid contexts it shows up as EPC (earnings per click).",
    source: "Standard conversion-optimization metric; emphasized in CRO practice (Optimizely, VWO, GoodUI experiment literature).",
    tags: ["ecommerce", "metrics", "finance", "conversion"],
  },
  {
    name: "Sell-Through Rate",
    category: "ecommerce",
    oneLiner:
      "Sell-through % = units sold ÷ units received, over a period. The core read on whether you bought the right amount of the right product — and the trigger for reorder, markdown, or 'we over-bought.'",
    whenToUse:
      "Buy planning, in-season trading, markdown timing, and any post-launch read on a product or collection. Sell-through is how merchandising performance is judged against the inventory commitment — the link between site decisions and 'inventory outcomes.'",
    vocabulary: [
      "sell-through",
      "sell-through rate",
      "ST%",
      "full-price sell-through",
      "regular-price sell-through",
      "weeks of supply",
      "WOS",
      "rate of sale",
      "ROS",
      "replenishment",
      "reorder point",
      "season",
      "end-of-life",
    ],
    howToDropIn:
      "\"This collection is at 65% full-price sell-through in week 3 against a 50% plan — it's running hot, so the merchandising move is to feature it harder and chase units while we can reorder, not to discount. The slow style next to it is at 20%; that's the markdown candidate, and surfacing it on the homepage is just burning prime real estate.\"",
    commonPhrasing:
      "Buy reviews, weekly trade, markdown committees. \"How's it selling through?\" is the universal merchant question.",
    notes:
      "Two flavors matter: total sell-through (includes marked-down units — tells you if you'll clear the buy) and full-price / regular-price sell-through (excludes markdowns — tells you if the product had real demand at the price you intended). A high total sell-through achieved entirely on markdown is a margin failure dressed as a success. Sell-through and weeks-of-supply are two views of the same inventory question: ST% looks backward at what's gone, WOS looks forward at how long the rest will last at current rate of sale. Site merchandising directly drives sell-through — placement, search ranking, and editorial features are how you accelerate a slow style or protect a hot one. Pair with Open-to-Buy and GMROI in the category-management section.",
    source: "Standard retail/merchandise-planning metric (Levy & Weitz, Retail Management; standard buying & merchandising practice).",
    tags: ["ecommerce", "metrics", "merchandising", "inventory"],
  },
  {
    name: "Gross Margin, Markdown & Markup",
    category: "ecommerce",
    oneLiner:
      "Gross margin is what's left of revenue after the cost of goods (in $ and as a %). Markup is the cushion you build in when you set the price; markdown is the cushion you give back to move inventory. Merchandising decisions live or die in the gap between the two.",
    whenToUse:
      "Pricing and promo decisions, markdown cadence, range planning, and any time a 'grow revenue' idea needs to be checked against profitability. This is the 'margin outcomes' half of the JD — the discipline of not buying topline with margin you can't afford.",
    vocabulary: [
      "gross margin",
      "gross margin rate",
      "margin dollars",
      "GM%",
      "cost of goods sold",
      "COGS",
      "markup",
      "initial markup",
      "IMU",
      "maintained markup",
      "MMU",
      "keystone",
      "markdown",
      "markdown rate",
      "promotional margin",
      "shrink",
      "contribution margin",
    ],
    howToDropIn:
      "\"The promo lifts demand, but at 40% off we're below maintained-markup target — margin dollars per order actually shrink. Initial markup gave us room for some markdown; we've now spent it. Let's protect margin by featuring full-price newness and confining the discount to the styles that have to clear.\"",
    commonPhrasing:
      "Pricing committees, promo planning, finance reviews, merchant scorecards. \"Rate vs. dollars\" is the recurring tension.",
    notes:
      "The most common rookie error is conflating margin rate (a %) with margin dollars (the absolute money). A lower-rate product that sells far more units can deliver more margin dollars — which is why rate-only thinking starves the business. Initial Markup (IMU) is set at buy time to absorb planned markdowns, shrink, and still hit a target Maintained Markup (MMU); 'keystone' is the old shorthand for a 50% markup (double the cost). Markdown rate (markdown $ ÷ sales) is the headline health metric for whether you bought and merchandised well — high markdown rate means demand didn't show up at full price. The SaaS analog is gross margin and discounting discipline, but retail's markdown mechanics are sharper because unsold physical inventory is a hard, depreciating liability.",
    source: "Standard retail finance (Levy & Weitz; Berman & Evans, Retail Management). Markdown and markup mechanics: merchandise-planning practice.",
    tags: ["ecommerce", "metrics", "finance", "pricing"],
  },
  {
    name: "Inventory Productivity (Turn & Weeks of Supply)",
    category: "ecommerce",
    oneLiner:
      "Inventory turn is how many times you sell and replace stock in a period; weeks of supply (WOS) is how long current inventory lasts at the current rate of sale. The forward and backward views of how hard your inventory is working.",
    whenToUse:
      "Reorder and replenishment decisions, in-stock management, working-capital conversations, and connecting merchandising to the 'inventory outcomes' the JD names. Turn and WOS are how a site merchandiser proves that featuring a product moved real units and didn't just create a stockout.",
    vocabulary: [
      "inventory turn",
      "stock turn",
      "turnover",
      "weeks of supply",
      "WOS",
      "days of supply",
      "DOS",
      "in-stock rate",
      "out-of-stock",
      "OOS",
      "stockout",
      "on-shelf availability",
      "rate of sale",
      "safety stock",
      "replenishment",
      "carrying cost",
    ],
    howToDropIn:
      "\"We're carrying 14 weeks of supply on a style turning twice a year — that's dead capital and a markdown waiting to happen. Meanwhile the hero product is at 2 weeks of supply and we're featuring it on the homepage, which will stock us out by Friday. Merchandising and inventory have to be read together or we're driving demand we can't fulfill.\"",
    commonPhrasing:
      "Trade meetings, supply-chain reviews, working-capital discussions. \"What's our weeks of supply?\" gates most replenishment decisions.",
    notes:
      "High turn frees cash and reduces markdown risk but raises stockout risk; the art is balancing turn against in-stock (on-shelf availability). The cardinal merchandising sin is driving demand — through featuring, search boosting, email — on a product that can't be replenished, converting marketing spend into out-of-stock frustration and lost RPV. In-stock rate is the constraint that should gate every 'feature this harder' decision. Turn ties directly to GMROI (margin × turn) in the category-management section — turn is the second half of retail unit economics. The product-ops analog is capacity planning: surfacing a feature you can't support generates the same kind of demand-supply mismatch.",
    source: "Standard retail/merchandise-planning metric (Levy & Weitz; APICS/ASCM supply-chain literature).",
    tags: ["ecommerce", "metrics", "inventory", "merchandising"],
  },

  // —— Site merchandising craft ————————————————————————————————————————————

  {
    name: "Site Merchandising",
    category: "site_merchandising",
    oneLiner:
      "The digital discipline of curating and sequencing what shoppers see — which products appear on which pages, in what order, with what story — to drive discovery, conversion, and basket. The online equivalent of the planogram, but re-rendered for every visitor in real time.",
    whenToUse:
      "The umbrella for the whole role: category-page (PLP) curation, product sequencing, search and browse tuning, homepage and landing-page builds, and the editorial-to-commerce bridge. Use it to frame why 'putting products on a page' is a strategic, revenue-bearing craft, not data entry.",
    vocabulary: [
      "site merchandising",
      "digital merchandising",
      "online merchandising",
      "PLP",
      "product listing page",
      "category page",
      "PDP",
      "product detail page",
      "product sort",
      "sequencing",
      "boost and bury",
      "pinning",
      "merchandising rules",
      "curation",
      "collection",
      "hero product",
      "endless aisle",
    ],
    howToDropIn:
      "\"Site merchandising is planogram thinking for a shelf that rebuilds itself per visitor. The category page is the shelf, product sort is the facing decision, and search-and-browse is the aisle layout. The difference from physical retail is that we can re-merchandise instantly and personalize — but the discipline is the same: scarce attention, contested placement, and every position earning its revenue.\"",
    commonPhrasing:
      "The function name itself — 'site merchandising,' 'digital merchandising team,' 'merchandising operations.' Day-to-day: \"who's merchandising the spring landing page?\"",
    notes:
      "Two halves: rules-based merchandising (sort by best-seller, newness, margin, or inventory; boost/bury/pin specific SKUs) and editorial/curated merchandising (hand-built collections and stories). Mature teams blend them — algorithmic sort with human pins for strategic products. The closest physical analog is the planogram (and the category-management section's framing carries over wholesale: space-to-sales, KVI logic, good-better-best tiering all have on-site equivalents in placement and sort order). The merchandiser's leverage: prime positions (top of PLP, above-the-fold, first search results) are the eye-level shelf space, and what you put there is a margin and inventory decision, not just a taste decision. Platform tooling: Salesforce Commerce Cloud, Adobe Commerce, Shopify, Bloomreach, Algolia, Constructor, Coveo.",
    source: "Practitioner discipline. Tooling: Salesforce/Adobe Commerce, Bloomreach, Algolia, Constructor, Coveo. UX research base: Baymard Institute, Nielsen Norman Group.",
    tags: ["site_merchandising", "ecommerce", "merchandising", "discovery"],
  },
  {
    name: "Onsite Search & Searchandising",
    category: "site_merchandising",
    oneLiner:
      "Onsite search is the highest-intent surface on a storefront — shoppers who search convert at multiples of those who don't. Searchandising is the practice of tuning that surface: relevance, synonyms, ranking, zero-results recovery, and merchandising boosts inside the results.",
    whenToUse:
      "Product-discoverability work, conversion optimization on high-intent traffic, and any 'shoppers can't find what they want' diagnosis. Search is where discoverability and revenue intersect most directly, and it's chronically under-invested relative to its conversion power.",
    vocabulary: [
      "onsite search",
      "site search",
      "search relevance",
      "searchandising",
      "query understanding",
      "synonyms",
      "stemming",
      "zero results",
      "null results",
      "no-results page",
      "autocomplete",
      "typeahead",
      "autosuggest",
      "search ranking",
      "query rewriting",
      "misspelling tolerance",
      "search exit rate",
    ],
    howToDropIn:
      "\"Searchers are 6% of sessions and a third of revenue — it's the highest-intent surface we have, and we're treating it as plumbing. Top of the list: kill the zero-results pages (every null result is a shopper telling us they want to buy and we said 'nothing here'), fix the synonym gaps, and add merchandising boosts so strategic and in-stock product surfaces first.\"",
    commonPhrasing:
      "Discoverability reviews, search-platform evaluations, conversion deep-dives. \"What's our zero-results rate?\" and \"what are the top no-results queries?\" are the diagnostic openers.",
    notes:
      "The headline finding across UX research: on-site searchers convert far higher than browsers because intent is explicit — yet most sites' search is poor (Baymard's reviews consistently find majority of e-commerce search experiences have damaging usability issues). The fastest wins are usually: (1) zero-results recovery — never show a dead end; show alternatives or relax the query; (2) synonym and misspelling tolerance; (3) merchandising controls inside results so you can boost in-stock, on-margin, or strategic product. 'Searchandising' is the term for applying merchandising rules to search output — it's where discoverability meets the margin/inventory levers. Pair with Faceted Navigation (the browse counterpart) and the category-management Consumer Decision Tree (the attribute hierarchy that should drive both search facets and ranking).",
    source: "Baymard Institute e-commerce search UX research; NN/g search studies. Tooling: Algolia, Constructor, Coveo, Bloomreach, Elasticsearch.",
    tags: ["site_merchandising", "ecommerce", "search", "discovery"],
  },
  {
    name: "Faceted Navigation & Browse",
    category: "site_merchandising",
    oneLiner:
      "Faceted navigation lets shoppers narrow a category by attributes (size, color, price, brand, rating) — filters that combine to drill from thousands of products to the handful that fit. It's the browse-side counterpart to search and the on-site rendering of the category's information architecture.",
    whenToUse:
      "Category-page (PLP) design, taxonomy and navigation work, product-discoverability initiatives, and any 'too many products, can't find the right one' problem. Facets are where IA discipline becomes revenue: the right filters convert browsers; the wrong or missing ones send them to a competitor.",
    vocabulary: [
      "faceted navigation",
      "faceted search",
      "filters",
      "refinements",
      "facets",
      "guided navigation",
      "browse",
      "navigation taxonomy",
      "breadcrumb",
      "category hierarchy",
      "findability",
      "product attributes",
      "attribute data",
      "filter coverage",
      "thematic facets",
    ],
    howToDropIn:
      "\"The dress category has 800 products and three filters — shoppers can't get to 'midi, under $100, in stock' so they bounce. Facets are only as good as the attribute data behind them; this is a product-data problem masquerading as a UX problem. Fix attribution coverage first, then add thematic facets ('occasion,' 'fit') that match how people actually shop this category.\"",
    commonPhrasing:
      "PLP and navigation redesigns, taxonomy projects, discoverability audits. \"What's our filter coverage?\" and \"do we have the attribute data?\" are the practical gates.",
    notes:
      "Facets are the direct on-site expression of information architecture and the Consumer Decision Tree — the filters should mirror the attribute hierarchy shoppers actually use to choose (caffeine→roast→size, or species→life-stage→format from the CDT card). The hidden dependency is attribute data quality: a 'fit' or 'occasion' filter is impossible if products aren't tagged, so faceted nav is as much a product-data and PIM problem as a front-end one. Best practice from UX research: show applied filters clearly, allow multi-select within a facet, never let a filter combination return zero results without a graceful path, and consider thematic/use-case facets beyond raw specs. This is the browse half of discoverability; pair with Onsite Search (the query half) and Card Sorting & Tree Testing (the research method for getting the taxonomy right).",
    source: "Baymard Institute homepage/category/filtering UX research; NN/g faceted-search guidance. Underpins PIM/attribute-data and search-platform tooling.",
    tags: ["site_merchandising", "ecommerce", "navigation", "information_architecture"],
  },
  {
    name: "Conversion Rate Optimization (CRO)",
    category: "site_merchandising",
    oneLiner:
      "The disciplined practice of raising conversion (and RPV) through hypothesis-driven experimentation — A/B and multivariate tests, funnel analysis, and qualitative research — rather than opinion-driven redesigns.",
    whenToUse:
      "Whenever a site change is consequential enough to test and you have the traffic to detect an effect. CRO is the method that turns 'I think this PDP layout is better' into 'this layout lifts RPV 4% at 95% confidence' — the difference between the JD's 'site execution' and 'connect decisions to revenue.'",
    vocabulary: [
      "conversion rate optimization",
      "CRO",
      "A/B test",
      "split test",
      "multivariate test",
      "MVT",
      "hypothesis",
      "primary metric",
      "guardrail metric",
      "statistical significance",
      "minimum detectable effect",
      "sample size",
      "friction",
      "heatmap",
      "session replay",
      "scroll depth",
      "experimentation program",
    ],
    howToDropIn:
      "\"Before we redesign the PDP on a hunch, let's state the hypothesis and test it: primary metric RPV, margin as a guardrail, and we need ~2 weeks at current traffic to hit the minimum detectable effect. If it's not significant, we don't ship it — and a flat result is still a learning, not a failure.\"",
    commonPhrasing:
      "Experiment reviews, roadmap prioritization, site-performance QBRs. \"What's the hypothesis and what's the primary metric?\" is the gate on any test.",
    notes:
      "CRO is the eCommerce-native sibling of Lean UX and the retail Test-and-Control tradition (see the ab_testing translation): same experimentation logic, web-tuned mechanics. The discipline that separates real programs from theater: (1) a written hypothesis ('we believe X because Y; we'll know we're right if Z'); (2) RPV as primary metric with margin as a guardrail so you don't win conversion by discounting; (3) honest stats — pre-computed sample size and MDE, no peeking-and-stopping, no celebrating noise. Qual complements quant: heatmaps, session replay, and on-site surveys tell you why a test moved. The biggest trap is the 'A/B test everything' cargo cult on low-traffic pages where you'll never reach significance — there, use best-practice and judgment, and reserve testing for high-traffic, high-stakes surfaces. Tools: Optimizely, VWO, Adobe Target, AB Tasty; analytics via Adobe Analytics / GA4.",
    source: "CRO practice (Optimizely, VWO experiment literature; GoodUI). Roots in Lean UX (Gothelf/Seiden) and statistical experiment design.",
    tags: ["site_merchandising", "ecommerce", "experimentation", "conversion"],
  },
  {
    name: "Content-to-Commerce & Digital Storytelling",
    category: "site_merchandising",
    oneLiner:
      "The craft of wrapping product in narrative — editorial, lookbooks, shoppable stories, campaign landing pages — so the site sells the brand and the assortment together, not just a grid of SKUs. The bridge between brand storytelling and the buy button.",
    whenToUse:
      "Homepage and campaign builds, seasonal launches, brand-led category pages, and any 'we look like a spreadsheet, not a brand' diagnosis. This is the JD's 'digital storytelling' and 'brand sensibility' made operational — and the place where merchandising judgment balances storytelling against product priorities and financial performance.",
    vocabulary: [
      "content-to-commerce",
      "shoppable content",
      "editorial merchandising",
      "lookbook",
      "hero banner",
      "campaign landing page",
      "brand storytelling",
      "editorial calendar",
      "content merchandising",
      "shop-the-look",
      "complete the look",
      "inspiration",
      "above the fold",
      "hero product",
    ],
    howToDropIn:
      "\"The campaign page tells a beautiful story and converts at half the rate of the plain grid — the storytelling and the shopping are fighting each other. The fix isn't to kill the story; it's to make it shoppable: every hero image is a 'shop the look,' the narrative funnels to in-stock product, and the editorial earns its place by lifting RPV, not just looking good.\"",
    commonPhrasing:
      "Campaign planning, homepage reviews, brand-and-commerce alignment meetings. \"Is it shoppable?\" is the question that keeps storytelling honest.",
    notes:
      "The core tension this names: brand/editorial wants emotion and aspiration; merchandising wants conversion and sell-through; a senior site merchandiser holds both. The discipline is making content accountable to commerce metrics (RPV, click-through to PDP, assisted conversion) without flattening it into a catalog — and making the assortment decisions inside the story (feature in-stock, on-margin, strategically prioritized product, not just the prettiest sample). 'Shop the look' / 'complete the look' is also a UPT and AOV lever, so storytelling and basket economics connect directly. Pair with the customer_journey / shopper-journey translation (storytelling maps to the inspiration and consideration stages) and Journey Mapping. The brand-sensibility-plus-financial-judgment balance is exactly the JD's closing competency.",
    source: "Practitioner discipline (content commerce / editorial merchandising). Related: NN/g e-commerce content research; brand-and-DTC content-commerce practice.",
    tags: ["site_merchandising", "ecommerce", "content", "brand"],
  },

  // —— Analytics & tooling —————————————————————————————————————————————————

  {
    name: "Adobe Analytics",
    category: "ecommerce",
    oneLiner:
      "Adobe's enterprise digital-analytics platform — the clickstream tool many large retailers run. Its distinctive vocabulary (props, eVars, success events, segments, fallout, flow, Analysis Workspace) is what 'experience with Adobe Analytics' on a JD actually means.",
    whenToUse:
      "Any role that measures site behavior in an Adobe shop. You don't need to be an analyst, but a site-merchandising leader must speak it well enough to commission a fallout report, read a segment comparison, and tell a real funnel insight from a noisy one.",
    vocabulary: [
      "Adobe Analytics",
      "Analysis Workspace",
      "prop",
      "traffic variable",
      "eVar",
      "conversion variable",
      "success event",
      "segment",
      "fallout report",
      "flow report",
      "pathing",
      "dimension",
      "metric",
      "calculated metric",
      "data layer",
      "Adobe Experience Platform",
      "Customer Journey Analytics",
      "CJA",
    ],
    howToDropIn:
      "\"Build me a fallout in Workspace: search → PDP view → add-to-cart → checkout → order, segmented by device. If mobile fallout spikes between PDP and add-to-cart, that's where the merchandising or UX problem lives. Set the relevant success event and pull the eVar for the campaign so we can attribute it.\"",
    commonPhrasing:
      "Analytics requests, dashboard reviews, agency/analyst conversations. \"Can you pull that in Workspace?\" and \"what's the fallout look like?\" are the everyday phrases.",
    notes:
      "The Adobe-specific mental model that trips up newcomers: props (traffic variables) are for traffic/pathing and don't persist; eVars (conversion variables) persist and get credited to later success events — so attribution lives in eVars. Success events are the things you count (cart adds, orders, revenue). Segments slice everything. Analysis Workspace is the modern drag-and-drop analysis surface; fallout (funnel) and flow (pathing) are the two reports a merchandiser uses most. Adobe is moving toward Customer Journey Analytics (CJA) on the Experience Platform for cross-channel analysis. The honest framing for the JD: 'or similar analytics platforms' means the concepts transfer — GA4 has events, dimensions, explorations, and funnels that map directly; what matters is funnel literacy and segmentation discipline, not the vendor.",
    source: "Adobe Analytics / Adobe Experience Platform documentation. Concepts transfer to GA4 (events, explorations, funnel/path).",
    tags: ["ecommerce", "analytics", "tooling", "metrics"],
  },
  {
    name: "Marketing & Conversion Attribution",
    category: "ecommerce",
    oneLiner:
      "Attribution is the rule for assigning credit for a conversion across the touchpoints that preceded it. The model you choose (last-click, first-click, linear, data-driven) changes which channels and on-site experiences look like they 'work.'",
    whenToUse:
      "Reading channel performance, defending the value of upper-funnel and on-site experiences, and any 'which campaign drove this' argument. Attribution literacy keeps a merchandiser from being blamed for revenue last-click steals from them — or taking credit they didn't earn.",
    vocabulary: [
      "attribution",
      "attribution model",
      "last-click",
      "last-touch",
      "first-click",
      "first-touch",
      "linear attribution",
      "time-decay",
      "position-based",
      "U-shaped",
      "data-driven attribution",
      "DDA",
      "multi-touch attribution",
      "MTA",
      "assisted conversion",
      "view-through",
      "lookback window",
    ],
    howToDropIn:
      "\"On last-click, the editorial landing page looks like a loser — but it's an upper-funnel assist; switch to a position-based or data-driven model and you can see it's initiating journeys that close later on branded search. Don't kill the page because last-click can't see what it does.\"",
    commonPhrasing:
      "Channel reviews, marketing-and-merchandising alignment, budget conversations. \"What attribution model is that on?\" is the question that defuses most channel arguments.",
    notes:
      "Every model is a simplifying lie; the discipline is knowing which lie you're telling. Last-click over-credits the bottom of the funnel (branded search, retargeting) and starves discovery and content; first-click does the reverse. Data-driven attribution (algorithmic credit) is the current best practice where you have the data, but it's a black box and needs sanity checks. For site merchandising specifically, assisted-conversion and on-site pathing matter more than channel attribution — they show how a PLP, search, or editorial page contributed to an eventual order even when it wasn't the final step. Privacy changes (cookie deprecation, iOS/ATT) are eroding deterministic multi-touch attribution and pushing the industry toward modeled and incrementality-based approaches. Pair with Adobe Analytics (eVars are the attribution mechanism) and RPV (the on-site value the attribution debate is ultimately about).",
    source: "Digital-marketing measurement practice; Google/Adobe attribution documentation; incrementality and media-mix-modeling literature.",
    tags: ["ecommerce", "analytics", "metrics", "marketing"],
  },
  {
    name: "Digital Production Workflow (Airtable / Jira)",
    category: "ecommerce",
    oneLiner:
      "The operating system of a merchandising team: intake, ticketing, content calendars, and launch tracking run in tools like Airtable, Jira, Asana, or Monday. How dozens of pages, launches, and assets get coordinated without dropping any.",
    whenToUse:
      "Any high-volume merchandising operation where launches, campaigns, and content updates outnumber the people doing them. The JD names Airtable and Jira because the role lives in production throughput — and the failure mode is a launch that slips because the workflow wasn't tracked.",
    vocabulary: [
      "Airtable",
      "Jira",
      "intake",
      "intake form",
      "ticket",
      "epic",
      "story",
      "sprint",
      "backlog",
      "kanban board",
      "production calendar",
      "content calendar",
      "launch tracker",
      "workflow automation",
      "status",
      "owner",
      "due date",
      "DAM",
      "digital asset management",
    ],
    howToDropIn:
      "\"Launches are slipping because intake is over email and nobody owns the tracker. Stand up an Airtable base: one record per launch, owner, status, go-live date, linked assets, and a calendar view the whole cross-functional team reads off. Jira if engineering work is in the critical path; Airtable for the merchandising production side.\"",
    commonPhrasing:
      "Ops setup, sprint planning, status standups. \"Is there a ticket?\" and \"what's the status in the tracker?\" are the everyday governance questions.",
    notes:
      "The distinction worth knowing: Jira is built for software delivery (epics, stories, sprints, dev workflow — see the Scrum and Kanban cards) and is where you live when engineering is on the critical path; Airtable is a flexible relational database that merchandising teams use as a production tracker, content calendar, and lightweight CMS-of-record because non-engineers can build and change it. Asana/Monday occupy similar ground to Airtable for task and project tracking. The competency the JD is screening for isn't tool trivia — it's the operating discipline: clear intake, one owner per item, visible status, and a calendar that prevents launch collisions. Pair with Kanban (WIP limits and flow for the board), RACI (one owner per launch), and Launch Readiness (the gate the tracker feeds).",
    source: "Practitioner tooling. Workflow discipline draws on Kanban (Anderson) and standard digital-production operations practice.",
    tags: ["ecommerce", "tooling", "operations", "workflow"],
  },

  // —— Management & operating ——————————————————————————————————————————————

  {
    name: "Matrixed Organization & Influence Without Authority",
    category: "leadership",
    oneLiner:
      "A matrixed org is one where you depend on people who don't report to you — cross-functional peers in brand, tech, planning, and supply chain. Influence without authority is the skill of getting outcomes through them by trading value and building credibility rather than giving orders.",
    whenToUse:
      "Any senior role in a 'fast-paced, matrixed environment with multiple stakeholders' — exactly the JD's phrasing. The competency being screened for is delivering through a web of peers and senior stakeholders you can't direct, on shared timelines, with competing priorities.",
    vocabulary: [
      "matrix organization",
      "matrixed environment",
      "dotted-line",
      "solid-line",
      "cross-functional",
      "influence without authority",
      "lateral leadership",
      "stakeholder management",
      "stakeholder mapping",
      "currencies of exchange",
      "reciprocity",
      "alignment",
      "escalation path",
      "RACI",
      "shared OKRs",
    ],
    howToDropIn:
      "\"I don't own engineering or brand, so this launch runs on influence, not authority. The move is to map the stakeholders, find each one's currency — engineering wants a clean spec and no last-minute changes, brand wants storytelling room — and trade so everyone's getting something. Where alignment fails, we have a pre-agreed escalation path, not a turf fight.\"",
    commonPhrasing:
      "Leadership interviews, org-design conversations, cross-functional program kickoffs. \"How do you influence without authority?\" is a standard senior behavioral question — have a STAR story ready.",
    notes:
      "Cohen and Bradford's 'currencies of exchange' is the durable model: people grant cooperation when you offer something they value (information, recognition, support, a faster path to their own goals). The matrix's structural reality is that nobody has full authority, so credibility, reciprocity, and reputation are the operating capital — and they compound or erode over time. Pair with RACI (make accountability explicit so 'influence' isn't a euphemism for 'no one's in charge'), Stakeholder Mapping (from the design-research toolkit), and shared OKRs (the cleanest way to align peers around an outcome rather than negotiate task by task). The public-sector parallel is Mark Moore's authorizing environment — the same discipline of building and spending legitimacy with people who can say no.",
    source: "Allan Cohen & David Bradford, Influence Without Authority (1990); matrix-management literature (Galbraith, Star Model).",
    tags: ["leadership", "management", "stakeholders", "cross_functional"],
  },
  {
    name: "Launch Readiness & Site QA",
    category: "leadership",
    oneLiner:
      "The disciplined gate between 'built' and 'live': a structured check that content, functionality, data, and cross-device experience are correct before a launch goes out — plus a defined owner and rollback plan for when something breaks anyway.",
    whenToUse:
      "Every site launch, campaign go-live, and seasonal release. The JD's 'high attention to detail and strong standards for site execution, content quality, launch readiness, and QA' is this discipline — the difference between a clean launch and a broken homepage on the biggest traffic day.",
    vocabulary: [
      "launch readiness",
      "go-live checklist",
      "readiness gate",
      "QA",
      "quality assurance",
      "content QA",
      "functional QA",
      "cross-browser testing",
      "cross-device testing",
      "responsive QA",
      "staging environment",
      "preview",
      "smoke test",
      "UAT",
      "user acceptance testing",
      "regression",
      "rollback",
      "hypercare",
      "definition of done",
      "broken link",
      "404",
    ],
    howToDropIn:
      "\"Nothing goes live without passing the readiness gate: content proofed, links and prices checked, imagery loaded, tested on the top three devices, and signed off in staging. We have a rollback plan and someone on hypercare for the first hour. 'Looks fine on my laptop' is not a QA process — that's how we end up with a 404 hero banner on launch morning.\"",
    commonPhrasing:
      "Pre-launch reviews, go/no-go meetings, post-launch retros. \"Are we ready to launch?\" and \"who signed off QA?\" are the gating questions.",
    notes:
      "Launch readiness is a definition-of-done applied to merchandising and content, not just code (see the Scrum and Continuous Delivery cards for the engineering lineage). The merchandiser-specific checks: content accuracy (copy, pricing, legal/promo terms), asset integrity (images load, no broken links), data correctness (products tagged, in stock, correctly categorized so facets and search work), and cross-device rendering (a majority of retail traffic is mobile, so 'looks good on desktop' is a trap). Two cultural pillars: a single accountable owner for go/no-go (RACI), and a blameless retro when something slips so the checklist improves rather than people hiding misses. 'Hypercare' is the heightened-monitoring window right after a high-stakes launch. The standards-and-attention-to-detail competency in the JD is, concretely, whether you run this gate or wing it.",
    source: "Software release management (go-live checklists, UAT, smoke testing) applied to merchandising/content ops; QA and DoD practice.",
    tags: ["leadership", "operations", "quality", "merchandising"],
  },

  // —— Field force strategy & deployment ——————————————————————————————————

  {
    name: "Field Force Effectiveness (FFE / SFE)",
    category: "field_force",
    oneLiner:
      "The umbrella discipline for designing and running a commercial field organization — segmentation & targeting, sizing & structure, territory alignment, call planning, incentive compensation, and performance metrics — as one connected system rather than separate decisions.",
    whenToUse:
      "Any pharma/medtech/B2B field-strategy role. FFE is the operating-system view: it names the half-dozen levers that, set together, determine whether the field organization reaches the right customers, at the right frequency, with the right people, at a cost the P&L can bear.",
    vocabulary: [
      "field force effectiveness",
      "FFE",
      "sales force effectiveness",
      "SFE",
      "go-to-market",
      "GTM",
      "segmentation and targeting",
      "sizing and structure",
      "alignment",
      "call planning",
      "incentive compensation",
      "IC",
      "field force sizing",
      "deployment",
    ],
    howToDropIn:
      "\"FFE isn't one decision, it's a chain: segmentation drives targeting, targeting drives sizing, sizing drives alignment, and incentive comp has to reinforce all of it. If we redesign roles without re-cutting targeting and IC, the new model will quietly revert to the old behavior within two quarters.\"",
    commonPhrasing:
      "Commercial-operations and field-strategy conversations, consulting engagements (ZS Associates, IQVIA, Deloitte), QBRs. \"What does this do to FFE?\" is the integrating question.",
    notes:
      "The discipline is owned by Commercial Operations / Sales Operations and heavily shaped by the big analytics consultancies (ZS Associates and IQVIA in particular). The systems insight that distinguishes a strategist from a tactician: the levers interact, so optimizing one in isolation (e.g., adding headcount without re-aligning territories) degrades the whole. The software-org analog is Team Topologies — both treat org structure as a designed system optimized for flow to the customer, not an accident of headcount. Pair with Operating Model Design (the layer above) and Incentive Compensation (the reinforcement layer that makes or breaks any role redesign).",
    source: "Sales/field force effectiveness practice; ZS Associates and IQVIA methodology; Andris Zoltners et al., 'The Complete Guide to Sales Force Incentive Compensation' and 'Building a Winning Sales Force.'",
    tags: ["field_force", "commercial_operations", "pharma", "strategy"],
  },
  {
    name: "Sales Force Sizing & Structure",
    category: "field_force",
    oneLiner:
      "How many field people you need and how they're organized — generalist vs. specialist, by geography vs. by product/customer, with what span of control. The structural decision that everything downstream (territories, targeting, cost) inherits.",
    whenToUse:
      "Field expansion or contraction, launch planning, portfolio changes, and any role-redesign that changes who covers whom. Sizing answers 'how many,' structure answers 'organized how,' and the two are decided together against workload and economics.",
    vocabulary: [
      "sales force sizing",
      "workload-based sizing",
      "activity-based sizing",
      "response-curve",
      "ROI sizing",
      "carryover",
      "generalist",
      "specialist",
      "mirror structure",
      "overlay",
      "pod",
      "span of control",
      "portfolio model",
      "right-sizing",
    ],
    howToDropIn:
      "\"There are two defensible ways to size this: workload (count the targets and the calls each needs, divide by capacity) or response-curve (model incremental sales per incremental rep and find where the ROI flattens). They rarely agree — workload says we're understaffed, the response curve says the marginal rep doesn't pay. The role design has to name which logic we're committing to.\"",
    commonPhrasing:
      "Launch readiness, annual planning, restructuring. \"Are we sizing on workload or response?\" is the methodological fork.",
    notes:
      "Two canonical methods: workload/activity-based (bottom-up: targets × required frequency ÷ rep capacity) and response-curve/ROI (model the sales response to call effort and size to marginal return). Mature teams triangulate both. Structure choices — generalist (one rep, whole portfolio) vs. specialist (rep per therapeutic area), and whether to run overlay/mirror teams (e.g., a specialty overlay on top of a primary-care base) — trade coverage breadth against depth and raise coordination cost (the more overlays, the more the customer sees multiple Novartis faces and someone has to orchestrate them). Span of control connects directly to the Span & Layers card. The product analog is generalist vs. specialist teams in Team Topologies, and the response-curve logic mirrors diminishing-returns thinking in growth/marketing-mix modeling.",
    source: "Zoltners, Sinha & Lorimer, 'Building a Winning Sales Force' and 'Sales Force Design for Strategic Advantage'; ZS Associates sizing methodology.",
    tags: ["field_force", "commercial_operations", "pharma", "org_design"],
  },
  {
    name: "Territory Alignment & Design",
    category: "field_force",
    oneLiner:
      "Carving the country into field territories by assembling small geographic 'bricks' (ZIPs, postal sectors) into balanced units — equalizing workload and potential, minimizing travel, and limiting disruption to existing relationships when realigning.",
    whenToUse:
      "Any sizing or structure change cascades into a realignment. Territory design is where the abstract model meets the map, and where the human cost (disrupted relationships, moved accounts, unhappy reps) becomes real and has to be managed.",
    vocabulary: [
      "territory alignment",
      "alignment",
      "realignment",
      "bricks",
      "brick-level data",
      "workload index",
      "potential index",
      "balance",
      "equity",
      "disruption",
      "windshield time",
      "carve",
      "geographic alignment",
    ],
    howToDropIn:
      "\"Realignment is never just a math problem — every line we redraw moves an account and breaks a relationship. The model can balance workload to within 5%, but if it disrupts 40% of territories, the productivity hit in the transition quarter will swamp the theoretical gain. Optimize for balance and minimal disruption together, not balance alone.\"",
    commonPhrasing:
      "Field-ops planning, realignment projects. Tooling: Javelin, AlignStar, IQVIA/ZS alignment platforms, MapInfo.",
    notes:
      "Territories are built bottom-up from bricks so they can be balanced on two axes at once — workload (how much effort the contained customers require) and potential (how much business is there) — while minimizing windshield time (travel) and, crucially, disruption (how many relationships a realignment severs). The disruption constraint is the one analysts under-weight and field leaders never forgive: a mathematically perfect realignment that resets half the relationships in the country can cost more in the transition than it earns. The discipline maps to capacity-balancing and load-distribution problems generally; the human-disruption dimension is its distinctive constraint and the reason it's a change-management exercise, not just an optimization.",
    source: "Zoltners & Sinha territory-alignment research; ZS Associates and IQVIA alignment practice; standard sales-operations methodology.",
    tags: ["field_force", "commercial_operations", "pharma", "operations"],
  },
  {
    name: "Targeting & Segmentation (HCP)",
    category: "field_force",
    oneLiner:
      "Deciding which customers to engage and how intensely — segmenting healthcare professionals by potential (often Rx-volume deciles) and behavior/attitude, then setting target lists and frequency. The 'customer archetypes and targeting strategies' the role aligns roles to.",
    whenToUse:
      "Foundational to field strategy: targeting drives sizing, alignment, call planning, and increasingly channel mix. Any role redesign tied to 'customer archetypes' is a segmentation question first — you can't design roles around customers you haven't defined.",
    vocabulary: [
      "segmentation",
      "targeting",
      "HCP",
      "healthcare professional",
      "decile",
      "Rx deciles",
      "potential",
      "adoption ladder",
      "attitudinal segmentation",
      "behavioral segmentation",
      "microsegmentation",
      "customer archetype",
      "target list",
      "no-see / low-access",
    ],
    howToDropIn:
      "\"Deciles tell us potential — who writes the most scripts — but not receptivity or channel preference. A high-decile, low-access, digitally-native specialist is a completely different archetype than a high-decile, high-access traditionalist, and they should be served by different roles and channels. Targeting on volume alone designs roles for a customer that no longer exists.\"",
    commonPhrasing:
      "Brand planning, field-strategy reviews, omnichannel planning. \"What's the decile cut?\" and \"what archetype is this?\" are the operative questions.",
    notes:
      "Classic pharma segmentation is potential-based — deciles 1–10 by prescribing volume (with adoption/'adoption ladder' overlays). Modern practice layers attitudinal/behavioral segments and channel preference to build true 'archetypes,' because volume alone no longer predicts how a customer wants to be engaged (access has fallen — many HCPs are 'no-see' or low-access, shifting weight to digital). This is the retail Consumer Decision Tree and Jobs-To-Be-Done discipline applied to HCPs: define the customer empirically before designing the experience or the role. The trap is letting the available data (Rx volume) define the segmentation instead of the strategy. Pair with Orchestrated Customer Engagement (archetypes should map to channel mix) and Call Planning.",
    source: "Standard pharma commercial practice; IQVIA prescriber data and segmentation methodology; ZS Associates customer-engagement frameworks.",
    tags: ["field_force", "commercial_operations", "pharma", "segmentation"],
  },
  {
    name: "Call Planning: Reach, Frequency & Share of Voice",
    category: "field_force",
    oneLiner:
      "How often each target gets engaged. Reach is the share of targets you touch; frequency is how many times each; share of voice (SOV) is your contacts as a fraction of all promotional contacts the customer receives. The dials that turn a target list into an executable plan.",
    whenToUse:
      "Setting the field workload that drives sizing, and the input the call plan operationalizes. Reach/frequency/SOV is also the bridge to omnichannel — modern planning sets these across channels, not just face-to-face details.",
    vocabulary: [
      "call plan",
      "reach",
      "frequency",
      "share of voice",
      "SOV",
      "ideal call plan",
      "optimal frequency",
      "details",
      "detail",
      "coverage",
      "signal",
      "promotional response",
      "next best action",
    ],
    howToDropIn:
      "\"The ideal call plan says decile 8–10 targets need 12 contacts a year at 35% share of voice to move share. We physically can't field that with face-to-face alone post-access-decline — which is exactly why the role has to be reconceived as orchestrating reach across rep, email, and digital, not just maximizing details.\"",
    commonPhrasing:
      "Brand planning, field execution reviews, omnichannel planning. \"What's the ideal call plan?\" and \"are we hitting reach and frequency?\" are standing questions.",
    notes:
      "The 'ideal call plan' is the modeled prescription (which segments, how many contacts, what mix); execution always falls short of it, and the gap is a managed metric. Share of voice is the competitive lens — promotional response often depends on your contacts relative to competitors', not just your absolute frequency. The decisive modern shift, and the heart of this JD: declining face-to-face access means reach and frequency increasingly have to be delivered across channels (rep + email + web + virtual), so 'call planning' is becoming 'engagement planning' and the role's center of gravity moves from maximizing details to orchestrating a multi-channel signal. This is where Call Planning hands off to Next Best Action and Orchestrated Customer Engagement.",
    source: "Pharma promotional-response and call-planning literature; ZS/IQVIA reach-frequency-SOV modeling; Zoltners et al.",
    tags: ["field_force", "commercial_operations", "pharma", "engagement"],
  },
  {
    name: "Key Account Management & Account Team Models",
    category: "field_force",
    oneLiner:
      "Organizing around large, complex customers (health systems, IDNs, GPOs) with a cross-functional account team — rep, key account manager, market access, medical (MSL) — coordinated under one account plan, rather than treating each call point as an isolated individual.",
    whenToUse:
      "Wherever buying has consolidated into institutions and a single prescriber decision is gated by formularies, protocols, and committees. Account-team design is the structural answer to the JD's 'account team structures and cross-functional engagement.'",
    vocabulary: [
      "key account management",
      "KAM",
      "account team",
      "account plan",
      "IDN",
      "integrated delivery network",
      "GPO",
      "health system",
      "market access",
      "MSL",
      "medical science liaison",
      "orchestration",
      "pod",
      "one face / many faces",
      "cross-functional",
    ],
    howToDropIn:
      "\"At a consolidated IDN, the prescriber isn't the decision — formulary, protocol, and the P&T committee are. A lone rep detailing physicians can't move that; it takes an orchestrated account team (KAM owns the relationship, market access owns the formulary, MSL owns the clinical dialogue) working one account plan. The role-design question is who orchestrates, and what the interfaces between these roles are.\"",
    commonPhrasing:
      "Account-based commercial models, market-access strategy, field-leadership design. \"Who owns the account?\" and \"is medical walled off?\" are the gating questions.",
    notes:
      "The shift from individual-HCP selling to account-based engagement mirrors B2B's move to account-based marketing/selling — buying consolidated, so the seller must mirror the buyer's complexity. Critical compliance constraint unique to pharma/medtech: Medical (MSLs) must stay non-promotional and is firewalled from Commercial; an account team must coordinate without crossing that line, which makes 'interfaces and accountabilities' (the JD's words) a legal requirement, not just good design. The orchestration challenge is a RACI problem at its core — exactly one accountable owner per account, clear consult/inform roles across functions. Pair with RACI, Service Blueprint (front-stage account experience vs. back-stage coordination), and the Span & Layers / role-interface cards.",
    source: "Key/strategic account management practice (Capon, 'Key Account Management and Planning'); pharma market-access and MSL operating-model literature.",
    tags: ["field_force", "commercial_operations", "pharma", "cross_functional"],
  },

  // —— Org & role design ———————————————————————————————————————————————————

  {
    name: "Galbraith Star Model",
    category: "org_design",
    oneLiner:
      "An organization-design framework holding that five elements must align to produce performance: Strategy, Structure, Processes, Rewards, and People. Structure alone is never the answer — change one point of the star and the others must follow.",
    whenToUse:
      "Any role or operating-model redesign. The Star Model is the discipline that stops a redesign from being a box-shuffle: it forces you to check that incentives (Rewards), capabilities (People), and workflow (Processes) move with the new Structure, or the structure will fail.",
    vocabulary: [
      "Star Model",
      "Galbraith",
      "strategy",
      "structure",
      "processes",
      "rewards",
      "people",
      "alignment",
      "organization design",
      "design choices",
      "lateral capability",
      "fit",
    ],
    howToDropIn:
      "\"We're redrawing the boxes (Structure) but leaving incentive comp (Rewards) and the capability model (People) untouched. By Galbraith, that misalignment guarantees the new roles snap back to old behavior. If we move Structure, we have to move the other four points of the star with it or we've just rearranged the org chart.\"",
    commonPhrasing:
      "Org-design and operating-model work, transformation programs, role-architecture projects. The canonical 'structure follows strategy, and everything follows structure' frame.",
    notes:
      "Galbraith's enduring contribution is that structure is one of five design variables, not the whole game — and that the hard, neglected work is the 'lateral capability' (cross-unit processes and roles) that makes a matrix actually function. This is the senior org-designer's counterweight to executives who think reorganizing = redrawing the chart. McKinsey's 7S is the better-known cousin (adds Shared Values, Systems, Style, Skills) and says the same thing: alignment across many elements, not structural fiddling. The software-org parallel is Team Topologies + Conway's Law — structure shapes outcomes, but only when processes, rewards, and capabilities are co-designed. Pair with Job Architecture (the structural layer), Capability Models (the People point), and Operating Model Design (the integrating layer).",
    source: "Jay Galbraith, 'Designing Organizations' and the Star Model (1970s onward); cf. McKinsey 7S (Peters & Waterman).",
    tags: ["org_design", "strategy", "transformation", "leadership"],
  },
  {
    name: "Job Architecture & Role Design",
    category: "org_design",
    oneLiner:
      "The structured system of job families, levels, and role profiles that defines what every role is, how roles relate, and how someone moves between them. The backbone that turns a pile of job titles into a coherent, comparable structure.",
    whenToUse:
      "Designing or evolving roles at scale, defining competencies and accountabilities, building career paths, and reducing the title sprawl and overlap that the JD calls out. Job architecture is the literal subject of this 'role design' position.",
    vocabulary: [
      "job architecture",
      "role architecture",
      "job family",
      "job level",
      "leveling",
      "role profile",
      "job description",
      "accountabilities",
      "role interfaces",
      "grade",
      "career framework",
      "title taxonomy",
      "role clarity",
    ],
    howToDropIn:
      "\"The problem isn't that we have too many roles, it's that we have no architecture — overlapping titles, no consistent leveling, and undefined interfaces, so two roles both think they own the same accountability. The fix is a job architecture: defined families, consistent levels, role profiles with explicit accountabilities and clean interfaces between adjacent roles.\"",
    commonPhrasing:
      "P&O / HR and org-design conversations, role-redesign projects, workforce planning. \"What level is this?\" and \"where's the interface?\" are the recurring questions.",
    notes:
      "Job architecture does for an organization's roles what information architecture does for content — it's a taxonomy with levels (the IA parallel is exact, and worth using to position a design background into this work). The two failure modes: too rigid (a leveling grid so detailed it can't absorb new hybrid roles — fatal in a field that's blending human/digital/AI) and too loose (title sprawl, overlap, no comparability). The discipline the JD names specifically — clear accountabilities and interfaces — is RACI applied to role boundaries: exactly one role accountable for each outcome, explicit hand-offs at the seams. Pair with the Galbraith Star (architecture is the Structure point), Capability Models (what the role must be able to do), and Career Architecture (how people move through the structure).",
    source: "HR/org-design practice (Mercer, Korn Ferry, Willis Towers Watson job-architecture methodology); Galbraith organization design.",
    tags: ["org_design", "pharma", "leadership", "information_architecture"],
  },
  {
    name: "Operating Model Design (Target Operating Model)",
    category: "org_design",
    oneLiner:
      "A holistic blueprint of how an organization delivers value — its capabilities, processes, structure, people, information, and technology, designed together. The 'current state → target operating model (TOM)' is the standard transformation artifact.",
    whenToUse:
      "Above the level of individual roles: when the question is how the whole field organization should work as an integrated system. Operating-model design is the container role design sits inside — roles are an output of the model, not the starting point.",
    vocabulary: [
      "operating model",
      "target operating model",
      "TOM",
      "current state",
      "future state",
      "capabilities",
      "value chain",
      "POLISM",
      "process / org / location / information / suppliers / management",
      "service model",
      "ways of working",
      "blueprint",
    ],
    howToDropIn:
      "\"Before we design roles, we need the target operating model: what capabilities the field has to deliver, what processes deliver them, and only then what structure and roles those processes imply. Designing roles before the operating model is designing the furniture before the floor plan.\"",
    commonPhrasing:
      "Transformation programs, commercial-model redesign, consulting engagements. \"What's the TOM?\" is shorthand for the whole future-state design.",
    notes:
      "An operating model answers 'how do we deliver our strategy' across several layers — commonly captured as POLISM (Process, Organization, Location, Information, Suppliers, Management) or as a capability map. The senior move the JD implies is sequencing: strategy → operating model → role architecture, not jumping to org charts. The integrated-engagement-ecosystem language in this JD is operating-model thinking — human, digital, and AI as capabilities allocated across the model, with roles as the human portion. The service-design parallel is the Service Blueprint at enterprise scale; the software parallel is platform/operating-model thinking in Team Topologies. Pair with Galbraith Star (the design discipline) and Job Architecture (the role-level output).",
    source: "Operating-model design practice (Andrew Campbell et al., 'Operating Model Canvas'); Big-Four and strategy-consulting TOM methodology.",
    tags: ["org_design", "strategy", "transformation", "service_design"],
  },
  {
    name: "Span of Control & Layers",
    category: "org_design",
    oneLiner:
      "Span = how many direct reports a manager has; layers = how many levels sit between the front line and the top. The two numbers that govern cost, decision speed, and manager load — and the first thing examined in any restructure.",
    whenToUse:
      "Restructuring, cost-out programs, and field-leadership design (how many reps per district manager, how many layers from rep to commercial head). Span and layers translate an abstract structure into headcount, cost, and how fast decisions move.",
    vocabulary: [
      "span of control",
      "span",
      "layers",
      "delayering",
      "manager-to-IC ratio",
      "reporting lines",
      "organizational depth",
      "supervisory ratio",
      "flat vs. tall",
      "player-coach",
      "spans and layers",
    ],
    howToDropIn:
      "\"Eight layers from rep to the commercial head means a customer signal takes eight hops to reach a decision-maker, and the average district manager has a span of four — too narrow, so we're paying for supervision we don't need. Widening spans and removing a layer speeds decisions and funds the digital roles we actually want to add.\"",
    commonPhrasing:
      "Restructuring and cost programs, org-health diagnostics, field-leadership design. \"What's the span?\" and \"how many layers?\" are the opening diagnostics.",
    notes:
      "The classic tension: narrow spans (few reports per manager) enable coaching but add layers, cost, and decision latency; wide spans flatten the org and speed decisions but can leave teams under-supported — and the right answer depends on work complexity and how much coaching the role genuinely needs (a nuance crude 'delayering' programs ignore). In field organizations the rep-to-manager ratio is also a coaching-quality decision, not just a cost one. Span/layers analysis is the quantitative complement to the Galbraith Structure point and connects to sales-force Sizing & Structure (manager headcount falls out of span assumptions). The trap is treating it as a pure cost lever; spans set too wide to coach degrade the very field effectiveness the org is paying for.",
    source: "Organization-design practice (Bain, McKinsey 'spans and layers' diagnostics); classic management theory (Graicunas, Urwick) updated for knowledge work.",
    tags: ["org_design", "leadership", "operations", "transformation"],
  },
  {
    name: "Capability & Competency Models",
    category: "org_design",
    oneLiner:
      "A capability model defines what an organization must be able to do; a competency model defines what skills and behaviors a person needs to do a role. The JD's explicit boundary — role architecture (the structure) vs. capability building (growing the people) — runs right between them.",
    whenToUse:
      "Defining role requirements, building development and learning programs, workforce planning, and drawing the clean line between 'designing the role' and 'building the talent for it' that the JD calls out as a shared-ownership seam.",
    vocabulary: [
      "capability model",
      "organizational capability",
      "competency model",
      "competency framework",
      "skills taxonomy",
      "proficiency level",
      "behavioral competency",
      "functional competency",
      "capability building",
      "skills gap",
      "skills-based organization",
      "role requirements",
    ],
    howToDropIn:
      "\"Role architecture says what the role is and is accountable for; the capability model says what the organization must be able to do; the competency model says what a person needs to do the role well. I own the first; talent development owns building the third. The clean interface between us is the role profile — I define the required competencies, they build the programs that grow them.\"",
    commonPhrasing:
      "P&O / talent and org-design conversations, capability-building programs, workforce planning. \"Is that a role question or a capability question?\" is the boundary-setting move.",
    notes:
      "Keeping these distinct is what the JD means by 'establish clear boundaries between role architecture and capability building, enabling shared ownership.' Conflate them and you get role profiles that are really training wish-lists, or development programs untethered from real role demands. Organizational capability (a firm-level 'can we do X') is a different altitude than individual competency (a person-level 'can they do Y'); a role-designer works at the capability altitude and hands competency requirements to talent development. The contemporary direction is the 'skills-based organization' — defining work and mobility by skills rather than fixed jobs, which fits the JD's hybrid human/digital/AI roles especially well. Pair with Job Architecture (where competencies attach to role profiles) and Career Architecture (how proficiency growth maps to progression).",
    source: "HR/org-design practice (Korn Ferry, Mercer competency frameworks; Ulrich on organizational capability; Deloitte skills-based-organization research).",
    tags: ["org_design", "talent", "leadership", "pharma"],
  },
  {
    name: "Career Architecture & Talent Pathways",
    category: "org_design",
    oneLiner:
      "The designed routes people travel through an organization — promotion ladders, lateral moves, and the dual-ladder choice between management and individual-contributor tracks. The 'talent pathways, development, and mobility' the role is asked to articulate.",
    whenToUse:
      "Designing how people grow and move through the role architecture, building retention and succession into the structure, and ensuring new/hybrid roles have a future, not a dead end. Career architecture is what makes a job architecture livable.",
    vocabulary: [
      "career architecture",
      "career path",
      "talent pathway",
      "dual ladder",
      "IC track",
      "management track",
      "career lattice",
      "mobility",
      "lateral move",
      "succession",
      "talent marketplace",
      "progression",
      "career framework",
    ],
    howToDropIn:
      "\"If the new digital-engagement role has no path forward — no next level, no lateral into field leadership — we'll design a role nobody ambitious will take. Career architecture has to be designed alongside the role: a dual ladder so deep specialists can advance without managing, and lattice moves between the human and digital roles, not just a single ladder up.\"",
    commonPhrasing:
      "P&O / talent and org-design conversations, retention and succession planning. \"What's the path out of this role?\" is the sustainability question.",
    notes:
      "Career architecture sits on top of job architecture — the levels define the rungs; the pathways define the routes between them. The dual ladder (parallel IC and management tracks) is the classic device for retaining deep experts who shouldn't be forced into management to advance — increasingly relevant as fields create specialist digital/analytics roles. The modern frame is the career 'lattice' (moves sideways and diagonally, not just up) and the 'talent marketplace' (internal mobility matched by skills). The JD's emphasis on 'mobility and long-term sustainability' is exactly this: a role design that doesn't account for where people go next is not sustainable. Pair with Job Architecture (the rungs) and Capability Models (the proficiency that gates progression).",
    source: "HR/org-design practice (career-architecture and dual-ladder literature; Deloitte talent-marketplace and career-lattice research; Cathy Benko, 'The Corporate Lattice').",
    tags: ["org_design", "talent", "leadership"],
  },

  // —— Modern engagement & AI ——————————————————————————————————————————————

  {
    name: "Orchestrated Customer Engagement (Omnichannel)",
    category: "commercial_engagement",
    oneLiner:
      "Coordinating all the ways an organization engages a customer — field reps, email, web, virtual, conferences, third parties — into one intentional sequence tuned to that customer, rather than each channel acting on its own. The 'modern engagement model' this role designs around.",
    whenToUse:
      "Designing how field roles fit a multi-channel world where face-to-face access has fallen and customers expect to engage on their own terms. Orchestration is the engagement layer that role design must now serve — roles are channels in a larger mix.",
    vocabulary: [
      "omnichannel",
      "orchestration",
      "customer engagement",
      "channel mix",
      "engagement model",
      "modular content",
      "rep-triggered email",
      "HCP engagement",
      "MLR",
      "medical-legal-regulatory",
      "journey orchestration",
      "multichannel",
      "content factory",
    ],
    howToDropIn:
      "\"Multichannel is 'we have a rep and an email program and a website.' Omnichannel orchestration is 'the rep's visit triggers the right follow-up email, the website adapts to what the rep discussed, and the next best channel is chosen per customer.' Role design has to reflect that — the rep is one instrument in an orchestrated sequence, not a soloist, and someone has to own the orchestration.\"",
    commonPhrasing:
      "Commercial-model and engagement-strategy conversations, omnichannel transformation programs. \"Multichannel or truly orchestrated?\" is the maturity question.",
    notes:
      "The distinction that matters: multichannel = several channels running in parallel; omnichannel = channels orchestrated into one coherent, customer-chosen experience. The pharma-specific friction is MLR (medical-legal-regulatory) review — every piece of content must clear compliance, which is why 'modular content' (pre-approved building blocks) and content factories exist. This is the customer_journey / NN/g Journey-Management discipline applied to commercial pharma, and it's the direct driver of why field roles are being redesigned: orchestration changes what a rep is for. Pair with Next Best Action (the decision engine that powers orchestration), Targeting & Segmentation (archetypes drive channel mix), and Call Planning (reach/frequency now spans channels).",
    source: "Pharma omnichannel/customer-engagement practice (Veeva, IQVIA, ZS orchestration frameworks); broader omnichannel and journey-orchestration literature.",
    tags: ["commercial_engagement", "pharma", "omnichannel", "engagement"],
  },
  {
    name: "Next Best Action (NBA)",
    category: "commercial_engagement",
    oneLiner:
      "An AI/analytics-driven recommendation system that tells a rep (or an automated channel) the single most valuable thing to do with a given customer next — which customer, which channel, which message — turning a static call plan into a dynamic, data-informed suggestion stream.",
    whenToUse:
      "Designing how AI augments rather than replaces field roles. NBA is the concrete form of the JD's 'AI-enabled solutions' — it reshapes the rep role from planning their own week to executing intelligently-prioritized, system-suggested actions.",
    vocabulary: [
      "next best action",
      "NBA",
      "next best engagement",
      "suggestions",
      "propensity model",
      "recommendation engine",
      "rep-facing AI",
      "trigger",
      "signal",
      "machine learning",
      "Veeva",
      "Salesforce",
      "human-in-the-loop",
      "decision engine",
    ],
    howToDropIn:
      "\"NBA doesn't replace the rep's judgment — it does the prioritization the rep used to do by gut, surfacing 'this account, this channel, this message, now' from signals no human could track. The role-design implication is real: if the system plans the week, the rep's value shifts to the quality of the human interaction and the judgment to override the model. We should design the role around being a good human-in-the-loop, not a good list-worker.\"",
    commonPhrasing:
      "Omnichannel and AI-transformation conversations, CRM strategy. Embedded in Veeva and Salesforce; \"are we running NBA / suggestions?\" is the adoption question.",
    notes:
      "NBA sits on top of the CRM (Veeva CRM dominates pharma; Salesforce broadly) and ingests signals — prescribing changes, web behavior, email engagement, rep notes — to rank actions per customer. The honest framing for role design: NBA is augmentation, not automation of the whole role; its failure mode is reps ignoring low-quality suggestions ('alert fatigue') or blindly following the model and losing judgment. The human-in-the-loop design choice — what the system decides vs. what the human decides vs. overrides — is exactly the role-design work this JD describes. The product analog is recommendation systems and the eCommerce Next-Best-Action / personalization engines; same ML machinery, regulated context. Pair with Orchestrated Customer Engagement (NBA is its decision engine) and the Human-Digital-AI Role Blend.",
    source: "Pharma commercial-AI practice (Veeva Suggestions/Vault, Salesforce/Aktana NBA; ZS and IQVIA NBA frameworks); CRM and recommendation-system literature.",
    tags: ["commercial_engagement", "pharma", "ai", "engagement"],
  },
  {
    name: "Human–Digital–AI Role Blend (Augmentation vs. Automation)",
    category: "commercial_engagement",
    oneLiner:
      "The discipline of decomposing a role into tasks and deciding which stay human, which become digital self-serve, and which get automated or AI-assisted — then reassembling a coherent hybrid role. The core craft behind 'reimagining field roles as part of an integrated ecosystem.'",
    whenToUse:
      "The defining task of this position: designing roles that 'thoughtfully blend human expertise with intelligence and automation.' Use it whenever a role is being reconceived around new digital and AI capabilities rather than just tweaked.",
    vocabulary: [
      "augmentation",
      "automation",
      "task decomposition",
      "human-in-the-loop",
      "hybrid role",
      "human + machine",
      "job redesign",
      "task-based analysis",
      "self-serve",
      "deflection",
      "complementarity",
      "integrated ecosystem",
    ],
    howToDropIn:
      "\"Don't ask 'will AI replace the rep' — decompose the role into tasks and ask of each: keep human (high-judgment relationship work), shift to digital self-serve (routine information the customer can pull), or automate/AI-assist (prioritization, admin, content assembly). Then reassemble what's left into a coherent role with a real purpose. That's role design for an integrated ecosystem, not headcount math.\"",
    commonPhrasing:
      "Future-of-work, role-redesign, and AI-transformation conversations. \"What's human, what's digital, what's automated?\" is the decomposition question.",
    notes:
      "The unit of analysis is the task, not the job — automation and augmentation hit specific tasks, and roles are reassembled from what remains plus new oversight tasks (this is the durable finding from future-of-work research: jobs are bundles of tasks, and AI redistributes tasks rather than wholesale eliminating jobs). The design principle is complementarity — pair human judgment with machine scale rather than substituting one for the other. The risk to design against is a 'hollowed-out' role where automation removes the satisfying, skill-building work and leaves only exception-handling, which kills engagement and the talent pathway. This is Jobs-To-Be-Done and service-blueprint thinking applied to role design (what job is each task doing; front-stage human vs. back-stage automated). Pair with Next Best Action (a concrete augmentation), Capability Models (the new hybrid competencies), and Career Architecture (hybrid roles need real paths).",
    source: "Future-of-work and job-redesign research (Daugherty & Wilson, 'Human + Machine'; Autor on task-based labor analysis; Deloitte/MIT on augmentation vs. automation).",
    tags: ["commercial_engagement", "ai", "org_design", "transformation"],
  },

  // —— Transformation ——————————————————————————————————————————————————————

  {
    name: "Operating-Model & Field Transformation",
    category: "change_management",
    oneLiner:
      "The disciplined execution of a large-scale shift from a current operating model to a target one — sequencing the structural, process, capability, and behavioral changes so the organization actually lands the new model rather than reverting to the old.",
    whenToUse:
      "When role redesign is part of a broader change program (the JD's 'large-scale change programs' and 'transformation initiatives'). Transformation is the delivery discipline that turns a target operating model and new role architecture into adopted reality.",
    vocabulary: [
      "transformation",
      "operating-model transformation",
      "change management",
      "current state",
      "future state",
      "transition state",
      "adoption",
      "ways of working",
      "change impact assessment",
      "stakeholder alignment",
      "sustainability",
      "reversion",
      "transformation office",
    ],
    howToDropIn:
      "\"We have a target operating model and a new role architecture; the risk now is reversion. Transformation is a sequencing problem — change impact by stakeholder group, the order in which structure, incentives, and capabilities move, and a transition state nobody falls through. A redesign that isn't sequenced and reinforced reverts to the old model within a year.\"",
    commonPhrasing:
      "Transformation programs, change-leadership conversations, role/operating-model rollouts. \"How do we make it stick?\" is the sustainability question.",
    notes:
      "Transformation is where org design meets change management — the design is necessary but not sufficient; adoption and reinforcement decide whether it sticks. Builds directly on Kotter 8-Step (urgency, coalition, short-term wins, anchoring — the sequence that prevents reversion) and on the Galbraith Star (you must move all five points together or the unmoved ones drag the org back). The most common failure is declaring victory at go-live — the operating-model and role changes are announced, but incentives, capabilities, and behaviors never follow, so the org quietly reverts (the same trap Benefits Realization Management names for programs). For this JD specifically: a beautiful role architecture that isn't transformed into adopted practice is a deck, not a change. Pair with Kotter 8-Step, Galbraith Star, Operating Model Design, and Benefits Realization Management.",
    source: "Change-management and transformation practice (Kotter, 'Leading Change'; McKinsey/BCG transformation methodology); operating-model transition literature.",
    tags: ["change_management", "transformation", "org_design", "leadership"],
  },

  // —— Academic register (code-switching) ——————————————————————————————————

  {
    name: "Problematizing (\"Troubling\" a Claim)",
    category: "academic_register",
    oneLiner:
      "The academic opening move: instead of answering a question, you first complicate it — show that the obvious framing hides an assumption, a tension, or a flattened distinction. Complication before proposal is how the room knows you've actually thought.",
    whenToUse:
      "The tell: you're in a room (job talk, seminar, scholarly interview, policy-academic panel) where arriving too fast at an answer reads as naive. Deploy when a question is posed as if it's settled and the credible move is to reopen it.",
    vocabulary: [
      "I want to trouble that",
      "complicate",
      "this is more complicated than",
      "the assumption underneath",
      "we should be careful about",
      "that framing presupposes",
      "it's worth unsettling",
      "tension",
    ],
    howToDropIn:
      "\"Before I answer, I want to trouble the framing a little — the question assumes X and Y are separable, and I think the interesting work is in noticing that they're not. Once we hold them together, the problem looks different.\"",
    commonPhrasing:
      "Seminars, job talks, qualifying exams, scholarly Q&A, academic-adjacent policy panels.",
    notes:
      "Floor (minimum to be credible): name one buried assumption before you proceed — that single move signals you don't take framings at face value. Ceiling (where it tips into cosplay): problematizing *everything* and never landing. The register rewards complication followed by a position, not complication as evasion; a room full of academics can tell the difference between troubling-toward-insight and troubling-to-avoid-commitment, and the second reads as a grad student stalling. The legibility guardrail: trouble once, then say what you actually think. Pairs with Naming the Stakes (complication only earns attention if you then say why it matters) and the design-research instinct of reframing the problem before solving it (How Might We, Double Diamond's first diamond).",
    source: "Academic rhetorical convention; cf. critical-theory and qualitative-research register; Mats Alvesson & Jörgen Sandberg, 'Generating Research Questions Through Problematization' (2011).",
    tags: ["academic_register", "communication", "code_switching", "rhetoric"],
  },
  {
    name: "Positioning in the Conversation (They Say / I Say)",
    category: "academic_register",
    oneLiner:
      "Academic credibility comes from locating your claim relative to an existing conversation — what others have argued, and where you build on, extend, or depart from them. You're not just right; you're right *in relation to* a body of thought.",
    whenToUse:
      "The tell: a room that treats knowledge as cumulative and conversational, where an unsituated opinion (however good) reads as not knowing the field. Deploy whenever you make a substantive claim and want it to land as scholarship rather than assertion.",
    vocabulary: [
      "building on",
      "departing from",
      "the literature tends to",
      "this is undertheorized",
      "X gives us a vocabulary for",
      "where I part company with",
      "a conversation between",
      "this extends rather than rejects",
    ],
    howToDropIn:
      "\"The dominant account treats this as a coordination problem, and that's been productive — but it's undertheorized on the question of power. I'd build on that work while shifting the unit of analysis, which is where I part company with it.\"",
    commonPhrasing:
      "Literature reviews, job talks, scholarly interviews, grant framing, discussant remarks.",
    notes:
      "Floor: situate your claim against *one* identifiable position ('the standard view is X; I'm arguing Y'). That alone converts an opinion into a contribution. Ceiling: name-dropping a wall of authors to perform erudition — the register rewards *one well-placed* relation over six citations, and a string of names without a clear 'and here's where I stand' reads as anxiety, not mastery. The legibility guardrail: cite to position yourself, not to prove you've read. This is Graff & Birkenstein's 'They Say / I Say' — the single most transferable academic move — and it maps directly onto your existing translation-card logic (yours vs. theirs) and onto Wardley/positioning thinking from the strategy cards.",
    source: "Gerald Graff & Cathy Birkenstein, 'They Say / I Say' (2006); Swales' CARS model of academic introductions (1990).",
    tags: ["academic_register", "communication", "code_switching", "rhetoric"],
  },
  {
    name: "Calibrated Hedging (Epistemic Humility)",
    category: "academic_register",
    oneLiner:
      "In academic register, calibrated uncertainty is a competence signal, not a weakness. Marking how confident you are — and where the claim might fail — reads as intellectual honesty; over-claiming reads as not understanding the limits of your evidence.",
    whenToUse:
      "The tell: a room that prizes precision about what is and isn't known. Deploy when making claims that outrun your evidence, or when a confident-sounding overstatement would actually cost you credibility with people trained to look for the caveat.",
    vocabulary: [
      "it may be that",
      "one reading is",
      "tentatively",
      "the evidence is suggestive rather than conclusive",
      "I'd want to be careful claiming",
      "provisionally",
      "this holds under certain conditions",
      "I could be wrong about",
    ],
    howToDropIn:
      "\"Tentatively — and I'd want better evidence before I leaned on this — one reading is that the effect is driven by selection, not by the intervention. I hold that provisionally; it's the hypothesis I'd test first, not a conclusion.\"",
    commonPhrasing:
      "Research presentations, peer review, scholarly Q&A, methods discussions.",
    notes:
      "Floor: attach a confidence marker to your strongest claim ('provisionally,' 'the evidence is suggestive') — it signals you know the difference between a finding and a hunch. Ceiling: hedging *everything* until you've said nothing falsifiable — that reads as not having a position, which is its own failure in this room. The skill is *differential* hedging: state what you're sure of plainly, mark what you're not. This is exactly the opposite of the business register's answer-first confidence, which is why code-switching between the two matters — the same hedge that signals rigor in a seminar signals weakness in a boardroom. Pairs with Conceptual Precision and contrasts deliberately with Answer-First (BLUF).",
    source: "Academic-writing register; hedging as a studied feature of scholarly discourse (Ken Hyland, 'Hedging in Scientific Research Articles,' 1998).",
    tags: ["academic_register", "communication", "code_switching", "rhetoric"],
  },
  {
    name: "Thinking-With & Generative Tension",
    category: "academic_register",
    oneLiner:
      "Treating thinkers and frameworks as interlocutors to think *with* rather than tools to apply, and treating contradictions as *productive* rather than as problems to resolve. The move that signals you read for generativity, not just for answers.",
    whenToUse:
      "The tell: humanities and interpretive-social-science rooms where the goal of a conversation is richer understanding, not a decision. Deploy when two ideas conflict and the credible move is to sit in the tension rather than collapse it.",
    vocabulary: [
      "to think with",
      "reading X alongside Y",
      "a productive tension",
      "generative",
      "this opens up",
      "holding these together",
      "what this lets us see",
      "in dialogue with",
    ],
    howToDropIn:
      "\"I find it generative to read Arendt alongside Scott here — not to reconcile them, but because the tension between them is exactly what the case surfaces. Holding both lets us see something neither sees alone.\"",
    commonPhrasing:
      "Theory seminars, humanities job talks, interdisciplinary panels, book discussions.",
    notes:
      "Floor: frame at least one relationship as 'thinking with' rather than 'applying' — it signals you treat ideas as live, not as a toolkit. Ceiling: 'productive tension' as a reflex that lets you avoid ever saying which view you find more persuasive — at C3, you can dwell in the tension *and* indicate your lean. This register is genuinely foreign to business rooms (where unresolved tension reads as indecision), so it's a pure code-switch: deploy it where ambiguity is valued, drop it entirely where decisions are. The honest caution: this is the most cosplay-prone academic move, because the phrasing is easy to mimic without the reading behind it — only use thinkers you can actually be questioned on.",
    source: "Interpretive/humanities scholarly register; 'thinking with' as a recognized methodological idiom (cf. Stengers, Haraway, Despret in science-and-technology studies).",
    tags: ["academic_register", "communication", "code_switching", "rhetoric"],
  },
  {
    name: "Naming the Stakes",
    category: "academic_register",
    oneLiner:
      "Making explicit why an analytic distinction *matters* — what follows from it, what it changes, what's lost if we get it wrong. The move that rescues academic precision from looking like hair-splitting.",
    whenToUse:
      "The tell: any room where you've drawn a fine distinction and someone might reasonably think 'so what?' Deploy right after a conceptual move, to convert apparent pedantry into demonstrated relevance.",
    vocabulary: [
      "what's at stake here is",
      "the stakes of this distinction",
      "this matters because",
      "what follows from it",
      "if we get this wrong",
      "the consequence is",
      "this isn't merely terminological",
      "the payoff is",
    ],
    howToDropIn:
      "\"This might sound like a terminological quibble, but what's at stake is real: if we treat access as the same as use, we'll design for the wrong failure — and the people it fails are precisely the ones the program exists to serve.\"",
    commonPhrasing:
      "Job talks, seminars, policy-academic writing, dissertation defenses.",
    notes:
      "Floor: after any fine distinction, say one sentence on why it matters — that single move is the difference between 'rigorous' and 'pedantic' in the room's perception. Ceiling: inflating the stakes of every minor point until the genuinely high-stakes ones lose their force; reserve 'what's at stake' for distinctions that actually carry consequence. This is the academic sibling of the business register's 'so-what' — same underlying demand (earn the audience's attention by connecting to consequence), different idiom. Knowing they're the same move in two dialects is itself a code-switching skill. Pairs with Problematizing (complication only earns its keep if you then name the stakes) and Mark Moore's public-value framing.",
    source: "Academic and policy rhetorical convention; the 'so what / who cares' test (Booth, Colomb & Williams, 'The Craft of Research').",
    tags: ["academic_register", "communication", "code_switching", "rhetoric"],
  },
  {
    name: "Conceptual Precision (Distinguishing Senses)",
    category: "academic_register",
    oneLiner:
      "Explicitly fixing the sense in which you're using a contested word, and separating senses others run together. The move that signals you treat language as a precision instrument, not decoration.",
    whenToUse:
      "The tell: rooms where a word is doing too much work and the conversation is quietly equivocating on it. Deploy when 'we're using the same word for two different things' is the actual source of a disagreement.",
    vocabulary: [
      "in a specific sense",
      "I'm using X to mean",
      "there are two senses of",
      "we should distinguish",
      "as opposed to the looser sense",
      "let me be precise about",
      "the term is doing two jobs here",
      "on the strong reading vs. the weak reading",
    ],
    howToDropIn:
      "\"Let me be precise about 'engagement,' because it's doing two jobs in this conversation — there's engagement as reach (did we make contact) and engagement as depth (did it change anything). The disagreement dissolves once we separate them.\"",
    commonPhrasing:
      "Theory and methods discussions, definitional debates, scholarly editing, interdisciplinary translation.",
    notes:
      "Floor: define one key term in the sense you mean before building on it — pre-empts the equivocation that derails academic conversations. Ceiling: defining terms nobody was confused about, which stalls momentum and reads as performance; reserve the move for words actually carrying ambiguity in *this* conversation. This is information architecture applied to language — the same taxonomy discipline as your IA/card-sorting cards, turned on concepts. It also travels surprisingly well into business and technical rooms (where 'let's define what we mean by X' is welcomed), making it one of the more portable academic moves. Pairs with Calibrated Hedging and the Job Architecture / taxonomy cards.",
    source: "Analytic-philosophy and scholarly register; conceptual analysis and the practice of stipulative definition.",
    tags: ["academic_register", "communication", "code_switching", "rhetoric"],
  },

  // —— Business-academic register (code-switching) ——————————————————————————

  {
    name: "Answer-First (The So-What / BLUF)",
    category: "business_register",
    oneLiner:
      "Lead with the conclusion, then support it — the inverse of the academic build-up. In executive register, making the audience wait for your point reads as not having one; the recommendation comes first, the reasoning follows.",
    whenToUse:
      "The tell: time-pressured, decision-oriented rooms (exec reviews, consulting cases, business interviews) where 'what's the so-what?' is the implicit standing question. Deploy whenever you'd otherwise instinctively narrate your reasoning before your conclusion.",
    vocabulary: [
      "the so-what is",
      "bottom line up front",
      "BLUF",
      "headline",
      "my recommendation is",
      "net-net",
      "to cut to it",
      "the answer is X; here's why",
    ],
    howToDropIn:
      "\"Bottom line up front: I'd consolidate the two roles and reinvest the savings in a digital role — and I'll give you the three reasons. If you only take one, it's the second.\"",
    commonPhrasing:
      "Executive briefings, consulting case interviews, board readouts, leadership Q&A.",
    notes:
      "Floor: state your conclusion in the first sentence, before the reasoning. For someone trained in academic build-up this feels rude or premature — it isn't; in this room it's respect for the listener's time. Ceiling: answer-first with no genuine reasoning behind it reads as glib, and senior people probe fast — have the 'here's why' ready and be willing to update. This is the spoken form of the Pyramid Principle / SCQA already in your communication cards, and it's the *deliberate inverse* of academic Calibrated Hedging — which is the whole point: the same person should lead with the answer in a boardroom and with the complication in a seminar. Code-switching is knowing which room you're in before the first sentence.",
    source: "Barbara Minto, 'The Pyramid Principle' (1st ed. 1985); military 'BLUF' formalized in U.S. Army Regulation 25-50; consulting communication practice.",
    tags: ["business_register", "communication", "code_switching", "rhetoric"],
  },
  {
    name: "MECE & Structured Decomposition",
    category: "business_register",
    oneLiner:
      "Breaking a messy problem into a small set of buckets that are Mutually Exclusive and Collectively Exhaustive — no overlaps, no gaps. The move that makes you sound structured rather than associative, which is the core competence this register screens for.",
    whenToUse:
      "The tell: rooms that reward structure over nuance (consulting, strategy, exec problem-solving). Deploy when a question is broad and the credible move is to impose a clean frame before diving in.",
    vocabulary: [
      "MECE",
      "let me break this into",
      "three buckets",
      "two dimensions",
      "two-by-two",
      "first, second, third",
      "let's structure this",
      "the way I'd frame the problem",
    ],
    howToDropIn:
      "\"Let me structure it. There are really three levers here — who we cover, how intensively, and through which channel — and they're largely independent. I'll take each in turn and tell you where the biggest move is.\"",
    commonPhrasing:
      "Case interviews, strategy workshops, exec problem-solving, whiteboard sessions.",
    notes:
      "Floor: announce a structure ('three things') before you enumerate, and make the buckets genuinely non-overlapping — that alone reads as 'structured thinker.' Ceiling: forcing everything into threes and two-by-twos until the structure distorts the problem; a frame that's clean but wrong is worse than honest mess, and good operators notice. The register rewards structure *that fits*, not structure for its own sake. Note the deliberate tension with the academic Problematizing move — academia rewards showing the problem resists clean decomposition; business rewards decomposing it anyway and acting. At C3 you can do both: structure for the room that wants action, complicate for the room that wants understanding. Pairs with RICE/MoSCoW (structured prioritization) and Cynefin (knowing when a problem is too complex to MECE).",
    source: "Barbara Minto / McKinsey (MECE principle, coined late 1960s; Minto credits the underlying logic to Aristotle); management-consulting problem-structuring practice.",
    tags: ["business_register", "communication", "code_switching", "rhetoric"],
  },
  {
    name: "Altitude Control (Zoom Out / Double-Click)",
    category: "business_register",
    oneLiner:
      "Explicitly moving the conversation up to strategy or down to detail — and signaling which you're doing. Fluency in this register is partly the ability to change altitude on demand and narrate the move so the room follows.",
    whenToUse:
      "The tell: rooms where a senior person says 'let's zoom out' or 'can you double-click on that' and expects you to move levels cleanly. Deploy when a conversation is stuck at the wrong altitude — lost in detail, or floating in abstraction.",
    vocabulary: [
      "let's zoom out",
      "at the 30,000-foot level",
      "double-click on that",
      "drill into",
      "stepping back",
      "at a higher level of abstraction",
      "to get concrete",
      "let me ground that in an example",
    ],
    howToDropIn:
      "\"Let me zoom out for a second — strategically, this is one bet, not three. Then I'll double-click on the one that carries the most risk, because that's where the detail actually matters.\"",
    commonPhrasing:
      "Executive conversations, strategy reviews, consulting fieldwork, leadership interviews.",
    notes:
      "Floor: when you change levels, *say so* ('stepping back' / 'to get concrete') — narrating the altitude shift is what makes you easy to follow and reads as senior. Ceiling: living permanently at 30,000 feet because abstraction feels safe — executives respect the ability to drop to a real number or example on demand, and someone who can only float reads as having no operational substance. The C3 skill is the *round trip*: abstract to frame, concrete to prove, back up to recommend. This is a register where the academic instinct to stay nuanced-and-qualified can read as 'can't see the forest' — so the code-switch is being willing to make the clean high-altitude claim. Pairs with Wardley Mapping (altitude as a strategy tool) and Answer-First.",
    source: "Executive-communication and consulting register; 'altitude' and 'double-click' as established corporate idiom.",
    tags: ["business_register", "communication", "code_switching", "rhetoric"],
  },
  {
    name: "First-Principles Framing",
    category: "business_register",
    oneLiner:
      "Stripping a problem back to its irreducible fundamentals and reasoning up from there, rather than from convention or analogy. The move that signals you can think, not just benchmark — prized in strategy and tech-exec rooms.",
    whenToUse:
      "The tell: rooms that distrust 'because that's how it's done' and reward reasoning from the ground up (strategy, tech leadership, founder-adjacent). Deploy when the conversation is anchored on precedent and the credible move is to ask what's actually true beneath it.",
    vocabulary: [
      "from first principles",
      "fundamentally",
      "strip it back to",
      "what's actually true here",
      "the irreducible question",
      "if we started from scratch",
      "the underlying physics of this",
      "setting aside how it's usually done",
    ],
    howToDropIn:
      "\"Setting aside how field teams are usually structured — fundamentally, this is a question of who the customer needs to talk to and about what. If we reason up from that, the current role boundaries aren't obvious; they're inherited.\"",
    commonPhrasing:
      "Strategy sessions, tech-leadership conversations, founder and investor rooms, transformation framing.",
    notes:
      "Floor: name the inherited assumption and ask what's true beneath it ('this is usually done as X, but fundamentally the question is Y') — that reframe is the whole move. Ceiling: 'first principles' as a flex that dismisses hard-won domain knowledge as mere convention; the mature version respects that some conventions encode real constraints, and reasons up to *test* them, not to perform iconoclasm. Overused (especially in tech rooms) it's become slightly suspect, so deploy it for genuine reframes, not as a verbal tic. This is the same instinct as the academic Problematizing move, in a different dialect — both reopen a settled framing — which is why someone fluent in one can learn the other fast. Pairs with Cynefin and Wardley Mapping.",
    source: "Reasoning tradition (Aristotle's 'first principles'); popularized in modern business/tech register via strategy and founder discourse.",
    tags: ["business_register", "communication", "code_switching", "rhetoric"],
  },
  {
    name: "Order-of-Magnitude & Sizing",
    category: "business_register",
    oneLiner:
      "Quickly attaching a rough number to a claim — sizing the prize, the cost, or the effect to the right power of ten. In business register, an approximate number beats a precise adjective; 'big' is an opinion, '~$10M' is a position.",
    whenToUse:
      "The tell: rooms where every qualitative claim invites 'how big?' and an inability to estimate reads as not being commercial. Deploy when you're tempted to say 'significant' or 'a lot' and could instead bound it numerically.",
    vocabulary: [
      "order of magnitude",
      "directionally",
      "back-of-the-envelope",
      "ballpark",
      "rough cut",
      "size the prize",
      "an order of magnitude bigger",
      "call it roughly",
      "to a first approximation",
    ],
    howToDropIn:
      "\"Directionally — back-of-the-envelope — this is a low-eight-figure opportunity, not a seven-figure one. I'd want to pressure-test the assumptions, but it's an order of magnitude that justifies the investment, and that's the call we're actually making.\"",
    commonPhrasing:
      "Business cases, investment discussions, case interviews, exec prioritization.",
    notes:
      "Floor: offer a bounded estimate with an explicit confidence flag ('directionally,' 'ballpark') rather than a qualitative adjective — willingness to put a rough number down is itself the signal. Ceiling: false precision (quoting $10.4M off a napkin) reads worse than an honest range, and over-quantifying genuinely unquantifiable things (culture, trust) is its own tell. The register respects 'roughly, and here's my assumption,' not spurious decimals. This is a near-pure code-switch from academic register, where the same back-of-the-envelope confidence would read as carelessly under-evidenced — so it's a clean example of how the *same* estimate should be presented differently in two rooms. Pairs with Answer-First and the eCommerce/retail metrics cards (where sizing is the native language).",
    source: "Consulting and finance register; Fermi-estimation / back-of-the-envelope tradition; business-case practice.",
    tags: ["business_register", "communication", "code_switching", "rhetoric"],
  },
  {
    name: "Hypothesis-Driven Framing",
    category: "business_register",
    oneLiner:
      "Leading with a sharp, falsifiable claim and the test that would confirm or kill it — 'my hypothesis is X; here's how we'd know.' The move that makes you sound rigorous and action-oriented at once, which is the business register's prized combination.",
    whenToUse:
      "The tell: rooms that want to move fast but defensibly (consulting, product strategy, data-literate leadership). Deploy when a problem is open and the credible move is to commit to a testable position rather than gather endlessly.",
    vocabulary: [
      "my hypothesis is",
      "the testable claim is",
      "here's how we'd know",
      "what would falsify this",
      "let's pressure-test",
      "if true, we'd expect to see",
      "the data that would change my mind",
      "leading hypothesis",
    ],
    howToDropIn:
      "\"My leading hypothesis is that the access problem, not the message, is what's capping reach — and here's how we'd know: if I'm right, digital-engaged segments should convert at parity with detailed ones. If they don't, I'm wrong and we re-cut.\"",
    commonPhrasing:
      "Consulting workplanning, product discovery, data-driven strategy, leadership interviews.",
    notes:
      "Floor: state a claim and the evidence that would change your mind — committing to falsifiability is the whole signal, and it reads as confident *and* honest. Ceiling: 'hypothesis-driven' as theater, where the conclusion is foregone and the 'test' is rigged to confirm it — data-literate rooms catch this fast. The integrity of the move is the willingness to actually be wrong. This is the business-register cousin of academic Calibrated Hedging — both are honesty-about-uncertainty moves — but tuned for action: the academic marks uncertainty to be precise; the operator marks it to commit and test. Recognizing they're the same instinct in two dialects is exactly the code-switching fluency you're after. Pairs with Lean UX, CRO, Opportunity Solution Tree, and the experimentation cards.",
    source: "Consulting (hypothesis-led problem solving, McKinsey/BCG); lean-startup and scientific-method lineage.",
    tags: ["business_register", "communication", "code_switching", "rhetoric"],
  },

  // —— Cross-register ———————————————————————————————————————————————————————

  {
    name: "Confident Understatement (Reading the Room's Volume)",
    category: "communication",
    oneLiner:
      "The cross-cutting skill behind both restrained registers: signaling confidence through calm, precise, slightly-under-stated speech rather than emphasis — and matching your 'volume' to a room that reads overstatement as insecurity.",
    whenToUse:
      "The tell: high-status rooms (senior academic, senior executive, boardroom, elite professional) where the people with the most authority speak the most quietly. Deploy when your instinct is to oversell, intensify, or over-explain — and the room would credit the opposite.",
    vocabulary: [
      "I'd gently push back",
      "a modest claim",
      "it's worth noting",
      "I'd only add",
      "one small thing",
      "I suspect",
      "that's probably right, though",
      "understatement",
      "litotes",
    ],
    howToDropIn:
      "\"I'd gently push back on one thing — and it's a small point, but I think it matters. The rest I'd agree with.\" (The restraint does the work; the disagreement lands harder for being quiet.)",
    commonPhrasing:
      "Senior academic and executive rooms, board settings, elite professional contexts, high-trust expert dialogue.",
    notes:
      "This is the meta-skill your goal actually names — both the academic and business-academic registers, at their senior levels, reward *restraint*: the move is to under-state and let the substance carry, not to intensify. Floor: strip intensifiers ('very,' 'incredibly,' 'hugely') and let a plain claim stand — calm specificity reads as confidence. Ceiling: understatement so extreme it becomes evasive or falsely modest ('oh, it's nothing'), which reads as either fishing or lacking conviction; the target is quiet precision, not self-erasure. The deeper point: code-switching isn't only *which words* — it's *volume and register*. Reading how loudly a room speaks, and matching just below it, is often more legible than any vocabulary. The same content delivered at the room's volume, in the room's idiom, is what 'fluent' actually means. Pairs with every register card here, and with the whenToUseTheirs logic running through the whole translation set.",
    source: "Rhetorical convention (litotes, understatement); status-and-language research; observed register of senior academic and executive discourse.",
    tags: ["communication", "code_switching", "academic_register", "business_register"],
  },

  // —— Agentic delivery ————————————————————————————————————————————————————

  {
    name: "Multi-Agent SDLC Orchestration",
    category: "agentic_delivery",
    oneLiner:
      "Coordinating multiple specialized AI agents — architecture, coding, QA, UX, docs — across the software lifecycle so their outputs compose into one coherent delivery instead of drifting apart.",
    whenToUse:
      "When AI-assisted delivery scales past a single agent doing a single task: multiple agents working in parallel or sequence on one product, where consistency across their outputs is the real risk.",
    vocabulary: [
      "orchestrator",
      "worker agent",
      "sub-agent",
      "handoff",
      "workflow",
      "checkpoint",
      "cross-agent consistency",
      "agent role",
      "fan-out / fan-in",
      "pipeline",
    ],
    howToDropIn:
      "\"The risk in multi-agent delivery isn't any single agent's output — it's drift between them. The orchestrator's job is to hold the shared spec and the checkpoints, so the QA agent and the coding agent are building against the same contract.\"",
    commonPhrasing:
      "AI-assisted delivery teams, agentic SDLC programs, consulting 'agentic delivery' offerings.",
    notes:
      "Anthropic's 'Building Effective Agents' draws the line between workflows (predefined paths with LLMs at specific nodes) and agents (the model directs its own steps); most production 'agentic delivery' is orchestrated workflows with agents at a few nodes, not full autonomy. The trap is over-architecting autonomy when a deterministic workflow with one agent step is cheaper and more reliable. Your Public Mechanics canon names the governance layer this needs: Agent Plumbing is the legitimacy layer between an agent's proposal and execution, and Judgment Routing decides which steps require a human. Pair with Team Topologies (agents are teams with cognitive-load boundaries) and Task Decomposition for Agents.",
    source: "Anthropic, 'Building Effective Agents' (2024); multi-agent orchestration practice (LangGraph, AutoGen, CrewAI).",
    tags: ["agentic_delivery", "ai", "orchestration", "sdlc"],
  },
  {
    name: "Task Decomposition for Agents",
    category: "agentic_delivery",
    oneLiner:
      "Breaking a business or technical requirement into structured workflows, prompts, tasks, and checkpoints sized for an agent to execute reliably — so the spec becomes the contract the agent is held to.",
    whenToUse:
      "The first move in any agentic delivery workstream. Agents fail on vague, oversized tasks; decomposition into checkpointed units is what makes their output verifiable at all.",
    vocabulary: [
      "decomposition",
      "task graph",
      "checkpoint",
      "acceptance criteria",
      "spec-as-contract",
      "subtask",
      "prompt",
      "definition of done",
      "work breakdown",
    ],
    howToDropIn:
      "\"Before we hand this to agents, decompose it: each task small enough to verify, each with explicit acceptance criteria and a checkpoint. An agent given 'build the feature' fails silently; an agent given a checkpointed task graph produces output we can actually review.\"",
    commonPhrasing:
      "Agentic delivery planning, AI-assisted sprint planning, requirements-to-workflow translation.",
    notes:
      "This is User Story Mapping and Definition of Done applied to agent work — the discipline is identical, the stakes higher, because an agent won't push back on an ambiguous task the way a human teammate would. The checkpoint is where human-in-the-loop attaches. Over-decomposition burns orchestration overhead; under-decomposition produces output no one can verify. Pair with HITL Checkpoints and your Public Mechanics Responsibility to Record (each task needs an owner-of-record for its output, or the chain goes dark at the Last Documented Mile).",
    source: "Agentic-delivery practice; builds on work-breakdown structure, User Story Mapping, and Definition of Done.",
    tags: ["agentic_delivery", "ai", "planning", "sdlc"],
  },
  {
    name: "Agent Orchestration Patterns",
    category: "agentic_delivery",
    oneLiner:
      "The named structures for how multiple agents or agent calls coordinate — prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer — each trading autonomy against control.",
    whenToUse:
      "Designing an agentic workflow, when 'use agents' has to become a specific topology. The pattern choice determines reliability, cost, and where human review fits.",
    vocabulary: [
      "prompt chaining",
      "routing",
      "parallelization",
      "orchestrator-workers",
      "evaluator-optimizer",
      "planner-executor",
      "reflection",
      "ReAct",
      "supervisor",
    ],
    howToDropIn:
      "\"We don't need a fully autonomous agent here — an evaluator-optimizer loop (generate, critique, revise) gets the quality with far more control. Pick the orchestration pattern for the reliability we need, not for how autonomous it sounds.\"",
    commonPhrasing:
      "Agent architecture reviews, agentic platform design, AI delivery design.",
    notes:
      "Anthropic's 'Building Effective Agents' catalogs the common ones: prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer. The senior judgment is matching pattern to problem and resisting autonomy for its own sake — the most reliable production systems are usually the least autonomous that still solve the problem. The routing pattern is the same idea as your Public Mechanics Judgment Routing, applied to agent steps rather than institutional decisions. Pair with Cynefin (genuine autonomy fits complex/novel work; deterministic workflows fit the merely complicated).",
    source: "Anthropic, 'Building Effective Agents' (2024); orchestration frameworks (LangGraph, AutoGen, CrewAI).",
    tags: ["agentic_delivery", "ai", "orchestration", "architecture"],
  },
  {
    name: "Human-in-the-Loop (HITL) Checkpoints",
    category: "agentic_delivery",
    oneLiner:
      "Designed points where a human reviews, approves, or overrides an AI or agent before it proceeds — the gate that keeps autonomy accountable and catches failures models can't catch themselves.",
    whenToUse:
      "Any AI-assisted workflow with consequential output. The design question is not whether to have humans in the loop but where, and what they can actually verify at each gate.",
    vocabulary: [
      "human-in-the-loop",
      "human-on-the-loop",
      "approval gate",
      "escalation",
      "override",
      "autonomy level",
      "review checkpoint",
      "fail-safe",
      "oversight",
    ],
    howToDropIn:
      "\"Human-in-the-loop only works if the human can actually verify at the gate. A checkpoint where the reviewer rubber-stamps because they can't see what to check is theater. Put the gate where judgment is possible and the stakes warrant it — not on every step.\"",
    commonPhrasing:
      "Responsible-AI reviews, agentic delivery governance, release-readiness gates.",
    notes:
      "The failure modes are symmetric: too few gates (unaccountable autonomy) and too many low-value gates (alert fatigue, rubber-stamping). Distinguish human-in-the-loop (approves before action) from human-on-the-loop (monitors and can intervene). This is the exact territory of your Public Mechanics canon — Judgment Routing decides which actions need a human, Decision Receipts make the gate auditable, and Mirror Signaling is the principle that a reviewer must be able to see the weights to review them. Pair with Agent Output Validation.",
    source: "Responsible-AI and human-factors practice; NIST AI RMF human-oversight controls; Public Mechanics (Judgment Routing, Decision Receipts).",
    tags: ["agentic_delivery", "ai", "governance", "hitl"],
  },
  {
    name: "Agent Output Validation (Trust but Verify)",
    category: "agentic_delivery",
    oneLiner:
      "The discipline of confirming what an agent actually produced — code, tests, docs — against the spec, rather than trusting its self-report that the task is done.",
    whenToUse:
      "Every time an agent reports completion. Agents describe what they intended to do, which is not the same as what they did; validation is the gap-closer.",
    vocabulary: [
      "trust but verify",
      "output validation",
      "code review",
      "diff review",
      "eval gate",
      "self-report gap",
      "regression check",
      "acceptance test",
      "ground truth",
    ],
    howToDropIn:
      "\"An agent's 'done' is a claim, not a fact. Read the diff, run the tests, check the output against the acceptance criteria — the validation is the work. The teams that get burned are the ones that trusted the summary instead of checking the change.\"",
    commonPhrasing:
      "AI-assisted code review, agentic QA, release readiness, technical review.",
    notes:
      "This is ordinary code/design/test review with one twist: the agent is a fluent, confident author whose mistakes don't look like human mistakes — plausible-but-wrong code, silent scope drift, fabricated test coverage. The reviewer's prior should be lower, not higher, because fluency masks error. Automated eval gates (see LLM Evaluation) scale this; human review catches what evals miss. Connects to your Public Mechanics Last Documented Mile — a task marked done without verified output is a record that lies. Pair with LLM Evaluation and HITL Checkpoints.",
    source: "Code-review and QA practice applied to AI output; trust-calibration research.",
    tags: ["agentic_delivery", "ai", "quality", "review"],
  },
  {
    name: "Delivery Governance for AI-Assisted Workflows",
    category: "agentic_delivery",
    oneLiner:
      "The standards, audit trail, and accountability structure that make AI-assisted delivery legible and controllable — who authorized what, how quality is enforced, and how a decision can be reconstructed after the fact.",
    whenToUse:
      "When AI-assisted delivery moves from experiment to production or client work, and 'the agent did it' is not an acceptable answer to an auditor, a regulator, or a client.",
    vocabulary: [
      "delivery governance",
      "audit trail",
      "accountability",
      "decision record",
      "standards enforcement",
      "compliance",
      "traceability",
      "sign-off",
      "provenance",
    ],
    howToDropIn:
      "\"Governance in AI-assisted delivery is the answer to 'who's accountable when the agent ships a defect.' If we can't reconstruct what was authorized, on what basis, and who signed off, we don't have delivery — we have deniability.\"",
    commonPhrasing:
      "Consulting delivery governance, regulated-industry AI delivery, government/GPS AI programs.",
    notes:
      "Public-sector and regulated clients need this hardest, because the audit and accountability demands are real and contractual. Your Public Mechanics canon is the most developed vocabulary for exactly this problem: Decision Receipts (the auditable record), Authority Tokens (what authorized the action), Responsibility to Record (the obligation to log), and Delivery Forensics (reconstructing why it failed). Bringing that vocabulary into a Deloitte GPS context is a genuine differentiator — most teams have no governance language for agent work at all. Pair with RACI and DORA Metrics.",
    source: "Delivery-governance practice; Public Mechanics (Decision Receipts, Authority Tokens, Responsibility to Record, Delivery Forensics).",
    tags: ["agentic_delivery", "ai", "governance", "public_sector"],
  },

  // —— AI engineering craft ————————————————————————————————————————————————

  {
    name: "Prompt Engineering",
    category: "ai_engineering",
    oneLiner:
      "Designing the instructions, examples, and structure given to an LLM to get reliable, correct output — treating the prompt as a spec rather than a wish.",
    whenToUse:
      "Any LLM-backed feature or agent step. The difference between a flaky demo and a reliable system is often prompt discipline, not model choice.",
    vocabulary: [
      "system prompt",
      "few-shot",
      "zero-shot",
      "chain-of-thought",
      "structured output",
      "prompt template",
      "instruction following",
      "delimiters",
      "output schema",
    ],
    howToDropIn:
      "\"Before we blame the model, let's fix the prompt: explicit instructions, a couple of worked examples, a defined output schema, and the edge cases named. Most 'the model can't do this' turns out to be 'the prompt didn't ask precisely.'\"",
    commonPhrasing:
      "LLM feature development, agent design, AI-assisted coding, coaching junior practitioners.",
    notes:
      "Prompt engineering is being absorbed into the broader discipline of context engineering — what goes in the window, not just how the instruction is phrased. The durable moves: be explicit, show examples, constrain the output format, decompose hard tasks. The trap is endless prompt-tweaking when the real fix is decomposition, retrieval, or a different orchestration pattern. Pair with Context Engineering, Task Decomposition for Agents, and LLM Evaluation (you can't reliably improve a prompt you can't measure).",
    source: "Prompt-engineering practice (Anthropic and OpenAI prompting guides); chain-of-thought (Wei et al., 2022).",
    tags: ["ai_engineering", "ai", "prompting", "craft"],
  },
  {
    name: "Context Engineering",
    category: "ai_engineering",
    oneLiner:
      "Managing what an LLM sees at inference time — instructions, retrieved knowledge, tool results, history, memory — so the right information is in the window and the wrong information isn't crowding it out.",
    whenToUse:
      "As LLM systems grow past a single prompt: agents with tools, long conversations, RAG pipelines. Context engineering decides what to load, when, and how much.",
    vocabulary: [
      "context window",
      "context rot",
      "retrieval",
      "memory",
      "compaction",
      "summarization",
      "tool results",
      "token budget",
      "relevance",
    ],
    howToDropIn:
      "\"This isn't a prompt problem, it's a context problem — we're stuffing the window with stale tool output and the model is losing the signal. Context engineering is deciding what earns a place in the window and what gets retrieved on demand.\"",
    commonPhrasing:
      "Agent and RAG architecture, long-context system design, AI platform work.",
    notes:
      "The newer and more accurate frame than 'prompt engineering' for production systems — performance often degrades not because the prompt is wrong but because the context is bloated or stale ('context rot'). Core moves: retrieve just-in-time, compact long histories, budget tokens deliberately, keep tool output scoped. Multi-agent orchestration is partly a context-isolation technique — each sub-agent gets a clean window. Pair with Retrieval-Augmented Generation (retrieval is one context source) and Multi-Agent SDLC Orchestration.",
    source: "Context-engineering practice (Anthropic engineering writing, 2025); long-context and retrieval research.",
    tags: ["ai_engineering", "ai", "context", "craft"],
  },
  {
    name: "Retrieval-Augmented Generation (RAG)",
    category: "ai_engineering",
    oneLiner:
      "Grounding an LLM's output in retrieved documents — fetch relevant context from a knowledge base, put it in the prompt, and answer from it — to reduce hallucination and cite sources.",
    whenToUse:
      "When the model needs current, proprietary, or citable knowledge it wasn't trained on. RAG is the default architecture for 'answer questions over our documents or data.'",
    vocabulary: [
      "retrieval",
      "embedding",
      "vector store",
      "chunking",
      "semantic search",
      "reranking",
      "grounding",
      "citation",
      "hallucination",
      "hybrid search",
      "top-k",
    ],
    howToDropIn:
      "\"RAG is only as good as its retrieval — if the right chunk isn't fetched, the model can't ground on it and will confidently make something up. Most 'RAG is hallucinating' problems are retrieval problems: chunking, embeddings, or reranking, not the LLM.\"",
    commonPhrasing:
      "Knowledge-assistant builds, enterprise search, agent tool design.",
    notes:
      "The pipeline (chunk → embed → store → retrieve → rerank → generate) has a failure mode at every stage, and the generation step is rarely the culprit. Modern practice leans on hybrid search (keyword + semantic) and reranking, and increasingly on agentic retrieval where the model decides what to fetch. The faceted-navigation and onsite-search instincts from your eCommerce cards transfer directly — retrieval quality is findability. Pair with Context Engineering and LLM Evaluation.",
    source: "Lewis et al., 'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks' (NeurIPS 2020); RAG practice.",
    tags: ["ai_engineering", "ai", "rag", "architecture"],
  },
  {
    name: "LLM Evaluation (Evals)",
    category: "ai_engineering",
    oneLiner:
      "Systematically measuring whether an LLM system produces correct, safe, on-spec output — eval sets, automated scoring including LLM-as-judge, and regression checks — so quality is a number, not a vibe.",
    whenToUse:
      "The moment an LLM feature matters enough to ship. Without evals you can't tell whether a prompt change, model swap, or pipeline tweak helped or hurt.",
    vocabulary: [
      "eval set",
      "golden dataset",
      "LLM-as-judge",
      "regression eval",
      "offline eval",
      "online eval",
      "ground truth",
      "rubric",
      "pass rate",
      "guardrail metric",
    ],
    howToDropIn:
      "\"We can't improve what we can't measure. Build an eval set — real inputs, known-good outputs, a scoring rubric — and run it on every change. Otherwise we're tuning prompts by anecdote and shipping regressions we can't see.\"",
    commonPhrasing:
      "LLM productionization, agent quality, model-swap decisions, AI delivery governance.",
    notes:
      "This is the AI-native version of test rigor, and the single biggest gap between a demo and a production system. LLM-as-judge scales scoring but needs its own validation — judges have biases. Pair offline evals (regression on a fixed set) with online signals (production feedback). Evals are how Agent Output Validation scales beyond manual review, and the measurement layer under any CRO-style experimentation. Pair with Agent Output Validation and your Public Mechanics Decision Receipts (an eval result is part of the auditable record).",
    source: "LLM evaluation practice; LLM-as-judge research (Zheng et al., 'Judging LLM-as-a-Judge', 2023).",
    tags: ["ai_engineering", "ai", "evaluation", "quality"],
  },
  {
    name: "AI-Assisted Coding Tools",
    category: "ai_engineering",
    oneLiner:
      "The category of tools — Claude Code, GitHub Copilot, Cursor — that put an LLM inside the development loop, from autocomplete to full agentic task execution, changing what a software engineer's day actually is.",
    whenToUse:
      "Naming fluency with the tools this kind of role lists by name. Beyond using them, the senior skill is knowing where they help, where they hurt, and how to review their output.",
    vocabulary: [
      "Claude Code",
      "Copilot",
      "Cursor",
      "autocomplete",
      "agentic coding",
      "inline suggestion",
      "codebase context",
      "agent mode",
      "AI pair programming",
    ],
    howToDropIn:
      "\"These tools move fastest on well-specified, well-tested code and slowest on ambiguous architecture decisions — so the leverage is using them for the mechanical work and keeping human judgment on the design and the review. The bottleneck shifts from writing code to reviewing it.\"",
    commonPhrasing:
      "Developer-productivity conversations, AI-assisted delivery, engineering interviews.",
    notes:
      "The honest practitioner read: these tools genuinely accelerate well-scoped work and can actively mislead on ambiguous or novel work, where they produce plausible-but-wrong code confidently. The reviewing bottleneck (see Agent Output Validation) is the new constraint — generation got cheap, verification didn't. Roles like this name Claude, Copilot, and Cursor explicitly, so concrete experience with at least one, plus an opinion on the review discipline, is what's being screened for. Pair with Agent Output Validation and Prompt Engineering.",
    source: "Practitioner experience; vendor documentation (Anthropic Claude Code, GitHub Copilot, Cursor).",
    tags: ["ai_engineering", "ai", "tooling", "sdlc"],
  },
  {
    name: "MLOps / LLMOps",
    category: "ai_engineering",
    oneLiner:
      "The operational discipline for getting ML and LLM systems into production and keeping them healthy — deployment pipelines, versioning, monitoring, experiment tracking, model governance — DevOps adapted to systems whose behavior is learned rather than coded.",
    whenToUse:
      "Moving any model or LLM system from notebook to production, especially against the preferred practices this role lists: pipelines, monitoring, experiment tracking, model governance, containerization.",
    vocabulary: [
      "MLOps",
      "LLMOps",
      "model registry",
      "experiment tracking",
      "deployment pipeline",
      "monitoring",
      "drift",
      "retraining",
      "containerization",
      "CI/CD for models",
      "observability",
    ],
    howToDropIn:
      "\"The model is 10% of the system; MLOps is the other 90% that keeps it working after launch. Without versioning, monitoring, and a rollback path, the first time the data drifts we won't know until a client tells us.\"",
    commonPhrasing:
      "ML platform conversations, AI productionization, MLOps maturity reviews.",
    notes:
      "The foundational warning is Sculley et al.'s 'Hidden Technical Debt in Machine Learning Systems' — the ML code is a small box in a large diagram of supporting infrastructure, and skipping that infrastructure is how ML projects rot. LLMOps adds prompt/version management, eval pipelines, token-cost monitoring, and guardrails to the classic MLOps stack. Maps directly onto your existing DORA and Continuous Delivery cards — same delivery-performance logic, model-shaped. Pair with DORA Metrics, Continuous Delivery, and LLM Evaluation.",
    source: "Sculley et al., 'Hidden Technical Debt in Machine Learning Systems' (NeurIPS 2015); Google MLOps literature; LLMOps practice.",
    tags: ["ai_engineering", "ai", "mlops", "devops"],
  },
  {
    name: "Responsible AI & AI Governance",
    category: "ai_engineering",
    oneLiner:
      "The practices that keep AI systems transparent, fair, and under human control — bias assessment, transparency, oversight controls, documentation — framed so a system can be defended to a regulator, a client, or the public it affects.",
    whenToUse:
      "Any AI system with consequential, especially public-sector, impact. Transparency, bias, governance, and human oversight are often contractual in government work, not optional.",
    vocabulary: [
      "responsible AI",
      "AI governance",
      "transparency",
      "bias",
      "fairness",
      "human oversight",
      "model card",
      "NIST AI RMF",
      "explainability",
      "accountability",
      "audit",
    ],
    howToDropIn:
      "\"Responsible AI in a government context isn't a values statement, it's a deliverable: documented bias testing, a transparency record, defined human-oversight controls, and an audit trail. NIST's AI Risk Management Framework is the spine most public-sector clients will expect us to map to.\"",
    commonPhrasing:
      "Public-sector AI, AI assurance, procurement and compliance, GPS delivery.",
    notes:
      "The NIST AI RMF (Govern, Map, Measure, Manage) is the closest thing to a public-sector lingua franca; model cards (Mitchell et al.) are the documentation artifact. Your Public Mechanics canon sharpens the generic responsible-AI vocabulary: Mirror Signaling (the computed-against party should see the weights), Substrate Degradation (the aggregate harm no single deployment owns), and Decision Receipts (contestable records) are more precise than 'transparency' in the abstract. Bringing that into a GPS responsible-AI conversation is a differentiator. Pair with WCAG (the accessibility-compliance analog) and Delivery Governance for AI-Assisted Workflows.",
    source: "NIST AI Risk Management Framework 1.0 (2023); Mitchell et al., 'Model Cards for Model Reporting' (2019).",
    tags: ["ai_engineering", "ai", "governance", "public_sector"],
  },
  {
    name: "Guardrails & LLM Observability",
    category: "ai_engineering",
    oneLiner:
      "The runtime safety and visibility layer around an LLM system — input/output filtering and policy enforcement (guardrails) plus tracing, cost, and quality monitoring (observability) — so you can both prevent bad outputs and see what's happening in production.",
    whenToUse:
      "Operating an LLM system at scale, where you need to block harmful or off-policy output in real time and understand behavior, cost, and drift after deployment.",
    vocabulary: [
      "guardrails",
      "input/output filtering",
      "PII redaction",
      "jailbreak",
      "policy enforcement",
      "tracing",
      "span",
      "token cost",
      "drift",
      "feedback loop",
      "observability",
    ],
    howToDropIn:
      "\"Guardrails stop the bad output at the edge; observability tells us what the system is actually doing once it's live — traces, token cost, quality signals. Shipping an LLM feature without either is flying blind with no seatbelt.\"",
    commonPhrasing:
      "LLM productionization, AI safety engineering, platform operations.",
    notes:
      "Guardrails are the input/output checkpoints (PII redaction, jailbreak resistance, policy filters); observability is the tracing/cost/quality layer that makes production behavior legible. Both are the operational complement to evals — guardrails enforce at runtime, observability measures at runtime, evals measure offline. Token-cost monitoring matters more than teams expect; LLM unit economics can quietly sink a product. Connects to your Public Mechanics Mirror Signaling (observability is making the system legible) and Decision Receipts (traces are receipts). Pair with MLOps / LLMOps and Responsible AI & AI Governance.",
    source: "LLM observability and guardrails practice (tracing tools, safety-filter frameworks).",
    tags: ["ai_engineering", "ai", "observability", "operations"],
  },

  // —— Career services / student success ——————————————————————————————————

  {
    name: "First-Destination Outcomes (NACE)",
    category: "career_services",
    oneLiner:
      "The post-graduation outcomes data — employed, in grad school, pursuing fellowships, still seeking — measured roughly six months out, which is the field's primary lagging metric and the number boards, rankings, and parents watch.",
    whenToUse:
      "Any conversation about whether a career center is working, or about accountability to the board. This is the lagging indicator the JD's 'leading and lagging indicators' line is really pointing at.",
    vocabulary: [
      "First-Destination Survey",
      "knowledge rate",
      "career outcomes rate",
      "post-graduate outcomes",
      "six-months-out",
      "NACE standards",
      "first-destination",
    ],
    howToDropIn:
      "\"Our lagging metric is the First-Destination outcome — where students land six months out, at a defensible knowledge rate. But you can't manage a lagging metric directly; you manage the leading indicators of engagement that produce it.\"",
    commonPhrasing:
      "Career services leadership, institutional research, board and cabinet reporting.",
    notes:
      "NACE (National Association of Colleges and Employers) sets the First-Destination Survey standards; 'knowledge rate' (the share of graduates you actually have data on) is the credibility gate — a high outcomes rate on a low knowledge rate is noise. This is the lagging half of the JD's 'leading and lagging indicators'; pair it with early-engagement participation as the leading half. Your delivery-metrics instinct — don't celebrate a number you can game by moving the denominator (see the comp-sales / north-star translation) — maps exactly: knowledge rate is the denominator discipline. Pair with Career Readiness Competencies.",
    source: "NACE First-Destination Survey Standards and Protocols; standard higher-ed career-services practice.",
    tags: ["career_services", "higher_ed", "metrics", "outcomes"],
  },
  {
    name: "NACE Career Readiness Competencies",
    category: "career_services",
    oneLiner:
      "NACE's eight competencies — communication, critical thinking, teamwork, professionalism, leadership, equity & inclusion, career & self-development, technology — that reframe career services as developmental education rather than job placement.",
    whenToUse:
      "The single best tool for the JD's central tension: arguing CLBR's work is an expression of the liberal arts mission, not a concession to vocationalism. The competencies are the bridge.",
    vocabulary: [
      "career readiness",
      "the eight competencies",
      "competency-based",
      "developmental",
      "durable skills",
      "transferable skills",
    ],
    howToDropIn:
      "\"Career readiness isn't placement — NACE frames it as eight developmental competencies, most of which a liberal arts education already builds better than anyone. Our job isn't to bolt vocational training onto Reed; it's to help students name and translate what the education already gave them.\"",
    commonPhrasing:
      "Career-services strategy, faculty partnership conversations, the anti-vocationalism argument.",
    notes:
      "This is the rhetorical key to the whole role. The JD is explicitly wary of vocationalism and wants someone who can argue the work is mission-aligned; the NACE competencies are the field's own answer to exactly that anxiety. They let you tell faculty 'we develop the same capacities you do, and help students articulate them' rather than 'we get them jobs.' This is itself a translation move — naming what's already there in another register — which is your core strength. Pair with the liberal-arts-to-career translation and High-Impact Practices.",
    source: "NACE Career Readiness Competencies (National Association of Colleges and Employers).",
    tags: ["career_services", "higher_ed", "framework", "positioning"],
  },
  {
    name: "Experiential Learning (Kolb / Internships)",
    category: "career_services",
    oneLiner:
      "The learn-by-doing-plus-reflection model — internships, research, project work — where structured reflection is what converts an experience into learning; the backbone of the JD's internships and EXEL pillar.",
    whenToUse:
      "Designing or defending the internship and experiential-learning strategy, and explaining why funded internships and the reflection layer matter — not just placement counts.",
    vocabulary: [
      "experiential learning",
      "Kolb cycle",
      "reflection",
      "internship",
      "EXEL",
      "funded internship",
      "equity of access",
      "academic integration",
    ],
    howToDropIn:
      "\"An internship isn't experiential learning until there's reflection wrapped around it — that's Kolb. The design questions are the funding and the reflection structure, because that's what turns a summer job into something that compounds, and what keeps access from being means-tested by who can afford an unpaid role.\"",
    commonPhrasing:
      "Experiential learning programs, internship strategy, academic-integration conversations.",
    notes:
      "David Kolb's cycle (concrete experience → reflective observation → abstract conceptualization → active experimentation) is the theoretical spine; the equity angle (funded internships so access isn't means-tested) is both a JD requirement and a mission-alignment point. Reed's EXEL is the non-academic-credit experiential mechanism this Director administers. Your service-design instinct applies cleanly: the experience is front-stage, the funding and reflection scaffolding is the back-stage that makes it actually deliver. Pair with High-Impact Practices.",
    source: "Kolb, 'Experiential Learning: Experience as the Source of Learning and Development' (1984); NACE/CAS internship standards.",
    tags: ["career_services", "higher_ed", "experiential_learning", "framework"],
  },
  {
    name: "High-Impact Practices (Kuh / AAC&U)",
    category: "career_services",
    oneLiner:
      "George Kuh's set of educational practices — internships, undergraduate research, capstones, learning communities, service learning — empirically linked to deeper learning and better outcomes, especially for underserved students.",
    whenToUse:
      "Making the equity case and the academic-integration case at once. HIPs are the research-backed bridge between 'career readiness' and 'deeper learning,' and they disproportionately help the students the JD's equity bullet centers.",
    vocabulary: [
      "high-impact practices",
      "HIPs",
      "undergraduate research",
      "capstone",
      "service learning",
      "equity gap",
      "AAC&U",
      "LEAP",
    ],
    howToDropIn:
      "\"Internships and undergraduate research are high-impact practices in Kuh's sense — they move the needle most for first-gen and underserved students. So expanding funded access isn't equity for its own sake; it's aiming the most effective educational intervention we have at the students who benefit most.\"",
    commonPhrasing:
      "Equity-focused programming, academic-affairs partnerships, assessment conversations.",
    notes:
      "George Kuh and AAC&U (Association of American Colleges & Universities) established the HIPs framework; the equity finding — HIPs close achievement and outcome gaps — is what makes it strategically powerful in a mission-driven, equity-focused shop like this one. It also gives you common ground with faculty: HIPs live in the curriculum, so career work framed as HIPs is a partnership, not an intrusion. Pair with Experiential Learning and Career Readiness Competencies.",
    source: "Kuh, 'High-Impact Educational Practices' (AAC&U, 2008).",
    tags: ["career_services", "higher_ed", "equity", "framework"],
  },
  {
    name: "Embedded / Connected Career Model",
    category: "career_services",
    oneLiner:
      "The strategic shift from a central, opt-in career office students visit senior year to career education embedded across four years and integrated with the curriculum and faculty.",
    whenToUse:
      "Articulating CLBR's strategic vision. The JD wants 'early engagement... sustained across all four years' and career development 'embedded into academic and co-curricular programs.' This is the name for that.",
    vocabulary: [
      "connected / embedded model",
      "four-year model",
      "curriculum integration",
      "faculty partnership",
      "distributed career education",
      "just-in-time advising",
      "scaling beyond the one-on-one",
    ],
    howToDropIn:
      "\"The opt-in senior-year office reaches the students who already know to come — and misses everyone else, which is an equity problem before it's a coverage problem. The strategic move is a connected model: career education embedded across four years and into the curriculum, so engagement isn't self-selecting.\"",
    commonPhrasing:
      "Career-services strategy, the modern field's direction, cabinet-level vision-setting.",
    notes:
      "This has been the field's dominant strategic narrative for the last decade — the 'career everywhere' / connected-communities move away from the placement-office model (e.g., the work out of Stanford's career education and similar reorganizations). It directly answers the JD's early-engagement and academic-integration requirements, and it's where your systems-design and journey-management strength is a genuine asset: designing the distributed touchpoint architecture is exactly the service-blueprint problem. The equity rationale — opt-in self-selects for the already-advantaged — is the throughline. Pair with the activation / early-engagement translation.",
    source: "Contemporary career-services strategy (connected/embedded career-education models); NACE professional practice.",
    tags: ["career_services", "higher_ed", "strategy", "framework"],
  },
  {
    name: "National Fellowships Advising",
    category: "career_services",
    oneLiner:
      "The specialized institutional apparatus for advising students toward nationally competitive fellowships — Rhodes, Marshall, Fulbright, Truman, Goldwater, Watson — where institutional endorsement, mentorship, and a months-long application cycle are the work.",
    whenToUse:
      "The fellowships pillar of the JD. Worth fluency even though it's a smaller slice, because it's prestige-bearing, faculty-adjacent, and culturally resonant at an intellectually intense college.",
    vocabulary: [
      "nationally competitive fellowships",
      "Rhodes / Marshall / Fulbright / Truman / Watson / Goldwater",
      "institutional endorsement",
      "campus committee",
      "NAFA",
      "application cycle",
    ],
    howToDropIn:
      "\"Fellowships advising is low-volume, high-touch, and faculty-entangled — the institutional endorsement and the committee process matter as much as the student's essay. It's also where an intellectually intense culture is a structural advantage, and where wins are visible to faculty and trustees.\"",
    commonPhrasing:
      "Fellowships advising, prestige scholarships, faculty-mentorship conversations.",
    notes:
      "NAFA (National Association of Fellowships Advisors) is the professional body. Reed has historically punched above its weight on fellowships, so this pillar plays to institutional pride and faculty relationships — both things the JD's culture bullets prize. For a non-traditional candidate, this is the pillar to show you respect rather than overclaim; signaling that you'd hire and partner well here reads as judgment, not bluffing. Pair with the faculty-partnership angle and the authorizing_environment translation.",
    source: "NAFA (National Association of Fellowships Advisors); standard fellowships-advising practice.",
    tags: ["career_services", "higher_ed", "fellowships", "framework"],
  },

  // —— Sports / venue / live entertainment ————————————————————————————————

  {
    name: "Ticket Yield Management & Dynamic Pricing",
    category: "sports_venue",
    oneLiner:
      "Pricing live-event inventory that is perishable (a seat is worth zero after puck drop) and finite by section, using variable pricing (set ahead by opponent/date/demand tier) and dynamic pricing (adjusted continuously, airline-style), against a secondary market you don't control.",
    whenToUse:
      "The revenue-optimization outcome, ticketing line. Your retail pricing/markdown background is the transferable core — same perishability-and-elasticity problem, different inventory.",
    vocabulary: [
      "dynamic pricing",
      "variable pricing",
      "yield management",
      "price elasticity",
      "fill rate",
      "scan rate",
      "no-show",
      "secondary market",
      "season vs single-game",
      "get-in price",
    ],
    howToDropIn:
      "\"Ticket inventory is a markdown problem with a hard expiry — a seat unsold at puck drop is a total loss, like fresh produce at close. The discipline is variable pricing by demand tier up front, dynamic adjustment as the date approaches, and reading the secondary market as your real price signal.\"",
    commonPhrasing: "Revenue / ticketing strategy, yield management.",
    notes:
      "Variable pricing is set in advance on predictable demand (marquee opponent, weekend, promo night); dynamic pricing moves continuously on live demand (the hotel/airline model). The secondary market (StubHub, SeatGeek, Ticketmaster resale) is uncontrolled price discovery that exposes mispricing — a get-in price far below face means you left money on the table. Your retail markdown-optimization and elasticity work is a direct analog; lead with it as transferable and name the ticketing terms so you sound native. Pair with STM Lifecycle and the markdown_optimization translation.",
    source: "Standard sports / live-entertainment ticketing practice.",
    tags: ["sports_venue", "pricing", "revenue", "framework"],
  },
  {
    name: "Premium & Hospitality Inventory",
    category: "sports_venue",
    oneLiner:
      "The high-margin seated products — suites, club seats, loge boxes, premium memberships — sold as multi-year relationships (often to corporates) rather than transactions, with F&B and experience bundled in.",
    whenToUse:
      "The premium/hospitality business line in revenue optimization. The economics and sales motion differ sharply from general admission — long contracts, account management, and renewal risk concentrated in a few big logos.",
    vocabulary: [
      "premium",
      "suites",
      "club seats",
      "loge boxes",
      "premium memberships",
      "hospitality",
      "F&B attach",
      "multi-year contracts",
      "account management",
      "renewal",
    ],
    howToDropIn:
      "\"Premium is where the margin concentrates, and it behaves like enterprise B2B, not retail — multi-year contracts, revenue concentrated in a handful of corporate accounts, renewal risk you manage account by account. The analytics question is renewal propensity and white-glove retention, not volume.\"",
    commonPhrasing: "Premium sales, hospitality, partnerships.",
    notes:
      "Premium carries disproportionate margin and revenue concentration, so churn of one suite-holder outweighs thousands of GA buyers — the modeling is account-level retention and propensity, closer to enterprise account management than consumer funnels. Your B2B / commercial-engagement framing transfers well. Pair with Sponsorship Valuation.",
    source: "Standard venue premium / hospitality practice.",
    tags: ["sports_venue", "premium", "revenue", "framework"],
  },
  {
    name: "Sponsorship / Partnership Valuation",
    category: "sports_venue",
    oneLiner:
      "Pricing and proving the value of brand assets — signage, naming rights, digital/social inventory, on-site activation, audience data — sold to corporate partners, then measuring delivered value (impressions, earned media, activation outcomes) to drive renewal.",
    whenToUse:
      "The sponsorship line and the JD's 'evaluate campaign and partnership success' reporting. Measurement maturity is genuinely thin across the industry — an opening for your analytics rigor.",
    vocabulary: [
      "sponsorship",
      "partnership",
      "asset valuation",
      "activation",
      "media / impression value",
      "earned media",
      "naming rights",
      "sponsorship ROI",
      "fulfillment",
      "renewal",
    ],
    howToDropIn:
      "\"Sponsorship valuation is mostly art dressed as science — assets get bundled and priced on precedent. The differentiator is real fulfillment measurement: did the partner get the impressions and activation outcomes we sold, and can we prove it at renewal? That's an analytics gap I'd close.\"",
    commonPhrasing: "Corporate partnerships, sponsorship sales, partnership marketing.",
    notes:
      "Sponsorship inventory is signage + naming + digital + experiential + increasingly first-party data / audience access; valuation traditionally leans on comparable deals and estimated media value, and fulfillment reporting is often weak — exactly where a data leader adds defensible value and protects renewals. Pair with Premium & Hospitality.",
    source: "Standard sports sponsorship / partnership practice.",
    tags: ["sports_venue", "sponsorship", "revenue", "framework"],
  },
  {
    name: "Single Fan View / Fan Data Platform",
    category: "sports_venue",
    oneLiner:
      "The unified, governed fan identity that stitches ticketing, F&B, merch, parking, app, email, and digital behavior into one profile — the data-integration foundation everything else (personalization, pricing, retention) is built on.",
    whenToUse:
      "The JD's headline outcome — 'a unified, governed data ecosystem.' This is the enterprise data-platform problem you already solve, just with sports data sources.",
    vocabulary: [
      "single fan view",
      "customer data platform (CDP)",
      "identity resolution",
      "first-party data",
      "data governance",
      "golden record",
      "source of truth",
      "ticketing / F&B / merch integration",
    ],
    howToDropIn:
      "\"Everything downstream — personalization, dynamic pricing, retention — depends on one governed fan identity that unifies ticketing, concessions, merch, and digital. Most venues run these as silos. Building the single fan view is the unlock, and it's a data-platform problem I've solved before; the sources are just different.\"",
    commonPhrasing: "Data strategy, CDP, business intelligence.",
    notes:
      "The fan is fragmented across ticketing systems (Ticketmaster / AXS), F&B point-of-sale, retail, parking, app, and CRM — unifying them into a governed golden record is the precondition for the JD's personalization and revenue outcomes. This is squarely your enterprise data-integration strength; lead with it as the through-line connecting every other outcome in the JD. Pair with Fan Journey and the customer_data_platform translation.",
    source: "Standard CDP / fan-data-platform practice in sports & entertainment.",
    tags: ["sports_venue", "data", "governance", "framework"],
  },
  {
    name: "Fan Journey & Remote Fandom",
    category: "sports_venue",
    oneLiner:
      "The recognition that the in-arena guest (a building-full per night) is a small slice of the fanbase — most fans experience the team remotely via broadcast, social, and digital — so experience and monetization strategy has to serve both.",
    whenToUse:
      "The JD's 'in-venue and online... remote fandom' fan-experience outcome. The strategic insight: digital growth is mostly about the fans who never enter the building.",
    vocabulary: [
      "fan journey",
      "remote fandom",
      "in-venue experience",
      "fan engagement",
      "second-screen",
      "OTT / broadcast",
      "fan segmentation",
      "casual vs avid",
      "audience growth",
    ],
    howToDropIn:
      "\"The building holds ~17,000; the fanbase is in the millions, most of whom never come. So digital fan experience isn't just upgrading the in-venue app — it's building a relationship with remote fans through content and personalization, and that's where audience growth and new revenue actually come from.\"",
    commonPhrasing: "Fan experience, digital strategy, audience development.",
    notes:
      "The avid-but-remote fan is the growth audience; in-venue tech (mobile entry, in-seat ordering, wayfinding) matters for the live guest, but brand and audience growth come from the remote majority via content, social, and OTT. Your omnichannel and journey/personalization work maps directly. Pair with Single Fan View and the omnichannel translation.",
    source: "Standard sports digital / fan-experience strategy.",
    tags: ["sports_venue", "fan_experience", "digital", "framework"],
  },
  {
    name: "Season Ticket Member (STM) Lifecycle & Retention",
    category: "sports_venue",
    oneLiner:
      "The renewal-driven economics of season-ticket membership — the most valuable recurring ticketing revenue — where annual renewal rate, attrition, and member benefits behave like a subscription business.",
    whenToUse:
      "Retention modeling in the ticketing line. Your cohort / retention / subscription analytics translate almost one-to-one.",
    vocabulary: [
      "season-ticket member (STM)",
      "renewal rate",
      "attrition / churn",
      "member benefits",
      "scan / usage rate",
      "secondary-market behavior",
      "propensity to renew",
      "tenure",
    ],
    howToDropIn:
      "\"STM revenue is recurring subscription revenue — renewal rate is the metric that matters. You can model churn propensity from usage, secondary-market listing behavior, and tenure, then intervene. The wrinkle the industry underweights is that renewal correlates with team performance, which you don't control — so isolate the part you can.\"",
    commonPhrasing: "Ticket retention, membership, CRM.",
    notes:
      "STM behaves like subscription/SaaS retention — scan rate, reselling on the secondary market, and tenure are leading churn indicators; the confound is on-ice performance driving renewal independent of service quality, so separate what you can influence from what you can't. Your cohort and retention analytics are directly transferable. Pair with Ticket Yield Management.",
    source: "Standard sports ticketing / membership retention practice.",
    tags: ["sports_venue", "retention", "revenue", "framework"],
  },

  // —— Forward-deployed / applied AI ——————————————————————————————————————

  {
    name: "Forward-Deployed Engineering (the motion)",
    category: "forward_deployed",
    oneLiner:
      "The model where engineers embed inside the customer's environment and build production software in their systems — high autonomy, high ambiguity, customer-facing — rather than handing specs to a delivery team or writing recommendations.",
    whenToUse:
      "Understanding the role identity itself. An FDE is not a solutions architect (advises) or a support engineer (reactive) — they build, in the customer's stack, and own whether it works.",
    vocabulary: [
      "forward-deployed",
      "embed",
      "white-glove",
      "autonomy under ambiguity",
      "build in the customer's systems",
      "ship to production",
      "founding motion",
    ],
    howToDropIn:
      "\"An FDE isn't a consultant who writes recommendations or an SE who runs demos — you embed and ship production code in the customer's environment, and you own whether it works. The job is high-agency building under ambiguity, then codifying what you learn so it scales past you.\"",
    commonPhrasing: "Forward-deployed engineering, professional services, applied AI.",
    notes:
      "The model originated at Palantir and is now common at frontier-AI and data companies; the defining traits are (1) you write production code in the customer's systems, not slideware, (2) you operate autonomously inside a messy org, and (3) you feed patterns back to Product/Eng so bespoke work becomes reusable. As a 'founding FDE' the JD is also asking you to help define the motion, not just execute it. Pair with Codifying Repeatable Deployment Patterns and the consulting_engagement translation.",
    source: "Forward-deployed engineering practice (Palantir-origin; now standard at applied-AI companies).",
    tags: ["forward_deployed", "applied_ai", "role", "framework"],
  },
  {
    name: "Technical Discovery & Workflow Mapping",
    category: "forward_deployed",
    oneLiner:
      "The consultative front-end of an FDE engagement — sitting with customer teams to map their actual workflows, find the high-value, AI-amenable problem, and define what 'working' means before building anything.",
    whenToUse:
      "The JD's 'conduct discovery with customers' and 'understand customer workflows.' Discovery is what separates building the right thing from building a thing well.",
    vocabulary: [
      "discovery",
      "workflow mapping",
      "problem framing",
      "success criteria",
      "the high-value workflow",
      "build-vs-buy",
      "scoping",
    ],
    howToDropIn:
      "\"Before writing a line of Claude integration, the work is discovery — mapping the customer's real workflow, finding the one task where AI changes the economics, and agreeing on how we'll know it worked. Most failed AI deployments are well-built solutions to the wrong workflow.\"",
    commonPhrasing: "Customer discovery, solution scoping, requirements.",
    notes:
      "This is your design-research / contextual-inquiry muscle (you have those cards) pointed at enterprise AI workflows — the difference is you're hunting for the workflow where an LLM or agent meaningfully shifts cost, speed, or quality, and you're defining evals as the success contract. The output is a buildable technical scope plus an eval, not a research deck. Pair with LLM Evaluation (Evals).",
    source: "FDE / solutions-engineering discovery practice.",
    tags: ["forward_deployed", "applied_ai", "discovery", "framework"],
  },
  {
    name: "Claude Production Artifacts (MCP Servers, Sub-Agents, Agent Skills)",
    category: "forward_deployed",
    oneLiner:
      "The three concrete deliverables the JD names — MCP servers (standardized tool/data connections for models), sub-agents (specialized delegated agents within a larger system), and Agent Skills (packaged, progressively-disclosed capabilities) — that an FDE ships into customer production workflows.",
    whenToUse:
      "Knowing the actual artifacts you'd build, and being able to say when each is the right tool. These are named explicitly in the responsibilities.",
    vocabulary: [
      "MCP (Model Context Protocol)",
      "MCP server",
      "tools",
      "sub-agent",
      "orchestration",
      "Agent Skills",
      "SKILL.md",
      "progressive disclosure",
    ],
    howToDropIn:
      "\"The deliverables are concrete: an MCP server when the model needs governed access to a customer's tools and data; a sub-agent when a specialized task should be delegated with its own context; an Agent Skill when you want to package a repeatable capability the agent loads on demand. The craft is choosing the smallest artifact that solves the workflow.\"",
    commonPhrasing: "Agent development, Claude integration, MCP.",
    notes:
      "MCP (Model Context Protocol) is Anthropic's open standard for connecting models to tools and data via servers; sub-agents are specialized agents an orchestrator invokes to keep context focused; Agent Skills package instructions and scripts a model loads progressively (the SKILL.md model — this very trainingday repo is built and run with Claude Code, which uses skills, so you have hands-on proof). Mapping a customer workflow to the right artifact — and not over-engineering — is the core craft. Pair with Agent Orchestration Patterns and Context Engineering (both already in your deck).",
    source: "Anthropic MCP, sub-agents, and Agent Skills documentation; Claude Code practice.",
    tags: ["forward_deployed", "applied_ai", "agents", "framework"],
  },
  {
    name: "Codifying Repeatable Deployment Patterns",
    category: "forward_deployed",
    oneLiner:
      "The discipline that separates an FDE from a one-off consultant — turning bespoke customer builds into reusable patterns, templates, and product feedback so the next deployment is faster and Product/Eng can productize the field learning.",
    whenToUse:
      "The JD's 'identify and codify repeatable deployment patterns and contribute insights back to Product and Engineering.' This is how the FDE motion scales and how you earn influence on the roadmap.",
    vocabulary: [
      "repeatable patterns",
      "reference architecture",
      "templates",
      "productize",
      "field feedback loop",
      "deployment playbook",
      "scale beyond bespoke",
    ],
    howToDropIn:
      "\"The trap in forward-deployed work is becoming a bespoke services shop that doesn't scale. The discipline is to build the customer solution and extract the reusable pattern — a template, a reference architecture, a product gap to file — so the tenth deployment is ten times faster and the field is feeding the roadmap.\"",
    commonPhrasing: "Solutions patterns, professional-services productization, product feedback.",
    notes:
      "This is the strategic core of a healthy FDE org: every engagement should leave behind a reusable artifact and a signal to Product/Eng, or the motion stays linear-cost. For a founding FDE it's doubly weighted — you're defining the playbook. Your platform / systems-thinking background (turning one-offs into platforms) is a direct asset. Pair with Forward-Deployed Engineering and the reusable_assets translation.",
    source: "FDE / professional-services scaling practice.",
    tags: ["forward_deployed", "applied_ai", "strategy", "framework"],
  },
  {
    name: "White-Glove Enterprise AI Deployment",
    category: "forward_deployed",
    oneLiner:
      "Getting an AI application from working-on-my-laptop to running safely in a regulated enterprise — the security reviews, IT/identity integration, data governance, change management, and reliability bar that enterprise production demands.",
    whenToUse:
      "The JD's 'white glove deployment support in enterprise environments' and 'enterprise IT systems / deployment patterns.' The hard part of enterprise AI is rarely the model; it's everything around it.",
    vocabulary: [
      "enterprise deployment",
      "security review",
      "SSO / identity",
      "data governance",
      "VPC / private deployment",
      "change management",
      "reliability / SLA",
      "procurement",
    ],
    howToDropIn:
      "\"In an enterprise, the model is the easy 20%. The white-glove work is the security review, the identity and data-governance integration, the reliability bar, and the change management to get humans to actually adopt it. Shipping into a regulated environment is a different sport than a demo.\"",
    commonPhrasing: "Enterprise deployment, IT/security, adoption.",
    notes:
      "Enterprise verticals (financial services, healthcare/life sciences — both called out as a plus) add compliance, data-residency, and audit constraints; the FDE navigates the customer's IT, security, and procurement as much as their code. Your enterprise background (large-org delivery, matrixed influence — you have the Matrixed Organization card) and change-management instincts transfer here. Pair with Responsible AI & AI Governance and Guardrails & LLM Observability (both already in your deck).",
    source: "Enterprise AI deployment practice; Anthropic enterprise patterns.",
    tags: ["forward_deployed", "applied_ai", "enterprise", "framework"],
  },

  // —— Journey management (CX discipline + its limits) —————————————————————

  {
    name: "Journey Management (CX Discipline)",
    category: "service_design",
    oneLiner:
      "The emerging CX discipline — pushed by Forrester since ~2022 and a small software category (TheyDo, Smaply, Milkymap) — that treats customer journeys as a continuously-managed unit of operational accountability with named owners, metrics, and governance, rather than as map artifacts a designer produces and hands off.",
    whenToUse:
      "When an enterprise has a graveyard of journey maps and nothing has improved because no one owns the journey end-to-end. Also a procurement vocabulary: it lets you get structural cross-functional work budgeted under a label CX and service-ops buyers already understand.",
    vocabulary: [
      "journey management",
      "journey-centric operating model",
      "journey owner",
      "journey KPI / scorecard",
      "journey governance",
      "journey orchestration",
      "journey-as-a-product",
      "continuous improvement",
      "activate / connect / extend",
    ],
    howToDropIn:
      "\"Journey maps have been a graveyard for insight for fifteen years — produced, presented, posted on a wall, then the org goes back to optimizing the funnel one screen at a time. Journey management names the real gap: who's accountable for the journey across teams, with metrics and governance, between the maps.\"",
    commonPhrasing: "CX strategy, service operations, experience management.",
    notes:
      "Forrester's framing: journey maps as artifacts are dead; journeys as a unit of operational accountability are the future (their model moves six operational levers across three phases — activate, connect, extend — and they now run a journey-management certification; the Q2 2024 Forrester Wave covers journey-orchestration platforms). The diagnosis is correct and adjacent to the substrate question — who owns what's between the recorded steps. WHERE IT FALLS SHORT: journey management is CX-flavored — it assumes a customer, a product, a funnel, a commercial relationship — so it doesn't carry into public services, multilateral delivery, or the agentic layer, where the unit of analysis is wrong. A citizen navigating three agencies, two vendors, and a benefits-determination engine over four years isn't on a 'journey' in the CX sense; they're navigating a substrate, and calling it a journey makes the substrate vanish into a narrative of the user's experience — the move that lets institutions off the hook for the seams between them. Verdict: a useful conceptual move within CX, a category error applied to public infrastructure. Worth fluency; worth keeping distinct from Trajectory Management. Pair with NN/g Journey Management (the owners/KPIs/governance mechanics), Service Blueprint (below the line of visibility), and contrast with Trajectory Management and Substrate Degradation for the public-systems case. The substrate_navigation translation captures the ride-it-vs-stay-clean trade-off.",
    source: "Forrester journey-centricity / journey management research (~2022– ); TheyDo, Smaply, Milkymap; Journey Management Institute. Critique and trajectory/substrate distinction are owner's synthesis.",
    tags: ["service_design", "cx", "journey", "owner_framework"],
  },

  // ════════════════════════════════════════════════════════════════════════
  // OWNER STACK — Public Mechanics / Trust & Decision Engineering
  // The frameworks are a stack, not a list. See "The Public Mechanics Stack"
  // card for how the layers and audiences fit together.
  // ════════════════════════════════════════════════════════════════════════

  // —— Foundational / field layer ————————————————————————————————————————

  {
    name: "The Public Mechanics Stack (How the Frameworks Fit)",
    category: "public_mechanics",
    oneLiner:
      "The frameworks are a stack, not a list: Civil Economics (accounting) → TDE (practice) → Public Mechanics (field), with Agent Plumbing as TDE's product-org translation shipping the protocol primitives, and LDM/RTR as the substrate obligations beneath the diagnostics.",
    whenToUse:
      "When orienting to the whole body of work, or picking the right framework for the room rather than dumping the stack.",
    vocabulary: [
      "stack vs list",
      "accounting layer",
      "practice layer",
      "field layer",
      "protocol primitives",
      "substrate obligations",
    ],
    notes:
      "Layers, bottom to top: Civil Economics (the accounting layer) → Trust & Decision Engineering (the practice layer) → Public Mechanics (the field layer). Agent Plumbing is the product-org translation of TDE; Judgment Routing, Authority Tokens, and Decision Receipts are the protocol primitives Agent Plumbing ships. Last Documented Mile and Responsibility to Record are the substrate-level obligations that make Delivery Forensics and Decision Receipts possible. AUDIENCES — surface the right framework for the right room: TDE → Trust & Safety leaders and AI governance; Agent Plumbing → product CTOs and infrastructure companies; Public Mechanics → academics, foundations, multilateral institutions; Civil Economics → economists, policy people, the SSRN audience. Don't dump the whole stack — lead with the layer the room buys.",
    source: "Owner's synthesis.",
    tags: ["public_mechanics", "meta", "owner_framework"],
  },
  {
    name: "Public Mechanics",
    category: "public_mechanics",
    oneLiner:
      "The field being founded: the study of how public services actually function at the substrate level, with the latency between policy intent and lived consequence as the unit of analysis.",
    whenToUse:
      "Positioning the whole body of work as a field — distinct from public administration (which studies institutions) and civic tech (which treats delivery as the unit).",
    vocabulary: [
      "substrate",
      "latency",
      "policy intent",
      "lived consequence",
      "delivery substrate",
    ],
    notes:
      "Field layer of the stack, above TDE and Civil Economics. Its differentiator is the unit of analysis: the latency between policy intent and lived consequence, not the institution (public administration) and not the delivery artifact (civic tech). Audience: academics, foundations, multilateral institutions. Pairs with Civil Economics (the accounting layer beneath) and Consequence Design (the originating umbrella). Nearest canonical neighbors: Lipsky's Street-Level Bureaucracy and Pressman & Wildavsky's Implementation — differs by taking the latency between policy intent and lived consequence as the unit of analysis, not the bureaucrat or the implementation chain.",
    source:
      "Owner's framework / founding field. Taught as UT-360 and UT-402 at the University of Michigan (Taubman).",
    tags: [
      "public_mechanics",
      "field",
      "owner_framework",
      "audience:academic",
      "audience:foundations",
      "audience:multilateral",
    ],
  },
  {
    name: "Consequence Design",
    category: "public_mechanics",
    oneLiner:
      "The 2017 framework predating the rest of the lexicon: designing for the consequences that materialize past the design boundary — the umbrella under which the other frameworks operate.",
    whenToUse:
      "Naming the originating commitment behind the whole stack: that what matters is what happens after the design boundary, not at it.",
    vocabulary: [
      "design boundary",
      "downstream consequence",
      "materialization",
      "second-order effects",
    ],
    notes:
      "The originating umbrella (2017); everything else in the stack is a specialization of it. Pairs with Civil Economics (consequences made accountable) and Design as Repair (the practice stance). Nearest canonical neighbors: Value-Sensitive Design (Friedman), doteveryone's Consequence Scanning, and Tony Fry's defuturing / redirective practice — differs by centering what materializes past the design boundary, and predating (2017) the rest of the lexicon as its umbrella.",
    source: "Owner's framework (2017).",
    tags: ["public_mechanics", "umbrella", "owner_framework"],
  },
  {
    name: "Civil Economics",
    category: "public_mechanics",
    oneLiner:
      "The accounting layer underneath the stack: total value from an activity equals private capture plus externalized costs plus residual public obligation — Va = Vp + Ve + Vr — forcing the question of where a transaction actually ends and who controls that boundary.",
    whenToUse:
      "When you need to make visible the costs an activity pushes past its own boundary in time — the Vr that arrives after the actors who captured Vp are gone.",
    vocabulary: [
      "Va = Vp + Ve + Vr",
      "Va(t) = Vp(t₀) + Ve(t₁…tₙ) + Vr(tₙ₊₁…)",
      "private capture (Vp)",
      "externalized cost (Ve)",
      "residual public obligation (Vr)",
      "transaction boundary",
    ],
    howToDropIn:
      "\"Vp lands immediately, Ve disperses over time, and Vr arrives late — usually after whoever captured Vp has exited. The question Civil Economics forces is: where does the transaction actually end, and who controls that boundary?\"",
    commonPhrasing: "Economics, policy analysis, SSRN.",
    notes:
      "Bottom of the stack — the accounting layer everything else sits on. Vp lands immediately; Ve disperses over time (t₁…tₙ); Vr arrives late (tₙ₊₁…), often after the Vp-capturing actors are gone. Audience: economists, policy people, the SSRN audience — lead with the equation. Pairs with Substrate Degradation (what unaccounted Ve/Vr erodes), Legitimacy Tax (a named Ve), and the Ambiguity Economy Loop (where externalities land). Nearest canonical neighbors: Pigou/Coase externalities and social cost, and full-cost / intergenerational accounting — differs by formalizing the temporal split (Vp now, Ve dispersing, Vr arriving after the actors exit) and making the transaction boundary itself the contested object. NB: 'Civil Economy' is already a named tradition (Genovesi; revived by Bruni & Zamagni), so distinguish your term from it explicitly.",
    source: "Owner's framework (Consequence Design lexicon).",
    tags: [
      "public_mechanics",
      "civil_economics",
      "owner_framework",
      "audience:economist",
      "audience:policy",
      "audience:ssrn",
    ],
  },

  // —— Substrate obligations (the two missing from the repo) ——————————————

  {
    name: "Last Documented Mile (LDM)",
    category: "public_mechanics",
    oneLiner:
      "The gap between the last reliable record and what actually happened to a person in a system — the documentation analogue of the supply chain's last mile, for provenance and decision rationale.",
    whenToUse:
      "When a consequence landed but the chain of record went quiet before it: eligibility determined but rationale uncaptured, a benefit denied but input weights untraceable, a case closed but no one can reconstruct why.",
    vocabulary: [
      "last documented mile",
      "documentation chain",
      "decision provenance",
      "record silence",
      "reconstructability",
    ],
    howToDropIn:
      "\"The diagnostic question is simple: where does the documentation chain go silent before the consequence does? That stretch is the last documented mile, and it's where accountability evaporates.\"",
    commonPhrasing: "Program forensics, oversight, auditability.",
    notes:
      "A substrate-level obligation in the stack: LDM names the specific stretch where Responsibility to Record most often fails. Forensics begins at the LDM. Pairs with Delivery Forensics (forensics begins here), Responsibility to Record (the obligation that fails along it), and Trajectory Management. Nearest canonical neighbors: chain of custody (forensic/legal), data provenance and lineage, and the logistics 'last mile' — differs by naming the specific stretch between the last reliable record and the consequence, where provenance goes silent.",
    source: "Owner's framework. Analogue: supply-chain last mile.",
    tags: ["public_mechanics", "forensics", "substrate", "owner_framework"],
  },
  {
    name: "Responsibility to Record (RTR)",
    category: "public_mechanics",
    oneLiner:
      "The structural obligation — not the permission — to document a decision, observation, or handoff in a chain of action; modeled on mandatory reporting and framed as 'who must,' not 'who gets to.'",
    whenToUse:
      "When chains break because no one is on the hook for recording, not because no one had permission. The corresponding obligation framework when journey ownership can't be constructed across institutional seams.",
    vocabulary: [
      "responsibility to record",
      "mandatory reporting",
      "who must vs who gets to",
      "obligation assignment",
      "discharge",
    ],
    howToDropIn:
      "\"Reframe it from 'who gets to record' to 'who must.' Chains break because the obligation to record was never assigned, was assumed but not assigned, terminated before the consequence, or was assigned to someone without the capacity to discharge it.\"",
    commonPhrasing: "Accountability design, governance, oversight.",
    notes:
      "A substrate-level obligation in the stack, and the obligation framework that takes over when journey ownership can't be constructed across institutional seams (contrast with Journey Management). Diagnostic questions: where is RTR assigned, assumed-but-not-assigned, terminating before consequence, or assigned to someone without capacity to discharge it. Pairs with Decision Receipts (the receipt is the discharge of the obligation) and Last Documented Mile (where RTR most often fails). Nearest canonical neighbors: Dennis Thompson's 'problem of many hands,' mandatory-reporting law, and archival recordkeeping (the Records Continuum) — differs by framing recording as an assignable structural obligation ('who must') that can terminate before the consequence or land on someone without capacity to discharge it.",
    source: "Owner's framework. Modeled on mandatory reporting.",
    tags: ["public_mechanics", "accountability", "substrate", "owner_framework"],
  },

  // —— Trust & Decision Engineering: practice + protocol primitives ————————

  {
    name: "Trust & Decision Engineering (TDE)",
    category: "trust_decision_engineering",
    oneLiner:
      "The practice of designing how decisions are authorized, escalated, and audited in institutions where automation is distributing control — the structural layer underneath Trust & Safety.",
    whenToUse:
      "When governance has to scale beyond incident moderation — building the decision infrastructure underneath rather than handling incidents after they happen.",
    vocabulary: [
      "decision authorization",
      "escalation",
      "audit",
      "distributed control",
      "decision infrastructure",
    ],
    howToDropIn:
      "\"Trust & Safety handles incidents after they happen. TDE builds the decision infrastructure underneath — how authority is granted, escalated, and audited — so governance scales beyond moderation.\"",
    commonPhrasing: "Trust & Safety, AI governance, platform integrity.",
    notes:
      "Practice layer of the stack: above Civil Economics, below Public Mechanics; the discipline-level container for the protocol primitives (Judgment Routing, Authority Tokens, Decision Receipts). Agent Plumbing is its product-org translation. Audience: Trust & Safety leaders and AI governance. Pairs with Substrate Stewardship (its discipline-level goal) and Substrate Degradation (the failure mode it exists to prevent). Nearest canonical neighbors: organizational 'decision rights' (e.g., Bain's RAPID), Rahwan's 'society-in-the-loop,' and administrative-law due process — differs by being the structural infrastructure layer beneath Trust & Safety, not incident response or a single org's decision-rights map.",
    source: "Owner's framework.",
    tags: [
      "trust_decision_engineering",
      "governance",
      "owner_framework",
      "audience:trust_safety",
      "audience:ai_governance",
    ],
  },
  {
    name: "Judgment Routing",
    category: "trust_decision_engineering",
    oneLiner:
      "The protocol-level abstraction for delegated decision authority — the agent-to-router handshake carrying authority context, scope, and reasoning payload.",
    whenToUse:
      "When the thing being delegated is agency itself, not permissions or workflows — sitting between policy engines (binary rules) and agent orchestrators (task routing).",
    vocabulary: [
      "judgment routing",
      "agent-to-router handshake",
      "authority context",
      "scope",
      "reasoning payload",
    ],
    notes:
      "A protocol primitive in the Agent Plumbing layer; manages agency itself rather than permissions (policy engines) or tasks (orchestrators). Operates on Authority Tokens and produces Decision Receipts. TDE is the methodology; Agent Plumbing is the team that ships it. Audience: product CTOs, infrastructure. Has a translation (judgment_routing). Pairs with Authority Tokens (the unit it operates on) and Decision Receipts (the artifact it produces). Nearest canonical neighbors: RBAC/ABAC and policy engines (e.g., OPA) and workflow/escalation engines — differs by routing judgment itself (authority context + reasoning payload) rather than permissions or tasks.",
    source: "Owner's framework.",
    tags: [
      "trust_decision_engineering",
      "agentic_delivery",
      "protocol_primitive",
      "owner_framework",
      "audience:product_cto",
      "audience:infrastructure",
    ],
  },
  {
    name: "Authority Tokens",
    category: "trust_decision_engineering",
    oneLiner:
      "The atomic unit Judgment Routing operates on — carrying intent state across decision boundaries: not credentials or permissions but computable context about why an agent is operating and under what constraints.",
    whenToUse:
      "When you need IAM-for-decisions rather than IAM-for-access — moving the 'why' and 'under what constraint' across a boundary, not just the 'who may.'",
    vocabulary: [
      "authority token",
      "intent state",
      "decision boundary",
      "computable context",
      "constraint",
      "IAM for decisions",
    ],
    notes:
      "The atomic unit in the Agent Plumbing layer; Judgment Routing operates on it and Decision Receipts record what was done with it. Distinguish from credentials/permissions (access) — this carries intent and constraint (decisions). Audience: product CTOs, infrastructure. Has a translation (authority_tokens). Pairs with Judgment Routing and Decision Receipts. Nearest canonical neighbor: the object-capability model in security (capabilities convey authority, not identity — Dennis & Van Horn; Mark Miller) and claims-based tokens (OAuth/JWT) — differs by carrying intent and constraint (why, under what limits), i.e. 'IAM for decisions.'",
    source: "Owner's framework.",
    tags: [
      "trust_decision_engineering",
      "agentic_delivery",
      "protocol_primitive",
      "owner_framework",
      "audience:product_cto",
      "audience:infrastructure",
    ],
  },
  {
    name: "Decision Receipts",
    category: "trust_decision_engineering",
    oneLiner:
      "The artifact an agent produces when it exercises authority — recording the context, the constraint, and the tradeoff evaluated, making delegation legible after the fact.",
    whenToUse:
      "When delegated authority needs to be reconstructable — the receipt is how an exercised judgment becomes auditable and contestable.",
    vocabulary: [
      "decision receipt",
      "context",
      "constraint",
      "tradeoff",
      "after-the-fact legibility",
      "discharge",
    ],
    notes:
      "The output artifact in the Agent Plumbing layer; pairs with Responsibility to Record — the receipt is the discharge of the obligation. Produced by Judgment Routing acting on Authority Tokens; feeds the Accountability Path. Audience: product CTOs, AI governance. Has a translation (decision_receipts). Pairs with RTR, Judgment Routing, Authority Tokens, Accountability Path. Nearest canonical neighbors: audit logs and provenance records, the Kantara consent-receipt spec, and XAI / 'right to explanation' (GDPR Art. 22) — differs by recording the context, constraint, and tradeoff an agent evaluated, as the discharge of a Responsibility to Record.",
    source: "Owner's framework.",
    tags: [
      "trust_decision_engineering",
      "agentic_delivery",
      "protocol_primitive",
      "owner_framework",
      "audience:product_cto",
      "audience:ai_governance",
    ],
  },
  {
    name: "Agent Plumbing (Agentic Plumbing)",
    category: "trust_decision_engineering",
    oneLiner:
      "The not-yet-built infrastructure layer where Judgment Routing, Authority Tokens, and Decision Receipts live as shipping primitives — a horizontal capability function inside product organizations.",
    whenToUse:
      "When positioning the work as buildable infrastructure for product CTOs and infrastructure companies, not just methodology.",
    vocabulary: [
      "agent plumbing",
      "agentic plumbing",
      "horizontal capability function",
      "shipping primitives",
      "platform team",
    ],
    notes:
      "The product-org translation of TDE: same org pattern as design-systems, developer-experience, and ML-platform teams — the team builds the primitives, TDE is the methodology the team executes. Houses Judgment Routing, Authority Tokens, and Decision Receipts. Audience: product CTOs, infrastructure companies. Has a translation (agent_plumbing). Pairs with TDE (the methodology) and the three primitives. Nearest canonical neighbor: platform engineering / internal developer platforms and Team Topologies' platform team (Skelton & Pais; see your Team Topologies card) — differs by shipping judgment/authority primitives rather than build/deploy paved roads.",
    source: "Owner's framework.",
    tags: [
      "trust_decision_engineering",
      "agentic_delivery",
      "infrastructure",
      "owner_framework",
      "audience:product_cto",
      "audience:infrastructure",
    ],
  },
  {
    name: "Accountability Path",
    category: "trust_decision_engineering",
    oneLiner:
      "The contestability mechanism built into automated decisions: high-impact thresholds automatically route to human-led, contestable review.",
    whenToUse:
      "When an automated decision crosses an impact threshold and must remain challengeable by the person it affects.",
    vocabulary: [
      "accountability path",
      "contestability",
      "human-led review",
      "impact threshold",
      "routing",
    ],
    notes:
      "An affirmative TDE primitive — the contestability counterpart to Judgment Routing's authority handling. Pairs with Judgment Routing and Decision Receipts (the receipt feeds the contest). Nearest canonical neighbors: GDPR Art. 22 (right to human review), administrative appeal / due process, and 'Contestable AI by Design' (Alfrink et al.) — differs by being a threshold-triggered automatic route into review, not an appeal the affected party must initiate.",
    source: "Owner's framework.",
    tags: [
      "trust_decision_engineering",
      "affirmative_practice",
      "owner_framework",
      "audience:ai_governance",
    ],
  },

  // —— Civic-economics lexicon: conditions / failure modes ————————————————

  {
    name: "Substrate Degradation",
    category: "public_mechanics",
    oneLiner:
      "The slow erosion of the trust and capacity layer that markets and institutions sit on — when extraction outpaces regeneration, the substrate thins. Burning the floor to heat the room.",
    whenToUse:
      "When the harm is systemic and ownerless — no single action is at fault but the shared substrate (trust, signal quality, collective sensemaking) is corroding.",
    vocabulary: [
      "substrate",
      "extraction vs regeneration",
      "thinning",
      "ownerless aggregate",
      "burning the floor to heat the room",
    ],
    notes:
      "The failure mode TDE exists to prevent; opposed by Substrate Stewardship; ends in Trust Bankruptcy. Has a translation (substrate_degradation → model collapse / negative externalities). Audience: policy, AI governance, foundations. Pairs with Trust Bankruptcy, Civil Economics (the unaccounted Ve/Vr), and Substrate Stewardship. Nearest canonical neighbors: Hardin's tragedy of the commons, Putnam's social-capital erosion, and ecological depletion — differs by locating the harm in an ownerless aggregate where extraction outpaces regeneration, which per-system risk frameworks can't see.",
    source: "Owner's framework.",
    tags: [
      "public_mechanics",
      "failure_mode",
      "owner_framework",
      "audience:policy",
      "audience:ai_governance",
    ],
  },
  {
    name: "Trust Bankruptcy",
    category: "public_mechanics",
    oneLiner:
      "The condition where trust has been extracted faster than it can regenerate — the system still operates but can no longer absorb shocks or sustain new commitments.",
    whenToUse:
      "Naming the terminal state of substrate degradation in a specific institution or market.",
    vocabulary: [
      "trust bankruptcy",
      "shock absorption",
      "commitment capacity",
      "regeneration deficit",
    ],
    notes:
      "The end-state of Substrate Degradation. Pairs with Substrate Degradation and Legitimacy Tax. Nearest canonical neighbors: Fukuyama's low-trust society, Habermas's Legitimation Crisis, and insolvency / bank-run metaphors — differs by naming a still-operating system that can no longer absorb shocks or sustain new commitments.",
    source: "Owner's framework.",
    tags: ["public_mechanics", "failure_mode", "condition", "owner_framework"],
  },
  {
    name: "Calculative Asymmetry",
    category: "public_mechanics",
    oneLiner:
      "The condition where one party in a transaction can compute the full cost-benefit landscape and the other cannot — platform algorithms vs gig workers, vendor lifecycle models vs public procurement.",
    whenToUse:
      "When the unfairness is informational and computational, not just bargaining power — one side sees the whole board.",
    vocabulary: [
      "calculative asymmetry",
      "cost-benefit landscape",
      "computational asymmetry",
      "one-sided computation",
    ],
    howToDropIn:
      "\"It's not that one side has more power — it's that one side can compute the full cost-benefit landscape and the other can't. Bumble's biometric verification versus the user submitting the template.\"",
    notes:
      "The condition Mirror Signaling countermands. Examples: platform algorithms vs gig workers; vendor lifecycle models vs public procurement. Pairs with Mirror Signaling (the countermove). Nearest canonical neighbors: Akerlof/Spence/Stiglitz information asymmetry and Zuboff's 'asymmetries of knowledge and power' — differs by being about computational capacity to model the whole cost-benefit landscape, not merely hidden information; both sides may see the same facts.",
    source: "Owner's framework.",
    tags: ["public_mechanics", "condition", "owner_framework", "audience:policy"],
  },
  {
    name: "Mirror Signaling",
    category: "public_mechanics",
    oneLiner:
      "The design primitive that countermands Calculative Asymmetry: making visible to one party the calculations being made against them.",
    whenToUse:
      "When you want to restore symmetry by surfacing the decision weights or total cost to the party they're applied to.",
    vocabulary: [
      "mirror signaling",
      "decision weights surfaced",
      "total cost of ownership",
      "user-facing computation",
    ],
    notes:
      "Affirmative primitive against Calculative Asymmetry. Has a translation (mirror_signaling). Examples: transit dashboards showing total cost of ownership; user-facing surfaces showing the decision weights applied to a case. Pairs with Calculative Asymmetry and Decision Receipts. Nearest canonical neighbors: disclosure mandates and algorithmic transparency, and Spence-style signaling (which runs from the informed party — mirror signaling runs the other way) — differs by surfacing to the disadvantaged party the calculations being run against them.",
    source: "Owner's framework.",
    tags: ["public_mechanics", "affirmative_practice", "owner_framework"],
  },
  {
    name: "Domain Firewalls",
    category: "public_mechanics",
    oneLiner:
      "The design primitive that prevents financial instruments from weighting the outcome of non-financial processes — air gaps between civic and market logic.",
    whenToUse:
      "When market logic threatens to determine a civic outcome — election prediction markets vs election integrity, insurance markets vs medical decision-making.",
    vocabulary: [
      "domain firewall",
      "air gap",
      "civic vs market logic",
      "non-financial process integrity",
    ],
    notes:
      "Affirmative primitive protecting against Signal Pollution. Pairs with Signal Pollution (the condition it protects against) and Spatial Derivatives (the instruments it firewalls). Nearest canonical neighbors: Walzer's 'blocked exchanges' (Spheres of Justice), Sandel's moral limits of markets, and Radin's contested commodities — differs by being a design primitive (an air gap), not a normative argument about what money shouldn't buy.",
    source: "Owner's framework.",
    tags: [
      "public_mechanics",
      "affirmative_practice",
      "owner_framework",
      "audience:policy",
    ],
  },
  {
    name: "Signal Pollution",
    category: "public_mechanics",
    oneLiner:
      "The destruction of the public's ability to engage in collective sensemaking — the atmospheric condition Domain Firewalls protect against.",
    whenToUse:
      "Naming the systemic erosion of shared sensemaking capacity.",
    vocabulary: [
      "signal pollution",
      "collective sensemaking",
      "atmospheric condition",
    ],
    notes:
      "The condition Domain Firewalls protect against; a form of Substrate Degradation in the sensemaking layer. Pairs with Domain Firewalls and Substrate Degradation. Nearest canonical neighbors: Wardle & Derakhshan's 'information disorder,' Simon's attention scarcity, and Habermas's public-sphere degradation — differs by naming the destruction of collective-sensemaking capacity as an atmospheric condition, not a property of any single false message.",
    source: "Owner's framework.",
    tags: ["public_mechanics", "failure_mode", "owner_framework"],
  },
  {
    name: "Legitimacy Tax",
    category: "public_mechanics",
    oneLiner:
      "The trust drain caused by parasitic intermediation — the substrate cost of running activity through actors who extract without contributing.",
    whenToUse:
      "Naming the diffuse cost imposed when value flows through extractive middlemen.",
    vocabulary: [
      "legitimacy tax",
      "trust drain",
      "parasitic intermediation",
      "substrate cost",
    ],
    notes:
      "A named Ve in Civil Economics terms; caused by Parasitic Intermediation; contributes to Substrate Degradation. Pairs with Parasitic Intermediation and Civil Economics. Nearest canonical neighbors: Coase/Williamson transaction costs, rent-seeking deadweight loss, and Suchman's organizational legitimacy — differs by naming a trust drain (a substrate cost), not a monetary fee, levied by parasitic intermediation.",
    source: "Owner's framework.",
    tags: [
      "public_mechanics",
      "failure_mode",
      "owner_framework",
      "audience:economist",
    ],
  },

  // —— Extraction mechanisms ——————————————————————————————————————————————

  {
    name: "Parasitic Intermediation",
    category: "public_mechanics",
    oneLiner:
      "Actors inserting extraction layers into transaction flows without contributing to value creation — ticket scalping, payment fees on donations, vendor middlemen in public procurement.",
    whenToUse:
      "Naming a specific extractive intermediary in a value flow.",
    vocabulary: [
      "parasitic intermediation",
      "extraction layer",
      "rent",
      "middleman",
    ],
    notes:
      "The mechanism that imposes the Legitimacy Tax. Pairs with Legitimacy Tax and the Ambiguity Economy Loop. Nearest canonical neighbors: Tullock/Krueger rent-seeking and Mazzucato's value-extraction-vs-creation (The Value of Everything) — differs by specifying the mechanism: an intermediary inserting itself into a flow without contributing to value creation.",
    source: "Owner's framework.",
    tags: [
      "public_mechanics",
      "extraction",
      "owner_framework",
      "audience:policy",
      "audience:economist",
    ],
  },
  {
    name: "Spatial Derivatives",
    category: "public_mechanics",
    oneLiner:
      "Financial instruments attached to non-financial domains — election betting markets, policy futures, real estate financialization untethered from housing as shelter.",
    whenToUse:
      "Naming the financialization of a domain whose logic should not be financial.",
    vocabulary: [
      "spatial derivatives",
      "financialization",
      "non-financial domain",
      "derivative instrument",
    ],
    notes:
      "The instruments Domain Firewalls exist to air-gap. Pairs with Domain Firewalls and Signal Pollution. Nearest canonical neighbors: Polanyi's 'fictitious commodities' (The Great Transformation) and the financialization literature (Krippner) — differs by naming financial instruments attached to specifically non-financial civic domains (elections, policy, shelter).",
    source: "Owner's framework.",
    tags: [
      "public_mechanics",
      "extraction",
      "owner_framework",
      "audience:economist",
      "audience:policy",
    ],
  },
  {
    name: "Ambiguity Economy Loop",
    category: "public_mechanics",
    oneLiner:
      "The five-step pattern explaining how extraction scales: a regulated civic domain → a reframe detaches activity from the category ('not a hotel,' 'not a taxi') → intermediaries operationalize the gap → capital accelerates coordination faster than oversight → externalities land on public institutions.",
    whenToUse:
      "Explaining why a given extraction scaled — it works only because authority, accountability, and legitimacy stay ambiguous long enough.",
    vocabulary: [
      "ambiguity economy loop",
      "category reframe",
      "regulatory gap",
      "oversight lag",
      "externality landing",
    ],
    howToDropIn:
      "\"The loop is five steps, and it only works because authority, accountability, and legitimacy stay ambiguous long enough for extraction to scale: regulated domain, reframe out of the category, intermediaries operationalize the gap, capital outruns oversight, externalities land on the public.\"",
    notes:
      "The master pattern tying the extraction mechanisms together. Pairs with Parasitic Intermediation, Spatial Derivatives, and Civil Economics (where the externalities land as Ve/Vr). Nearest canonical neighbor: Pollman & Barry's 'Regulatory Entrepreneurship' (the deliberate 'not a taxi / not a hotel' play) and regulatory-arbitrage / permissionless-innovation discourse — differs by specifying the five-step loop and locating its engine in sustained ambiguity of authority, accountability, and legitimacy.",
    source: "Owner's framework.",
    tags: [
      "public_mechanics",
      "extraction",
      "pattern",
      "owner_framework",
      "audience:policy",
      "audience:academic",
    ],
  },

  // —— Affirmative practices ——————————————————————————————————————————————

  {
    name: "Substrate Stewardship",
    category: "public_mechanics",
    oneLiner:
      "The affirmative practice opposing Substrate Degradation: legitimacy regeneration matching automation velocity — the discipline-level goal of TDE.",
    whenToUse:
      "Stating the positive goal — regenerating the trust/capacity layer as fast as automation consumes it.",
    vocabulary: [
      "substrate stewardship",
      "legitimacy regeneration",
      "regeneration velocity",
    ],
    notes:
      "The discipline-level goal of TDE; opposes Substrate Degradation. Pairs with TDE and Substrate Degradation. Nearest canonical neighbors: Ostrom's Governing the Commons (design principles that sustain common-pool resources) and stewardship theory — differs by setting the bar as legitimacy regeneration matching automation velocity.",
    source: "Owner's framework.",
    tags: [
      "public_mechanics",
      "affirmative_practice",
      "owner_framework",
      "audience:foundations",
      "audience:policy",
    ],
  },
  {
    name: "Design as Repair",
    category: "public_mechanics",
    oneLiner:
      "Design oriented toward the maintenance and repair of public capability rather than novelty or disruption — drawing on Steven Jackson's repair turn in STS.",
    whenToUse:
      "The practice frame for the whole body of work; useful with design and STS audiences.",
    vocabulary: [
      "design as repair",
      "maintenance",
      "repair turn",
      "public capability",
    ],
    notes:
      "The practice frame from the IxDA Oslo keynote; draws on Steven Jackson's repair turn in STS. Sits under Consequence Design as a practice stance. Audience: design, STS, academics. Pairs with Consequence Design and Public Mechanics. Adjacent canon: Russell & Vinsel's The Maintainers (maintenance over innovation), extending the Jackson lineage already cited.",
    source:
      "Owner's framework; IxDA Oslo keynote. Lineage: Steven Jackson, 'Rethinking Repair' (STS).",
    tags: [
      "public_mechanics",
      "affirmative_practice",
      "design",
      "owner_framework",
      "audience:academic",
    ],
  },

  // —— Creator economy / monetization UX (Twitch) —————————————————————————

  {
    name: "Twitch Creator Monetization Mechanics",
    category: "creator_economy",
    oneLiner:
      "The concrete revenue surfaces a Monetization UX designer works on — subscriptions (Tier 1/2/3, Prime, gifted), Bits / Cheering, ads, the Hype Train, channel points, and the Affiliate/Partner program — most of which share revenue between creator and platform.",
    whenToUse:
      "Table-stakes fluency. Knowing the actual mechanics — and that they're not interchangeable — is the difference between sounding like a Twitch designer and a generic ecommerce one.",
    vocabulary: [
      "subscriptions (Tier 1/2/3, Prime, gifted)",
      "Bits",
      "Cheering",
      "ads / ad revenue share",
      "Hype Train",
      "channel points",
      "Affiliate / Partner",
      "payout",
      "revenue share",
    ],
    howToDropIn:
      "\"These aren't one funnel — a recurring sub is a relationship, a Bit cheer is an impulsive in-the-moment gift, and channel points are non-monetary engagement. Designing them as if they were the same checkout is the classic mistake.\"",
    commonPhrasing: "Creator monetization, Twitch Partner Program.",
    notes:
      "Subs are recurring (Tier 1 ~$4.99, higher tiers above; Prime subs are free to the viewer via Amazon Prime; gifted subs let viewers buy subs for others) and revenue-shared between creator and Twitch (commonly ~50/50, higher splits for some partners); Bits are a purchased virtual currency viewers Cheer with (creators earn per Bit); ads are share-based; the Hype Train is a time-boxed escalating group event; channel points are an earned (not purchased) loyalty currency with no direct revenue. Knowing which lever is recurring vs impulse vs non-monetary is the core design literacy. Pair with Virtual Goods & Engagement Currencies and the Multi-Sided Creator Marketplace.",
    source: "Twitch monetization product (Partner/Affiliate program, Bits, subs, Hype Train).",
    tags: ["creator_economy", "monetization", "twitch", "framework"],
  },
  {
    name: "Virtual Goods & Engagement Currencies",
    category: "creator_economy",
    oneLiner:
      "The design of in-platform currencies — purchased (Bits) vs earned (channel points) — and the psychology of why people spend or tip in a live, social context where the spend is itself a visible social signal.",
    whenToUse:
      "Designing cheering, tipping, gifting, and points-redemption flows, where the motivation is social and emotional (support, status, recognition) more than transactional.",
    vocabulary: [
      "virtual currency",
      "Bits",
      "channel points",
      "tipping",
      "gifting",
      "virtual goods",
      "on-screen recognition",
      "status / visibility",
      "sink vs faucet",
    ],
    howToDropIn:
      "\"A Cheer isn't a purchase, it's a public gesture — the value to the viewer is being seen supporting the creator in front of the community. Design it as a social signal and the conversion logic is completely different from an ecommerce cart.\"",
    commonPhrasing: "Virtual-economy design, tipping / gifting UX.",
    notes:
      "Purchased currencies (Bits) and earned currencies (channel points) follow different economic logic — faucets and sinks, scarcity, and the visibility/status payoff. Live context makes spending performative (a Cheer shows up on stream), the lever ecommerce checkout doesn't have. Closer to game-economy and live-gifting design (TikTok/YouTube live gifts) than to retail. Pair with Twitch Creator Monetization Mechanics and Monetization UX Ethics (the same visibility that drives spend can tip into pressure).",
    source: "Virtual-economy and live-gifting design practice.",
    tags: ["creator_economy", "monetization", "virtual_goods", "framework"],
  },
  {
    name: "The Multi-Sided Creator Marketplace",
    category: "creator_economy",
    oneLiner:
      "Monetization UX on Twitch serves three parties at once — the creator who earns, the viewer who pays, and the platform that takes a share — so every design decision is a three-way balance, not a single-user optimization.",
    whenToUse:
      "Any monetization design or tradeoff conversation. The JD's 'balance business goals with creator and viewer trust' is exactly this three-body problem.",
    vocabulary: [
      "multi-sided marketplace",
      "two-sided / three-sided",
      "creator / viewer / platform",
      "revenue share",
      "take rate",
      "alignment",
      "incentive design",
    ],
    howToDropIn:
      "\"Every monetization surface has three users with partly-opposed interests — the creator wants to earn, the viewer wants to feel good about paying, and the platform needs its share. Optimizing for any one alone breaks the other two; the craft is the balance.\"",
    commonPhrasing: "Marketplace design, platform economics, monetization strategy.",
    notes:
      "Classic multi-sided-platform economics (Rochet & Tirole) at the UX layer; the take rate (the platform's cut) is the structural tension creators feel and viewers increasingly notice. Your systems-thinking and service-blueprint background maps directly — the marketplace is a service with three front-stages. This is also where your Civil Economics / take-rate framing is a genuine differentiator: you can reason about where value lands across the three parties, not just optimize one funnel. Pair with Monetization UX Ethics and your Civil Economics card.",
    source: "Multi-sided platform economics (Rochet & Tirole) applied to creator-monetization UX.",
    tags: ["creator_economy", "monetization", "marketplace", "framework"],
  },
  {
    name: "Monetization UX Ethics (Fair-by-Design vs Dark Patterns)",
    category: "creator_economy",
    oneLiner:
      "Designing revenue experiences that 'feel natural, rewarding, and fair' (the JD's words) rather than extractive — the line between a well-designed prompt and a dark pattern, in a context where the people being monetized are a community whose trust is the platform's actual asset.",
    whenToUse:
      "The JD's central value tension — 'creator and viewer trust,' monetization that 'feels intuitive and fair.' This is where you can bring something most UX candidates can't.",
    vocabulary: [
      "dark patterns / deceptive patterns",
      "fair-by-design",
      "consent",
      "pressure vs invitation",
      "trust",
      "transparency",
      "sludge",
    ],
    howToDropIn:
      "\"The test for a monetization surface is whether it would survive the user understanding exactly how it works — a fair prompt gets stronger when explained; a dark pattern dies. On a community platform, trust is the substrate the whole business sits on: extract it faster than it regenerates and you've burned the floor to heat the room.\"",
    commonPhrasing: "Ethical design, responsible monetization, trust & safety.",
    notes:
      "The recognized canon is Harry Brignull's dark / deceptive patterns and the sludge literature (Thaler & Sunstein). But this is the cleanest bridge to YOUR framework stack: 'feels fair' is Calculative Asymmetry (does the viewer understand the cost-benefit, or only the platform?) countered by Mirror Signaling (surface the real cost to the user); 'creator/viewer trust' degrading under aggressive monetization is Substrate Degradation and the Legitimacy Tax in consumer-product clothing. Lead with the standard vocabulary in the room, but this is where your public-mechanics work becomes a hiring differentiator rather than a side interest. Pair with your Calculative Asymmetry, Mirror Signaling, Substrate Degradation, and Legitimacy Tax cards.",
    source: "Brignull (deceptive / dark patterns); Thaler & Sunstein (sludge). Bridge to owner's framework stack.",
    tags: ["creator_economy", "monetization", "ethics", "framework", "owner_framework_bridge"],
  },

  // —— Municipal IT leadership (local-government CIO) ——————————————————————

  {
    name: "IT Service Management (ITSM / ITIL)",
    category: "municipal_it",
    oneLiner:
      "The operational discipline a CIO role leans on hardest — running IT as a set of services with defined practices for incident, request, problem, change, and configuration management, measured by service levels and a service desk.",
    whenToUse:
      "The JD's 'mature ITSM practices' requirement, and any conversation about how the IT department actually runs day to day.",
    vocabulary: [
      "ITSM",
      "ITIL",
      "incident / request / problem / change / configuration management",
      "service desk",
      "SLA / OLA",
      "service catalog",
      "CMDB",
      "escalation",
    ],
    howToDropIn:
      "\"Mature ITSM is the difference between firefighting and running a service: incidents get triaged against SLAs, recurring incidents become problem records, and changes go through change management instead of breaking things on a Friday. ITIL is the common vocabulary for that.\"",
    commonPhrasing: "IT operations, service management, ITIL.",
    notes:
      "ITIL 4 is the dominant framework/certification (the JD lists ITIL as a preferred cert). The five practices the JD names map to ITIL: incident (restore service fast), request (fulfill standard asks), problem (root-cause the recurring), change (control modifications), configuration (track assets in a CMDB). Dashboards, SLAs, and CX measures are how a CIO reports the department is healthy. Your Delivery Forensics instinct connects directly — problem management is forensics applied to recurring incidents. Pair with Enterprise IT Architecture & Lifecycle and DORA Metrics (you have the latter).",
    source: "ITIL 4 / ITSM practice.",
    tags: ["municipal_it", "it_operations", "itsm", "framework"],
  },
  {
    name: "Enterprise IT Architecture & Lifecycle Management",
    category: "municipal_it",
    oneLiner:
      "Setting technical direction for the whole estate — networks, fiber, data centers, cloud, endpoints, identity, collaboration — and managing the full lifecycle (asset inventory, patching, refresh cycles, decommissioning), including ERP and SaaS.",
    whenToUse:
      "The JD's 'enterprise architecture direction' and 'lifecycle management' functions — the strategic-technical core of the CIO role.",
    vocabulary: [
      "enterprise architecture",
      "TOGAF",
      "identity (IAM / SSO / MFA)",
      "endpoint / MDM",
      "zero trust",
      "refresh cycle",
      "asset lifecycle",
      "ERP",
      "SaaS",
      "technical debt",
    ],
    howToDropIn:
      "\"Architecture is the set of standards that keep the estate coherent — one identity layer, defined endpoint baselines, a cloud strategy — and lifecycle management is the unglamorous discipline of refresh cycles and patching that keeps today's working system from becoming next year's breach.\"",
    commonPhrasing: "Enterprise architecture, infrastructure, IT strategy.",
    notes:
      "TOGAF is the standard EA framework; identity is increasingly the security perimeter (zero trust, MFA, SSO); lifecycle/refresh cycles are both an operational-risk and a capital-budget question (unpatched, end-of-life gear is the classic municipal breach vector). ERP (the city's finance / HR / permitting backbone) is the highest-stakes application-lifecycle item. Pair with IT Service Management and the IT Internal Service Fund (refresh cycles are a capital-planning line).",
    source: "Enterprise-architecture and IT-lifecycle practice (TOGAF; standard enterprise IT).",
    tags: ["municipal_it", "it_operations", "architecture", "framework"],
  },
  {
    name: "IT Internal Service Fund & Technology Budgeting",
    category: "municipal_it",
    oneLiner:
      "The governmental finance model where central IT is funded as an internal service fund — recovering its costs by charging other departments — plus the operating/capital split and multi-year capital programming for lifecycle replacement and resilience.",
    whenToUse:
      "The JD's financial-management functions. Distinctively governmental, and where your value-accounting instinct is a genuine asset.",
    vocabulary: [
      "internal service fund",
      "cost recovery / chargeback",
      "operating vs capital budget",
      "multi-year capital programming",
      "TCO",
      "benefits realization",
      "GASB fund accounting",
    ],
    howToDropIn:
      "\"An internal service fund makes IT a cost-recovery utility — departments pay for what they consume, which forces honest conversations about demand and total cost of ownership instead of treating IT as free overhead.\"",
    commonPhrasing: "Government finance, IT budgeting, capital planning.",
    notes:
      "Internal service funds (GASB governmental fund accounting) charge user departments to recover the cost of centralized services; the discipline is forecasting service costs and tracking investments to measurable outcomes (the JD's exact phrase — that's Benefits Realization, which you have a card for). This is the cleanest bridge to your Civil Economics work: the fund model is an explicit attempt to locate where the cost of a technology decision lands and who pays it — Vp/Ve made legible inside a budget. Pair with Benefits Realization Management and your Civil Economics card.",
    source: "Governmental internal-service-fund accounting (GASB); municipal IT budgeting practice.",
    tags: ["municipal_it", "finance", "governance", "framework"],
  },
  {
    name: "Municipal Cybersecurity & Resilience",
    category: "municipal_it",
    oneLiner:
      "Protecting a local government — a high-value, under-resourced ransomware target — through threat detection, incident response, compliance, security-awareness training, and tested business continuity / disaster recovery.",
    whenToUse:
      "The JD's cybersecurity functions. Cities are now primary ransomware targets, so this is board-level risk, not a back-office concern.",
    vocabulary: [
      "threat detection",
      "incident response (IR)",
      "NIST CSF",
      "CIS Controls",
      "ransomware",
      "security awareness",
      "business continuity / disaster recovery (BC/DR)",
      "RTO / RPO",
      "StateRAMP",
      "CISA",
    ],
    howToDropIn:
      "\"Local governments are now prime ransomware targets — high-value data, essential services, lean security teams. The program is layered: NIST CSF or CIS Controls as the framework, MFA and identity as the highest-ROI controls, security-awareness training because people are the entry point, and tested BC/DR so a hit is a bad week, not an existential one.\"",
    commonPhrasing: "Cybersecurity, resilience, risk management.",
    notes:
      "The NIST Cybersecurity Framework and the CIS Controls are the standard frameworks; CISA publishes municipal-focused guidance; ransomware against cities (Atlanta, Baltimore, New Orleans) is the defining threat. BC/DR is measured in RTO (how fast you recover) and RPO (how much data you can lose); untested backups are the classic failure. Your Substrate Degradation / resilience framing connects — security-awareness training is regenerating the human substrate faster than phishing erodes it. Pair with Enterprise IT Architecture (identity is the perimeter).",
    source: "NIST CSF, CIS Controls, CISA municipal guidance; standard public-sector cyber practice.",
    tags: ["municipal_it", "cybersecurity", "resilience", "framework"],
  },
  {
    name: "Public-Meeting & Council-Chamber A/V",
    category: "municipal_it",
    oneLiner:
      "The distinctively municipal CIO duty — running reliable audiovisual and hybrid-participation technology for City Council and public meetings, where a live failure is a public, legally-sensitive event under open-meetings law.",
    whenToUse:
      "The JD devotes real space to A/V and 'critical public meetings.' Easy to underestimate; it's where the CIO is most visible to elected officials.",
    vocabulary: [
      "council chambers",
      "hybrid / remote participation",
      "streaming / recording",
      "open-meetings law (Sunshine Law)",
      "Granicus / Legistar",
      "A/V standards",
      "room design",
      "live-session support",
    ],
    howToDropIn:
      "\"Council-chamber A/V is the one IT service the mayor experiences directly and in public — a hybrid meeting that drops the remote callers isn't a help-desk ticket, it's a potential open-meetings-law problem. It deserves standards, preventative maintenance, and a human in the room during live sessions.\"",
    commonPhrasing: "Public-meeting technology, A/V, civic engagement tech.",
    notes:
      "Colorado (like most states) has open-meetings / Sunshine Law requirements for public access; hybrid participation and reliable recording/streaming are now part of compliance, not just convenience. Granicus and Legistar are common municipal meeting / agenda / streaming platforms. This duty is reputationally outsized — it's where elected officials form their opinion of the whole IT department. Your service-blueprint and live-event-reliability instincts apply. Pair with IT Service Management (live-session support is a defined service with its own SLA).",
    source: "Municipal A/V and public-meeting technology practice; open-meetings-law context.",
    tags: ["municipal_it", "av", "public_meetings", "framework"],
  },

  // —— Glowrm: trust infrastructure on ATProto (owner project) —————————————

  {
    name: "Glowrm",
    category: "trust_decision_engineering",
    oneLiner:
      "Trust infrastructure for ATProto social apps — a shared reputation layer that pairs ATProto's portable identity with portable accountability, so a bad actor can't escape consequences by platform-hopping.",
    whenToUse:
      "When the problem is cross-app accountability on a decentralized social substrate — where portable identity (ATProto DIDs) lets users move between apps but consequences don't travel with them.",
    vocabulary: [
      "Reputation Scores (20–80 scale, 50 = average)",
      "Trust Events (positive_interaction, report, block, ban, warn, suspend)",
      "Stratified Preference Allocation (SPA)",
      "Identity Registry (DID → app + verification status)",
      "Power Protection",
      "cross-app reputation",
      "portable accountability",
      "DID",
    ],
    howToDropIn:
      "\"ATProto made identity portable but left accountability behind — so bad actors just hop platforms. Glowrm is the missing layer: a shared reputation substrate where trust events travel with the DID, so consequences are portable too.\"",
    commonPhrasing: "ATProto ecosystem, decentralized social, trust & safety infrastructure.",
    notes:
      "A concrete implementation of the owner stack's trust-infrastructure thesis. Architecture is three layers: user (ATProto auth + personal data repositories, user-controlled), app (individual app backends handling conversations/matches), and the Glowrm layer (a centralized registry of identity, reputation scores, trust events, and unit allocations) — data separation keeps content user-controlled while shared trust signals are coordinated centrally. Connects directly to the stack: portable accountability is Responsibility to Record at network scale (the obligation travels with the DID); Trust Events are a public analogue of Decision Receipts; the platform-hopping problem is the accountability gap across seams that the journey-management critique names — escaping consequences by switching apps is exactly the seam no single platform owns, and the reputation substrate eroding under bad actors is Substrate Degradation. Power Protection (drop outlier scores, weight by rater reputation) is anti-gaming design guarding that substrate. SPA here is Stratified Preference Allocation (the owner's matching framework — see that card), surfaced inside Glowrm as finite contact units (jars / credits / picks / waves) per period. Glowrm's docs currently mislabel the acronym as 'Strategic Profile Allocation' — that wording is an error in the docs; it is the same SPA, and the framework repo is authoritative. Reputation Scores use a baseball-scouting-inspired 20–80 scale (50 = average). Pair with TDE, Decision Receipts, Responsibility to Record, and Substrate Degradation.",
    source: "Glowrm documentation (glowrm.tech/documentation).",
    tags: [
      "trust_decision_engineering",
      "atproto",
      "trust_infrastructure",
      "owner_framework",
    ],
  },

  // —— Stratified Preference Allocation (owner framework) ——————————————————

  {
    name: "Stratified Preference Allocation (SPA)",
    category: "market_design",
    oneLiner:
      "A constrained-signaling matching mechanism: instead of unlimited 'likes,' participants get k limited selection slots allocated across priority tiers, forcing truthful preference revelation and reducing attention inequality in bilateral matching markets.",
    whenToUse:
      "Any bilateral matching market suffering from signal inflation, choice overload, or low match quality — dating, recruiting, college admissions, housing, mentorship, freelance.",
    vocabulary: [
      "constrained selection (k slots)",
      "priority tiers",
      "quality-based capacity (k = f(quality))",
      "preference revelation",
      "stratified signaling",
      "bilateral transparency (tier revelation)",
      "signal inflation",
      "attention inequality",
    ],
    howToDropIn:
      "\"Unlimited likes are costless, so everyone signals interest in everything — that's signal inflation, and the matches are bad. SPA gives you k slots across tiers, so scarcity forces you to reveal what you actually prefer. It's costly signaling by design.\"",
    commonPhrasing: "Market design, matching markets, mechanism design.",
    notes:
      "The owner's framework (Ron Bronson, 2025; repo quarterback/frameworks, CC BY 4.0). Mechanics: k slots (k << N); tiered caps (e.g., Tier 1 max 3, Tier 2 max 4, Tier 3 max 4, Tier 4 the remainder); capacity scaling with a quality score; and bilateral transparency (after matching you learn which tier your match placed you in). Simulation claims vs Gale-Shapley: ~40–50% lower Gini (attention inequality), O(15) vs O(1000) evaluations, tier-weighted quality 3.2/4.0, convergence in 15–20 cycles. Nearest canonical neighbors: Gale-Shapley deferred-acceptance / stable matching and Roth's market design (Roth & Sotomayor) — SPA differs by constraining and tiering the signaling side to force preference revelation rather than assuming a complete preference order; Spence-style costly signaling (scarcity makes the signal credible); and the choice-overload literature (Iyengar & Lepper) behind the cognitive-load claim. Connects to the owner stack: 'signal inflation' is a micro-form of Signal Pollution, and the Gini / attention-inequality reduction is a fairness lever adjacent to Calculative Asymmetry. SPA always means Stratified Preference Allocation — this card is authoritative (the repo). Glowrm applies SPA as its contact-allocation mechanism (surfaced as finite units — jars/credits/picks/waves); Glowrm's docs currently mislabel the acronym as 'Strategic Profile Allocation,' which is simply an error in those docs, not a separate concept. See the Glowrm card.",
    source:
      "Stratified Preference Allocation (SPA) Framework, Ron Bronson (2025), github.com/quarterback/frameworks (CC BY 4.0). Benchmarked against Gale-Shapley.",
    tags: ["market_design", "matching", "owner_framework"],
  },

  // —— Police accountability / civilian oversight —————————————————————————

  {
    name: "Civilian / Community Police Oversight Models (NACOLE)",
    category: "police_oversight",
    oneLiner:
      "The three established models of civilian oversight — review-focused (review completed IA investigations), investigation-focused (conduct independent investigations), and auditor/monitor-focused (audit patterns and systems) — codified by NACOLE. OCPA is an investigation-focused model paired with a community board holding decision authority.",
    whenToUse:
      "Table-stakes fluency for the role and the interview. Knowing where OCPA sits in the taxonomy — and its tradeoffs — is the difference between a credible oversight leader and an outsider.",
    vocabulary: [
      "civilian / community oversight",
      "NACOLE",
      "review-focused",
      "investigation-focused",
      "auditor / monitor",
      "independent investigation",
      "community board",
      "subpoena power",
    ],
    howToDropIn:
      "\"OCPA is an investigation-focused model — it conducts its own administrative investigations rather than only reviewing IAD's — paired with a community board that holds the discipline-decision authority. That's at the more independent end of NACOLE's spectrum, which is exactly where the credibility and the friction both come from.\"",
    commonPhrasing: "Civilian oversight, police accountability, NACOLE.",
    notes:
      "NACOLE (National Association for Civilian Oversight of Law Enforcement) is the professional association and source of the standard three-model taxonomy; investigation-focused agencies with independent authority are the most powerful and the most contested (unions resist; sustainability depends on legal defensibility). OCPA's pairing with the CBPA (a volunteer board holding decision authority on findings/discipline) is a distinctive structure. Pair with The Misconduct Investigation & Discipline Process and Portland's Accountability Landscape.",
    source: "NACOLE oversight models; civilian-oversight practice.",
    tags: ["police_oversight", "public_sector", "oversight", "framework"],
  },
  {
    name: "The Police Misconduct Investigation & Discipline Process",
    category: "police_oversight",
    oneLiner:
      "The administrative pipeline OCPA runs — complaint intake → investigation → findings against a preponderance-of-evidence standard → recommendation → discipline — distinct from any criminal process and bounded by timelines, due process, and the collective bargaining agreement.",
    whenToUse:
      "The investigations/oversight core of the role. You need to speak the process fluently — dispositions, standards, the IAD relationship.",
    vocabulary: [
      "complaint intake",
      "administrative vs criminal investigation",
      "preponderance of the evidence",
      "findings (sustained / not sustained / exonerated / unfounded)",
      "Internal Affairs Division (IAD)",
      "disciplinary matrix",
      "investigative timelines (e.g., 180-day rules)",
    ],
    howToDropIn:
      "\"Administrative misconduct findings are decided on a preponderance standard — more likely than not — not the criminal 'beyond a reasonable doubt,' and the dispositions are sustained, not sustained, exonerated, or unfounded. Getting that framework and the timelines right is what makes a finding stick.\"",
    commonPhrasing: "Internal affairs, administrative investigation, discipline.",
    notes:
      "Administrative investigations determine policy violations and discipline, separate from and to a lower standard than any criminal case; standard dispositions are sustained / not sustained / exonerated / unfounded. Investigative timelines (many jurisdictions use ~180-day windows from notice to discipline) are a frequent reason discipline is overturned if missed — verify Portland/Oregon specifics. The JD has OCPA both conducting investigations and monitoring IAD. This is the cleanest home for your Responsibility to Record / Last Documented Mile work: a sustained finding only survives appeal or arbitration if the investigative record is complete and the chain of reasoning is reconstructable — the LDM is exactly where discipline gets reversed. Pair with Officer Due-Process & Legal Constraints and your RTR/LDM cards.",
    source: "Civilian-oversight and internal-affairs investigation practice.",
    tags: ["police_oversight", "investigations", "framework"],
  },
  {
    name: "Officer Due-Process & Legal Constraints",
    category: "police_oversight",
    oneLiner:
      "The dense legal frame that constrains police discipline — Garrity (compelled statements can't be used criminally), Brady/Giglio (disclosure and credibility lists), officer bill-of-rights protections, and above all the collective bargaining agreement and arbitration, which routinely determine whether discipline survives.",
    whenToUse:
      "The JD's explicit, repeated emphasis on 'disciplinary outcomes within union / collective bargaining environments' and findings that 'withstand external scrutiny and challenge.' This is the make-or-break knowledge area.",
    vocabulary: [
      "Garrity rights",
      "Brady / Giglio",
      "Law Enforcement Officers' Bill of Rights (LEOBOR)",
      "collective bargaining agreement (CBA)",
      "grievance / arbitration",
      "just cause",
      "due process",
      "last-chance agreement",
    ],
    howToDropIn:
      "\"The hard constraint isn't whether misconduct happened — it's whether the discipline survives arbitration. Garrity, the CBA's just-cause and timeline provisions, and the arbitrator all sit between a sustained finding and an actual consequence. Building findings that hold up under that pressure is the whole game.\"",
    commonPhrasing: "Labor relations, police discipline, employment law.",
    notes:
      "Garrity v. New Jersey (1967): officers can be compelled to answer in administrative investigations, but those statements are immunized from criminal use. Brady/Giglio obligate disclosure of exculpatory and credibility evidence (the 'Brady list'). Statutory officer protections vary by state (Maryland-style LEOBOR statutes; in Oregon many protections run through the CBA and state law rather than a single bill-of-rights statute — verify the Oregon/Portland specifics). Arbitration overturning discipline is the central, well-documented frustration of police accountability, which is why the JD stresses defensibility. This is where your Decision Receipts / Responsibility to Record framing is not academic: the record IS the defense. Pair with The Misconduct Investigation & Discipline Process.",
    source: "Garrity; Brady/Giglio; labor-relations and police-discipline practice. Verify Oregon-specific statutes / CBA terms.",
    tags: ["police_oversight", "legal", "labor_relations", "framework"],
  },
  {
    name: "Portland's Accountability Landscape",
    category: "police_oversight",
    oneLiner:
      "The specific institutional context — the 2020 voter-approved charter amendment (~82%) creating a new independent oversight body to replace the prior IPR model, the Community Board for Police Accountability (CBPA) that holds decision authority, and the long-running US DOJ settlement over PPB use of force.",
    whenToUse:
      "Demonstrating you've done the homework. An inaugural director who doesn't know the measure, the CBPA structure, the union friction that delayed implementation, and the DOJ settlement is not credible.",
    vocabulary: [
      "Measure 26-217 (2020)",
      "city charter amendment",
      "Independent Police Review (IPR)",
      "Community Board for Police Accountability (CBPA)",
      "Portland Police Association (PPA)",
      "US DOJ settlement agreement",
      "complaint navigators",
    ],
    howToDropIn:
      "\"OCPA exists because Portland voters amended the charter in 2020 to create an independent body with real investigative and disciplinary authority, replacing the prior IPR model. Standing it up has meant negotiating the structure with the union and operating alongside the DOJ settlement — so the job is institution-building inside an already-contested space.\"",
    commonPhrasing: "Portland police accountability, charter reform.",
    notes:
      "Measure 26-217 passed with ~82% in November 2020, amending the charter to create a new police oversight board empowered to investigate and impose discipline; implementation was slowed by code development and bargaining with the Portland Police Association. The CBPA (volunteer community board) holds decision authority on findings and discipline while OCPA (this office) does the investigative and operational work — a deliberate separation the director must navigate. PPB has also operated under a 2014 US DOJ settlement re: use of force against people with mental illness. These specifics evolve and my knowledge predates the posting — verify current details before an interview. Pair with Civilian Oversight Models and your authorizing_environment translation.",
    source: "City of Portland charter/code (Measure 26-217, 2020); US DOJ settlement (2014). Verify current specifics.",
    tags: ["police_oversight", "portland", "context", "framework"],
  },
  {
    name: "Procedural Justice & Police Legitimacy (Tyler)",
    category: "police_oversight",
    oneLiner:
      "Tom Tyler's finding that people's willingness to trust and defer to authority depends more on the fairness of the process (voice, neutrality, respect, trustworthy motives) than on the outcome — the theoretical backbone of community-centered, trauma-informed oversight.",
    whenToUse:
      "Articulating WHY community-based oversight matters and how to design the complaint process. The JD's 'trauma-informed,' 'community voice,' and 'accessible' language is procedural justice in practice.",
    vocabulary: [
      "procedural justice",
      "legitimacy",
      "four pillars (voice, neutrality, respect, trustworthiness)",
      "trauma-informed",
      "community trust",
      "accessibility",
    ],
    howToDropIn:
      "\"Procedural justice — Tyler's work — shows trust in the system comes from how people are treated in the process, not just whether they 'win.' For oversight that means a complainant who feels heard, informed, and respected trusts the outcome even when their complaint isn't sustained. That's what the complaint-navigator role and trauma-informed design are really for.\"",
    commonPhrasing: "Procedural justice, legitimacy, community trust.",
    notes:
      "Tom Tyler ('Why People Obey the Law') established procedural justice; the four elements (voice, neutrality, respectful treatment, trustworthy motives) are widely used in policing-legitimacy work. This connects to your substrate/trust framing directly: legitimacy is the substrate the whole accountability system sits on — a process experienced as fair regenerates it while an opaque one degrades it (Substrate Degradation / Legitimacy Tax in the oversight setting). Trauma-informed practice and complaint navigators are the operational expression. Pair with your Substrate Degradation and Mirror Signaling cards (making the process legible to the complainant is mirror signaling).",
    source: "Tyler, 'Why People Obey the Law'; procedural-justice and trauma-informed practice.",
    tags: ["police_oversight", "legitimacy", "procedural_justice", "framework", "owner_framework_bridge"],
  },

  // —— Medical-device usability / human factors engineering ————————————————

  {
    name: "IEC 62366-1 (Usability Engineering for Medical Devices)",
    category: "human_factors",
    oneLiner:
      "The international standard governing usability engineering for medical devices — the process-and-documentation backbone that turns 'good UX research' into 'approvable usability evidence' for notified bodies and the FDA.",
    whenToUse:
      "The role's regulatory submission and audit work. This is the standard the Usability Lead actually runs against.",
    vocabulary: [
      "IEC 62366-1",
      "FDA HFE Guidance (2016)",
      "EU MDR 2017/745",
      "usability engineering process",
      "use specification",
      "user interface specification",
      "intended users / use / environment",
      "primary operating functions",
    ],
    howToDropIn:
      "\"62366 is the spine — it defines the process from use specification through validation, and the file you build under it is what an auditor or notified body reviews. Good research is necessary; conforming research is what gets the device on the market.\"",
    commonPhrasing: "Medical-device regulatory, usability engineering, human factors.",
    notes:
      "IEC 62366-1:2015 (+A1:2020) is the international usability standard for medical devices; FDA aligned via 'Applying Human Factors and Usability Engineering to Medical Devices' (2016 guidance). Together they define: use specification, characterization of intended users/use/environment, identification of hazard-related use scenarios, use-related risk analysis, design of the user interface, formative evaluations, summative evaluation, and the usability engineering file. EU MDR (2017/745) requires conformity for CE marking; FDA HFE submission for US clearance. The role is literally Usability Lead in audits — meaning you defend the file. Pair with Use-Related Risk Analysis & Critical Tasks and The Usability Engineering File.",
    source: "IEC 62366-1:2015 (+A1:2020); FDA Guidance 'Applying Human Factors and Usability Engineering to Medical Devices' (2016); EU MDR 2017/745.",
    tags: ["human_factors", "medical_device", "regulated", "framework"],
  },
  {
    name: "Use-Related Risk Analysis & Critical Tasks",
    category: "human_factors",
    oneLiner:
      "The risk-driven core of medical-device usability — identifying use errors that could cause harm (critical tasks), tracing them through hazard-related use scenarios, and prioritizing design and testing against patient-safety risk rather than just 'what's hard to use.'",
    whenToUse:
      "The thing that distinguishes medical-device usability from consumer UX: the design priority is set by harm, not by friction. Any conversation about scope, sampling, and test design starts here.",
    vocabulary: [
      "use-related risk analysis (URRA)",
      "use error",
      "critical task",
      "hazard-related use scenario",
      "harm / severity",
      "ISO 14971 (risk management)",
      "task analysis",
    ],
    howToDropIn:
      "\"Medical-device usability is risk-driven — we don't optimize all tasks equally. We identify the use errors that could harm a patient via the URRA tied to the 14971 risk file, and we design and test against those first. Most of the summative protocol is built to exercise the critical tasks.\"",
    commonPhrasing: "Risk management, hazard analysis, critical tasks.",
    notes:
      "62366 explicitly ties usability to ISO 14971 (medical-device risk management): the URRA identifies hazard-related use scenarios and 'critical tasks' — those whose incorrect performance could cause harm. Critical tasks drive what gets formatively iterated and summatively validated. This is also where your Delivery Forensics framing connects: URRA is preemptive forensics on use error, mapping failure paths from interface to harm before they occur. Pair with IEC 62366-1 and Formative vs Summative Evaluation.",
    source: "IEC 62366-1; ISO 14971 (medical-device risk management); FDA HFE guidance.",
    tags: ["human_factors", "medical_device", "risk", "framework"],
  },
  {
    name: "Formative vs Summative Usability Evaluation",
    category: "human_factors",
    oneLiner:
      "The two distinct phases of regulated usability testing — formative (iterative, small-n, design-improvement focused, used throughout development) and summative (final validation, conventionally ~15 representative users per distinct user group, simulated use, exercising the critical tasks).",
    whenToUse:
      "Planning the testing program. The structure is dictated by the standards, not negotiable — knowing the n=15 convention and the simulated-use protocol is table-stakes.",
    vocabulary: [
      "formative evaluation",
      "summative evaluation",
      "simulated use",
      "representative users",
      "root-cause analysis of use errors",
      "n=15 per distinct user group",
      "validation testing",
      "residual risk",
    ],
    howToDropIn:
      "\"Formative is the iterative work — small samples, design improvement; summative is the validation gate — typically 15 representative users per distinct user group, simulated use, exercising the critical tasks, with root-cause analysis on every observed use error. Auditors read the summative report and the URRA traceability matrix first.\"",
    commonPhrasing: "Usability validation, HF testing, summative.",
    notes:
      "FDA guidance establishes the convention of ~15 participants per distinct user group for summative (statistical rationale: probability of detecting common use errors at that frequency); EU under 62366 follows the same general structure. Each observed use error must be analyzed for root cause and residual-risk acceptability. Summative happens under simulated-use conditions — realistic environment, no coaching. The summative report is the headline submission artifact. Pair with Use-Related Risk Analysis and The Usability Engineering File.",
    source: "IEC 62366-1; FDA HFE guidance (n=15 convention).",
    tags: ["human_factors", "medical_device", "testing", "framework"],
  },
  {
    name: "The Usability Engineering File (Documentation as Regulatory Artifact)",
    category: "human_factors",
    oneLiner:
      "The compiled body of usability evidence — use spec, URRA, design rationale, formative reports, summative report, residual-risk justification, known-use-problems analysis — that constitutes the device's defense to a notified body or FDA reviewer, and the artifact a Usability Lead defends in audits.",
    whenToUse:
      "The role's documentation function and the audit work. This is where the work either survives or doesn't.",
    vocabulary: [
      "usability engineering file (UEF)",
      "usability engineering plan (UEP)",
      "HFE/UE summary report (FDA)",
      "design history file (DHF)",
      "residual-risk analysis",
      "known use problems",
      "post-market surveillance",
      "audit defense",
    ],
    howToDropIn:
      "\"The file is the deliverable — research is upstream evidence. What ships to the notified body or FDA is a coherent narrative tying use specification through URRA, formative iteration, and summative validation, with a residual-risk argument that closes the loop back to 14971. The Usability Lead's job in audit is to walk an auditor through that chain without breaking it.\"",
    commonPhrasing: "Usability file, HFE report, audit, regulatory submission.",
    notes:
      "This is the cleanest medical-device home for your Responsibility to Record and Last Documented Mile work: the file IS RTR institutionalized as a regulatory obligation — every use-related decision, formative finding, and design change must be recorded so the chain from 'intended use' to 'residual risk acceptable' is reconstructable. An auditor finds the failure exactly where the documentation chain goes silent — the Last Documented Mile, in regulatory clothing. Pair with IEC 62366-1 and your RTR/LDM cards.",
    source: "IEC 62366-1 (Usability Engineering File); FDA HFE Summary Report convention.",
    tags: ["human_factors", "medical_device", "documentation", "framework", "owner_framework_bridge"],
  },
  {
    name: "Radiation Oncology Domain Context (Elekta)",
    category: "human_factors",
    oneLiner:
      "The Elekta product context — linear accelerators (Versa HD, Elekta Unity MR-linac), Leksell Gamma Knife (radiosurgery), and the oncology software stack (Monaco treatment planning, MOSAIQ OIS) — and the radiation-therapy clinical workflow they sit inside: imaging → contouring → planning → QA → delivery.",
    whenToUse:
      "Showing you've done the homework. A Lead UX Researcher in this space who can't name the product line and the clinical workflow doesn't land.",
    vocabulary: [
      "linear accelerator (linac)",
      "MR-linac",
      "Gamma Knife",
      "radiosurgery (SRS / SBRT)",
      "treatment planning system (TPS)",
      "oncology information system (OIS)",
      "contouring",
      "plan QA",
      "ARIA / MOSAIQ",
    ],
    howToDropIn:
      "\"Elekta's product line spans hardware — Versa HD, the Unity MR-linac, Gamma Knife — and the software stack that drives it: Monaco for planning, MOSAIQ as the OIS. Usability scope crosses the clinical workflow from imaging through delivery, and the users are a mix — radiation oncologists, medical physicists, dosimetrists, RTTs — each with their own risk profile.\"",
    commonPhrasing: "Radiation oncology, radiation therapy.",
    notes:
      "Elekta's main competitor is Varian (now Siemens Healthineers, with ARIA as its OIS analogue). The clinical user roles are distinct — physicians (oncologists), medical physicists (QA / planning), dosimetrists (planning), radiation therapists / RTTs (delivery) — and each has its own critical tasks and risk exposure, which directly drives URRA segmentation and summative user-group definition (you typically need ~15 per group, per group). Verify current product names and modules before interview. Pair with Use-Related Risk Analysis (user-group segmentation drives the URRA).",
    source: "Elekta product portfolio and radiation-oncology clinical workflow practice.",
    tags: ["human_factors", "medical_device", "radiation_oncology", "context", "framework"],
  },

  // —— Scaled Agile (SAFe / PI-Planning) ————————————————————————————————

  {
    name: "SAFe & PI-Planning (Scaled Agile)",
    category: "delivery",
    oneLiner:
      "The Scaled Agile Framework — Scrum/Kanban scaled to large programs via Agile Release Trains, Program Increments (8–12 weeks), and quarterly PI-planning events where multiple teams align on objectives, dependencies, and risks for the next increment.",
    whenToUse:
      "Any large enterprise — including regulated industries like medical devices — running multi-team agile. PI-planning vocabulary is the table-stakes signal in a SAFe shop.",
    vocabulary: [
      "SAFe (Scaled Agile Framework)",
      "Agile Release Train (ART)",
      "Program Increment (PI)",
      "PI-planning",
      "PI objectives",
      "dependencies",
      "ROAM (Resolved / Owned / Accepted / Mitigated)",
      "team of teams",
      "system demo",
    ],
    howToDropIn:
      "\"PI-planning is where the value gets shaped in a SAFe shop — multiple teams in a room for a couple of days, committing to PI objectives, surfacing cross-team dependencies, ROAMing risks. The skill is articulating what your function can commit to, naming the dependencies, and not over-promising.\"",
    commonPhrasing: "SAFe, agile at scale, PI-planning, ART.",
    notes:
      "SAFe (Scaled Agile Framework) is the dominant scaled-agile framework in regulated and enterprise environments — it adds a layer above team-level Scrum/Kanban (an Agile Release Train groups ~5–12 teams; Program Increments are typically 8–12 weeks; PI-planning is the quarterly all-hands ceremony). For a UX Lead, the PI-planning skill is committing capacity, surfacing dependencies on engineering and product, and naming risks honestly. Your 18F delivery experience and existing Scrum / Kanban / Continuous Delivery / DORA cards transfer directly; SAFe is the scaled wrapper. Both Elekta postings flag SAFe and PI-planning as preferred but not essential. Pair with Scrum, Kanban, Team Topologies, Continuous Delivery, and the delivery_practice translation.",
    source: "Scaled Agile Framework (SAFe) — scaledagileframework.com.",
    tags: ["delivery", "agile", "safe", "framework"],
  },

  // —— AI product management (Staff PM, AI) ———————————————————————————————

  {
    name: "AI Product Management (Staff-level Discipline)",
    category: "ai_product",
    oneLiner:
      "Product management for AI-powered features as a distinct discipline — eval-driven rather than ship-and-iterate, decisions made under a fast-moving substrate (models change month to month), and capability assembled from foundation-model APIs rather than built in-house.",
    whenToUse:
      "Positioning the role itself, and any conversation about how AI PM differs from regular SaaS PM.",
    vocabulary: [
      "AI-native product",
      "eval-driven",
      "foundation models",
      "model tradeoffs (cost / latency / context / quality)",
      "build-vs-buy",
      "capability assembly",
      "AI product strategy",
    ],
    howToDropIn:
      "\"AI PM isn't regular PM with LLMs added — it's a different shape. The substrate moves under you (the right model in March is wrong by September), the unit of progress is eval scores not feature flags, and most capability is assembled from APIs rather than built. The Staff role is making strategy under those constraints stick.\"",
    commonPhrasing: "AI PM, AI product strategy, AI-native product leader.",
    notes:
      "The 'AI PM' role has emerged as distinct in the last ~2 years; the JD's emphasis on eval discipline, model tradeoffs, and build-vs-buy is the canonical description. Your existing AI and agent work (agentic delivery, agent-plumbing primitives, evals, RAG, the forward-deployed frame, governance) is substantive AI product material — surface it as strategy and eval discipline in PM rooms, not just building in engineering rooms. Pair with Build-vs-Buy for AI Products, AI Product Cost / Quality / Latency Triangle, and LLM Evaluation (Evals).",
    source: "AI product management practice (the emerging discipline ~2023–); applied-AI product literature.",
    tags: ["ai_product", "product_management", "ai", "framework"],
  },
  {
    name: "Build-vs-Buy for AI Products",
    category: "ai_product",
    oneLiner:
      "The make-buy-partner decision specifically for AI capability — when to use foundation-model APIs (Anthropic, OpenAI, etc.), when to use vertical AI SaaS, when to fine-tune, when to build proprietary — under a substrate where the right answer changes as fast as the model landscape.",
    whenToUse:
      "A JD-named responsibility ('Assess build vs. buy decisions across LLMs, APIs, AI tools, and third-party solutions'). One of the highest-leverage Staff PM decisions.",
    vocabulary: [
      "build-vs-buy",
      "foundation-model API",
      "fine-tuning",
      "vertical AI SaaS",
      "model-agnostic architecture",
      "vendor lock-in",
      "capability vs commodity",
      "fast-follower",
    ],
    howToDropIn:
      "\"Build-vs-buy for AI looks like classic make/buy, but the substrate is unstable — the model that justified building yesterday gets matched by a $0.50-per-million-tokens API tomorrow. The discipline is keeping the integration layer model-agnostic so you can move, and reserving 'build' for the spots where your data or workflow is the differentiator.\"",
    commonPhrasing: "Build-vs-buy, AI strategy, capability vs commodity.",
    notes:
      "The recurring counsel from applied-AI product orgs: don't build what the foundation models will commoditize next quarter; do build the data, workflow, and integration glue specific to your domain. Vertical AI SaaS (AI customer-support, AI sales-ops, AI ops tools) is the fast-follower category eating bespoke build. Your forward-deployed engineering and Codifying Repeatable Deployment Patterns cards apply directly: the build/buy decision becomes a pattern across customers and features, not a one-off. Pair with AI Product Management and Codifying Repeatable Deployment Patterns.",
    source: "Contemporary AI product strategy practice.",
    tags: ["ai_product", "strategy", "ai", "framework"],
  },
  {
    name: "AI Product Cost / Quality / Latency Triangle",
    category: "ai_product",
    oneLiner:
      "The operational tradeoff specific to LLM-powered products — token cost, p50 / p99 latency, and eval-measured quality form a constrained triangle PMs trade off explicitly on every feature.",
    whenToUse:
      "Any conversation about whether a feature ships, what model to use, or whether to cache/route — the JD's 'model tradeoffs, latency, cost, context limits, and quality risks.'",
    vocabulary: [
      "token cost",
      "input / output tokens",
      "p50 / p99 latency",
      "eval score",
      "prompt caching",
      "model routing",
      "quality vs cost frontier",
      "context limits",
    ],
    howToDropIn:
      "\"Every AI feature has a cost / latency / quality triangle — a larger model is smarter but slower and more expensive; a smaller model with prompt caching and a good eval suite can deliver 80% of the quality at a tenth of the cost. The PM call is which point on the frontier each feature actually sits at, and instrumenting all three so you can see the tradeoff move.\"",
    commonPhrasing: "AI economics, LLM ops, model selection.",
    notes:
      "The triangle is intuitive but enforced — sub-second latency caps your model and context; cost per call caps deployment scale. Standard moves: prompt caching (Anthropic and others now offer this as a primitive — large cost win for repeated context), model routing (cheap model for easy queries, expensive for hard), smaller fine-tuned models for narrow tasks. Your existing Guardrails & LLM Observability card covers the measurement layer. Pair with LLM Evaluation (Evals) and AI Product Management.",
    source: "Applied-AI product operations practice.",
    tags: ["ai_product", "operations", "ai", "framework"],
  },
  {
    name: "Short-Term Rental / Vacation Rental PMS Domain (Hostaway)",
    category: "ai_product",
    oneLiner:
      "The vacation-rental property management category — software that lets professional STR operators manage listings, pricing, channels (Airbnb / VRBO / Booking.com), guest comms, ops, and accounting from one system — with AI applied across comms, pricing, ops, and decision support.",
    whenToUse:
      "Showing you've done the homework. A Staff PM in this space needs to name the workflow, the OTA landscape, the competitor PMSes, and where AI is actually moving the needle.",
    vocabulary: [
      "property management system (PMS)",
      "channel manager",
      "OTA (online travel agency — Airbnb / VRBO / Booking.com)",
      "dynamic pricing",
      "guest comms",
      "turnover / cleaning ops",
      "smart-lock integration",
      "owner statements",
    ],
    howToDropIn:
      "\"An STR PMS is the operator's command center — listings, calendar, pricing, channels, comms, cleaning ops, accounting — all glued to Airbnb / VRBO / Booking. The AI question is which of those steps a professional manager actually wants automated versus assisted: guest comms is the easy yes; pricing is contested (PriceLabs, Wheelhouse dominate); ops dispatch and review writing are emerging.\"",
    commonPhrasing: "Vacation rental, short-term rental (STR), property management.",
    notes:
      "Hostaway is one of the major PMSes in the professional STR segment (others: Guesty, Streamline, OwnerRez, Lodgify). The OTAs (Airbnb, VRBO / Expedia, Booking.com) are both the demand source and the rule-makers — channel-manager reliability is the product's central technical pain. Dynamic pricing (PriceLabs, Wheelhouse, Beyond) is a distinct sub-category often integrated rather than built — a canonical 'buy' decision. Hostaway's stated strategy is platform-wide AI automation across these workflows. Pair with Build-vs-Buy for AI Products and AI Product Management.",
    source: "Vacation-rental / STR PMS category (Hostaway, Guesty, OwnerRez, Lodgify); OTAs (Airbnb, VRBO, Booking.com); pricing tools (PriceLabs, Wheelhouse, Beyond).",
    tags: ["ai_product", "str", "vacation_rental", "context", "framework"],
  },

  // —— Canonical UX / product discovery & delivery vocabulary ——————————————

  {
    name: "Continuous Discovery (Torres)",
    category: "product",
    oneLiner:
      "Teresa Torres's practice (Continuous Discovery Habits, 2021): at minimum weekly customer touchpoints conducted by the product trio (PM, designer, engineer), where small research activities continuously inform decisions in pursuit of a desired product outcome — research as a team operating system, not a phase.",
    whenToUse:
      "Describing research-driven product work where studies feed the roadmap on a regular cadence and the whole team participates, vs. periodic research delivered as reports.",
    vocabulary: [
      "continuous discovery",
      "product trio (PM / designer / engineer)",
      "weekly touchpoints",
      "opportunity solution tree",
      "outcome (not output)",
      "assumption testing",
      "interview together",
    ],
    howToDropIn:
      "\"We ran continuous discovery in Torres's sense — weekly-ish touchpoints with users, the whole trio observing live and at debriefs, findings turning into prioritized tickets rather than reports filed in a drawer.\"",
    commonPhrasing: "Continuous discovery, product trio, weekly customer interviews.",
    notes:
      "Torres's book has a foreword by Marty Cagan; the two are closely linked. The keystone habit is the weekly customer touchpoint by the trio, not a researcher handing off insights. The 'opportunity solution tree' (which you already have a card for) is the specific decision tool within the practice; Continuous Discovery is the broader habit/operating model. Pair with Opportunity Solution Tree, Dual-Track Agile, and HCD.",
    source: "Teresa Torres, 'Continuous Discovery Habits' (2021). producttalk.org.",
    tags: ["product", "discovery", "research", "framework"],
  },
  {
    name: "Dual-Track Agile",
    category: "product",
    oneLiner:
      "The Jeff Patton / Marty Cagan framing of product work as two concurrent tracks — a Discovery track continuously generating validated backlog items, and a Delivery track continuously shipping releasable software — run by the same cross-functional team rather than as sequential phases.",
    whenToUse:
      "Describing how a team runs discovery and delivery in parallel: PM/design/engineering doing research, prototyping, and assumption testing on one side while engineering ships against a continuously validated backlog on the other.",
    vocabulary: [
      "dual-track agile",
      "discovery track",
      "delivery track",
      "validated backlog items",
      "assumption testing",
      "continuous discovery",
      "continuous delivery",
      "product trio",
    ],
    howToDropIn:
      "\"It was dual-track in Patton's sense — discovery and delivery running in parallel, not waterfall research-then-build. Studies fed the backlog every few weeks; the engineering team kept shipping while the next round was in flight.\"",
    commonPhrasing: "Dual-track agile, discovery / delivery, dual-track Scrum.",
    notes:
      "Jeff Patton coined 'Dual-Track Scrum'; Marty Cagan popularized 'Dual-Track Agile' and later moved toward calling it 'continuous discovery + continuous delivery' because the original phrase made people focus on process over principle. Same idea: one team, two concurrent tracks, fed by the same product trio. Pair with Continuous Discovery (Torres), Continuous Delivery, and Scrum.",
    source: "Jeff Patton (Dual-Track Scrum) and Marty Cagan / SVPG (Dual-Track Agile). svpg.com.",
    tags: ["product", "agile", "delivery", "framework"],
  },
  {
    name: "Progressive Disclosure",
    category: "design",
    oneLiner:
      "The information-architecture and interaction-design principle of revealing only the controls and content relevant to the user's current step, with deeper detail available on demand — used to manage cognitive load in complex forms and workflows.",
    whenToUse:
      "Long forms, complex regulated workflows, expert tools, and any product where surfacing everything at once would overwhelm. The standard counter to 'just put it all on one screen.'",
    vocabulary: [
      "progressive disclosure",
      "just-in-time information",
      "help drawer",
      "expandable section",
      "section / subsection",
      "persistent navigation / progress",
      "cognitive load",
    ],
    howToDropIn:
      "\"We used progressive disclosure deliberately — a fixed section nav so users always know where they are, the form broken into sections and subsections, and regulation surfaced on demand via help drawers rather than dumped on the page. Cognitive load is a budget; spend it where it matters.\"",
    commonPhrasing: "Progressive disclosure, just-in-time content, long-form UX.",
    notes:
      "Long-standing IA principle (Jakob Nielsen / NN/g formalized it as a usability heuristic of sorts; it's also Tognazzini's). Pairs especially well with non-blocking inline validation for long, non-linear forms — the user enters data as it arrives in real life, the system saves continuously, and the required-fields check fires at a discrete action (e.g., Export) rather than per-field. Pair with Nielsen's 10 Usability Heuristics and Service Blueprint.",
    source: "Jakob Nielsen / NN/g; long-form UX and complex-workflow practice.",
    tags: ["design", "ux", "ia", "framework"],
  },

  // —— Organizational Change Management (OCM) / AI transformation ————————

  {
    name: "Senior OCM Consultant (AI / Digital Transformation)",
    category: "ocm",
    oneLiner:
      "The senior-consultant archetype that owns the people-and-organization side of a client's AI, GenAI, digital, or IT transformation — selecting fit-for-purpose change approaches, advising executive sponsors, planning and resourcing OCM activities, and leading consultant teams inside the engagement.",
    whenToUse:
      "Senior Consultant / Manager / Senior Manager postings in OCM practices at CGI, Accenture, Deloitte, EY, IBM Consulting, Capgemini, KPMG, PwC. Often paired with a sector or technology angle (AI adoption, ERP rollout, target-operating-model design).",
    vocabulary: [
      "organizational change management (OCM)",
      "change strategy",
      "change impact assessment",
      "stakeholder analysis",
      "sponsor coalition",
      "change network",
      "adoption",
      "people, process, technology",
      "operating model",
      "transformation roadmap",
      "fit-for-purpose approach",
    ],
    howToDropIn:
      "\"As an OCM senior consultant, the seat is the people-and-organization side of the transformation: choosing the right change approach for the client's maturity, advising the executive sponsor, sequencing OCM activities against the technology rollout, and standing up the change network that actually moves behavior. The technology team ships the system; my team ships the adoption.\"",
    commonPhrasing: "Organizational change management, change adoption, OCM consulting.",
    notes:
      "OCM consulting is a registered specialty inside the big firms with its own credential stack (ADKAR / Prosci, ACMP / CCMP). The role grades by scope: Consultant runs workstreams; Senior Consultant leads the OCM workstream end-to-end and advises senior client leadership; Manager / Senior Manager runs multiple engagements and contributes to sales. The AI/GenAI flavor is the current hot segment — the JD bias is candidates who can connect employee adoption mechanics to AI deployment realities (capability building, role redesign, governance, fear of obsolescence). Substance-wise, capability-building programs (federal staff training, internal enablement) and operating-model redesigns translate directly; the gap is usually vocabulary and credential. Pair with ADKAR (Prosci), ACMP CCMP / Standard for Change Management, Trusted Advisor Stance, and AI Adoption & Capability Building.",
    source:
      "OCM consulting practice (Big 4 / IT-services firms); CGI Senior Consultant OCM JD (Finland, 2025) as a representative posting.",
    tags: ["ocm", "consulting", "transformation", "role", "framework"],
  },
  {
    name: "AI Adoption & Capability Building",
    category: "ocm",
    oneLiner:
      "The OCM specialty that turns an AI or GenAI deployment into actual employee usage and capability — covering AI-fluency curricula, role redesign, prompt and workflow training, governance literacy, and the fear/identity work that AI specifically surfaces.",
    whenToUse:
      "AI/GenAI rollout engagements where the technology is the easy part and adoption is the actual delivery risk. JDs that name 'AI adoption,' 'AI-enabled ways of working,' 'employee engagement in AI transformations,' 'capability development.'",
    vocabulary: [
      "AI adoption",
      "AI fluency",
      "capability building",
      "AI-enabled ways of working",
      "human-AI collaboration",
      "role redesign",
      "augmentation vs. automation",
      "AI governance literacy",
      "champions / change agents",
      "use-case discovery",
    ],
    howToDropIn:
      "\"AI transformations fail at adoption far more often than at deployment. The OCM work is concrete: an AI-fluency curriculum the workforce can actually take, role-by-role redesign so people see what their job becomes (not just that 'AI helps'), governance literacy so policy is something they can apply rather than a deck they were shown, and an honest treatment of the obsolescence anxiety the technology specifically creates. The change network is the delivery mechanism.\"",
    commonPhrasing: "AI adoption, AI enablement, AI change management.",
    notes:
      "AI OCM has a distinct profile vs. classic OCM: the change touches identity and skill obsolescence in ways an ERP rollout doesn't, the technology evolves faster than the training, and the 'right answer' for how to use it is genuinely unknown when rollout starts — so capability building has to teach experimentation, not just procedures. Your federal-training experience (SOMD card), curriculum stewardship of opinionated material, and train-the-trainer / peer-cascade scaling translate directly to the capability-building piece. Pair with Senior OCM Consultant (AI / Digital Transformation), ADKAR (Prosci) for the adoption mechanics, and the AI-delivery glossary cards for the technical register.",
    source:
      "AI transformation practice (consulting firms, 2024–2026); CGI OCM JD (2025); practitioner reports on adoption gaps in GenAI rollouts.",
    tags: ["ocm", "ai", "adoption", "capability_building", "framework"],
  },
  {
    name: "Trusted Advisor Stance (Senior Consultant)",
    category: "ocm",
    oneLiner:
      "The consulting posture of operating as the executive sponsor's go-to thinking partner — earning the right to disagree, ask harder questions, and shape the agenda — rather than as a vendor delivering scope.",
    whenToUse:
      "Senior-consultant-and-above postings that explicitly name 'trusted advisor,' 'advise senior leadership,' 'C-level presence,' or describe relationships rather than deliverables. Often the bar that distinguishes Senior Consultant from Consultant.",
    vocabulary: [
      "trusted advisor",
      "executive sponsor",
      "advise senior leadership",
      "C-suite",
      "earned right to challenge",
      "shape the agenda",
      "thinking partner",
      "consultative selling",
    ],
    howToDropIn:
      "\"The trusted-advisor seat isn't a status — it's an earned position you keep by being right when it matters and willing to disagree when it costs you. With executive sponsors that means coming to the room with the harder question, not just the deck; making the trade-off they're avoiding explicit; and being the person they call before the steering committee, not after.\"",
    commonPhrasing: "Trusted advisor, executive sponsor management, senior stakeholder engagement.",
    notes:
      "Trusted Advisor is the title of Maister, Green, and Galford's standard text on the posture; the model is T = (Credibility + Reliability + Intimacy) / Self-Orientation — with self-orientation as the denominator that capsizes most consultants. The senior-consultant move is shifting from 'I deliver what you scoped' to 'I tell you what I think you should be scoping,' and earning that shift through demonstrated judgment, not assertion. Pair with Senior OCM Consultant (AI / Digital Transformation) and Sales & Networking in Consulting.",
    source:
      "Maister, Green, & Galford, *The Trusted Advisor* (2000); standard consulting-firm career framework for Senior Consultant and above.",
    tags: ["ocm", "consulting", "executive_communication", "framework"],
  },
  {
    name: "Sales & Networking in Consulting",
    category: "ocm",
    oneLiner:
      "The non-billable rainmaking activity senior consultants are expected to do — staying connected to past clients, generating new leads through network maintenance and thought leadership, and participating in pursuit teams — even when their official job is delivery.",
    whenToUse:
      "Senior-consultant-and-above OCM, strategy, or transformation JDs that name 'sales activities,' 'networking,' 'client meetings,' or 'existing networks and clients are considered an advantage.' Often underweighted by IC-track candidates who read the JD as delivery-only.",
    vocabulary: [
      "business development",
      "pursuit",
      "lead generation",
      "account growth",
      "network maintenance",
      "thought leadership",
      "warm introduction",
      "land and expand",
      "follow-on work",
    ],
    howToDropIn:
      "\"Senior-consultant economics work because the seat is part delivery, part sales. Past clients become future engagements when you stay in touch on something other than 'are you hiring my firm.' Network maintenance is the actual job — coffees, intros, sharing a piece of writing that's useful to them — and it's how the next pursuit warms up before there's an RFP.\"",
    commonPhrasing: "Business development, account growth, BD activities.",
    notes:
      "Consulting-firm grading explicitly weights sales contribution starting at Senior Consultant or Manager level. Candidates from operating roles (in-house, government, agency) often have strong networks but don't frame them as a sales asset — naming it on the way in helps. The 'existing networks and clients are considered an advantage' line in OCM JDs is a soft signal the firm will value a candidate who can bring even small follow-on work in. Pair with Trusted Advisor Stance (Senior Consultant) and Senior OCM Consultant (AI / Digital Transformation).",
    source:
      "Consulting-firm career framework (Big 4 / IT-services); CGI OCM JD (2025) as representative.",
    tags: ["ocm", "consulting", "business_development", "framework"],
  },
  {
    name: "ADKAR (Prosci)",
    category: "ocm",
    oneLiner:
      "Prosci's individual-change model — Awareness, Desire, Knowledge, Ability, Reinforcement — used as both a diagnostic for where a change initiative is stuck and a sequencing tool for OCM interventions; the dominant credential reference in North American OCM consulting.",
    whenToUse:
      "Any OCM engagement where you need a shared model with the client and team. JDs that name ADKAR or Prosci certification explicitly; OCM proposals; sponsor briefings; resistance diagnosis.",
    vocabulary: [
      "ADKAR",
      "Prosci",
      "Awareness",
      "Desire",
      "Knowledge",
      "Ability",
      "Reinforcement",
      "individual change",
      "barrier point",
      "sponsor coalition",
      "PCT (Project Change Triangle)",
    ],
    howToDropIn:
      "\"ADKAR is the model I diagnose with: every individual moving through a change has to clear Awareness, Desire, Knowledge, Ability, and Reinforcement in order, and most failed changes are stuck at one specific stage. Diagnose the barrier point, then sequence the interventions — communication and sponsor visibility for Awareness and Desire, training for Knowledge and Ability, recognition and metrics for Reinforcement. Skipping a stage doesn't make it faster; it makes it fail later.\"",
    commonPhrasing: "ADKAR, Prosci, change adoption model.",
    notes:
      "ADKAR was developed by Jeff Hiatt at Prosci; Prosci's certification (Prosci Change Practitioner / Advanced Practitioner) is the de facto OCM credential in North American consulting. The model's strength is that it makes change adoption diagnostic rather than directive — you can ask where any individual or group is and act on the answer. Pair it with Kotter's 8 Steps (organizational scope) for executive briefings and the ACMP Standard (vendor-neutral process backbone) for engagements where the client doesn't want a single proprietary model. If you don't hold the certification yet, the JD move is fluent use of the model plus a named path to certification — not an overclaim. Pair with Senior OCM Consultant (AI / Digital Transformation) and AI Adoption & Capability Building.",
    source:
      "Jeff Hiatt, *ADKAR: A Model for Change in Business, Government, and Our Community* (Prosci, 2006); Prosci Research; prosci.com.",
    tags: ["ocm", "change_model", "certification", "framework"],
  },
  {
    name: "ACMP CCMP / Standard for Change Management",
    category: "ocm",
    oneLiner:
      "The Association of Change Management Professionals' vendor-neutral body of knowledge and credential — five process groups (Evaluate Change Impact and Organizational Readiness, Formulate Strategy, Develop the Plan, Execute the Plan, Complete the Change Effort) — used as the discipline's standard reference when a client doesn't want a single proprietary model.",
    whenToUse:
      "Vendor-neutral OCM engagements; clients with mixed change models in play; JDs that name ACMP or 'equivalent' alongside ADKAR; international consulting where Prosci's North American dominance doesn't apply as strongly.",
    vocabulary: [
      "ACMP",
      "CCMP (Certified Change Management Professional)",
      "Standard for Change Management",
      "CMBoK",
      "evaluate change impact",
      "organizational readiness",
      "change management strategy",
      "change management plan",
      "change agent",
      "process groups",
    ],
    howToDropIn:
      "\"The ACMP Standard is what I lean on when a client doesn't want to commit to a single proprietary model. It organizes the discipline around five process groups — evaluate impact and readiness, formulate strategy, develop the plan, execute, complete — which lets me sequence work and define deliverables without dictating which underlying change model the client uses internally. ADKAR or Kotter still live inside it; the Standard is the operating system, not the application.\"",
    commonPhrasing: "ACMP, CCMP, change management body of knowledge.",
    notes:
      "ACMP is the professional association; CCMP (Certified Change Management Professional) is the individual credential; the Standard for Change Management is the underlying body of knowledge (sometimes called CMBoK). Vendor-neutrality is the key difference from Prosci: ACMP doesn't sell a proprietary model, so consulting firms and clients who want to avoid lock-in often prefer it as the reference. The JD's 'ADKAR, ACMP and equivalent' phrasing means they're comfortable with either credential family. Pair with ADKAR (Prosci) and Senior OCM Consultant (AI / Digital Transformation).",
    source:
      "Association of Change Management Professionals (ACMP), *Standard for Change Management* (current edition); CCMP credential framework; acmpglobal.org.",
    tags: ["ocm", "change_model", "certification", "framework"],
  },

  // —— AI Transformation & Enablement (non-engineering AI leadership) ————

  {
    name: "Director / Head of AI Transformation & Enablement",
    category: "ai_transformation",
    oneLiner:
      "The non-engineering AI leadership archetype that owns workforce AI adoption, enablement programs, and the people-and-process side of AI transformation — partnered with but distinct from the Principal AI Engineer track that owns the technical platform.",
    whenToUse:
      "Senior leadership AI roles where the brief is org-wide adoption, fluency, enablement, transformation, or strategy — not deep technical IC engineering. Real exemplars (2026): Schwab 'Director, AI Fluency & Enablement Programs'; Writer 'Strategic AI Transformation Lead'; Thrive Learning 'Head of AI Transformation'; Citi 'Head of AI Strategy'; Accenture 'Strategy Principal Director, Data & AI Strategy.'",
    vocabulary: [
      "AI transformation",
      "AI enablement",
      "AI fluency",
      "AI adoption at scale",
      "AI-first operating model",
      "AI strategy",
      "capability building",
      "enablement programs",
      "executive advisory",
      "change network",
      "translate platform power to P&L",
      "AI readiness",
    ],
    howToDropIn:
      "\"The Principal AI Engineer owns the platform; this seat owns whether the workforce can use it. The work is enablement programs the org can actually take, role-by-role redesign so people see what their job becomes, an honest read on AI readiness by function, and the translation work that turns model capability into operating-model decisions for the executive team. The technical org ships the platform; this org ships the adoption.\"",
    commonPhrasing: "Director / Head of AI Transformation, Enablement, Fluency, or Adoption; Strategic AI Transformation Lead.",
    notes:
      "The market title is unsettled — Schwab calls it 'AI Fluency & Enablement Programs,' Writer calls it 'Strategic AI Transformation Lead,' Thrive calls it 'Head of AI Transformation,' Citi has both 'Head of AI Strategy' and a 'Group Head of AI' above it. Read the seniority and scope, not the literal title. The seat reports into a CIO/CTO/CDO/CAIO or directly to the CEO depending on org maturity. Common profile of successful hires: product, strategy, design, learning, change-management, or transformation background rather than ML engineering — which is exactly the candidate this role intentionally selects for, because the failure mode is technical-leader-as-adoption-leader (the engineer who can't run a workforce program). Pair with AI Fluency Programs (Enterprise Workforce), Strategic AI Transformation (Translating AI to P&L), AI Governance & Responsible AI Leadership, AI Adoption & Capability Building (OCM section), and the SOMD Story card as substance evidence.",
    source:
      "Validated against active 2026 postings: Schwab 'Director, AI Fluency & Enablement Programs'; Writer 'Strategic AI Transformation Lead (West)'; Thrive Learning 'Head of AI Transformation'; Citi 'Head of AI Strategy'; Accenture 'Strategy Principal Director, Data & AI Strategy'; Google 'AI Strategist, Principal Lead, Global Partnerships.' Axial Search market analyses (1,859 AI strategy postings; 3,159 AI implementation postings).",
    tags: ["ai_transformation", "ai_leadership", "role", "framework"],
  },
  {
    name: "AI Fluency Programs (Enterprise Workforce)",
    category: "ai_transformation",
    oneLiner:
      "The enablement specialty inside an AI transformation seat — building, running, and measuring AI literacy and capability programs across thousands of employees, with curricula, role-based learning paths, certification, and adoption metrics tied to actual workflow change.",
    whenToUse:
      "JDs that name 'AI fluency,' 'AI enablement programs,' 'capability building,' 'driving adoption at scale.' Schwab's posting is the cleanest exemplar. Often paired with workforce-planning, talent, or L&D partnerships.",
    vocabulary: [
      "AI fluency",
      "enablement programs",
      "learning paths",
      "role-based curriculum",
      "certification track",
      "champions network",
      "adoption metrics",
      "learning operations",
      "train-the-trainer",
      "cohort programs",
      "office hours",
      "workflow integration",
    ],
    howToDropIn:
      "\"AI fluency at workforce scale isn't an LMS course — it's a portfolio: a baseline curriculum everyone takes, role-based deepens for the functions where AI changes the actual job, a champions network that runs office hours and unblocks people in flow, and a measurement model that ties adoption to workflow change rather than completion rates. The unit of success isn't 'employees trained,' it's 'workflows where AI is now load-bearing.'\"",
    commonPhrasing: "AI fluency programs, enterprise enablement, capability building.",
    notes:
      "Direct substance match for the SOMD Story card (federal cohort-based, peer-cascade capability building inside a hard time window), the eAPD content-as-interface work (curriculum-as-system instinct), and the train-the-trainer pattern. Schwab's title is the canonical reference because they've named the function explicitly; less mature orgs roll this work into 'AI transformation' broadly. Pair with AI Adoption & Capability Building (OCM section), Director / Head of AI Transformation & Enablement, and the train-the-trainer references.",
    source:
      "Schwab 'Director, AI Fluency & Enablement Programs' (San Francisco / Austin / Southlake, January 2026 posting); enterprise AI enablement practice.",
    tags: ["ai_transformation", "enablement", "capability_building", "framework"],
  },
  {
    name: "Strategic AI Transformation (Translating AI to P&L)",
    category: "ai_transformation",
    oneLiner:
      "The strategy-and-translation specialty inside an AI transformation seat — helping executives navigate the shift to an AI-first operating model, translating platform capability into measurable P&L impact, and shaping the operating-model and investment decisions that follow.",
    whenToUse:
      "JDs that frame the role as 'business strategy and cutting-edge technology,' 'translating platform power into measurable P&L impact,' 'AI-first operating model,' 'helping executives navigate the shift.' Writer's 'Strategic AI Transformation Lead' is the canonical exemplar; Accenture and BCG variants exist.",
    vocabulary: [
      "AI-first operating model",
      "P&L impact",
      "value realization",
      "AI investment thesis",
      "use-case portfolio",
      "executive advisory",
      "transformation roadmap",
      "AI maturity model",
      "operating-model redesign",
      "make-or-buy",
      "platform economics",
    ],
    howToDropIn:
      "\"The translation work is the leverage point. Executives don't need another model demo; they need to understand which functions get reshaped, what the operating-model implications are, where the P&L moves, and what the AI investment thesis actually buys them over three years. The seat is part strategist, part advisor, part translator — fluent enough in the technology to be credible with the platform team, fluent enough in the business to be useful to the CFO.\"",
    commonPhrasing: "Strategic AI transformation, AI strategy, AI-first operating model.",
    notes:
      "The consulting-flavored variant of the AI transformation seat — closer to Accenture / Deloitte / BCG / McKinsey hire patterns than to in-house enablement roles. The vocabulary is heavier on P&L, investment thesis, operating model, and executive advisory than on enablement mechanics. The OCM target-role cards (Senior OCM Consultant AI / Digital Transformation; Trusted Advisor Stance; Sales & Networking in Consulting) directly support this archetype; design-leadership scope (Head of Design at 18F) reads as 'has run an org' which is what these seats need. Pair with Director / Head of AI Transformation & Enablement, the OCM cards, and the AI-delivery glossary cards for the technical register.",
    source:
      "Writer 'Strategic AI Transformation Lead (West)' (February 2026); Accenture Strategy & Consulting AI practice; Citi 'Head of AI Strategy' (firmwide); BCG / McKinsey / Deloitte AI strategy practices.",
    tags: ["ai_transformation", "ai_strategy", "executive_advisory", "framework"],
  },
  {
    name: "AI Governance & Responsible AI Leadership",
    category: "ai_transformation",
    oneLiner:
      "The rising non-technical AI executive specialty owning enterprise AI governance, responsible-AI standards, risk and compliance, and audit readiness — particularly important as the EU AI Act moves into enforcement and US sectoral regulation tightens.",
    whenToUse:
      "JDs that name 'AI governance,' 'responsible AI,' 'AI risk,' 'AI compliance,' 'auditability,' or are inside regulated sectors (financial services, healthcare, federal, EU operations). Often a separate seat from AI transformation, sometimes merged at smaller orgs.",
    vocabulary: [
      "AI governance",
      "responsible AI",
      "AI risk management",
      "model risk",
      "auditability",
      "AI compliance",
      "EU AI Act",
      "NIST AI Risk Management Framework",
      "AI policy",
      "model cards",
      "evaluation standards",
      "third-party AI risk",
    ],
    howToDropIn:
      "\"AI governance at enterprise scale isn't a policy document — it's an operating function: an inventory of where AI is in use and at what risk tier, evaluation and audit standards that travel with each deployment, a model-risk process the second-line can actually run, and the cross-functional spine (legal, security, compliance, data, product) that lets the org move fast without owing a regulator an explanation later. The EU AI Act enforcement timeline made this a board-level concern, not a center-of-excellence one.\"",
    commonPhrasing: "AI governance, responsible AI, AI risk and compliance.",
    notes:
      "Adjacent — not core — to your profile, but worth knowing because (a) federal / regulated-sector experience (eAPD, CMS, 42 CFR 495) is unusually relevant and could be a back-door into this lane; (b) AI governance leaders increasingly need partners in transformation and enablement, so understanding the function is useful even from an adjacent seat; (c) at smaller orgs the seats merge. Common titles: Head of AI Governance, Head of Responsible AI, AI Risk Director, Chief AI Ethics Officer. The credential stack here is different — NIST AI RMF, ISO 42001, IAPP AIGP. Pair with Director / Head of AI Transformation & Enablement and the OCM cards if the org runs them together.",
    source:
      "Christian & Timbers, 'Top AI Leadership Roles Expected in 2026'; ODSC, 'From Context Engineers to Chief AI Officers'; EU AI Act enforcement timeline; rising posting volume per Axial Search market analysis.",
    tags: ["ai_transformation", "ai_governance", "responsible_ai", "framework"],
  },

  // —— Digital experience (regulated healthcare / insurance) ——————————————

  {
    name: "Manager / Director, Website & Digital Experience (Regulated Healthcare & Insurance)",
    category: "digital_experience",
    oneLiner:
      "The web / digital experience leadership archetype at health plans, insurance carriers, and adjacent regulated-industry employers — owning website strategy, analytics, governance, IA, and the cross-functional partnership with IT that turns business needs into scalable digital solutions for member, provider, broker, and employer audiences.",
    whenToUse:
      "Manager / Director / Senior Director-level digital experience postings at health plans (Premera, Regence, Kaiser, Cigna, Aetna, Humana, BCBS family, UnitedHealth, Point32Health), insurance carriers, and dental / vision plans (Delta Dental). The title taxonomy varies — 'Manager, Website Experience'; 'Director, Digital Product & Experience Management'; 'Senior Director, Digital Product / Member Experience'; 'Director, Digital Customer Experience' — but the role shape is consistent.",
    vocabulary: [
      "digital experience",
      "website experience",
      "member experience",
      "provider experience",
      "broker portal",
      "employer portal",
      "multi-audience IA",
      "digital governance",
      "GA4 / analytics ownership",
      "A/B testing",
      "personalization",
      "WCAG accessibility",
      "HIPAA-aware",
      "cross-tenant",
      "CMS platform (Sitecore / AEM / Drupal Enterprise)",
    ],
    howToDropIn:
      "\"At a health plan, the website is a multi-tenant service: members have one job, providers have another, brokers and employers have theirs, and they all touch the same brand and the same data spine. The role isn't 'run the marketing site' — it's running a governed experience across audiences with very different mental models, working with IT on platform and integrations, holding the analytics layer that tells you what's actually moving, and meeting HIPAA's bar on the way through.\"",
    commonPhrasing: "Manager / Director, Website Experience; Digital Experience Manager; Director, Digital Product & Experience Management.",
    notes:
      "The title taxonomy is genuinely unsettled across carriers: Delta Dental of Washington (Manager, Website Experience); Point32Health, parent of Tufts and Harvard Pilgrim (Director, Digital Product & Experience Management); UnitedHealth Group (Senior Director, Digital Product / Member Experience); Anthem / Aetna / Humana variants exist. Read scope and seniority, not the literal title. The 7+ year requirement is industry-standard; experience in healthcare / insurance / financial-services / regulated industry is consistently named as a plus. The cross-functional spine is the same everywhere: web team + IT (platform / integration) + marketing + compliance + legal + member-facing teams. Direct profile match for content design + service design + multi-audience IA + agency / vendor management; the muscles to be honest about are GA4-as-SME and current CMS-platform fluency. Pair with Multi-Audience Digital Governance, Web Analytics Leadership (GA4 + A/B), Enterprise CMS Stewardship, and the CMS-migration Story card (forthcoming).",
    source:
      "Validated against active 2026 postings: Delta Dental of Washington 'Manager, Website Experience' (April 2026); Point32Health 'Director, Digital Product & Experience Management'; UnitedHealth Group 'Senior Director, Digital Product — Unified AI Search'; J.D. Power 2026 U.S. Healthcare Digital Experience Study (industry investment); Corporate Insight Health Plan Monitor (digital experience rankings).",
    tags: ["digital_experience", "healthcare", "insurance", "role", "framework"],
  },
  {
    name: "Multi-Audience Digital Governance (Member / Provider / Broker / Employer)",
    category: "digital_experience",
    oneLiner:
      "The IA-and-governance specialty inside a health-plan or insurance-carrier digital experience seat — designing and maintaining the standards, content models, and platform conventions that let four (or more) distinct audiences share one website, one brand, and one data spine without their jobs-to-be-done colliding.",
    whenToUse:
      "Health-plan and carrier digital experience JDs that name multiple audiences ('public member, provider, broker, employer'), portal ecosystems, or cross-tenant governance. Common at the BCBS family, Cigna, Aetna, Humana, UnitedHealth, Kaiser, regional plans, and dental / vision carriers.",
    vocabulary: [
      "multi-audience IA",
      "audience-based navigation",
      "portal ecosystem",
      "content governance",
      "content model",
      "design-system governance",
      "brand consistency",
      "cross-tenant standards",
      "role-based experience",
      "audience pivot",
      "single-spine multi-surface",
    ],
    howToDropIn:
      "\"The multi-audience site is its own design problem. A member checking a claim, a provider looking up eligibility, a broker comparing plans, and an employer managing a group are four different jobs touching the same brand and often the same back-end. The governance work is keeping the conventions tight enough that the site is coherent and loose enough that each audience can have what it needs — and being explicit about what's shared (brand, accessibility, data definitions) versus what's localized (navigation, voice, depth).\"",
    commonPhrasing: "Multi-audience governance, audience IA, portal governance.",
    notes:
      "Direct match for eAPD's two-sided service design (state authors vs. federal reviewers — same instinct scaled to four-plus audiences). The 'establish governance frameworks across all audiences while ensuring it works seamlessly with digital platform portals' line in the Delta Dental JD is the canonical version of this requirement. Pair with Manager / Director, Website & Digital Experience and the eAPD / SOMD Story cards as substance evidence; the Service Blueprint and Dual-Track Agile frameworks already in the deck cover the underlying design moves.",
    source:
      "Health-plan and insurance-carrier digital experience practice (Delta Dental, Point32Health, BCBS family); service-design literature on multi-sided platforms.",
    tags: ["digital_experience", "ia", "governance", "healthcare", "framework"],
  },
  {
    name: "Web Analytics Leadership (GA4 + A/B)",
    category: "digital_experience",
    oneLiner:
      "The analytics-ownership specialty inside a website experience seat — owning Google Analytics 4 event design, conversion tracking, data governance, dashboards, and A/B testing programs so the website team can make decisions on real behavior rather than opinion.",
    whenToUse:
      "Digital experience JDs that name the role as 'in-house SME for GA4,' 'lead website performance strategy, analytics, testing, and optimization,' or otherwise put the analytics ownership inside the digital experience seat rather than in a separate data team. Common in mid-sized regulated employers where one team owns the loop.",
    vocabulary: [
      "GA4 (Google Analytics 4)",
      "event design",
      "conversion tracking",
      "data layer",
      "data governance",
      "tag management (GTM)",
      "A/B testing",
      "multivariate testing",
      "experimentation program",
      "lift",
      "statistical significance",
      "personalization platform",
      "dashboarding",
      "self-serve reporting",
    ],
    howToDropIn:
      "\"GA4-as-SME inside a digital experience seat means owning the loop: event taxonomy and the data layer that feeds it, conversion design tied to the audiences the business actually cares about, a testing program with enough cadence to learn rather than just instrument, and the discipline to translate the dashboard into a roadmap recommendation. The trap is becoming a reporting service desk; the value is being the team that knows which experiment is worth running next.\"",
    commonPhrasing: "Website analytics, GA4 SME, A/B testing program, conversion optimization.",
    notes:
      "Honest framing in interviews: A/B testing and outcomes-driven decision-making are in your wheelhouse (eAPD's continuous-discovery cadence; OKRs designed as outcomes, not output). GA4-as-in-house-SME is a specific operator role to be honest about — if you've owned analytics implementation end-to-end, name the depth; if you've consumed analytics and partnered with a specialist, name that too. Both are legitimate; misrepresenting in either direction costs trust in week one. Pair with Manager / Director, Website & Digital Experience and Dual-Track Agile (continuous-discovery cadence).",
    source:
      "Web analytics practice; Google Analytics 4 documentation; CRO and experimentation discipline (Optimizely, VWO, Statsig).",
    tags: ["digital_experience", "analytics", "experimentation", "framework"],
  },
  {
    name: "Enterprise CMS Stewardship",
    category: "digital_experience",
    oneLiner:
      "The platform-management muscle for running a website on an enterprise content management system (Sitecore, Adobe Experience Manager, Drupal Enterprise, Contentful, Optimizely / Episerver) — content models, templates, publishing governance, integrations, releases, and the working partnership with IT that keeps the platform delivering.",
    whenToUse:
      "Digital experience JDs that name CMS platform fluency — Sitecore explicitly, or 'similar enterprise CMS' as a permissive equivalent. The healthcare / insurance market leans heavily on Sitecore and AEM; smaller orgs and modern stacks lean on Contentful, Sanity, or headless setups.",
    vocabulary: [
      "Sitecore",
      "Adobe Experience Manager (AEM)",
      "Drupal Enterprise",
      "Contentful",
      "Optimizely / Episerver",
      "headless CMS",
      "content model",
      "templates / page types",
      "publishing governance",
      "personalization rules",
      "release cadence",
      "platform integration",
      "headless vs. coupled",
    ],
    howToDropIn:
      "\"Enterprise CMS work is less about authoring and more about stewardship — the content model the templates rest on, the publishing process that lets the business move without breaking, the personalization layer if there is one, the integration spine into identity / search / forms / data, and the working partnership with IT on releases. The CMS is the substrate for the entire experience; treat it as a platform, not a tool.\"",
    commonPhrasing: "CMS platform ownership, content platform, Sitecore / AEM administration.",
    notes:
      "Direct substance match — the CMS-migration Story card (forthcoming) is the evidence layer. The healthcare / insurance vertical leans Sitecore and AEM; CMS migrations between major platforms are common career-defining engagements. Worth being honest in interviews about which platforms you have current versus dated fluency in, since major versions and headless conversions have changed the surface considerably. Pair with Manager / Director, Website & Digital Experience and the CMS-migration Story card.",
    source:
      "Enterprise CMS practice (Sitecore, AEM, Drupal Enterprise, Contentful); healthcare / insurance vertical platform conventions.",
    tags: ["digital_experience", "cms", "platform", "framework"],
  },

  // —— Occupant Indices (AI measurement instruments) ————————————————————

  {
    name: "$CPI — Compute Price Index",
    category: "ai_measurement",
    oneLiner:
      "A Consumer-Price-Index-style measurement of what it actually costs to run AI tasks, volume-weighted across four workload tiers (commodity / frontier / reasoning / long-context) and 2,000+ models, with January 2025 = 100 as the baseline.",
    whenToUse:
      "AI procurement, budget projections, model-selection economics, AI cost trajectory analysis. For federal procurement officers, foundation finance teams, and anyone tracking whether 'AI is getting cheaper' is real or hype.",
    vocabulary: [
      "Compute Price Index",
      "$CPI",
      "AI inference cost",
      "token economics",
      "workload tier",
      "commodity / frontier / reasoning / long-context",
      "volume-weighted",
      "yield curve",
      "tier premium",
    ],
    howToDropIn:
      "\"$CPI is a Consumer Price Index for AI compute. We weight it across four workload tiers — commodity, frontier, reasoning, long-context — using volume from over two thousand models. Currently 62 against a January 2025 baseline of 100, meaning AI compute is about 38% cheaper than at the start of 2025, but the trajectory varies sharply by workload.\"",
    commonPhrasing: "AI Compute Price Index, $CPI, AI cost index.",
    notes:
      "One of three Occupant Indices. Distinct from Stanford AI Index and Epoch AI compute-trends work in that it's a procurement-grade methodology with a defined basket and weights, updated weekly. The tool layer is the AI Services Price Reasonableness Worksheet (the federal-procurement application) and the LLM Cost Calculator. Variants exist: $CPI-L (since launch), $CPI-Y (year-over-year), $CPI-Q (quarter-to-date), $CPI-GEN (general purpose), $CPI-FRO (frontier heavy), $CPI-BUD (budget optimized), $CPI-REA (reasoning focus), $CPI-ENT (enterprise mix). Pair with $AIU, $LDI, AI Services Price Reasonableness Worksheet, and the State Capacity AI Story card.",
    source:
      "Ron Bronson, Occupant Indices (occupant.ee/indices). Data: OpenRouter rankings, LiteLLM, llm-prices.com, pricepertoken.com.",
    tags: ["ai_measurement", "procurement", "instrument", "framework"],
  },
  {
    name: "$AIU — AI Economic Activity Index",
    category: "ai_measurement",
    oneLiner:
      "A composite index of AI economic activity modeled on the IMF's Special Drawing Rights — token throughput (60%), inferred spend (30%), and energy use (10%) — read as a single number against a January 2025 baseline of 100.",
    whenToUse:
      "Macro analysis of AI as an economic sector. For policy researchers, journalists, foundation strategy teams, and anyone trying to distinguish actual AI activity growth from market hype.",
    vocabulary: [
      "AI Economic Activity Index",
      "$AIU",
      "AI macro index",
      "token throughput",
      "inferred spend",
      "energy proxy",
      "Special Drawing Rights",
      "composite index",
    ],
    howToDropIn:
      "\"$AIU is a stock-market-style index for AI as an economic sector. It's a weighted composite — 60% token throughput, 30% inferred spend, 10% energy footprint — modeled on the IMF's Special Drawing Rights. Currently 504 against a January 2025 baseline of 100; AI economic activity is up about 5x in 16 months. Nobody else publishes a single number for this; that's the gap it fills.\"",
    commonPhrasing: "AI Activity Index, $AIU, AI macro indicator.",
    notes:
      "One of three Occupant Indices. The IMF SDR modeling is the deliberate methodological signal — single composite read against a baseline, weights tuned to underlying activity drivers. Energy component blends a token-derived proxy (70%, from tier efficiency factors) and a grid-investment growth index (30%, from BloombergNEF annual global grid investment data). Coverage scope: OpenRouter public rankings — a significant but incomplete view; direct API usage, enterprise deployments, and closed-loop systems are not captured. Pair with $CPI, $LDI, and the State Capacity AI Story card.",
    source:
      "Ron Bronson, Occupant Indices (occupant.ee/indices). Data: OpenRouter rankings, LiteLLM, BloombergNEF grid investment data.",
    tags: ["ai_measurement", "macro", "instrument", "framework"],
  },
  {
    name: "$LDI — Labor Displacement Index",
    category: "ai_measurement",
    oneLiner:
      "An original substitution-rate methodology measuring how often AI is actually replacing federal workers when it becomes cheaper than them — combining BLS wage data, AI inference cost from $CPI, and federal procurement records.",
    whenToUse:
      "Any conversation about AI's labor impact in the public sector — federal workforce planning, AI procurement decisions, foundation programs funding workforce-AI work, journalism on AI and labor displacement.",
    vocabulary: [
      "Labor Displacement Index",
      "$LDI",
      "substitution rate",
      "cost-rational substitution",
      "BLS wage data",
      "federal procurement records",
      "workload substitution",
      "cognitive arbitrage",
    ],
    howToDropIn:
      "\"$LDI is the only running measurement of how often AI is actually replacing federal workers when it gets cheaper than them. We combine BLS wage data with AI cost from $CPI to find where AI is already cheaper than a person, then use federal procurement records to see where substitution is actually happening. The current 3.9% rate isn't the story — the gap between cost-rational substitution and actual substitution is.\"",
    commonPhrasing: "Labor Displacement Index, AI substitution rate, AI labor measurement.",
    notes:
      "The most original IP in the Occupant Indices set and the most defensible originality claim. $CPI applies a price-index pattern to a new commodity; $AIU adapts the IMF SDR composite-index pattern; $LDI is a substitution-rate methodology that doesn't exist elsewhere. SNAP Eligibility has a worked end-to-end deep dive. The deliverable client form is the LDI Workload Calculator. Pair with $CPI, $AIU, AI Services Price Reasonableness Worksheet, and the State Capacity AI Story card.",
    source:
      "Ron Bronson, Occupant Indices (occupant.ee/indices). Methodology: BLS wage data + $CPI inference cost + federal procurement records.",
    tags: ["ai_measurement", "labor", "federal", "original_methodology", "instrument", "framework"],
  },
  {
    name: "AI Services Price Reasonableness Worksheet",
    category: "ai_measurement",
    oneLiner:
      "A fill-in procurement determination tool for federal AI buyers, built on the $CPI basket — the working bridge between AI cost measurement and federal acquisition practice.",
    whenToUse:
      "Federal AI procurement determinations; state and local AI buy decisions where price-reasonableness analysis is required; foundation grant due diligence on AI services pricing; benchmark-rate questions in any AI procurement context.",
    vocabulary: [
      "price reasonableness",
      "procurement determination",
      "AI services worksheet",
      "benchmark rate",
      "FAR price analysis",
      "fair and reasonable",
    ],
    howToDropIn:
      "\"The Price Reasonableness Worksheet is the bridge between the measurement work and federal procurement. It's a fill-in tool that uses the $CPI basket as the benchmark for an AI-services price-reasonableness determination — what FAR requires, but with a defensible methodology behind the benchmark rate instead of a guess. Federal AI buyers use it as a starting point; the rates are anchored to the same basket as $CPI.\"",
    commonPhrasing: "Price reasonableness worksheet, AI procurement worksheet.",
    notes:
      "The procurement-grade tool layer on top of $CPI — the artifact that translates measurement into operational practice, the specific 'bridge between policy and deployment' the Public Mechanics framing is built on. Disclaimer noted on the live tool: benchmark rates predate the current data; treat as a starting point, not a current quote. Pair with $CPI and the State Capacity AI Story card.",
    source:
      "Ron Bronson, Occupant Indices (occupant.ee). Built on the $CPI basket; FAR price-reasonableness practice.",
    tags: ["ai_measurement", "procurement", "federal", "tool", "framework"],
  },

  // —— Service design (consumer marketplace / AI-augmented) ——————————————

  {
    name: "Principal Service Designer (Consumer Marketplace, AI-Augmented)",
    category: "service_design",
    oneLiner:
      "The senior individual-contributor service-designer archetype at consumer marketplaces (real estate, lending, mobility, hospitality) — owning multi-year experience vision for an integrated customer journey, working across product / engineering / ops / marketing / sales enablement, with explicit ask to build AI-augmented service-design practice including agentic capabilities for operating standards.",
    whenToUse:
      "Principal / Staff / Senior Service Designer postings at consumer marketplaces with multi-channel transactions — Zillow / Compass / Redfin / Rocket Mortgage / Better.com (real estate and lending); Airbnb / Vrbo (hospitality); Uber / Lyft (mobility); Carvana / CarMax (auto); Robinhood / Square / Stripe (consumer fintech). High-stakes, complex-transaction businesses where the customer journey crosses many channels and lines of business.",
    vocabulary: [
      "service design",
      "experience strategy",
      "service blueprint",
      "journey map",
      "multi-channel orchestration",
      "operating standards",
      "agentic AI capabilities",
      "AI-augmented service design",
      "experience vision",
      "lines of business",
      "frontline operations",
      "high-stakes transaction",
    ],
    howToDropIn:
      "\"At consumer-marketplace scale the work isn't designing a screen — it's orchestrating the experience across product, ops, sales enablement, marketing, and engineering, with operating standards the frontline can actually hold itself to. The AI-augmented layer is the new part: agents that codify operating standards into runtime behavior, AI tools that compress the service-design loop. Principal IC is where the craft lives; the leadership read is influence without direct authority across silos.\"",
    commonPhrasing: "Principal Service Designer, Staff Service Designer, Senior Experience Strategist.",
    notes:
      "Sits at the intersection of service-design craft and AI / agent fluency — most candidates carry one of those, not both. Principal IC role; influence-without-direct-authority leadership model. Private-sector consumer marketplace, monetization context. Pair with AI-Augmented Service Design, Multi-Channel Service Orchestration, Service Blueprint, Journey Mapping, and Multi-Audience Digital Governance.",
    source:
      "Validated against active 2026 postings: Zillow 'Principal Service Designer, Home Loans'; analogous roles at Airbnb (Staff Service Designer), Rocket Mortgage, Carvana, Compass. Pattern emergent across consumer marketplaces with multi-channel high-stakes transactions.",
    tags: ["service_design", "consumer_marketplace", "ai_augmented", "role", "framework"],
  },
  {
    name: "AI-Augmented Service Design (Emerging Discipline)",
    category: "service_design",
    oneLiner:
      "The emerging practice of using AI and agentic capabilities inside service-design work — turning operating standards into runtime agents, compressing the service-design discovery loop, using AI to generate and stress-test journey-map variants, and designing services that include AI agents as service actors alongside humans.",
    whenToUse:
      "JDs that ask for AI-augmented service design, agentic AI capabilities for operating standards, or AI-enabled tools and workflows in a service-design context. New enough that most service designers haven't built this muscle yet — a positioning advantage for designers who have.",
    vocabulary: [
      "AI-augmented service design",
      "agentic capabilities",
      "operating standards as agents",
      "service actors (human and AI)",
      "AI-in-the-loop journey design",
      "service-design tooling",
      "agentic operating standards",
    ],
    howToDropIn:
      "\"AI-augmented service design isn't 'use AI to write your journey map.' It's two harder things: agents that codify operating standards into runtime behavior so the frontline ships consistent experience without scripts, and AI service actors that share the service blueprint with human ones. The discipline is young — most service designers haven't built this muscle yet — but it's where consumer marketplaces are going because the experience can't be standardized otherwise.\"",
    commonPhrasing: "AI-augmented service design, agentic service design, AI service blueprint.",
    notes:
      "Genuinely emerging intersection — most service designers can't speak to it yet, and most AI builders don't think in service-blueprint terms. Small population carries both muscles. Zillow's Principal Service Designer JD is one of the cleaner public examples of this discipline being requested explicitly. Pair with Principal Service Designer (Consumer Marketplace, AI-Augmented), Service Blueprint, and the agentic-delivery and forward-deployed framework cards.",
    source:
      "Emerging practice (consumer marketplace and service-design teams, 2025–2026); Zillow Principal Service Designer JD as a representative public example.",
    tags: ["service_design", "ai_augmented", "emerging_discipline", "framework"],
  },
  {
    name: "Multi-Channel Service Orchestration (High-Stakes Consumer Transaction)",
    category: "service_design",
    oneLiner:
      "The service-design specialty inside consumer marketplaces where the customer journey crosses many channels and lines of business — digital product, frontline ops, sales enablement, marketing, back-office operations — for a single high-stakes transaction (home buying, lending, leasing, financial onboarding).",
    whenToUse:
      "Consumer-marketplace service-design JDs where the role explicitly names cross-channel orchestration, working through organizational silos, or coordinating efforts across product / engineering / ops / sales enablement / marketing. Common at real estate, lending, hospitality, and high-trust fintech.",
    vocabulary: [
      "multi-channel orchestration",
      "cross-line-of-business coordination",
      "frontline operations",
      "high-stakes transaction",
      "service operating standards",
      "channel handoff",
      "experience consistency",
      "silo navigation",
    ],
    howToDropIn:
      "\"High-stakes consumer transactions like home buying or financing aren't single-channel experiences — they cross digital product, frontline operators (loan officers, agents), marketing, sales enablement, and back-office ops. The service-design job is keeping the customer's mental model of one experience intact while five organizations each ship their own piece of it. The artifact is a service blueprint with operating standards each line of business can hold itself to, not a feature spec.\"",
    commonPhrasing: "Multi-channel service design, end-to-end journey orchestration, cross-LOB service design.",
    notes:
      "The vocabulary in this card is private-sector-flavored; substitute the right idioms for client context — the underlying muscle is the same and maps to multi-sided service design in government, regulated industries, and consumer marketplaces alike. Pair with Service Blueprint, Multi-Audience Digital Governance, and the Principal Service Designer (Consumer Marketplace, AI-Augmented) card.",
    source:
      "Consumer-marketplace service-design practice (real estate, lending, fintech, 2025–2026); Zillow Principal Service Designer JD as a representative example.",
    tags: ["service_design", "consumer_marketplace", "orchestration", "framework"],
  },

  // —— AI Ethics & Responsible AI ————————————————————————————————————————

  {
    name: "AI Ethicist / Responsible AI Specialist (Embedded IC)",
    category: "ai_ethics",
    oneLiner:
      "The senior individual-contributor responsible-AI archetype embedded in a tech org's AI/ML function — primary authority on responsible AI inside the company, embedded with ML Engineering and Product on model design and feature work, internal trainer and culture-builder, and external representative to AI partners and policymakers. Typically reports to CTO or CDO; not usually a people-manager.",
    whenToUse:
      "AI Ethicist, Responsible AI Specialist, Responsible AI Lead, AI Ethics Lead postings at private-sector tech companies with meaningful internal AI/ML capability. Common at EdTech (Macmillan Learning, Pearson, McGraw-Hill, Coursera), enterprise SaaS, healthcare tech, fintech, large media, and sectors with regulatory exposure on AI.",
    vocabulary: [
      "AI Ethicist",
      "Responsible AI",
      "AI Review Committee",
      "embedded ethics",
      "model design review",
      "MLOps governance",
      "algorithmic impact assessment",
      "bias audit",
      "model cards",
      "data provenance",
      "audit trail",
      "fairness / explainability / privacy",
    ],
    howToDropIn:
      "\"The AI Ethicist seat is embedded — not a separate ethics function lobbing memos at ML Engineering, but inside the room when models get designed and features get conceived. The output is governance checkpoints in the MLOps pipeline, AI Review Committee processes, algorithmic impact assessments and bias audits on the actual models, and the documentation standards (model cards, data provenance, audit trails) that make the work auditable later. Plus the external-rep job: partner working groups with Google, Anthropic, Microsoft, OpenAI; regulatory bodies; institutional customers.\"",
    commonPhrasing: "AI Ethicist, Responsible AI Specialist, AI Ethics Lead.",
    notes:
      "Distinct from the AI Governance & Responsible AI Leadership card in that this is a senior IC role embedded with ML/Engineering, not an executive policy leader. Typically reports to CTO or CDO. Tech-fluency floor: Python, reading ML code, understanding model architecture sufficient to engage credibly with data scientists and ML engineers. The role is a hybrid technical-ethics seat, not a pure policy/compliance role. Pair with Algorithmic Impact Assessment & Bias Audit Practice, AI Regulatory Landscape, and AI Governance & Responsible AI Leadership.",
    source:
      "Validated against 2026 postings: Macmillan Learning 'AI Ethicist / Responsible AI Specialist' (Austin, TX); similar roles at Salesforce, Microsoft Office of Responsible AI, Google Responsible AI team, Pearson, IBM, Anthropic Safety.",
    tags: ["ai_ethics", "responsible_ai", "embedded", "role", "framework"],
  },
  {
    name: "Algorithmic Impact Assessment & Bias Audit Practice",
    category: "ai_ethics",
    oneLiner:
      "The technical-audit specialty inside responsible AI work — running algorithmic impact assessments (AIAs) and bias audits on machine learning models prior to deployment, establishing governance checkpoints in the MLOps pipeline, and producing the documentation standards (model cards, data provenance, audit trails) that make the work auditable later.",
    whenToUse:
      "Responsible AI / AI Ethicist roles that explicitly name AIAs, bias audits, MLOps governance, or model cards. Increasingly common as EU AI Act enforcement begins to mandate AIAs for high-risk systems and US sectoral regulators (HHS, FTC, state AGs) follow.",
    vocabulary: [
      "algorithmic impact assessment (AIA)",
      "bias audit",
      "fairness metrics",
      "demographic parity",
      "equalized odds",
      "model card",
      "data provenance",
      "datasheet for datasets",
      "audit trail",
      "MLOps governance checkpoint",
      "explainability (XAI)",
      "uncertainty quantification",
    ],
    howToDropIn:
      "\"AIAs and bias audits aren't a one-time compliance check — they're a practice. The audit is the artifact; the governance checkpoint in the MLOps pipeline is the operating instrument; the model card and data-provenance documentation are the auditable record. Done well, they catch problems before deployment instead of after; done poorly, they're security theater. The discipline is matching fairness metrics to the actual harm and stakeholder being protected, not just running the same metric across every model.\"",
    commonPhrasing: "Algorithmic impact assessment, bias audit, AI fairness audit, AIA.",
    notes:
      "Adjacent to but distinct from MLOps engineering (which owns the pipeline plumbing) and from policy/compliance (which owns the regulatory mapping). The AIA / audit practitioner is the technical-ethics specialist who knows which fairness metric applies to which deployment context. NIST AI RMF Map and Measure functions are the canonical reference; EU AI Act Article 9 mandates risk management systems for high-risk AI. Pair with AI Ethicist (Embedded IC), AI Regulatory Landscape, and AI Governance & Responsible AI Leadership.",
    source:
      "NIST AI Risk Management Framework (2023, current revisions); EU AI Act high-risk system requirements; algorithmic-accountability academic and practitioner literature; Macmillan Learning AI Ethicist JD (2026) as a representative example.",
    tags: ["ai_ethics", "audit", "mlops", "framework"],
  },
  {
    name: "AI Regulatory Landscape (EU AI Act, NIST AI RMF, US Sectoral)",
    category: "ai_ethics",
    oneLiner:
      "The regulatory knowledge base required for AI ethics, governance, and responsible-AI roles — EU AI Act (enforcement underway), NIST AI Risk Management Framework (the de facto US voluntary standard), FTC AI guidance, US state-level AI legislation (Colorado, California, New York, Texas), and sectoral regulations (HHS, FERPA, COPPA, GDPR Article 22 in AI contexts).",
    whenToUse:
      "Any AI ethics / responsible AI / AI policy role; AI procurement decisions; vendor diligence; institutional customer conversations on AI compliance. JDs that list 'EU AI Act, NIST AI RMF, FTC AI guidance, and emerging state-level legislation' as required knowledge.",
    vocabulary: [
      "EU AI Act",
      "high-risk AI system",
      "AI Act Article 9 (risk management)",
      "NIST AI Risk Management Framework",
      "NIST AI RMF Govern / Map / Measure / Manage",
      "FTC AI guidance",
      "Colorado AI Act (SB24-205)",
      "California AB 2013 / SB 942",
      "NYC Local Law 144",
      "Texas TRAIGA",
      "ISO/IEC 42001",
      "FERPA (student data)",
      "COPPA (children's data)",
      "GDPR Article 22 (automated decisions)",
    ],
    howToDropIn:
      "\"The regulatory stack is moving fast. EU AI Act enforcement timelines for high-risk systems started in 2025 and broaden through 2027. NIST AI RMF is the voluntary US framework that federal procurement, financial regulators, and federal agencies are de-facto requiring. State-level AI legislation is fragmenting — Colorado AI Act, California's package, NYC's hiring-decisions law, Texas TRAIGA. For sectoral work it's HHS for healthcare, FERPA / COPPA for education, GDPR Article 22 for EU automated decisions. The job isn't reading every word — it's knowing what bites and where, and operationalizing the obligations into the AI development lifecycle.\"",
    commonPhrasing: "AI regulatory landscape, EU AI Act compliance, NIST AI RMF, AI governance compliance.",
    notes:
      "Foundational knowledge for AI Ethicist, Responsible AI, and AI Governance roles, and increasingly for AI Product, AI Procurement, and AI Strategy roles. Pair with AI Ethicist (Embedded IC), AI Governance & Responsible AI Leadership, Algorithmic Impact Assessment & Bias Audit Practice, and the AI Services Price Reasonableness Worksheet (which sits inside the federal AI procurement regulatory context).",
    source:
      "EU AI Act (Regulation 2024/1689); NIST AI Risk Management Framework (NIST AI 100-1, 2023); FTC AI guidance materials; ISO/IEC 42001 (2023) AI management systems standard; state-level AI legislation 2024–2026.",
    tags: ["ai_ethics", "regulatory", "compliance", "framework"],
  },

  // —— Product Management (regulated consumer / AI-augmented) ————————————

  {
    name: "Product Manager, Digital Experience (Regulated Consumer Industries)",
    category: "product_management",
    oneLiner:
      "The digital-experience product-manager archetype at consumer companies in highly regulated industries — cannabis, alcohol, firearms, gambling, prescription/pharmacy, age-restricted retail — where the ecommerce surface has to handle state-by-state regulatory variance, age verification, restricted advertising, payment-processor constraints, and multi-channel commerce (web + mobile + kiosk + retail-store integration) at the same time.",
    whenToUse:
      "Product Manager / Senior PM / Principal PM postings at cannabis MSOs (Green Thumb, Curaleaf, Trulieve, Verano, Cresco), alcohol ecommerce (Drizly, ReserveBar, Total Wine digital), firearms ecommerce, gambling and iGaming (DraftKings, FanDuel digital), and age-restricted retail. The 6–8 year PM experience floor is standard.",
    vocabulary: [
      "regulated ecommerce",
      "age verification",
      "state-by-state compliance",
      "payment processor constraints",
      "restricted advertising",
      "MSO (multi-state operator)",
      "kiosk + mobile + web",
      "click-and-collect",
      "in-store fulfillment integration",
    ],
    howToDropIn:
      "\"Regulated-consumer ecommerce is product management with two extra dimensions: every state has its own compliance regime (and operating-license terms), and the entire payment-and-advertising stack is constrained. The PM job is the standard ecommerce loop — discovery, spec, ship, measure, iterate — but the constraints turn many ordinary product decisions into compliance decisions. Good roles ship from inside that constraint; bad ones treat compliance as a separate team's problem.\"",
    commonPhrasing: "Regulated ecommerce PM, cannabis PM, age-restricted retail product management.",
    notes:
      "Cannabis specifically is unusual because of the state-level Schedule I patchwork — different licenses, products, ad rules, banking and payment realities per state. MSOs operate across that variance. Adjacent industries with similar shape: alcohol (state-by-state DTC ship laws), firearms (FFL / 4473 constraints), gambling (state licensing), prescription / pharmacy (HIPAA + DEA + state pharmacy boards). The product-management muscle for any one of these transfers to the others reasonably well; the regulatory specifics don't. Pair with AI Spec-Driven Development, Multi-Channel Service Orchestration, and Multi-Audience Digital Governance.",
    source:
      "Validated against 2026 postings: Green Thumb Industries 'Product Manager, Digital Experience' (Chicago / remote CST, May 2026); analogous roles across cannabis MSOs and adjacent regulated-consumer verticals.",
    tags: ["product_management", "regulated_industry", "ecommerce", "role", "framework"],
  },
  {
    name: "AI Spec-Driven Development (Spec + Working Prototype as Source of Truth)",
    category: "product_management",
    oneLiner:
      "The emerging product-management practice where the artifact handed to engineering before dev kickoff is not a written spec or a static Figma file but a working AI-generated prototype plus a detailed specification — together serving as the source of truth for engineering, QA, and cross-functional partners.",
    whenToUse:
      "Modern product-management JDs that explicitly name 'spec-driven development,' 'AI spec-driven development,' or 'detailed product specifications with working prototypes that serve as the source of truth.' Increasingly common in 2025–2026 as Claude Code, v0, Cursor, and similar tools make working prototypes cheap to produce.",
    vocabulary: [
      "spec-driven development",
      "AI spec-driven development",
      "working prototype",
      "source of truth",
      "executable spec",
      "dev-ready spec",
      "PRD + prototype",
    ],
    howToDropIn:
      "\"Spec-driven development with a working prototype is the new dev-ready artifact. Instead of a PRD that engineering interprets and a separate Figma file that designers maintain, the spec ships with an AI-generated prototype that demonstrates the feature, gives QA something to test against, and lets cross-functional partners see what will be built before it's built. The PM authors both. The skill is writing specs and prompts that hold up under engineering scrutiny.\"",
    commonPhrasing: "Spec-driven development, AI-assisted PRD, prototype-as-spec.",
    notes:
      "Emerging fast. Tools commonly named: Claude Code, v0 by Vercel, Cursor, Bolt, Replit Agent. The PM-facing pattern is converging on: PM authors a spec, prompts a prototype, iterates the prototype with the team before development resources commit. Reduces engineering rework but raises the PM's bar on technical fluency and prompt engineering. Pair with Product Manager, Digital Experience (Regulated Consumer Industries), and the agentic-delivery framework cards.",
    source:
      "Emerging 2025–2026 practice; Green Thumb Industries PM JD as a representative public mention of the practice; tooling: Claude Code, v0, Cursor, Bolt, Replit Agent.",
    tags: ["product_management", "ai_augmented", "spec_driven", "framework"],
  },

  // —— AI Enablement (higher ed / institutional) ————————————————————————

  {
    name: "Director of AI Enablement (Higher Ed / Academic Institutions)",
    category: "ai_enablement",
    oneLiner:
      "The director-level AI enablement archetype at universities and academic institutions — frequently a research-faculty or open-rank-faculty appointment leading a centralized team that partners with faculty and staff to prototype AI-enabled tools for teaching, research, and productivity while serving as connective tissue across schools and units.",
    whenToUse:
      "AI enablement, AI innovation, or AI strategy director / associate director / chief AI officer postings at universities, business schools, medical schools, and research institutions. Often structured as Research Faculty, Open Rank Faculty, or staff-director positions. Examples: Kellogg School AI Enablement (Northwestern), MIT AI Sloan Initiative, Wharton AI & Analytics, Stanford GSB AI for Business, Harvard Business School AI Initiative, plus university-wide variants (Princeton, Penn, Columbia, NYU).",
    vocabulary: [
      "AI enablement",
      "faculty partnership",
      "academic AI strategy",
      "AI for teaching",
      "AI for research",
      "centralized innovation team",
      "connective tissue",
      "translator / experimenter / navigator",
      "voluntary adoption",
      "research faculty appointment",
      "open rank",
    ],
    howToDropIn:
      "\"AI enablement in a university is a different shape than in a corporate. Faculty have academic freedom and don't take direction; staff and administration have hierarchies. The seat is part product manager, part academic translator, part vendor wrangler, part trusted advisor. The work is voluntary adoption — you prototype things faculty want to use and earn the right to do the next thing. It's also organizational diplomacy: streamlining coordination across schools, units, and central IT without owning any of them.\"",
    commonPhrasing: "Director of AI Enablement, AI Innovation Director, Director of AI Strategy (Higher Ed).",
    notes:
      "Distinct from the corporate AI Transformation & Enablement archetype because of academic governance structure — voluntary adoption rather than top-down rollout, faculty rather than employees as primary stakeholders, research-faculty appointment instead of staff status in many cases. The Kellogg posting names the position as Open Rank Research faculty at $220–250k base for a 12-month appointment. Common reporting line is Dean or Vice Provost / Provost for Academic Innovation. Tenure-track variants exist at some institutions but are rarer. Pair with Centralized AI Enablement Team (Innovation Catalyst Model), Director / Head of AI Transformation & Enablement, and AI Adoption & Capability Building.",
    source:
      "Validated against 2026 postings: Kellogg School of Management 'Director of AI Enablement' (Open Rank Research, $220–250k, May 2026, Evanston / Northwestern); analogous positions at MIT, Wharton, Stanford GSB, Harvard, Princeton, Penn, Columbia, NYU.",
    tags: ["ai_enablement", "higher_ed", "academic", "role", "framework"],
  },
  {
    name: "Centralized AI Enablement Team (Innovation Catalyst Model)",
    category: "ai_enablement",
    oneLiner:
      "The team-structure pattern where a small central group serves as innovation catalyst — rapidly prototyping and iterating AI-enabled tools, acting as translator and navigator between stakeholders and vendors, and managing internal and vendor complexity on behalf of the rest of the org — distinct from a standing engineering team or an outsourced consulting engagement.",
    whenToUse:
      "JDs that describe a centralized small team for AI innovation, an innovation-catalyst function, or a 'connective tissue' role across an organization. Common at universities, large nonprofits, foundations, federal agencies (USDS, 18F, CoE), state IT shops, and large enterprises spinning up AI offices.",
    vocabulary: [
      "innovation catalyst",
      "centralized AI team",
      "connective tissue",
      "translator / experimenter / navigator",
      "prototype-test-iterate loop",
      "vendor complexity management",
      "voluntary adoption",
      "internal point of entry",
      "general AI capabilities",
    ],
    howToDropIn:
      "\"A centralized innovation-catalyst team is a specific operating pattern: small, fast, focused on prototyping; not a standing platform team and not a consulting engagement. The work is rapidly building things that demonstrate a possibility, then handing them off or scaling them with whoever owns the long-term surface. The trap is becoming a permanent skunkworks that ships demos nobody adopts; the discipline is voluntary-adoption metrics — does the org actually want what you built, and does anyone use it after the first month.\"",
    commonPhrasing: "Innovation catalyst team, centralized AI enablement, AI experimentation team.",
    notes:
      "Federal-government analog: the USDS / 18F / Centers of Excellence pattern — small central teams that prototype, embed, and hand off. University analog: the Kellogg AI Enablement Team posting. Corporate analog: an internal innovation lab or AI center of excellence (e.g., the Schwab AI Fluency & Enablement Programs team or similar). Common failure mode: the team becomes a feature factory disconnected from operational priorities; success mode is being measured on voluntary adoption and downstream operational uptake, not output volume. Pair with Director of AI Enablement (Higher Ed), AI Adoption & Capability Building, and AI Fluency Programs (Enterprise Workforce).",
    source:
      "Innovation-catalyst team pattern. Federal: USDS, 18F, GSA Centers of Excellence. University: Kellogg AI Enablement Team (Northwestern, 2026), Stanford d.school. Corporate: enterprise AI centers of excellence 2024–2026.",
    tags: ["ai_enablement", "team_structure", "innovation", "framework"],
  },

  // —— Government IT delivery (pod-and-guild model) ——————————————————————

  {
    name: "Enterprise Practice Lead / Guild Lead (State Government IT)",
    category: "govt_delivery",
    oneLiner:
      "The discipline-leadership role inside state and city government IT shops organized in pods + guilds — owns the standards, playbooks, training, and craft community for a specific discipline (delivery management, product, design, engineering, security) across all pods, without owning the pod practitioners directly. Distinct from people-management roles (IT Directors run the pods).",
    whenToUse:
      "Enterprise Practice Lead, Guild Lead, Practice Lead, or Discipline Lead postings at state and city government IT shops with pod-and-guild structures. Colorado OIT, NY State Office of IT Services, NJ Office of Innovation, California Department of Technology, and similar. Federal analogs: USDS leadership roles, 18F Practice Areas, GSA Centers of Excellence.",
    vocabulary: [
      "enterprise practice lead",
      "guild lead",
      "pod-and-guild model",
      "federated practitioner community",
      "discipline standards",
      "craft community",
      "practice infrastructure",
      "playbooks",
      "modular procurement",
      "statements of objectives (SOO)",
      "modern delivery management",
    ],
    howToDropIn:
      "\"The Enterprise Practice Lead seat is the discipline-leadership role inside a pod-and-guild government IT shop. The pods deliver; the guilds keep the craft current. The Practice Lead doesn't run pods or manage practitioners — that's the IT Director's job. The Practice Lead owns standards, playbooks, training, retros across pods, and the career-pathway work that lets a delivery manager grow without becoming a manager of managers.\"",
    commonPhrasing: "Enterprise Practice Lead, Guild Lead, Discipline Lead, Practice Area Lead.",
    notes:
      "The pod-and-guild model is a deliberate alternative to functional-matrix or pure team-topology structures. Pods are full-stack cross-functional delivery teams aligned to a customer agency or service area. Guilds are cross-pod craft communities — people in the same discipline across pods who share standards, peer-critique sprint governance, and keep the practice current. Most state IT shops moving toward modern delivery (Colorado OIT, NY OITS, NJ Innovation, California DoT) have some version of this. The Practice Lead role is the most senior craft seat short of CTO or deputy CIO. Pair with Pod + Guild Operating Model, 18F De-Risking Framework for Government Software, and GDS DDaT Framework.",
    source:
      "Validated against 2026 postings: Colorado OIT 'Enterprise Practice Lead, Delivery Management' ($115–145k, remote in CO, May 2026); similar role structures at NY OITS, NJ Office of Innovation, California Department of Technology.",
    tags: ["govt_delivery", "state_government", "guild_lead", "role", "framework"],
  },
  {
    name: "Pod + Guild Operating Model (State Government IT)",
    category: "govt_delivery",
    oneLiner:
      "The federated team-structure pattern used by state and city government IT shops modernizing delivery: pods are full-stack cross-functional teams aligned to agencies or services; guilds are cross-pod craft communities that hold discipline standards. People-management goes through IT Directors; craft and standards go through Guild / Practice Leads.",
    whenToUse:
      "Government IT modernization contexts; JDs that describe pods, guilds, federated practitioner communities, or distinguish people-management (ITD) from craft-leadership (Practice Lead). Common at state OITs and city CIO shops following USDS / 18F / Code for America patterns.",
    vocabulary: [
      "pod",
      "guild",
      "federated team structure",
      "cross-functional delivery team",
      "craft community",
      "IT Director (ITD)",
      "embedded delivery manager",
      "agency-aligned pod",
      "discipline standards",
    ],
    howToDropIn:
      "\"Pods plus guilds is the operating model: pods are full-stack delivery teams aligned to customer agencies; guilds are cross-pod craft communities that keep the practice current. ITDs manage pod people; Practice Leads steward the discipline. The model is deliberately federated — keeps pods agile and customer-aligned while preventing the craft from fragmenting across teams.\"",
    commonPhrasing: "Pods and guilds, federated team structure, agency pods.",
    notes:
      "Borrowed from the Spotify model (pods / squads + tribes / guilds) and adapted for government delivery context with agency-aligned pods and discipline-aligned guilds. The structure is intentional about separating people-management (ITDs) from craft-leadership (Guild / Practice Leads) — common in functional-matrix orgs, rare in government. Colorado OIT, NY OITS, NJ Office of Innovation are using variants. Pair with Enterprise Practice Lead / Guild Lead, Team Topologies, and Forward-Deployed Engineering (the embedded-team analog).",
    source:
      "Spotify model (pods / squads + tribes / guilds, 2012) adapted for government delivery 2018–2026 (USDS, 18F, Colorado OIT, NY OITS, NJ Office of Innovation, Code for America).",
    tags: ["govt_delivery", "operating_model", "team_structure", "framework"],
  },
  {
    name: "18F De-Risking Framework for Government Software",
    category: "govt_delivery",
    oneLiner:
      "The 18F evidence-based framework for de-risking custom software acquisition in government — modular procurement, Statements of Objectives (SOO), time-and-materials with caps, performance-based contracting, empowered product ownership — built around the finding that only 13% of large government software projects succeed under traditional waterfall approaches.",
    whenToUse:
      "Any government IT modernization context that names 18F, de-risking, modular procurement, SOO contracts, T&M contracting, or the 13% success-rate evidence. Common in state and federal IT shops adopting modern delivery practice; cited in many state CIO and CTO modernization strategies.",
    vocabulary: [
      "18F de-risking",
      "13% success rate",
      "modular procurement",
      "Statement of Objectives (SOO)",
      "Statement of Work (SOW) distinction",
      "time-and-materials with caps",
      "performance-based services contracting",
      "empowered product ownership",
      "outcome-based contracting",
      "agile procurement",
    ],
    howToDropIn:
      "\"The 18F de-risking framework starts from a hard finding: only 13% of large government software projects succeed under traditional waterfall procurement. The framework substitutes specific moves: modular procurement (small repeatable buys), Statements of Objectives (what we want, not how to build it), time-and-materials with caps (commercial discipline without fixed-scope rigidity), empowered product ownership (agency owns priorities, vendor delivers continuously). The case is measurable, not stylistic.\"",
    commonPhrasing: "18F de-risking, agile procurement, modular procurement, SOO contracting.",
    notes:
      "Canonical reference is the 18F De-Risking Guide (derisking-guide.18f.gov) and the State Software Budgeting Handbook. The Federal Field Guide and State Field Guide both extend the framework into agency-side practice. State governments adopting these include Colorado OIT (explicitly cited in the Enterprise Practice Lead JD), California DoT, NY OITS, NJ Office of Innovation. Pair with Pod + Guild Operating Model, Enterprise Practice Lead / Guild Lead, Dual-Track Agile, and the eAPD Story card (a citable case of the practice in execution).",
    source:
      "18F De-Risking Guide (derisking-guide.18f.gov); State Software Budgeting Handbook; State Field Guide; Federal Field Guide. Originated at 18F (GSA) 2015–2020 and expanded across state CIO communities 2020–2026.",
    tags: ["govt_delivery", "18f", "procurement", "framework"],
  },
  {
    name: "GDS DDaT Framework (Digital, Data and Technology Profession)",
    category: "govt_delivery",
    oneLiner:
      "The UK Government Digital Service's Digital, Data and Technology Profession framework — the canonical reference for civil-service technology-discipline career progression, with detailed role definitions, skill levels, and progression paths across delivery management, product, design, engineering, data, and operations. Widely adopted as a reference by US state IT shops modernizing their career frameworks.",
    whenToUse:
      "Government IT career-pathway design; delivery manager progression frameworks; competency mapping for technology disciplines in public sector. JDs that name GDS DDaT, GDS Delivery Manager progression, or 'a career pathway that distinguishes modern delivery competency from classical project management' generally reference this framework.",
    vocabulary: [
      "GDS DDaT",
      "Digital, Data and Technology Profession",
      "delivery manager (associate / mid / senior / lead / head)",
      "skill level definitions",
      "civil service progression",
      "head of delivery management",
      "GDS Service Manual",
    ],
    howToDropIn:
      "\"GDS DDaT is the canonical career-progression reference for technology disciplines in government — the UK created it for the civil service and US state IT shops use it as a model because almost nobody else has published comparable role definitions. For delivery managers it defines progression from associate to mid to senior to lead to head of delivery management, with explicit skill definitions at each level. Most state modernization efforts cite it as a reference even if they're not adopting it verbatim.\"",
    commonPhrasing: "GDS DDaT, DDaT framework, Digital and Technology Profession Capability Framework.",
    notes:
      "Originated at the UK Government Digital Service (GDS) and is now maintained by the Central Digital and Data Office (CDDO) within the UK Cabinet Office. The current iteration is the Digital and Technology Profession Capability Framework. Widely referenced by US state IT shops including Colorado OIT (cited explicitly in the Enterprise Practice Lead JD), USDS, 18F, NJ Office of Innovation, NY OITS. Pair with Enterprise Practice Lead / Guild Lead, Pod + Guild Operating Model, and the 18F De-Risking Framework.",
    source:
      "UK Government Digital Service (GDS); Central Digital and Data Office (CDDO), UK Cabinet Office; Digital and Technology Profession Capability Framework. Originated 2014–2016 and continuously updated.",
    tags: ["govt_delivery", "career_framework", "gds", "framework"],
  },

  // —— Acquisition / procurement (federal + state government) ————————————

  {
    name: "Federal & State Acquisition Register (Vocabulary Stack for Non-Contracting-Officers)",
    category: "acquisition",
    oneLiner:
      "The working vocabulary of federal and state government acquisition — contract types, procurement vehicles, source-selection methods, performance management, key statutes — pitched at the level needed to talk fluently with contracting officers, program leadership, and modernization-team practitioners without having held a CO warrant.",
    whenToUse:
      "Government IT modernization roles where the person needs to be conversant with acquisition (Practice Leads, Delivery Managers, Product Leads, Chief Digital Officers) without being a contracting officer. Particularly relevant for state-government IT modernization seats that work alongside acquisition staff but don't sit in the acquisition org.",
    vocabulary: [
      "FAR (Federal Acquisition Regulation)",
      "DFARS (Defense FAR Supplement)",
      "agency supplements (DOI AR, HHSAR, etc.)",
      "state acquisition code (e.g., Colorado CRS Title 24)",
      "Procurement Integrity Act",
      "FFP (Firm Fixed Price)",
      "T&M (Time and Materials)",
      "T&M with cap / NTE (Not to Exceed)",
      "CPFF (Cost Plus Fixed Fee)",
      "IDIQ (Indefinite Delivery, Indefinite Quantity)",
      "GSA Multiple Award Schedule (MAS)",
      "GWAC (Government-Wide Acquisition Contract)",
      "BPA (Blanket Purchase Agreement)",
      "NASPO ValuePoint (state cooperative)",
      "Statement of Objectives (SOO)",
      "Statement of Work (SOW)",
      "Performance Work Statement (PWS)",
      "RFP / RFQ / RFI",
      "J&A (Justification and Approval)",
      "Sources Sought Notice",
      "Best Value Trade-Off (BVT)",
      "Lowest Price Technically Acceptable (LPTA)",
      "CPARS (Contractor Performance Assessment Reporting System)",
      "QASP (Quality Assurance Surveillance Plan)",
      "Contract modification (mod)",
      "Modular procurement",
      "Performance-based services contracting",
      "Empowered product ownership",
      "Bid protest (GAO, COFC, agency-level)",
      "OFPP (Office of Federal Procurement Policy)",
    ],
    howToDropIn:
      "\"Talking the register means using the actual instruments instead of colloquial equivalents. 'We need a fixed-price contract' becomes 'FFP'; 'hourly contractors with a budget cap' becomes 'T&M with a cap'; 'pre-vetted vendor list' becomes 'BPA' or 'GWAC task order' or 'GSA Schedule'; 'change order' becomes 'contract modification' or 'mod'; 'protest' becomes 'GAO protest' for federal or the state-specific protest mechanism. The point isn't vocabulary for its own sake; it's that contracting officers can't take 'colloquial-equivalent' instructions and translate them — they need the actual instrument named.\"",
    commonPhrasing: "Acquisition vocabulary, contracting register, procurement language.",
    notes:
      "Intentionally a vocabulary stack rather than a how-to. Contract law and acquisition strategy is a separate competency; this is the speak-the-language layer for non-COs who work alongside acquisition staff. Pair with Contract Type Selection (FFP / T&M / CPFF / IDIQ), Modern Delivery Procurement (18F-Style), 18F De-Risking Framework for Government Software, AI Services Price Reasonableness Worksheet, and the acquisition translation rows.",
    source:
      "FAR (Federal Acquisition Regulation); state acquisition codes; OFPP guidance; 18F De-Risking Guide; CO Department of Personnel & Administration procurement publications; practitioner experience.",
    tags: ["acquisition", "procurement", "register", "vocabulary", "framework"],
  },
  {
    name: "Contract Type Selection (FFP / T&M / CPFF / IDIQ)",
    category: "acquisition",
    oneLiner:
      "Quick-reference taxonomy of government contract types with when-to-use guidance — Firm Fixed Price for known scope at known price; Time and Materials (with cap) for scope-flexible work paid for hours within a ceiling; Cost-Plus variants for high-uncertainty R&D; IDIQ for repeat-purchase patterns where individual order specifics are unknown at award.",
    whenToUse:
      "Any procurement conversation where contract type matters — modernization planning, vendor selection, source-selection prep, advising agencies on procurement strategy. Foundational for talking modern delivery in an acquisition-fluent way.",
    vocabulary: [
      "FFP (Firm Fixed Price)",
      "FFP-EPA (Economic Price Adjustment)",
      "T&M (Time and Materials)",
      "T&M with cap / NTE (Not to Exceed)",
      "LH (Labor Hour)",
      "CPFF (Cost Plus Fixed Fee)",
      "CPIF (Cost Plus Incentive Fee)",
      "CPAF (Cost Plus Award Fee)",
      "IDIQ (Indefinite Delivery, Indefinite Quantity)",
      "DO (Delivery Order)",
      "TO (Task Order)",
      "BPA (Blanket Purchase Agreement)",
      "Hybrid contract",
    ],
    howToDropIn:
      "\"Contract type maps to risk allocation. FFP puts cost risk on the vendor — they bid a price, they own it. T&M puts the risk on the government, which is why caps exist. Cost-plus puts the risk on the government with a fee structure tuned for high-uncertainty work. For modern software, FFP is the wrong default — scope is rarely stable enough — and pure T&M is too risky for the government, so T&M with cap or modular FFP buys are the de-risking choices.\"",
    commonPhrasing: "Contract type, FFP versus T&M, IDIQ structure.",
    notes:
      "FAR Part 16 covers contract types. The modern-delivery argument is that FFP for custom software is high-risk because scope is unstable; T&M with cap or modular FFP work better. Cost-plus is rarely used outside true R&D or major weapons systems. IDIQ is the catch-all for repeat-purchase patterns (GSA Schedules are essentially IDIQs). Pair with Federal & State Acquisition Register, Modern Delivery Procurement (18F-Style), and the 18F De-Risking Framework.",
    source:
      "FAR Part 16 (Types of Contracts); 18F De-Risking Guide on contract-type selection; practitioner experience in federal and state IT procurement.",
    tags: ["acquisition", "contract_types", "framework"],
  },
  {
    name: "Modern Delivery Procurement Moves (18F-Style)",
    category: "acquisition",
    oneLiner:
      "The specific procurement choices that operationalize modern delivery practice in government acquisition — Statement of Objectives (SOO) instead of prescriptive Statement of Work, modular procurement instead of monolithic mega-contracts, time-and-materials with caps instead of fixed-price-fixed-scope, performance-based services contracting, empowered product ownership written into the contract.",
    whenToUse:
      "Government IT modernization conversations; advising agencies on how to procure custom software development; designing RFPs and SOWs that don't force vendors into waterfall delivery; talking to acquisition staff about why standard FFP-with-detailed-SOW isn't appropriate for agile software work.",
    vocabulary: [
      "Statement of Objectives (SOO)",
      "Statement of Work (SOW)",
      "Performance Work Statement (PWS)",
      "modular procurement",
      "time-and-materials with cap",
      "performance-based services contracting",
      "empowered product ownership",
      "outcome-based contracting",
      "agile-friendly contracting",
      "User-Centered Design clauses",
      "open-source delivery clause",
      "code-in-the-customer's-repo clause",
    ],
    howToDropIn:
      "\"Modern delivery procurement moves are concrete: write a SOO (what we want at outcome level) instead of a prescriptive SOW; buy in small modular increments instead of one monolithic mega-contract; use T&M with cap so vendors aren't forced to bid fixed price on uncertain scope; require performance against working software, not document deliverables; bake empowered product ownership into the contract so the government — not the vendor — sets priorities. None of these are unusual in commercial software; all of them are unusual in government, which is why the practice is hard.\"",
    commonPhrasing: "Modern delivery procurement, agile procurement, 18F-style contracting, modular procurement.",
    notes:
      "The 18F De-Risking Guide is the canonical written source. The State Software Budgeting Handbook applies the same logic to state agencies. Colorado OIT specifically references this framework in their Enterprise Practice Lead JD. Notable contract templates exist publicly: 18F's Modular Contracting RFP templates, GSA's Centers of Excellence (CoE) sample contracts. Pair with 18F De-Risking Framework for Government Software, Federal & State Acquisition Register, Contract Type Selection.",
    source:
      "18F De-Risking Guide (derisking-guide.18f.gov); 18F Modular Contracting templates; State Software Budgeting Handbook; OFPP guidance on performance-based services contracting.",
    tags: ["acquisition", "modern_delivery", "18f", "framework"],
  },

  // —— Product strategy (transformation / legacy regulated industries) ——

  {
    name: "Product Strategist (Internal Transformation, Legacy Regulated Industries)",
    category: "product_strategy",
    oneLiner:
      "The senior-to-principal product strategist archetype at legacy regulated companies (mortgage servicing, banking, insurance, healthcare administration, accounting / financial systems) — not a standard PM with a backlog, but an internal-transformation strategist running discovery, KPI development, build-vs-buy analysis, and adoption work across business units to modernize processes, tools, and product teams.",
    whenToUse:
      "Senior / Principal Product Strategist or Transformation Strategist postings at legacy financial services, mortgage servicing, insurance carriers, healthcare administration, ERP-heavy organizations, established consumer finance. The 7+ year PM / strategy / UXR experience floor is standard.",
    vocabulary: [
      "product strategist",
      "internal transformation",
      "product discovery (not delivery)",
      "build-vs-buy analysis",
      "process modernization",
      "tools and products for employees",
      "KPI development",
      "baseline metrics",
      "adoption strategy",
      "business-unit partnership",
      "stand up new product teams",
    ],
    howToDropIn:
      "\"Product Strategist in this context is internal-transformation work, not external-product work. The job is discovering how business units actually operate, finding modernization opportunities, doing build-vs-buy analysis, standing up new product teams or partnering with existing ones, and owning adoption end-to-end. The KPI work is foundational because most legacy regulated orgs are running on opinions, not measurements. The hard part is the change management — long-tenure workforces in regulated industries don't get told to adopt new tools.\"",
    commonPhrasing: "Product strategist, transformation strategist, internal product strategy.",
    notes:
      "Differs from standard PM roles in that there's no fixed backlog and no fixed product; the strategist hunts for the right thing to build or buy and then partners with execution teams to deliver. Closer in shape to early-stage product discovery, McKinsey-style operations consulting with a product lens, or an internal version of an 18F engagement. The 'established organizations with long tenure employees' preference is a specific signal — they're hiring for someone who can navigate tradition-bound cultures, not just deliver software. Pair with Discovery-Driven Product Strategy (vs. Backlog-Driven PM), Modernizing Established Organizations With Long-Tenure Workforces, and AI Adoption & Capability Building.",
    source:
      "Validated against 2026 postings: Dovenmuehle Mortgage 'Senior or Principal Product Strategist' (remote US); similar internal-transformation strategist roles at large insurance carriers, regional banks, healthcare administrators, and ERP-heavy operations.",
    tags: ["product_strategy", "transformation", "legacy_industry", "role", "framework"],
  },
  {
    name: "Discovery-Driven Product Strategy (vs. Backlog-Driven PM)",
    category: "product_strategy",
    oneLiner:
      "The product-management mode where the deliverable is a prioritized investment thesis built from discovery research, not feature shipping against an existing backlog — used for early-stage products, internal transformation, modernization initiatives, and any context where 'what should we be doing' isn't already settled.",
    whenToUse:
      "Roles that explicitly disclaim 'standard PM with a backlog,' transformation strategist roles, principal-level product strategy roles where the deliverable is roadmap and recommendation rather than feature ship. Common at consulting-flavored internal product orgs, transformation programs, and 0-to-1 product work.",
    vocabulary: [
      "product discovery",
      "investment thesis",
      "build-vs-buy",
      "modernization roadmap",
      "baseline metrics",
      "KPI development",
      "ethnographic research",
      "unarticulated pain points",
      "service blueprint (for internal services)",
      "high-level vision down to implementation",
    ],
    howToDropIn:
      "\"Discovery-driven product strategy is what you do when the question isn't 'what should we ship next sprint' but 'what should this department even be using to do its job.' The deliverable is a roadmap and investment thesis grounded in research, not a backlog. KPI development comes first because most internal transformation is happening in places that don't measure what good looks like. The skill is moving from observed pain to defensible recommendation without skipping the measurement step.\"",
    commonPhrasing: "Product discovery, product strategy, transformation strategy.",
    notes:
      "Distinct from the Cagan / Torres dual-track model in that there isn't always a delivery track running in parallel — sometimes discovery is the whole job for months at a time. Closer to design research + product strategy + management consulting, with the product strategist owning the recommendation and the adoption. Pair with Continuous Discovery (Torres), Dual-Track Agile, Product Strategist (Internal Transformation, Legacy Regulated Industries), and Service Blueprint.",
    source:
      "Discovery-driven product practice (early-stage and transformation contexts); Marty Cagan / SVPG product-discovery writing; Teresa Torres continuous-discovery framing; practitioner experience at consulting and in-house transformation teams.",
    tags: ["product_strategy", "discovery", "framework"],
  },
  {
    name: "Modernizing Established Organizations With Long-Tenure Workforces",
    category: "product_strategy",
    oneLiner:
      "The specific change-management challenge of bringing modern tools, processes, and product practice into organizations where long-tenure employees carry deep institutional knowledge, established work patterns, and reasonable skepticism about transformation programs that have come and gone before — distinct from greenfield modernization or high-turnover orgs.",
    whenToUse:
      "JDs that explicitly name 'established organizations with long tenure employees,' 'tradition-bound culture,' or signal a regulated-industry / legacy-business context where transformation can't be top-down mandate-driven. Common in mortgage servicing, insurance, accounting firms, manufacturing, healthcare administration, public utilities.",
    vocabulary: [
      "long-tenure workforce",
      "institutional knowledge",
      "process tradition",
      "change-management posture",
      "credibility-building",
      "voluntary adoption",
      "transformation fatigue",
      "this-too-shall-pass",
      "subject matter expert (SME) partnership",
      "champions network",
    ],
    howToDropIn:
      "\"Modernizing a long-tenure workforce is a different problem than modernizing a startup or a high-churn org. The people in front of you have been there twenty years, know exactly why the process is the way it is, have seen three previous transformation initiatives come and go, and own the institutional knowledge nobody documented. Credibility is earned by working WITH the SMEs to surface the why behind the current state — not by showing up with a vision deck. Adoption happens because someone respected on the team endorses the change, not because leadership mandated it.\"",
    commonPhrasing: "Long-tenure workforce, established-org modernization, tradition-bound transformation.",
    notes:
      "Transformation patterns differ from greenfield modernization in important ways: institutional knowledge is an asset to preserve, not an obstacle to remove; SME partnerships are mandatory; the change-network model (champions inside the team) works better than top-down rollout; metrics need to be jointly developed with the workforce rather than imposed; and 'this too shall pass' is the default skepticism the work runs against. Common failure mode is dismissing existing process as outdated when it actually encodes regulatory or operational constraints. Pair with Product Strategist (Internal Transformation, Legacy Regulated Industries), AI Adoption & Capability Building, ADKAR (Prosci), and Trusted Advisor Stance.",
    source:
      "Change-management practice for legacy regulated industries; mortgage servicing, insurance, healthcare administration contexts; practitioner experience in established-org modernization.",
    tags: ["product_strategy", "change_management", "legacy_industry", "framework"],
  },

  // —— Interview frameworks ——————————————————————————————————————————————

  {
    name: "STAR Method and Variants (CAR / PAR / SOAR / STAR-L)",
    category: "interview_frameworks",
    oneLiner:
      "The standard behavioral-interview answer structure — Situation, Task, Action, Result — with common variants: CAR (drops Task), PAR (Problem instead of Situation/Task), SOAR (adds Obstacles), and STAR-L (adds Learnings, expected for senior roles). All compress a multi-month or multi-year work episode into 60–180 seconds of structured answer.",
    whenToUse:
      "Behavioral interview prep at any level. STAR is the dominant ask at FAANG, MBB consulting, big-tech IC roles, and most product / design / engineering leadership interviews. STAR-L is increasingly expected at senior and principal levels. PAR is more common in management consulting case-flavored conversations.",
    vocabulary: [
      "STAR (Situation / Task / Action / Result)",
      "CAR (Context / Action / Result)",
      "PAR (Problem / Action / Result)",
      "SOAR (Situation / Obstacles / Actions / Results)",
      "STAR-L (STAR + Learnings)",
      "behavioral interview",
      "competency interview",
      "Tell me about a time when...",
      "What's a project where you...",
    ],
    howToDropIn:
      "\"STAR is compression. The interviewer asks for a project where you did X; you need to take a 9-month project and answer in 90 seconds. Situation (1 sentence — context and stakes). Task (1 sentence — what you specifically had to do). Action (3–4 sentences — what you actually did, with verbs and decisions). Result (1–2 sentences — what changed because of it, with numbers if you have them). Senior roles want STAR-L: one more sentence on what you'd do differently next time. The trap is going long on Situation and short on Action; flip the ratio.\"",
    commonPhrasing: "STAR method, behavioral interview, competency-based interview.",
    notes:
      "The most common STAR mistake is making Situation 60% of the answer because the project context feels important; interviewers want Action because that's what reveals how you work. Time-allocation rule of thumb: 10% Situation, 10% Task, 60% Action, 20% Result (with Learnings folded in if STAR-L). Stories from the eAPD / SOMD / State Capacity AI / Acting Chief of Staff / Head of Design portfolio each support multiple STAR answers; the same story compresses differently depending on which competency the interviewer is probing (leadership, conflict, judgment, impact, ambiguity-tolerance, customer obsession). Pair with Senior IC / Executive Interview Patterns and the existing Story-card 30s versions as the substrate to compress from.",
    source:
      "Behavioral-interviewing practice (1970s industrial-organizational psychology, formalized for hiring at Procter & Gamble and Anheuser-Busch); current standard at FAANG and MBB; Amazon's Leadership Principles + STAR combination is the most-documented variant.",
    tags: ["interview", "communication", "behavioral", "framework"],
  },
  {
    name: "Senior IC / Executive Interview Patterns (Transitions, Leadership Beats, Why-You)",
    category: "interview_frameworks",
    oneLiner:
      "Interview patterns specific to Senior IC, Principal, Director, and Executive roles — beyond STAR — covering role-transition narratives (why you left, why this), leadership scope demonstration (numbers attached to people and budgets), strategic judgment under ambiguity, and the 'Why You / Why Now / Why This' close.",
    whenToUse:
      "Director / VP / Principal / Staff / C-suite interviews. Different shape from IC behavioral interviews because the questions probe judgment, leadership scope, organizational navigation, and strategic narrative rather than execution detail.",
    vocabulary: [
      "leadership scope (people, budget, P&L)",
      "Why You / Why Now / Why This",
      "executive presence",
      "strategic judgment",
      "organizational navigation",
      "transition narrative",
      "what would you do differently",
      "what did you inherit / what did you build",
      "the case for change",
      "the 30 / 60 / 90",
    ],
    howToDropIn:
      "\"Senior interviews probe four things STAR doesn't address well: judgment under ambiguity, leadership scope (what was the people and budget reality, not just the project), strategic narrative (why these choices in this sequence), and transition logic (why this role now). The 'Why You / Why Now / Why This' close is increasingly standard — a 90-second articulation of why you specifically are right for this seat at this moment in your career and the company's trajectory. The 30 / 60 / 90 (what you'd do in your first 30, 60, 90 days) is the operational equivalent.\"",
    commonPhrasing: "Executive interview, leadership interview, principal interview.",
    notes:
      "Common senior interview question patterns: 'Tell me about a hard organizational call you made'; 'What did you inherit and how did you handle it'; 'What would you do in your first 90 days'; 'Why this role, why now'; 'What's a strategic call you got wrong and what did you learn'; 'How do you decide what to delegate'. Each maps to a STAR-format answer but with leadership-scope numbers (people, budget, time horizon) attached and judgment narrative emphasized. Pair with STAR Method and Variants, Trusted Advisor Stance, and the Story cards that document senior leadership scope (Head of Design, Acting Chief of Staff, State Capacity AI).",
    source:
      "Senior-hire interview practice (executive search firms, late-stage growth companies, regulated industries); McKinsey / Spencer Stuart / Heidrick & Struggles competency frameworks for senior hires.",
    tags: ["interview", "senior_ic", "leadership", "framework"],
  },
  {
    name: "Product & Design Interview-Specific Frameworks (CIRCLES, Portfolio Walkthrough, Design Challenge)",
    category: "interview_frameworks",
    oneLiner:
      "Domain-specific interview frameworks for product manager and designer interviews — CIRCLES for PM product-sense questions (Comprehend, Identify, Report, Cut, List, Evaluate, Summarize), portfolio walkthrough patterns for designers, and design-challenge structures that simulate real working sessions.",
    whenToUse:
      "Product manager interviews at FAANG and late-stage growth (product-sense rounds, execution rounds, strategy rounds); designer interviews (portfolio reviews, app critiques, design challenges); cross-functional roles that probe product or design judgment.",
    vocabulary: [
      "CIRCLES (Comprehend / Identify / Report / Cut / List / Evaluate / Summarize)",
      "product sense round",
      "execution round",
      "strategy round",
      "portfolio walkthrough",
      "app critique",
      "design challenge",
      "whiteboard round",
      "RICE prioritization",
      "ICE prioritization",
    ],
    howToDropIn:
      "\"Product and design interviews use STAR for behavioral rounds and domain-specific frameworks for craft rounds. CIRCLES is the standard for PM product-sense questions — given an ambiguous prompt ('design a better X'), walk through user comprehension, user identification, reporting, cutting scope, listing solutions, evaluating, summarizing. For designers, the portfolio walkthrough is the dominant artifact — structured around the project's stakes, decisions, trade-offs, and what you'd do differently. Design challenges are working sessions, not presentations — interviewers want to see how you think, not what you've polished.\"",
    commonPhrasing: "PM interview, designer interview, product sense, portfolio review.",
    notes:
      "CIRCLES was coined by Lewis Lin for Microsoft PM interviews and is now the standard framework named in PM interview prep books. RICE and ICE are prioritization frameworks more commonly used in execution rounds. For senior PM and Director PM roles, strategy rounds replace product-sense rounds and use 'enter this market' or 'launch this product' prompts. Designer interview structures vary by company — Meta, Google, Apple, and consulting design firms each have signature patterns. Pair with STAR Method and Variants and Senior IC / Executive Interview Patterns.",
    source:
      "Lewis Lin, *Decode and Conquer* (CIRCLES framework, 2013); Reforge, Lenny's Newsletter, and Designer Hangout interview-prep communities; FAANG-specific interview guides.",
    tags: ["interview", "product_management", "design", "framework"],
  },

  // —— Strategic foresight / futures practice ————————————————————————————

  {
    name: "Strategic Foresight & Insight Analyst (Corporate / Brand)",
    category: "foresight",
    oneLiner:
      "The analyst-to-senior-analyst role at corporate foresight functions — scanning emerging trends across technology, culture, consumer behavior, sustainability, and business models; synthesizing weak signals into structured insights; supporting scenario development and opportunity-space mapping; translating signals into strategic implications for exploration and investment.",
    whenToUse:
      "Strategic Foresight Analyst, Insight Analyst, Futures Researcher, Trend Analyst postings at consumer brands (H&M, IKEA, Nike, P&G, Unilever), automotive (Ford, GM, Toyota), tech (Google ATAP, Microsoft Strategy), large media (Disney, BBC), and adjacent industries. Usually inside Innovation / Futures / Strategy departments rather than core product.",
    vocabulary: [
      "strategic foresight",
      "signal sensing / weak signal detection",
      "trend analysis",
      "scenario planning",
      "opportunity space mapping",
      "futures research",
      "STEEP / PESTLE analysis",
      "Three Horizons framework",
      "futures wheel",
      "Delphi method",
      "horizon scanning",
      "exploration vs. exploitation",
    ],
    howToDropIn:
      "\"Strategic foresight is the discipline of building structured, defensible perspectives on the future that organizations can act on — not predictions, but well-framed alternatives that inform where the business places its bets. The analyst job is the bottom of the funnel: scanning, signal-sensing, synthesizing into insights, contributing to scenarios. The senior version contributes to framework design and connects foresight outputs to strategic decision-making.\"",
    commonPhrasing: "Strategic foresight, trend analysis, futures research, insight analyst.",
    notes:
      "Distinct from market research (which describes the present) and strategic planning (which decides on the present). Foresight is the discipline of building structured perspectives on plausible futures so the organization can prepare or position. The 2024–2026 corporate foresight market is growing as AI disruption, climate, and geopolitical instability make planning horizons harder. Pair with Foresight Methodology Stack and Translating Foresight to Strategy.",
    source:
      "Validated against 2026 postings: H&M Group 'Strategic Foresight & Insight Analyst' (Stockholm, hybrid); analogous roles at IKEA, Nike, P&G, Unilever, Ford, Toyota, Microsoft, Google ATAP.",
    tags: ["foresight", "strategy", "corporate", "role", "framework"],
  },
  {
    name: "Foresight Methodology Stack (Scenarios, Three Horizons, STEEP, Futures Wheel)",
    category: "foresight",
    oneLiner:
      "The canonical methodology stack of strategic foresight work — STEEP / PESTLE for environmental scanning; horizon scanning and signal sensing for trend identification; Three Horizons framework for thinking across time periods; scenario planning (Shell-style and morphological); Futures Wheel for second- and third-order consequence mapping; Delphi for structured expert input.",
    whenToUse:
      "Any foresight role, futures practice, or strategic-planning context that benefits from formal methodology. Particularly important for foresight analysts who need to demonstrate methodological fluency in interviews and proposals.",
    vocabulary: [
      "STEEP (Social / Technological / Economic / Environmental / Political)",
      "PESTLE (Political / Economic / Social / Technological / Legal / Environmental)",
      "Three Horizons (Sharpe / Curry)",
      "Scenario planning (Shell / Kahn)",
      "Morphological scenario analysis",
      "Futures Wheel (Glenn)",
      "Delphi method",
      "Cross-impact analysis",
      "Wild cards (low-probability, high-impact events)",
      "Black swans",
      "Backcasting",
      "Causal Layered Analysis (CLA)",
    ],
    howToDropIn:
      "\"Foresight methodology is a stack, not a single tool. STEEP / PESTLE is the scanning frame — you organize signals by Social, Technological, Economic, Environmental, Political. Three Horizons gives you the time-period structure. Scenario planning (in the Shell tradition) generates plausible alternative futures. The Futures Wheel maps second- and third-order consequences of a single signal. Delphi brings structured expert input when you don't have data. The skill is matching the method to the question — scenarios when there's deep uncertainty about multiple drivers; Three Horizons when you need to communicate across time periods; CLA when the question is about underlying worldviews and mythology.\"",
    commonPhrasing: "Foresight methods, futures frameworks, scenario planning, horizon scanning.",
    notes:
      "Canonical references: Pierre Wack and Peter Schwartz at Shell on scenario planning; Bill Sharpe and Andrew Curry on Three Horizons; Jerome Glenn on Futures Wheel and the Millennium Project; Sohail Inayatullah on Causal Layered Analysis (CLA). The Institute for the Future (IFTF), Long Now Foundation, RAND, and Singapore's Centre for Strategic Futures are the institutional bellwethers. Pair with Strategic Foresight & Insight Analyst (Corporate / Brand) and Translating Foresight to Strategy.",
    source:
      "Strategic foresight discipline. Canonical references: Peter Schwartz, *The Art of the Long View* (1991); Bill Sharpe & Andrew Curry on Three Horizons (2015); Jerome Glenn at the Millennium Project; Sohail Inayatullah on Causal Layered Analysis.",
    tags: ["foresight", "methodology", "framework"],
  },
  {
    name: "Translating Foresight to Strategy (Signal → Insight → Implication → Bet)",
    category: "foresight",
    oneLiner:
      "The discipline of moving structured foresight outputs through the chain that makes them actionable — signals (observed events or data points), insights (what the signals mean), implications (what they mean for the organization specifically), and bets (the strategic moves the organization makes in response). Most foresight work fails at the implications-to-bets step.",
    whenToUse:
      "Senior foresight analyst, strategy-and-insights, or futures-to-strategy translation roles where the deliverable has to be actionable, not just interesting. The JD phrase 'pragmatic — focused on impact, not just interesting observations' is the canonical signal.",
    vocabulary: [
      "signal → insight → implication → bet",
      "actionable insight",
      "strategic implication",
      "bet placement / portfolio choice",
      "the so-what test",
      "decision-grade insight",
      "from foresight to roadmap",
      "futures to strategy bridge",
      "exploration priorities",
    ],
    howToDropIn:
      "\"The hardest part of foresight isn't generating insights; it's making them actionable. The chain is signal → insight → implication → bet. Signals are observed (a regulatory change, a consumer behavior shift, a technology release). Insights are what the signals MEAN (what they tell us about underlying dynamics). Implications are organization-specific (what they mean for our business, our portfolio, our capability set). Bets are the strategic moves we make in response (where to invest, what to build, what to stop). Most foresight teams get great at the first two and fail at the second two. The senior version of the role is mostly about closing that gap.\"",
    commonPhrasing: "From foresight to strategy, actionable insights, signal to bet.",
    notes:
      "The discipline's failure mode is the 'futures report nobody reads' pattern — beautifully produced scenarios that don't connect to any specific decision the organization is making. Counter is to embed foresight analysts in active strategy or investment discussions where the implications-to-bets translation is forced by the conversation. Pair with Strategic Foresight & Insight Analyst (Corporate / Brand), Foresight Methodology Stack, and Trusted Advisor Stance.",
    source:
      "Strategic foresight practice; Wendy Schultz on insight-to-action translation; corporate foresight literature 2015–2026.",
    tags: ["foresight", "strategy", "translation", "framework"],
  },

  // —— Principal-level discipline framing (content design, service design) —

  {
    name: "Principal-Level Content Design & IA (Beyond Copywriting)",
    category: "content_design",
    oneLiner:
      "The discipline of content design and information architecture at principal-IC / staff level — content as interface architecture, governance models for who-edits-what, multi-audience content systems, taxonomies and content models that drive product structure, and the cross-functional architectural calls content discipline can earn the right to make. Distinct from mid-level content design, which writes copy against existing IA.",
    whenToUse:
      "Principal / Staff / Lead Content Designer or Content Strategist roles, particularly outside SF / SV where the discipline is more frequently flattened. Useful for surfacing the system-level work content design at depth does, beyond 'write the microcopy.'",
    vocabulary: [
      "content as interface",
      "content architecture",
      "content model",
      "content taxonomy (heading / short / detail / help)",
      "content governance",
      "YAML / structured content layer",
      "voice, casing, acronym, numeric-format conventions as policy",
      "multi-audience content system",
      "content-driven architectural decision",
      "content operations",
      "performance management for content discipline",
    ],
    howToDropIn:
      "\"Principal-level content design is content as interface architecture, not copy added after design. The work is the taxonomy that determines what kind of guidance lives where, the governance model for who can edit which content layer, the case for technical architectural decisions (non-blocking validation, autosave, error prevention) the content research surfaces, and the operating model for content across a product. Mid-level content design writes copy against an existing IA; principal-level content design designs the IA the copy lives in.\"",
    commonPhrasing: "Principal content designer, content architect, staff content strategist.",
    notes:
      "The discipline gets flattened outside SF / SV — most postings ask for 'writes great microcopy' when they need content architecture. Recognizable principal-level signals in a JD: 'set content strategy,' 'define content governance,' 'partner with engineering on content infrastructure,' 'lead taxonomy development.' eAPD is the citable case for content as interface in a regulated submission context: the heading / short / detail / help-text taxonomy with explicit rules for what lives where, the YAML governance layer, non-blocking validation defended on research grounds, voice and convention policies. Pair with Service Blueprint, Multi-Audience Digital Governance, and the eAPD Story card.",
    source:
      "Content design discipline (Sarah Winters / Content Design London; Erika Hall on content strategy; Kristina Halvorson at Brain Traffic); 18F content design practice; principal-level content design hiring patterns at FAANG and large product orgs.",
    tags: ["content_design", "ia", "principal_level", "framework"],
  },
  {
    name: "Principal-Level Service Design (Beyond Journey Maps)",
    category: "service_design",
    oneLiner:
      "The discipline of service design at principal-IC / staff level — service blueprint as platform architecture, multi-sided service modeling, operating-model design alongside service design, service measurement and KPI design, service maturity assessment, and cross-channel policy-level orchestration. Distinct from mid-level service design, which produces journey maps and blueprints as deliverables.",
    whenToUse:
      "Principal / Staff / Lead Service Designer roles, particularly in regulated industries (healthcare, financial services, government) and at established consumer companies where the discipline is recognized as architecture rather than artifact production. Useful for surfacing the system-level work service design at depth does, beyond 'maps the customer journey.'",
    vocabulary: [
      "service blueprint as architecture",
      "multi-sided service design",
      "two-sided / two-population service",
      "operating-model design",
      "service line orchestration",
      "service maturity model",
      "service KPI design",
      "policy-level service standards",
      "service infrastructure",
      "channel handoff design",
      "service actors (human and AI)",
    ],
    howToDropIn:
      "\"Principal-level service design treats the service blueprint as platform architecture — the artifact is one output, but the work is the operating model the service runs on. Multi-sided service modeling, governance across audiences, the workflow gates that shift work between channels and lines of business, the measurement model for service quality — all of it sits inside the service designer's scope at depth. Mid-level service design produces journey maps and blueprints; principal-level service design designs the operating model the blueprints describe.\"",
    commonPhrasing: "Principal service designer, staff service designer, service architecture.",
    notes:
      "The discipline gets flattened outside SF / SV — most postings ask for 'creates journey maps' when they need service-architecture work. Recognizable principal-level signals in a JD: 'set service strategy,' 'design operating standards,' 'orchestrate across lines of business,' 'design KPIs for service quality.' eAPD is the citable case for multi-sided service design in a regulated context: state authors + federal reviewers + State Officers + 18F + CMS as multiple coordinated parties; administrative-completeness check + author attestation as workflow-gate design; operating model carried through the handoff to the successor team. State Officer M.D. is the citable case for service-as-program design (the cohort as a service). Pair with Multi-Channel Service Orchestration, Multi-Audience Digital Governance, and the eAPD / SOMD Story cards.",
    source:
      "Service design discipline (Marc Stickdorn and Jakob Schneider, *This Is Service Design Doing*; Lou Downe on design and government services; Polaine, Løvlie, and Reason on service design); 18F practice; principal-level service design hiring patterns.",
    tags: ["service_design", "principal_level", "framework"],
  },

  // —— Design leadership (Center of Excellence / regulated financial services) —

  {
    name: "Head of Design CoE (Financial Services / Regulated, Newly-Established)",
    category: "design_leadership",
    oneLiner:
      "The Head-level design leadership archetype at financial services and regulated-industry employers establishing a Center of Excellence — leading 30–60-person UX / UI / digital design organizations, owning digital experience vision, defining operating model for design development across Tribes and commercial teams, with 3–5 direct reports and multi-country team composition. Distinct from VP-level design org leadership at product companies because the seat is typically inside a CoE structure rather than embedded in product, and the org has stronger compliance / commercial / regulatory constraints.",
    whenToUse:
      "Head of Design / Head of Customer Experience / Head of Human-Centered Design CoE postings at Nordic and European banks (Danske, Nordea, DNB, Handelsbanken, SEB), US large banks (JPMorgan Chase, Wells Fargo, Bank of America design CoEs), insurance carriers, and adjacent regulated financial-services employers. Common at orgs running a Tribes / Squads operating model with a separate design CoE for craft governance.",
    vocabulary: [
      "Design CoE (Center of Excellence)",
      "Head of Human-Centered Design",
      "digital experience vision",
      "operating model for design development",
      "Tribes / Squads / Chapters / Guilds (Spotify model)",
      "embedded vs. centralized design",
      "design standards and practices",
      "design quality benchmarks",
      "capacity planning",
      "customer satisfaction outcomes",
      "design discipline (UX / UI / digital)",
    ],
    howToDropIn:
      "\"Head of Design at a Nordic bank's newly-established CoE is a different shape than Head of Design at a product company. The CoE doesn't own products — it owns the discipline, the standards, the operating model, and the talent. Tribes own the products. The Head's job is making the CoE legibly useful to Tribes and Commercial teams while building the long-arc capabilities (career frameworks, hiring bar, AI-augmented design practice, cross-country talent mobility) the org needs. The constraints are stronger than at a product company: financial-services compliance, multi-country employment law, regulator-driven feature requirements, longer release cycles.\"",
    commonPhrasing: "Head of Design CoE, Head of Customer Experience, Head of Human-Centered Design.",
    notes:
      "Multi-country composition (Denmark, Lithuania, India in the Danske case) is typical of Nordic banks and changes the leadership shape significantly — different employment law, different compensation bands, different communication norms, different timezone overlap. The Tribes + CoE model is borrowed from Spotify's organizational pattern but adapted for regulated financial services where Tribes can't be as autonomous as Spotify Squads. Common reporting line is Chief Customer Officer, Chief Digital Officer, or sometimes COO. Pair with Multi-Country / Distributed Design Leadership and Building a Newly Established Design CoE.",
    source:
      "Validated against 2026 postings: Danske Bank 'Head of Human-Centered Design Center of Excellence' (Copenhagen, with team in Lithuania and India); analogous roles at Nordea, DNB, JPMorgan Chase, Wells Fargo, BBVA, ING.",
    tags: ["design_leadership", "financial_services", "coe", "regulated", "role", "framework"],
  },
  {
    name: "Building a Newly Established Design CoE",
    category: "design_leadership",
    oneLiner:
      "The specific greenfield leadership challenge of standing up a newly established Design Center of Excellence — defining the operating model from scratch, establishing standards and practices the rest of the organization will adopt voluntarily, building the talent strategy and career framework, choosing what's centralized vs. embedded, and building credibility with Tribes / product teams who haven't worked with a Design CoE before.",
    whenToUse:
      "Head / Director postings at orgs explicitly describing a 'newly established' or 'forming' Design CoE. Particularly common in financial services, healthcare, and large enterprise orgs that historically had embedded designers in product teams without centralized discipline governance and are now centralizing.",
    vocabulary: [
      "newly established CoE",
      "greenfield design org",
      "centralized vs. embedded design",
      "voluntary adoption (of CoE standards)",
      "Tribes / Squads stakeholder management",
      "design discipline maturity",
      "design ops / DesignOps",
      "career framework design",
      "hiring bar establishment",
      "operating-model decisions",
    ],
    howToDropIn:
      "\"Standing up a newly established Design CoE is greenfield leadership — the operating model is open, the standards are TBD, the talent strategy needs to be built, and credibility with Tribes who haven't worked with a Design CoE before needs to be earned, not assumed. The decisions in year one set the operating model for years: what's centralized (standards, hiring, career framework, tooling) versus what's embedded (designers actually in Tribes); how the CoE earns voluntary adoption rather than mandate compliance; what the design-quality benchmark actually is. The trap is treating it as a re-org rather than a multi-year capability build.\"",
    commonPhrasing: "Stand up a Design CoE, build a Design Center of Excellence, design org centralization.",
    notes:
      "The voluntary-adoption discipline matters a lot here — the CoE has authority over the discipline but not over the Tribes / product teams. The Head's job is making CoE standards and practices genuinely useful (not just compliance-required) so they get adopted by Tribes that have alternatives. Common failure mode is the CoE that publishes standards nobody follows; common success mode is the CoE that ships tools, templates, and people so Tribes actively want CoE engagement. Pair with Head of Design CoE (Financial Services / Regulated, Newly-Established) and Centralized AI Enablement Team (Innovation Catalyst Model — similar voluntary-adoption operating pattern).",
    source:
      "Design CoE establishment practice; financial services and large enterprise centralization patterns 2018–2026; consulting firm (Deloitte, EY, BCG) design-CoE-building engagements.",
    tags: ["design_leadership", "coe", "greenfield", "framework"],
  },
  {
    name: "Multi-Country / Distributed Design Leadership",
    category: "design_leadership",
    oneLiner:
      "The leadership shape of running a design organization with team composition split across multiple countries — typical at Nordic banks (Denmark + Lithuania + India), European tech (Germany + Poland + India), US tech with offshore design (US + Eastern Europe + India). Multi-country leadership involves different employment law, compensation bands, communication norms, timezone overlap windows, cultural expectations around hierarchy and feedback, and the cost-vs-quality model of nearshore / offshore design.",
    whenToUse:
      "Design leadership roles where the team is explicitly multi-country. Common at European banks, large enterprise software (SAP, Siemens, Bosch), and US tech with offshore design centers. The 'team in Lithuania and India' phrasing in the Danske JD is the canonical signal.",
    vocabulary: [
      "multi-country team",
      "nearshore design (Eastern Europe)",
      "offshore design (India)",
      "timezone overlap window",
      "design center / design hub",
      "country-specific hiring band",
      "Vilnius, Riga, Tallinn (Baltic design centers)",
      "Bengaluru, Pune, Gurugram (India design centers)",
      "cross-country mobility",
      "global design ops",
    ],
    howToDropIn:
      "\"Running a multi-country design organization has a different shape than running a single-location team. The Nordic + Baltic + India composition is common at European banks: Denmark / Sweden as the strategic center, Lithuania / Latvia for nearshore execution at lower cost band, India for additional capacity at further cost band. The leadership work is making the cross-country team operate as one organization rather than three — including timezone-overlap windows, cultural calibration on feedback and hierarchy, communication norms across countries, hiring band fairness, career mobility between centers, and the politically delicate question of what work goes where.\"",
    commonPhrasing: "Multi-country design team, distributed design leadership, nearshore / offshore design.",
    notes:
      "The specific country combination (Denmark + Lithuania + India in the Danske case) carries embedded cost and operating-model assumptions. Lithuania is a major nearshore design center for Nordic and German employers; Bengaluru and Pune are major offshore design centers for both US and European employers. The work-allocation politics are real — Denmark designers feel strategic, Lithuania feels production, India feels capacity, and undoing those defaults is part of the Head's job. Pair with Head of Design CoE (Financial Services / Regulated, Newly-Established) and Building a Newly Established Design CoE.",
    source:
      "Distributed design leadership practice at European banks and US tech with offshore design centers 2015–2026; design-ops literature on multi-country team operating models.",
    tags: ["design_leadership", "multi_country", "global", "framework"],
  },

  // —— Critical-technologist / urbanist practice (self-positioning lineages) —

  {
    name: "Critical-Technologist Self-Statement Construction (Templates, Verbs, Openers)",
    category: "self_positioning",
    oneLiner:
      "The structural patterns and verb stack used by critical technologists, urbanists, and artist-practitioners to write self-statements that confer artist-style latitude on critical-systems practice — invent a noun rather than accept a title, list methods as material, name an object of attention at the level of conditions, declare a stance without hedging.",
    whenToUse:
      "Writing bio / about / artist statement / practice description in the register of Mattern, Easterling, Ọnụọha, Lavigne, Brain, Crawford, Paglen — instead of corporate design-leader register. For art-adjacent, academic, civic-tech, public-interest, or foundation audiences where corporate register undersells the work.",
    vocabulary: [
      "spanning / intersection opener",
      "tripartite identity",
      "whose work… construction",
      "methodology-led opener",
      "political / ethical commitment opener",
      "biographical-into-practice opener",
      "first-person manifesto",
      "minimalist (\"X is the work of X\")",
      "invent-a-noun pattern",
      "methods-as-material",
      "object-of-attention at level of conditions",
      "declare a stance without hedging",
    ],
    howToDropIn:
      "\"Construction patterns: 'X is a [noun] whose work [verbs] [topic] through [methodology].' (Ọnụọha, Brain, Crawford). 'X operates in the spaces between [discipline], [discipline], and [discipline].' (Young). Tripartite identity: 'X is a [noun], [noun], and [noun].' (Bridle, Jain, Schwulst). Verbs grouped by register — analytic (examines, interrogates, makes legible), mapping (charts, traces, inventories), sensory (tends, holds, weaves), refusal (refuses, reclaims, restores), convening (stages, hosts, choreographs), speculative (probes, conjures, fictions), making (crafts, assembles). The four cross-cutting moves: invent a noun ('experimental geographer,' 'speculative architect,' 'eccentric engineer'), list methods as material ('rankings, simulations, indices, convenings'), name an object of attention at the level of conditions ('material conditions,' 'infrastructural labor,' 'missing datasets,' 'dark matter'), and declare a stance without hedging ('we are the institution,' 'a city is not a computer,' 'art is a state of encounter').\"",
    commonPhrasing: "Self-statement, about page, artist bio, practice description.",
    notes:
      "Borrowable openers for the user's stated lineage: '[Name] is a critical technologist and urbanist whose practice spans measurement systems, mechanism design, civic infrastructure, and convening — treating the city, the institution, and the algorithm as shared material.' Or: 'Through ranking systems, economic indices, simulations, and convenings, [Name] investigates how technology and cities are built, and who they are hollowed out for.' Or biographical: '[Name] is a critical technologist and urbanist who was once Head of Design at 18F, and now…' Or minimalist after Mattern: '[Name] is the work of [Name].' Pair with Critical-Technologist Phrase Bank, the lineage cards, and the existing Story cards as evidence the practice has the receipts.",
    source:
      "Bio and about-page survey: Mattern (Words in Space), Easterling, Ọnụọha, Lavigne, Brain, Crawford, Paglen, Young, Bridle, Jain, Schwulst, Burrington, Mina, Seu, Coldicutt; pedagogues Gilda Williams and Triple Canopy's 'International Art English.'",
    tags: ["self_positioning", "self_statement", "critical_technologist", "framework"],
  },
  {
    name: "Critical-Technologist Phrase Bank (Reading Systems, Medium of Practice, Stance)",
    category: "self_positioning",
    oneLiner:
      "A consolidated phrase bank pulled from the critical-technologist / urbanist / artist-practitioner register — direct quotes and recurrent constructions usable in self-statements, talk titles, project framings, and proposals. Organized by what the phrase does rather than who said it.",
    whenToUse:
      "Drafting self-statements, talk titles, project descriptions, foundation proposals, or any writing that needs to land in the artist-practitioner register rather than corporate-design register. As a reference when stuck on phrasing.",
    vocabulary: [
      "make legible / making legible (Hill, Mattern)",
      "expose moments of imbalance and deception (Critical Engineering)",
      "peer inside the black box (Oliver)",
      "the stories infrastructure tells itself (Easterling)",
      "surface the frequently opaque political and economic conditions (Lavigne)",
      "draw attention to invisible infrastructural labor (Mattern)",
      "exploring and visualizing the invisible (Joler)",
      "blank spots on the map (Paglen)",
      "missing datasets (Ọnụọha)",
      "art is a state of encounter (Bourriaud)",
      "form can be defined as a lasting encounter (Bourriaud)",
      "convening as medium / generosity as a medium (Obrist)",
      "tools for thinking (Tharp)",
      "diegetic prototypes / things that tell stories (Sterling, Bleecker)",
      "tentative probes (McLuhan)",
      "legibility / imageability / paths, edges, districts, nodes, landmarks (Lynch)",
      "infrastructure for the soul / contemplative ritual in public life (Chang)",
      "placekeeping / placeknowing / the poesis, policy, and politic of place (Bedoya)",
      "third place (Oldenburg)",
      "infrastructure space / active form / disposition / extrastatecraft (Easterling)",
      "change the chemistry of the soil (Easterling)",
      "dark matter / Trojan Horses / matter to meta (Hill)",
      "stewardship (Boyer / Cook at HDL)",
      "infrastructuring (Ehn)",
      "people as infrastructure / architectures of endurance (Simone)",
      "a city is not a computer / urban intelligence / code and clay, data and dirt / maintenance and care (Mattern)",
      "I name necessity art (Ukeles)",
      "I don't explain — I explore (McLuhan)",
      "we are the institution (Fraser)",
      "good ancestors (Long Now)",
      "criticism in practice (Wagner)",
      "all organizing is science fiction (Imarisha)",
      "knowing how to work on the world (Easterling)",
    ],
    howToDropIn:
      "\"Use these as primary-source quotation when the writing needs to land at the right register — not as ornament but as the actual claim. The strongest move is using one phrase as a frame that the surrounding sentence delivers on: 'My practice makes legible the dark matter of public-sector technology decisions — the procurement standards, organizational habits, and unwritten conventions that determine whether the visible design work survives or doesn't.' Avoid stacking too many phrases into one paragraph; one or two per page is the right density.\"",
    commonPhrasing: "Phrase bank, critical-technologist register, artist-practitioner vocabulary.",
    notes:
      "The phrase bank is for use, not display. Quotation marks signal the source; the writing earns the right to use the phrase by doing the work the phrase names. Pair with Critical-Technologist Self-Statement Construction and the lineage cards.",
    source:
      "Vocabulary excavation across critical-technologist, urbanist, social-practice, speculative-design, and architectural-criticism registers. Phrases attributed inline.",
    tags: ["self_positioning", "phrase_bank", "critical_technologist", "framework"],
  },
  {
    name: "Probes / Infrastructure Space / Maintenance / Dark Matter (Critical-Systems Lineage)",
    category: "critical_systems",
    oneLiner:
      "The four-figure lineage furnishing the core vocabulary for a critical-technologist and urbanist practice that reads institutional, infrastructural, and computational systems as material — Marshall McLuhan's 'probes' as method, Keller Easterling's 'infrastructure space' and 'disposition' as objects of attention, Shannon Mattern's 'a city is not a computer' and 'maintenance and care' as posture, Dan Hill's 'dark matter' and 'Trojan Horses' as tactics.",
    whenToUse:
      "Self-positioning, talk framing, and project descriptions where the practice needs to read systems and material conditions rather than ship discrete products. The richest single triangulation for a critical-technologist-urbanist practice that ranks, measures, convenes, and writes about institutions.",
    vocabulary: [
      "probes (not theories) — McLuhan",
      "the medium is the message",
      "figure / ground, percept vs. concept",
      "pattern recognition",
      "infrastructure space — Easterling",
      "active form vs. object form",
      "disposition (latent tendencies)",
      "extrastatecraft",
      "spatial products / the Zone / matrix space",
      "knowing how to work on the world",
      "a city is not a computer — Mattern",
      "urban intelligence",
      "code and clay, data and dirt",
      "maintenance and care",
      "curated decay",
      "dark matter — Hill",
      "Trojan Horses / MacGuffins",
      "from matter to meta",
    ],
    howToDropIn:
      "\"McLuhan's probes give the method: 'tentative probes, as means of insight, of pattern recognition, rather than to use them in the traditional and sterile sense of classified data, categories, containers.' Easterling gives the object: infrastructure space, active form, disposition — 'the stories infrastructure tells itself.' Mattern gives the posture: a city is not a computer; what we really need to study is how the world gets put back together. Hill gives the tactics: dark matter (organizational culture, policy, finance models, governance, habits) and Trojan Horses (projects that move dark matter under cover of doing something else).\"",
    commonPhrasing: "Critical-systems lineage, infrastructure-as-medium, maintenance and repair as practice.",
    notes:
      "The five concepts together — probes, infrastructure space, disposition, dark matter, maintenance — furnish a complete vocabulary for a practice that ranks, measures, convenes, and writes about institutions. For the State Capacity AI / Occupant Indices / Public Mechanics work specifically: the indices are probes; the federal AI procurement landscape is infrastructure space; the Public Mechanics frame is the dark matter the indices make legible; the worksheet is a Trojan Horse that moves dark matter under cover of solving a price-reasonableness determination. Pair with Critical-Technologist Self-Statement Construction, Critical-Technologist Phrase Bank, and the State Capacity AI Story card.",
    source:
      "Marshall McLuhan, *The Medium Is the Massage* (1967), *Understanding Media* (1964); Keller Easterling, *Extrastatecraft* (2014), *Medium Design* (2021); Shannon Mattern, *A City Is Not a Computer* (2021), 'Maintenance and Care' (Places Journal, 2018); Dan Hill, *Dark Matter and Trojan Horses* (Strelka Press, 2012).",
    tags: ["critical_systems", "lineage", "urbanism", "framework"],
  },
  {
    name: "Social Sculpture / Relational Aesthetics / Arte Útil / Convening as Medium",
    category: "social_practice",
    oneLiner:
      "The lineage that frames convening, salon-running, capacity-building, and institutional-shaping as artistic medium — Joseph Beuys's 'social sculpture' and the expanded concept of art; Nicolas Bourriaud's relational aesthetics and 'art is a state of encounter'; Tania Bruguera's Arte Útil and the eight criteria including 'operate on a 1:1 scale' and 'replace authors with initiators and spectators with users'; Hans Ulrich Obrist's 'generosity as a medium.'",
    whenToUse:
      "Self-positioning when the practice includes salons, gatherings, cohorts, capacity building, train-the-trainer programs, community organizing, or any work where the convening itself is the medium. For framing Portland Digital Corps, Design For The Public 24, the SOMD doctrine pilot, the Years Ahead 2026 conference, and similar work in artist-practitioner register.",
    vocabulary: [
      "social sculpture / Soziale Plastik (Beuys)",
      "expanded concept of art",
      "every human being is an artist",
      "thinking forms",
      "social interstice (Bourriaud)",
      "art is a state of encounter",
      "form as lasting encounter",
      "microtopias / arenas of exchange / conviviality",
      "a tenant of culture",
      "Arte Útil (Bruguera)",
      "feasible utopia",
      "replace authors with initiators",
      "operate on a 1:1 scale",
      "respond to current urgencies",
      "generosity as a medium (Obrist)",
      "curating is a way of working on memory",
      "social practice / socially engaged art",
      "new genre public art (Lacy)",
      "dialogical aesthetics (Kester)",
      "the social turn (Bishop)",
    ],
    howToDropIn:
      "\"Beuys's social sculpture gives the frame: 'every human being is an artist' applied to institution-shaping. Bourriaud gives the relational language: art is a state of encounter; the work as social interstice; microtopias as the scale of the work. Bruguera's Arte Útil gives the operational criteria — 1:1 scale, replace authors with initiators, respond to current urgencies, feasible utopia. Obrist gives the salon and convening tradition: the kitchen show, brutally early breakfasts, generosity as a medium, curating as protest against forgetting. The lineage names convening and capacity-building as artistic practice with their own criteria — not as side activities supporting other work.\"",
    commonPhrasing: "Social sculpture, relational aesthetics, Arte Útil, convening as medium.",
    notes:
      "For framing Portland Digital Corps (Arte Útil-shaped — 1:1 scale, respond to current urgencies, replace authors with initiators), Design For The Public 24 (Obrist's convening / salon tradition), the SOMD doctrine pilot (Beuysian social sculpture in federal training), and any future small-firm or institute work as a continuation of this lineage. Claire Bishop's critique (The Social Turn) is the necessary corrective against hand-wringing 'doing good in a community' versions of the practice. Pair with Critical-Technologist Self-Statement Construction and Critical-Technologist Phrase Bank.",
    source:
      "Joseph Beuys lectures and writings 1970s–80s; Nicolas Bourriaud, *Relational Aesthetics* (1998 / 2002); Tania Bruguera, Arte Útil writings and Asociación de Arte Útil archive; Hans Ulrich Obrist interviews and *Ways of Curating*; Suzanne Lacy, *Mapping the Terrain*; Pablo Helguera, *Education for Socially Engaged Art*; Claire Bishop, *Artificial Hells*; Grant Kester, *Conversation Pieces*.",
    tags: ["social_practice", "relational_aesthetics", "convening", "lineage", "framework"],
  },
  {
    name: "Speculative / Critical / Adversarial Design Lineage",
    category: "speculative_design",
    oneLiner:
      "The lineage of design as inquiry rather than problem-solving — Anthony Dunne and Fiona Raby's critical design and the A/B manifesto; Bruce Sterling's design fiction and 'diegetic prototypes'; Stuart Candy's experiential futures and the experiential-futures ladder; Jim Dator's alternative futures and 'Dator's Law'; Carl DiSalvo's adversarial design and political agonism; the necessary decolonial corrective from Luiza Prado and Pedro Oliveira.",
    whenToUse:
      "Self-positioning and project framing when the work is design as inquiry / probe / provocation rather than as solution-shipping. For framing Occupant Indices ($CPI / $AIU / $LDI as probes that explore questions rather than solve problems), the AI Decision Transparency Dashboard (Dunne & Raby-shaped critical prototype), the Benefits Determination & Appeals System (diegetic prototype demonstrating a possible future of government benefits), and the Public Mechanics frame as adversarial design applied to public-sector technology.",
    vocabulary: [
      "critical design (Dunne & Raby)",
      "speculative design",
      "design fiction (Sterling)",
      "diegetic prototypes",
      "tells worlds rather than stories",
      "experiential futures (Candy)",
      "the experiential futures ladder: setting → scenario → situation → stuff",
      "The Thing From the Future",
      "alternative futures (Dator)",
      "Dator's Law (any useful idea about the future should appear ridiculous)",
      "Manoa four futures: continued growth, collapse, discipline, transformation",
      "adversarial design (DiSalvo)",
      "agonism (Mouffe)",
      "perceptual bridge (Auger)",
      "discursive design (Tharp)",
      "decolonising design (Prado & Oliveira)",
      "questioning the 'critical' in speculative & critical design",
    ],
    howToDropIn:
      "\"Dunne & Raby give the A/B opposition: design as problem solving / design as problem finding; design as solution / design as medium; design for production / design for debate. Sterling and Bleecker give the diegetic prototype — a thing that tells a world rather than a story. Candy gives the experiential-futures ladder for building scenarios into tangible artifacts and immersive encounters. Dator's Law gives license to propose the ridiculous when the ridiculous is what the future actually calls for. DiSalvo's adversarial design gives the political register: design that challenges beliefs, values, and what is taken to be fact. Prado and Oliveira give the corrective against undiscerning privilege in the speculative-design canon.\"",
    commonPhrasing: "Critical design, speculative design, design fiction, experiential futures, adversarial design.",
    notes:
      "For framing Occupant Indices as probes (in the McLuhan + Dunne & Raby sense) rather than as products; the AI Decision Transparency Dashboard as a critical-design prototype that asks 'what if AI decision interfaces had to surface uncertainty by default'; the Benefits Determination & Appeals System as a diegetic prototype demonstrating a possible architectural future. The decolonial corrective from Prado and Oliveira matters when the practice spans federal / academic / public-interest audiences. Pair with Strategic Foresight & Insight Analyst (Corporate / Brand) and Foresight Methodology Stack.",
    source:
      "Anthony Dunne & Fiona Raby, *Speculative Everything* (2013), Critical Design FAQ; Bruce Sterling on design fiction; Julian Bleecker / Near Future Laboratory; Stuart Candy, dissertation and *The Thing From the Future*; Jim Dator and the Manoa School; Carl DiSalvo, *Adversarial Design* (2012); Bruce & Stephanie Tharp on discursive design; Luiza Prado & Pedro Oliveira, 'Questioning the Critical in Speculative & Critical Design.'",
    tags: ["speculative_design", "critical_design", "design_fiction", "lineage", "framework"],
  },
  {
    name: "Placekeeping / Critical Placemaking (Bedoya, Haraway, Decolonial Edge)",
    category: "placemaking",
    oneLiner:
      "The critical edge of placemaking that distinguishes it from creative-class economic development — Roberto Bedoya's 'placekeeping' and 'placeknowing'; Mindy Fullilove's 'root shock' and 'urban alchemy'; Donna Haraway's 'situated knowledges' as critique of 'the god-trick of seeing everything from nowhere'; and the necessary checks on placemaking-as-property-rights-movement vs. placemaking-as-human-rights-movement.",
    whenToUse:
      "Any work touching cities, neighborhoods, communities, or public space — particularly when the corporate / planning register treats placemaking as primarily aesthetic or economic-development. For framing AIGA Portland board work, Indianapolis Design Week founding, Portland Historic Landmarks Commission service, Public Mechanics teaching, and any future urban / civic projects.",
    vocabulary: [
      "placekeeping (Bedoya)",
      "placeknowing",
      "the poesis, policy, and politic of place",
      "the trap of creative placemaking is whether it's a property-rights movement or a human-rights movement",
      "rasquachification (Ybarra-Frausto)",
      "the white spatial imaginary (Lipsitz)",
      "root shock (Fullilove)",
      "urban alchemy",
      "situated knowledges (Haraway)",
      "view from somewhere",
      "the god-trick of seeing everything from nowhere",
      "answerable for what we learn how to see",
      "Project for Public Spaces (PPS) tradition",
      "the community is the expert",
      "Lighter, Quicker, Cheaper",
    ],
    howToDropIn:
      "\"Bedoya's placekeeping is the move: 'not just preserving the facade of the building but also keeping the cultural memories associated with a locale alive, keeping the tree once planted in the memory of a loved one lost in a war and keeping the tenants who have raised their family in an apartment.' His triplet — creative placemaking, placekeeping, placeknowing — names 'the poesis, policy, and politic that shape places.' Haraway gives the epistemological frame: only partial perspective promises objective vision; situated knowledge is about limited location and being answerable for what we learn how to see. Together they prevent placemaking from sliding into placeless creative-class economic development.\"",
    commonPhrasing: "Placekeeping, critical placemaking, situated knowledges.",
    notes:
      "Bedoya's framing is the necessary corrective when 'creative placemaking' gets used as cover for displacement-driving development. The Mindy Fullilove vocabulary (root shock, urban alchemy) names the harm and the repair work specifically. Useful for any practice that touches Portland, Indianapolis, or Bloomington — cities the user has actively worked in — and for the Public Mechanics teaching frame at Michigan. Pair with Critical-Technologist Self-Statement Construction and the McLuhan-Easterling-Mattern-Hill lineage card.",
    source:
      "Roberto Bedoya, 'Placemaking and the Politics of Belonging and Dis-Belonging' and related essays; Mindy Fullilove, *Root Shock* (2004); Donna Haraway, 'Situated Knowledges' (1988); Tomás Ybarra-Frausto on rasquachismo; George Lipsitz on the white spatial imaginary; Project for Public Spaces and Jan Gehl traditions.",
    tags: ["placemaking", "placekeeping", "critical", "urbanism", "lineage", "framework"],
  },
  {
    name: "Critical Engineer / Critical Technologist Lineage",
    category: "critical_technology",
    oneLiner:
      "The lineage explicitly named in the Critical Engineering Manifesto and extended by Kate Crawford, Shannon Mattern, Mimi Ọnụọha, Sam Lavigne, Vladan Joler (SHARE Lab), Wendy Hui Kyong Chun, Safiya Noble, Ruha Benjamin, and Virginia Eubanks — practitioners who treat technology as material to be read, exposed, and worked on rather than as neutral tooling.",
    whenToUse:
      "Self-positioning toward critical-technology audiences (research institutes, public-interest AI orgs, academic appointments, foundation program officers funding tech-and-society work, journalism). For framing State Capacity AI, Occupant Indices, the AI Decision Transparency Dashboard, and Public Mechanics teaching in a register already established and respected by these audiences.",
    vocabulary: [
      "critical engineering (Oliver / Savičić / Vasiliev)",
      "the exploit as the most desirable form of exposure",
      "peer inside the black box",
      "each work of engineering engineers its user",
      "tactical media (Lovink / Garcia)",
      "never perfect, always in becoming",
      "planetary-scale computation (Bratton)",
      "The Stack",
      "anatomy of an AI system (Crawford / Joler)",
      "new form of extractivism",
      "missing datasets (Ọnụọha)",
      "the New Jim Code (Benjamin)",
      "algorithmic oppression (Noble)",
      "the digital poorhouse (Eubanks)",
      "our media matter most when they seem not to matter at all (Chun)",
      "entreprecariat (Lorusso)",
      "a city is not a computer (Mattern)",
    ],
    howToDropIn:
      "\"The Critical Engineering Manifesto is the canonical text: critical engineering treats engineering as the most transformative language of our time and studies and exploits it to expose influence. The work is exposing what the technology does to its users, surfacing what black boxes hide, peering inside the implementation past the awe. Crawford's *Anatomy of an AI System* extends this into AI specifically: a large-scale map of the human labor, data, and planetary resources required to build and operate even a smart speaker — a new form of extractivism. Ọnụọha's missing datasets, Benjamin's New Jim Code, Noble's algorithmic oppression, Eubanks's digital poorhouse — each names a specific shape the practice takes. The lineage gives institutional cover when 'AI ethics' or 'responsible AI' is the audience-flattened version of what you're doing.\"",
    commonPhrasing: "Critical engineering, critical technology, critical AI.",
    notes:
      "Useful for positioning toward research-institute fellowship roles (Beeck, GovEx, MIT GovLab, Stanford HAI, Berkeley CLTC), foundation program officer audiences, and journalism / policy venues. The lineage is institutional, respected, and already in the gatekeeper class's reading habits. Pair with Critical-Technologist Self-Statement Construction, Critical-Technologist Phrase Bank, the McLuhan-Easterling-Mattern-Hill card, and AI Governance & Responsible AI Leadership / AI Ethicist (Embedded IC) from the existing AI ethics section.",
    source:
      "Critical Engineering Manifesto (Oliver / Savičić / Vasiliev, 2011); Geert Lovink & David Garcia, 'The ABC of Tactical Media' (1997); Benjamin Bratton, *The Stack*; Kate Crawford and Vladan Joler, *Anatomy of an AI System*; Mimi Ọnụọha on missing datasets; Ruha Benjamin, *Race After Technology*; Safiya Umoja Noble, *Algorithms of Oppression*; Virginia Eubanks, *Automating Inequality*; Wendy Hui Kyong Chun, *Updating to Remain the Same*; Shannon Mattern, *A City Is Not a Computer*.",
    tags: ["critical_technology", "critical_engineering", "lineage", "framework"],
  },

  // —— Executive communication / decision-first storytelling ——————————————

  {
    name: "Executive Communication Discipline (Decision-First, Tailored, Concise)",
    category: "communication",
    oneLiner:
      "The discipline of communicating with executives and senior leadership — leading with the decision and rationale rather than the chronological journey, tailoring the message to the audience's actual decision-making needs, and ruthlessly pruning detail that doesn't change the call. Often the named gap between senior IC and staff / principal / leadership levels.",
    whenToUse:
      "Senior IC roles where moving up requires the communication shift; presentations and briefings to executives; written updates to senior leadership; emails to C-suite; any context where the audience is context-switching rapidly across topics and has limited attention budget for any one update.",
    vocabulary: [
      "decision-first communication",
      "executive presence",
      "exec summary / TL;DR",
      "the bottom line up front (BLUF)",
      "lead with the recommendation",
      "trade-offs and judgment as the artifact",
      "context-as-Q&A (not preamble)",
      "audience-tailored framing",
      "the ONE thing I want them to remember",
      "the ONE action I want them to take",
    ],
    howToDropIn:
      "\"Executive communication is a different discipline than peer communication or interview communication. Executives context-switch every 30 minutes across wildly different topics; their attention is spent before you start. The discipline is leading with the decision, the recommendation, or the trade-off — not with the discovery journey that led you there. Context lives in Q&A, not in the opener. Tailor for what THIS audience needs to decide, not for what's interesting to you. Two questions before any senior update: what's the ONE thing I need them to remember, and what's the ONE action I want them to take. Everything else is in service of those two.\"",
    commonPhrasing: "Executive communication, executive presence, exec briefing, senior-leadership communication.",
    notes:
      "Distinct from interview communication (which the STAR Method card covers) — executive communication is ongoing professional context, not high-stakes hiring. The named gap between senior and staff / principal / leadership levels in product, design, and engineering tracks is often this communication shift rather than craft depth. Wes Kao runs the most cited tech-industry course on this (Maven, 'Executive Communication & Influence'); her newsletter is a working reference. Pair with Executive Briefing Frameworks, Designing for Executive Cognitive Load, Trusted Advisor Stance (Senior Consultant), and the existing Minto Pyramid Principle card.",
    source:
      "Wes Kao executive communication course and newsletter (newsletter.weskao.com, Maven); Barbara Minto, *The Pyramid Principle*; McKinsey communication tradition; senior-leadership coaching consensus; r/ProductManagement community discussion (2026).",
    tags: ["communication", "executive_presence", "leadership", "framework"],
  },
  {
    name: "Executive Briefing Frameworks (SCR / What-So What-Now What / Minto Pyramid)",
    category: "communication",
    oneLiner:
      "The structural frameworks for opening any executive briefing — McKinsey's SCR (Situation, Complication, Resolution) for written and verbal openings; 'What, So What, Now What' as a reflective update structure; the Minto Pyramid (governing thought → key supporting points → details) as the top-down communication backbone all of consulting trains on.",
    whenToUse:
      "Drafting briefing decks, executive emails, update notes, board materials, meeting openings, or any communication that needs to land structurally on first read. Particularly useful for senior IC and leadership roles where written executive communication is part of the standing job.",
    vocabulary: [
      "SCR (Situation, Complication, Resolution) — McKinsey",
      "What, So What, Now What",
      "Minto Pyramid (governing thought, key points, details)",
      "top-down communication",
      "governing thought",
      "MECE (Mutually Exclusive, Collectively Exhaustive)",
      "the rule of three",
      "headline-driven slides",
      "answer-first writing",
    ],
    howToDropIn:
      "\"For executive briefings, the structural choice is the work. SCR opens with the current state (Situation), names what changed or what's at stake (Complication), and proposes the call (Resolution). 'What, So What, Now What' is the reflective triple — what happened, why it matters, what's next. Minto's Pyramid is the governing structure — start with the answer (the governing thought), then the three supporting points, then the details for the people who want them. All three frameworks share the same instinct: lead with the answer, support with structure, leave the chronology and the back-story for Q&A.\"",
    commonPhrasing: "SCR framework, What So What Now What, Minto Pyramid, top-down communication.",
    notes:
      "These are all consulting-tradition frameworks (McKinsey, BCG, Bain communication training). The 'What, So What, Now What' reflective frame is often attributed to Gary Rolfe (nursing reflective practice, 2001) and is now widely used across consulting and education. Pair with Executive Communication Discipline, the existing Minto Pyramid Principle card, and Designing for Executive Cognitive Load.",
    source:
      "McKinsey SCR framework (managementconsulted.com); Gary Rolfe, 'What, So What, Now What' reflective model (2001); Barbara Minto, *The Pyramid Principle*.",
    tags: ["communication", "frameworks", "consulting", "framework"],
  },
  {
    name: "Designing for Executive Cognitive Load (Sophisticated Toddlers, ONE Thing)",
    category: "communication",
    oneLiner:
      "The audience-design discipline behind executive communication — treating executives as 'sophisticated toddlers' (brilliant but context-switching every 30 minutes), planning around the ONE thing you want them to retain and the ONE decision you want them to make, and accepting that boringly clear beats fancy footwork.",
    whenToUse:
      "Preparing for any executive presentation, board meeting, all-hands, or senior-leadership update. As a check before publishing executive-facing written communication. As a coaching frame for ICs starting to communicate at exec level.",
    vocabulary: [
      "sophisticated toddlers",
      "context-switching audience",
      "the ONE thing to remember",
      "the ONE action to take",
      "boringly clear beats fancy footwork",
      "razzle and dazzle (anti-pattern)",
      "from nowhere (anti-pattern: starting without an anchor)",
      "the bouncing ball (anti-pattern: nonlinear narrative)",
      "attention budget",
      "decision-grade information",
    ],
    howToDropIn:
      "\"Executives aren't your audience the way your peers are. They're context-switching every 30 minutes across wildly different topics. They're brilliant but their attention is fragmented across the whole org chart. The reframe that works: prepare for them like sophisticated toddlers — brilliant, opinionated, easily distracted by a weird detail, and likely to remember exactly one thing you said. Plan around that one thing. Boringly clear beats fancy footwork; clear linear train of thought beats brilliant ideas with nonlinear delivery; small manageable asks beat blowing things out of proportion.\"",
    commonPhrasing: "Executive cognitive load, attention budget, the ONE thing.",
    notes:
      "The 'sophisticated toddlers' frame is widely shared in tech management circles (most cited in r/ProductManagement community discussions); the 'ONE thing / ONE action' discipline is consistent across executive communication coaching (Wes Kao, McKinsey, BCG). The anti-patterns named here — coming from nowhere, the bouncing ball, blowing things out of proportion, razzle and dazzle — are the specific failures executives notice. Pair with Executive Communication Discipline, Executive Briefing Frameworks, and Trusted Advisor Stance (Senior Consultant).",
    source:
      "Executive coaching practice; tech-industry communication consensus; r/ProductManagement community discussion (2026); Wes Kao's executive communication material.",
    tags: ["communication", "executive_presence", "audience_design", "framework"],
  },

  // —— Ecommerce product management (Adobe stack / luxury subsidiary) ——————

  {
    name: "Digital Product Manager (Luxury / Premium Subsidiary at Enterprise Parent)",
    category: "product_management",
    oneLiner:
      "The mid-to-senior PM archetype at a luxury or premium subsidiary brand owned by a much larger parent company — Ann Sacks (Kohler), Williams-Sonoma brands at WSI, Maison Margiela at OTB, multiple at LVMH and Kering — where the PM owns the brand's ecommerce roadmap and platform-level decisions but operates inside the parent's enterprise IT, data, and procurement systems.",
    whenToUse:
      "Digital PM / Senior PM postings at premium subsidiary brands within larger holding companies, particularly home goods (Kohler family: Ann Sacks, Robern, Sterling), apparel and luxury (LVMH brands, Kering brands, OTB brands), home furnishings (Williams-Sonoma family, RH portfolio), beauty and personal care (Estée Lauder Companies brands, L'Oréal brands). 5+ year experience floor is standard.",
    vocabulary: [
      "subsidiary brand within enterprise parent",
      "trade + DTC blend",
      "luxury / premium ecommerce",
      "enterprise IT partnership",
      "platform-as-service model",
      "brand-side PM (not platform PM)",
      "12-month rolling roadmap",
      "PDP optimization",
      "product configurator",
      "samples ordering",
      "trade account experience",
      "showroom appointment tooling",
      "merchandising tools",
    ],
    howToDropIn:
      "\"Digital PM at a luxury subsidiary inside an enterprise parent has a specific operating shape. The PM owns the brand's ecommerce roadmap and platform-level decisions, but the platform itself (CMS, DAM, PIM, analytics) is enterprise infrastructure shared with sister brands — so the PM partners closely with parent-IT on releases, integration, and capability building rather than owning the stack outright. The audience blend is usually trade (designers, contractors, B2B pros) plus DTC (homeowners, end customers), which is service-design's two-sided problem inside an ecommerce surface.\"",
    commonPhrasing: "Digital Product Manager, Brand Digital PM, Ecommerce PM (luxury / premium).",
    notes:
      "Distinct from PM at a pure-play DTC ecommerce brand (where the PM owns the full stack) and from PM at the enterprise parent (who owns the platform infrastructure across brands). The subsidiary-PM seat is a translator role: enterprise IT speaks platform; brand marketing speaks story; trade and DTC customers speak different languages too. The Adobe ecosystem (AEM + DAM + PIM + Analytics) is the most common stack in this segment; Salesforce Commerce Cloud and SAP Hybris are alternatives at adjacent companies. Pair with Adobe Ecommerce Stack Ownership, Multi-Audience Digital Governance, and Product Manager, Digital Experience (Regulated Consumer Industries) for the regulated-consumer cousin.",
    source:
      "Validated against 2026 postings: Kohler 'Digital Product Manager, Ann Sacks' (Portland OR, onsite 4-day, $107k–$166k); analogous roles across Kohler family (Robern, Sterling), Williams-Sonoma Inc. portfolio, LVMH brand-level digital teams, Kering brands, Estée Lauder Companies brand portfolio.",
    tags: ["product_management", "ecommerce", "luxury", "subsidiary", "role", "framework"],
  },
  {
    name: "Adobe Ecommerce Stack Ownership (AEM + DAM + PIM + Analytics)",
    category: "product_management",
    oneLiner:
      "The platform-specific PM specialty for enterprise digital product management running on the Adobe Experience Cloud stack — Adobe Experience Manager (AEM) for CMS, AEM Assets for DAM, Adobe Commerce (Magento) for commerce, Adobe Analytics for measurement, plus PIM integration (frequently Salsify, inriver, or Adobe's own PIM).",
    whenToUse:
      "Digital PM, ecommerce PM, or platform PM JDs that explicitly name AEM or Adobe Experience Cloud. Common at large consumer brands and enterprise B2B that standardized on Adobe (Kohler, Marriott, Walmart, Best Buy, Lufthansa, BMW, T-Mobile, US Bank).",
    vocabulary: [
      "Adobe Experience Manager (AEM)",
      "AEM Sites / AEM Assets / AEM Forms",
      "Adobe Experience Cloud",
      "Adobe Commerce (Magento)",
      "Adobe Analytics",
      "Adobe Target (personalization)",
      "AEM Cloud Service / AMS",
      "content fragments",
      "experience fragments",
      "headless / hybrid AEM",
      "PIM (Salsify, inriver, Adobe PIM)",
      "DAM governance",
      "asset metadata and taxonomy",
      "syndication readiness",
    ],
    howToDropIn:
      "\"The Adobe stack is its own platform context with its own operating norms. AEM is the CMS but is also the asset substrate (Sites and Assets share the same JCR backbone), which makes content / asset workflows highly intertwined. PIM integration is rarely native — Salsify or inriver are the common third-party plays, with Adobe pushing its own PIM more recently. Analytics is a separate Adobe product (Adobe Analytics, not Google Analytics) with its own event taxonomy. The PM's job is partly product roadmap and partly orchestrating these Adobe products against each other plus the parent company's IT release cadence.\"",
    commonPhrasing: "AEM, Adobe stack, Adobe Experience Cloud, Adobe Commerce, AEM Sites, AEM Assets.",
    notes:
      "Adobe is the dominant enterprise-CMS / digital-experience platform at large consumer brands. Knowing AEM specifically (not just 'a CMS') is the credential bar for many of these PM roles. Worth being honest in interviews about AEM-specific vs. general-CMS experience — the version differences (AEM 6.5 vs. AEM as a Cloud Service) carry distinct operating implications. Pair with Digital Product Manager (Luxury / Premium Subsidiary at Enterprise Parent), Enterprise CMS Stewardship, and Multi-Audience Digital Governance.",
    source:
      "Adobe Experience Cloud platform documentation; AEM Cloud Service practice; enterprise ecommerce PM job market 2024–2026.",
    tags: ["product_management", "ecommerce", "adobe", "aem", "platform", "framework"],
  },

  // —— Consulting design practice (Big Four / Accenture Song / boutiques) —

  {
    name: "Experience Strategy Manager / Service Design Manager (Big Consulting Firm Design Practice)",
    category: "consulting",
    oneLiner:
      "The senior-IC-with-some-people-leadership archetype at the design practices inside big consulting firms — Accenture Song, IDEO, Method, Frog (Capgemini), BCG Digital Ventures, McKinsey Design, Deloitte Digital, EY Doberman, KPMG Innovation Factory — leading client engagements end-to-end with accountability split across client delivery, business development, and practice / people development.",
    whenToUse:
      "Experience Strategy Manager / Service Design Manager / Senior Manager postings at big consulting design practices. 6+ years experience floor, 4+ years leading end-to-end engagements, 3+ years coaching designers. Salary range typically $90k–$260k depending on US location.",
    vocabulary: [
      "Experience Strategy (XS)",
      "Service Design (SD)",
      "client engagement leadership",
      "scoping and project planning",
      "discovery, synthesis, concepting, transition",
      "capabilities, technologies, organizational change mapping",
      "operating model design",
      "experience-led business strategy",
      "thought leadership / case studies",
      "practice contribution",
      "three-way accountability: delivery + BD + practice",
      "consulting-firm grading",
    ],
    howToDropIn:
      "\"Experience Strategy Manager at a big consulting firm has a three-way accountability structure distinct from in-house design leadership. Client delivery — leading engagements end-to-end with quality and timeline accountability across disciplines. Business development — contributing to proposals, creating case studies, surfacing unmet client needs to account leaders. Practice and people development — mentoring designers in the craft community, contributing methods and ways-of-working. The seat assumes you can do all three; failure to grow in any one limits advancement.\"",
    commonPhrasing: "Experience Strategy Manager, Service Design Manager, Senior Manager (Design Practice).",
    notes:
      "Distinct from in-house product / design leadership (different incentives, different accountability structure) and from boutique consultancy (smaller team, fewer specializations). Big consulting design practices typically grade against three career dimensions: delivery excellence, business development contribution, practice contribution. Promotions require all three; just being great at client work doesn't move you up. Pair with AI-Embedded Design Practice and Senior OCM Consultant (AI / Digital Transformation) for the broader Big Four consulting career-grading context.",
    source:
      "Validated against 2026 postings: Accenture Song 'Experience Strategy Manager / Service Design Manager' (Senior Level, multiple US locations, $87k–$266k); analogous roles at IDEO, Method, Frog Capgemini, BCG Digital Ventures, McKinsey Design, Deloitte Digital, EY Doberman.",
    tags: ["consulting", "experience_strategy", "service_design", "role", "framework"],
  },
  {
    name: "AI-Embedded Design Practice (Embedding AI Into Design Workflows)",
    category: "consulting",
    oneLiner:
      "The emerging discipline of embedding AI tools and workflows into experience strategy, service design, and product design practice — not as a topic the team studies, but as the working substrate of how the team produces research synthesis, concepting, narratives, prototypes, and case studies day to day.",
    whenToUse:
      "Consulting design roles that explicitly name 'embedding AI tools and workflows into product strategy and design practices,' 'modeling AI-enabled ways of working,' or similar. Increasingly common in 2025–2026 as consulting firms compete on AI-augmented delivery economics.",
    vocabulary: [
      "AI-embedded design practice",
      "AI-augmented research synthesis",
      "AI-accelerated concepting",
      "prompt-driven prototyping",
      "AI-enabled ways of working",
      "delivery economics with AI",
      "AI workflow documentation",
      "quantified AI impact (delivery / quality / team performance)",
      "thought leadership from practice",
      "tooling: Claude, ChatGPT, v0, Cursor, Figma AI, Notion AI",
    ],
    howToDropIn:
      "\"AI-embedded design practice isn't 'using AI for a task here and there.' It's restructuring the team's working substrate so AI is in the loop on research synthesis, concepting, narrative drafting, prototype generation, and case-study production. The consulting-firm version of this role asks the lead to document the workflow impact and quantify it — delivery velocity, quality, team performance — and feed that back as thought leadership. Modeling the working pattern for the team is part of the job; the team learns from watching the lead use the tools in flow.\"",
    commonPhrasing: "AI-embedded design, AI-augmented workflows, AI in design practice.",
    notes:
      "Closely related to AI-Augmented Service Design (the emerging-discipline framework card) but framed for the consulting-firm context where AI workflow documentation and quantified impact are practice-level deliverables, not just project outcomes. Pair with Experience Strategy Manager / Service Design Manager (Big Consulting Firm Design Practice), AI-Augmented Service Design, AI Spec-Driven Development, and the existing forward-deployed framework cards.",
    source:
      "Consulting-firm AI-embedded design practice 2025–2026 (Accenture Song, IDEO, Deloitte Digital, McKinsey Design); Accenture Song XS Manager JD as a representative public example of the discipline being named as a hire criterion.",
    tags: ["consulting", "ai_augmented", "design_practice", "framework"],
  },

  // —— Professional Services / Implementation (B2B SaaS) ————————————————————

  {
    name: "Head of Implementation & Onboarding (B2B SaaS, AI-Native Transformation)",
    category: "professional_services",
    oneLiner:
      "The senior leadership archetype at B2B SaaS companies transforming Professional Services delivery from manual, consultant-driven onboarding into scalable AI-assisted implementation — leading global delivery teams across regions, standardizing workflows, embedding AI into discovery and solution design, and enforcing new delivery standards against the gravity of legacy manual processes.",
    whenToUse:
      "Head of Implementation, Head of Professional Services, Head of Onboarding, VP Implementation, or Director of Customer Onboarding postings at growth-stage and enterprise B2B SaaS. Common at marketing tech (Supermetrics, HubSpot, Hightouch, Segment), data platforms (Snowflake, Databricks, dbt Labs), CRM (Salesforce ecosystem), and other implementation-heavy SaaS. Distinct shape from Customer Success leadership.",
    vocabulary: [
      "Professional Services (PS) leadership",
      "Implementation Services",
      "Onboarding at scale",
      "AI-native delivery",
      "human-in-the-loop delivery",
      "scalable delivery engine",
      "standardized implementation workflows",
      "validation and oversight (vs. manual execution)",
      "delivery quality checkpoints",
      "customer activation",
      "regional pod / region-by-region operations",
      "EMEA / NA / JAPAC team composition",
      "Customer Success handoff",
    ],
    howToDropIn:
      "\"Head of Implementation at a SaaS company transforming PS is a specific shape — not Customer Success, not Sales Engineering, not Product. The seat owns implementation delivery across regions, with accountability for moving the team from manual consultant-driven projects to AI-assisted standardized workflows. The hardest part isn't building the new model — it's enforcing it against the gravity of how the team has always worked. Implementation specialists tend to revert to manual execution because that's what they're skilled at; the leadership move is reshaping the role so 'validation and oversight in an AI-assisted environment' becomes the skill the org rewards.\"",
    commonPhrasing: "Head of Implementation, Head of Professional Services, VP Implementation, Director of Onboarding.",
    notes:
      "Distinct from Customer Success leadership (which owns post-onboarding relationship and renewal) and from Sales Engineering (which owns pre-sale technical fit). Implementation is the bridge — getting the customer from contract to value. The AI-native transformation specifically: most SaaS PS orgs were built around senior implementation consultants doing high-touch projects; the transformation reframes the seat as quality oversight on AI-generated discovery, solution design, and configuration. The role often reports to a Chief Customer Officer or VP of Professional Services. Pair with AI-Native Professional Services Transformation, AI Adoption & Capability Building (OCM), and the Centralized AI Enablement Team (Innovation Catalyst Model) card for adjacent operating models.",
    source:
      "Validated against 2026 postings: Supermetrics 'Head of Implementation & Onboarding' (Helsinki / Dublin / Amsterdam / UK); analogous roles across marketing tech, data platforms, and Salesforce-ecosystem SaaS.",
    tags: ["professional_services", "saas", "ai_transformation", "leadership", "role", "framework"],
  },
  {
    name: "AI-Native Professional Services Transformation",
    category: "professional_services",
    oneLiner:
      "The specific transformation playbook for moving a SaaS Professional Services organization from manual, consultant-driven implementation to AI-assisted standardized delivery — embedding AI in discovery and solution design, standardizing workflows for reusability, shifting the implementation specialist's role from execution to validation and oversight, and preventing fallback to legacy manual processes.",
    whenToUse:
      "Any PS / Implementation / Customer Onboarding org explicitly transforming toward AI-native delivery. Common at growth-stage SaaS companies under margin pressure as professional-services revenue commoditizes; also at large enterprise SaaS modernizing legacy PS practices.",
    vocabulary: [
      "AI-native delivery model",
      "human-in-the-loop validation",
      "discovery automation",
      "solution-design AI assistance",
      "configuration generation",
      "delivery workflow standardization",
      "reusability across projects and regions",
      "validation checkpoints",
      "fallback prevention",
      "legacy manual processes (anti-pattern)",
      "consultant-to-validator role shift",
      "PS margin transformation",
    ],
    howToDropIn:
      "\"AI-native Professional Services transformation is concrete: embed AI in discovery (interview synthesis, requirements extraction), solution design (configuration drafts, integration mapping), and implementation prep (artifact generation, dependency tracing) so the implementation specialist's role shifts from manual execution to validation and oversight. Standardize the workflows so they're reusable across projects and regions. Establish validation checkpoints by customer segment so quality stays consistent. The harder operating problem is the fallback: implementation consultants are skilled at manual delivery and will revert without active enforcement of the new model.\"",
    commonPhrasing: "AI-native PS, AI-assisted implementation, scalable onboarding, PS transformation.",
    notes:
      "The fallback-prevention problem is the most consistent failure mode. Specialists trained on manual delivery don't easily shift to oversight roles because the new role feels less skilled and less differentiated — even though it's actually more leveraged. Leadership move: rewrite role definitions, performance criteria, and incentives around validation-and-oversight rather than around individual project execution. Adjacent transformations include Customer Success org transformation (toward AI-assisted health-score interpretation) and Sales Engineering transformation (toward AI-assisted technical-fit assessment). Pair with Head of Implementation & Onboarding (B2B SaaS), AI Adoption & Capability Building, and ADKAR (Prosci) for the workforce-change discipline.",
    source:
      "B2B SaaS Professional Services transformation practice 2024–2026; Supermetrics Head of Implementation JD (2026) as a representative public example.",
    tags: ["professional_services", "saas", "transformation", "ai_native", "framework"],
  },

  // —— AI safety policy research ——————————————————————————————————————————

  {
    name: "Societal Defense Researcher / AI Civil Defense Policy",
    category: "ai_safety",
    oneLiner:
      "The AI safety policy researcher archetype focused on societal-level defense and resilience — disaster preparedness planning for AI-related crises, vulnerability assessments of critical infrastructure and institutions, multi-jurisdictional governance frameworks, tabletop exercises and simulation materials, and adaptation of existing civil defense frameworks to novel AI threats. Sits at the intersection of AI safety, public policy, critical infrastructure protection, and emergency management.",
    whenToUse:
      "Policy researcher / senior researcher / fellow postings at AI safety institutions explicitly framed around societal-level risk, civil defense, critical infrastructure, or emergency response. Common at CARMA, Center for AI Safety (CAIS), Center for Security and Emerging Technology (CSET), RAND AI policy practice, AI Safety Institutes (UK, US, EU, Singapore, Japan, France), Future of Life Institute, Apollo Research adjacent work.",
    vocabulary: [
      "societal defense",
      "AI civil defense",
      "disaster preparedness planning (AI-flavored)",
      "vulnerability assessment of critical societal systems",
      "cascade failure analysis",
      "multi-jurisdictional governance",
      "tabletop exercises / simulation materials",
      "early warning indicators",
      "institutional dependency mapping",
      "civil defense framework adaptation",
      "continuity of government operations",
      "critical infrastructure protection (CIP)",
      "supply chain resilience",
      "AI emergency response",
    ],
    howToDropIn:
      "\"Societal Defense Researcher is a specific lane inside AI safety policy — distinct from technical AI alignment research (interpretability, RLHF, evals) and distinct from generic AI governance (which tends toward principles documents). The work is concrete: identify systemic weaknesses that advanced AI could exploit or exacerbate; design resilience strategies; adapt existing civil defense frameworks (pandemic preparedness, critical infrastructure protection, cybersecurity incident response) to AI-specific threat models; produce tabletop materials decision-makers can actually run. The Center for AI Risk Management & Alignment (CARMA) is one of the cleanest exemplars of this lane.\"",
    commonPhrasing: "Societal defense research, AI civil defense, AI emergency response policy.",
    notes:
      "The lane is comparatively young — most AI safety policy research has been about governance principles, model evaluation, or technical alignment. Societal-defense framing borrows from biosecurity (pandemic preparedness), cybersecurity (incident response), and civil defense (continuity of government, critical infrastructure protection) and applies the same instinct to AI risk scenarios. Compensation typically lower than technical safety research roles ($85k–$135k is representative for CARMA-tier orgs); the trade is mission alignment and shaping a still-forming field. Pair with AI Safety Policy Research Landscape, STS-to-AI-Safety Translation, AI Governance & Responsible AI Leadership, and the existing Critical Engineer / Critical Technologist lineage card.",
    source:
      "Validated against 2026 postings: CARMA (Center for AI Risk Management & Alignment) 'Societal Defense Researcher' ($85k–$135k, remote, June 2026); analogous postings at Center for AI Safety (CAIS), CSET, RAND AI policy, AI Safety Institutes (UK, US, EU).",
    tags: ["ai_safety", "policy_research", "civil_defense", "role", "framework"],
  },
  {
    name: "AI Safety Policy Research Landscape (Institutional Map)",
    category: "ai_safety",
    oneLiner:
      "The institutional landscape of AI safety policy research as of 2026 — from technical safety labs to policy think tanks to government safety institutes to philanthropic grantmaking — with the funder, hiring, and publication patterns specific to each tier. The lane has grown rapidly since 2023 and now spans dozens of organizations across the technical-policy spectrum.",
    whenToUse:
      "Career navigation in AI safety, foundation/grant strategy, distribution and publishing strategy in the lane, peer-set mapping. Useful for orienting toward which sub-lane is closest to a given practitioner's existing work.",
    vocabulary: [
      "AI Safety Institute (US, UK, EU, Singapore, Japan, France, Canada)",
      "Frontier AI labs (Anthropic, OpenAI, DeepMind, xAI, Meta AI)",
      "Technical safety research orgs (METR, Apollo Research, Redwood Research, ARC Evals, Far AI, MIRI)",
      "Policy think tanks (CSET at Georgetown, RAND AI policy, Future of Life Institute, Center for AI Safety, CARMA, AI Policy Institute, Brookings AI Initiative, GovAI at Oxford, Centre for the Governance of AI)",
      "Philanthropic grantmaking (Open Philanthropy AI safety, Long-Term Future Fund, Survival and Flourishing Fund, Patrick J. McGovern Foundation)",
      "Civil society / advocacy (Center for Humane Technology, Encode Justice, Common Sense Media, Mozilla AI)",
      "Academic centers (Stanford HAI, MIT CSAIL, Berkeley CHAI, Cambridge Leverhulme CFI, NYU AI Now)",
      "EA-adjacent vs. mainstream-policy framing",
      "preparedness vs. alignment vs. governance vs. evals",
    ],
    howToDropIn:
      "\"The AI safety field has several distinct sub-lanes worth distinguishing. Technical safety research (interpretability, RLHF, evals, scalable oversight) lives at Anthropic, OpenAI, DeepMind, METR, Apollo, Redwood, ARC Evals, Far AI. Policy research lives at CSET, RAND, FLI, CAIS, CARMA, GovAI, Brookings AI. Government safety institutes (UK AISI, US AISI, EU AI Office, Singapore IMDA, Japan AISI) are growing fast and hiring across both technical and policy profiles. Philanthropic grantmaking (Open Philanthropy, LTFF, SFF) shapes the field's hiring and research direction more than most fields. Civil society and academic centers round out the ecosystem.\"",
    commonPhrasing: "AI safety field, AI safety landscape, AI policy research ecosystem.",
    notes:
      "The field has grown 5-10x since 2023 in terms of institutions hiring; compensation varies dramatically (frontier labs pay tech-industry rates, policy think tanks pay $80k–$160k, government safety institutes pay GS-grade or equivalent). The EA-adjacent vs. mainstream-policy framing matters for hiring fit: some orgs (CARMA, MIRI, Apollo, GovAI) have strong EA cultural roots; others (CSET, RAND, Brookings, government institutes) are mainstream-policy in tone. Both lanes do real work; the cultural fit question is real. Pair with Societal Defense Researcher / AI Civil Defense Policy, STS-to-AI-Safety Translation, AI Regulatory Landscape (EU AI Act, NIST AI RMF, US Sectoral), and AI Governance & Responsible AI Leadership.",
    source:
      "AI safety institutional landscape mapping (2024–2026); Open Philanthropy AI safety grants database; 80,000 Hours AI safety job board; AI Safety Institutes' published structures.",
    tags: ["ai_safety", "field_map", "landscape", "framework"],
  },
  {
    name: "STS-to-AI-Safety Translation (Critical-Tech Work in Safety Register)",
    category: "ai_safety",
    oneLiner:
      "The translation pattern that lets STS (Science and Technology Studies), critical-technology, and sociotechnical-research work land in AI safety policy contexts — keeping the substantive sociotechnical analysis while shifting register from critique-of-technology to risk-mitigation-and-governance, and from academic discourse to policy-actionable framing.",
    whenToUse:
      "Career-pivot translation when an STS, critical-tech, or sociotechnical-research background needs to land in an AI safety hiring or grantmaking context. Also useful when collaborating with technical-safety researchers who don't share the STS vocabulary.",
    vocabulary: [
      "sociotechnical risk",
      "critical infrastructure dependency analysis",
      "institutional vulnerability assessment",
      "deployment context analysis",
      "translating critique into governance recommendation",
      "policy-actionable framing",
      "risk-mitigation framing (vs. critique framing)",
      "operational governance proposal",
      "the substantive overlap between STS and AI safety policy",
    ],
    howToDropIn:
      "\"STS and critical-technology work usually frames itself as critique — naming what's broken, who bears the cost, what's hidden. AI safety policy work usually frames itself as risk mitigation — naming what could fail, what the cascade looks like, what the intervention is. The substantive overlap is large; the register is different. The translation move: keep the sociotechnical analysis intact (institutional dependencies, deployment context, who bears the cost, what's hidden), and recast it as risk assessment plus governance recommendation. The work that names how an institution fails to manage AI deployment IS AI safety work — once it's framed as risk and recommendation rather than as critique.\"",
    commonPhrasing: "STS to AI safety, critical-tech to AI policy, sociotechnical risk research.",
    notes:
      "Several established STS / critical-tech researchers have made this pivot successfully: Kate Crawford's *Anatomy of an AI System* and *Atlas of AI* are STS work that landed in AI safety policy discourse; Shannon Mattern's infrastructural and maintenance work translates directly; Ruha Benjamin's *Race After Technology* informs algorithmic risk assessment; Virginia Eubanks's *Automating Inequality* shapes welfare-state AI risk framing. The pivot reads less as 'changing fields' and more as 'translating register.' Pair with Critical Engineer / Critical Technologist Lineage, AI Safety Policy Research Landscape, Societal Defense Researcher / AI Civil Defense Policy, and the McLuhan-Easterling-Mattern-Hill critical-systems lineage card.",
    source:
      "STS / critical-technology to AI safety policy translation practice 2020–2026; Kate Crawford, Shannon Mattern, Ruha Benjamin, Virginia Eubanks as exemplars who made this register shift visible.",
    tags: ["ai_safety", "sts", "translation", "framework"],
  },
];

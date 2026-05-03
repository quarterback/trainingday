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
];

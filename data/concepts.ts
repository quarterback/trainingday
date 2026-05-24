import type { ConceptCard } from "@/lib/publicMechanics";

// Public Mechanics Concept Cards — v1 active vocabulary (18 concepts).
// Author of canon: Ron Bronson. IDs are stable citation handles.
// PMCC-001 is reserved for Calculative Asymmetry per the canon's citation
// examples; the remaining concepts follow the active-vocabulary order.

export const concepts: ConceptCard[] = [
  {
    slug: "calculative-asymmetry",
    title: "Calculative Asymmetry",
    shortTitle: "Calc. Asymmetry",
    id: "PMCC-001",
    status: "stable",
    lastRevised: "2026-05-24",
    author: "Ron Bronson",
    introduced: 2025,
    domains: ["economics", "platform", "governance"],
    scale: "institutional",
    role: "diagnostic",
    relatedConcepts: ["mirror-signaling", "civil-economics", "substrate-degradation"],
    cases: ["bumble-verification", "mta-procurement", "pai-synthetic-media-framework", "nba-chip-window"],
    sources: [{ title: "Civil Economics working paper", url: "https://statecapacity.ai/civil-economics" }],
    inheritedFrom: "Information asymmetry (Akerlof 1970; Spence; Stiglitz)",
    whatItNames:
      "The gap in computational capacity between two parties to a transaction: one side can model, predict, and optimize its position with machine learning while the other works from intuition and whatever is in front of them. The decisive imbalance is the capacity to calculate, so a fully-informed party can still be systematically outmaneuvered.",
    whenSeeingIt: [
      "One party runs models against the interaction in real time; the other responds in the moment with no equivalent tooling.",
      "The costs of the transaction and the ability to see those costs sit on opposite sides — whoever bears the cost is the one who cannot compute it.",
      "Terms are set by the side that can simulate outcomes across many users at once; the individual meets those terms one at a time.",
      "The optimizing party presents its capability as a feature, a protection, or a convenience.",
      "Asking “could this person have calculated their own exposure at the moment they agreed?” returns no.",
    ],
    howToApply:
      "Separate the capacity to compute from the possession of information. Once you ask which side could actually run the math, transactions stop reading as fair simply because disclosures were made. The intervention this points to is restoring computational parity — giving the computed-against party something to compute with (see Mirror Signaling) — rather than adding more disclosure. The diagnosis it yields under Trust & Decision Engineering is an Accountability Gap: the side that sets the weights is not the side that lives with them.",
    workedExamples: [
      {
        caseSlug: "bumble-verification",
        name: "Bumble — biometric verification",
        text: "Bumble computes deepfake risk and brand exposure across its entire user base; the individual submits a biometric template and absorbs the downstream exposure with no way to model it at the moment of consent. The capacity to calculate the real cost sits entirely on the platform's side.",
      },
      {
        caseSlug: "mta-procurement",
        name: "MTA procurement",
        text: "Equipment vendors bring full lifecycle cost models and bid low upfront with high downstream maintenance. The transit authority cannot compute total cost of ownership in real time during the negotiation, so the winning bid is the one that best exploits the gap.",
      },
    ],
    relatedNote:
      "Calculative Asymmetry is one of the extraction mechanisms named inside Civil Economics — it is how value moves onto the party who cannot see the move coming. Mirror Signaling is its direct counter. Across many transactions, individually-reasonable asymmetries compound into Substrate Degradation, which has no single owner.",
    provenance:
      "Used by Ron Bronson in the Civil Economics and Trust & Decision Engineering work. It carries the economics of information asymmetry (Akerlof, Spence, Stiglitz) into settings where one party computes against another at machine scale — the shift Bronson frames as moving past the era of information asymmetry into the era of Trust Bankruptcy.",
  },
  {
    slug: "last-documented-mile",
    title: "Last Documented Mile",
    shortTitle: "LDM",
    id: "PMCC-002",
    status: "stable",
    lastRevised: "2026-05-24",
    author: "Ron Bronson",
    introduced: 2025,
    domains: ["governance", "infrastructure"],
    scale: "institutional",
    role: "diagnostic",
    relatedConcepts: ["responsibility-to-record", "delivery-forensics", "consequence-design"],
    cases: ["bumble-verification", "federal-benefits-eligibility"],
    inheritedFrom: null,
    whatItNames:
      "The point in a process where documentation stops and the chain goes dark, while consequences keep going. It marks where tracking ended, which is observable, rather than where the chain was supposed to end, which often is not.",
    whenSeeingIt: [
      "Tickets marked resolved with no verifiable outcome attached.",
      "Handoffs with no successor logged — the work moves on and the record does not.",
      "Consequences materializing in a domain where no actor has standing to record them.",
      "The audit trail ends cleanly at an internal boundary while the effects continue past it.",
      "A “closed” status that no one downstream can confirm.",
    ],
    howToApply:
      "Point only at where tracking stopped. This sidesteps the “last mile” trap, which assumes a known destination; you do not need to know where the chain should have ended to see where the record went dark. Locating the LDM gives an auditable starting point — the place a Delivery Forensics read begins. Watch for documentation that lies: a case closed without resolution moves the apparent LDM earlier than the honest one, which is why a sibling concept, “last honest mile,” may be needed.",
    workedExamples: [
      {
        caseSlug: "bumble-verification",
        name: "Bumble — biometric verification",
        text: "The record is clean at the point of consent and goes dark at the operational layer where the biometric template actually lives — across vendors and storage no user can see.",
      },
      {
        caseSlug: "federal-benefits-eligibility",
        name: "Federal benefits eligibility",
        text: "With 90 seconds per case, the record closes before the determination is sound. The LDM gets pushed artificially early, and downstream actors inherit the gap as stale data.",
      },
    ],
    relatedNote:
      "LDM is the symptom; the presence or absence of Responsibility to Record is the cause. Delivery Forensics begins at the LDM and works backward.",
    provenance:
      "Public Mechanics canon (Ron Bronson). A deliberate reframing of the logistics “last mile,” built to avoid assuming a destination.",
  },
  {
    slug: "responsibility-to-record",
    title: "Responsibility to Record",
    shortTitle: "RTR",
    id: "PMCC-003",
    status: "stable",
    lastRevised: "2026-05-24",
    author: "Ron Bronson",
    introduced: 2025,
    domains: ["governance", "infrastructure"],
    scale: "institutional",
    role: "structural",
    relatedConcepts: ["last-documented-mile", "delivery-forensics", "decision-receipts"],
    cases: ["federal-benefits-eligibility", "pai-synthetic-media-framework", "bumble-verification"],
    inheritedFrom: "Mandatory reporting statutes (public health, child welfare)",
    whatItNames:
      "The obligation — not the permission — to document a decision, observation, or handoff in a chain of action. It is modeled on mandatory reporting: a duty that attaches to a role, whether or not anyone asks.",
    whenSeeingIt: [
      "A chain breaks and the post-mortem finds no one was on the hook for recording the step that went missing.",
      "RTR is assumed by everyone and assigned to no one.",
      "RTR terminates before the consequence does.",
      "RTR is assigned to someone who lacks the time, tools, or standing to discharge it.",
    ],
    howToApply:
      "Ask four questions of any chain: where is RTR assigned, where is it assumed but not assigned, where does it end before consequence ends, and where is it assigned to someone without the capacity to discharge it. Framing this as responsibility rather than authority changes what you look for — authority asks who gets to record, responsibility asks who must. Chains break because no one was obligated, not because no one was permitted.",
    workedExamples: [
      {
        caseSlug: "federal-benefits-eligibility",
        name: "Federal benefits eligibility",
        text: "A caseworker is formally assigned RTR but given 90 seconds per case. The responsibility exists on paper and degrades in practice, because it was assigned to someone without the capacity to discharge it.",
      },
      {
        caseSlug: "pai-synthetic-media-framework",
        name: "PAI Synthetic Media Framework",
        text: "No party in the builder/creator/distributor typology carries the obligation to record harm from the standpoint of the verified subject, so that harm has no recorder.",
      },
    ],
    relatedNote:
      "RTR is the cause whose absence shows up as a Last Documented Mile. Decision Receipts are one way to discharge RTR inside automated systems — they make the obligation produce a durable, auditable record.",
    provenance:
      "Public Mechanics canon (Ron Bronson). Modeled on mandatory-reporting duties in public health and child welfare, where the obligation to report attaches to the role.",
  },
  {
    slug: "trust-decision-engineering",
    title: "Trust & Decision Engineering",
    shortTitle: "TDE",
    id: "PMCC-004",
    status: "stable",
    lastRevised: "2026-05-24",
    author: "Ron Bronson",
    introduced: 2025,
    domains: ["governance", "agent-systems", "platform"],
    scale: "institutional",
    role: "prescriptive",
    relatedConcepts: ["trust-bankruptcy", "judgment-routing", "calculative-asymmetry", "substrate-degradation"],
    cases: ["federal-benefits-eligibility"],
    inheritedFrom: "Trust & Safety practice",
    whatItNames:
      "The practice of designing how decisions get authorized, escalated, and audited in institutions where automation is distributing control. It is the structural layer underneath Trust & Safety.",
    whenSeeingIt: [
      "Trust & Safety is handling incidents after they happen, with no layer underneath deciding how decisions should have been authorized in the first place.",
      "Automated systems exercise institutional authority with no record of why a given action was permitted.",
      "Governance is treated as moderation — cleaning up outputs — while the decision infrastructure goes undesigned.",
      "Escalation happens by exception and tribal knowledge rather than by routing.",
    ],
    howToApply:
      "Treat decision authorization as infrastructure to be built, the way access control is built. TDE asks how an institution's mandate gets encoded into the routing of individual decisions, so governance scales past the point where humans can review each one. It generates a working vocabulary — Trust Bankruptcy, Substrate Degradation, Mirror Signaling, Judgment Routing, Domain Firewalls, Calculative Asymmetry — for the parts of that infrastructure.",
    workedExamples: [
      {
        caseSlug: "federal-benefits-eligibility",
        name: "Federal benefits eligibility",
        text: "The determination system has Trust & Safety-style review after the fact but no decision infrastructure underneath: nothing encodes what a caseworker or an agent is permitted to decide, or routes the hard cases differently.",
      },
    ],
    relatedNote:
      "TDE is the response to Trust Bankruptcy. Its primitives — Authority Tokens, Decision Receipts, Judgment Routing, Agent Plumbing — are the build surface; Civil Economics is the accounting layer it sits on.",
    provenance:
      "Public Mechanics canon (Ron Bronson). Positioned as the structural discipline beneath Trust & Safety.",
  },
  {
    slug: "trajectory-management",
    title: "Trajectory Management",
    id: "PMCC-005",
    status: "stable",
    lastRevised: "2026-05-24",
    author: "Ron Bronson",
    introduced: 2025,
    domains: ["governance", "infrastructure"],
    scale: "institutional",
    role: "prescriptive",
    relatedConcepts: ["delivery-forensics", "last-documented-mile"],
    cases: ["federal-benefits-eligibility"],
    inheritedFrom: null,
    whatItNames:
      "The forward-looking practice of reading where a technology program is actually headed and intervening before it drifts off course. It is the complement to Delivery Forensics, which works after the fact.",
    whenSeeingIt: [
      "The frontline sees the problem months before executives do.",
      "Status reporting says green while the program's direction has already diverged from its intended outcome.",
      "Course corrections only happen at milestone reviews, which are too far apart to catch drift.",
      "Early signals of divergence have nowhere to go in the reporting structure.",
    ],
    howToApply:
      "Catch divergence at the front of the timeline, where the frontline already sees it. Trajectory management reads the vector of a program — where current behavior is actually pointing — rather than waiting for a milestone to confirm a miss. The discipline is building a path for early signals to reach someone with the authority to change course.",
    workedExamples: [
      {
        caseSlug: "federal-benefits-eligibility",
        name: "Federal benefits eligibility",
        text: "The frontline sees determination quality degrading long before it surfaces upstream; trajectory management is the discipline of catching that divergence at the front of the timeline instead of in an audit a year later.",
      },
    ],
    relatedNote:
      "Trajectory Management (forward) and Delivery Forensics (backward) are the two halves of reading program health. Both terminate at the Last Documented Mile, where the record of what is actually happening runs out.",
    provenance:
      "Public Mechanics canon (Ron Bronson). A version of this concept also appears in the author's framework reference for public-sector delivery; here it is framed for technology programs.",
  },
  {
    slug: "delivery-forensics",
    title: "Delivery Forensics",
    id: "PMCC-006",
    status: "stable",
    lastRevised: "2026-05-24",
    author: "Ron Bronson",
    introduced: 2025,
    domains: ["governance", "infrastructure"],
    scale: "institutional",
    role: "diagnostic",
    relatedConcepts: ["trajectory-management", "last-documented-mile", "responsibility-to-record"],
    cases: ["federal-benefits-eligibility"],
    inheritedFrom: null,
    whatItNames:
      "The practice of determining why a technology program is failing, or is about to fail, before the headline runs. It works backward from symptoms to causes.",
    whenSeeingIt: [
      "A program is visibly struggling and the organization is debating blame rather than mechanism.",
      "Symptoms are being treated while the structural cause sits one or two layers down.",
      "No one has asked whether there was ever a moment when the outcome could have been changed.",
      "The failure looks technical on the surface and turns structural once you trace it.",
    ],
    howToApply:
      "Work backward from the symptom and ask: was there ever a moment when someone with the right knowledge and authority could have changed the outcome? What would they have needed to see, and who was responsible for seeing it? The read begins at the Last Documented Mile — the last point where the record is reliable — and reconstructs from there.",
    workedExamples: [
      {
        caseSlug: "federal-benefits-eligibility",
        name: "Federal benefits eligibility",
        text: "Working backward from bad determinations, the forensic read lands on a Responsibility to Record assigned without the capacity to discharge it, and a Last Documented Mile pushed artificially early.",
      },
    ],
    relatedNote:
      "Delivery Forensics pairs with Trajectory Management (the forward-looking complement) and begins at the Last Documented Mile. Where it finds a missing record, it usually finds an unassigned Responsibility to Record.",
    provenance:
      "Public Mechanics canon (Ron Bronson). Draws on the GAO and Inspector General forensic tradition of structural program review, applied before failure rather than after.",
  },
  {
    slug: "civil-economics",
    title: "Civil Economics",
    id: "PMCC-007",
    status: "stable",
    lastRevised: "2026-05-24",
    author: "Ron Bronson",
    introduced: 2025,
    domains: ["economics", "governance"],
    scale: "substrate",
    role: "structural",
    relatedConcepts: ["calculative-asymmetry", "substrate-degradation", "ambiguity-economy-loop"],
    cases: ["rideshare-externalities", "mta-procurement"],
    sources: [{ title: "Civil Economics working paper", url: "https://statecapacity.ai/civil-economics" }],
    inheritedFrom: null,
    whatItNames:
      "A framework for partitioning the value a public system produces. Total value from activity (Va) divides into private capture (Vp, taken at t₀), externalized costs (Ve, delayed to t₁), and residual obligation (Vr, latent at t₂): Va = Vp + Ve + Vr.",
    whenSeeingIt: [
      "A platform reports innovation and growth while public institutions quietly absorb costs that arrive later.",
      "The transaction boundary is drawn so that only Vp is counted at the moment of exchange.",
      "Costs show up on a different clock than the value capture — months or years after the transaction.",
      "No party holds the residual obligation (Vr) until it comes due.",
    ],
    howToApply:
      "Account for value on three clocks instead of one. Most platform innovation is the practice of maximizing Vp by drawing the transaction boundary to exclude Ve and Vr. Naming the three terms lets you see the extraction that single-clock accounting hides, and locate where the externalized cost and the residual obligation actually land. It is the base accounting layer the rest of Trust & Decision Engineering sits on.",
    workedExamples: [
      {
        caseSlug: "rideshare-externalities",
        name: "Rideshare externalities",
        text: "The platform keeps Vp on each ride at t₀; congestion and driver health arrive as Ve at t₁; insurance gaps and post-exit cleanup sit latent as Vr at t₂. The boundary is drawn to exclude the last two by construction.",
      },
      {
        caseSlug: "mta-procurement",
        name: "MTA procurement",
        text: "The vendor captures Vp at signing; the maintenance cost is an externalized term carried by the public budget years later. The lifecycle the authority cannot compute is exactly the Ve the boundary hides.",
      },
    ],
    relatedNote:
      "Civil Economics names the mechanisms that move value across the boundary: Parasitic Intermediation, Calculative Asymmetry, and Spatial Derivatives. The Ambiguity Economy Loop is how a regulated domain gets reframed so the boundary can be redrawn in the first place.",
    provenance:
      "Public Mechanics canon (Ron Bronson); Civil Economics working paper, State Capacity AI. The base accounting layer beneath Trust & Decision Engineering.",
  },
  {
    slug: "consequence-design",
    title: "Consequence Design",
    id: "PMCC-008",
    status: "stable",
    lastRevised: "2026-05-24",
    author: "Ron Bronson",
    introduced: 2017,
    domains: ["design", "governance"],
    scale: "institutional",
    role: "prescriptive",
    relatedConcepts: ["last-documented-mile", "public-mechanics"],
    cases: ["small-claims-form-redesign"],
    inheritedFrom: null,
    whatItNames:
      "Designing for the consequences that materialize past the boundary of the thing being designed. It is the 2017 framework that predates much of the rest of this vocabulary.",
    whenSeeingIt: [
      "A design is declared done at the point where the user interaction ends, while its effects continue downstream.",
      "Consequences land in a place the original design never considered its responsibility.",
      "The hand-off past the design boundary has no owner.",
      "Harm appears “out of scope” by construction.",
    ],
    howToApply:
      "Extend the design boundary to where the consequences actually land. Because consequences happen past the Last Documented Mile, and design usually stops where documentation stops, consequence is unowned by default unless someone designs for it on purpose. Consequence Design makes that downstream space an explicit part of the work.",
    workedExamples: [
      {
        caseSlug: "small-claims-form-redesign",
        name: "Small claims court form",
        text: "The form's consequences land past submission — whether a person can actually bring their claim. Designing for that downstream outcome, rather than for form completion, is the Consequence Design move.",
      },
    ],
    relatedNote:
      "Consequence Design and Public Mechanics share a premise: the interesting failures live in the latency between an action and its outcome. The Last Documented Mile marks where, in practice, that downstream space goes dark.",
    provenance:
      "Ron Bronson, 2017 — the earliest concept in this vocabulary.",
  },
  {
    slug: "authority-tokens",
    title: "Authority Tokens",
    id: "PMCC-009",
    status: "stable",
    lastRevised: "2026-05-24",
    author: "Ron Bronson",
    introduced: 2025,
    domains: ["agent-systems", "infrastructure"],
    scale: "institutional",
    role: "structural",
    relatedConcepts: ["judgment-routing", "decision-receipts", "agent-plumbing"],
    cases: ["federal-benefits-eligibility"],
    inheritedFrom: "Identity & access management (IAM)",
    whatItNames:
      "A protocol-level abstraction for delegated agency: computable context about why an agent is operating and under what constraints. It is identity and access management for decisions rather than for access.",
    whenSeeingIt: [
      "An automated agent takes an action and there is no machine-readable record of what authorized it.",
      "Delegated authority is implied by configuration rather than carried with the action.",
      "Constraints on an agent live in documentation, not in the call itself.",
      "You cannot answer “on whose authority, and within what limits?” at the moment of action.",
    ],
    howToApply:
      "Attach the authorization to the action as data the system can read. An Authority Token carries why an agent is acting and the constraints it is acting under, so delegated judgment becomes legible at the point of execution. It is the primitive that makes Decision Receipts and Judgment Routing possible.",
    workedExamples: [
      {
        caseSlug: "federal-benefits-eligibility",
        name: "Federal benefits eligibility",
        text: "An Authority Token would carry what a caseworker or agent is permitted to decide in a given determination, and the limits on it, instead of leaving that permission implicit in configuration.",
      },
    ],
    relatedNote:
      "Authority Tokens pair with Judgment Routing (which evaluates the proposed action) and Decision Receipts (which record the result). Together they make up Agent Plumbing.",
    provenance:
      "Public Mechanics canon (Ron Bronson). Framed as IAM for decisions rather than access.",
  },
  {
    slug: "decision-receipts",
    title: "Decision Receipts",
    id: "PMCC-010",
    status: "stable",
    lastRevised: "2026-05-24",
    author: "Ron Bronson",
    introduced: 2025,
    domains: ["agent-systems", "infrastructure"],
    scale: "institutional",
    role: "structural",
    relatedConcepts: ["authority-tokens", "judgment-routing", "agent-plumbing"],
    cases: ["federal-benefits-eligibility"],
    inheritedFrom: null,
    whatItNames:
      "Structured records linking every agent action back to the authority that permitted it. They are the trust surface produced whenever an agent exercises authority.",
    whenSeeingIt: [
      "An agent acted and there is no durable record tying the action to its authorization.",
      "Auditing a decision means reconstructing it from logs that were never meant to explain it.",
      "The rationale, the signals, and the policy in force at decision time are not captured together.",
      "Contesting an automated decision has nothing concrete to point at.",
    ],
    howToApply:
      "Emit a record at the moment of action that ties it to its authority. A Decision Receipt captures the routing outcome and the signals behind it — uncertainty, stakes, authority, novelty — along with the agent, the policy in force, the authority key, and the rationale. That record is what makes the decision auditable and contestable after the fact.",
    workedExamples: [
      {
        caseSlug: "federal-benefits-eligibility",
        name: "Federal benefits eligibility",
        text: "A Decision Receipt would make the routing of a determination auditable: which path it took, on what signals, under which policy — the record that a contested benefits decision currently lacks.",
      },
    ],
    relatedNote:
      "Decision Receipts discharge Responsibility to Record inside automated systems. They consume Authority Tokens and record the output of Judgment Routing.",
    provenance:
      "Public Mechanics canon (Ron Bronson). Example schema: receipt_id, timestamp, status, routing_outcome, signals (uncertainty / stakes / authority / novelty), metadata (agent_id, policy_imprint, authority_key, rationale).",
  },
  {
    slug: "judgment-routing",
    title: "Judgment Routing",
    id: "PMCC-011",
    status: "stable",
    lastRevised: "2026-05-24",
    author: "Ron Bronson",
    introduced: 2025,
    domains: ["agent-systems", "infrastructure", "governance"],
    scale: "institutional",
    role: "structural",
    relatedConcepts: ["authority-tokens", "decision-receipts", "agent-plumbing"],
    cases: ["federal-benefits-eligibility"],
    sources: [{ title: "judgment-routing (reference implementation)", url: "https://github.com/quarterback/judgment-routing" }],
    inheritedFrom: null,
    whatItNames:
      "Infrastructure that evaluates a proposed agent action against institutional mandate and routes it — fast path, slow path, human escalation, or specialist referral — based on signals of uncertainty, stakes, authority, and novelty.",
    whenSeeingIt: [
      "Every automated decision is treated the same regardless of how risky or novel it is.",
      "Escalation to a human depends on whether someone happens to notice.",
      "Nothing encodes which decisions the institution's mandate actually permits an agent to make alone.",
      "High-stakes and routine actions flow through the same undifferentiated path.",
    ],
    howToApply:
      "Route the decision before it executes. Judgment Routing reads four signals — uncertainty, stakes, authority, novelty — and sends the proposed action down the appropriate path, so routine actions move fast and consequential ones get the scrutiny the mandate requires. It turns escalation from a matter of luck into a property of the system.",
    workedExamples: [
      {
        caseSlug: "federal-benefits-eligibility",
        name: "Federal benefits eligibility",
        text: "Judgment Routing would send thin or high-stakes determinations to a slower path or to human escalation, instead of forcing every case through the same 90-second channel.",
      },
    ],
    relatedNote:
      "Judgment Routing sits between Authority Tokens (what is permitted) and Decision Receipts (what happened). It is one of the core pieces of Agent Plumbing.",
    provenance:
      "Public Mechanics canon (Ron Bronson). Reference implementation: github.com/quarterback/judgment-routing.",
  },
  {
    slug: "trust-bankruptcy",
    title: "Trust Bankruptcy",
    id: "PMCC-012",
    status: "stable",
    lastRevised: "2026-05-24",
    author: "Ron Bronson",
    introduced: 2025,
    domains: ["platform", "governance"],
    scale: "substrate",
    role: "diagnostic",
    relatedConcepts: ["substrate-degradation", "trust-decision-engineering", "calculative-asymmetry"],
    cases: ["bumble-verification"],
    inheritedFrom: null,
    whatItNames:
      "The condition where platforms have spent the social and civic trust of the domains they operate in faster than that trust can regenerate. It is the state that Trust & Decision Engineering exists to respond to.",
    whenSeeingIt: [
      "Each new platform deployment meets more resistance than the last, with less goodwill to draw on.",
      "Users assume bad faith by default, because past defaults earned it.",
      "The institutions a platform inhabits can no longer vouch for it to their own constituents.",
      "Trust is being drawn down as a resource with no plan for how it regenerates.",
    ],
    howToApply:
      "Treat trust as a depletable balance rather than a renewable given. Trust Bankruptcy names the moment the balance has run negative — when the era of information asymmetry has given way to one where the deeper problem is spent trust. Naming it reframes governance from managing information to rebuilding a balance already in deficit.",
    workedExamples: [
      {
        caseSlug: "bumble-verification",
        name: "Bumble — biometric verification",
        text: "Asking users to surrender biometrics as the price of participation spends trust that will not regenerate at the rate it is being drawn down — a local transaction drawing on an already-overdrawn balance.",
      },
    ],
    relatedNote:
      "Trust Bankruptcy is the aggregate condition that Substrate Degradation describes mechanically. Trust & Decision Engineering is the response.",
    provenance:
      "Public Mechanics canon (Ron Bronson): “We have moved past the era of Information Asymmetry and into the era of Trust Bankruptcy.”",
  },
  {
    slug: "substrate-degradation",
    title: "Substrate Degradation",
    id: "PMCC-013",
    status: "stable",
    lastRevised: "2026-05-24",
    author: "Ron Bronson",
    introduced: 2025,
    domains: ["governance", "platform"],
    scale: "substrate",
    role: "diagnostic",
    relatedConcepts: ["trust-bankruptcy", "mirror-signaling", "calculative-asymmetry"],
    cases: ["bumble-verification", "south-african-election-synthetic-media"],
    inheritedFrom: "Infrastructure studies (Bowker & Star, 1999)",
    whatItNames:
      "The cumulative erosion of the civic substrate — trust in institutions, signals, neighbors, and collective sensemaking — that happens when individual extractions each look reasonable on their own terms but compound across cases. The damage lives in the aggregate that no single extraction is accountable for.",
    whenSeeingIt: [
      "Each deployment of an invasive infrastructure — biometric verification, surveillance, gated access — is justified by a local harm story.",
      "Every instance is defensible in isolation while the whole gets worse.",
      "The cost shows up at the level of a domain or a public, not at the level of any one transaction.",
      "No apparatus exists to measure or own the cumulative effect.",
    ],
    howToApply:
      "Change the unit of analysis from the institution-and-decision to the substrate. Governance has an apparatus for the individual decision and none for the aggregate, so the compounding damage has no owner. Substrate Degradation names that gap, so the question shifts from “was this deployment justified?” to “what is the sum of these deployments doing to the substrate?”",
    workedExamples: [
      {
        caseSlug: "bumble-verification",
        name: "Bumble — biometric verification",
        text: "Each platform that normalizes biometric verification as the price of participation looks justified on its own. The public's baseline expectation of moving through civic and commercial life without surrendering biometrics degrades in an aggregate no single deployment owns.",
      },
      {
        caseSlug: "south-african-election-synthetic-media",
        name: "South African election synthetic media",
        text: "The election information environment erodes in aggregate while no individual deployment of a generative tool is accountable for the whole.",
      },
    ],
    relatedNote:
      "Substrate Degradation is the mechanical description of Trust Bankruptcy. Its affirmative opposite is Substrate Stewardship. Mirror Signaling and Domain Firewalls are interventions that slow it at the level of individual systems.",
    provenance:
      "Public Mechanics canon (Ron Bronson). Builds on infrastructure studies, where shared substrates become visible mainly when they break.",
  },
  {
    slug: "mirror-signaling",
    title: "Mirror Signaling",
    id: "PMCC-014",
    status: "stable",
    lastRevised: "2026-05-24",
    author: "Ron Bronson",
    introduced: 2025,
    domains: ["design", "platform", "governance"],
    scale: "institutional",
    role: "prescriptive",
    relatedConcepts: ["calculative-asymmetry", "domain-firewalls", "decision-receipts"],
    cases: ["mta-procurement", "nba-chip-window"],
    inheritedFrom: null,
    whatItNames:
      "A design primitive that gives a user real-time visibility into the decision weights being used against them. The principle: no user should be computed against without the ability to compute with.",
    whenSeeingIt: [
      "A system scores or ranks a person with no window into the weights it is using.",
      "The user can see the outcome but not the calculation that produced it.",
      "The party setting the weights treats them as proprietary by default.",
      "There is no symmetric instrument on the user's side of the interaction.",
    ],
    howToApply:
      "Expose the weights to the party they are applied to. Mirror Signaling counters Calculative Asymmetry directly: it gives the computed-against side something to compute with, in real time, at the point of the decision. In a market it takes the form of published models and shared dashboards; for an individual, visibility into the factors weighing on their case.",
    workedExamples: [
      {
        caseSlug: "mta-procurement",
        name: "MTA procurement",
        text: "A public total-cost-of-ownership dashboard, vendor lifecycle models published and auditable, and contract penalties for variance beyond a set threshold give the public side a model to compute with.",
      },
      {
        caseSlug: "nba-chip-window",
        name: "NBA Chip Window / Bid Standardization",
        text: "Bid Standardization is the player-market analogue: it gives every front office the same computable basis to bid against, equalizing what each side can calculate.",
      },
    ],
    relatedNote:
      "Mirror Signaling is the standing counter to Calculative Asymmetry, and one of the per-system brakes on Substrate Degradation. Domain Firewalls address a different asymmetry — financial weight on civic outcomes.",
    provenance:
      "Public Mechanics canon (Ron Bronson), within Trust & Decision Engineering.",
  },
  {
    slug: "domain-firewalls",
    title: "Domain Firewalls",
    id: "PMCC-015",
    status: "stable",
    lastRevised: "2026-05-24",
    author: "Ron Bronson",
    introduced: 2025,
    domains: ["governance", "infrastructure", "economics"],
    scale: "institutional",
    role: "prescriptive",
    relatedConcepts: ["mirror-signaling", "civil-economics"],
    cases: ["nba-chip-window"],
    inheritedFrom: null,
    whatItNames:
      "Engineered air gaps between financial incentives and civic outcomes. They prevent financial instruments from weighting the result of a civic process.",
    whenSeeingIt: [
      "A financial instrument is attached to the outcome of a non-financial, civic domain.",
      "Someone stands to profit directly from how a civic process resolves.",
      "The incentive to move a civic outcome and the means to move it sit in the same hands.",
      "A market has formed around a result that was supposed to be decided on civic terms.",
    ],
    howToApply:
      "Build a structural gap that financial weight cannot cross. A Domain Firewall keeps financial instruments from being able to weight a civic outcome, removing the incentive to capture it. It is the counter to Spatial Derivatives — financial instruments attached to domains that were never meant to price the result.",
    workedExamples: [
      {
        caseSlug: "nba-chip-window",
        name: "NBA Chip Window / Bid Standardization",
        text: "Where financial instruments would otherwise weight a sporting outcome, a firewall keeps the competitive result decided on competitive terms.",
      },
    ],
    relatedNote:
      "Domain Firewalls and Mirror Signaling are paired interventions in Trust & Decision Engineering: one separates financial weight from civic outcomes, the other equalizes computational weight inside a transaction. Both slow Substrate Degradation.",
    provenance:
      "Public Mechanics canon (Ron Bronson). The counter to Spatial Derivatives.",
  },
  {
    slug: "agent-plumbing",
    title: "Agent Plumbing",
    shortTitle: "Agent Plumbing",
    id: "PMCC-016",
    status: "stable",
    lastRevised: "2026-05-24",
    author: "Ron Bronson",
    introduced: 2025,
    domains: ["agent-systems", "infrastructure"],
    scale: "institutional",
    role: "structural",
    relatedConcepts: ["authority-tokens", "judgment-routing", "decision-receipts"],
    cases: ["federal-benefits-eligibility"],
    inheritedFrom: null,
    whatItNames:
      "The legitimacy layer between an agent's proposal and the execution of an action. It carries authority context, produces decision receipts, and makes delegated judgment legible. “Agent Plumbing” and “Agentic Plumbing” name the same layer.",
    whenSeeingIt: [
      "An agent's proposal becomes an action with nothing in between to check or record it.",
      "Authority context is lost between the decision and its execution.",
      "There is no standard place where delegated judgment is made legible.",
      "Each agent system reinvents authorization and logging in an ad hoc way.",
    ],
    howToApply:
      "Insert a standard layer between proposal and execution. Agent Plumbing is where Authority Tokens are checked, Judgment Routing happens, and Decision Receipts are emitted — the connective infrastructure that makes delegated agency legitimate rather than merely functional. Designing it as a shared layer keeps every agent system from improvising its own.",
    workedExamples: [
      {
        caseSlug: "federal-benefits-eligibility",
        name: "Federal benefits eligibility",
        text: "Between an agent proposing a determination and the system acting on it, Agent Plumbing is where the authority is checked, the case is routed, and a receipt is written — none of which exists in the 90-second channel today.",
      },
    ],
    relatedNote:
      "Agent Plumbing is the assembly; Authority Tokens, Judgment Routing, and Decision Receipts are its parts. It is the build surface Trust & Decision Engineering points to for automated decisions.",
    provenance:
      "Public Mechanics canon (Ron Bronson).",
  },
  {
    slug: "ambiguity-economy-loop",
    title: "Ambiguity Economy Loop",
    id: "PMCC-017",
    status: "stable",
    lastRevised: "2026-05-24",
    author: "Ron Bronson",
    introduced: 2025,
    domains: ["economics", "governance", "platform"],
    scale: "substrate",
    role: "diagnostic",
    relatedConcepts: ["civil-economics", "substrate-degradation", "calculative-asymmetry"],
    cases: ["bumble-verification", "rideshare-externalities", "south-african-election-synthetic-media"],
    inheritedFrom: null,
    whatItNames:
      "A five-step structural pattern by which a regulated civic domain is reframed out of its category and arbitraged. The externalities land on public institutions at the end, after the coordination has already scaled.",
    whenSeeingIt: [
      "An activity in a regulated category gets reframed as something else (a “platform,” a “technology,” a “protocol”).",
      "Intermediaries appear to operationalize the gap the reframe opened.",
      "Capital accelerates coordination faster than any oversight can form.",
      "Public attention only arrives once the externalities have landed on public institutions.",
    ],
    howToApply:
      "Read the sequence in order: (1) a regulated civic domain exists, (2) a reframe detaches the activity from the regulated category, (3) intermediaries operationalize the gap, (4) capital accelerates coordination faster than oversight, (5) externalities land on public institutions. Seeing the loop early matters because public attention activates at step five, by which point unwinding the arbitrage costs more than tolerating it. The same structure runs across gig labor, cryptocurrency, fertility services, private education, asylum processing, and debt collection — different politics, one shape.",
    workedExamples: [
      {
        caseSlug: "rideshare-externalities",
        name: "Rideshare externalities",
        text: "For-hire transport was reframed as a technology platform; intermediaries operationalized the gap; capital outran oversight; the externalities landed on cities.",
      },
      {
        caseSlug: "south-african-election-synthetic-media",
        name: "South African election synthetic media",
        text: "Synthetic-media production scaled faster than any oversight could form, and the externality landed on a public institution — the election — at the end of the loop.",
      },
    ],
    relatedNote:
      "The Ambiguity Economy Loop is how the transaction boundary in Civil Economics gets redrawn in the first place. The costs it lands are the Ve and Vr terms of that framework, and their accumulation is Substrate Degradation.",
    provenance:
      "Public Mechanics canon (Ron Bronson).",
  },
  {
    slug: "public-mechanics",
    title: "Public Mechanics",
    id: "PMCC-018",
    status: "stable",
    lastRevised: "2026-05-24",
    author: "Ron Bronson",
    introduced: null,
    domains: ["governance", "design", "infrastructure"],
    scale: "substrate",
    role: "structural",
    relatedConcepts: ["consequence-design", "delivery-forensics", "trajectory-management"],
    cases: ["small-claims-form-redesign"],
    inheritedFrom: null,
    whatItNames:
      "The field this vocabulary belongs to. It takes the latency between policy intent and delivered outcome as its unit of analysis.",
    whenSeeingIt: [
      "A policy is sound on paper and the delivered outcome diverges from it.",
      "The interesting failure lives in the gap between intent and what reaches the public.",
      "Civic-tech delivery framing or public-administration institution framing leaves the latency itself unexamined.",
      "The system already exists, and the question is how it was built well enough to function.",
    ],
    howToApply:
      "Study how systems get built, so the things inside them can function. Public Mechanics works on the latency between policy intent and delivered outcome — the space civic tech treats as delivery and public administration treats as institutions. Its premise is that the systems already exist; the work is understanding their construction well enough to make what runs on them work.",
    workedExamples: [
      {
        caseSlug: "small-claims-form-redesign",
        name: "Small claims court form",
        text: "The form is the policy at the point of contact. Redesigning it surfaces the latency between statutory intent and what the form actually lets a person do — the field's unit of analysis, made concrete.",
      },
    ],
    relatedNote:
      "Public Mechanics is the field; Consequence Design, Delivery Forensics, and Trajectory Management are practices within it. The Last Documented Mile is where, in practice, the latency it studies goes dark.",
    provenance:
      "The field Ron Bronson is founding, taught as UT-360 and UT-402 at the University of Michigan's Taubman College.",
  },
];

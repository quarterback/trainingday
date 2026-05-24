import type { CaseStudy } from "@/lib/publicMechanics";

// Public Mechanics Cases — v1 seed cases (author-controlled).
// Each case is a peer to the concept cards and is bidirectionally linked.

export const cases: CaseStudy[] = [
  {
    slug: "bumble-verification",
    title: "Bumble's biometric verification regime",
    id: "PMCS-001",
    status: "stable",
    lastRevised: "2026-05-24",
    domains: ["platform-governance", "synthetic-media", "biometric-infrastructure"],
    conceptsIllustrated: [
      "calculative-asymmetry",
      "last-documented-mile",
      "responsibility-to-record",
      "substrate-degradation",
      "ambiguity-economy-loop",
    ],
    primaryConcept: "calculative-asymmetry",
    sources: [
      {
        title: "PAI Synthetic Media Framework — Bumble case study",
        url: "https://partnershiponai.org/bumble-framework-case-study/",
      },
    ],
    situation:
      "Bumble introduced a biometric verification regime that asks users to submit biometric data to prove they are real people. The surface framing is protection: anti-deepfake defense for users in a dating environment flooded with synthetic media.",
    whatsActuallyHappening:
      "The verification runs in one direction. Bumble computes deepfake risk and brand exposure across its entire user base; the individual submits a biometric template and absorbs the downstream exposure — the vendor chain that template passes through, and any future breach — with no way to model that exposure at the moment of consent. The Partnership on AI synthetic-media framework rewards the surface framing by giving Bumble a case-study slot, while the user has no corresponding standing in the community of practice. The harm being mitigated is produced by the same generative-AI industry whose builders sit as supporters of that framework.",
    conceptsAtWork: [
      {
        conceptSlug: "calculative-asymmetry",
        name: "Calculative Asymmetry",
        text: "Bumble can simulate the cost and benefit of verification across millions of interactions; the user meets it once and cannot calculate their own biometric exposure. The capacity to compute sits entirely on the platform's side.",
      },
      {
        conceptSlug: "last-documented-mile",
        name: "Last Documented Mile",
        text: "The record is clean at the point of consent and goes dark at the operational layer where the template actually lives — across vendors and storage no user can see.",
      },
      {
        conceptSlug: "responsibility-to-record",
        name: "Responsibility to Record",
        text: "No actor is obligated to record what happens to the template after collection, or to whom the residual exposure belongs.",
      },
      {
        conceptSlug: "substrate-degradation",
        name: "Substrate Degradation",
        text: "Each platform that normalizes biometric verification as the price of participation looks justified on its own; the public's baseline expectation of participating without surrendering biometrics degrades in an aggregate no single deployment owns.",
      },
      {
        conceptSlug: "ambiguity-economy-loop",
        name: "Ambiguity Economy Loop",
        text: "The loop closes: the deepfake harm being mitigated is manufactured by the generative-AI industry, whose builders support the very framework that credentials the mitigation.",
      },
    ],
    whyItMatters:
      "It shows how a protection framing can carry an extraction. Any verification regime is worth reading for which direction the calculation runs and who holds the residual exposure once the record goes dark.",
  },
  {
    slug: "pai-synthetic-media-framework",
    title: "PAI Synthetic Media Framework as governance instrument",
    id: "PMCS-002",
    status: "stable",
    lastRevised: "2026-05-24",
    domains: ["synthetic-media", "platform-governance"],
    conceptsIllustrated: [
      "calculative-asymmetry",
      "responsibility-to-record",
      "last-documented-mile",
      "substrate-degradation",
    ],
    primaryConcept: "calculative-asymmetry",
    sources: [
      { title: "PAI Synthetic Media Framework", url: "https://partnershiponai.org/aiincidentdatabase/" },
    ],
    situation:
      "The Partnership on AI publishes a Synthetic Media Framework with a stakeholder typology of builders, creators, and distributors. It is presented as a governance instrument for the responsible handling of synthetic media.",
    whatsActuallyHappening:
      "The framework makes institutional behavior legible to other institutions. It is not built to make institutional behavior legible or contestable to the people whose faces, voices, and bodies are the raw material on both sides of the synthetic-media problem. The builder/creator/distributor typology has no slot for the verified subject as a stakeholder.",
    conceptsAtWork: [
      {
        conceptSlug: "calculative-asymmetry",
        name: "Calculative Asymmetry (applied to the instrument)",
        text: "The institutions in the typology can read and act on the framework; the subjects it most affects have no position from which to compute with it.",
      },
      {
        conceptSlug: "responsibility-to-record",
        name: "Responsibility to Record",
        text: "No party in the typology carries the obligation to record harm from the standpoint of the subject.",
      },
      {
        conceptSlug: "last-documented-mile",
        name: "Last Documented Mile",
        text: "Accountability ends at the boundary of the institutional stakeholders; the subject's experience falls past it.",
      },
      {
        conceptSlug: "substrate-degradation",
        name: "Substrate Degradation",
        text: "A governance instrument that omits the subject normalizes their omission across the field that adopts it.",
      },
    ],
    whyItMatters:
      "Governance instruments are themselves cases. The diagnostic question — legible and contestable to whom? — applies to the frameworks meant to fix the problem, not only to the platforms.",
  },
  {
    slug: "mta-procurement",
    title: "MTA procurement and lifecycle costs",
    id: "PMCS-003",
    status: "stable",
    lastRevised: "2026-05-24",
    domains: ["procurement", "infrastructure", "economics"],
    conceptsIllustrated: ["calculative-asymmetry", "civil-economics", "mirror-signaling"],
    primaryConcept: "calculative-asymmetry",
    situation:
      "The MTA negotiates procurement of equipment with vendors. Vendors arrive with full lifecycle cost models; the authority evaluates bids without an equivalent model of total cost of ownership.",
    whatsActuallyHappening:
      "Vendors optimize for winning the bid — low upfront price, high downstream maintenance — because they can compute the full lifecycle and the authority cannot do so in real time during negotiation. The winning bid is often the one that best exploits the gap between upfront price and total cost of ownership. The maintenance cost is a parasitic intermediation layer that contributes nothing to the value of the equipment.",
    conceptsAtWork: [
      {
        conceptSlug: "calculative-asymmetry",
        name: "Calculative Asymmetry",
        text: "The vendor holds a lifecycle model; the authority does not. The decisive imbalance is the capacity to compute total cost during the negotiation itself.",
      },
      {
        conceptSlug: "civil-economics",
        name: "Civil Economics",
        text: "The maintenance cost is an externalized term (Ve) carried by the public budget years after the bid is won, while the vendor captures Vp at signing.",
      },
      {
        conceptSlug: "mirror-signaling",
        name: "Mirror Signaling",
        text: "The intervention restores parity: a public total-cost-of-ownership dashboard, vendor lifecycle models published and auditable, and contract penalties for variance beyond a set threshold.",
      },
    ],
    whyItMatters:
      "Procurement is a recurring site of calculative asymmetry, and the remedy is structural — give the public side the model, not better intentions.",
  },
  {
    slug: "south-african-election-synthetic-media",
    title: "South African election synthetic media",
    id: "PMCS-004",
    status: "stable",
    lastRevised: "2026-05-24",
    domains: ["synthetic-media", "elections", "governance"],
    conceptsIllustrated: ["substrate-degradation", "ambiguity-economy-loop"],
    primaryConcept: "substrate-degradation",
    sources: [{ title: "Code for Africa case", url: "https://codeforafrica.org/" }],
    situation:
      "During a South African election cycle, synthetic media circulated in the information environment. The tools that produced it were built by the global generative-AI industry; the harm landed in a domain where regulatory capacity to address it did not exist. (Documented via a Code for Africa case.)",
    whatsActuallyHappening:
      "No individual deployment of a generative tool is accountable for the aggregate erosion of the election information environment. The harm is a substrate effect — the public's ability to engage in collective sensemaking degrades — produced upstream and landing where no apparatus can hold it.",
    conceptsAtWork: [
      {
        conceptSlug: "substrate-degradation",
        name: "Substrate Degradation",
        text: "The election information environment is the substrate; it erodes in aggregate while each tool and each post remains individually unaccountable.",
      },
      {
        conceptSlug: "ambiguity-economy-loop",
        name: "Ambiguity Economy Loop",
        text: "Production and spread of synthetic media scaled faster than any oversight, and the externality landed on a public institution — the election — at the end of the loop.",
      },
    ],
    whyItMatters:
      "It shows substrate degradation where regulatory capacity is thin, and why upstream production, not any single downstream post, is the level at which the harm is owned — or goes unowned.",
  },
  {
    slug: "federal-benefits-eligibility",
    title: "Federal benefits eligibility (eAPD / benefits determination)",
    id: "PMCS-005",
    status: "stable",
    lastRevised: "2026-05-24",
    domains: ["public-benefits", "agent-systems", "governance"],
    conceptsIllustrated: [
      "responsibility-to-record",
      "last-documented-mile",
      "trajectory-management",
      "authority-tokens",
      "decision-receipts",
      "judgment-routing",
    ],
    primaryConcept: "responsibility-to-record",
    situation:
      "A federal benefits eligibility process (electronic Advance Planning Document / benefits determination) assigns a caseworker formal responsibility to record each determination. In practice the caseworker has roughly 90 seconds per case.",
    whatsActuallyHappening:
      "Responsibility to Record exists on paper and degrades in practice: the obligation is assigned to someone without the capacity to discharge it. The Last Documented Mile gets pushed artificially early — the record closes before the determination is actually sound — so downstream actors operate on stale or thin data.",
    conceptsAtWork: [
      {
        conceptSlug: "responsibility-to-record",
        name: "Responsibility to Record",
        text: "RTR is assigned but not dischargeable: 90 seconds per case is not enough capacity to record a determination honestly.",
      },
      {
        conceptSlug: "last-documented-mile",
        name: "Last Documented Mile",
        text: "The record closes early, moving the LDM ahead of the real resolution; everything downstream inherits the gap.",
      },
      {
        conceptSlug: "trajectory-management",
        name: "Trajectory Management",
        text: "The frontline sees determination quality degrading long before it surfaces upstream.",
      },
      {
        conceptSlug: "judgment-routing",
        name: "Agent plumbing primitives",
        text: "An Authority Token would carry what the caseworker is permitted to decide; Judgment Routing would send thin or high-stakes cases to a slower path; a Decision Receipt would make the routing decision auditable.",
      },
    ],
    whyItMatters:
      "It shows the difference between assigning responsibility and making it dischargeable, and where agent-plumbing primitives would attach in a public determination system.",
  },
  {
    slug: "nba-chip-window",
    title: "NBA Chip Window / Bid Standardization",
    id: "PMCS-006",
    status: "stable",
    lastRevised: "2026-05-24",
    domains: ["market-design", "economics"],
    conceptsIllustrated: ["calculative-asymmetry", "mirror-signaling", "domain-firewalls"],
    primaryConcept: "calculative-asymmetry",
    situation:
      "In the NBA player market, front offices vary widely in analytic sophistication. Some operate sophisticated models against rules that assume every team has comparable analytic capacity. (The “chip window” and bid-standardization design.)",
    whatsActuallyHappening:
      "The rules assume a parity of analytic capacity that does not exist, so the teams with the best models extract value from those without. Bid Standardization functions as the market analogue of Mirror Signaling: it equalizes what each side can compute against.",
    conceptsAtWork: [
      {
        conceptSlug: "calculative-asymmetry",
        name: "Calculative Asymmetry (in market design)",
        text: "Sophisticated models operate against rules written as if all participants compute equally.",
      },
      {
        conceptSlug: "mirror-signaling",
        name: "Mirror Signaling",
        text: "Bid Standardization is the player-market version — it gives every front office the same computable basis to bid against.",
      },
      {
        conceptSlug: "domain-firewalls",
        name: "Domain Firewalls",
        text: "Where financial instruments would otherwise weight a sporting outcome, a firewall keeps the competitive result decided on competitive terms.",
      },
    ],
    whyItMatters:
      "Calculative asymmetry shows up in market design wherever rules assume analytic parity. Standardizing the computable basis is the structural fix.",
  },
  {
    slug: "rideshare-externalities",
    title: "Rideshare externalities",
    id: "PMCS-007",
    status: "stable",
    lastRevised: "2026-05-24",
    domains: ["platform-governance", "economics", "labor"],
    conceptsIllustrated: ["civil-economics", "ambiguity-economy-loop"],
    primaryConcept: "civil-economics",
    situation:
      "A rideshare platform coordinates rides between drivers and passengers, capturing a fee on each transaction. It is framed as a technology platform matching supply and demand.",
    whatsActuallyHappening:
      "The platform captures Vp on each ride. The externalized costs (Ve) — vehicle wear, congestion, driver health — and the residual obligations (Vr) — insurance gaps, cleanup after the platform exits a market — land on public institutions. The transaction boundary is drawn to exclude Ve and Vr by construction.",
    conceptsAtWork: [
      {
        conceptSlug: "civil-economics",
        name: "Civil Economics",
        text: "Va = Vp + Ve + Vr made concrete: the platform keeps Vp at t₀; congestion and driver health arrive at t₁; insurance gaps and post-exit cleanup sit latent at t₂.",
      },
      {
        conceptSlug: "ambiguity-economy-loop",
        name: "Ambiguity Economy Loop",
        text: "A regulated category (for-hire transport) was reframed as a technology platform; intermediaries operationalized the gap; capital accelerated coordination past oversight; the externalities landed on cities.",
      },
    ],
    whyItMatters:
      "It is the clearest worked example of the Civil Economics partition, and shows how the transaction boundary is the design choice that determines who carries Ve and Vr.",
  },
  {
    slug: "small-claims-form-redesign",
    title: "Small claims court form redesign",
    id: "PMCS-008",
    status: "stable",
    lastRevised: "2026-05-24",
    domains: ["public-services", "design"],
    conceptsIllustrated: ["public-mechanics", "consequence-design"],
    primaryConcept: "public-mechanics",
    situation:
      "A small claims court form is redesigned (a UT-360 case). The surface task is making a government form clearer.",
    whatsActuallyHappening:
      "The form is the policy at the point of contact — where statutory intent meets the person it governs. Redesigning it surfaces the latency between policy intent and delivered outcome that is Public Mechanics' unit of analysis: the gap between what the law means to provide and what the form actually lets a person do.",
    conceptsAtWork: [
      {
        conceptSlug: "public-mechanics",
        name: "Public Mechanics",
        text: "The form is where the latency between policy intent and delivered outcome becomes visible and editable; the redesign works directly on that gap.",
      },
      {
        conceptSlug: "consequence-design",
        name: "Consequence Design",
        text: "The consequences of the form land past submission — whether a person can actually bring their claim. Designing for those downstream consequences, rather than for form completion, is the move.",
      },
    ],
    whyItMatters:
      "Forms are a canonical Public Mechanics site: small, concrete, and located exactly at the intent-to-outcome seam. It generalizes to any point-of-contact artifact that encodes a policy.",
  },
];

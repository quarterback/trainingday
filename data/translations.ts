import type { Translation } from "@/lib/types";

export const translations: Translation[] = [
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
  {
    yourTerm: "information_architecture",
    standardTerms: [
      "category tree",
      "merchandise hierarchy",
      "consumer decision tree",
      "CDT",
      "planogram",
      "browse taxonomy",
      "shelf flow",
    ],
    explanation:
      "Retail has been doing IA for forty years and calls it something else. The merchandise hierarchy is the back-end taxonomy (department → category → subcategory → segment → SKU); the Consumer Decision Tree is the empirical research about how shoppers actually traverse it; the planogram is the rendered artifact at the shelf. Same discipline as web IA — empirical taxonomy work, card-sort-equivalent shopper studies, and a render that ships to users — wrapped in different vocabulary because the lineage is from merchandising rather than HCI.",
    whenToUseYours:
      "When you're trying to recruit IA/UX talent into the retail space, or when you're explaining to a tech-fluent exec why the category-tree work is real research and not 'just sorting products into folders.' 'Information architecture' carries the empirical-discipline freight that 'merchandise hierarchy' does not.",
    whenToUseTheirs:
      "Inside retail orgs, use 'merchandise hierarchy' for the back-end taxonomy and 'CDT' for the empirical shopper-side work — those are the words buyers, planners, and category captains will recognize. 'Planogram' is the spec; 'browse taxonomy' is the online equivalent. Using 'IA' inside a buying office reads as cosplay; using 'CDT' reads as serious.",
    tags: ["translation", "category_management", "retail", "positioning"],
  },
  {
    yourTerm: "product_roadmap",
    standardTerms: [
      "range plan",
      "assortment plan",
      "line review",
      "line plan",
      "merchandise plan",
      "category plan",
    ],
    explanation:
      "Retail's roadmap is the range plan — the SKU-level commitment for a season or year, with hard space constraints, hard buy-deadline constraints, and a hard review cadence (the line review). Same function as a product roadmap (allocation of scarce resources to bets over time) with sharper constraints: you can't ship a feature flag, you have to delist something to make room for something new, and the buy is placed months ahead.",
    whenToUseYours:
      "When pitching tooling or process to retailers from a product-org background, 'roadmap' is the bridge word — it signals you understand sequencing, allocation, and tradeoffs. Useful in conversations with retailer digital teams who think of themselves as product orgs.",
    whenToUseTheirs:
      "Inside a buying office, say 'range plan' or 'line review.' These words come with operational specificity (line-review dates, buy-deadlines, OTB constraints) that 'roadmap' lacks. The category captain who walks into a Walmart line review pitching a 'roadmap' has misread the room; the one who pitches range architecture changes by SKU has done the work.",
    tags: ["translation", "category_management", "retail", "positioning"],
  },
  {
    yourTerm: "user_research",
    standardTerms: [
      "shopper insights",
      "shopper research",
      "path-to-purchase",
      "category insights",
      "consumer insights",
      "ethnography",
      "store intercepts",
    ],
    explanation:
      "Retail has two parallel research disciplines: consumer insights (brand, motivation, attitude — closer to traditional market research) and shopper insights (in-store and online behavior at the moment of purchase — closer to product analytics + behavioral UX research). The shopper-insights side is what category management runs on: ethnographic store visits, intercept interviews, path-to-purchase studies, eye tracking, basket analysis. Methodologically identical to UX research at the point of decision, with vocabulary inherited from marketing research rather than HCI.",
    whenToUseYours:
      "When recruiting researchers into retail, or when explaining to a research-fluent audience why shopper-insights work is real ethnographic research and not focus-group theater. The 'research' framing carries methodological seriousness.",
    whenToUseTheirs:
      "Inside CPG and retailer orgs, 'shopper insights' is the function name and the budget line. 'Consumer insights' refers to the brand/attitude side and lives in a different department. 'Path to purchase' is the framework vocabulary for journey mapping. Get these distinctions right and you sound like a practitioner; conflate them and you sound like a consultant who read the deck.",
    tags: ["translation", "category_management", "retail", "research"],
  },
  {
    yourTerm: "customer_journey",
    standardTerms: [
      "shopper journey",
      "path to purchase",
      "trip mission",
      "occasion",
      "moments of truth",
      "ZMOT",
      "FMOT",
      "SMOT",
    ],
    explanation:
      "Shopper journey is what CX calls customer journey when the unit of analysis is a purchase trip rather than a relationship. Adds 'trip mission' (the JTBD framing of a single visit), 'occasion' (the use-case that triggers it), and the Procter & Gamble 'moments of truth' vocabulary (ZMOT = pre-visit research, FMOT = at-shelf decision, SMOT = post-purchase experience). Same anatomy as a journey map; the time horizons and decision nodes are tuned to retail rather than service relationships.",
    whenToUseYours:
      "When the work spans both online and physical, 'customer journey' is the broader frame — it keeps relational and transactional moments in one map. Useful with CX leaders who own the full lifecycle.",
    whenToUseTheirs:
      "Inside retail strategy and category teams, 'shopper journey' and 'path to purchase' are the operating vocabulary, and 'trip mission' is the unit of analysis that resolves arguments about format and adjacency. The P&G moments-of-truth language is universal in CPG and signals fluency.",
    tags: ["translation", "category_management", "retail", "cx"],
  },
  {
    yourTerm: "north_star_metric",
    standardTerms: [
      "comp sales",
      "SSSG",
      "same-store sales growth",
      "like-for-like",
      "LFL",
      "comp",
    ],
    explanation:
      "Comp sales — year-over-year growth in stores open at least 13 months — is the retail north star and has been since the 1970s. Strips out the noise of new-store openings and closures to isolate underlying performance. Online retailers report it as 'like-for-like' or simply 'growth ex-new-customer-acquisition.' The discipline parallel to north-star metric work is the same: one number you can't game by changing the denominator.",
    whenToUseYours:
      "When pitching analytics tooling or product strategy to retailers from a digital-product background, 'north star' frames the conversation in product-org vocabulary. Useful with digitally-native retailers and DTC brands.",
    whenToUseTheirs:
      "In any retail boardroom, earnings call, or merchant review, 'comp sales' is the word. CFOs report it, analysts price stocks on it, and store managers' bonuses hang off it. Mispronouncing it 'same-store growth' is fine; not knowing what it is reads as not being a retail person.",
    tags: ["translation", "category_management", "retail", "metrics"],
  },
  {
    yourTerm: "product_market_fit",
    standardTerms: [
      "range-customer fit",
      "localized assortment",
      "store clustering",
      "right-product-right-place",
      "micro-merchandising",
    ],
    explanation:
      "Retail's version of PMF is range-customer fit at the store-cluster level: does this assortment match the shoppers who walk into this format/region/cluster? The discipline is store clustering (grouping stores by trade-area demographics, sales patterns, format) and localized assortment (different SKU mix by cluster). Same logic as segment-PMF — different than a single 'product fits the market' moment because retail constantly re-fits the same product set to a heterogeneous shopper base.",
    whenToUseYours:
      "When framing why a single national assortment is failing — 'we have product-market fit in cluster A but not cluster B' makes the distributed-fit problem legible to a tech-fluent exec who's only thought about PMF as a binary.",
    whenToUseTheirs:
      "Inside merchant and store-ops orgs, the working vocabulary is 'store clustering' and 'localization' and 'micro-merchandising.' Walmart's 'Stores of the Community,' Kroger's clustering work, and Tesco's dunnhumby-driven micro-merchandising are the canonical examples.",
    tags: ["translation", "category_management", "retail", "positioning"],
  },
  {
    yourTerm: "service_blueprint",
    standardTerms: [
      "retail operating model",
      "store operations playbook",
      "task management",
      "labor model",
      "store choreography",
    ],
    explanation:
      "The service-blueprint discipline — front-stage / back-stage / support-process — exists in retail under different names. The 'retail operating model' captures the macro structure; 'task management' (the systems that push prioritized work to store associates) is the operational instrument; 'labor model' is the staffing math. Store choreography is the front-stage layer: greet, route, assist, close. Same blueprint discipline, distributed across merchandising, operations, and HR functions rather than owned by a single service-design team.",
    whenToUseYours:
      "When the work explicitly spans the customer-facing experience and the back-of-house enablement, 'service blueprint' is the cleanest integrating frame and is what design-fluent execs will recognize.",
    whenToUseTheirs:
      "Inside retail orgs, you'll be talking to store-ops people about 'task management' and 'labor model,' to merchants about 'operating model,' and to format-design folks about 'store flow' or 'choreography.' The blueprint discipline is the same but the budget owners and vocabulary are fragmented. Knowing which word lands in which room is the senior-practitioner move.",
    tags: ["translation", "category_management", "retail", "service_design"],
  },
  {
    yourTerm: "ab_testing",
    standardTerms: [
      "test and control",
      "test markets",
      "store cluster test",
      "in-market test",
      "matched-pair test",
      "pilot wave",
    ],
    explanation:
      "Retail experimentation predates digital A/B testing by half a century. Test-and-control market design (matched pairs of stores or markets, one gets the change, one doesn't, compare lift) is the standard. Methodologically identical — randomization where possible, matched-pair where not, controlled-store sample sizes calculated for detectable effect, lift measured against control. The challenge is that stores aren't iid (geography, demographics, store-manager skill) so the methodology leans harder on matching and longer measurement windows than typical web A/B.",
    whenToUseYours:
      "When pitching experimentation tooling to retailers, 'A/B testing' frames it in modern vocabulary. Useful with digitally-native retailers and any retailer's online team.",
    whenToUseTheirs:
      "Inside merchant and ops orgs, use 'test and control' or 'pilot wave.' These come with operational specificity (number of stores, weeks in market, matched-pair design) that 'A/B test' doesn't. Saying 'A/B test' to a category director reads as someone who's never run a real in-market test.",
    tags: ["translation", "category_management", "retail", "experimentation"],
  },
  {
    yourTerm: "cohort_analysis",
    standardTerms: [
      "shopper segmentation",
      "loyalty segmentation",
      "RFM",
      "recency frequency monetary",
      "trip segmentation",
      "needs-based segmentation",
    ],
    explanation:
      "Cohort and segmentation work in retail predates the loyalty-card era but exploded with Tesco Clubcard / dunnhumby in the 1990s. RFM (recency, frequency, monetary) is the classic structure; modern work layers needs-based segmentation (mission-driven), demographic clusters, and behavioral cohorts. Same discipline as SaaS cohort analysis with different unit of analysis (basket, trip, loyalty card) and longer historical depth in the panel data.",
    whenToUseYours:
      "When integrating retail analytics into a broader product-analytics conversation, 'cohort' is the integrating word. Useful when the loyalty data, the e-comm data, and the app data need to live in one model.",
    whenToUseTheirs:
      "Inside CRM and shopper-insights teams, 'segmentation' is the operating word, and RFM is the universally-recognized base methodology. dunnhumby's segments (Loyal, Vulnerable, Lapsing, etc.) are the canonical naming pattern in grocery. Tesco's six 'Lifestyle' segments are the historical reference.",
    tags: ["translation", "category_management", "retail", "analytics"],
  },
  {
    yourTerm: "feature_deprecation",
    standardTerms: [
      "SKU rationalization",
      "delist",
      "discontinue",
      "tail cut",
      "range simplification",
      "ABC cull",
    ],
    explanation:
      "Same discipline, harsher consequences. Software feature deprecation has soft constraints (you can hide a feature behind a flag, keep it for legacy users, deprecate-then-delete over years). SKU rationalization has hard constraints (the shelf space is reallocated next reset, the supply chain stops carrying it, replenishment shuts off). The retail discipline is older and quantitatively cleaner — POS data makes the ABC cut empirical rather than political. Worth borrowing as a mental model into product orgs that struggle to delete features.",
    whenToUseYours:
      "When making the case inside a product org that the long tail of features is costing more than its incremental revenue — the analogy to SKU rationalization makes the math viscerally concrete to anyone with retail experience.",
    whenToUseTheirs:
      "Inside retailer and CPG orgs, the word is 'rationalization' or 'delisting' or 'pruning the tail.' Saying 'we should deprecate this SKU' reads as not knowing the vocabulary.",
    tags: ["translation", "category_management", "retail", "simplification"],
  },
  {
    yourTerm: "findability",
    standardTerms: [
      "product discoverability",
      "onsite search",
      "site search",
      "searchandising",
      "faceted navigation",
      "guided navigation",
      "browse",
    ],
    explanation:
      "What UX/IA calls findability, eCommerce calls discoverability — and splits across two surfaces: search (the high-intent query box, tuned via 'searchandising' — relevance, synonyms, zero-results recovery, merchandising boosts) and browse (the category page and its faceted navigation). Same underlying discipline as findability research, but the retail version is wired directly to revenue, because a shopper who can't find the product doesn't file a usability bug — they leave and buy elsewhere.",
    whenToUseYours:
      "When recruiting UX/IA researchers into eComm, or explaining to a design-fluent audience why search-and-browse tuning is real information-architecture work and not just 'configuring the search box.' 'Findability' carries the empirical-research freight.",
    whenToUseTheirs:
      "Inside an eComm org, the function words are 'discoverability,' 'site search,' and 'faceted nav.' 'Searchandising' specifically signals you know search output is a merchandising surface, not just a relevance engine — using it reads as a practitioner. Talking about 'findability heuristics' in a trade meeting reads as cosplay; talking about zero-results rate and filter coverage reads as serious.",
    tags: ["translation", "ecommerce", "site_merchandising", "positioning"],
  },
  {
    yourTerm: "conversion_funnel",
    standardTerms: [
      "fallout",
      "fallout report",
      "purchase funnel",
      "cart abandonment",
      "checkout abandonment",
      "drop-off",
      "path analysis",
    ],
    explanation:
      "The product-analytics funnel and the eCommerce funnel are the same construct (staged drop-off from arrival to conversion), but the vocabulary is platform-shaped. In an Adobe shop the funnel report is literally called 'fallout,' pathing is 'flow,' and the stages are success events. The retail-specific stages — add-to-cart, cart abandonment, checkout abandonment — are the named leak points everyone watches, and they distinguish a merchandising/discovery problem (people don't add to cart) from a checkout/payment problem (they add but don't buy).",
    whenToUseYours:
      "When framing the work for a product-analytics or growth audience, 'conversion funnel' and 'drop-off' are the neutral, portable terms — they travel across any analytics stack and any product.",
    whenToUseTheirs:
      "Inside an Adobe Analytics shop, say 'fallout' and 'flow' — that's what the reports are called and what people will pull for you. 'Cart abandonment' vs. 'checkout abandonment' is a distinction merchants care about precisely; conflating them signals you haven't sat in a trade meeting. Match the stack: GA4 shops say 'funnel exploration' and 'path exploration.'",
    tags: ["translation", "ecommerce", "analytics", "positioning"],
  },
  {
    yourTerm: "authorizing_environment",
    standardTerms: [
      "matrixed environment",
      "influence without authority",
      "stakeholder management",
      "cross-functional alignment",
      "dotted-line",
      "lateral leadership",
    ],
    explanation:
      "Mark Moore's 'authorizing environment' (the set of actors whose support a public manager must cultivate to act) and the corporate 'matrixed environment' name the same structural reality: you depend on people who can say no but don't report to you. The public-sector version foregrounds legitimacy and political backing; the corporate version foregrounds peer reciprocity and 'currencies of exchange.' Same discipline — building and spending credibility with people you can't direct — different lineage.",
    whenToUseYours:
      "In public-sector, governance, or mission-driven interviews, 'authorizing environment' signals strategic sophistication and locates you in the Moore/Kennedy School tradition. It's the sharper frame when the obstacle is legitimacy and backing rather than task coordination.",
    whenToUseTheirs:
      "In a retail or corporate interview, lead with 'matrixed environment' and 'influence without authority' — those are the exact words on the JD and in the behavioral-question bank. Have a STAR story where you delivered through peers you didn't manage. Saying 'authorizing environment' to a retail hiring manager risks reading as academic; saying 'I mapped the stakeholders and traded on what each one needed' reads as someone who's done it.",
    tags: ["translation", "leadership", "public_sector", "positioning"],
  },
  {
    yourTerm: "definition_of_done",
    standardTerms: [
      "launch readiness",
      "go-live checklist",
      "readiness gate",
      "QA sign-off",
      "go/no-go",
      "UAT",
    ],
    explanation:
      "Agile's 'definition of done' and merchandising's 'launch readiness gate' are the same move: an explicit, agreed bar that work must clear before it ships, owned by someone accountable. The eCommerce version extends DoD beyond code to content (copy, pricing, legal terms), assets (images load, no broken links), data (products tagged and in stock so search and facets work), and cross-device rendering — then adds a go/no-go decision and a rollback plan.",
    whenToUseYours:
      "With engineering and agile-fluent audiences, 'definition of done' is the precise term and signals you treat quality as a built-in standard, not an end-stage scramble.",
    whenToUseTheirs:
      "In a merchandising org, the words are 'launch readiness,' 'go-live checklist,' and 'QA sign-off,' and the ritual is the 'go/no-go.' These carry the operational specificity (who owns sign-off, what's on the checklist, who's on hypercare) that 'definition of done' leaves implicit. Demonstrating the checklist discipline is how you evidence the JD's 'attention to detail and standards for site execution.'",
    tags: ["translation", "ecommerce", "operations", "positioning"],
  },
  {
    yourTerm: "touchpoint",
    standardTerms: [
      "channel",
      "omnichannel",
      "unified commerce",
      "online-merge-offline",
      "OMO",
      "BOPIS",
      "clienteling",
      "digital touchpoint",
    ],
    explanation:
      "Service design's 'touchpoint' (any moment of contact between a person and a service) is what retail calls a 'channel,' and the service-design instinct to design across touchpoints rather than per-touchpoint is exactly what retail means by 'omnichannel' and, more recently, 'unified commerce.' BOPIS (buy-online-pickup-in-store), ship-from-store, and clienteling are specific cross-touchpoint patterns — the seams where the service-blueprint discipline earns its keep, because that's where 'the website says in-stock but the store can't find it' failures live.",
    whenToUseYours:
      "With a CX or service-design audience, 'touchpoint' keeps the focus on the customer's experience of contact rather than the org's internal channel silos — which is the point service design exists to make.",
    whenToUseTheirs:
      "Inside retail, 'channel' and 'omnichannel' are the operating words, and 'unified commerce' is the current aspiration (one inventory, one customer view, one experience across channels). Naming BOPIS, ship-from-store, or clienteling specifically signals you understand the operational seams, not just the concept. Saying 'let's map the touchpoints' is fine in a design room; in a trade meeting, say 'where do the channels break the experience?'",
    tags: ["translation", "ecommerce", "service_design", "positioning"],
  },
  {
    yourTerm: "front_stage_back_stage",
    standardTerms: [
      "site experience vs. fulfillment",
      "merchandising vs. operations",
      "on-shelf availability",
      "OSA",
      "order orchestration",
      "ship-from-store",
      "line of visibility",
    ],
    explanation:
      "The service-blueprint distinction between front-stage (what the customer sees) and back-stage (the systems and people that enable it) maps cleanly onto eCommerce: the front-stage is the storefront a merchandiser controls — PLP, PDP, search, content — and the back-stage is inventory, fulfillment, and order orchestration. The 'line of visibility' is exactly where most retail failures hide: a beautifully merchandised in-stock badge means nothing if the back-stage can't ship it. Senior site-merchandising work is precisely the discipline of not designing a front-stage the back-stage can't deliver.",
    whenToUseYours:
      "With service-design and CX audiences, 'front-stage / back-stage' and 'line of visibility' are the precise terms and signal you think in blueprints, not just journey maps — you're tracking the enabling systems below the line, not only the visible experience.",
    whenToUseTheirs:
      "In retail, the working frame is 'merchandising vs. operations' or 'site experience vs. fulfillment,' and the back-stage health metric is on-shelf availability (OSA) / in-stock rate. Tying a merchandising decision to its fulfillment dependency — 'don't feature what we can't ship' — is how you demonstrate the blueprint discipline without the design jargon. It's also the cleanest way to show you connect site decisions to inventory outcomes, the JD competency.",
    tags: ["translation", "ecommerce", "service_design", "positioning"],
  },
  {
    yourTerm: "journey_management",
    standardTerms: [
      "lifecycle marketing",
      "CRM",
      "customer lifecycle",
      "retention",
      "single customer view",
      "journey orchestration",
      "CDP",
    ],
    explanation:
      "NN/g 'journey management' (treating customer journeys as owned, governed, KPI'd products rather than one-off maps) lands in eCommerce as the lifecycle/CRM discipline plus the technical 'journey orchestration' that runs on a CDP (customer data platform) feeding a single customer view. Same core idea — someone owns the end-to-end journey and is accountable when it degrades — but retail splits it across merchandising (the in-session journey), CRM/lifecycle (the cross-session relationship), and martech (the orchestration plumbing).",
    whenToUseYours:
      "With CX-leadership and service-design audiences, 'journey management' makes the organizational-capability claim — named owners, journey KPIs, governance — that 'CRM' alone doesn't carry. Use it when the point is accountability for the whole journey, not a campaign.",
    whenToUseTheirs:
      "In retail, the budget lines are 'lifecycle marketing,' 'CRM,' and 'retention,' and the tech conversation is 'CDP' and 'single customer view.' Knowing that the merchandiser owns the in-session journey while CRM owns the cross-session relationship — and that a CDP is what stitches them — signals you understand where journey ownership actually sits in a retail org rather than treating it as one undifferentiated function.",
    tags: ["translation", "ecommerce", "service_design", "cx"],
  },
  {
    yourTerm: "judgment_routing",
    standardTerms: [
      "human-in-the-loop",
      "HITL",
      "human-on-the-loop",
      "escalation policy",
      "autonomy levels",
      "approval gate",
      "routing",
    ],
    explanation:
      "Judgment Routing is the Public Mechanics primitive that reads four signals — uncertainty, stakes, authority, novelty — and sends a proposed agent action down the right path before it executes, so routine actions move fast and consequential ones get scrutiny. The AI-engineering register calls the same thing human-in-the-loop or escalation, but usually treats it as an ad-hoc 'add a review step' rather than a designed routing function. Judgment Routing is the sharper construction: escalation as a property of the system, not a matter of luck.",
    whenToUseYours:
      "When the point is that human oversight should be infrastructure — a routing rule conditioned on measurable signals — rather than a checkbox someone remembers to add. In a Deloitte GPS responsible-AI conversation, 'Judgment Routing on uncertainty, stakes, authority, and novelty' is a more rigorous answer than 'we keep a human in the loop.'",
    whenToUseTheirs:
      "Use 'human-in-the-loop' / 'HITL' and 'autonomy levels' for legibility with ML engineers, product teams, and anyone whose mental model comes from the MLOps or agent-framework world. 'Escalation policy' is the neutral term that lands in both governance and engineering rooms. Lead with the standard term, then introduce the routing-signals framing as the upgrade.",
    tags: ["translation", "agentic_delivery", "public_mechanics", "positioning"],
  },
  {
    yourTerm: "decision_receipts",
    standardTerms: [
      "audit trail",
      "model card",
      "experiment-tracking run",
      "MLflow run",
      "eval log",
      "trace",
      "lineage",
      "provenance",
    ],
    explanation:
      "A Decision Receipt is emitted at the moment of action and ties that action to its authority — capturing the routing outcome, the signals behind it (uncertainty, stakes, authority, novelty), the agent, the policy in force, the authority key, and the rationale — so the decision is auditable and contestable after the fact. The AI register has fragments of this — experiment-tracking runs, traces, model cards, audit logs — but they record system state, not the authorization and rationale of an individual consequential decision. Decision Receipts are the missing primitive: a per-decision, contestable record.",
    whenToUseYours:
      "When the requirement is contestability — a citizen, auditor, or regulator needs to challenge a specific determination and reconstruct why it went the way it did. 'Decision Receipt' carries the why and the authority, which an ordinary log line or trace does not.",
    whenToUseTheirs:
      "Use 'audit trail,' 'trace,' and 'experiment-tracking run' with engineering and MLOps audiences — those are the words that map to tooling they already run (MLflow, Weights & Biases, OpenTelemetry traces). 'Model card' is the right term for model-level documentation. Reach for these when the goal is to land in the existing observability stack; introduce Decision Receipts when per-decision contestability is the actual requirement and the standard tools don't reach it.",
    tags: ["translation", "agentic_delivery", "public_mechanics", "governance"],
  },
  {
    yourTerm: "authority_tokens",
    standardTerms: [
      "scoped credentials",
      "OAuth scopes",
      "IAM policy",
      "agent authorization",
      "capability token",
      "tool permissions",
      "guardrail policy",
    ],
    explanation:
      "An Authority Token attaches the authorization to the action as data the system can read — carrying why an agent is acting and the constraints it's acting under, so delegated judgment is legible at the point of execution. The AI/security register has the mechanical analog in scoped credentials, OAuth scopes, and IAM policies, and the agent-framework world is converging on 'tool permissions' and capability tokens. The Public Mechanics construction adds what those usually omit: the why and the mandate, not just what's permitted.",
    whenToUseYours:
      "When the point is that an agent's permission should carry its rationale and limits as legible data — the basis for both Judgment Routing and Decision Receipts. 'Authority Token' frames authorization as designed infrastructure rather than configuration buried in a settings file.",
    whenToUseTheirs:
      "Use 'scoped credentials,' 'OAuth scopes,' and 'IAM policy' with security and platform engineers — that's the exact vocabulary of least-privilege and access control they already build to. In agent-framework discussions, 'tool permissions' and 'capability tokens' are the emerging standard terms. Borrow the access-control lineage explicitly: Authority Tokens are 'least privilege for agent decisions, carrying the why.'",
    tags: ["translation", "agentic_delivery", "public_mechanics", "positioning"],
  },
  {
    yourTerm: "agent_plumbing",
    standardTerms: [
      "agent runtime",
      "orchestration framework",
      "control plane",
      "agent middleware",
      "Model Context Protocol",
      "MCP",
      "tool-use layer",
      "agent harness",
    ],
    explanation:
      "Agent Plumbing is the Public Mechanics name for the legitimacy layer between an agent's proposal and its execution — the assembly of Authority Tokens (what's permitted, and why), Judgment Routing (evaluating the proposed action), and Decision Receipts (recording the result). The AI register names the mechanical layer — agent runtime, orchestration framework, control plane, MCP for tool wiring — but treats it as engineering plumbing, not a governance surface. The Public Mechanics framing is the claim that this layer is where legitimacy and accountability are actually enforced, or aren't.",
    whenToUseYours:
      "When you want to make the case that the orchestration layer is a governance decision, not just an architecture one — that the place where an agent's action gets authorized, routed, and recorded is where oversight actually lives or dies. Sharpest in responsible-AI and public-sector rooms.",
    whenToUseTheirs:
      "Use 'agent runtime,' 'orchestration framework,' and 'control plane' with engineers building the system; 'MCP' (Model Context Protocol) specifically when the topic is how tools and context get wired to the model. These are the build-surface words. Introduce 'Agent Plumbing' to reframe that same surface as the accountability layer — the move is to show that the engineering layer and the governance layer are the same layer.",
    tags: ["translation", "agentic_delivery", "public_mechanics", "architecture"],
  },
  {
    yourTerm: "mirror_signaling",
    standardTerms: [
      "AI transparency",
      "explainability",
      "XAI",
      "interpretability",
      "model card",
      "right to explanation",
      "observability",
    ],
    explanation:
      "Mirror Signaling is the Public Mechanics principle that the party being computed against should be given something to compute with — restoring computational parity rather than piling on disclosure. The AI register's transparency / explainability / XAI vocabulary is adjacent but aims lower: it explains what the model did, not how to contest it on equal footing. Mirror Signaling is the sharper claim — transparency that closes the calculative asymmetry, not transparency that merely narrates the decision.",
    whenToUseYours:
      "When the responsible-AI conversation is sliding toward 'we'll add an explainability dashboard' and the real problem is power asymmetry — the affected party can't act on the explanation. 'Mirror Signaling' names the goal (parity, contestability) that 'transparency' leaves vague.",
    whenToUseTheirs:
      "Use 'explainability,' 'XAI,' and 'interpretability' with ML audiences, and 'AI transparency' / 'right to explanation' in policy and compliance rooms (the latter maps to GDPR-style framing public-sector clients expect). These are the legible, fundable terms. Bring in Mirror Signaling to raise the bar from 'we explained it' to 'we gave them something to act on.'",
    tags: ["translation", "ai", "public_mechanics", "positioning"],
  },
  {
    yourTerm: "substrate_degradation",
    standardTerms: [
      "model collapse",
      "model drift",
      "feedback-loop harm",
      "negative externalities",
      "aggregate harm",
      "data feedback loops",
    ],
    explanation:
      "Substrate Degradation is the cumulative erosion of a shared substrate — civic trust, signal quality, collective sensemaking — that happens when individually-reasonable extractions compound across cases, with the damage living in an aggregate no single action owns. The AI register has mechanical cousins: 'model collapse' (models trained on synthetic output degrading), 'feedback-loop harm,' and 'negative externalities.' The Public Mechanics term is broader and more precise about ownership — the harm that no single deployment is accountable for is the whole point, which is exactly the gap per-system responsible-AI frameworks tend to miss.",
    whenToUseYours:
      "When the harm being discussed is systemic and unattributable — no single model or deployment is clearly at fault, but the aggregate is corroding something shared (information ecosystems, trust in automated decisions). 'Substrate Degradation' names the ownerless-aggregate structure that per-system risk assessments can't see.",
    whenToUseTheirs:
      "Use 'model collapse' for the specific synthetic-data-degradation phenomenon (Shumailov et al.), 'model/data drift' for the MLOps monitoring concern, and 'negative externalities' for economics-literate and policy audiences. These are the precise, recognized terms for the pieces. Reach for Substrate Degradation when the point is the cross-system aggregate that none of those single-system terms captures.",
    tags: ["translation", "ai", "public_mechanics", "governance"],
  },
  {
    yourTerm: "usability_evaluation",
    standardTerms: [
      "LLM evals",
      "red-teaming",
      "eval set",
      "LLM-as-judge",
      "benchmark",
      "model evaluation",
      "guardrail testing",
    ],
    explanation:
      "The design discipline of evaluating a system against real use — usability testing, heuristic evaluation, task-based studies — has a direct cousin in AI: LLM evals (does the system produce correct, on-spec output?) and red-teaming (where does it fail or get adversarially broken?). Same underlying move: define what good looks like, then test the artifact against it systematically rather than trusting a demo. Heuristic evaluation maps to rubric-based / LLM-as-judge scoring; task-based usability studies map to eval sets of real inputs with known-good outputs; adversarial edge-case probing maps to red-teaming.",
    whenToUseYours:
      "When recruiting design/research talent into AI work, or explaining to a design-fluent audience that eval design is the same rigor as usability research — define the success criteria, sample real tasks, score against a rubric, watch for failure modes. The 'evaluation' framing carries the methodological seriousness and stops evals from being treated as an afterthought.",
    whenToUseTheirs:
      "Inside an AI/ML org, the words are 'evals,' 'eval set,' 'LLM-as-judge,' and 'red-teaming,' with 'benchmark' for standardized public ones. Saying 'let's run a usability study on the model' reads as not knowing the register; saying 'we need an eval set with a scoring rubric and a red-team pass on the edge cases' reads as a practitioner. The disciplines are cousins, but use the AI words in the AI room.",
    tags: ["translation", "ai", "design", "evaluation"],
  },
];

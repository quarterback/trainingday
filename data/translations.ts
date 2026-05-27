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
  {
    yourTerm: "activation",
    standardTerms: [
      "early engagement",
      "first-year programming",
      "four-year engagement model",
      "student outreach",
      "onboarding",
      "first-touch",
    ],
    explanation:
      "Product and growth call the first meaningful action a user takes 'activation,' and the discipline of driving it early 'onboarding.' Career services calls the same thing 'early engagement' — the JD's 'systems that reach students in the first year and sustain meaningful contact across all four years.' Same problem (value compounds the earlier and more reliably you engage; self-selection is the enemy) and same solution shape (designed, proactive touchpoints rather than waiting for the student to show up).",
    whenToUseYours:
      "With product, growth, and data-literate cabinet or board audiences, 'activation' and 'onboarding funnel' frame early engagement as a designed system with measurable first-touch and reach metrics — which is how to make the impact case to people who think in numbers.",
    whenToUseTheirs:
      "In a career-services or academic-affairs room, the words are 'early engagement,' 'first-year programming,' and 'the four-year model.' Saying 'activation funnel' to faculty reads as corporate; saying 'we reach students in year one and sustain contact across four years, and here's the participation data' reads as someone who knows the field. The systems thinking is the asset; let the vocabulary be theirs.",
    tags: ["translation", "career_services", "higher_ed", "positioning"],
  },
  {
    yourTerm: "engagement_metrics",
    standardTerms: [
      "student penetration",
      "participation rate",
      "reach",
      "first-destination outcomes",
      "knowledge rate",
      "leading and lagging indicators",
      "post-graduate outcomes",
    ],
    explanation:
      "The JD literally asks for 'leading and lagging indicators.' Translated: leading = engagement, participation, and reach (who you're touching, how early, how often); lagging = first-destination outcomes (where students land six months out). The discipline is identical to any funnel-to-outcome model — you can't manage the lagging number directly, so you identify the leading engagement metrics that predict it and manage those. Your product-analytics fluency is a direct, under-supplied asset here.",
    whenToUseYours:
      "When making the impact case to senior leadership or the board, the leading/lagging structure plus a clean denominator discipline (don't celebrate an outcomes rate built on a low knowledge rate) is exactly the rigor the JD's data bullet is screening for. Frame it as the funnel-to-outcome logic you've run elsewhere.",
    whenToUseTheirs:
      "Inside the field, 'first-destination,' 'knowledge rate,' and 'penetration / participation' are the operating words (NACE sets the standards). Use them. Talking about 'DAU' or 'activation rate' for students reads as importing the wrong register; talking about participation reach by class year against first-destination outcomes reads as a practitioner who also happens to be unusually data-strong.",
    tags: ["translation", "career_services", "higher_ed", "metrics"],
  },
  {
    yourTerm: "partnerships_pipeline",
    standardTerms: [
      "employer relations",
      "employer engagement",
      "internship pipeline",
      "recruiting partnerships",
      "employer development",
      "graduate-school partnerships",
    ],
    explanation:
      "Business-development 'pipeline' and 'partner development' map onto career services' 'employer relations' — cultivating the organizations that hire graduates, fund internships, and offer fellowships. Same relationship-cultivation discipline (identify → cultivate → steward → measure conversion), tuned to a context where the 'product' is access for students and the relationships are reciprocal and long-horizon rather than transactional.",
    whenToUseYours:
      "When the audience is commercially fluent, 'pipeline' and 'partner development' frame employer relations as a managed portfolio with conversion metrics — useful for showing you'd run it with rigor rather than as ad-hoc networking.",
    whenToUseTheirs:
      "In the field, it's 'employer relations' and 'employer engagement,' and the relationship logic is reciprocity and student access, not a sales quota. Talking about 'closing employer deals' reads as someone who'd treat students as inventory; talking about building durable employer partnerships that expand equitable access reads as mission-aligned. Same pipeline discipline, very different framing of who it serves.",
    tags: ["translation", "career_services", "advancement", "positioning"],
  },
  {
    yourTerm: "platform_strategy",
    standardTerms: [
      "Handshake",
      "career services technology",
      "CRM for student outreach",
      "outcomes / CSM platform",
      "systems optimization",
      "reporting and impact measurement",
    ],
    explanation:
      "The JD's 'manage and optimize career services technology systems for reporting, outreach, and impact measurement' is platform strategy in a domain-specific stack — Handshake (the dominant recruiting and engagement platform), a CRM for outreach, and an outcomes/assessment tool. Most career-services leaders inherit these tools rather than architecting them, so a leader who actually thinks about the data model, integration, and measurement layer is rare — and this is one of your strongest transferable assets for the role.",
    whenToUseYours:
      "Lead with this as a genuine differentiator. Your platform and systems-strategy background turns 'we have Handshake' into 'we have an instrumented engagement-to-outcomes pipeline.' For a non-traditional candidate, the systems competency is the thing the typical applicant pool won't have.",
    whenToUseTheirs:
      "Name the actual tools — Handshake especially — so you sound like you know the domain rather than waving at generic 'platforms.' Knowing that Handshake is the engagement/recruiting layer and that outcomes data is a separate measurement problem signals fluency. Pitch the architecture, but in their nouns.",
    tags: ["translation", "career_services", "higher_ed", "positioning"],
  },
  {
    yourTerm: "external_representation",
    standardTerms: [
      "donor cultivation",
      "stewardship",
      "advancement",
      "alumni engagement",
      "trustee / board presentation",
      "constituent relations",
    ],
    explanation:
      "This role sits inside the College Advancement division, so 'representing the work' includes donor meetings, stewardship, and trustee presentations — fundraising-adjacent relationship work with its own vocabulary (the gift cycle: cultivation → solicitation → stewardship). Your experience briefing executives and representing work to external stakeholders is the transferable core; advancement adds the gift-cycle framing and the expectation that relationships are cultivated toward measurable engagement and giving.",
    whenToUseYours:
      "In a general-leadership frame, 'representing the work to executives and external stakeholders' is the portable claim and maps to what you've done. Pair it with a concrete instance of moving a skeptical external constituency.",
    whenToUseTheirs:
      "In an advancement shop, 'cultivation' and 'stewardship' are terms of art with a specific sequence; 'donor meetings' and 'board presentations' are the concrete asks. Showing you understand the gift cycle — that stewardship is the step after a gift, not a synonym for it — signals you can operate inside Advancement rather than merely adjacent to it. Note this role reports to the VP for College Advancement, so the division's vocabulary is not optional. Pair with the authorizing_environment translation for the faculty-buy-in side.",
    tags: ["translation", "career_services", "advancement", "positioning"],
  },
  {
    yourTerm: "markdown_optimization",
    standardTerms: [
      "dynamic pricing",
      "variable pricing",
      "yield management",
      "ticket pricing",
      "price elasticity",
      "get-in price",
    ],
    explanation:
      "Retail markdown optimization and live-event ticket pricing are the same perishable-inventory problem: finite supply, a hard expiry (a seat is worthless after the event, like produce at close), and demand you model on elasticity. Retail discounts toward a sell-through date; ticketing sets variable prices by demand tier up front and adjusts dynamically as the date nears — but the underlying elasticity-and-perishability math is shared.",
    whenToUseYours:
      "When establishing credibility on revenue rigor, frame ticketing as a markdown/yield problem you've already solved at scale in retail — the perishability and elasticity modeling is the transferable expertise, and it's a strong answer to the 'advanced analytics / pricing strategies' qualification.",
    whenToUseTheirs:
      "In the room, it's 'dynamic pricing,' 'variable pricing,' and 'yield management,' and the secondary market (StubHub, SeatGeek) is the price signal that exposes mispricing. Saying 'markdown' for tickets reads as retail-brain; saying 'variable pricing by demand tier, dynamic adjustment, and the secondary-market get-in price as ground truth' reads as someone fluent in the category. Pair with Ticket Yield Management.",
    tags: ["translation", "sports_venue", "pricing", "positioning"],
  },
  {
    yourTerm: "customer_data_platform",
    standardTerms: [
      "single fan view",
      "fan data platform",
      "unified fan profile",
      "identity resolution",
      "golden record",
      "data governance",
    ],
    explanation:
      "A CDP / single-customer-view in retail or ecommerce and a 'single fan view' in sports are the same architecture: resolve identity across fragmented sources into one governed profile that downstream personalization, pricing, and retention depend on. The sports sources differ — ticketing, F&B point-of-sale, merch, parking, app, broadcast — but the integration, governance, and golden-record problem is identical to what you've built.",
    whenToUseYours:
      "This is the JD's headline outcome ('unified, governed data ecosystem') and your single strongest claim. Lead with the enterprise data-platform work directly — the identity-resolution and governance problem is exactly the same, and most venue candidates won't have built one.",
    whenToUseTheirs:
      "Call it the 'single fan view' or 'fan data platform' and name the sports sources (ticketing, concessions, merch, app) so it lands as domain-aware rather than generic data-speak. Showing you know the fan is fragmented across Ticketmaster/AXS plus F&B POS plus app signals you understand where the integration pain actually is. Pair with Single Fan View / Fan Data Platform.",
    tags: ["translation", "sports_venue", "data", "positioning"],
  },
  {
    yourTerm: "subscription_churn",
    standardTerms: [
      "season-ticket renewal",
      "STM retention",
      "attrition",
      "renewal rate",
      "propensity to renew",
    ],
    explanation:
      "Season-ticket-member economics are subscription economics: recurring revenue, an annual renewal cycle, and churn you predict from usage and engagement. Your SaaS/subscription retention and cohort analytics transfer almost one-to-one — usage (scan rate), secondary-market listing behavior, and tenure are the leading churn indicators, just as logins and feature usage are in software.",
    whenToUseYours:
      "Frame STM retention as the subscription-churn modeling you've done — propensity scoring, cohort retention curves, intervention design. It's a clean, concrete answer to 'data modeling, forecasting, and performance measurement.'",
    whenToUseTheirs:
      "Say 'renewal rate,' 'attrition,' and 'STM' (season-ticket member), not 'MRR churn.' And acknowledge the industry-specific confound up front: renewal correlates heavily with team performance, which you don't control — showing you'd isolate the service-quality signal from the win/loss signal signals you understand the domain, not just the math. Pair with STM Lifecycle & Retention.",
    tags: ["translation", "sports_venue", "retention", "positioning"],
  },
  {
    yourTerm: "omnichannel",
    standardTerms: [
      "in-venue + remote fandom",
      "online-to-offline",
      "integrated touchpoints",
      "fan journey",
      "phygital",
    ],
    explanation:
      "Omnichannel retail (unify the store and the digital experience around one customer) maps onto the JD's 'in-venue and online... integrate with offline touchpoints' fan experience. The twist specific to sports: the remote/digital audience vastly outnumbers the in-building one, so the integration isn't store-plus-web of equal weight — it's a small high-value live experience plus a massive remote fanbase you mostly reach digitally.",
    whenToUseYours:
      "Your omnichannel and online-to-offline work is the transferable spine for the fan-experience outcome — same discipline of one customer across many touchpoints, same personalization engine.",
    whenToUseTheirs:
      "Talk about 'in-venue versus remote fandom' and the 'fan journey,' and show you grasp the asymmetry: the building holds ~17,000 but the fanbase is millions, so digital growth is mostly about fans who never attend. That reframe — not just 'integrate the app with the website' — is what separates a retail omnichannel answer from a sports digital-strategy answer. Pair with Fan Journey & Remote Fandom.",
    tags: ["translation", "sports_venue", "digital", "positioning"],
  },
  {
    yourTerm: "consulting_engagement",
    standardTerms: [
      "forward-deployed engagement",
      "white-glove deployment",
      "embed",
      "implementation",
      "field engineering",
    ],
    explanation:
      "A traditional consulting / SI engagement (scope -> advise -> hand off to a delivery team) versus the forward-deployed model (embed in the customer's environment and build the production software yourself). The customer-facing discovery and stakeholder navigation are shared; the difference is the FDE writes the production code and owns the outcome rather than producing recommendations or specs for someone else to implement.",
    whenToUseYours:
      "With a services / consulting audience, framing it as 'embedded delivery' communicates the customer-facing and ambiguity-navigation skills you've built.",
    whenToUseTheirs:
      "At Anthropic, lead with 'forward-deployed' and 'shipping to production in the customer's systems' — and be ready for the bright line they care about: did you write the code that went live, or did you advise a team that did? The JD and the application question ('Have you shipped agents into production?') screen hard for builders, not advisors. Pitch the building, not the deck.",
    tags: ["translation", "forward_deployed", "applied_ai", "positioning"],
  },
  {
    yourTerm: "proof_of_concept",
    standardTerms: [
      "production deployment",
      "shipped to production",
      "production workflow",
      "GA / live",
      "in production",
    ],
    explanation:
      "Enterprise innovation work often stops at POC or pilot — a demo that proves feasibility. The FDE bar is production: the artifact runs in the customer's live workflow, with the reliability, security, and eval rigor that implies. The build skills overlap, but 'I built a POC' and 'I shipped an agent into production' are different claims, and this role explicitly screens for the latter.",
    whenToUseYours:
      "Only if the work genuinely stopped at POC — then be honest about it and emphasize the transferable build skills rather than overclaiming.",
    whenToUseTheirs:
      "If you've shipped anything into a real production workflow — even internal — lead with that framing, because there's a literal yes/no application question on it. 'Production' here means real users, real reliability expectations, real consequences; don't inflate a pilot, because the interview will probe it. If your strongest agent work is the trainingday system itself, frame it accurately: a built-and-running tool deployed via Vercel, not an enterprise production deployment.",
    tags: ["translation", "forward_deployed", "applied_ai", "positioning"],
  },
  {
    yourTerm: "reusable_assets",
    standardTerms: [
      "repeatable deployment patterns",
      "reference architecture",
      "playbook",
      "productize field learnings",
      "patterns back to Product/Eng",
    ],
    explanation:
      "Building reusable components / platforms in a product org and 'codifying repeatable deployment patterns' as an FDE are the same instinct: refuse to let every job be bespoke, extract the template, and feed it back so the next one is faster. The FDE twist is that the feedback loop runs to Product and Engineering — your field learnings become product requirements — which is where forward-deployed work earns roadmap influence.",
    whenToUseYours:
      "Your platform / systems background — turning one-offs into reusable infrastructure — is a direct and somewhat differentiated asset; lead with it as the thing that keeps an FDE org from becoming a linear-cost services shop.",
    whenToUseTheirs:
      "Frame it as 'codifying patterns' and 'contributing insights back to Product and Engineering' (the JD's exact language). Showing you think about the productization feedback loop, not just the single customer, signals you'd help build the founding motion rather than just close engagements.",
    tags: ["translation", "forward_deployed", "applied_ai", "positioning"],
  },
  {
    yourTerm: "substrate_navigation",
    standardTerms: [
      "customer journey",
      "journey management",
      "journey orchestration",
      "customer experience (CX)",
      "journey-centric operating model",
    ],
    explanation:
      "What CX calls a customer 'journey' — a chosen path through a product or funnel toward a commercial relationship — the public-systems and agentic work reframes as navigating a substrate: a person pushed across agencies, vendors, and decision engines by external forces, where the seams between institutions are the real object. 'Journey management' is becoming legible to enterprise CX and service-ops buyers (Forrester's journey-centric push, tools like TheyDo / Smaply / Milkymap), which makes it a useful procurement vocabulary; but the word 'journey' quietly dissolves the substrate into a narrative of the user's experience — exactly the move that lets institutions off the hook for the seams. 'Trajectory' is a physics word (external forces, velocity, inflection points done to people); 'journey' is a consumer word (a path you choose).",
    whenToUseYours:
      "For public services, multilateral delivery, and the agentic layer — where there's no single customer, product, or funnel — 'trajectory' and 'substrate' keep the institutional seams and the ownerless-aggregate harm in view. The tell: when there's no customer, no product, and no funnel, it's a trajectory through a substrate, not a journey. Pair with Trajectory Management and Substrate Degradation.",
    whenToUseTheirs:
      "'Journey management' / 'journey orchestration' is the term that gets you in the door and gets the work budgeted in CX and service-ops orgs that wouldn't otherwise know how to procure structural cross-seam work. Ride it to capture the mandate, then execute something more structural. The trade-off is real: riding the term opens doors; adopting it as a core identifier softens the harder substrate-and-seams claim your architecture is making — so speak it fluently, but don't let it become the name on the door.",
    tags: ["translation", "public_sector", "cx", "owner_framework"],
  },
  {
    yourTerm: "checkout_conversion",
    standardTerms: [
      "Cheering / Bits purchase",
      "sub conversion",
      "monetization surface",
      "in-the-moment tipping",
      "gifting flow",
    ],
    explanation:
      "The ecommerce checkout / conversion-funnel instinct partly transfers to creator monetization, but the context flips the logic: the spend is live, often impulsive, socially performative (a Cheer is visible to the community), and frequently relational rather than transactional (a recurring sub is closer to a membership than a cart). Optimizing a Cheer flow like a checkout — friction reduction, urgency, upsell — risks reading as pressure in a community setting.",
    whenToUseYours:
      "With PMs and data partners, 'conversion' and 'funnel' are the shared language for instrumenting and improving a monetization surface, and your ecommerce depth here is real and transferable.",
    whenToUseTheirs:
      "In the design room and with creators, frame it as the gesture it is — 'Cheering,' 'supporting,' 'gifting a sub' — not 'checkout.' Naming the live/social/relational difference (and that a sub is a relationship, not a transaction) signals you understand creator monetization rather than porting a retail cart. Pair with Twitch Creator Monetization Mechanics.",
    tags: ["translation", "creator_economy", "monetization", "positioning"],
  },
  {
    yourTerm: "trust_as_substrate",
    standardTerms: [
      "creator & viewer trust",
      "fair-by-design",
      "dark patterns (what not to ship)",
      "responsible monetization",
      "long-term retention vs short-term revenue",
    ],
    explanation:
      "Connects your Substrate Degradation / Legitimacy Tax frameworks to a product team's language of 'trust' and 'fairness.' In a monetization-UX room, 'trust' is usually treated as a soft value; your stack gives it teeth — trust is the substrate the platform's revenue actually sits on, and aggressive monetization is a Legitimacy Tax that drains it faster than it regenerates. Same point, two registers; the JD's 'feels fair' and 'creator/viewer trust' are the consumer-product surface of your public-mechanics work.",
    whenToUseYours:
      "In strategy and exec conversations where you want to make the long-term cost of extraction legible as more than 'users might not like it' — the substrate/Legitimacy-Tax framing turns a soft objection into a structural argument about where the business's durable value lives.",
    whenToUseTheirs:
      "In the design room and with PMs, the words are 'trust,' 'fair,' 'dark patterns we won't ship,' and 'long-term retention vs short-term revenue.' Don't open with 'substrate degradation' to a product team — say 'this wins us a quarter and costs us the community,' then offer the deeper model if they want it. Pair with Monetization UX Ethics and your Calculative Asymmetry / Mirror Signaling cards.",
    tags: ["translation", "creator_economy", "monetization", "owner_framework"],
  },
  {
    yourTerm: "civil_economics",
    standardTerms: [
      "IT internal service fund",
      "cost recovery / chargeback",
      "total cost of ownership (TCO)",
      "benefits realization",
      "capital vs operating budget",
    ],
    explanation:
      "Your Civil Economics question — where does the cost of an activity actually land, and who controls that boundary — is what the governmental internal-service-fund model tries to answer in budget form. The fund charges user departments to recover IT's cost, making the Vp/Ve split (who captures the benefit, who carries the cost) legible inside the city's accounting. TCO, lifecycle refresh, and benefits realization are the same 'account for the cost past the purchase boundary' instinct in CIO language.",
    whenToUseYours:
      "In strategy or council conversations where the point is that a cheap purchase today is an expensive obligation later (the Vr arriving after the buyer is gone) — your temporal value framing makes lifecycle and resilience underfunding legible as a structural cost, not just a budget ask.",
    whenToUseTheirs:
      "In a municipal finance room the words are 'internal service fund,' 'chargeback,' 'TCO,' and 'multi-year capital programming.' Lead with those; bring the Civil Economics framing only if someone wants the deeper model of why deferred lifecycle spend is a real liability. Pair with IT Internal Service Fund & Technology Budgeting and Benefits Realization Management.",
    tags: ["translation", "municipal_it", "finance", "owner_framework"],
  },
  {
    yourTerm: "service_modernization",
    standardTerms: [
      "technology as continuous improvement",
      "digital service delivery",
      "process / workflow simplification",
      "self-service",
      "operational excellence",
    ],
    explanation:
      "Your service-design and delivery work maps onto the JD's repeated framing of 'technology as a continuous improvement tool' — streamlining workflows, expanding self-service, simplifying end-to-end customer experience. Same discipline (find the friction, redesign the process, measure the improvement); the CIO register frames it as operational modernization and citizen/employee service delivery rather than design.",
    whenToUseYours:
      "When you want to signal that you treat technology as a means to better service rather than as an end — your service-blueprint and journey instincts are a real differentiator in an IT department that may think in tickets and uptime rather than experience.",
    whenToUseTheirs:
      "Frame it as 'continuous improvement,' 'process modernization,' and 'service delivery' (the JD's words), with accessibility and inclusive design called out explicitly. In a government IT context, 'digital transformation' can read as vendor hype — 'we simplified the permit workflow and cut response time' lands better than abstractions. Pair with Service Blueprint and Journey Mapping.",
    tags: ["translation", "municipal_it", "service_delivery", "positioning"],
  },
  {
    yourTerm: "responsibility_to_record",
    standardTerms: [
      "defensible findings",
      "the investigative record",
      "evidentiary standard",
      "findings that survive arbitration",
      "chain of reasoning",
    ],
    explanation:
      "Your Responsibility to Record and Last Documented Mile frameworks land directly in police oversight: a sustained misconduct finding is only as good as the record behind it, and the place discipline gets overturned — at arbitration, on appeal — is precisely the Last Documented Mile, where the chain of reasoning from evidence to finding goes silent. RTR names who must document each step of the investigation so the finding is reconstructable and defensible.",
    whenToUseYours:
      "In conversations about why oversight bodies lose at arbitration, your LDM/RTR framing diagnoses it more precisely than 'weak investigation' — it locates the failure at the specific undocumented step, which is both a management fix and a training program.",
    whenToUseTheirs:
      "In the room the words are 'defensible findings,' 'evidentiary standard,' 'the record,' and 'will it survive arbitration.' Lead with those; bring RTR/LDM when you want to show you have a systematic theory of where findings fail, not just diligence. Pair with The Misconduct Investigation & Discipline Process and Officer Due-Process & Legal Constraints.",
    tags: ["translation", "police_oversight", "owner_framework"],
  },
  {
    yourTerm: "accountability_path",
    standardTerms: [
      "independent oversight",
      "contestable review",
      "the complaint process",
      "community decision authority",
      "due process",
    ],
    explanation:
      "Your Accountability Path primitive — high-impact decisions automatically route to contestable, human-led review — is, at institutional scale, what a police-oversight system is: a route by which the most consequential decisions (use of force, misconduct) become independently reviewable and contestable by the affected community. OCPA is, in effect, an Accountability Path instantiated as a public institution, with the CBPA as the human-led review.",
    whenToUseYours:
      "When framing the design of the complaint and review system, your Accountability Path / Decision Receipts vocabulary gives a systems language for what most candidates can only describe procedurally — useful for the 'design scalable accountability systems' part of the JD.",
    whenToUseTheirs:
      "In the oversight world the words are 'independent investigation,' 'the complaint process,' 'community decision authority,' and 'due process.' Use those; the systems framing is your differentiator under the hood, not the opening line. Pair with Civilian Oversight Models and your Decision Receipts card.",
    tags: ["translation", "police_oversight", "owner_framework"],
  },
];

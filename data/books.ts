import type { Book } from "@/lib/types";

// Books you've read and want to be able to reference. Add entries by
// editing this file (GitHub web editor works fine). One option for
// bootstrapping a long list is to export your Literal `has-read` shelf,
// reformat the rows into Book objects, and paste them in.
export const books: Book[] = [
  {
    title: "Category Management: Positioning Your Organization to Win",
    author: "ACNielsen, Karen Raugust, John Karolefski",
    category: "category_management",
    oneLiner:
      "The canonical reference for the 8-step category management process and the source most practitioners trace their training back to.",
    howToReference:
      "Cite as the source-text when explaining the 8-step process, category roles, or the original ECR-era discipline. It's the foundational document, even if the practice has evolved.",
    whenToInvoke:
      "Inside CPG strategy conversations, supplier–retailer relationship discussions, and anywhere someone treats category management as a buzzword rather than a discipline with a 35-year operating literature.",
    pairsWith: ["Why We Buy", "The New Rules of Retail"],
    notes:
      "Dated in places (the case studies are 1990s grocery), but the framework itself remains the operating system of CPG account management. Brian Harris and The Partnering Group's adjacent materials are the academic-rigor companion.",
    tags: ["category_management", "retail", "reference", "foundational"],
  },
  {
    title: "Why We Buy: The Science of Shopping",
    author: "Paco Underhill",
    category: "category_management",
    oneLiner:
      "Ethnographic field-research classic on how shoppers actually behave in stores — the original case for empirical shopper observation as a category-management input.",
    howToReference:
      "The reference text for store-layout, adjacency, and shopper-behavior arguments. Underhill's Envirosell methodology (intercepts, time-lapse video, eye tracking) is foundational to modern shopper insights.",
    whenToInvoke:
      "Store design conversations, adjacency debates, format strategy, and any argument that quantitative POS data needs ethnographic counterpart. Also the bridge book for UX/research people entering retail — it's the closest thing to 'Don't Make Me Think' for physical retail.",
    pairsWith: ["Inside the Mind of the Shopper", "How Brands Grow"],
    notes:
      "1999 original, updated 2008. The specifics (mall traffic patterns, Blockbuster checkout flow) are dated; the methodology and the discipline of observation aren't.",
    tags: ["category_management", "retail", "shopper", "research"],
  },
  {
    title: "How Brands Grow: What Marketers Don't Know",
    author: "Byron Sharp",
    category: "category_management",
    oneLiner:
      "Evidence-based marketing's foundational text — argues from panel data that brand growth comes from mental and physical availability across light buyers, not loyalty among heavy buyers.",
    howToReference:
      "The empirical counterweight to differentiation-and-segmentation orthodoxy. Sharp's double-jeopardy law and duplication-of-purchase law are the laws of brand behavior most marketers operate against, not with.",
    whenToInvoke:
      "Brand strategy debates, distribution and category-share conversations, and anywhere someone is over-investing in loyalty programs at the expense of penetration. Particularly useful for arguing that category-management decisions (distribution breadth, in-stock, share of shelf) often dominate brand-marketing decisions in driving share.",
    pairsWith: ["Category Management", "Decoded"],
    notes:
      "Polarizing in marketing circles. The book overstates its case but the data is real and the implications for category management are significant — penetration and availability are the lever, not loyalty.",
    tags: ["category_management", "retail", "marketing", "evidence_based"],
  },
  {
    title: "Inside the Mind of the Shopper: The Science of Retailing",
    author: "Herb Sorensen",
    category: "category_management",
    oneLiner:
      "Quantitative shopper-observation work — the science behind store layout, pack design, and shelf flow. The empirical successor to Underhill.",
    howToReference:
      "Source for arguments about store-second-economy (the ~6 minutes shoppers actually spend in a 30-minute trip making purchase decisions), eye-level economics, and packaging-as-shelf-billboard.",
    whenToInvoke:
      "Planogram debates, pack-design arguments, and any conversation that needs to quantify what 'good shelf execution' actually buys you in conversion terms.",
    pairsWith: ["Why We Buy", "Category Management"],
    notes:
      "Drier than Underhill, denser in data. The two together are the empirical-shopper-research starter kit.",
    tags: ["category_management", "retail", "shopper", "research"],
  },
  {
    title: "The New Rules of Retail",
    author: "Robin Lewis, Michael Dart",
    category: "category_management",
    oneLiner:
      "Framework for understanding the structural shifts in retail — preeminent value chains, neurological connectivity, and the demise of mass merchandising. The macro-context book for category-management work.",
    howToReference:
      "Useful for situating category-management decisions inside the larger retail-economics shift (DTC, vertical integration, experience retail). Less operational, more strategic.",
    whenToInvoke:
      "Format-strategy reviews, retailer M&A analysis, and conversations where the question is 'what kind of retailer are we becoming' rather than 'what should we do in Q3.'",
    pairsWith: ["Reengineering Retail", "Resurrecting Retail"],
    notes:
      "Originally 2010, updated 2014. The thesis aged well — vertical integration and experience retail have continued to win — but the specific company examples have churned.",
    tags: ["category_management", "retail", "strategy"],
  },
  {
    title: "Reengineering Retail: The Future of Selling in a Post-Digital World",
    author: "Doug Stephens",
    category: "category_management",
    oneLiner:
      "The Retail Prophet's argument that physical retail's future is as media — stores as customer-acquisition channels for brand experiences, not units of distribution.",
    howToReference:
      "The bridge text between traditional category management (which optimizes the store as a distribution unit) and experience retail (which treats the store as a media channel). Provocative and useful for reframing format debates.",
    whenToInvoke:
      "Store-of-the-future workshops, format strategy, and any conversation where 'how do we compete with Amazon' is the underlying question. Particularly useful for retailers wrestling with whether physical stores are a liability or an asset.",
    pairsWith: ["The New Rules of Retail", "The Everything Store"],
    notes:
      "Stephens followed with 'Resurrecting Retail' (2021) which extended the thesis through the pandemic. Both worth reading; this one is the cleaner core argument.",
    tags: ["category_management", "retail", "strategy", "future"],
  },
  {
    title: "The Everything Store: Jeff Bezos and the Age of Amazon",
    author: "Brad Stone",
    category: "category_management",
    oneLiner:
      "The Amazon origin story — the book that explains the operating philosophy (long-term, customer-obsessed, willing to lose money for a decade) that reshaped category management for every other retailer.",
    howToReference:
      "Reference text for any conversation about Amazon's strategic logic, flywheel economics, or why traditional category-management defenses (slotting fees, captaincy, EDLP) struggled against the platform.",
    whenToInvoke:
      "Anywhere the strategic question is 'how do we respond to Amazon' or 'what does category management look like online.' Also the cleanest narrative source for the early Amazon Marketplace and AWS decisions.",
    pairsWith: ["Sam Walton: Made in America", "Reengineering Retail"],
    notes:
      "Bezos famously didn't cooperate; the book leans on hundreds of secondary sources. The follow-up 'Amazon Unbound' (2021) covers the post-2013 era.",
    tags: ["category_management", "retail", "amazon", "strategy"],
  },
  {
    title: "Sam Walton: Made in America",
    author: "Sam Walton, John Huey",
    category: "category_management",
    oneLiner:
      "Walton's autobiography — the operating philosophy that built the most-studied retail organization in history. EDLP, store-of-the-community, supplier discipline, the obsession with shrink and operational basics.",
    howToReference:
      "The primary-source reference for EDLP origins, Walmart's supplier-relationship model, and the operations-as-strategy philosophy that still shapes US retail. Cite when arguing that retail wins are operational, not promotional.",
    whenToInvoke:
      "Format-strategy and pricing debates, supplier-relationship analyses, and anywhere someone thinks retail is glamorous — Walton's clarity that retail is logistics and labor management is grounding.",
    pairsWith: ["The Everything Store", "The New Rules of Retail"],
    notes:
      "1992, written as Walton was dying. Some of the folksy framing is mythmaking, but the operational principles are real and the descendants of those decisions still run US retail.",
    tags: ["category_management", "retail", "foundational", "walmart"],
  },
];

import type { Story } from "@/lib/types";

// Career stories live here — the act of writing them is the learning.
// Add entries by editing this file (GitHub web editor works); Vercel
// rebuilds on push.
export const stories: Story[] = [
  {
    title:
      "eAPD: Turning a 100-Page Federal Document Into an Application States Use Voluntarily",
    referenceSentence:
      "At 18F I was the Principal Content Strategist on eAPD, a CMS application that replaced a 100+ page free-form Medicaid funding submission (the HITECH APD) with a structured web app — a four-year continuous-discovery effort with two distinct user populations (state submitters and federal reviewers) that shrank a representative APD from 82 pages to 19 and got states asking for early access before launch.",
    thirtySecondVersion:
      "At 18F I was Principal Content Strategist on eAPD, the CMS application that replaced the paper Medicaid HITECH funding submission. A four-year continuous-discovery program with the product trio embedded — designers, PMs, and engineers all in the research room — turned a free-form 100-page document into a structured app. A representative state APD dropped from 82 pages to 19, and Delaware and Idaho asked to start using it before general release.",
    twoMinuteVersion:
      "eAPD was a CMS application built in partnership with 18F (later transitioned to a successor team in 2020 with the HCD culture intact) to replace the paper HITECH Advanced Planning Document — the primary vehicle states use to request federal Medicaid IT funding under 42 CFR 495. The status quo was a 100+ page free-form Word/Excel/email artifact whose quality depended entirely on the author's experience, and a CMS review process state submitters described as a black box. We rebuilt it as a structured web application serving two distinct user populations with different jobs-to-be-done: state authors who needed a fileable, distributable artifact, and federal reviewers who needed a markup-able decision document.\n\nThe process was textbook dual-track agile in Patton's and Cagan's sense — a continuous-discovery track and a continuous-delivery track run by the same cross-functional team. We ran research studies every four to six weeks across roughly four years and twenty-plus rounds, with the product trio (PM, designer, engineer) observing live sessions and present at debriefs, so findings reached the team before any report was written and turned directly into prioritized backlog items.\n\nMy role as Principal Content Strategist at 18F was the language and content-system layer: turning regulatory requirements into plain-language instructional copy and example content, defining the heading / short instruction / detail / help-text taxonomy, governing how routine copy lived in a separate YAML layer non-engineers could edit without touching the rendering code, and shaping the voice users actually encountered moment-to-moment. In a regulated submission context, content is the interface — it is what tells a state analyst what CMS is asking for and how to produce something approvable.\n\nThe design moves were standard but executed well: progressive disclosure with a persistent section nav and on-demand help drawers surfacing regulation in context; non-blocking inline validation with autosave, because research showed states author asynchronously — they fill data as it arrives, never in document order — so the required-fields check fires at Export rather than per-field; auto-calculation of all budget totals and an auto-generated executive summary structurally constrained against scope creep. Error prevention as architecture, not error messages after the fact.\n\nOutcomes: a representative state APD shrank from 82 pages the prior year to 19 in eAPD — a 77% reduction in the document a reviewer has to process. Delaware and Idaho requested access before general release. The 2023 OKRs were written as outcomes: 75% first-cycle approval rate, 30% reduction in average review time, 50% of registered states submitting a second eAPD as a retention proxy.",
    fiveMinuteVersion:
      "Background. The HITECH Advanced Planning Document (APD) is the primary vehicle states use to request federal Medicaid IT funding under 42 CFR 495. CMS — through its MACPro suite — receives these from every state participating in the Promoting Interoperability Program (formerly the EHR Incentive Program). The status quo was a 100+ page free-form document submitted via email, with quality and consistency wildly dependent on the experience of the state's author, and a review cycle state submitters described as a black box. The cyclical process (Request → Review and Decision → Response) was managed largely in Word and email.\n\n18F partnered with the Centers for Medicare & Medicaid Services to rebuild this as a structured web application; I joined as Principal Content Strategist on the founding team, leading content strategy and research alongside another design lead during the prototype and early build phases. In 2020, 18F transitioned the work to a successor team (Fearless, A1M Solutions, Health Management Associates, Theta), and the human-centered-design culture and continuous-discovery cadence carried through the handoff intact — a meaningful proof point about durable practice culture, not just artifacts.\n\nThe operating model. eAPD ran as a dual-track agile team in Jeff Patton's and Marty Cagan's sense — discovery and delivery in parallel, by the same cross-functional team. We ran research studies every four to six weeks across roughly four years and twenty-plus rounds, with continuous discovery in Teresa Torres's sense: the product trio (PM, designer, engineer) observed live research sessions and attended debriefs as a working norm, so findings reached the team before reports and converted into prioritized backlog items rather than living in a Google Drive. Two team-specific research questions ran across every study beyond standard usability — will this change help the state produce an approvable APD, and do states understand what CMS wants to make it approvable — operationalizing outcome-based research, not feature validation.\n\nTwo-sided service design. eAPD served two distinct user populations with different jobs-to-be-done. State authors needed a fileable, distributable artifact they could circulate internally for input. Federal reviewers needed a markup-able decision document. The administrative-completeness check plus the author attestation served as a workflow gate that shifted introductory review left — off the State Officer, into the system. That is service design proper: modeling the full Request → Review → Response loop, not just the interface screens, and designing for the seam between parties.\n\nMy role. Principal Content Strategist at 18F. The work was the language and content-system layer: turning regulatory requirements into plain-language instructional copy and example content; defining the instruction taxonomy (heading / short / detail / help text) with explicit rules for what lives where and why; building and governing the content layer so routine copy could live in YAML files non-engineers could edit, while the structural elements stayed in the rendering layer; setting voice, casing, acronym, and numeric-format conventions across the product. In a regulated submission, content is the interface — the words are what tell a state analyst what CMS is asking for and what 'approvable' looks like.\n\nThe design moves. Progressive disclosure with a persistent section nav so the user always knows where they are, the form broken into sections and subsections, regulation surfaced in help drawers on demand rather than dumped on the page. Non-blocking inline validation paired with autosave — the research finding driving the architecture was that states author asynchronously, entering data as it arrives in real life rather than in document order, so blocking validation per field was the wrong mode; the required-fields check fires at Export instead, tied to an unavoidable action that fit the existing process. Auto-calculation of every downstream budget total from raw inputs (personnel, contractor cost, FFY, match rate), removing the manual-entry error the prior process generated. An auto-generated executive summary that structurally cannot exceed scope. This is error prevention as architecture in Nielsen's heuristic sense — preventing mistakes through constrained inputs and structural guidance, not after-the-fact validation messages.\n\nOutcomes and metrics. A representative state APD dropped from 82 pages the prior year to 19 in eAPD — a 77% reduction in the document a reviewer has to process. Delaware and Idaho asked to begin using the product before general release. The 2023 OKRs were written as outcomes, not output: 75% first-cycle approval rate, 30% reduction in average review time, 50% of registered states submitting a second eAPD (retention as a value proxy). One honest limitation worth naming: the team logged but never instrumented its central trust question — will state users stop double-checking the math against their own spreadsheets as confidence in the system's calculations builds — so a known leading indicator was identified but not closed out. Naming that shows I can read the methodology critically, not just describe it.\n\nWhy this matters as a portfolio piece. eAPD is a clean, citable case of dual-track agile with embedded continuous discovery shipping research-driven product inside federal clearance and procurement constraints — not in a permissionless commercial sandbox. The work translates: two-sided service design, outcome-based OKRs, progressive disclosure on a complex regulated form, non-blocking validation defended on research grounds, error prevention as architecture, and a content system designed to be governed by non-engineers. Anywhere the job is taking a confusing, high-stakes process and turning it into something users actually adopt, the moves are the same.",
    frameworksExemplified: [
      "Continuous Discovery (Torres)",
      "Dual-Track Agile",
      "Human-Centered Design (HCD)",
      "Service Blueprint",
      "Journey Mapping",
      "Progressive Disclosure",
      "Nielsen's 10 Usability Heuristics",
      "OKRs (Objectives and Key Results)",
      "18F Methods",
      "Opportunity Solution Tree",
    ],
    thinkersInDialogue: [
      "Teresa Torres",
      "Marty Cagan",
      "Jeff Patton",
      "Jakob Nielsen",
      "Don Norman",
    ],
    questionsItAnswers: [
      "Tell me about a complex project you led or contributed to.",
      "Walk me through how you run user research.",
      "How do you work with engineering and product?",
      "Tell me about a time you used data or research to drive a product decision.",
      "How do you think about content design or content strategy?",
      "Show me an example of designing for two different user types at once.",
      "How do you measure UX success?",
      "Tell me about working in a regulated or constrained environment.",
      "How do you balance discovery and delivery?",
      "How have you handled a leadership transition or handoff?",
    ],
    starAnswers: [
      {
        competency: "Customer impact at scale",
        prompt: "Tell me about a time you measurably improved an experience for users.",
        situation:
          "At 18F I was Principal Content Strategist on eAPD, the CMS application replacing a 100+ page paper Medicaid funding submission whose quality depended entirely on the state author's experience and whose review cycle states described as a black box.",
        task:
          "Lead the content system that would let states produce approvable submissions consistently, working alongside another design lead during prototype and early build phases.",
        action:
          "Built error prevention into the architecture — turned regulation into plain-language instructional copy with an explicit content taxonomy; put routine copy in a YAML layer non-engineers could govern; used progressive disclosure with persistent navigation; paired non-blocking inline validation with autosave because research showed states author asynchronously, not in document order; auto-calculated all budget totals from raw inputs; auto-generated a structurally constrained executive summary.",
        result:
          "A representative APD shrank from 82 pages to 19 — 77% reduction in the document a reviewer has to process. Delaware and Idaho asked to use the product before general release. The 2023 OKRs were set as outcomes: 75% first-cycle approval, 30% review-time reduction, 50% second-submission rate as a retention proxy.",
        learnings:
          "The team identified but never instrumented its central trust question — whether state users would stop double-checking math against their own spreadsheets. Known leading indicator, not closed out. Next time I'd build that measurement in from the first usable build.",
      },
      {
        competency: "Designing for ambiguity and constraint",
        prompt: "Tell me about working in an ambiguous or constrained environment.",
        situation:
          "eAPD ran four years at 18F under federal clearance, FAR procurement constraints, and HIPAA-adjacent data sensitivity — with the additional ambiguity of serving two distinct user populations (state authors and federal reviewers) whose jobs-to-be-done were structurally different.",
        task:
          "Run continuous discovery and continuous delivery in parallel inside those constraints, with the product trio (PM, designer, engineer) embedded in research.",
        action:
          "Ran twenty-plus research rounds across four years on a four-to-six-week cadence. Two team-specific research questions ran across every study beyond standard usability — will this change help the state produce an approvable APD, and do states understand what CMS wants to make it approvable — so the research operationalized outcome, not feature validation. The trio observed live sessions and attended debriefs; findings reached the team before reports were written. Service design moved beyond the interface: an administrative-completeness check plus author attestation served as a workflow gate that shifted introductory review off the State Officer and into the system.",
        result:
          "Discovery cadence sustained over four years; product transitioned from 18F to a successor team in 2020 with the HCD culture intact — a proof point about durable practice, not just artifacts.",
        learnings:
          "Treating regulatory ambiguity as a design constraint to solve rather than a blocker to defer is what made it work. Research as the team's working rhythm — not a separate discipline — was the load-bearing decision.",
      },
      {
        competency: "Influence without authority",
        prompt: "Tell me about a time you drove a change without owning the decision.",
        situation:
          "As Principal Content Strategist on eAPD I led content strategy and research alongside another design lead, with no formal authority over engineering or product priorities.",
        task:
          "Push the team to treat content as interface architecture, not as copy added after design — and get specific architectural calls made that crossed engineer and PM territory.",
        action:
          "The biggest push was non-blocking validation: research showed states authored asynchronously, never in document order, so blocking per-field validation was the wrong mode. Engineering had defaulted toward blocking validation because it was easier; I built the research case around the actual user behavior we'd observed in twenty-plus rounds, surfaced it in joint working sessions with PM and engineering, and proposed the alternative — non-blocking inline validation paired with autosave, with the required-fields check firing at Export rather than per-field. The decision was made jointly in a working session, not by directive.",
        result:
          "Non-blocking validation went into the product and let states author the way they actually work, not the way the form would have forced them to. The same pattern shaped subsequent decisions about auto-calculation and the auto-generated executive summary.",
        learnings:
          "Working alongside another design lead taught me the difference between owning the call and shaping the conditions in which the right call gets made. Content design has more architectural leverage than the title suggests when the research is honest.",
      },
      {
        competency: "Leadership transition / operating model handoff",
        prompt: "Tell me about a leadership handoff or transition you navigated.",
        situation:
          "In 2020 18F transitioned eAPD to a successor team — Fearless, A1M Solutions, Health Management Associates, and Theta. The risk was losing the HCD culture and continuous-discovery cadence in the handoff, which is how government-software transitions usually go wrong.",
        task:
          "As Principal Content Strategist, contribute to the handoff so the practices survived the change of operating org — not just the artifacts.",
        action:
          "Treated the operating model as the deliverable, not just the documentation. The product trio embedding pattern, the four-to-six-week study cadence, the two team-specific research questions, the content-as-system taxonomy and YAML governance — all of it was named, documented, and demonstrated to the successor team during overlap.",
        result:
          "The HCD culture and continuous-discovery cadence carried through the handoff intact — a meaningful proof point about durable practice, not just artifacts. The product launched to all states for HITECH funding in 2021 and is being extended to the Medicaid Management Information System.",
        learnings:
          "What travels in a handoff is the operating model the team practices, not the documentation. If you can't show the next team how the work actually happens, the artifacts won't keep the practice alive.",
      },
      {
        competency: "Principal-level content design (content as interface architecture)",
        prompt: "Walk me through how you think about content design at the architectural level.",
        situation:
          "As Principal Content Strategist on eAPD I led the content-system layer for a federally-regulated submission product — content that had to encode regulatory requirements without being a wall of text and had to be governable by non-engineers across multiple product cycles.",
        task:
          "Design content as interface architecture, not as copy added to existing IA — including defining who could edit which content layer and why.",
        action:
          "Built a four-level content taxonomy (heading / short instruction / detail / help text) with explicit rules for what lived in each layer and which user context each addressed. Established a YAML content layer where routine copy could live and be governed by non-engineers, while structural content stayed in the rendering layer. Set voice, casing, acronym, and numeric-format conventions as system policy across the product. The content model drove decisions about progressive disclosure, help-drawer design, and validation behavior — content architecture made the IA work, not the other way around.",
        result:
          "Non-engineers could maintain and extend the content surface without code changes. The taxonomy survived the 18F → successor team handoff intact. Content as system became part of the operating model the successor team carried forward.",
        learnings:
          "At principal level, content design isn't writing — it's architecting the system the writing lives in and the governance that lets it evolve. The discipline gets flattened outside SF / SV; the move is naming the architectural work explicitly when the interview probes 'content design.'",
      },
      {
        competency: "Multi-sided service design",
        prompt: "Tell me about designing a service for multiple distinct user populations.",
        situation:
          "eAPD served two structurally distinct user populations: state authors who needed a fileable, distributable artifact they could circulate internally for input, and federal reviewers who needed a markup-able decision document.",
        task:
          "Design the service so both populations got what they needed from a single product surface, without compromising the experience of either or forcing one to accommodate the other.",
        action:
          "Modeled the full Request → Review and Decision → Response loop as a service, not just the interface screens. Designed for the seam between parties: the administrative-completeness check plus the author attestation served as a workflow gate that shifted introductory review left — off the State Officer and into the system. Each population got purpose-built affordances: state authors got progressive disclosure, autosave, non-blocking validation, executive-summary auto-generation; federal reviewers got the markup-able exported document. The two-sided modeling was made explicit in the service blueprint, including the data spine they shared and the workflows they didn't.",
        result:
          "Both populations served from one product. Delaware and Idaho asked for early access; reviewer cycle times targeted for 30% reduction in 2023 OKRs.",
        learnings:
          "Two-sided service design needs an explicit blueprint with the seam between parties named and designed. The temptation is to optimize the dominant audience and treat the other as a constraint; the discipline is treating both as primary and making the seam a designed object.",
      },
      {
        competency: "Service operating-model design (principal-level service architecture)",
        prompt: "Tell me about designing operating standards for a service, not just the service itself.",
        situation:
          "As Principal Content Strategist on eAPD I was part of the team designing the product, but in 2020 the work transitioned from 18F to a successor team. The risk was losing not the product but the operating model the product depended on.",
        task:
          "Contribute to making the operating model itself the deliverable — the practices, cadences, and roles that produced the product, not just the artifacts.",
        action:
          "Named and demonstrated the operating model explicitly: the four-to-six-week research cadence, the product-trio embedded observation pattern, the two team-specific research questions running across every study, the content-as-system taxonomy and YAML governance model, the way administrative-completeness gating shifted review off the State Officer. Each was documented as a working pattern with the why captured, not just the what. Worked with the successor team during overlap to demonstrate the practices in use.",
        result:
          "The HCD culture and continuous-discovery cadence carried through the handoff intact. The successor team launched the product to all states for HITECH funding in 2021. The product is being extended to the Medicaid Management Information System.",
        learnings:
          "Operating-model design is its own discipline at principal level — designing not just the service but the way the service gets produced and evolved. The thing that travels in a handoff is the operating model, not the documentation.",
      },
    ],
    notes:
      "Use this story when the room needs evidence of: continuous discovery / dual-track agile in practice; long-form / complex-workflow UX; content design as system, not just copy; two-sided service design; outcome-based OKRs; research inside institutional constraints. Numbers to land: 100+ pages → structured app; 82 → 19 pages (77% reduction); 4 years / ~20+ research rounds; 4–6 week study cadence; pre-launch demand from Delaware and Idaho; 2023 OKRs (75% first-cycle approval, 30% review-time reduction, 50% second-submission rate). Lead with the role — Principal Content Strategist at 18F, content as interface in a regulated context — and the operating-model claim (clean 18F → successor-team handoff in 2020 with HCD culture intact) is the leadership-narrative beat. Standard vocabulary throughout; the owner's framework stack is deliberately not surfaced here, per the owner's direction to keep this articulable in plain product / UX / agile language.",
    tags: ["18f", "govtech", "ux", "content_design", "agile", "owner_story"],
  },
  {
    title:
      "State Officer, M.D.: Running Cohort 2 of a CMS Train-the-Trainer Program for Federal Software Oversight",
    referenceSentence:
      "At 18F I taught the second cohort of State Officer, M.D. — the CMS doctrine pilot for shifting oversight of state Medicaid IT toward outcomes-oriented assessment, designed by Matt Jadud and Princess Ojiaku — running it as coached peer-delivery: I developed two Medicaid officers from cohort 1 into co-instructors who taught most of the sessions to nine new SOs, building the cascade mechanism through which the doctrine pilot continued without the original facilitators. The cohort ran May through end of June 2021, twice a week for an hour.",
    thirtySecondVersion:
      "At 18F I taught the second cohort of State Officer, M.D. — the CMS doctrine pilot for shifting CMS oversight of state Medicaid IT toward outcomes-oriented assessment, designed by Matt Jadud and Princess Ojiaku. I ran it as coached peer-delivery: I developed two Medicaid officers from cohort 1 into co-instructors who taught most of the sessions to nine new SOs while I coached them weekly, took the front of the room on selected segments, secured the guest speakers, and held the program's through-line. The cohort met twice a week for an hour, May through end of June 2021. I had just become 18F's Director and Head of Design when the cohort started — I'd been staffed onto the program as a Principal Manager and stepped into the new role in the weeks before kickoff. The proof point isn't that I taught it; it's that the cascade worked: the SOs who had just learned the material became, with weekly coaching, fluent enough to teach it to their peers — the mechanism through which the doctrine pilot continued without the original facilitators.",
    twoMinuteVersion:
      "State Officer, M.D. is a CMS-facing curriculum 18F built to train State Officers — the federal staff overseeing the Medicaid IT projects states run with federal funding — in how to evaluate project health on a continuous basis rather than only at major reporting points. Its central premise is unusually direct for a federal training: an SO who knows what questions to ask, and how to tell when the answer is true, is doing preventive medicine on taxpayer-funded software, not heart surgery on a project that's already failing. The curriculum is structured around the MES Health Rubric — four indicators (outcomes-orientation, state capacity, procurement flexibility, iterative development) by priority tier — taught breadth-first across five courses so learners hit a row of each indicator before going deeper.\n\nI led cohort 2 as Director and Head of Design at 18F. I'd been staffed onto the program as a Principal Manager and was promoted into the head-of-design role in the weeks before kickoff, so the program ran across the early weeks of that seat. Matt Jadud and Princess Ojiaku had designed and run cohort 1; I inherited the program for the next round. The model was coached peer-delivery: two cohort-1 graduates ran most of the sessions for nine new State Officers, with me meeting them weekly for trainer coaching, taking the front of the room directly on selected segments, securing the guest speakers, and holding the program's narrative through-line so it landed as one arc rather than ten lessons taught by trainers who had themselves been students a year earlier. The cohort ran May through end of June 2021, twice a week for an hour; nine learners through; two trainers developed in flight.\n\nThe leadership beats: curriculum stewardship of inherited authored material — getting fluent enough in someone else's opinionated curriculum to coach others through it; a peer-cascade train-the-trainer model where the learners-of-record one cycle become the teachers-of-record the next, with cohort 2 as the first time that cascade was run; producing the program rather than performing it — coaching, curation, and continuity instead of front-of-room delivery; and operating inside a tight federal-employee synchronous window where most of the learning had to happen between sessions, structured by the deliberately spare facilitation moves the curriculum had baked in.\n\nThis is the sibling case to eAPD: same CMS world, opposite seat. eAPD is the artifact a State Officer reviews; SOMD is the program teaching them how to review it well. Together they show range across the federally-funded delivery/oversight loop.",
    fiveMinuteVersion:
      "Background. State Officer, M.D. (SOMD) is a CMS-facing curriculum 18F built to train State Officers — the federal staff who oversee state Medicaid IT projects funded under 42 CFR 495 — in evaluating project health continuously rather than only at major reporting points. Matt Jadud and Princess Ojiaku designed and ran cohort 1. The program's stated goals are unusually direct for a federal training: assess project health, ask the right questions and tell when an answer is true (\"is a state or vendor bullshitting me\"), develop strategy and tactics for improving outcomes, and build the State Officer's confidence in their own oversight practice. The Health Rubric is the curriculum's spine — four primary indicators (outcomes-orientation, state capacity, procurement flexibility, iterative development) by priority tier — taught breadth-first across five courses so learners hit a row of each indicator before going deeper.\n\nThe cohort I led. I led cohort 2 as 18F's Director and Head of Design. I'd been staffed onto the program as a Principal Manager and was promoted into the head-of-design role in the weeks before kickoff, so the program ran across the early weeks of that seat. The cohort met May through end of June 2021. Nine State Officers in the cohort. Synchronous time was an hour twice a week; the asynchronous load was substantial by design — each lesson is built around solo reading and reflection, structured cohort discussion with timers baked into the lesson, and an action attached to the learning — what behavior, process, or question are you taking back to your practice.\n\nThe operating model: coached peer-delivery. The two trainers in cohort 2 were State Officers who had been students in cohort 1. They ran most of the sessions. I ran the program differently from facilitating it: weekly coaching with the two trainers — preparation, debrief, what to do differently next week; direct front-of-room on selected segments where I judged the material needed me to take the room or where I wanted to model a move the trainers would carry next time; guest speaker curation and the relationships, calendaring, and briefing that make guest segments land cleanly inside a cohort that meets twice a week; and the connective tissue work — narrative through-line, opening framing, closing reframing, the small moves between sessions that make a sequence of lessons feel like one program rather than a sampler.\n\nWhat this proves about how I work. Curriculum stewardship of inherited authored material. SOMD is dense and opinionated — it teaches \"bullshit detection\" as a learning objective, uses doctor metaphors with real teeth (preventive checkups versus heart surgery), inverts how roadmaps are presented (top-down for the reader, bottom-up for the maker), and offers confidence ladders (Reports → Videos → Controlled demos → User access) instead of binary scoring. Getting fluent enough to coach trainers to teach this in a two-month window is the stewardship beat.\n\nTrain-the-trainer at federal scale, peer-cascade specifically. The trainers were learners one cycle prior. That cascade is the program's scaling mechanism, and cohort 2 was the first time it was run. Two trainers developed in flight, ready to continue the program after my hand came off.\n\nProducing rather than performing. The leadership move was running the program through coaching, curation, and continuity rather than front-of-room delivery. Securing guests, gluing the arc together, taking the floor when the material called for it — but mostly making the peer model work. Doing this in the early weeks of stepping into Director and Head of Design at 18F is the load-bearing detail: this wasn't the day job, it was held alongside it during a role transition.\n\nFederal facilitation discipline. A two-month run with hour-long sessions twice a week, for mid-career federal employees with day jobs. Most of the learning had to happen between sessions. The curriculum's spare facilitation moves — timers, study-buddy pairings, \"work with what you got\" authenticity (don't go demand new materials from your state to fill a learning exercise), action attached to every lesson — were what made the model possible, and running them in real cohort conditions taught me which moves carry the weight.\n\nSibling to eAPD. Same CMS world, opposite seat. eAPD is the application that replaces the 100-page paper APD a State Officer reviews; SOMD is the program teaching the State Officer how to review it well. Together they cover the federally-funded delivery/oversight loop — building the artifact and training the oversight muscle that decides whether projects like it succeed.\n\nWhy this matters as a portfolio piece. SOMD is a citable case of running a coached peer-delivery train-the-trainer program inside federal constraints, on inherited authored material, with the program's cascade mechanism tested for the first time, held alongside a Director-level role transition. The competencies are portable anywhere the job is scaling a complex domain training through coached peer instructors rather than scaling the head trainer — which is the operating shape of most durable training programs.",
    frameworksExemplified: [
      "Train-the-Trainer (peer-cascade model)",
      "Cohort-Based Learning",
      "Action Learning (Revans)",
      "Andragogy (Knowles)",
      "Experiential Learning (Kolb)",
      "Reflective Practice",
      "MES Health Rubric",
      "18F Methods",
    ],
    thinkersInDialogue: [
      "Matt Jadud",
      "Princess Ojiaku",
      "Malcolm Knowles",
      "Reg Revans",
      "David Kolb",
      "Joel Spolsky",
    ],
    questionsItAnswers: [
      "Tell me about a training program you've run or led.",
      "Tell me about a time you scaled a program through other people rather than yourself.",
      "How do you train trainers?",
      "Tell me about inheriting work from a predecessor.",
      "How do you coach without taking over?",
      "Tell me about leading in a federal or otherwise regulated environment.",
      "How do you work with an opinionated curriculum that wasn't yours?",
      "Tell me about holding additional scope while stepping into a new leadership role.",
    ],
    starAnswers: [
      {
        competency: "Scaling through others",
        prompt: "Tell me about a time you scaled work through other people rather than yourself.",
        situation:
          "I taught the second cohort of State Officer, M.D. — the CMS doctrine pilot for shifting CMS oversight of state Medicaid IT toward outcomes-oriented assessment. Matt Jadud and Princess Ojiaku designed and ran cohort 1; I inherited it for the next round.",
        task:
          "Run cohort 2 in a way that built the cascade mechanism through which the doctrine pilot could continue without the original facilitators — not just teach nine more SOs myself.",
        action:
          "I developed two Medicaid officers from cohort 1 into co-instructors who taught most of the sessions to nine new SOs. I met with them weekly to coach — preparation, debrief, what to do differently next week — took the front of the room directly on selected segments where the material needed me to model a move the trainers would carry next time, secured the guest speakers, and held the program's narrative through-line so it landed as one arc rather than ten lessons taught by trainers who had been students a year earlier.",
        result:
          "Nine SOs through the cohort. Two trainers developed in flight, ready to continue the program. The cascade worked: the SOs who had just learned the material became, with weekly coaching, fluent enough to teach it to their peers — the mechanism through which the doctrine pilot continued without the original facilitators.",
        learnings:
          "Producing the program through coaching, curation, and continuity is different from performing it. The leverage was making the peer model work, not delivering the curriculum myself.",
      },
      {
        competency: "Stewarding inherited work",
        prompt: "Tell me about a time you took over work someone else had started.",
        situation:
          "State Officer, M.D. was a dense and opinionated CMS doctrine pilot Matt Jadud and Princess Ojiaku had designed and run as cohort 1. I inherited the program for cohort 2.",
        task:
          "Become fluent enough in someone else's authored curriculum — including its specific framing moves like the doctor metaphor, breadth-first priority-row bundling, and the confidence ladder (Reports → Videos → Controlled demos → User access) — to coach others through it inside a two-month window.",
        action:
          "Treated the curriculum as authored material whose author was not me, and was explicit about that with the trainers and learners. The substantive framing moves stayed Matt and Princess's; my role was running them in front of learners and helping the cohort-1 graduates teach them next. Held the program's through-line — opening framing, closing reframing, transitions between sessions — so the arc landed as one program rather than ten lessons.",
        result:
          "The doctrine pilot continued without the original facilitators. Two trainers developed in flight. Nine SOs through the program.",
        learnings:
          "Stewardship is a discipline distinct from authorship. Being honest about whose work you're carrying earns more credibility than rebranding it as yours.",
      },
      {
        competency: "Operating under tight time constraint",
        prompt: "Tell me about delivering under a tight time constraint.",
        situation:
          "Cohort 2 ran May through end of June 2021 — about two months. Synchronous time was an hour twice a week. Most of the actual learning had to happen between sessions.",
        task:
          "Make the model work for nine mid-career federal employees with day jobs — and for two trainers learning to teach the material in the same run.",
        action:
          "The curriculum was designed with deliberately spare facilitation moves baked in: timers per activity (5 / 20 / 20 / 10), study-buddy pairings, 'work with what you got' authenticity (no demanding new materials from the SO's state to fill a learning exercise), and an action attached to every lesson. I leaned on those moves rather than re-engineering them. Weekly trainer coaching kept the cohort-1 grads calibrated. Guest segments were scheduled tight enough to land cleanly inside the twice-a-week cohort rhythm.",
        result:
          "Nine SOs through the cohort. Two trainers developed. Doctrine pilot continued past the founders' cohort.",
        learnings:
          "Running an existing model's facilitation moves in real cohort conditions taught me which moves carry the weight — the timer-and-buddy structure was load-bearing in a way I wouldn't have predicted from reading the curriculum cold.",
      },
      {
        competency: "Holding multiple scopes across a role transition",
        prompt: "Tell me about holding additional scope while stepping into a new role.",
        situation:
          "I'd been staffed onto cohort 2 of State Officer, M.D. as a Principal Manager and was promoted into Director and Head of Design at 18F in the weeks before kickoff. The doctrine pilot ran across the early weeks of stepping into that seat.",
        task:
          "Run the program well and step into Head of Design without dropping either — the program wasn't the day job, it was held alongside it.",
        action:
          "Producing rather than performing made it possible. The cohort-1 trainers ran most of the sessions. My time on the program concentrated on weekly coaching with the trainers, taking the floor on selected segments, securing the guests, and the connective tissue between sessions. None of that required being the front-of-room teacher twice a week — which would have been incompatible with the new role. Holding both meant being deliberate about leverage, not throughput.",
        result:
          "Doctrine pilot ran successfully — nine SOs through, two trainers developed. Head of Design transition started cleanly enough that I could expand into the Head of Communications concurrent role and eventually into Acting Chief of Staff for TTS.",
        learnings:
          "Holding multiple scopes is a question of leverage architecture, not energy. Choosing where my time multiplies — coaching, curation, continuity — let me hold both without either suffering.",
      },
      {
        competency: "Service design at the program level (principal-level SD)",
        prompt: "Tell me about designing a service that isn't a digital product.",
        situation:
          "State Officer, M.D. as a doctrine pilot was a service before it was a curriculum — a training program designed to develop a federal capability, not just transfer knowledge. The cohort-1 → cohort-2 cascade was a service-design choice as much as a teaching choice.",
        task:
          "Run cohort 2 as a service with multiple actors (learners, peer trainers, guest speakers, host institution) and a defined operating model — not as a course I was delivering.",
        action:
          "The service blueprint had multiple front-stage and back-stage actors: nine learners as primary front-stage; two cohort-1 graduates as peer trainers (also front-stage to the learners but back-stage to me); guest speakers as occasional front-stage; me as orchestrator, back-stage to learners but front-stage to trainers. The weekly trainer-coaching session was a back-stage service touchpoint with its own design (preparation, debrief, what to do differently next week). The synchronous-time constraint — an hour twice a week over two months — was a designed limit; the asynchronous load was deliberately substantial because the learning had to live between sessions.",
        result:
          "Nine SOs through the cohort; two trainers developed in flight; doctrine pilot continued past the founders' cohort. The program ran as a service with each actor's role explicitly designed.",
        learnings:
          "At principal level, the distinction between 'running a program' and 'designing a program as service' is the architectural one — service-design instincts apply to capability building as much as to digital products.",
      },
    ],
    notes:
      "Use this story when the room needs evidence of: train-the-trainer and scaling-through-others; coaching versus performing; doctrine-pilot stewardship of inherited material; cohort-based facilitation inside tight time windows; federal-government training delivery; holding additional scope across a role transition. CV-precise framing: SOMD is the doctrine pilot for shifting CMS oversight of state Medicaid IT toward outcomes-oriented assessment; the cascade mechanism (cohort-1 grads → cohort-2 co-instructors) is how the doctrine continued without the original facilitators. Numbers to land: cohort 2 (the first run of the peer-cascade after the founders' cohort); 9 SOs in the cohort; 2 peer trainers (cohort-1 graduates); May through end of June 2021; 2×/week × 1hr sessions; the trainers ran most sessions, I coached weekly and taught select segments directly; ran this in the early weeks of stepping into Director and Head of Design at 18F (had been staffed onto the program as a Principal Manager and promoted just before kickoff). Pair with eAPD — same CMS / 18F world, opposite seat (oversight versus artifact). The leadership beat to land is 'producing rather than performing': coaching the trainers, securing the guests, holding the arc, taking the floor selectively — not delivering the curriculum myself. If the room asks about the curriculum's substance, the citable framing moves include the doctor metaphor (preventive checkups vs. heart surgery), the bullshit-detection learning objective, the breadth-first priority-row bundling, the confidence ladder (Reports → Videos → Controlled demos → User access), and the bottom-up story-map inversion — all Matt and Princess's design; my role was running them in front of learners, not authoring them.",
    tags: ["18f", "govtech", "training", "train_the_trainer", "facilitation", "owner_story"],
  },
  {
    title:
      "State Capacity AI: Building Measurement Infrastructure for AI in Public Institutions",
    referenceSentence:
      "In 2025 I founded State Capacity AI, an independent advisory practice on AI deployment in public institutions — governance frameworks for autonomous systems, decision-grade taxonomy, and procurement standards for sub-national governments adopting AI in service delivery — anchored in Occupant Indices, three original measurement instruments I built and maintain publicly ($CPI, $AIU, $LDI) that are used by procurement teams in public institutions because nobody else is measuring this.",
    thirtySecondVersion:
      "State Capacity AI is the independent practice I founded in 2025, after eight years at 18F including Head of Design and Acting Chief of Staff for GSA's Technology Transformation Services. The flagship work is Occupant Indices — three public measurement instruments for AI that didn't exist before I built them. $CPI is a Consumer Price Index for AI compute, volume-weighted across 2,000+ models. $AIU is a composite index of AI economic activity modeled on the IMF's Special Drawing Rights. $LDI is the only running measurement of how often AI is actually replacing federal workers when it becomes cheaper than them, combining BLS wage data with $CPI inference cost and federal procurement records. The instruments are free and public; procurement teams in public institutions use them because nobody else is measuring this. The practice sells commissioned analysis, strategic advisory, and capability building anchored in the methodology.",
    twoMinuteVersion:
      "State Capacity AI is the independent advisory practice I founded in 2025, focused on AI deployment in public institutions — governance frameworks for autonomous systems, decision-grade taxonomy, and procurement standards for sub-national governments adopting AI in service delivery contexts. The practice grew out of eight years at 18F at GSA's Technology Transformation Services, where I served as Principal Content Strategist, Product Design Manager, Head of Design (2021–2025, VP-level), concurrent Head of Communications (2023–2025), and Acting Chief of Staff for TTS (2024–2025, principal senior advisor to the Deputy Commissioner of TTS, with scope across 200 staff). Across that arc the recurring problem became clear: agencies were being asked to make AI procurement and deployment decisions without the measurement infrastructure to do it well, and the consulting market wasn't building that infrastructure either. The practice is the answer to that gap.\n\nThe flagship work is Occupant Indices — three original measurement instruments for the AI market that didn't exist before I built them, each with formal methodology and a specific question. $CPI is a Compute Price Index, volume-weighted across 2,000+ models and four workload tiers (commodity, frontier, reasoning, long-context), January 2025 baseline = 100; answers whether token-price decline is real or just frontier hype. $AIU is a composite of token throughput (60%), inferred spend (30%), and energy use (10%), modeled on the IMF's Special Drawing Rights; answers whether the AI economy is actually growing or just being talked up. $LDI combines BLS wage data with $CPI inference cost and federal procurement records to measure the substitution rate between human and AI cost across federal workloads; answers how long it actually takes to replace a person when AI is cheaper.\n\nA tool layer sits on top of the indices. The AI Services Price Reasonableness Worksheet is a fill-in procurement determination tool for federal AI buyers, built on the $CPI basket. An LLM Cost Calculator prices workloads against live $CPI rates. An LDI Workload Calculator computes human-vs-AI cost differentials for any workload. A SNAP Eligibility deep dive applies $LDI end-to-end to one federal workload as a worked example. These are instruments procurement officers actually use, not white papers.\n\nThe practice connects to my appointment at the University of Michigan, where I'm Assistant Professor of Practice in Taubman College's Urban Technology program and teach UT-360 Service Design and Urban Needs and UT-402 Public Mechanics — the doctrine of how state and city governments deploy technology and services. Public Mechanics is the academic frame; State Capacity AI is the operating practice; Occupant Indices is the measurement infrastructure both are built on. Nobody else is occupying this seat.",
    fiveMinuteVersion:
      "Background. State Capacity AI is the independent advisory practice I founded in 2025, focused on AI deployment in public institutions — governance frameworks for autonomous systems, decision-grade taxonomy, and procurement standards for sub-national governments adopting AI in service delivery. The practice grew out of eight years at 18F in the GSA Technology Transformation Services, including roles as Principal Content Strategist (eAPD, the GSA vendor experience modernization), Product Design Manager (federal portfolio across DOJ, VA, CMS, Food and Nutrition Service, Office of Refugee Resettlement, USAF, USMC, GSA 10x), Head of Design (2021–2025, VP-level, built the design management layer from three to nine managers running a discipline of forty-plus practitioners), concurrent Head of Communications (2023–2025), and Acting Chief of Staff for TTS (2024–2025, principal senior advisor to the Deputy Commissioner of TTS with scope across 200 staff working in digital service delivery, AI, customer experience, infrastructure, and contact-center engagements). Across that arc the recurring problem became clear: agencies were being asked to make AI procurement and deployment decisions without the measurement infrastructure to do it well, and the consulting market wasn't building that infrastructure either. The practice is the answer to that gap.\n\nOccupant Indices: the flagship work. Three original measurement instruments that didn't exist before I built them. Each is methodologically formal, baseline-anchored, and built to answer a specific question.\n\n$CPI — Compute Price Index — tracks the real cost of running AI tasks the way the Consumer Price Index tracks groceries. Volume-weighted across 2,000+ models and four workload tiers (commodity, frontier, reasoning, long-context). January 2025 = 100. Currently 62, meaning AI compute is about 38% cheaper than at the start of 2025, with sharp variation by workload. Methodology and tier definitions are public.\n\n$AIU — AI Economic Activity Index — is a composite of three signals modeled on the IMF's Special Drawing Rights: token throughput (60%), inferred spend (30%), and energy use (10%). One number read against a January 2025 baseline of 100 — currently 504, AI economic activity up about 5x in 16 months. The IMF SDR modeling is the deliberate methodological signal: single composite read against a baseline, weights tuned to the underlying activity drivers.\n\n$LDI — Labor Displacement Index — is a substitution-rate methodology combining BLS wage data for federal job categories with the AI cost from $CPI to identify where AI is already cheaper than a person, then using federal procurement records to see where substitution is actually happening. The gap between cost-rational substitution and actual substitution is the measurement. SNAP Eligibility has a worked end-to-end deep dive. $LDI is the most original of the three: $CPI applies a price-index pattern to a new commodity; $AIU adapts a composite-index pattern; $LDI is a substitution-rate methodology that doesn't exist elsewhere.\n\nThe tool layer. The AI Services Price Reasonableness Worksheet is a fill-in procurement determination tool for federal AI buyers, built on the $CPI basket — the working bridge between measurement and federal acquisition practice. The LLM Cost Calculator prices any workload against live $CPI rates. The LDI Workload Calculator computes human-vs-AI cost differentials and substitution rates. Market Intelligence publishes statistics that reprice market assumptions — quality-adjusted price, cognitive arbitrage, tier analysis across the model market. These are instruments procurement officers actually use, not white papers.\n\nHow the practice operates. Three service lines: commissioned analysis (specific questions about AI cost, substitution, or activity in a client's domain, answered using the instruments and methodology — foundations and policy programs commission this); strategic advisory retainer (peer-level advisory to a senior leader navigating AI in their institution — agency Chief of Staff, foundation program lead, university administrator, civic-tech ED); and capability building (cohort training plus embedded engagement for institutions developing in-house AI literacy and procurement competence, built on the State Officer M.D. doctrine-pilot pattern). Buyers are program officers, peer senior leaders, board chairs — not procurement-led CIO sales motion.\n\nConnection to Michigan and Public Mechanics. I'm Assistant Professor of Practice at the University of Michigan Taubman College of Architecture and Urban Planning in the Urban Technology program, teaching UT-360 Service Design and Urban Needs and UT-402 Public Mechanics — the latter developing the discipline of how state and city governments deploy technology and services. Public Mechanics is the academic frame; State Capacity AI is the operating practice; Occupant Indices is the measurement infrastructure both build on. The three together — discipline, practice, instruments — are the public-life-AI seat nobody else is currently occupying.",
    frameworksExemplified: [
      "$CPI — Compute Price Index",
      "$AIU — AI Economic Activity Index",
      "$LDI — Labor Displacement Index",
      "AI Services Price Reasonableness Worksheet",
      "Public Mechanics",
    ],
    thinkersInDialogue: [
      "International Monetary Fund (Special Drawing Rights methodology)",
      "Bureau of Labor Statistics (federal wage data)",
      "BloombergNEF (grid investment data)",
    ],
    questionsItAnswers: [
      "What are you working on now?",
      "Tell me about an independent practice you've built.",
      "How do you measure AI in the public sector?",
      "What's the gap your work fills?",
      "What's your current value proposition?",
      "Tell me about novel measurement or methodology work you've done.",
      "How do you bridge policy and deployment?",
      "Tell me about how 18F's mission carries forward in your current work.",
    ],
    starAnswers: [
      {
        competency: "0-to-1 / building original IP",
        prompt: "Tell me about building something from scratch that didn't exist before.",
        situation:
          "After eight years at 18F, I founded State Capacity AI in 2025 as an independent advisory practice on AI deployment in public institutions. The flagship is Occupant Indices — three original measurement instruments for the AI market that didn't exist before I built them.",
        task:
          "Build measurement infrastructure for federal AI procurement that nobody else was building, with formal methodology that could stand procurement-grade scrutiny.",
        action:
          "Built $CPI: Consumer Price Index for AI compute, volume-weighted across 2,000+ models and four workload tiers, January 2025 baseline. $AIU: composite index modeled on the IMF's Special Drawing Rights — token throughput (60%), inferred spend (30%), energy use (10%). $LDI, the most original of the three: substitution-rate methodology combining BLS wage data with $CPI inference cost and federal procurement records to measure where AI is already cheaper than a person and where substitution is actually happening. Built a tool layer on top — the AI Services Price Reasonableness Worksheet (federal procurement determination), an LLM Cost Calculator, an LDI Workload Calculator, a SNAP Eligibility worked example.",
        result:
          "The instruments are free and public. Procurement teams in public institutions use them because nobody else is measuring this.",
        learnings:
          "Originality alone doesn't drive adoption. What made the indices something procurement teams could use was pairing methodological rigor with operational tools — the worksheet specifically translated measurement into procurement practice.",
      },
      {
        competency: "Identifying and filling a market gap",
        prompt: "Tell me about a time you saw a problem nobody else was solving.",
        situation:
          "Across eight years at 18F — including Principal Content Strategist, Head of Design, Head of Communications, and Acting Chief of Staff for the Technology Transformation Services — the recurring problem became clear: agencies were being asked to make AI procurement and deployment decisions without the measurement infrastructure to do it well, and the consulting market wasn't building that infrastructure either.",
        task:
          "Decide whether to wait for someone else to do it or build it myself.",
        action:
          "Built Occupant Indices as a public good. $CPI, $AIU, $LDI — each addresses a specific question agencies were being asked but couldn't answer from existing sources. The AI Services Price Reasonableness Worksheet sits on top of $CPI as the procurement-grade application. The State Capacity AI practice provides the advisory wrapper for institutions that need help interpreting and applying the measurements. The indices are free and public so the field of view broadens beyond my client base.",
        result:
          "Procurement teams in public institutions use them. The work positions itself as infrastructure rather than as proprietary methodology.",
        learnings:
          "Filling an infrastructure gap is harder to monetize than filling a service gap, but it's better leverage. The indices being free and public is what makes the practice's advisory work credible — I'm not selling access to the methodology, I'm selling the experience of applying it.",
      },
      {
        competency: "Cross-sector translation",
        prompt: "Tell me about translating work across very different audiences.",
        situation:
          "State Capacity AI's work spans federal AI procurement (where the audience is contracting officers and program leadership), academic research (Michigan, where I teach Public Mechanics), foundation program officers, journalists writing about AI economics, and senior policy peers — each with very different vocabularies, threshold standards, and success measures.",
        task:
          "Build a body of work that is legible to each audience without diluting the methodology for any of them.",
        action:
          "The indices themselves stay technically rigorous — formal methodology, weighted composites, public source data, defined baselines. The tool layer (Price Reasonableness Worksheet, LLM Cost Calculator) translates the technical work into procurement-officer register. The Michigan course (UT-402 Public Mechanics) translates it into an academic discipline frame. The Substack and keynote work translates it into general policy register. Each audience gets a version that uses their vocabulary without losing the underlying claim.",
        result:
          "Procurement officers use the worksheet; the Michigan course teaches the discipline; the indices are referenced by the broader policy audience.",
        learnings:
          "Cross-sector translation works when the technical core is rigorous enough to survive the translation. If the underlying methodology weren't defensible, no amount of register-switching would make it land in policy without losing credibility in procurement.",
      },
      {
        competency: "Building an independent practice / founder beat",
        prompt: "Tell me about starting something independent.",
        situation:
          "I left 18F in 2025 — partly in the wake of broader institutional disruption at TTS — and after a brief stint as Director of Design Operations at Nava, founded State Capacity AI as my own practice.",
        task:
          "Build a practice with enough institutional credibility and operational substance to be credible without an employer's brand backing me — at a moment when the federal AI procurement work I'd been part of was structurally unstable.",
        action:
          "Anchored the practice in three things. First, the Occupant Indices as public infrastructure — instruments procurement officers could use, built and shipped before asking anyone to engage with the practice. Second, the Michigan academic appointment — Assistant Professor of Practice teaching UT-402 Public Mechanics — gave me an institutional address. Third, the AIGA Portland board presidency, the keynote circuit, and the Public Mechanics frame as a discipline I was actively developing rather than retroactively branding.",
        result:
          "The practice exists with a public methodology, an academic appointment, ongoing community leadership, and active advisory work — built in parallel rather than sequenced.",
        learnings:
          "An independent practice needs more than a service offering — it needs an institutional address (Michigan), public infrastructure (the indices), and a frame other people can recognize without me explaining it. Building those in parallel was harder than doing them one at a time, but the combination is what makes the practice legible.",
      },
      {
        competency: "Content design for technical infrastructure (principal-level CD)",
        prompt: "Tell me about content design for a technical product.",
        situation:
          "Occupant Indices is published as public-facing infrastructure with methodology documentation, working tools (the Price Reasonableness Worksheet, the LLM Cost Calculator, the LDI Workload Calculator), and a worked example (SNAP Eligibility deep dive applying $LDI end-to-end). The audience spans federal procurement officers, foundation program officers, academic researchers, journalists, and senior policy peers — radically different vocabularies and threshold standards.",
        task:
          "Design content for the indices and tools that would survive that audience range without diluting the methodology for any of them.",
        action:
          "Built a layered content approach. The indices pages stay technically rigorous — formal methodology, weighted composites, source data, defined baselines, audited data quality. The tools layer translates the technical work into operational practice (the Price Reasonableness Worksheet uses procurement-officer register; the calculators use plain-language inputs). Methodology pages link the two and explain the reasoning behind weighting choices and source selection. Worked examples (SNAP Eligibility) demonstrate the methodology in use rather than as abstract description.",
        result:
          "Procurement teams use the worksheet. Policy audiences cite the indices. The same content surface supports multiple register-switching audiences.",
        learnings:
          "Content design for public infrastructure is a translation problem at architectural level — the underlying claim has to be defensible at the technical core, and the translation has to be honest about which audience it's speaking to and what it's not promising them. Content design at principal level here is about the layered system, not the individual page.",
      },
    ],
    notes:
      "Lead with this story for any AI policy, federal AI, foundation, public-interest-tech, academic, or research-institution context. The Occupant Indices are the credential and the public face; the practice is the revenue mechanism; Public Mechanics at Michigan is the academic frame; 18F is the depth-of-experience that earns the practice authority — in that order. Integrated elevator pitch: 'I built three measurement instruments for AI that didn't exist. $CPI is a Consumer Price Index for AI compute. $AIU is a stock-market index for AI as an economic sector. $LDI is the only running measurement of how often AI is actually replacing federal workers when it gets cheaper than them. They're free, public, and used by procurement teams in public institutions because nobody else is measuring this. State Capacity AI is the practice; Occupant Indices is the instrument set.' Pair with $CPI, $AIU, $LDI, and AI Services Price Reasonableness Worksheet framework cards. Buyers are program officers, peer senior leaders, board chairs — not CIO procurement.",
    tags: ["state_capacity_ai", "ai_measurement", "public_interest", "owner_story", "founder", "current_practice"],
  },
];

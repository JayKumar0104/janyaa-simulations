# Janyaa Sim Lab — Master Pitch Planning & Study Document (v4)

**Purpose of this document:** everything needed to (a) study the pitch until you can deliver it without
notes, and (b) rebuild the slide deck yourself at equal or greater detail than the generated version.
Every slide spec below includes exact on-screen text, the design tokens, layout intent, source
attribution, and a near-verbatim speaker script.

---

## 0. What changed since the last plan — read this first

Three substantive changes, one of which invalidates content in the existing generated deck:

1. **The sim count went from 6 → 10 live, with 5 more spec'd.** The generated deck's Impact slide says
   *"Six sims live today"* and its breadth slide shows six cards. **Both are now wrong and must be
   updated.** This is the single most important correction in this document.
2. **A fourth track appeared: Electronics.** Four of the ten live sims are electronics (Cable Heat,
   Capacitor Discharge, Series vs. Parallel, USB Charging). The deck's framing of *"one method, three
   subjects"* is now undercounting — it should read **four tracks**.
3. **The site is moving to a light color scheme.** If the recolor lands before the pitch, any screenshots
   in the deck need retaking, and the deck's own palette (already light) will finally match the sims
   instead of contrasting with them. Minor, but check it before presenting.

**Net effect on the argument:** this is all upside. "Fifteen simulations across four subject tracks"
is a materially stronger breadth claim than "six across three," and it makes the Impact slide's
scalability point concrete rather than aspirational.

---

## 1. Current simulation inventory (15 total)

Keep this table for your own reference — it's the source of truth for the breadth slide and for
answering "what have you actually built?" in Q&A.

### Live now (10)

| # | Sim | Track(s) | The question it settles |
|---|-----|----------|------------------------|
| 1 | CPU vs. GPU | Computers | Why does AI training want a graphics card? |
| 2 | SSD vs. HDD | Computers | Why is an SSD tougher than a hard drive? |
| 3 | Memory Hierarchy | Computers | Why did more RAM make it feel faster? |
| 4 | PC Bottleneck | Computers | Which part should I actually upgrade? |
| 5 | Metal vs. Wood | Physics | Why does metal feel colder to the touch? |
| 6 | Square-Cube Law | Math + Physics | Why can't you just scale something up? |
| 7 | Cable Heat | Electronics + Physics | Why does a cheap charging cable get warm? |
| 8 | Capacitor Discharge | Electronics + Computers | Why never open a power supply, even unplugged? |
| 9 | Series vs. Parallel | Electronics + Physics | Why don't Christmas lights all die at once? |
| 10 | USB Charging | Electronics + Computers | Why does my phone charge slower on a laptop? |

### Spec'd, in progress (5)

| # | Sim | Track(s) | The question it settles |
|---|-----|----------|------------------------|
| 11 | Two's Complement | Computers | How can the same bits mean two different numbers? |
| 12 | Variable Swap | Computers | Why doesn't the obvious way to swap two variables work? |
| 13 | Binary vs. Linear Search | Math + Computers | Why is halving so much faster than checking one at a time? |
| 14 | Password Crack Time | Math + Computers | Why does one more character matter so much? |
| 15 | Resonance | Physics | Why does rhythm beat force on a swing? |

**Track totals (live + spec'd):** Computers 7 · Electronics 4 · Physics 4 · Math 3
*(some sims count in two tracks)*

**How to describe the inventory out loud, depending on what's actually done by pitch day:**
- If all 15 are live: *"Fifteen simulations across four subject tracks."*
- If only the 10 are live: *"Ten simulations live across four tracks, five more already built and
  landing shortly."* — do not claim 15 live if 5 aren't. Verify before you speak.

---

## 2. Design system — for rebuilding slides yourself

### Palette (exact hex)
```
Deep green (dark backgrounds)   #163620
Green (primary accent)          #1F4A2E
Orange (secondary accent)       #D97706
Cream (card fills)              #F4F1E8
White (light backgrounds)       #FFFFFF
Ink (primary text)              #1A1A1A
Gray (secondary text)           #6B6B63
Light gray (inactive/borders)   #E4E1D6
```
This matches the event poster's own green/orange identity — deliberate, so the deck reads as belonging
to this competition rather than being a generic template.

### Typography
- **Headlines:** a serif (Cambria or similar), bold, tight letter-spacing (roughly −0.035em), line
  height ~1.0. Sizes scale 30–60pt depending on slide.
- **Body/labels:** a clean sans (Calibri or similar), 12–19pt.
- **Kickers/captions:** same sans, 9–13pt, ALL CAPS, wide letter-spacing (~2pt), gray or accent color.
- **Big stat numbers:** the serif, bold, 24–58pt — these are the visual anchors of the research slides.

### Recurring components
- **Phase tracker (top right of every content slide):** four small rounded chips reading IDENTIFY /
  RESEARCH / INNOVATE / IMPACT. The active one is filled (green or orange, alternating) with white
  bold text; the inactive three are light gray with gray text. This is a scoring aid — judges working
  from the poster's rubric can see which phase you're in at a glance.
- **Kicker line (top left):** `PHASE — descriptor`, in the accent color.
- **Cards:** cream fill, rounded corners (~0.1"), no border, generous internal padding. Never use a
  single-side accent bar — it reads as a rendering artifact.
- **Stat card pattern:** big serif number → sans caption → small italic gray source line.
- **Slide numbers:** bottom right, small gray.
- **Appendix marker:** appendix slides replace the phase tracker with a single dark chip reading
  APPENDIX, so it's instantly obvious they're not part of the scripted run.

### Layout discipline
- Roughly 0.6" margins all around.
- Widescreen 13.33" × 7.5".
- Max 3 cards per row; 2 rows max. Four items → 2×2 grid, six → 3×2.
- Leave the bottom ~1" mostly clear except for footnotes and slide numbers.

---

## 3. Slide-by-slide build spec

**11 live slides + 3 appendix slides.** Target run time 8:00 with a marked optional +0:40.

### Timing budget

| # | Slide | Phase | Time | Cumulative |
|---|-------|-------|------|------------|
| 1 | Title | — | 0:20 | 0:20 |
| 2 | Identify | Identify | 0:40 | 1:00 |
| 3 | Research A — Root cause | Research | 0:45 | 1:45 |
| 4 | Research B — Relevance beyond us | Research | 0:55 | 2:40 |
| 5 | Research C — Evidence for the fix | Research | 0:45 | 3:25 |
| 6 | Innovate — the method | Innovate | 0:35 | 4:00 |
| 7 | Demo cue | Innovate | 0:15 | 4:15 |
| — | **Live demo — CPU vs. GPU** | Innovate | 1:40 | 5:55 |
| 8 | Breadth — the library | Innovate | 0:30 | 6:25 |
| 9 | Impact | Impact | 0:45 | 7:10 |
| 10 | What we're honest about | Impact | 0:35 | 7:45 |
| 11 | Closing | — | 0:15 | 8:00 |

**Optional stretch (+0:40):** a second short live demo — SSD vs. HDD — immediately after CPU/GPU.
Decide before you go up, not mid-pitch.

---

### SLIDE 1 — Title (0:20)

**Background:** deep green. **Layout:** orange pill badge top-left, huge serif title mid-slide,
subtitle beneath, phase tagline lower, name/chapter at the bottom behind a short divider rule.

**On-screen text:**
- Badge: `EDUCATION CATEGORY`
- Title (60pt serif, white): **Janyaa Sim Lab**
- Subtitle (19pt, pale green): *Open-source simulations that show hands-on workshops the mechanism they
  can't hand you.*
- Tagline (13pt bold orange, wide tracking): `IDENTIFY · RESEARCH · INNOVATE · IMPACT`
- Footer (13pt, muted green): *Jay Kumar · Janyaa STEM Outreach Chapter*

**Speaker script:** Name, chapter, and one framing sentence — that this is a working proof of concept
already running in your workshops, not a proposal. Don't preview content; the hook is Slide 2.

---

### SLIDE 2 — Identify (0:40)

**Background:** white. **Layout:** kicker, two-line serif headline, body paragraph left (~7" wide),
highlighted cream callout box beneath it, and on the right two large circular icon badges (green HDD,
orange microchip) with a dashed arrow and a question mark between them.

**On-screen text:**
- Kicker: `IDENTIFY — FIND A REAL PROBLEM IN YOUR CITY`
- Headline: **"Why does this survive a drop and this doesn't?"**
- Body: *That question came up in one of our own computer-building workshops. Kids were handling a real
  hard drive and a real SSD — but nothing about holding them shows why one is far more rugged than the
  other. The mechanism is invisible.*
- Callout: **This isn't a one-off.** *Our physics and math workshops hit the same wall: friction,
  exponential growth, why a chip runs hot — all invisible without equipment we don't have budget for.*
- Icon labels: `HDD` / `SSD`, with `?` between them.

**Speaker script:**
> "Here's a question a kid asked in one of our computer-building workshops. We had a real hard drive and
> a real SSD on the table — they could hold both. And there is no way, just from holding them, to see
> why one of these survives a drop and the other doesn't. The mechanism is invisible. And it's not a
> one-off — our physics and math workshops hit the same wall constantly. Friction, exponential growth,
> why a chip runs hot. All invisible without lab equipment we don't have the budget for."

**Delivery note:** pause after the headline question before explaining it. Let it sit for a beat.

---

### SLIDE 3 — Research A: Root cause (0:45)

**Background:** white. **Layout:** two panels. Left (~4.6" wide) is a deep-green card holding the hero
stat. Right (~6" wide) is a cream card holding the honesty fold-in.

**On-screen text:**
- Kicker: `RESEARCH — ROOT CAUSE`
- Headline: **Misconceptions survive even college.**
- Left card, giant number (58pt serif, white): **40–50%+**
  - Caption: *of students still misunderstand core hardware concepts — after passing a full college
    course on it.*
  - Source line: *Herman, Zilles & Loui — University of Illinois, 2011*
- Right card header (orange caps): `WHY A COLLEGE STUDY STILL MAKES OUR CASE`
  - Body: *That study is college students, not ten-year-olds — which makes our case stronger, not
    weaker. If a full college course doesn't fix this, a one-hour workshop for a much younger student
    has even less chance without something that makes the mechanism visible.*

**Why this stat and not a general one:** it's computing-specific, so it maps directly onto your SSD/HDD
and CPU/GPU examples rather than being generic education research. Specifically, the study found over
40% of students couldn't reliably determine whether an addition overflowed, and over 50% couldn't
reliably interpret two's-complement numbers — after passing a computer-organization course.

**Backup fact for Q&A:** the NRC's *Science Teaching Reconsidered* (1997) makes the same
procedural-vs-conceptual point in general STEM terms. Have it ready; don't spend screen time on it.

**Speaker script:**
> "This isn't just something we noticed. Researchers at the University of Illinois tested college
> students who had *already passed* a full course on computer hardware — and found 40 to over 50 percent
> still couldn't reliably tell whether a calculation had overflowed, or correctly read how a computer
> stores a negative number. Now — that study is college students, not ten-year-olds. And that actually
> makes our case stronger, not weaker: if a full college course doesn't fix this, a one-hour workshop
> for a much younger student has even less chance, unless we give them something that makes the
> mechanism visible."

**Delivery note:** say the honesty line yourself. Do not wait for a judge to raise the age mismatch —
volunteering it reads as command of your own evidence; being caught on it reads as overselling.

---

### SLIDE 4 — Research B: Relevance beyond us (0:55)

**This is the load-bearing slide for "is this bigger than your club?"** Do not let it get rushed.

**Background:** white. **Layout:** three equal cream stat cards across (~3.7" each), then one full-width
deep-green banner beneath them.

**On-screen text:**
- Kicker: `RESEARCH — RELEVANCE BEYOND JANYAA`
- Headline: **This isn't one club's problem.**
- Card 1: **10M+** — *youth in afterschool programs, nationally* — *50 State Afterschool Network*
- Card 2: **73%** — *of afterschool programs offer STEM — but 3 in 4 of ~30M underserved kids still
  don't have one* — *Afterschool Alliance, 2021/2025*
- Card 3: **"Top challenge"** — *principals nationwide name finding STEM providers and funding as a top
  afterschool barrier* — *RAND Corporation, 2023*
- Banner: *These programs are proven to build interest and confidence.* **Conceptual understanding was
  never what they were designed to measure.**
- Footnote: *Source: PEAR Institute / National Research Council, Learning Science in Informal
  Environments (2009)*

**The logic of this slide — understand it, don't just memorize it.** No single source proves the point.
Three triangulate it: (1) **scale** — this serves millions, so it's not niche; (2) **constraint** — the
resource problem is documented field-wide, not just at your chapter; (3) **the specific gap** — informal
programs are measured on and celebrated for engagement and identity, not conceptual mastery. The
banner is the conclusion the three cards support.

**Supporting detail for Q&A:** the PEAR study surveyed 1,599 youths across 158 STEM-focused afterschool
programs in 11 state networks; 65–85% reported gains in engagement, identity, and career interest —
all attitude measures, not conceptual ones.

**Speaker script:**
> "And this isn't just Janyaa. Afterschool STEM already reaches over ten million kids nationally.
> Nearly thirty million more families want a program for their kid and can't get one. RAND surveyed
> school principals across the country and found that finding STEM providers, and finding STEM funding,
> are both named as top afterschool challenges — so the resourcing problem is field-wide, not ours
> alone. And the research on programs like ours is consistent: we're genuinely good at building interest
> and confidence. That part is proven. But conceptual understanding was never really what these programs
> were built to measure. That's the exact gap we're filling — and it's the field's gap, not just ours."

---

### SLIDE 5 — Research C: Evidence for the fix (0:45)

**Background:** white. **Layout:** 2×2 grid of cream cards (~5.6" × 1.85" each). Each card: circular
icon badge left (alternating green/orange), then big serif number, caption, small italic source.

**On-screen text:**
- Kicker: `RESEARCH — EVIDENCE FOR THE FIX`
- Headline: **Not a guess. A documented model.**
- Card 1 — **0.66** — *effect size: combining hands-on + simulation beats either alone — biggest for the
  most abstract concepts* — *Educational Research Review, 2024*
- Card 2 — **d = 0.83** — *large effect on conceptual understanding from PhET simulations specifically* —
  *iJOE meta-analysis, 2024*
- Card 3 — **20+ yrs** — *PhET (UC Boulder) and Concord Consortium have run open-source, browser-based
  sims at this exact scale* — *phet.colorado.edu · concord.org*
- Card 4 — **121,168** — *students studied: open resources match or beat closed ones, while saving real
  money* — *Hilton, 2019 (OER synthesis)*

**The keystone is card 1 — know why.** That meta-analysis screened 4,523 papers and analyzed 27
experimental studies of combining real and virtual experiments. It matters because it's not "simulations
are good," it's "simulations *plus* hands-on beats either alone, and the advantage is largest exactly
where the concept is most abstract." That is a description of your design, not just a favorable
statistic.

**Speaker script:**
> "And this isn't a guess. A 2024 meta-analysis found that combining hands-on activities with simulation
> beats either one alone — and the benefit is *biggest* for the most abstract concepts, which is exactly
> our situation. Simulations on their own show large effects too. And we're not the first to do the
> open-source version of this — PhET at Colorado Boulder and Concord Consortium have been running
> exactly this model, free and open, for two decades. It's also proven to be an equity move, not just a
> cheap one: a synthesis of over a hundred thousand students found open resources do as well or better,
> while saving real money — for programs exactly like ours."

---

### SLIDE 6 — Innovate: the method (0:35)

**Background:** white. **Layout:** three cream cards across (~3.75" each), each with a numbered circle
badge, bold heading, and gray body. One full-width line beneath.

**On-screen text:**
- Kicker: `INNOVATE — PROPOSE A SOLUTION`
- Headline: **One hidden variable. One slider. Under 30 seconds.**
- Card 1 — **Find the invisible variable** — *The one thing the hands-on activity can't isolate — a gap
  too small, a process too fast, a scale too abstract.*
- Card 2 — **Put it on a single slider** — *One control, directly tied to the real mechanism underneath —
  not a canned animation.*
- Card 3 — **Design for a fast "aha"** — *No login, no extra math, no manual. If it doesn't land in 30
  seconds, it's not done yet.*
- Bottom line: *And it's* **open source** *— free for every future workshop, and every other Janyaa
  chapter, forever.*

**Speaker script:**
> "So here's the design rule behind every one of these. First, find the one variable the hands-on
> activity can't show — the gap that's too small, the process that's too fast, the scale that's too
> abstract. Second, put exactly that variable on a single slider, wired to the real mechanism — not a
> canned animation that just looks right. Third, it has to land in under thirty seconds. No login, no
> extra math, no manual. If it needs explaining, it isn't done."

---

### SLIDE 7 — Demo cue (0:15) → LIVE DEMO (1:40)

**Background:** deep green. **Layout:** orange icon badge top-left with `LIVE DEMO` beside it, large
two-line serif headline, supporting line beneath.

**On-screen text:**
- Badge label: `LIVE DEMO`
- Headline: **Why does AI training need a graphics card?**
- Body: *Same-size chip. One spends its space on control logic, one spends it on math units. Watch what
  happens when the workload changes from "all identical" to "all different."*

**Demo run order (rehearse this as its own unit):**
1. Alt-tab to the CPU vs. GPU sim.
2. Point at the two chip floorplans — same size, but one spends its space on control logic and cache,
   the other on math units. Note the area split (roughly 15% math vs. 80% math).
3. Click **"same instruction."** All 128 GPU lanes light at once; the CPU manages 4. Narrate: *this is
   what training a model actually is — the same tiny formula, millions of times, on different numbers.*
4. Click **"different instruction."** 127 lanes go dark. Narrate: *one control unit can't issue sixteen
   different instructions, so the lanes queue up. This is why you don't reach for a GPU for everything —
   the CPU stays at 4 out of 4 because it paid for a control unit per math unit.*
5. Land the line, alt-tab back.

**Optional stretch demo (+0:40):** SSD vs. HDD — one bump strong enough to crash the drive head,
contrasted with the SSD shrugging it off. Fast and punchy; it's a bonus beat, not a second full demo.

**Cutoff rule:** if you're 1:10 into the demo and haven't made the second click, skip it and go straight
to the landing line.

---

### SLIDE 8 — Breadth: the library (0:30) — **UPDATED, this is the slide that changed most**

**Background:** white. **Layout:** four track columns or a 5×3 grid — see options below.

**On-screen text:**
- Kicker: `INNOVATE — ONE METHOD, FOUR TRACKS`
- Headline: **Not one lucky example.**

**Two layout options — pick one:**

**Option A (recommended — track columns).** Four columns headed COMPUTERS / ELECTRONICS / PHYSICS /
MATH, each listing its sims as short lines. Reads as a coherent library rather than a wall of cards,
and makes the four-track claim visually obvious at a glance. Include a count badge — *15 simulations* —
somewhere prominent.

**Option B (grid).** A 5×3 grid of small cards, each with track label and sim name only (no question
line — there isn't room for 15). Denser and more impressive as sheer volume, but harder to read from
the back of a room.

**Content for either layout:** the 15 sims from Section 1, grouped by track. If only 10 are live at
pitch time, show the 10 and add a small line: *five more built and landing shortly.*

**Speaker script:**
> "And this isn't one lucky example. Fifteen simulations now, across four tracks — computers,
> electronics, physics, and math. Same design rule every time: find the invisible variable, put it on a
> slider, make it land fast. The method generalizes — that's the actual product here, not any single
> simulation."

**Delivery note:** move fast. This slide proves range; it doesn't need selling. If you did the SSD/HDD
stretch demo, just gesture at it rather than re-explaining.

---

### SLIDE 9 — Impact (0:45) — **UPDATED: sim count corrected**

**Background:** white. **Layout:** wide orange card left (~7.3"), narrower green card right (~3.35"),
two lines of text beneath.

**On-screen text:**
- Kicker: `IMPACT — PRESENT AND INSPIRE CHANGE`
- Headline: **This isn't a roadmap. It's running in the next room.**
- Orange card (with circular sync icon): *The exact sim you just watched is what runs in our computer
  workshop right after this pitch — same file, no separate build.*
- Green card: **121,168** — *students studied — open resources match or beat closed ones, while saving
  real money.*
- Line 1 (italic ink): *Same gap, same fix, at whatever scale a chapter needs — this is built to outgrow
  us.*
- Line 2 (small italic gray): **UPDATED TEXT →** *Fifteen sims across computers, electronics, physics,
  and math — all open source, all free for any chapter to use or extend.*
  - *(The old version read "Six sims live today… four more in progress." Replace it.)*

**Speaker script:**
> "The sim you just watched isn't a prototype for later — it's the same file that runs in our computer
> workshop right after this pitch. Same build, no separate version. And open source isn't just cheaper
> here, it's proven equitable: a synthesis of over a hundred thousand students found open resources do as
> well or better while saving real money, specifically for under-resourced programs. Fifteen sims now,
> four tracks, free for any chapter to use or extend. Same gap, same fix, at whatever scale someone
> needs — this is built to outgrow us."

---

### SLIDE 10 — What we're honest about (0:35)

**Background:** white. **Layout:** two cream cards side by side (~5.55" each).

**On-screen text:**
- Kicker: `IMPACT — OWNING OUR OWN LIMITS`
- Headline: **What we're honest about.**
- Card 1 header (orange caps): `"INFORMAL PROGRAMS DON'T BUILD CONCEPTUAL UNDERSTANDING"`
  - Body: *That finding is about what these programs are documented to emphasize — not proof they can't
    do more. We're closing a documented gap, not fixing a proven failure.*
- Card 2 header (green caps): `OUR LOCAL (BAY AREA) NUMBERS`
  - Body: *Organizational, not peer-reviewed. We lean on the peer-reviewed research for the actual causal
    claims, and use local numbers for context, not proof.*

**Why this slide exists:** in a research-scored category, naming your own limitations unprompted is the
strongest credibility move available. It signals you understand your evidence rather than reciting it.

**Delivery note:** one breath per card, then move straight to closing. Dwelling undercuts the confidence
the honesty was meant to build.

---

### SLIDE 11 — Closing (0:15)

**Background:** deep green. **Layout:** orange trophy icon badge, large serif thank-you, credit line,
phase tagline.

**On-screen text:**
- **Thank you.**
- *Janyaa Sim Lab · Education Category · Jay Kumar*
- `IDENTIFY · RESEARCH · INNOVATE · IMPACT`

**Delivery note:** name the category and the four phases explicitly. Then stop talking. Don't fill the
buffer with a question.

---

### APPENDIX SLIDES (not part of the scripted run)

Mark all three with a dark `APPENDIX` chip instead of the phase tracker.

**Appendix 1 — "The research, in full."** Two columns, five grouped headings, one line per source:
- *Root cause:* Herman, Zilles & Loui (2011) — hardware misconceptions post-course · National Research
  Council, *Science Teaching Reconsidered* (1997)
- *Relevance beyond us:* Afterschool Alliance, *America After 3PM* (2021/2025) · RAND Corp., *Expanding
  Afterschool Opportunities* (2023) · PEAR Institute / NRC, *Learning Science in Informal Environments*
  (2009)
- *Evidence for the fix:* Educational Research Review meta-analysis, combined real+virtual (2024) · iJOE
  PhET meta-analysis (2024) · PhET (UC Boulder) · Concord Consortium — open-source precedent
- *Open-source equity:* Hilton, OER synthesis, 121,168 students (2019) · SRI / Achieving the Dream
  OER-degree study
- *Age-appropriateness:* Fyfe, McNeil, Son & Goldstone — concreteness fading (2014) · Piagetian
  concrete-to-formal-operational transition, ages 11–14

**Appendix 2 — "The numbers, together."** Two large stat cards for the figures that never made a live
slide:
- **1,599 / 158** — *students / afterschool STEM programs studied — 65–85% reported engagement gains* —
  *Allen et al., 2019*
- **g = 0.587** — *medium effect size for virtual labs on student achievement, broader than PhET alone* —
  *IJIET meta-analysis, 2022*
- Footnote: *Every other live number already appeared on Slides 3, 4, 5, or 9.*

**Appendix 3 — "What's next." — YOU STILL NEED TO WRITE THIS ONE.** See Section 7.

---

## 4. Research evidence base — study section

Organized by pillar. Know the number, the source, and *why it matters* — judges follow up on the "why."

### Pillar 1 — Root cause (procedural ≠ conceptual)
- **Herman, Zilles & Loui (2011),** *Computer Science Education* — students who had passed a
  computer-organization course: >40% still exhibited misconceptions about positional notation, >50%
  couldn't reliably determine overflow, >50% couldn't reliably interpret two's-complement numbers.
  Notably, instructors had rated this topic as the *easiest*.
  **Why it matters:** computing-specific, quantitative, and directly parallel to your hardware examples.
- **NRC, *Science Teaching Reconsidered* (1997), Ch. 4** — students can execute correct procedures
  without conceptual grasp; hands-on activity alone doesn't reliably fix it.
- **NRC, *Adding It Up* (2001)** — the canonical definitions of conceptual understanding vs. procedural
  fluency, and the warning against treating them as competing rather than interwoven.
- **Sorva (2013),** *ACM TOCE* — the "notional machine": beginners' inaccurate mental models of what a
  computer is actually doing. **Why it matters:** this is the research basis for the Variable Swap sim.

### Pillar 2 — Relevance beyond one club
- **50 State Afterschool Network** — 10M+ youth, ~100,000 afterschool programs nationally.
- **Afterschool Alliance, *America After 3PM* (2021)** — 73% of parents report their child's afterschool
  program offers STEM, up 4 points from 2014 (~5.74M children). Cost and access are the top barriers;
  low-income, rural, and girl participants are most likely to miss out.
- **Afterschool Alliance (2025, 5th ed.)** — parents of ~30M children want afterschool programs; 77% of
  those children are unserved.
- **RAND (2023),** nationally representative survey of K–8 principals — the #1 thing principals would
  change is *more* STEM programming; finding providers and finding funding are both named challenges,
  worsening as federal COVID relief wound down.
- **Allen et al. (2019),** *International Journal of STEM Education* (PEAR Institute) — 1,599 youths,
  158 programs, 11 state networks; 65–85% reported gains in engagement, identity, career interest,
  critical thinking, perseverance. **Why it matters:** every outcome measured is an attitude, not a
  concept. That's the gap, in the field's own evaluation data.
- **NRC, *Learning Science in Informal Environments* (2009)** — synthesis of ~2,000 studies of
  out-of-school learning.
- **Local color (organizational, not peer-reviewed):** Bay Area STEM Ecosystem (Children Now); Kapor
  Center's Rising STEM Scholars Initiative, a $10M Google.org-funded effort targeting 3,000 low-income
  students and students of color in Bay Area AP STEM/CS courses.

### Pillar 3 — Evidence the fix works
- **Combined real + virtual meta-analysis (2024),** *Educational Research Review* — screened 4,523
  papers, analyzed 27 experimental studies; effect size **0.66** favoring combined over real-only, and
  **larger for more abstract concepts.** ← keystone.
- **PhET meta-analysis (2024),** *iJOE* — 47 effect sizes from 20 studies, 4,563 students; overall
  **d = 0.83.**
- **Virtual labs meta-analysis (2022),** *IJIET* — **g = 0.587** overall; larger for secondary students
  (g = 0.689) than undergraduates.
- **Physical vs. virtual investigation meta-analysis (2023),** *Frontiers in Education* — 35 studies,
  2000–2021, conceptual knowledge acquisition.
- **Electric-circuits study** — combined simulation + lab reduced misconceptions more than lab alone, in
  students aged 12–14. **Why it matters:** that's your exact age band.
- **Open-source precedent:** PhET (UC Boulder) and Concord Consortium — hundreds of free browser-based
  sims, permissively licensed, grades 6–16.

### Pillar 4 — Open-source equity
- **Hilton (2019),** *ETR&D* — synthesis of 16 efficacy + 20 perception studies, **121,168 students**;
  achievement the same or better with OER, while saving significant money.
- **SRI / Achieving the Dream OER-degree study** — ~160,000 students; participating schools' students
  paid at least $65 less per course on average, with stronger responses among Pell recipients and
  underrepresented-minority students.

### Pillar 5 — Age-appropriateness (ages 9–14)
- **Piagetian transition** — ages ~11–14 span concrete-operational to formal-operational reasoning;
  concrete reasoners struggle with abstract and hypothetical tasks. **Why it matters:** this is *why*
  invisible mechanisms are hard at this age, not just *that* they are.
- **Concreteness fading** (Fyfe, McNeil, Son & Goldstone, 2014; Fyfe, McNeil & Borjas, 2015) — starting
  concrete and fading toward abstract beats concrete-only or abstract-only for understanding and
  transfer. **Why it matters:** this is the theoretical justification for your simplified-default-view +
  "for the curious" advanced section structure. If a judge asks why you layered the sims that way,
  this is the answer.

---

## 5. Flex plan — if the slot is shorter or longer

**If tighter (5–6 min), cut in this order:**
1. Drop the optional SSD/HDD stretch demo (zero impact elsewhere).
2. Fold Research C into one sentence on the Innovate slide.
3. Cut Slide 10 (What we're honest about) — move it to appendix, use only if asked.
4. Trim Research B to two stat cards (keep scale + RAND; fold the PEAR conclusion into your transition).

**If longer (10+ min):**
1. Add the SSD/HDD stretch demo back.
2. Let Research B's three stats each get their own beat.
3. Narrate two or three individual sims on the breadth slide instead of gesturing at all fifteen.
4. Consider promoting Appendix 1 into a brief on-screen moment if the judges are visibly research-focused.

---

## 6. Q&A preparation

| Likely question | Where the answer lives |
|---|---|
| How do you know this is bigger than your own workshops? | Slide 4 — scale, RAND constraint, PEAR gap |
| Is this peer-reviewed or just org reports? | Be specific: the misconception studies and the meta-analyses are peer-reviewed; Afterschool Alliance, RAND, and Bay Area sources are credible but not peer-reviewed, and you use them for scale/context, not causal claims |
| Your key stat is college students — why does it apply here? | Already said live on Slide 3 |
| Why open source when anyone can copy it? | Slide 5 card 4 + 20 years of PhET/Concord precedent; the goal is reach, not moat |
| How many have you actually built? | Section 1 of this doc — verify live vs. spec'd before answering |
| Which sim are you proudest of / which works best? | Have a real answer ready — CPU/GPU is the best demo; pick honestly |
| Why did you layer simple + advanced views? | Concreteness fading (Pillar 5) |
| **Have you tested this with real students? Results?** | **Your own honest answer — see Section 7** |
| **How will you measure whether it works?** | **Your own plan — see Section 7** |
| **What did this cost in time/hours?** | **Your own number — see Section 7** |
| **What happens after this competition?** | **Your own answer — see Section 7** |

---

## 7. Open items only you can fill in

These are the four things I can't write for you, and all four are likely Q&A questions. Decide them
before pitch day and, if you want, build them into Appendix 3.

1. **Pilot evidence.** Have you run any of these sims with actual workshop students? Even informal
   observation ("we tried CPU/GPU with our last group and here's what happened") outweighs any citation
   in the deck. If you haven't, say so plainly and pivot to the research plus the working build — don't
   imply results you don't have.
2. **Measurement plan.** Even something minimal counts: a one-question "predict, then check" prompt
   before and after each sim would give you real data by next workshop.
3. **Cost/effort.** Have a number. "A few weekends" is a fine answer if it's true.
4. **What's next, win or lose.** Rollout order for remaining sims, and whether you plan to pitch this to
   other Janyaa chapters.

---

## 8. Presentation-day checklist

**Technical**
- Load slides *and* every sim you might demo onto the actual presenting laptop. Test on a projector if
  at all possible — small text reads differently at size.
- **Record a screen-capture video of the CPU/GPU demo** as a fallback. If the browser hangs or a cable
  misbehaves, you play the clip instead of standing in dead air. Do this once; hope you never need it.
- Export the deck to PDF in case the venue machine mangles fonts or lacks PowerPoint.
- Confirm the sims run offline — no dependency on venue wifi.
- If the light-theme recolor has landed, retake any screenshots in the deck so they match.

**Content**
- Verify the live sim count before you speak. Don't say fifteen if five aren't live.
- Bring an index card with the three sharpest numbers (40–50% misconceptions · 10M+ youth · 0.66 effect
  size) so you can deliver the core argument with zero technology.

**Logistics**
- Confirm whether Q&A is inside or outside your time slot.
- Settle team roles if presenting with others: who speaks per slide, who drives the demo, who fields
  research vs. technical questions.

---

## 9. Rehearsal plan

1. **Three full timed run-throughs minimum,** against a real clock. Research B and the breadth slide are
   the two most likely to drift long.
2. **Rehearse the demo transitions separately** — alt-tab in, demo, alt-tab out. This is the single most
   common place a rehearsed pitch visibly breaks. If you're doing the stretch demo, that's two
   transitions.
3. **Say the statistics from memory,** not read off the slide. "Forty to over fifty percent" delivered
   with eye contact lands very differently than glanced at sideways.
4. **Do one full run with no slides at all.** It's the real test of whether you understand the argument
   or are narrating slides.
5. **Have someone watch and then ask you the hardest question they can invent.** Better to be caught by
   a friend than a judge.
6. **Name the phases out loud in transitions** — "that's Identify; here's what the research says" — so a
   judge scoring against the poster's four phases hears them, not just sees the tracker.

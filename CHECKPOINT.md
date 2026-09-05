# CHECKPOINT — b-0005 Pretzels & Beer publication plan

## 1. What changed

- **`business/pretzels-and-beer-publication-plan.md` (new)** — the full decision-grade publication plan:
  licensing vs. self-publish comparison, royalty-base-vs-rate analysis, a crowdfunding funding-goal
  model built on Components.md's inherited landed-cost bands, low/base/high scenarios and break-even
  tables for both routes, a 5-title comparable scan, a 12-month parallel audience/playtest milestone
  plan (with OQ-014's title collision-check steps and OQ-015's manufacturer-quote trigger made
  concrete), a recommendation with a named decision date (2027-06-30) and flip triggers, risks, and
  open questions.

## 2. How the work meets each acceptance criterion

- **Route comparison (money/timeline/personal work):** §2 (at-a-glance table), §3 (licensing detail),
  §4 (self-publish detail), §5.5 (side-by-side summary).
- **Licensing mechanics, royalty terms, advance, designer earnings:** §3.1–§3.6. The royalty-base-vs-rate
  point is built as an explicit illustrative table (§3.2) per the brief's instruction that the base
  matters more than the rate.
- **Crowdfunding model with explicit inputs + honest funding-goal-as-floor:** §4.2 (backers, fees, landed
  COGS, region-by-region fulfillment, VAT/duty, failure buffer) and §4.3 (the goal built on high-end cost
  assumptions, explicitly stated as a floor, not a target).
- **Break-even table + low/base/high scenarios + capital on hand:** §5.1–§5.4, tied directly to
  Components.md's three run-size tiers (1,500/3,000/5,000).
- **Named comparable scan:** §6, five titles (Everdell, Flamecraft, Parks, Cascadia, Wingspan), every
  figure labeled `[ESTIMATE]`/`[UNVERIFIED]` with a verification path (Kicktraq / the platform's own page).
- **Audience-building plan with concrete first-12-month milestones:** §7.1 (month-by-month table covering
  BGG, PnP/TTS, conventions/Protospiel, reviewer outreach, email list), run explicitly in parallel with
  Balance.md §9's five playtest sessions rather than after them.
- **Recommendation with decision date and triggers:** §8.
- **Risks with mitigations:** §9.
- **OQ-004 / OQ-014 / OQ-015 ownership:** OQ-004 addressed in §8 (recommendation + trigger, left open for
  the author's actual call, matching how D-042 was handled); OQ-014 given concrete, ordered steps in §7.2;
  OQ-015 given a concrete trigger condition in §7.3.

## 3. Self-critique and what changed in response

The strongest points found in stage 3, and the fix applied in the final document:

1. **Art budget was invisible everywhere.** No design doc budgets final illustration — Theme.md D-006
   defers image generation and Components.md's prototype path is explicitly flat-color. A crowdfunding
   campaign cannot launch on flat-color prototype art. **Fix:** added an explicit $10K–$15K art & design
   line into the funding-goal math (§4.3, §5.1) and flagged it as the single largest unbudgeted gap in
   §1.4 and again in §10's open questions — this is arguably the most load-bearing finding in the whole
   pass.
2. **International fulfillment was originally hand-waved as "a separate zone-priced line" with no
   numbers**, even though the acceptance criteria explicitly asks for fulfillment by region and VAT/duty
   exposure. **Fix:** built an actual region-by-region table (§4.2) covering US/Canada/EU-UK (DDP vs.
   DDU trade-off, with the VAT/handling-fee mechanic explained)/rest-of-world, each labeled as a ranged
   assumption.
3. **The "failure buffer" acceptance criterion was under-addressed** beyond a generic manufacturing
   contingency. **Fix:** added an explicit distinction between pre-launch at-risk capital (100% lost if
   the all-or-nothing campaign doesn't fund) and post-funding manufacturing capital (§5.3's table), plus
   a named stress test on the Low scenario showing a "funded" campaign can still be barely profitable.
4. **Scenario numbers initially risked being picked to make the math look clean** rather than being
   independently anchored. **Fix:** rebuilt the low/base/high scenarios as explicit multiples (105%/
   230%/430%) of the calculated funding goal, so the scenario story and the goal math are internally
   consistent rather than two independently-invented sets of numbers, and tied run-size selection
   directly to Components.md's own three tiers.
5. **The recommendation risked being a non-committal "it depends."** **Fix:** gave a specific decision
   date (2027-06-30) tied to the milestone calendar, with named trigger conditions in both directions
   (flip to self-publish vs. take a licensing offer), rather than leaving the choice open-ended.
6. **A real cross-document tension was going unnoticed:** `yinzer-games-business-plan.md` models the same
   founder as a full-time, 3-year solo video-game studio; this tabletop plan's own timeline (10–16 months
   of real personal labor) is not free time. **Fix:** stated this explicitly in §1.3 and again in §10 as
   an open question neither document resolves, rather than silently assuming it away.

## 4. Key assumptions and numbers a human must verify before relying on them

- **Everything in §6 (comparable campaign backers/dollars)** — drawn from general knowledge, not checked
  against each campaign's own Kickstarter/Kicktraq page. Verify before citing any of these numbers
  publicly (e.g., in a sell sheet).
- **Royalty rate (3–8%) and its base ($14–$19.50/unit)** — industry-cited but unverified; the actual
  number in any real offer supersedes this entirely.
- **Average pledge ($36), backer counts, and platform/fee percentages (~10%)** — Kickstarter's own
  current fee schedule should be checked at kickstarter.com before finalizing a funding goal.
- **The art & design budget ($10K–$15K)** — this plan's own estimate, with no real quote behind it at
  all; get 2–3 real illustrator quotes before treating this as more than a placeholder.
- **The title collision-check (OQ-014) and the manufacturer/fulfillment-partner quotes (OQ-015)** — not
  run by this pass; scheduled with concrete steps and trigger dates only.

## 5. Open questions / decisions left for the human

See §10 of the plan document directly:
1. Whether $6K–$13K in self-publish risk capital exists separately from the video-game studio's own
   savings runway.
2. Who illustrates the game and at what real price.
3. Whether this tabletop track runs alongside or instead of the video-game studio's full-time timeline.
4. The three `[VERIFY]` items (title search, manufacturer quote, fulfillment-partner quote) — scheduled,
   not resolved.

**Suggested next step:** run the OQ-014 title collision-check (§7.2) this month — it's the cheapest,
fastest-to-resolve item in the whole plan and blocks any public use of the working title.

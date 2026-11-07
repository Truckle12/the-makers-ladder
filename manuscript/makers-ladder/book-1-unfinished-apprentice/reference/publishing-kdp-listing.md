# KDP listing worksheet — *The Unfinished Apprentice* (The Maker's Ladder, Book One)

Every field KDP asks for, in the order the form asks, with the value to paste or the decision to
make. Placeholders in `[BRACKETS]` are yours. Manuscript state at time of writing: 42 chapters,
118,552 words after Batch 7 (2026-09-15), `main`. Prices and print costs are the US rates as of my knowledge —
**confirm each in the KDP calculator on the day**, they change.

---

## 1. Paperback / eBook details (the first KDP screen)

| Field | Value |
|---|---|
| Language | English |
| Book title | The Unfinished Apprentice |
| Subtitle | *(leave blank — the Series field carries "Book 1"; a subtitle here just clutters the cover-to-listing match)* |
| Series | **The Maker's Ladder**, Book **1** — set up in KDP's *Series Manager* (Bookshelf → "+ Create a series"); tick "display series title on product page" |
| Edition number | *(blank — first edition)* |
| Author | **J. K. Alberich** (decided 2026-09-13, with the periods). Use exactly this form everywhere — cover, KDP author field, copyright page, Author Central, B&N. On the cover art it is set in caps: J. K. ALBERICH. |
| Contributors | none required. If a cover artist is credited, add as *Illustrator* or *Cover Design* only if they want it on the record. |
| Description | see §3 — paste the **long blurb** (HTML allowed, ≤ 4,000 characters) |
| Publishing rights | "I own the copyright and I hold the necessary publishing rights" |
| Primary audience — sexually explicit content | **No** |
| Primary audience — reading age | leave blank (adult SFF). If you want the crossover shelf: minimum 16, no maximum. The book has a sixteen-year-old lead, real violence (pits, a killing on-page), no sex, no romance. |
| Primary marketplace | Amazon.com |
| Categories (choose 3) | 1. **Fiction › Fantasy › Epic** · 2. **Fiction › Fantasy › Action & Adventure** · 3. **Fiction › Fantasy › Dark Fantasy** *(KDP lets you pick three; these are the shelves the book actually sits on. Skip "Coming of Age" — Amazon files that under Teen & YA and it drags the book into the YA algorithm.)* |
| Keywords (7 boxes, ≤ 50 chars each) | 1. `epic fantasy series first book` · 2. `dark fantasy adventure found family` · 3. `wizard apprentice hard magic system` · 4. `salvage crew buried city fantasy` · 5. `progression fantasy new series` · 6. `fantasy with strong female characters` · 7. `grim fantasy hunted wizard road novel` — *rules: phrases readers type, no repeats of title/author/category words, no competitor names, no "free"/"bestseller".* |
| AI-generated content | **Yes — see §6. Do not skip this.** |
| Pre-order | eBook: optional, up to 1 year ahead. Paperback: available in some marketplaces. For a **test copy** do neither — publish as "save as draft" and order an author proof (§4). |
| Release date | `[DATE]` — pick after the proof is in your hands |

---

## 2. Print options (paperback screen)

| Field | Value | Why |
|---|---|---|
| ISBN | **Buy your own** (Bowker, US: 1 for $125 / 10 for $295) if you intend to print at Barnes & Noble too. KDP's free ISBN may only be used on Amazon; B&N Press's free ISBN may only be used on B&N. One book, two free ISBNs = two "different" books in the trade databases. Your own ISBN travels everywhere. | one edition, one ISBN |
| Imprint | **What it is:** just the publisher's name — the line on the copyright page and in the listing's *Publisher* field. Traditional houses have many (Tor is an imprint of Macmillan). For a self-publisher it is a name you make up. **If you use KDP's free ISBN you cannot set one:** the publisher shows as "Independently published". **If you buy your own ISBN**, you register an imprint name with it at Bowker and it prints on every book. **Decided 2026-09-13: Lanternhouse Press.** Register it as the publisher/imprint when you buy the ISBN at Bowker (the "Publisher" field on the ISBN record); until then it is only a name on the copyright page. | prints on the copyright page and the listing |
| Interior & paper | **Black & white interior, CREAM paper** | cream is the fiction convention; white is for non-fiction/illustrated |
| Trim size | **6" × 9"** (15.24 × 22.86 cm) | see §5 |
| Bleed | **No bleed** | text-only interior |
| Cover finish | **Matte** | reads "trade paperback"; glossy reads "textbook" |
| Page count | **396 pages** as typeset (`tools/typeset-proof.mjs`: Libre Baskerville 13 pt on 19 pt leading, 4.2" measure, hyphenated, typographic quotes, chapters opening recto, 4 pages of front matter) — the author asked for a Dungeon-Crawler-Carl-sized book (~330 words/page). An earlier EB Garamond setting made 288. | the proof PDF is the number |
| Spine width | KDP cream: 396 × 0.0025" = **0.99"** (white: 396 × 0.002252" = 0.892"). B&N Press uses its own calculator on the cover step — expect within a few hundredths. | needed for the wrap cover |
| Cover file | one full-wrap PDF: width = 0.125 + 6 + 0.99 + 6 + 0.125 = **13.24"**, height **9.25"** (9 + 2 × 0.125 bleed), 300 dpi. Generate the exact template from KDP's *Cover Calculator* with 396 pages / cream. | |
| Margins (interior PDF) | as typeset: **0.9"** left and right (same both sides, so the gutter is 0.9" on every page), **0.85"** top and bottom (running head and page number sit in them) | KDP's minimum inside margin for 301–500 pages is 0.625"; B&N wants ≥ 0.5"; 0.9" clears both with room |

**Print cost & royalty (US, b/w, 110+ pages):** print cost = $1.00 + $0.012 × pages → **396 pp ≈ $5.75**.
Amazon royalty = 60% × list price − print cost. Expanded distribution (other retailers via Amazon) = 40% − print cost.

| List price | Amazon royalty | Expanded dist. |
|---|---|---|
| $15.99 | $3.84 | $0.65 |
| $16.99 | $4.44 | $1.05 |
| **$17.99** | **$4.97** | $1.38 |
| $18.99 | $5.64 | $1.85 |
| $19.99 | $6.24 | $2.25 |

Comparable debut epic fantasy paperbacks at this length list $16.99–$19.99. **Recommend $17.99** ($18.99 is defensible at 400 pages).

**eBook:** list **$4.99** → 70% royalty band ($2.99–$9.99) − delivery fee (~$0.15 for a text-only EPUB) ≈ **$3.34** per sale. $5.99 ≈ $4.04. Launch at $4.99, raise to $5.99 when Book 2 exists.

**KDP Select (Kindle Unlimited):** 90-day exclusivity for the **eBook only** (paperback can still be sold anywhere, including B&N). If you plan a Nook edition, don't enrol; if you don't, enrol — KU page-reads are most of a debut's income in this genre. Decide before publishing.

**Territories:** All territories (worldwide rights) — you own them.

---

## 3. Description copy

### Long blurb (paste into KDP Description — ~1,700 characters, well under the 4,000 cap; the `<b>` and `<br>` tags are allowed)

> <b>He woke in a city that had been dead a thousand years, with three hundred years of memories that belong to someone else.</b>
> <br><br>
> Oscar Alberich remembers a tower by the sea, an owl on his shoulder, a long life spent reading the world the way other men read a page. What he has is a new body, a scar he never earned, and words cut into the stone he woke on: <i>The master has fallen. The line endures. Rise, and be set.</i>
> <br><br>
> He is not the wizard. He is a copy of one — made by hands he never saw, to be finished into a life somebody else wrote. He would rather not.
> <br><br>
> The salvage crew that finds him wants out of the buried city before the rest of it wakes. Kessa, a tracker who counts her people every night, out loud, and has never forgiven herself the one she lost. Cael, a big gentle man sworn to mend and not to kill. And Wick — sixteen, running hot, holding something shut behind her ribs that has been asking her since she was eight to let it out.
> <br><br>
> South is where the answers are. South is also where the House keeps its ledgers, and the House has paper on Oscar, and paper on the girl. Between the ice and the pale city of Everset lie a debt-town that taxes its dead, a fighting pit that pays in blood, a wild that belongs to no one, and a grey sickness that wants exactly what Wick is carrying.
> <br><br>
> Something is waiting at the end of the road. It built him. It would like him to sit down.
> <br><br>
> <b>The Unfinished Apprentice</b> is the first book of <b>The Maker's Ladder</b>: an epic fantasy about the people you were made for, the people you choose, and the difference between holding on and being held.

### Short hook (Amazon A+ content, ads, social — ~60 words)

> A wizard's copy wakes in a dead city with a life already written for him. A tracker, a mender, and a girl with a fire she can't put down are the only ones who'll walk south with him — toward the House that owns the paper on all of them, and the thing that made him, waiting to finish the job.

### Taglines (cover / ad headline)

- **Made to be finished. He declines.**
- Some doors you hold shut with your whole life.
- The line endures. He doesn't intend to.

### Back-cover copy (paperback wrap; ~120 words)

> He woke in a city that had been dead a thousand years, with three hundred years of someone else's memories and words cut into the stone beneath him: <i>The master has fallen. The line endures. Rise, and be set.</i>
> <br><br>
> Oscar Alberich is not the wizard. He is a copy of one, made to be finished into a life somebody else wrote. He would rather not.
> <br><br>
> The only way out of the ice is south: past the debt-town of Marrow, the pits of Oressa, a wild that belongs to no one, and the pale city where the thing that made him is waiting — with a tracker who counts her people out loud, a mender who will not kill, and a girl holding something shut behind her ribs that wants very badly to be let out.
> <br><br>
> <b>Book One of The Maker's Ladder.</b>

### Author bio (`[EDIT]` — 60–100 words, third person)

> J. K. Alberich writes epic fantasy with hard rules and soft people. *The Unfinished Apprentice* is the first book of The Maker's Ladder. `[One human sentence: where you live / what you do when not writing / the thing about you readers like.]` Book Two, *The Unset Journeyman*, is in progress.

---

## 4. Ordering a test copy (proof)

**On KDP:** upload interior + cover, "Save as draft", then Bookshelf → paperback → **"Request printed proofs"** (up to 5, at print cost + shipping, watermarked "Not for resale"). This is the cheapest test copy there is and it ships in about a week (US). You do not have to publish to do this.

**On Barnes & Noble Press:** same flow — upload, then order **author copies** at print cost before or without publishing. B&N's print quality on cream 6×9 is comparable to KDP's; some authors find B&N's cover colour slightly warmer. Ordering one from each and comparing is a normal thing to do.

---

## 5. Trim size — the answer to your B&N question

**6" × 9" (15.24 × 22.86 cm), cream paper, black & white, matte cover.** Use it on both KDP and B&N Press so the two editions are the same physical book (same page count, same spine, one cover file).

Why not the alternatives:

| Trim | Pages for this book | Verdict |
|---|---|---|
| 5" × 8" | ~470 | too thick; reads mass-market; spine over 1.2" |
| 5.25" × 8" | ~440 | same problem |
| 5.5" × 8.5" | ~410 | the "small trade" size; fine for 80k-word books, chunky at 122k |
| **6" × 9"** | **~350** | the standard adult-fantasy trade paperback; shelf-matches the comps; cheapest per copy at this length |
| 6.14" × 9.21" | ~340 | B&N/Ingram's "US trade" variant; KDP also offers it — but 6×9 is the safer common denominator |

B&N Press offers 5×8, 5.25×8, 5.5×8.5, 6×9, 6.14×9.21, 7×10, 8.5×11 in paperback; 6×9 is available with cream paper. Their spine calculator is on the cover-upload step.

Interior typesetting for 6×9 that hits ~350 pages: 11-pt EB Garamond (or Crimson Pro / Libre Baskerville), 14.5-pt leading, chapter titles on a fresh right-hand page with a drop of ~1/3 page, running heads (title left / chapter right), page numbers bottom-centre, first paragraph of each chapter and each section break unindented, `* * *` for section breaks (the manuscript's `---`). I can generate this PDF from the chapter files with Chromium's print engine when you want a proof; the same file works for both KDP and B&N.

---

## 6. AI-generated content disclosure — read this before you fill anything in

KDP asks on the details screen: *"Did you use AI-based tools in creating texts, images, or translations in your book?"* — then, per type, whether the content is **AI-generated** or **AI-assisted**. KDP's own definitions:

- **AI-generated:** "text, images, or translations created by an AI-based tool. If you used an AI-based tool to create the actual content (whether text, images, or translations), you must inform us, **even if you applied substantial edits afterwards**."
- **AI-assisted:** "if you created the content yourself, and used AI-based tools to edit, refine, error-check, or otherwise improve that content."

For this manuscript the honest answer is **Text: AI-generated, with substantial human editing** — the chapters were drafted by the pipeline's agents to your outline, bible, and notes, and revised under your direction through six editorial passes. That is generation with editing, not assistance. Amazon currently accepts AI-generated books with disclosure (it is not a rejection criterion; it is a data field they may use for labelling), and they explicitly say the disclosure is not currently shown to customers — but **check the policy page on the day you publish**, because it has changed twice already. A false "no" is the one thing on this list that can get the account closed.

Cover: if the art is AI-generated (Firefly, Express, etc.), disclose **Images: AI-generated** too.

---

## 7. Files to prepare (none of these exist yet in publishable form)

| File | Status | Notes |
|---|---|---|
| eBook EPUB | draft exists (hand-rolled build) | needs: cover image embedded, title page, **copyright page** (© year, pen name, "all rights reserved", ISBN, imprint, "this is a work of fiction…"), series page, TOC (present), back matter (author bio, "Book Two: coming" page). I can produce this. |
| eBook cover | **missing** | JPG, 1,600 × 2,560 px minimum (1:1.6), < 50 MB, RGB. Title + author must be legible at thumbnail. |
| Paperback interior PDF | **missing** | 6×9, margins per §2, fonts embedded, no bleed, all pages same size. I can produce this. |
| Paperback cover PDF | **missing** | full wrap from the KDP calculator; back-cover copy from §3; ISBN barcode is added by KDP automatically if you use their ISBN, otherwise place your own barcode (Bowker sells them; KDP's cover calculator can also generate one). |
| Copyright page text | draft below | |

**Copyright page (draft):**

> *The Unfinished Apprentice*
> Copyright © `[YEAR]` by J. K. Alberich. All rights reserved.
> This is a work of fiction. Names, characters, places, and incidents are the product of the author's imagination or are used fictitiously. Any resemblance to actual persons, living or dead, events, or locales is coincidental.
> No part of this book may be reproduced in any form without written permission from the author, except for brief quotations in reviews.
> Published by Lanternhouse Press. First edition `[MONTH YEAR]`.
> ISBN `[978-X-XXXXXX-XX-X]` (paperback) · ISBN `[…]` (eBook)
> Cover by `[NAME / TOOL]`.
> The Maker's Ladder: Book One.

---

## 8. Things KDP will ask for later that are easy to forget

- **Author Central** account (free) — the author page, bio, photo; links your books.
- **"Look Inside"** is auto-generated from the first ~10% of the eBook — Chapter 1 is your sample; the front matter should be short so the sample reaches prose fast.
- **A+ Content** (free, under Marketing): three modules — the short hook, a "meet the crew" strip (four characters, one line each), and the map if you make one.
- **Series page**: once Book 2 has an ASIN, KDP links them and shows "Book 1 of 3".
- **Kindle Create** is not required; a valid EPUB 3 uploads directly.

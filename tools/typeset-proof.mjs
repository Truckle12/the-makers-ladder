// tools/typeset-proof.mjs — paperback interior PDF for a KDP / B&N Press proof.
// Deps (NOT in package.json on purpose): `npm i playwright-core pdf-lib` in a scratch dir, plus the
// four EB Garamond TTFs from Google Fonts in `${S}/fonts/` (see the KDP worksheet §5 for the spec).
// Set S to that scratch dir, PEN_NAME / IMPRINT in the env. Output: The-Unfinished-Apprentice-PROOF-6x9.pdf.
// Proof interior: 6x9, cream-ready b/w, EB Garamond, running head + page numbers,
// chapters open recto. Renders with the preinstalled Chromium via playwright-core,
// measures each chapter, inserts blanks so every chapter starts on a right-hand page,
// merges front matter (unnumbered) + body (numbered from 1) with pdf-lib.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { chromium } from "playwright-core";
import { PDFDocument } from "pdf-lib";

const CH_DIR = "/home/user/the-forge/manuscript/makers-ladder/book-1-unfinished-apprentice/chapters/";
const S = "/tmp/claude-0/-home-user-the-forge/7cc0ebb2-f4a5-5794-a7a1-533cc8d535d8/scratchpad";
const OUT_DIR = `${S}/proof`; mkdirSync(OUT_DIR, { recursive: true });
const CHROME = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
const TITLE = "The Unfinished Apprentice";
const SERIES = "The Maker's Ladder · Book One";
const AUTHOR = process.env.PEN_NAME || "[PEN NAME]";
const IMPRINT = process.env.IMPRINT || "[IMPRINT]";
const YEAR = new Date().getFullYear();

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const inline = (s) => esc(s).replace(/\*([^*]+)\*/g, "<em>$1</em>");

const b64 = (f) => "data:font/ttf;base64," + readFileSync(`${S}/fonts/${f}`).toString("base64");
const FONT_CSS = `
@font-face{font-family:"EBG";src:url("${b64("EBGaramond-normal-400.ttf")}") format("truetype");font-weight:400;font-style:normal}
@font-face{font-family:"EBG";src:url("${b64("EBGaramond-italic-400.ttf")}") format("truetype");font-weight:400;font-style:italic}
@font-face{font-family:"EBG";src:url("${b64("EBGaramond-normal-500.ttf")}") format("truetype");font-weight:500;font-style:normal}
@font-face{font-family:"EBG";src:url("${b64("EBGaramond-normal-600.ttf")}") format("truetype");font-weight:600;font-style:normal}`;

const CSS = `${FONT_CSS}
@page { size: 6in 9in; margin: 0; }
html, body { margin: 0; padding: 0; }
body { font-family: "EBG", Georgia, serif; font-size: 12.5pt; line-height: 16.5pt; color: #000; text-align: justify; hyphens: auto; -webkit-hyphens: auto; }
p { margin: 0; text-indent: 1.25em; orphans: 2; widows: 2; }
p.noindent, h2 + p, .sep + p { text-indent: 0; }
p.sep { text-indent: 0; text-align: center; margin: 14pt 0 14pt; letter-spacing: 0.35em; }
em { font-style: italic; }
.chapter { break-before: page; }
.chapter .num { margin: 2.0in 0 0; text-align: center; font-variant: small-caps; letter-spacing: 0.12em; font-size: 11pt; text-indent: 0; }
.chapter h2 { margin: 6pt 0 30pt; text-align: center; font-weight: 500; font-size: 20pt; line-height: 24pt; letter-spacing: 0.02em; }
.blank { break-before: page; height: 1pt; }
.front { break-before: page; text-align: center; text-indent: 0; }
.front p { text-indent: 0; text-align: center; }
.half { padding-top: 2.6in; font-variant: small-caps; letter-spacing: 0.18em; font-size: 14pt; }
.titlep { padding-top: 2.2in; }
.titlep .t { font-size: 26pt; line-height: 30pt; font-weight: 500; letter-spacing: 0.02em; }
.titlep .s { font-size: 11pt; font-variant: small-caps; letter-spacing: 0.16em; margin-top: 14pt; }
.titlep .a { font-size: 14pt; margin-top: 1.6in; letter-spacing: 0.05em; }
.titlep .i { font-size: 9.5pt; margin-top: 1.9in; font-variant: small-caps; letter-spacing: 0.14em; }
.copy { text-align: left; font-size: 9pt; line-height: 12pt; padding-top: 4.9in; }
.copy p { text-align: left; margin-bottom: 7pt; }
`;

function chapterHtml(n) {
  const md = readFileSync(`${CH_DIR}chapter-${String(n).padStart(2, "0")}.md`, "utf8");
  const lines = md.split(/\r?\n/);
  let num = `Chapter ${n}`, title = "";
  const body = []; let para = []; let afterBreak = true;
  const flush = () => { if (para.length) { body.push(`<p${afterBreak ? ' class="noindent"' : ""}>${inline(para.join(" ").trim())}</p>`); para = []; afterBreak = false; } };
  for (const raw of lines) {
    const line = raw.trimEnd();
    if (/^##\s+/.test(line)) { const h = line.replace(/^##\s+/, "").trim(); const m = h.match(/^(.*?)\s+—\s+(.*)$/); if (m) { num = m[1]; title = m[2]; } else { title = h; } continue; }
    if (line.trim() === "---") { flush(); body.push('<p class="sep">*&#8201;*&#8201;*</p>'); afterBreak = true; continue; }
    if (line.trim() === "") { flush(); continue; }
    para.push(line);
  }
  flush();
  return `<section class="chapter"><p class="num">${esc(num)}</p><h2>${inline(title)}</h2>\n${body.join("\n")}</section>`;
}

const doc = (inner) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><style>${CSS}</style></head><body>${inner}</body></html>`;

const frontMatter = doc(`
<section class="front half"><p>${esc(TITLE)}</p></section>
<section class="blank"></section>
<section class="front titlep"><p class="t">${esc(TITLE)}</p><p class="s">${esc(SERIES)}</p><p class="a">${esc(AUTHOR)}</p><p class="i">${esc(IMPRINT)}</p></section>
<section class="front copy">
<p><em>${esc(TITLE)}</em><br>Copyright © ${YEAR} by ${esc(AUTHOR)}. All rights reserved.</p>
<p>This is a work of fiction. Names, characters, places, and incidents are the product of the author's imagination or are used fictitiously. Any resemblance to actual persons, living or dead, events, or locales is coincidental.</p>
<p>No part of this book may be reproduced in any form without written permission from the author, except for brief quotations in reviews.</p>
<p>Published by ${esc(IMPRINT)}. First edition ${YEAR}.<br>ISBN [978-X-XXXXXX-XX-X] (paperback)</p>
<p>The Maker's Ladder: Book One.</p>
<p>PROOF COPY — NOT FOR RESALE</p>
</section>`);

const browser = await chromium.launch({ executablePath: CHROME, args: ["--allow-file-access-from-files"] });
const page = await browser.newPage();

const MARGIN = { top: "0.75in", bottom: "0.75in", left: "0.7in", right: "0.7in" };
async function render(html, file, opts = {}) {
  await page.setContent(html, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: file, width: "6in", height: "9in", margin: MARGIN, printBackground: false, preferCSSPageSize: false, ...opts });
  const bytes = readFileSync(file);
  const pdf = await PDFDocument.load(bytes);
  return pdf.getPageCount();
}

// 1. measure each chapter standalone (same CSS/width => same pagination)
const counts = [];
for (let n = 1; n <= 42; n++) {
  const c = await render(doc(chapterHtml(n)), `${OUT_DIR}/ch-${n}.pdf`);
  counts.push(c);
}
// 2. body with blanks so each chapter opens recto (body page 1 is recto)
let pageNo = 1; const parts = [];
for (let n = 1; n <= 42; n++) {
  if (pageNo % 2 === 0) { parts.push('<section class="blank"></section>'); pageNo += 1; }
  parts.push(chapterHtml(n)); pageNo += counts[n - 1];
}
const headerTemplate = `<div style="width:100%;text-align:center;font-family:'Liberation Serif',Georgia,serif;font-size:8.5pt;letter-spacing:0.14em;color:#000;margin-top:0.32in">${esc(TITLE.toUpperCase())}</div>`;
const footerTemplate = `<div style="width:100%;text-align:center;font-family:'Liberation Serif',Georgia,serif;font-size:9.5pt;color:#000;margin-bottom:0.34in"><span class="pageNumber"></span></div>`;
const bodyPages = await render(doc(parts.join("\n")), `${OUT_DIR}/body.pdf`, { displayHeaderFooter: true, headerTemplate, footerTemplate });
const frontPages = await render(frontMatter, `${OUT_DIR}/front.pdf`);
await browser.close();

// 3. merge
const out = await PDFDocument.create();
for (const f of [`${OUT_DIR}/front.pdf`, `${OUT_DIR}/body.pdf`]) {
  const src = await PDFDocument.load(readFileSync(f));
  const pages = await out.copyPages(src, src.getPageIndices());
  pages.forEach((p) => out.addPage(p));
}
out.setTitle(TITLE); out.setAuthor(AUTHOR);
const final = `${S}/The-Unfinished-Apprentice-PROOF-6x9.pdf`;
writeFileSync(final, await out.save());
console.log(JSON.stringify({ frontPages, bodyPages, total: frontPages + bodyPages, perChapter: counts, out: final }));

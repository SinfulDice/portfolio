# portfolio

Pierre-Antoine's personal portfolio: a **static website** (no backend) that presents him and his
projects to recruiters, in **French and English**. Hosted for free on **GitHub Pages**.

## Why this project
He is looking for a work-study contract (**alternance**, 12–24 months, 2 weeks company / 2 weeks school)
as a **Full Stack developer** or **Data & AI developer**, starting now. The portfolio is linked from his
CV and applications, and shows the projects he builds (see "Projects to show").

## Profile (from his CV — keep the site consistent with it)
- Pierre-Antoine SUT, student in 3rd year of **Bachelor Développement Informatique**, Sup de Vinci Bordeaux (2024–2027).
- Location: Charente-Maritime / Bordeaux area, open to all of France.
- Skills: Python, JavaScript, React, HTML/CSS, Java, C#, SQL (MySQL), NoSQL (MongoDB), Git, Bash, Docker, Agile/Scrum;
  system & network (Linux, Windows, Hyper-V, VMware, Zabbix); AI-assisted dev (Claude), local LLMs (Ollama).
  Currently learning **Rust, Go, TypeScript** and Python for AI.
- Experience: IT support internship at the Ministère de l'Intérieur (Paris, 2025, 2 weeks); student jobs
  (Aldi, SUPER'ette, interim).
- School projects: team strategy game "Worms-like" in 1 week (project lead + lead dev; React, PixiJS,
  Matter.js); IoT cybersecurity research report (Mirai, Stuxnet, Zero Trust).
- Languages: French (native), English B2, German A1. Hobbies: reading, Dungeons & Dragons, films/series.
- GitHub: https://github.com/SinfulDice — LinkedIn: linkedin.com/in/pierre-antoine-sut

## Decisions (2026-10-05)
- **Stack:** React + TypeScript, built with **Vite**. Node.js is only used on his computer to develop
  and build; the published site is plain HTML/CSS/JS files.
- **Style:** colorful / playful — show some personality (games, D&D), but stay readable and professional.
- **Languages:** FR + EN with a switch (all text exists in both languages).
- **Contact on the site:** LinkedIn + GitHub links **only**. No email, no phone number.
- **No downloadable CV for now** (maybe later, see ~/my-projects/IDEAS.md).
- **Address:** `https://sinfuldice.github.io/portfolio/` → GitHub repo named `portfolio`
  (Vite needs `base: '/portfolio/'`). Deployed automatically by a GitHub Actions workflow.

## Projects to show
Add each to the site (`src/data/projects.ts` + texts in `src/i18n/`) when it exists on GitHub.
Other project sessions leave a **"Ready to add"** note below when a project's v1 is deployed.
**At the start of each session, check for these notes and offer to add those projects to the site**
(then remove the note once the project is on the site). Projects:
1. This portfolio — on the site.
2. **Medieval Modern Warfare** (school "Worms-like" game, code only) — on the site.
3. **Rock-paper-scissors with a hand-sign AI** — model trained in Python, runs in the browser (live demo).
   On the site since 2026-10-19 (first card, screenshot of a won match). Source of truth: that repo's README.md.
4. **Calendar app** — Go backend + SQLite, React + TS frontend.

## How the project works
- `SPEC.md` holds the agreed rules (R1, R2…). Each rule has tests named after it in `src/tests/`.
  Never change an agreed rule without asking him; new decisions go into SPEC.md, then tests, then code.
- Run `npm test`, `npm run lint` and `npm run build` before each commit.
- Pushing to `main` publishes the site (`.github/workflows/deploy.yml`).

## Status (2026-10-19)
- v1 is **live** at https://sinfuldice.github.io/portfolio/ (repo: github.com/SinfulDice/portfolio):
  all sections, FR/EN, 3 themes (fantasy kept simple), his photo, texts reviewed with him, checked
  on his phone. He is happy with it "for now".
- 2026-10-19: added the rock-paper-scissors AI project (first card, with demo link + screenshot). 50 tests pass.
- Possible next steps (his choice): Worms-like screenshots (go in `src/assets/projects/`, as 16:9 WebP);
  add the calendar app when it is on GitHub; full fantasy design (R17, R24); downloadable CV (later).
- Original screenshots dropped at the project root are git-ignored (`/*.png`).
- `gh` (GitHub CLI) is installed and logged in as SinfulDice.

## Code tour (paused 2026-10-19)
Guided tour of the code, 8 steps: 1 big picture + startup (index.html, main.tsx, App.tsx, sections.ts),
2 components (Home, props/ExternalLink, .map + key, conditions, aria), 3 settings/context,
4 i18n texts, 5 data files, 6 CSS + themes, 7 tests, 8 Vite/TypeScript/lint/deploy workflow.
**Steps 1–2 done.** He paused it to work on the site. **Don't offer it at session start**; resume at
step 3 only when he asks. Remove this section once the tour is finished (and log it in `JOURNAL.md`).

## Working with him
- He is learning: **explain simply each step** — what you do, why, and what new tools/files are for.
- Ask before big changes. Never push to GitHub or publish without asking.
- Keep a dated log of what was done in `JOURNAL.md` (append at the end of each session).

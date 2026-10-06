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
- Skills: Python, JavaScript, React, HTML/CSS, Java, C#, MySQL, MongoDB, Git, Docker, Agile/Scrum;
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
Built the week of 2026-10-05; add each to the site when it exists on GitHub:
1. This portfolio.
2. **Rock-paper-scissors with a hand-sign AI** — model trained in Python, runs in the browser (live demo).
3. **Calendar app** — Go backend + SQLite, React + TS frontend.
Plus the school "Worms-like" game (ask him if its code is on GitHub).

## Next: questions + SPEC.md + tests
Follow the "Starting a new project" process from ~/my-projects/CLAUDE.md: the decisions above are only a
start — ask him the remaining questions (sections of the site, content, design, FR/EN behavior…), then
write `SPEC.md` and tests for each rule (e.g. Vitest + React Testing Library) before building.

## Setup status
- Folder created, `git init` done (branch `main`).
- Node.js v24 (LTS) installed with nvm; git name/email set (global).
- Vite project created (React 19 + TS, Vite 8, oxlint for linting; `base: '/portfolio/'` set).
- Not done yet: content, design, GitHub repo, deployment.

## Working with him
- He is learning: **explain simply each step** — what you do, why, and what new tools/files are for.
- Ask before big changes. Never push to GitHub or publish without asking.
- Keep a dated log of what was done in `JOURNAL.md` (append at the end of each session).

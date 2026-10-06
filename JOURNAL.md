# Journal

## 2026-10-05
- Created the project folder and ran `git init`.
- Decided: React + TS with Vite, colorful/playful style, FR + EN, LinkedIn + GitHub only (no email,
  no CV for now), address `sinfuldice.github.io/portfolio`.
- Wrote `CLAUDE.md` (background for Claude), `.claude/settings.json` (permissions) and this journal.
- He installed Node.js v24 with nvm and set his git name/email.
- Next: create the Vite project (React + TS).
- Created the Vite project (template `react-ts`: React 19, TypeScript, Vite 8, oxlint).
  Renamed it `portfolio`, set `base: '/portfolio/'` in `vite.config.ts`, title in `index.html`,
  added `.env` files to `.gitignore`. `npm install`, build, lint and dev server all OK.
- Next: replace the demo page with real content (FR/EN), design, then GitHub repo + deployment.
- Asked the spec questions. Decided: one page + top nav bar (hamburger on phones), French first
  (choice remembered), 3 themes dark (default) / light / fantasy, photo on intro, skills as badges
  (character sheet in fantasy theme), Worms-like = MedievalModernWarfare repo (code only).
- Wrote a first draft of `SPEC.md` (R1–R33), waiting for his approval.
- He approved `SPEC.md` (fantasy theme kept simple in v1; full fantasy design + character sheet later).
- Installed the test tools (Vitest, jsdom, Testing Library) and the Cinzel font (fantasy headings).
- Built v1 of the page: nav bar (+ hamburger on phones), FR/EN switch, 3 themes, all 6 sections with
  content from the CV, photo placeholder. 42 tests (R1–R30, R32), all passing; lint + build OK.
- Not done yet: real photo, check by hand on phone/desktop (R31), GitHub repo + deployment workflow
  (R1, R33), first commit, removing the unused Vite demo files.

## 2026-10-06
- Deleted the unused Vite demo files.
- Added R34: the IoT cybersecurity report is one line under Education (not a project card). 43 tests pass.
- First git commit.
- Added the GitHub Pages workflow (`.github/workflows/deploy.yml`) + its tests (R1, R33), and a real README.
- Updated the outdated parts of `CLAUDE.md`. He reread `CLAUDE.md` and `JOURNAL.md` and agreed to
  publish them (public repo).
- Installed `gh` (GitHub CLI) and logged in; created the public repo `SinfulDice/portfolio`,
  set Pages to "GitHub Actions", and pushed.
- Updated the GitHub Actions versions (old ones gave "Node.js 20 is deprecated" warnings).
- He added his photo: made a web copy `src/assets/photo.jpg` (cropped square, 480×480, 18 KB instead
  of 14 MB) and used it in the Home section (R20 test updated). The full-size original is git-ignored.

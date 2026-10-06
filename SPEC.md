# Portfolio — Specification

**Status: APPROVED (2026-10-05).**

Each rule has a number (`R1`, `R2`…). Every rule gets one or more automated tests whose name mentions
its number. **v1** = first published version. **Later** = after v1.

## 1. General
- **R1** (v1): The site is a single static page (React + TypeScript, built with Vite), published at
  `https://sinfuldice.github.io/portfolio/` by a GitHub Actions workflow.
- **R2** (v1): The page has these sections, in this order: Home (intro), About me, Skills, Projects,
  Experience & education, Contact. Each section has an anchor id so links can jump to it.
- **R3** (v1): Contact = LinkedIn and GitHub links only. No email, no phone number, no CV download.

## 2. Navigation
- **R4** (v1): A navigation bar stays visible at the top of the screen while scrolling, with one link
  per section. Clicking a link scrolls (smoothly) to that section.
- **R5** (v1): On narrow screens (under 768px wide), the links are hidden behind a ☰ (hamburger)
  button. Tapping it opens/closes the menu; tapping a link closes the menu and goes to the section.
- **R6** (v1): The ☰ button has a text label for screen readers, and the open menu can be
  closed with the Escape key.

## 3. Languages (French / English)
- **R7** (v1): All visible text exists in French and English. Texts live in translation files, not
  inside components; both files have exactly the same keys.
- **R8** (v1): On a first visit, the site is in French (whatever the browser language).
- **R9** (v1): A language switch in the navigation bar changes all text immediately, without reloading.
- **R10** (v1): The chosen language is remembered (in `localStorage`) and used on the next visit.
  If the browser blocks storage, the site still works (in French).
- **R11** (v1): The page's `<html lang="…">` attribute matches the current language.

## 4. Themes (dark / light / fantasy)
- **R12** (v1): Three themes: **dark**, **light**, **fantasy**. In v1 the fantasy theme is simple
  (its own colors and heading font); the full fantasy design comes later (R17, R24).
- **R13** (v1): On a first visit, the theme is **dark**.
- **R14** (v1): A theme switch in the navigation bar shows the 3 choices (🌙 dark, ☀️ light,
  🐉 fantasy); picking one applies it immediately.
- **R15** (v1): The chosen theme is remembered (in `localStorage`) and used on the next visit.
- **R16** (v1): Body text stays readable in every theme: contrast at least 4.5:1 (WCAG AA
  standard); decorative/fantasy fonts are used for headings only, never for paragraphs.
- **R17** (later): Detailed fantasy look (parchment textures, ornaments, d20 logo…) — to be designed together.

## 5. Home (intro)
- **R18** (v1): Shows Pierre-Antoine's photo, his name, a one-line title (e.g. "Développeur Full Stack &
  Data/IA — en recherche d'alternance"), a one-sentence hook in his own words,
  and the work-study rhythm (2 weeks company / 2 weeks school).
- **R19** (v1): A "Voir mes projets" / "See my projects" button scrolls to the Projects section.
- **R20** (v1): The photo (`src/assets/photo.jpg`, web-sized copy: 480×480) has alternative text (alt).

## 6. About me
- **R21** (v1): A short presentation (how he started, what he likes, what he expects from the
  alternance), his hobbies (reading, Dungeons & Dragons, Magic: The Gathering, films/series) and his
  languages (French native, English B2, German A1).

## 7. Skills
- **R22** (v1): Skills come from one data list, grouped (groups: Languages, Frameworks &
  libraries, Databases, Tools & methods, System & network, AI). Skills he is learning (Rust, Go,
  TypeScript, AI with Python — he already knows Python itself) are marked "en apprentissage" / "learning".
- **R23** (v1): Skills are shown as badges, by group (in v1: in every theme).
- **R24** (later): In the fantasy theme, the same skills are shown as a D&D-style character sheet.
- **R25** (v1): No percentages, levels or progress bars for skills, in any theme.

## 8. Projects
- **R26** (v1): Each project card shows: title, short description (FR/EN), technologies used, GitHub
  link, a demo link **only if a demo exists**, and an image (placeholder if none yet).
- **R27** (v1): Links to other sites open in a new tab, safely (`rel="noopener noreferrer"`).
- **R28** (v1): Projects shown: this portfolio; **Medieval Modern Warfare** (school "Worms-like" game,
  team project in 1 week, he was project lead + lead dev, React/PixiJS/Matter.js, code only:
  https://github.com/SinfulDice/MedievalModernWarfare). The rock-paper-scissors AI and the calendar
  app are added once they are on GitHub.

## 9. Experience & education
- **R29** (v1): Education: Bachelor Développement Informatique, Sup de Vinci Bordeaux, 2024–2027.
- **R30** (v1): Experience: IT support internship, Ministère de l'Intérieur, Paris, 2025 (2 weeks), with
  one line of concrete tasks (new monitors for ~20 staff, shadowing the technicians).
  Student jobs (Aldi, SUPER'ette, interim) grouped in one short line.
- **R34** (v1, decided 2026-10-06): Under Education, one line mentions the school research report on
  IoT cybersecurity (Mirai, Stuxnet, Zero Trust). It is not a project card (no code to link).

## 10. Quality
- **R31** (v1): Usable on a phone (360px wide) with no sideways scrolling (checked by hand in the browser).
- **R32** (v1): Usable with the keyboard only; every image has alt text, every button has a label.
- **R33** (v1): Before each deployment, the workflow runs lint, tests and build; if one fails, nothing is published.

## Later (not v1)
- Worms-like screenshots, detailed fantasy design (R17) with the
  character-sheet skills (R24), downloadable CV.

## Open questions
- None for now.

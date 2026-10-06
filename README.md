# Portfolio — Pierre-Antoine Sut

🌐 **https://sinfuldice.github.io/portfolio/**

🇫🇷 Mon portfolio : développeur Full Stack & Data / IA, en recherche d'alternance (12 à 24 mois).
Site bilingue (français / anglais) avec trois thèmes : sombre, clair et fantasy.

🇬🇧 My portfolio: Full Stack & Data / AI developer, looking for a work-study contract (12 to 24 months).
Bilingual website (French / English) with three themes: dark, light and fantasy.

## Stack

- **React 19 + TypeScript**, built with **Vite**: a static site, no backend.
- **Vitest + Testing Library**: every rule of the specification ([SPEC.md](SPEC.md)) has automated
  tests named after it (e.g. `R13: a first visit uses the dark theme`).
- **GitHub Actions**: at each push, lint + tests + build run, then the site is published on
  GitHub Pages ([deploy.yml](.github/workflows/deploy.yml)).

## Run it locally

Requires Node.js 24.

```bash
npm install
npm run dev      # development server
npm test         # run the tests
npm run build    # build the site into dist/
```

## Project structure

```
src/
  i18n/        texts in French (fr.ts) and English (en.ts)
  data/        skills, projects, contact links
  components/  navigation bar and page sections
  settings/    language and theme (remembered in the browser)
  tests/       tests, one or more per rule of SPEC.md
```

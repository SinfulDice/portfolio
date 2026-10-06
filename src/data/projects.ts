import type { Translations } from '../i18n/fr'

// Projects shown on the site (R28). Titles and descriptions are in the translation files,
// under projects.items.<id>. Add a project here once its code is on GitHub.

export type Project = {
  id: keyof Translations['projects']['items']
  tech: string[]
  repo: string
  /** Live demo address, only if one exists (R26). */
  demo?: string
  /** Screenshot; a placeholder is shown when missing. */
  image?: string
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    tech: ['React', 'TypeScript', 'Vite', 'Vitest', 'GitHub Actions'],
    repo: 'https://github.com/SinfulDice/portfolio',
  },
  {
    id: 'medievalModernWarfare',
    tech: ['React', 'PixiJS', 'Matter.js'],
    repo: 'https://github.com/SinfulDice/MedievalModernWarfare',
  },
]

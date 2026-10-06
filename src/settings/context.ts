import { createContext, useContext } from 'react'
import type { Translations } from '../i18n/fr'

// A "context" shares values with every component without passing them by hand.
// The providers that fill these contexts are in SettingsProvider.tsx.

export const LANGUAGES = ['fr', 'en'] as const
export type Language = (typeof LANGUAGES)[number]

export const THEMES = ['dark', 'light', 'fantasy'] as const
export type Theme = (typeof THEMES)[number]

export type Settings = {
  language: Language
  setLanguage: (language: Language) => void
  /** All texts of the site in the current language. */
  t: Translations
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const SettingsContext = createContext<Settings | null>(null)

export function useSettings(): Settings {
  const settings = useContext(SettingsContext)
  if (!settings) throw new Error('useSettings must be used inside <SettingsProvider>')
  return settings
}

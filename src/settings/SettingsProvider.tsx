import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { en } from '../i18n/en'
import { fr } from '../i18n/fr'
import { LANGUAGES, SettingsContext, THEMES, type Language, type Theme } from './context'
import { readSetting, saveSetting } from './storage'

const LANGUAGE_KEY = 'language'
const THEME_KEY = 'theme'

// Returns the saved value if it is one of the allowed ones, else the default.
function savedChoice<T extends string>(key: string, allowed: readonly T[], fallback: T): T {
  const saved = readSetting(key)
  return allowed.includes(saved as T) ? (saved as T) : fallback
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  // R8 / R13: first visit = French + dark theme. R10 / R15: otherwise the saved choice.
  const [language, setLanguageState] = useState<Language>(() => savedChoice(LANGUAGE_KEY, LANGUAGES, 'fr'))
  const [theme, setThemeState] = useState<Theme>(() => savedChoice(THEME_KEY, THEMES, 'dark'))

  // R11: <html lang> follows the language. The CSS reads <html data-theme> to pick colors.
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const settings = useMemo(
    () => ({
      language,
      setLanguage: (next: Language) => {
        setLanguageState(next)
        saveSetting(LANGUAGE_KEY, next)
      },
      t: language === 'fr' ? fr : en,
      theme,
      setTheme: (next: Theme) => {
        setThemeState(next)
        saveSetting(THEME_KEY, next)
      },
    }),
    [language, theme],
  )

  return <SettingsContext value={settings}>{children}</SettingsContext>
}

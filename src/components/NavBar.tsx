import { useEffect, useState } from 'react'
import { SECTIONS } from '../sections'
import { LANGUAGES, THEMES, useSettings } from '../settings/context'

const THEME_ICONS = { dark: '🌙', light: '☀️', fantasy: '🐉' }

export function NavBar() {
  const { t, language, setLanguage, theme, setTheme } = useSettings()
  // R5: on phones the links are hidden behind the ☰ button; this says if the menu is open.
  const [menuOpen, setMenuOpen] = useState(false)

  // R6: the Escape key closes the open menu.
  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header className="navbar">
      <nav aria-label={t.nav.menuLabel}>
        <a className="navbar-brand" href="#home">
          PA<span aria-hidden="true">·</span>SUT
        </a>

        <button
          type="button"
          className="menu-button"
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
        </button>

        <div id="nav-menu" className={menuOpen ? 'nav-menu open' : 'nav-menu'}>
          <ul className="nav-links">
            {SECTIONS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setMenuOpen(false)}>
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>

          <div className="switches">
            <div className="switch" role="group" aria-label={t.nav.languageLabel}>
              {LANGUAGES.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  lang={lang}
                  aria-label={t.languages[lang]}
                  aria-pressed={language === lang}
                  onClick={() => setLanguage(lang)}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="switch" role="group" aria-label={t.nav.themeLabel}>
              {THEMES.map((name) => (
                <button
                  key={name}
                  type="button"
                  aria-label={t.themes[name]}
                  title={t.themes[name]}
                  aria-pressed={theme === name}
                  onClick={() => setTheme(name)}
                >
                  <span aria-hidden="true">{THEME_ICONS[name]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

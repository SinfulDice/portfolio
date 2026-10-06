import { readFileSync } from 'node:fs'
import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderApp } from '../test/renderApp'

const THEME_BUTTONS = { dark: 'Thème sombre', light: 'Thème clair', fantasy: 'Thème fantasy' }

// Reads the CSS variables (--name: value) of one theme from src/index.css.
function themeVariables(theme: string): Record<string, string> {
  const css = readFileSync('src/index.css', 'utf8')
  const block = css.match(new RegExp(`\\[data-theme='${theme}'\\]\\s*\\{([^}]*)\\}`))
  if (!block) throw new Error(`theme ${theme} not found in index.css`)
  return Object.fromEntries([...block[1].matchAll(/(--[\w-]+):\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()]))
}

// Contrast ratio between two #rrggbb colors, as defined by WCAG (1 to 21).
function contrast(color1: string, color2: string): number {
  const luminance = (hex: string) => {
    const [r, g, b] = [1, 3, 5].map((i) => {
      const c = parseInt(hex.slice(i, i + 2), 16) / 255
      return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
    })
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }
  const [light, dark] = [luminance(color1), luminance(color2)].sort((a, b) => b - a)
  return (light + 0.05) / (dark + 0.05)
}

describe('Themes', () => {
  it('R12: there are three themes to choose from: dark, light, fantasy', () => {
    renderApp()
    for (const name of Object.values(THEME_BUTTONS)) {
      expect(screen.getByRole('button', { name })).toBeInTheDocument()
    }
  })

  it('R13: a first visit uses the dark theme', () => {
    renderApp()
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(screen.getByRole('button', { name: 'Thème sombre' })).toHaveAttribute('aria-pressed', 'true')
  })

  it('R14: picking a theme applies it immediately', async () => {
    const { user } = renderApp()
    for (const [theme, name] of Object.entries(THEME_BUTTONS)) {
      await user.click(screen.getByRole('button', { name }))
      expect(document.documentElement.dataset.theme).toBe(theme)
      expect(screen.getByRole('button', { name })).toHaveAttribute('aria-pressed', 'true')
    }
  })

  it('R15: the chosen theme is remembered for the next visit', async () => {
    const first = renderApp()
    await first.user.click(screen.getByRole('button', { name: 'Thème fantasy' }))
    first.unmount()

    renderApp()
    expect(document.documentElement.dataset.theme).toBe('fantasy')
  })

  it('R15: an invalid saved theme is ignored (dark is used)', () => {
    localStorage.setItem('theme', 'rainbow')
    renderApp()
    expect(document.documentElement.dataset.theme).toBe('dark')
  })

  for (const theme of ['dark', 'light', 'fantasy']) {
    it(`R16: text in the ${theme} theme has a contrast of at least 4.5:1`, () => {
      const v = themeVariables(theme)
      const pairs = [
        ['--text', '--bg'],
        ['--text', '--surface'],
        ['--muted', '--bg'],
        ['--muted', '--surface'],
        ['--accent', '--bg'],
        ['--accent', '--surface'],
        ['--on-accent', '--accent'],
      ]
      for (const [fg, bg] of pairs) {
        expect(contrast(v[fg], v[bg]), `${fg} on ${bg}`).toBeGreaterThanOrEqual(4.5)
      }
    })
  }

  it('R16: paragraphs use the same plain font in every theme (fancy fonts for headings only)', () => {
    const bodyFonts = ['dark', 'light', 'fantasy'].map((theme) => themeVariables(theme)['--font-body'])
    expect(new Set(bodyFonts).size).toBe(1)
    expect(bodyFonts[0]).not.toMatch(/Cinzel/)
  })
})

import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { en } from '../i18n/en'
import { fr } from '../i18n/fr'
import { renderApp } from '../test/renderApp'

// Lists every "path" of a translation object, e.g. "nav.home", "about.hobbies.0".
function keyPaths(value: unknown, prefix = ''): string[] {
  if (typeof value !== 'object' || value === null) return [prefix]
  return Object.entries(value).flatMap(([key, child]) => keyPaths(child, prefix ? `${prefix}.${key}` : key))
}

describe('Languages', () => {
  it('R7: French and English texts have exactly the same keys', () => {
    expect(keyPaths(en)).toEqual(keyPaths(fr))
  })

  it('R7: no text is left empty in either language', () => {
    for (const texts of [fr, en]) {
      for (const path of keyPaths(texts)) {
        const text = path.split('.').reduce<unknown>((obj, key) => (obj as Record<string, unknown>)[key], texts)
        expect(text, path).not.toBe('')
      }
    }
  })

  it('R8: a first visit is in French, even if the browser is in English', () => {
    vi.spyOn(navigator, 'language', 'get').mockReturnValue('en-US')
    renderApp()
    expect(screen.getByText(fr.home.title)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Français' })).toHaveAttribute('aria-pressed', 'true')
  })

  it('R9: the switch changes all texts to English immediately', async () => {
    const { user } = renderApp()
    await user.click(screen.getByRole('button', { name: 'English' }))
    expect(screen.getByText(en.home.title)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: en.skills.title })).toBeInTheDocument()
    expect(screen.queryByText(fr.home.title)).not.toBeInTheDocument()
  })

  it('R9: the switch goes back to French', async () => {
    const { user } = renderApp()
    await user.click(screen.getByRole('button', { name: 'English' }))
    await user.click(screen.getByRole('button', { name: 'Français' }))
    expect(screen.getByText(fr.home.title)).toBeInTheDocument()
  })

  it('R10: the chosen language is remembered for the next visit', async () => {
    const first = renderApp()
    await first.user.click(screen.getByRole('button', { name: 'English' }))
    first.unmount()

    renderApp() // "next visit"
    expect(screen.getByText(en.home.title)).toBeInTheDocument()
  })

  it('R10: an invalid saved language is ignored (French is used)', () => {
    localStorage.setItem('language', 'klingon')
    renderApp()
    expect(screen.getByText(fr.home.title)).toBeInTheDocument()
  })

  it('R10: if the browser blocks storage, the site still works in French', async () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked')
    })
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked')
    })
    const { user } = renderApp()
    expect(screen.getByText(fr.home.title)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'English' }))
    expect(screen.getByText(en.home.title)).toBeInTheDocument()
  })

  it('R11: <html lang> follows the current language', async () => {
    const { user } = renderApp()
    expect(document.documentElement.lang).toBe('fr')
    await user.click(screen.getByRole('button', { name: 'English' }))
    expect(document.documentElement.lang).toBe('en')
  })

  it('R11: the page starts with <html lang="fr"> even before React runs', async () => {
    const { readFileSync } = await import('node:fs')
    expect(readFileSync('index.html', 'utf8')).toContain('<html lang="fr">')
  })
})

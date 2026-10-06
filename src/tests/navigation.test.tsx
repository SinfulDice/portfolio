import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderApp } from '../test/renderApp'

describe('Navigation', () => {
  it('R4: the navigation bar has one link per section, pointing to its anchor', () => {
    renderApp()
    const nav = screen.getByRole('navigation', { name: 'Navigation principale' })
    const list = within(nav).getAllByRole('list')[0]
    const hrefs = within(list)
      .getAllByRole('link')
      .map((link) => link.getAttribute('href'))
    expect(hrefs).toEqual(['#home', '#about', '#skills', '#projects', '#experience', '#contact'])
  })

  it('R4: every link of the navigation bar has a matching section on the page', () => {
    const { container } = renderApp()
    for (const link of within(screen.getByRole('navigation')).getAllByRole('link')) {
      const id = link.getAttribute('href')!.slice(1)
      expect(container.querySelector(`section#${id}`)).not.toBeNull()
    }
  })

  it('R5: the ☰ button opens and closes the menu', async () => {
    const { user } = renderApp()
    const button = screen.getByRole('button', { name: 'Ouvrir le menu' })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(document.getElementById('nav-menu')).not.toHaveClass('open')

    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(document.getElementById('nav-menu')).toHaveClass('open')

    await user.click(screen.getByRole('button', { name: 'Fermer le menu' }))
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('R5: tapping a link closes the menu', async () => {
    const { user } = renderApp()
    await user.click(screen.getByRole('button', { name: 'Ouvrir le menu' }))
    await user.click(within(screen.getByRole('navigation')).getByRole('link', { name: 'Projets' }))
    expect(document.getElementById('nav-menu')).not.toHaveClass('open')
  })

  it('R6: the ☰ button has a label for screen readers, and Escape closes the menu', async () => {
    const { user } = renderApp()
    const button = screen.getByRole('button', { name: 'Ouvrir le menu' })
    await user.click(button)
    await user.keyboard('{Escape}')
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button).toHaveAccessibleName('Ouvrir le menu')
  })
})

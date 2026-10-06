import { readFileSync } from 'node:fs'
import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderApp } from '../test/renderApp'

describe('General', () => {
  it('R1: the site is built for https://sinfuldice.github.io/portfolio/', () => {
    const viteConfig = readFileSync('vite.config.ts', 'utf8')
    expect(viteConfig).toContain("base: '/portfolio/'")
  })

  it('R2: the sections are, in order: home, about, skills, projects, experience, contact', () => {
    const { container } = renderApp()
    const ids = [...container.querySelectorAll('main > section')].map((section) => section.id)
    expect(ids).toEqual(['home', 'about', 'skills', 'projects', 'experience', 'contact'])
  })

  it('R3: contact = LinkedIn and GitHub only', () => {
    const { container } = renderApp()
    const contact = container.querySelector('#contact') as HTMLElement
    const hrefs = within(contact)
      .getAllByRole('link')
      .map((link) => link.getAttribute('href'))
    expect(hrefs).toEqual(['https://www.linkedin.com/in/pierre-antoine-sut', 'https://github.com/SinfulDice'])
  })

  it('R3: no email, phone number or CV download anywhere on the site', () => {
    const { container } = renderApp()
    for (const link of container.querySelectorAll('a')) {
      const href = link.getAttribute('href') ?? ''
      expect(href).not.toMatch(/^(mailto|tel):/)
      expect(href).not.toMatch(/\.pdf$/i)
      expect(link).not.toHaveAttribute('download')
    }
    expect(container.textContent).not.toMatch(/@\w+\.\w+/) // no email address in the text
  })

  it('R27: links to other sites open in a new tab, safely', () => {
    const { container } = renderApp()
    const external = [...container.querySelectorAll('a')].filter((a) => a.getAttribute('href')?.startsWith('http'))
    expect(external.length).toBeGreaterThan(0)
    for (const link of external) {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
  })

  it('R32: every image has alternative text and every button has a label', () => {
    renderApp()
    for (const image of screen.getAllByRole('img')) {
      expect(image).toHaveAccessibleName()
    }
    for (const button of screen.getAllByRole('button')) {
      expect(button).toHaveAccessibleName()
    }
  })
})

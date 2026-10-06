import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { projects } from '../data/projects'
import { skillGroups, type Skill } from '../data/skills'
import { fr } from '../i18n/fr'
import { renderApp } from '../test/renderApp'

// The displayed (French) name of a skill.
function skillName(skill: Skill): string {
  return typeof skill.name === 'string' ? skill.name : fr.skills[skill.name.text]
}

function section(container: HTMLElement, id: string): HTMLElement {
  return container.querySelector(`#${id}`) as HTMLElement
}

describe('Home', () => {
  it('R18: shows the photo, his name, his title and the work-study rhythm', () => {
    const { container } = renderApp()
    const home = within(section(container, 'home'))
    expect(home.getByRole('img', { name: fr.home.photoAlt })).toBeInTheDocument()
    expect(home.getByRole('heading', { level: 1, name: 'Pierre-Antoine Sut' })).toBeInTheDocument()
    expect(home.getByText(fr.home.title)).toBeInTheDocument()
    expect(home.getByText(fr.home.hook)).toBeInTheDocument()
    expect(home.getByText(/2 semaines en entreprise \/ 2 semaines en école/)).toBeInTheDocument()
  })

  it('R19: the "Voir mes projets" button leads to the Projects section', () => {
    const { container } = renderApp()
    const button = within(section(container, 'home')).getByRole('link', { name: 'Voir mes projets' })
    expect(button).toHaveAttribute('href', '#projects')
  })

  it('R20: the photo has alternative text', () => {
    const { container } = renderApp()
    expect(within(section(container, 'home')).getByRole('img')).toHaveAccessibleName(fr.home.photoAlt)
  })
})

describe('About me', () => {
  it('R21: shows his hobbies and his languages', () => {
    const { container } = renderApp()
    const about = within(section(container, 'about'))
    for (const text of [...fr.about.hobbies, ...fr.about.spokenLanguages]) {
      expect(about.getByText(text)).toBeInTheDocument()
    }
  })
})

describe('Skills', () => {
  it('R22 / R23: every skill appears as a badge, in its group', () => {
    const { container } = renderApp()
    const skills = within(section(container, 'skills'))
    for (const group of skillGroups) {
      const box = skills.getByRole('group', { name: fr.skills.groups[group.id] })
      for (const skill of group.skills) {
        expect(within(box).getByText(skillName(skill))).toBeInTheDocument()
      }
    }
  })

  it('R22: skills he is learning are marked "en apprentissage", the others are not', () => {
    const { container } = renderApp()
    const skills = within(section(container, 'skills'))
    for (const skill of skillGroups.flatMap((group) => group.skills)) {
      const badge = skills.getByText(skillName(skill)).closest('li')!
      if (skill.learning) expect(badge).toHaveTextContent(fr.skills.learning)
      else expect(badge).not.toHaveTextContent(fr.skills.learning)
    }
    const all = skillGroups.flatMap((g) => g.skills)
    for (const name of ['Rust', 'Go', 'TypeScript', fr.skills.aiWithPython]) {
      expect(all.find((s) => skillName(s) === name)?.learning, name).toBe(true)
    }
    // He already knows Python: only "AI with Python" is being learned.
    expect(all.find((s) => s.name === 'Python')?.learning).toBeFalsy()
  })

  it('R25: no percentages, levels or progress bars, in any theme', async () => {
    const { container, user } = renderApp()
    for (const theme of ['Thème sombre', 'Thème clair', 'Thème fantasy']) {
      await user.click(screen.getByRole('button', { name: theme }))
      const skills = section(container, 'skills')
      expect(skills.textContent).not.toMatch(/\d+\s*%|\d+\s*\/\s*\d+/)
      expect(within(skills).queryByRole('progressbar')).not.toBeInTheDocument()
      expect(within(skills).queryByRole('meter')).not.toBeInTheDocument()
    }
  })
})

describe('Projects', () => {
  it('R26: each card shows title, description, technologies, image and GitHub link', () => {
    renderApp()
    for (const project of projects) {
      const text = fr.projects.items[project.id]
      const card = within(screen.getByRole('article', { name: text.title }))
      expect(card.getByText(text.description)).toBeInTheDocument()
      expect(card.getByRole('img', { name: text.title })).toBeInTheDocument()
      for (const tech of project.tech) {
        expect(within(card.getByRole('list', { name: fr.projects.techLabel })).getByText(tech)).toBeInTheDocument()
      }
      expect(card.getByRole('link', { name: fr.projects.code })).toHaveAttribute('href', project.repo)
    }
  })

  it('R26: a demo link is shown only if the project has a demo', () => {
    renderApp()
    for (const project of projects) {
      const card = within(screen.getByRole('article', { name: fr.projects.items[project.id].title }))
      const demo = card.queryByRole('link', { name: fr.projects.demo })
      if (project.demo) expect(demo).toHaveAttribute('href', project.demo)
      else expect(demo).not.toBeInTheDocument()
    }
  })

  it('R28: shows this portfolio and Medieval Modern Warfare (code only, no demo)', () => {
    expect(projects.map((p) => p.id)).toEqual(['portfolio', 'medievalModernWarfare'])
    const mmw = projects.find((p) => p.id === 'medievalModernWarfare')!
    expect(mmw.repo).toBe('https://github.com/SinfulDice/MedievalModernWarfare')
    expect(mmw.demo).toBeUndefined()
  })
})

describe('Experience & education', () => {
  it('R29: shows the Bachelor at Sup de Vinci Bordeaux, 2024–2027', () => {
    const { container } = renderApp()
    const experience = within(section(container, 'experience'))
    expect(experience.getByText('Bachelor Développement Informatique')).toBeInTheDocument()
    expect(experience.getByText(/Sup de Vinci, Bordeaux · 2024 – 2027/)).toBeInTheDocument()
  })

  it('R34: mentions the IoT cybersecurity research report under Education', () => {
    const { container } = renderApp()
    const experience = within(section(container, 'experience'))
    const education = experience.getByRole('heading', { name: fr.experience.educationTitle }).parentElement!
    expect(within(education).getByText(/cybersécurité de l'IoT \(Mirai, Stuxnet, Zero Trust\)/)).toBeInTheDocument()
  })

  it('R30: shows the internship at the Ministère de l’Intérieur and the student jobs', () => {
    const { container } = renderApp()
    const experience = within(section(container, 'experience'))
    expect(experience.getByText(/Ministère de l'Intérieur, Paris · 2025/)).toBeInTheDocument()
    expect(experience.getByText(/Stage support informatique/)).toBeInTheDocument()
    expect(experience.getByText(/Aldi, SUPER’ette/)).toBeInTheDocument()
  })
})

describe('Photo', () => {
  it('R20: the real photo is shown (not a placeholder), with alternative text', () => {
    const { container } = renderApp()
    const photo = within(section(container, 'home')).getByRole('img', { name: fr.home.photoAlt })
    expect(photo.tagName).toBe('IMG')
    expect(photo.getAttribute('src')).toMatch(/photo.*\.jpg$/)
  })
})

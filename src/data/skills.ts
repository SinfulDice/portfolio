import type { Translations } from '../i18n/fr'

// One list of skills, used by every theme (R22). No levels or percentages (R25).

export type Skill = {
  /** A tech name (same in both languages), or the key of a translated name in t.skills. */
  name: string | { text: 'aiWithPython' }
  /** True for skills he is currently learning (shown with a "learning" tag). */
  learning?: boolean
}

export type SkillGroup = {
  id: keyof Translations['skills']['groups']
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    skills: [
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'Java' },
      { name: 'C#' },
      { name: 'HTML / CSS' },
      { name: 'TypeScript', learning: true },
      { name: 'Rust', learning: true },
      { name: 'Go', learning: true },
    ],
  },
  { id: 'frameworks', skills: [{ name: 'React' }, { name: 'PixiJS' }, { name: 'Matter.js' }] },
  { id: 'databases', skills: [{ name: 'MySQL' }, { name: 'MongoDB' }] },
  { id: 'tools', skills: [{ name: 'Git' }, { name: 'Docker' }, { name: 'Agile / Scrum' }] },
  {
    id: 'system',
    skills: [{ name: 'Linux' }, { name: 'Windows' }, { name: 'Hyper-V' }, { name: 'VMware' }, { name: 'Zabbix' }],
  },
  {
    id: 'ai',
    skills: [{ name: 'Claude' }, { name: 'Ollama' }, { name: { text: 'aiWithPython' }, learning: true }],
  },
]

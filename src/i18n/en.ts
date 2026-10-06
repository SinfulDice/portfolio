import type { Translations } from './fr'

// All English texts of the site: same keys as fr.ts (R7).

export const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Background',
    contact: 'Contact',
    menuLabel: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageLabel: 'Language',
    themeLabel: 'Theme',
  },
  languages: { fr: 'Français', en: 'English' },
  themes: { dark: 'Dark theme', light: 'Light theme', fantasy: 'Fantasy theme' },
  home: {
    greeting: "Hi, I'm",
    title: 'Full Stack & Data / AI Developer',
    search: 'Looking for a 12 to 24-month work-study contract (alternance), starting now, anywhere in France.',
    rhythm: 'Schedule: 2 weeks at the company / 2 weeks at school.',
    cta: 'See my projects',
    photoAlt: 'Photo of Pierre-Antoine Sut',
  },
  about: {
    title: 'About me',
    intro: [
      "I'm a 3rd-year student in a Bachelor's degree in Software Development at Sup de Vinci Bordeaux. I love building applications end to end, from the server to the interface.",
      "I'm especially interested in data and AI: I run LLMs locally (Ollama) and develop with AI assistance (Claude). Right now I'm learning Rust, Go, TypeScript and Python for AI.",
    ],
    hobbiesTitle: 'Interests',
    hobbies: ['Reading', 'Dungeons & Dragons', 'Films and series'],
    languagesTitle: 'Languages',
    spokenLanguages: ['French (native)', 'English (B2)', 'German (A1)'],
  },
  skills: {
    title: 'Skills',
    learning: 'learning',
    groups: {
      languages: 'Languages',
      frameworks: 'Frameworks & libraries',
      databases: 'Databases',
      tools: 'Tools & methods',
      system: 'System & network',
      ai: 'AI',
    },
  },
  projects: {
    title: 'Projects',
    code: 'View code',
    demo: 'View demo',
    techLabel: 'Technologies',
    items: {
      portfolio: {
        title: 'This portfolio',
        description:
          'Bilingual (FR/EN) static website with three themes, built with React and TypeScript, automatically tested and published on GitHub Pages.',
      },
      medievalModernWarfare: {
        title: 'Medieval Modern Warfare',
        description:
          'Team strategy game in the style of "Worms", built in one week as a school project. I was project lead and lead developer.',
      },
    },
  },
  experience: {
    title: 'Background',
    educationTitle: 'Education',
    workTitle: 'Experience',
    bachelor: {
      title: "Bachelor's in Software Development",
      place: 'Sup de Vinci, Bordeaux',
      dates: '2024 – 2027',
    },
    report: 'School project: research report on IoT cybersecurity (Mirai, Stuxnet, Zero Trust).',
    internship: {
      title: 'IT support internship (2 weeks)',
      place: 'French Ministry of the Interior, Paris',
      dates: '2025',
    },
    jobs: 'Student jobs: Aldi, SUPER’ette, temp work.',
  },
  contact: {
    title: 'Contact',
    text: 'Have a work-study position to offer? Message me on LinkedIn or check out my code on GitHub.',
  },
  footer: '© 2026 Pierre-Antoine Sut',
}

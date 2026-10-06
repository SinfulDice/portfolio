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
    hook: "I love finding out how things work: that's why I'm passionate about development.",
    search: 'Looking for a 12 to 24-month work-study contract (alternance), starting now, anywhere in France.',
    rhythm: 'Schedule: 2 weeks at the company / 2 weeks at school.',
    cta: 'See my projects',
    photoAlt: 'Photo of Pierre-Antoine Sut',
  },
  about: {
    title: 'About me',
    intro: [
      "It all started with Scratch and YouTube videos. Today, I'm a 3rd-year student in a Bachelor's degree in Software Development at Sup de Vinci Bordeaux.",
      "I enjoy every stage of a project, with a soft spot for the server side and for AI. To me, AI is a tool that expands what I can create: I run LLMs locally (Ollama) and develop with the help of Claude. Right now, I'm learning Rust, Go, TypeScript, and AI with Python.",
      "What I'm looking for in a work-study position: working in a team on a real product, with real-world constraints (code review, tests, deployment).",
    ],
    hobbiesTitle: 'Interests',
    hobbies: [
      'Reading: currently Six of Crows and the Grisha series by Leigh Bardugo',
      'Dungeons & Dragons: player, and future Dungeon Master',
      'Magic: The Gathering, Commander format',
      'Films and series',
    ],
    languagesTitle: 'Languages',
    spokenLanguages: ['French (native)', 'English (B2)', 'German (A1)'],
  },
  skills: {
    title: 'Skills',
    learning: 'learning',
    aiWithPython: 'AI with Python',
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
          'Bilingual (FR/EN) website with three themes, in React and TypeScript. Every rule of the specification is checked by automated tests, and the site is only published if all tests pass.',
      },
      medievalModernWarfare: {
        title: 'Medieval Modern Warfare',
        description:
          '"Worms"-style strategy game built in one week by a team of three, for a school project. As project lead and lead developer, I split the tasks and wrote most of the code, with the help of AI (Claude, Gemini). The game was tested by the school\'s students during a public demo, and the project got 18/20.',
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
      tasks:
        'Installed new monitors for about twenty staff members, and shadowed the technicians during their support calls to users.',
    },
    jobs: 'Student jobs: Aldi, SUPER’ette, temp work.',
  },
  contact: {
    title: 'Contact',
    text: 'Have a work-study position to offer? Message me on LinkedIn or check out my code on GitHub.',
  },
  footer: '© 2026 Pierre-Antoine Sut',
}

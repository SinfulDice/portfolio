// All French texts of the site. en.ts must have exactly the same keys (R7).

export const fr = {
  nav: {
    home: 'Accueil',
    about: 'À propos',
    skills: 'Compétences',
    projects: 'Projets',
    experience: 'Parcours',
    contact: 'Contact',
    menuLabel: 'Navigation principale',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    languageLabel: 'Langue',
    themeLabel: 'Thème',
  },
  languages: { fr: 'Français', en: 'English' },
  themes: { dark: 'Thème sombre', light: 'Thème clair', fantasy: 'Thème fantasy' },
  home: {
    greeting: 'Bonjour, je suis',
    title: 'Développeur Full Stack & Data / IA',
    hook: "J'adore découvrir comment les choses fonctionnent : c'est pour ça que le développement me passionne.",
    search: "En recherche d'alternance de 12 à 24 mois, dès maintenant, partout en France.",
    rhythm: 'Rythme : 2 semaines en entreprise / 2 semaines en école.',
    cta: 'Voir mes projets',
    photoAlt: 'Photo de Pierre-Antoine Sut',
  },
  about: {
    title: 'À propos',
    intro: [
      "Tout a commencé avec Scratch et des vidéos YouTube. Aujourd'hui, je suis en 3e année de Bachelor Développement Informatique à Sup de Vinci Bordeaux.",
      "J'aime toutes les étapes d'un projet, avec un faible pour la partie serveur et pour l'IA. Pour moi, l'IA est un outil qui élargit mes possibilités de création : j'utilise des LLM en local (Ollama) et je développe avec l'aide de Claude. En ce moment, j'apprends Rust, Go, TypeScript et l'IA avec Python.",
      "Ce que j'attends de l'alternance : travailler en équipe sur un vrai produit, avec ses contraintes (relecture de code, tests, mise en production).",
    ],
    hobbiesTitle: "Centres d'intérêt",
    hobbies: [
      'Lecture : en ce moment, Six of Crows et la saga Grisha de Leigh Bardugo',
      'Donjons & Dragons : joueur, et futur maître du jeu',
      'Magic: The Gathering, en format Commander',
      'Films et séries',
    ],
    languagesTitle: 'Langues',
    spokenLanguages: ['Français (langue maternelle)', 'Anglais (B2)', 'Allemand (A1)'],
  },
  skills: {
    title: 'Compétences',
    learning: 'en apprentissage',
    aiWithPython: 'IA avec Python',
    groups: {
      languages: 'Langages',
      frameworks: 'Frameworks & bibliothèques',
      databases: 'Bases de données',
      tools: 'Outils & méthodes',
      system: 'Système & réseau',
      ai: 'IA',
    },
  },
  projects: {
    title: 'Projets',
    code: 'Voir le code',
    demo: 'Voir la démo',
    techLabel: 'Technologies',
    items: {
      portfolio: {
        title: 'Ce portfolio',
        description:
          'Site statique bilingue (FR/EN) avec trois thèmes, construit avec React et TypeScript, testé automatiquement et publié sur GitHub Pages.',
      },
      medievalModernWarfare: {
        title: 'Medieval Modern Warfare',
        description:
          "Jeu de stratégie en équipe façon « Worms », réalisé en une semaine en projet d'école. J'étais chef de projet et lead développeur.",
      },
    },
  },
  experience: {
    title: 'Parcours',
    educationTitle: 'Formation',
    workTitle: 'Expérience',
    bachelor: {
      title: 'Bachelor Développement Informatique',
      place: 'Sup de Vinci, Bordeaux',
      dates: '2024 – 2027',
    },
    report: "Projet d'école : rapport de recherche sur la cybersécurité de l'IoT (Mirai, Stuxnet, Zero Trust).",
    internship: {
      title: 'Stage support informatique (2 semaines)',
      place: "Ministère de l'Intérieur, Paris",
      dates: '2025',
    },
    jobs: 'Jobs étudiants : Aldi, SUPER’ette, missions en intérim.',
  },
  contact: {
    title: 'Contact',
    text: 'Une alternance à proposer ? Écrivez-moi sur LinkedIn ou découvrez mon code sur GitHub.',
  },
  footer: '© 2026 Pierre-Antoine Sut',
}

export type Translations = typeof fr

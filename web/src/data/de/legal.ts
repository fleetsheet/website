import type { LegalContent } from '@/data/en/legal'

export const legal: LegalContent = {
  navLabel: 'Rechtliches',
  englishNotice:
    'Diese Richtlinie wird auf Englisch veröffentlicht; maßgeblich ist die englische Fassung.',
  pages: {
    privacy: {
      label: 'Datenschutzerklärung',
      description:
        'Wie Fleet Informationen erhebt, nutzt, weitergibt und schützt, wenn Sie unsere Website besuchen.',
    },
    terms: {
      label: 'Allgemeine Geschäftsbedingungen',
      description: 'Die Bedingungen, die für den Besuch und die Nutzung der Fleet-Website gelten.',
    },
    cookies: {
      label: 'Cookie-Richtlinie',
      description:
        'Wie die Fleet-Website Cookies verwendet und welche Wahlmöglichkeiten Sie haben.',
    },
  },
}

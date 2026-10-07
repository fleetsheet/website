import type { NavLink } from '@/config'

export const tagline = 'Vereinte Daten und Intelligenz für Immobilien.'

export const description =
  'Fleet ist die Plattform für das Management von Gewerbeimmobilien, entwickelt für Strategie, Betrieb und Instandhaltung.'

export const actions = {
  signIn: { label: 'Anmelden', href: '#' },
  bookDemo: { label: 'Demo buchen', href: '/contact' },
} satisfies Record<string, NavLink>

export const headerLinks: NavLink[] = [{ label: 'FAQ', href: '/faqs' }]

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: 'Plattform',
    links: [
      { label: 'Überblick', href: '/platform' },
      { label: 'Anlagenmanagement', href: '/features/asset-management' },
      { label: 'Dokumentenmanagement', href: '/features/document-management' },
      { label: 'Audit-Tracking & Inspektionen', href: '/features/audit-tracking' },
      { label: 'RunnerAI', href: '/platform/runner-ai' },
    ],
  },
  {
    title: 'Unternehmen',
    links: [
      { label: 'FAQ', href: '/faqs' },
      { label: 'KI-Agenten', href: '/#ai' },
      { label: 'Kontakt', href: '/contact' },
    ],
  },
]

export const labels = {
  skipToContent: 'Zum Inhalt springen',
  home: 'Fleet Startseite',
  mainNav: 'Hauptnavigation',
  mobileNav: 'Mobile Navigation',
  openMenu: 'Menü öffnen',
  closeMenu: 'Menü schließen',
  language: 'Sprache',
  optional: '(optional)',
  emailPrompt: 'Lieber per E-Mail? Schreiben Sie an',
  productPreview: 'Produktvorschau',
  auditLog: 'Audit-Log',
  beforeFleet: 'Vor Fleet',
  withFleet: 'Mit Fleet',
}

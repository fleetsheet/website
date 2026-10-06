import type { NavLink } from '@/config'

export const tagline = 'Données et intelligence unifiées pour l’immobilier.'

export const description =
  'Fleet est la plateforme de gestion immobilière d’entreprise conçue pour la stratégie, l’exploitation et la maintenance.'

export const actions = {
  signIn: { label: 'Se connecter', href: '#' },
  bookDemo: { label: 'Demander une démo', href: '/contact' },
} satisfies Record<string, NavLink>

export const headerLinks: NavLink[] = [
  { label: 'Agents IA', href: '/#ai' },
  { label: 'FAQ', href: '/faqs' },
  { label: 'Analyses', href: '/insights' },
]

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: 'Plateforme',
    links: [
      { label: 'Vue d’ensemble', href: '/platform' },
      { label: 'Gestion des équipements', href: '/features/asset-management' },
      { label: 'Gestion documentaire', href: '/features/document-management' },
      { label: 'Suivi d’audit et inspections', href: '/features/audit-tracking' },
      { label: 'RunnerAI', href: '/platform/runner-ai' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { label: 'Analyses', href: '/insights' },
      { label: 'FAQ', href: '/faqs' },
      { label: 'Agents IA', href: '/#ai' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

export const labels = {
  skipToContent: 'Aller au contenu',
  home: 'Accueil Fleet',
  mainNav: 'Principale',
  mobileNav: 'Mobile',
  openMenu: 'Ouvrir le menu',
  closeMenu: 'Fermer le menu',
  language: 'Langue',
  optional: '(facultatif)',
  emailPrompt: 'Vous préférez l’e-mail ? Écrivez à',
  productPreview: 'Aperçu du produit',
  auditLog: 'Journal d’audit',
  beforeFleet: 'Avant Fleet',
  withFleet: 'Avec Fleet',
}

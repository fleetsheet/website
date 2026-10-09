import type { NavLink } from '@/config'

export const tagline: string = 'Unified Data and Intelligence for Real Estate.'

export const description: string =
  'Fleet is the commercial real estate management platform purpose-built for strategy, operations, and maintenance.'

export const actions = {
  signIn: { label: 'Sign in', href: 'https://app.runfleet.com' },
  bookDemo: { label: 'Book a demo', href: '/contact' },
} satisfies Record<string, NavLink>

export const headerLinks: NavLink[] = [{ label: 'FAQs', href: '/faqs' }]

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: 'Platform',
    links: [
      { label: 'Overview', href: '/platform' },
      { label: 'Asset management', href: '/features/asset-management' },
      { label: 'Document management', href: '/features/document-management' },
      { label: 'Audit tracking & inspections', href: '/features/audit-tracking' },
      { label: 'RunnerAI', href: '/platform/runner-ai' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'FAQs', href: '/faqs' },
      { label: 'AI agents', href: '/#ai' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

export const labels = {
  skipToContent: 'Skip to content',
  home: 'Fleet home',
  mainNav: 'Main',
  mobileNav: 'Mobile',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  language: 'Language',
  optional: '(optional)',
  emailPrompt: 'Prefer email? Write to',
  productPreview: 'Product preview',
  auditLog: 'Audit log',
  beforeFleet: 'Before Fleet',
  withFleet: 'With Fleet',
}

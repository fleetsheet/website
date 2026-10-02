import type { NavLink } from '@/config'

export const tagline: string = 'Unified Data and Intelligence for Real Estate.'

export const description: string =
  'Fleet is the commercial real estate management platform purpose-built for strategy, operations, and maintenance.'

export const actions = {
  signIn: { label: 'Sign in', href: '#' },
  bookDemo: { label: 'Book a demo', href: '/contact' },
} satisfies Record<string, NavLink>

export const headerLinks: NavLink[] = [
  { label: 'Platform', href: '/#platform' },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'AI agents', href: '/#ai' },
  { label: 'Consultancy', href: '/#consultancy' },
  { label: 'Insights', href: '/insights' },
]

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: 'Platform',
    links: [
      { label: 'Facility management', href: '/features/facility-management' },
      { label: 'Asset management', href: '/features/asset-management' },
      { label: 'Document management', href: '/features/document-management' },
      { label: 'Vehicle management', href: '/features/vehicle-management' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Insights', href: '/insights' },
      { label: 'Consultancy', href: '/#consultancy' },
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

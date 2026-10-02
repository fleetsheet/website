import { WEBSITE_URL } from 'astro:env/client'

export type NavLink = {
  label: string
  href: string
}

type WebsiteConfig = {
  url: string
  name: string
  tagline: string
  description: string
  domain: string
  lang: string
  icon: string
  logo: {
    path: string
    url: string
  }
  ogImage: {
    path: string
    url: string
  }
  socialUrls: string[]
  actions: {
    signIn: NavLink
    bookDemo: NavLink
  }
  headerLinks: NavLink[]
  footerColumns: {
    title: string
    links: NavLink[]
  }[]
}

export const websiteConfig: WebsiteConfig = {
  url: WEBSITE_URL,
  name: 'Fleet',
  tagline: 'Unified Data and Intelligence for Real Estate.',
  description:
    'Fleet is the commercial real estate management platform purpose-built for strategy, operations, and maintenance.',
  domain: 'runfleet.com',
  lang: 'en',
  icon: '/icon.png',
  logo: {
    path: '/logo.webp',
    url: new URL('/logo.webp', WEBSITE_URL).toString(),
  },
  ogImage: {
    path: '/og.png',
    url: new URL('/og.png', WEBSITE_URL).toString(),
  },
  socialUrls: [],
  actions: {
    signIn: { label: 'Sign in', href: '#' },
    bookDemo: { label: 'Book a demo', href: '/#demo' },
  },
  headerLinks: [
    { label: 'Platform', href: '/#platform' },
    { label: 'Solutions', href: '/#solutions' },
    { label: 'AI agents', href: '/#ai' },
    { label: 'Consultancy', href: '/#consultancy' },
    { label: 'About', href: '/about' },
  ],
  footerColumns: [
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
        { label: 'About', href: '/about' },
        { label: 'Consultancy', href: '/#consultancy' },
        { label: 'AI agents', href: '/#ai' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ],
}

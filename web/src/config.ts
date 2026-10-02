import { WEBSITE_URL } from 'astro:env/client'

export type NavLink = {
  label: string
  href: string
}

type WebsiteConfig = {
  url: string
  name: string
  domain: string
  email: string
  themeColor: string
  icon: string
  logo: {
    path: string
    url: string
  }
  ogImage: {
    path: string
    url: string
    alt: string
    width: number
    height: number
  }
  socialUrls: string[]
}

export const websiteConfig: WebsiteConfig = {
  url: WEBSITE_URL,
  name: 'Fleet',
  domain: 'runfleet.com',
  email: 'admin@runfleet.com',
  themeColor: '#F0F5F8',
  icon: '/icon.png',
  logo: {
    path: '/logo.webp',
    url: new URL('/logo.webp', WEBSITE_URL).toString(),
  },
  ogImage: {
    path: '/og.png',
    url: new URL('/og.png', WEBSITE_URL).toString(),
    alt: 'Fleet: Unified Data and Intelligence for Real Estate.',
    width: 1200,
    height: 630,
  },
  socialUrls: [],
}

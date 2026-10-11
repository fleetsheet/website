export const legalPages = [
  { id: 'privacy', href: '/privacy' },
  { id: 'terms', href: '/termsofservice' },
  { id: 'cookies', href: '/cookies' },
] as const satisfies readonly { id: string; href: string }[]

export type LegalPageId = (typeof legalPages)[number]['id']

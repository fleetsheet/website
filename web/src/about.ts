export const aboutGroups = ['company'] as const

export type AboutGroup = (typeof aboutGroups)[number]

export const aboutPages = [
  { id: 'story', group: 'company', href: '/about' },
  { id: 'careers', group: 'company', href: '/about/careers' },
  { id: 'partners', group: 'company', href: '/about/partners' },
] as const satisfies readonly { id: string; group: AboutGroup; href: string }[]

export type AboutPageId = (typeof aboutPages)[number]['id']

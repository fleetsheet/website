export const resourceGroups = ['platform'] as const

export type ResourceGroup = (typeof resourceGroups)[number]

export const resourcePages = [
  { id: 'contentLibrary', group: 'platform', href: '/insights' },
  { id: 'customerStories', group: 'platform', href: '/resources/customer-stories' },
  { id: 'easyOnboard', group: 'platform', href: '/resources/easyonboard' },
  { id: 'developers', group: 'platform', href: '/resources/developers' },
] as const satisfies readonly { id: string; group: ResourceGroup; href: string }[]

export type ResourcePageId = (typeof resourcePages)[number]['id']

// Topics used to filter the content library; every Insights article (by English file name) has one.
export const insightTopics = ['ai', 'maintenance', 'operations', 'retail'] as const

export type InsightTopic = (typeof insightTopics)[number]

export const insightTopicBySlug: Record<string, InsightTopic> = {
  'how-to-run-your-building-with-ai': 'ai',
  'the-building-is-alive': 'ai',
  'is-your-maintenance-process-silently-draining-your-profits': 'maintenance',
  'real-estate-teams-smart-maintenance-software': 'maintenance',
  'from-spreadsheets-to-efficiency': 'operations',
  'proptech-ai-reviving-mall-portfolios': 'retail',
}

// Industries used to filter customer stories.
export const storySectors = ['realEstate', 'logistics', 'retail'] as const

export type StorySector = (typeof storySectors)[number]

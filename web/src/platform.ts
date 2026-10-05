export const platformGroups = ['platform', 'features'] as const

export type PlatformGroup = (typeof platformGroups)[number]

export const platformPages = [
  { id: 'overview', group: 'platform', href: '/platform' },
  { id: 'webAndMobile', group: 'platform', href: '/platform/web-and-mobile' },
  { id: 'integrations', group: 'platform', href: '/platform/integrations' },
  { id: 'runnerAi', group: 'platform', href: '/platform/runner-ai' },
  { id: 'fleetMail', group: 'platform', href: '/platform/fleet-mail' },
  { id: 'workflowBuilder', group: 'platform', href: '/platform/workflow-builder' },
  { id: 'preventiveMaintenance', group: 'features', href: '/features/preventive-maintenance' },
  { id: 'reactiveMaintenance', group: 'features', href: '/features/reactive-maintenance' },
  { id: 'analyticsReporting', group: 'features', href: '/features/analytics-and-reporting' },
  { id: 'assetManagement', group: 'features', href: '/features/asset-management' },
  { id: 'documentManagement', group: 'features', href: '/features/document-management' },
  { id: 'auditTracking', group: 'features', href: '/features/audit-tracking' },
] as const satisfies readonly { id: string; group: PlatformGroup; href: string }[]

export type PlatformPageId = (typeof platformPages)[number]['id']

export type PlatformDetailId = Exclude<PlatformPageId, 'overview'>

export const detailPages = platformPages.filter(
  (entry): entry is Extract<(typeof platformPages)[number], { id: PlatformDetailId }> =>
    entry.id !== 'overview',
)

export const solutionGroups = ['category'] as const

export type SolutionGroup = (typeof solutionGroups)[number]

export const solutionPages = [
  { id: 'cafm', group: 'category', href: '/solutions/cafm-cmms' },
  { id: 'pms', group: 'category', href: '/solutions/pms-rems' },
  { id: 'workOrders', group: 'category', href: '/solutions/work-order-management' },
  { id: 'fieldService', group: 'category', href: '/solutions/field-service-optimization' },
  { id: 'tenants', group: 'category', href: '/solutions/tenant-resident-management' },
  { id: 'vendors', group: 'category', href: '/solutions/vendor-supplier-management' },
] as const satisfies readonly { id: string; group: SolutionGroup; href: string }[]

export type SolutionPageId = (typeof solutionPages)[number]['id']

export type CategoryPageId = Extract<(typeof solutionPages)[number], { group: 'category' }>['id']

export const categoryPages = solutionPages.filter(
  (entry): entry is Extract<(typeof solutionPages)[number], { group: 'category' }> =>
    entry.group === 'category',
)

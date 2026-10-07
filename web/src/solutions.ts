export const solutionGroups = ['category', 'industry'] as const

export type SolutionGroup = (typeof solutionGroups)[number]

export const solutionPages = [
  { id: 'cafm', group: 'category', href: '/solutions/cafm-cmms' },
  { id: 'pms', group: 'category', href: '/solutions/pms-rems' },
  { id: 'workOrders', group: 'category', href: '/solutions/work-order-management' },
  { id: 'fieldService', group: 'category', href: '/solutions/field-service-optimization' },
  { id: 'tenants', group: 'category', href: '/solutions/tenant-resident-management' },
  { id: 'vendors', group: 'category', href: '/solutions/vendor-supplier-management' },
  { id: 'facilityManagement', group: 'industry', href: '/solutions/facility-management' },
  { id: 'retail', group: 'industry', href: '/solutions/shopping-malls-retail' },
  { id: 'hospitality', group: 'industry', href: '/solutions/hospitality-food-beverage' },
  { id: 'healthcareEducation', group: 'industry', href: '/solutions/healthcare-education' },
  { id: 'logistics', group: 'industry', href: '/solutions/shipping-logistics' },
  { id: 'hvacLifts', group: 'industry', href: '/solutions/hvac-lifts-elevators' },
  { id: 'dataCenters', group: 'industry', href: '/solutions/data-centers' },
  { id: 'fitness', group: 'industry', href: '/solutions/fitness-wellness-centers' },
  { id: 'mep', group: 'industry', href: '/solutions/mep-maintenance' },
  { id: 'offices', group: 'industry', href: '/solutions/offices-mixed-use' },
  { id: 'industrial', group: 'industry', href: '/solutions/industrial-factory-plant-management' },
  { id: 'vehicles', group: 'industry', href: '/solutions/vehicle-management' },
] as const satisfies readonly { id: string; group: SolutionGroup; href: string }[]

export type SolutionPageId = (typeof solutionPages)[number]['id']

export type CategoryPageId = Extract<(typeof solutionPages)[number], { group: 'category' }>['id']

export type IndustryPageId = Extract<(typeof solutionPages)[number], { group: 'industry' }>['id']

export const industryPages = solutionPages.filter(
  (entry): entry is Extract<(typeof solutionPages)[number], { group: 'industry' }> =>
    entry.group === 'industry',
)

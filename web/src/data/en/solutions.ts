import type { NavLink } from '@/config'
import type {
  OverviewModule,
  OverviewVisual,
  PlatformEntry,
  PlatformItem,
} from '@/data/en/platform'
import type { Photo } from '@/photos'
import type { CategoryPageId, IndustryPageId, SolutionGroup, SolutionPageId } from '@/solutions'

export type CategoryIcon =
  | 'workOrders'
  | 'preventive'
  | 'assets'
  | 'analytics'
  | 'portfolio'
  | 'budget'
  | 'documents'
  | 'requests'
  | 'routing'
  | 'mobile'
  | 'scheduling'
  | 'communication'
  | 'vendors'
  | 'approvals'
  | 'compliance'
  | 'tenants'

export type CategoryPageContent = {
  hero: {
    eyebrow: string
    title: string
    description: string
    highlights: string[]
    visual: OverviewVisual
  }
  challenge: {
    pressure: { title: string; description: string; points: string[] }
    answer: { title: string; description: string }
  }
  capabilities: {
    title: string
    description: string
    tabs: (Omit<OverviewModule, 'id' | 'tag'> & { icon: CategoryIcon; label: string })[]
  }
  rows: (Omit<OverviewModule, 'id'> & { photo: Photo })[]
  quote: { text: string; author: string; company: string; photo: Photo }
  faq: { question: string; answer: string }[]
}

export type SolutionsShared = {
  actions: { primary: NavLink; secondary: NavLink }
  results: {
    eyebrow: string
    title: string
    description: string
    items: { label: string; value: string }[]
  }
  why: { title: string; description: string; items: PlatformItem[] }
  industries: { title: string; description: string; items: { id: IndustryPageId; photo: Photo }[] }
  integrate: { title: string; description: string; action: NavLink }
  faqTitle: string
  cta: {
    title: string
    description: string
    primaryAction: NavLink
    secondaryAction: NavLink
    photo: Photo
  }
}

export const menu = {
  label: 'Solutions',
  groups: {
    category: 'By category',
    industry: 'By industry',
  } satisfies Record<SolutionGroup, string>,
  contact: 'Not finding your industry here? Get in touch',
  promo: {
    title: 'Find your fit',
    description: 'See how Fleet adapts to your operation, your portfolio and your team.',
    action: {
      label: 'Book a demo',
      href: '/contact',
    } satisfies NavLink,
  },
}

export const pages: Record<SolutionPageId, PlatformEntry> = {
  cafm: {
    label: 'CAFM/CMMS',
    summary: 'One connected system for maintenance, assets and facilities.',
    meta: {
      title: 'CAFM & CMMS Software for Multi-Site Teams | Fleet',
      description:
        'Fleet is the cloud-based CAFM and CMMS platform that brings work orders, preventive maintenance, assets and compliance together for every site.',
    },
  },
  pms: {
    label: 'PMS/REMS',
    summary: 'Property and real estate operations in one live view.',
    meta: {
      title: 'Property & Real Estate Management Software | Fleet',
      description:
        'Run property operations across your portfolio with Fleet, with budgets, documents, maintenance and reporting in one real estate management platform.',
    },
  },
  workOrders: {
    label: 'Work Order',
    summary: 'Create, assign and close every job with full visibility.',
    meta: {
      title: 'Work Order Management Software | Fleet',
      description:
        'Create, assign, track and close work orders across every site, with mobile updates, SLA tracking and photo proof in one platform.',
    },
  },
  fieldService: {
    label: 'Field Service Optimization',
    summary: 'The right technician at the right site, ready to work.',
    meta: {
      title: 'Field Service Optimization Software | Fleet',
      description:
        'Schedule, assign and track field teams and contractors across every site, with mobile checklists, live job status and performance reporting.',
    },
  },
  tenants: {
    label: 'Tenant & Resident Management',
    summary: 'Requests, updates and service residents can follow.',
    meta: {
      title: 'Tenant & Resident Management Software | Fleet',
      description:
        'Capture tenant and resident requests, keep everyone updated and resolve issues fast across every building and unit with Fleet.',
    },
  },
  vendors: {
    label: 'Vendor & Supplier Management',
    summary: 'Contractors, quotes, contracts and performance together.',
    meta: {
      title: 'Vendor & Supplier Management Software | Fleet',
      description:
        'Coordinate contractors and suppliers in one platform, with quotes, approvals, contracts, certificates and performance scorecards on record.',
    },
  },
  facilityManagement: {
    label: 'Facility Management',
    summary: 'Every building, asset and team in one control panel.',
    meta: {
      title: 'Facility Management Software | Fleet',
      description:
        'Run facility operations across every site with Fleet: work orders, preventive maintenance, assets, vendors and compliance in one platform.',
    },
  },
  retail: {
    label: 'Shopping Malls & Retail',
    summary: 'Guest-ready stores and common areas, every day.',
    meta: {
      title: 'Shopping Mall & Retail Maintenance Software | Fleet',
      description:
        'Keep malls and retail centers guest-ready with fast work orders, preventive plans for lifts and HVAC, tenant coordination and spend tracking.',
    },
  },
  hospitality: {
    label: 'Hospitality, Food & Beverage',
    summary: 'Front and back of house, ready for every guest.',
    meta: {
      title: 'Hotel & Restaurant Maintenance Software | Fleet',
      description:
        'Protect the guest experience with mobile work orders, kitchen equipment checks, safety compliance and preventive maintenance for hotels and F&B.',
    },
  },
  healthcareEducation: {
    label: 'Healthcare & Education',
    summary: 'Safe, compliant buildings for patients and students.',
    meta: {
      title: 'Healthcare & Education Facility Maintenance Software | Fleet',
      description:
        'Keep hospitals, clinics, schools and campuses safe and compliant with preventive maintenance, audit-ready records and fast repairs.',
    },
  },
  logistics: {
    label: 'Shipping & Logistics',
    summary: 'Docks, equipment and vehicles kept moving.',
    meta: {
      title: 'Logistics & Warehouse Maintenance Software | Fleet',
      description:
        'Keep docks, conveyors, forklifts and vehicles running with mobile work orders, preventive schedules and downtime tracking across every hub.',
    },
  },
  hvacLifts: {
    label: 'HVAC, Lifts & Elevators',
    summary: 'Critical building systems on schedule and certified.',
    meta: {
      title: 'HVAC, Lift & Elevator Maintenance Software | Fleet',
      description:
        'Plan and prove HVAC, lift and escalator maintenance with recurring schedules, certificates, vendor coordination and downtime insight.',
    },
  },
  dataCenters: {
    label: 'Data Centers',
    summary: 'Cooling, power and uptime under control.',
    meta: {
      title: 'Data Center Facility Maintenance Software | Fleet',
      description:
        'Protect uptime with preventive plans for cooling and power systems, BMS-connected alerts, strict change records and vendor coordination.',
    },
  },
  fitness: {
    label: 'Fitness & Wellness Centers',
    summary: 'Clean, safe and fully working spaces for members.',
    meta: {
      title: 'Fitness & Wellness Center Maintenance Software | Fleet',
      description:
        'Keep gyms, spas and wellness centers clean, safe and fully working with equipment checks, cleaning schedules and fast member-reported repairs.',
    },
  },
  mep: {
    label: 'MEP Maintenance',
    summary: 'Mechanical, electrical and plumbing work in one flow.',
    meta: {
      title: 'MEP Maintenance Software | Fleet',
      description:
        'Manage mechanical, electrical and plumbing maintenance across your portfolio with preventive plans, trade-based routing and compliance records.',
    },
  },
  offices: {
    label: 'Offices & Mixed-Use',
    summary: 'Productive workplaces and seamless shared spaces.',
    meta: {
      title: 'Office & Mixed-Use Building Maintenance Software | Fleet',
      description:
        'Run offices and mixed-use developments with tenant requests, preventive maintenance, vendor coordination and portfolio-wide reporting.',
    },
  },
  industrial: {
    label: 'Industrial Factory & Plant Management',
    summary: 'Production assets maintained for maximum uptime.',
    meta: {
      title: 'Factory & Plant Maintenance Software | Fleet',
      description:
        'Maximize uptime in factories and plants with asset registers, preventive and usage-based maintenance, safety inspections and downtime analytics.',
    },
  },
  vehicles: {
    label: 'Vehicle Management',
    summary: 'Every vehicle from procurement to decommission.',
    meta: {
      title: 'Fleet Vehicle Management Software | Fleet',
      description:
        'Manage every vehicle in one place: procurement, maintenance, registrations, claims, fines and utilization, with audit-ready records.',
    },
  },
}

export const shared: SolutionsShared = {
  actions: {
    primary: {
      label: 'Book a demo',
      href: '/contact',
    },
    secondary: {
      label: 'Explore the platform',
      href: '/platform',
    },
  },
  results: {
    eyebrow: 'Results',
    title: 'Measurable Results at Every Site',
    description:
      'Property and facility teams use Fleet to reduce reactive work, onboard quickly and keep operations running.',
    items: [
      {
        value: 'Up to 40%',
        label: 'less reactive maintenance',
      },
      {
        value: 'Under 7 days',
        label: 'to onboard your team',
      },
      {
        value: '99.99%',
        label: 'uptime, backed by SLA',
      },
      {
        value: '20+',
        label: 'integrations with your stack',
      },
    ],
  },
  why: {
    title: 'Why Teams Choose Fleet',
    description:
      'Fleet is purpose-built for multi-site real estate and facility teams, with configurability at its core.',
    items: [
      {
        title: 'Flexible',
        description: 'Workflows, rules and dashboards configured by property, region or portfolio.',
      },
      {
        title: 'Intelligent',
        description:
          'RunnerAI and rule-based predictions point every team to what needs attention next.',
      },
      {
        title: 'Collaborative',
        description: 'In-house teams, vendors and managers share one live record on any device.',
      },
    ],
  },
  industries: {
    title: 'One Platform for Every Industry',
    description: 'Fleet adapts to the assets, teams and standards of your sector.',
    items: [
      {
        id: 'facilityManagement',
        photo: {
          id: 'inspectionClipboard',
          alt: 'Inspector completing a checklist on a clipboard',
        },
      },
      {
        id: 'retail',
        photo: {
          id: 'mallAtrium',
          alt: 'Shoppers in a busy mall atrium',
        },
      },
      {
        id: 'hospitality',
        photo: {
          id: 'hotelHousekeeping',
          alt: 'Housekeeper preparing a hotel room',
        },
      },
      {
        id: 'healthcareEducation',
        photo: {
          id: 'cleanerCorridor',
          alt: 'Cleaner disinfecting a door handle in a corridor',
        },
      },
      {
        id: 'logistics',
        photo: {
          id: 'warehouseTeam',
          alt: 'Warehouse team reviewing stock between racks',
        },
      },
      {
        id: 'hvacLifts',
        photo: {
          id: 'hvacTechnicians',
          alt: 'HVAC technicians servicing rooftop units',
        },
      },
      {
        id: 'dataCenters',
        photo: {
          id: 'dataCenter',
          alt: 'Rows of server racks in a data center',
        },
      },
      {
        id: 'fitness',
        photo: {
          id: 'acFilterService',
          alt: 'Technician replacing an air conditioning filter',
        },
      },
      {
        id: 'mep',
        photo: {
          id: 'electricianPanel',
          alt: 'Electrician working on a control panel',
        },
      },
      {
        id: 'offices',
        photo: {
          id: 'officeFloor',
          alt: 'Open-plan office floor with people at work',
        },
      },
      {
        id: 'industrial',
        photo: {
          id: 'plantManagers',
          alt: 'Plant manager briefing engineers in hard hats',
        },
      },
      {
        id: 'vehicles',
        photo: {
          id: 'fleetVans',
          alt: 'Delivery vans parked outside a warehouse',
        },
      },
    ],
  },
  integrate: {
    title: 'Fleet Integrates with Your Stack',
    description:
      'Connect accounting systems, ERPs, building management systems, tenant portals and access control through 20+ integrations and an open REST API.',
    action: {
      label: 'See all integrations',
      href: '/platform/integrations',
    },
  },
  faqTitle: 'Frequently Asked Questions',
  cta: {
    title: 'Run Every Site with Confidence',
    description:
      'Get a guided walkthrough of how Fleet brings your teams, assets and vendors together, tailored to your portfolio.',
    primaryAction: {
      label: 'Book a demo',
      href: '/contact',
    },
    secondaryAction: {
      label: 'Explore the platform',
      href: '/platform',
    },
    photo: {
      id: 'cityTowers',
      alt: 'Glass high-rise office towers against a blue sky',
    },
  },
}

export const categories: Record<CategoryPageId, CategoryPageContent> = {
  cafm: {
    hero: {
      eyebrow: 'CAFM/CMMS',
      title: 'CAFM and CMMS Software for Connected Operations',
      description:
        'Fleet brings your buildings, assets, people and compliance records together in one cloud-based platform, so every site runs on live information.',
      highlights: ['Work orders and PPM', 'Asset history', 'Audit-ready records'],
      visual: {
        kind: 'jobs',
        title: 'Work orders · Harbour Point',
        items: [
          {
            title: 'Chiller low pressure alarm',
            location: 'Plant room B2',
            status: 'In progress',
            tone: 'info',
          },
          {
            title: 'Quarterly fire pump test',
            location: 'Pump room',
            status: 'Due today',
            tone: 'due',
          },
          {
            title: 'Lobby lighting repair',
            location: 'Level 1',
            status: 'Completed',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Facilities Grow More Complex Every Year',
        description:
          'More buildings, assets, vendors and compliance dates, each with its own records, schedules and standards.',
        points: ['Many sites', 'Many systems', 'Many standards'],
      },
      answer: {
        title: 'Everything Connected in One CAFM',
        description:
          'Fleet brings your assets, teams, vendors and workflows into one flexible platform built for multi-site real estate.',
      },
    },
    capabilities: {
      title: 'Built for All Your Facility Management Needs',
      description:
        'From the first request to the final report, every part of maintenance in one place.',
      tabs: [
        {
          icon: 'workOrders',
          label: 'Work orders',
          title: 'Resolve Reactive Repairs Faster',
          description:
            'Create, assign and track ad-hoc repairs with photos, priorities and live updates from the field.',
          points: [
            'Requests captured with photos and location',
            'Jobs routed to in-house teams or vendors',
            'SLA timers on every job',
          ],
          visual: {
            kind: 'jobs',
            title: 'Reactive jobs · Tower B',
            items: [
              {
                title: 'Water leak',
                location: 'Level 12 · Unit 3B',
                status: 'Overdue 2h',
                tone: 'overdue',
              },
              {
                title: 'AC not cooling',
                location: 'Level 8 · Office',
                status: 'Assigned',
                tone: 'info',
              },
              {
                title: 'Door closer fault',
                location: 'Lobby',
                status: 'Resolved',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Preventive',
          title: 'Plan Ahead and Extend Asset Life',
          description:
            'Schedule recurring maintenance for HVAC, plumbing, lighting and fire safety by time or by usage.',
          points: [
            'Recurring schedules by asset type',
            'Checklists for every visit',
            'Work orders created ahead of due dates',
          ],
          visual: {
            kind: 'steps',
            title: 'Preventive plan',
            steps: [
              {
                kind: 'Plan',
                text: 'AHU-07 · monthly service',
              },
              {
                kind: 'Then',
                text: 'Create work order 7 days ahead',
              },
              {
                kind: 'Then',
                text: 'Assign to HVAC team with checklist',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Assets',
          title: 'Every Asset, Fully Documented',
          description:
            'Keep a live register of every asset with its maintenance history, costs, warranties and manuals.',
          points: [
            'Digital profiles for every asset',
            'Repair history and costs over time',
            'Warranty and contract reminders',
          ],
          visual: {
            kind: 'asset',
            title: 'Asset profile',
            name: 'Chiller CH-02',
            location: 'Harbour Point · Plant room B2',
            status: 'Operational',
            facts: [
              {
                label: 'Last service',
                value: '12 Sep',
              },
              {
                label: 'Warranty',
                value: 'Mar 2028',
              },
              {
                label: 'Cost YTD',
                value: '$4,210',
              },
              {
                label: 'Open jobs',
                value: '1',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Reporting',
          title: 'Decisions Based on Live Data',
          description:
            'See which buildings have the most recurring issues, which assets use the most budget and which teams meet their SLAs.',
          points: [
            'Live dashboards by site and team',
            'Custom KPIs for every role',
            'Exports for audits and board packs',
          ],
          visual: {
            kind: 'chart',
            title: 'SLA met by site · Q3',
            stats: [
              {
                label: 'SLA met',
                value: '96.4%',
              },
              {
                label: 'Open jobs',
                value: '128',
              },
            ],
            bars: [
              {
                label: 'Harbour Point',
                value: 96,
              },
              {
                label: 'Tower B',
                value: 92,
              },
              {
                label: 'Northgate',
                value: 89,
              },
              {
                label: 'Bayview',
                value: 94,
              },
              {
                label: 'Westport',
                value: 90,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Automation',
        title: 'Smarter Operations That Scale',
        description:
          'Automate routine admin with the Workflow Builder and let RunnerAI surface what needs attention next.',
        points: [
          'Recurring templates and smart notifications',
          'Approvals routed by cost, site or asset',
          'Suggestions from RunnerAI based on live data',
        ],
        visual: {
          kind: 'log',
          title: 'RunnerAI activity',
          entries: [
            {
              when: '09:42',
              who: 'RunnerAI',
              what: 'suggested a PPM plan for 6 new chillers',
            },
            {
              when: '09:15',
              who: 'RunnerAI',
              what: 'flagged 3 sites with repeat HVAC faults',
            },
          ],
        },
        photo: {
          id: 'hvacTechnicians',
          alt: 'HVAC technicians servicing rooftop units',
        },
      },
      {
        tag: 'Compliance',
        title: 'Audit-Ready Records at Every Site',
        description:
          'Built-in audit trails, document storage and version control keep every service record, permit and inspection in order.',
        points: [
          'Time-stamped logs for every action',
          'Certificates stored with each asset',
          'Exports for any audit in a few clicks',
        ],
        visual: {
          kind: 'files',
          title: 'Compliance · Tower B',
          items: [
            {
              title: 'Fire safety certificate.pdf',
              location: 'Valid to Jun 2027',
              status: 'Valid',
              tone: 'done',
            },
            {
              title: 'Lift inspection Q3.pdf',
              location: 'Core lifts',
              status: 'Verified',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'inspectionClipboard',
          alt: 'Inspector completing a checklist on a clipboard',
        },
      },
      {
        tag: 'Collaboration',
        title: 'One Shared Record for Every Team',
        description:
          'In-house technicians, vendors and managers work from the same live record, on any phone, tablet or desktop.',
        points: [
          'Updates shared in real time',
          'Photo proof on every completed job',
          'Vendors join with quick access',
        ],
        visual: {
          kind: 'jobs',
          title: 'Team activity',
          items: [
            {
              title: 'Marco L. · In-house',
              location: 'Closed WO-2291',
              status: 'Done',
              tone: 'done',
            },
            {
              title: 'CoolAir · Vendor',
              location: 'Accepted WO-2304',
              status: 'Accepted',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'colleaguesTablets',
          alt: 'Two colleagues reviewing work on tablets',
        },
      },
    ],
    quote: {
      text: 'Fleet has cut our reactive maintenance load by nearly 40%. We’ve finally got our technicians, asset logs, and job records in one place.',
      author: 'Property Ops Lead',
      company: 'Mixed-Use Development',
      photo: {
        id: 'factoryTechnician',
        alt: 'Technician checking equipment with a tablet',
      },
    },
    faq: [
      {
        question: 'What is CAFM software?',
        answer:
          'Computer-aided facility management (CAFM) software brings buildings, assets, maintenance, documents and people together in one system, so facility teams can plan, run and report on every site.',
      },
      {
        question: 'What is the difference between CAFM and CMMS?',
        answer:
          'A CMMS focuses on maintenance work and assets, while CAFM covers the wider facility operation. Fleet combines both, with work orders, preventive maintenance, assets, documents and reporting in one platform.',
      },
      {
        question: 'Can Fleet manage multiple sites?',
        answer:
          'Yes. Fleet supports multi-site management natively. Set rules and workflows by property, assign regional supervisors and roll up reports across your portfolio.',
      },
      {
        question: 'Does Fleet integrate with my existing systems?',
        answer:
          'Yes. Fleet connects with accounting systems, ERPs, building management systems, tenant portals and access control through 20+ integrations and an open REST API.',
      },
      {
        question: 'How long does it take to implement Fleet?',
        answer:
          'Most teams are up and running in under 7 days. Our onboarding team helps you import assets, maintenance plans and users.',
      },
    ],
  },
  pms: {
    hero: {
      eyebrow: 'PMS/REMS',
      title: 'Property and Real Estate Management in One Platform',
      description:
        'Fleet gives real estate teams one live view of every property, from budgets and documents to maintenance, vendors and compliance.',
      highlights: ['Portfolio view', 'Budget tracking', 'Board-ready reports'],
      visual: {
        kind: 'asset',
        title: 'Property profile',
        name: 'Harbour Point',
        location: 'Mixed-use · 14 floors',
        status: 'Active',
        facts: [
          {
            label: 'Open jobs',
            value: '12',
          },
          {
            label: 'SLA met',
            value: '96.4%',
          },
          {
            label: 'Spend YTD',
            value: '$184k',
          },
          {
            label: 'Budget used',
            value: '71%',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Every Property Has Its Own Rhythm',
        description:
          'Leases, budgets, maintenance, vendors and compliance dates move at a different pace in every building.',
        points: ['Portfolio data', 'Property budgets', 'Owner reporting'],
      },
      answer: {
        title: 'One Source of Truth for Your Portfolio',
        description:
          'Fleet unifies operations data across every property, so asset managers, property managers and owners work from the same live numbers.',
      },
    },
    capabilities: {
      title: 'Run Your Portfolio with Clarity',
      description: 'Property operations, finance and maintenance connected in one platform.',
      tabs: [
        {
          icon: 'portfolio',
          label: 'Portfolio',
          title: 'Every Property at a Glance',
          description:
            'See open work, spend and compliance status for every property on one map and one dashboard.',
          points: [
            'Map and list views of every property',
            'Status by building, region or owner',
            'Drill down from portfolio to asset',
          ],
          visual: {
            kind: 'chart',
            title: 'Spend by property · YTD',
            stats: [
              {
                label: 'Spend YTD',
                value: '$184k',
              },
              {
                label: 'Properties',
                value: '14',
              },
            ],
            bars: [
              {
                label: 'Harbour Point',
                value: 82,
              },
              {
                label: 'Tower B',
                value: 64,
              },
              {
                label: 'Northgate',
                value: 48,
              },
              {
                label: 'Bayview',
                value: 36,
              },
              {
                label: 'Westport',
                value: 22,
              },
            ],
          },
        },
        {
          icon: 'budget',
          label: 'Budgets',
          title: 'Budgets and Costs Under Control',
          description:
            'Track maintenance spend by property, cost center and vendor against budget, with approvals for costs above set thresholds.',
          points: [
            'Budget versus actual for every property',
            'Spend by cost center and vendor',
            'Approvals above set thresholds',
          ],
          visual: {
            kind: 'jobs',
            title: 'Budget by property',
            items: [
              {
                title: 'Harbour Point',
                location: '$62k of $80k',
                status: '78% used',
                tone: 'info',
              },
              {
                title: 'Tower B',
                location: '$31k of $35k',
                status: '89% used',
                tone: 'due',
              },
              {
                title: 'Bayview',
                location: '$18k of $30k',
                status: '60% used',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'documents',
          label: 'Documents',
          title: 'From Leases to Service Reports',
          description:
            'Store leases, contracts, permits and service reports, linked to the property, unit and asset they belong to.',
          points: [
            'Files linked to properties and units',
            'Version history for every document',
            'Expiry reminders for permits and contracts',
          ],
          visual: {
            kind: 'files',
            title: 'Documents · Harbour Point',
            items: [
              {
                title: 'Lease schedule 2026.pdf',
                location: 'Leasing',
                status: 'Current',
                tone: 'done',
              },
              {
                title: 'Fire permit.pdf',
                location: 'Expires in 30 days',
                status: 'Renew',
                tone: 'due',
              },
              {
                title: 'HVAC service report.pdf',
                location: 'Plant room B2',
                status: 'Verified',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Reporting',
          title: 'Board-Ready Reporting',
          description:
            'Share read-only dashboards with owners and boards, and schedule reports for every stakeholder.',
          points: [
            'Read-only dashboards for owners',
            'Scheduled reports by email',
            'Portfolio-wide executive summaries',
          ],
          visual: {
            kind: 'steps',
            title: 'Owner report',
            steps: [
              {
                kind: 'Data',
                text: 'Spend, SLAs and open work',
              },
              {
                kind: 'Filter',
                text: 'Harbour Point · last quarter',
              },
              {
                kind: 'Send',
                text: 'First Monday of each month',
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Maintenance',
        title: 'Maintenance Connected to Every Property',
        description:
          'Work orders, preventive plans and asset history roll up to each property, so you see the operational health of your whole portfolio.',
        points: [
          'Open and overdue work by property',
          'Preventive compliance by building',
          'Asset costs rolled up to the portfolio',
        ],
        visual: {
          kind: 'jobs',
          title: 'Portfolio health',
          items: [
            {
              title: 'Harbour Point',
              location: '12 open jobs',
              status: 'On track',
              tone: 'done',
            },
            {
              title: 'Tower B',
              location: '3 overdue jobs',
              status: 'Review',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'apartmentBuilding',
          alt: 'Modern residential buildings with landscaped gardens',
        },
      },
      {
        tag: 'Multi-site',
        title: 'Scale from One Building to a Portfolio',
        description:
          'Set rules and workflows by property, assign regional teams and roll up reports for a clear view across every location.',
        points: [
          'Rules and workflows by property',
          'Regional teams and permissions',
          'Roll-up reporting for the portfolio',
        ],
        visual: {
          kind: 'steps',
          title: 'Regional rollout',
          steps: [
            {
              kind: 'Region',
              text: 'UAE · 6 properties',
            },
            {
              kind: 'Then',
              text: 'Apply approval rules',
            },
            {
              kind: 'Then',
              text: 'Roll up weekly report',
            },
          ],
        },
        photo: {
          id: 'engineersRooftop',
          alt: 'Two engineers reviewing a tablet on a rooftop',
        },
      },
      {
        tag: 'RunnerAI',
        title: 'Portfolio Answers in Seconds',
        description:
          'Ask RunnerAI for vendor performance by region or a risk dashboard for your top properties, and it builds the answer from live data.',
        points: [
          'Plain-language questions',
          'Dashboards built in seconds',
          'Answers from live portfolio data',
        ],
        visual: {
          kind: 'log',
          title: 'RunnerAI activity',
          entries: [
            {
              when: '10:05',
              who: 'You',
              what: 'asked for vendor performance in the UAE',
            },
            {
              when: '10:05',
              who: 'RunnerAI',
              what: 'built a dashboard for 6 properties',
            },
          ],
        },
        photo: {
          id: 'warehouseAnalytics',
          alt: 'Supervisor reviewing performance charts on a monitor',
        },
      },
    ],
    quote: {
      text: 'Fleet helped us cut reactive maintenance by nearly 40%. We now have visibility across all our sites and a faster response time.',
      author: 'Operations Director',
      company: 'Regional Mall Operator',
      photo: {
        id: 'mallAtrium',
        alt: 'Shoppers in a busy mall atrium',
      },
    },
    faq: [
      {
        question: 'What is a PMS or REMS?',
        answer:
          'A property management system (PMS) or real estate management system (REMS) brings the information about your properties together, from budgets and documents to maintenance and vendors, so teams can run and report on the portfolio.',
      },
      {
        question: 'How does Fleet support property management teams?',
        answer:
          'Fleet connects maintenance, assets, documents, vendors and budgets for every property, with dashboards that roll up from a single asset to the whole portfolio.',
      },
      {
        question: 'Can owners and boards see performance?',
        answer:
          'Yes. Share read-only dashboards with owners, committees and boards, and schedule reports to arrive by email.',
      },
      {
        question: 'Does Fleet connect to my property management or accounting system?',
        answer:
          'Yes. Fleet integrates with accounting, ERP and property management tools through 20+ integrations and an open REST API.',
      },
      {
        question: 'Can Fleet scale with our portfolio?',
        answer:
          'Yes. Fleet supports one building or hundreds, with rules by property, regional teams and portfolio-wide reporting.',
      },
    ],
  },
  workOrders: {
    hero: {
      eyebrow: 'Work Order',
      title: 'Work Order Management That Keeps Every Job Moving',
      description:
        'Create, assign, track and close every work order across your sites, with live updates from the field and full visibility for managers.',
      highlights: ['Mobile updates', 'SLA tracking', 'Photo proof'],
      visual: {
        kind: 'jobs',
        title: 'Work orders · Today',
        items: [
          {
            title: 'Boiler annual service',
            location: 'Northgate · Plant room',
            status: 'Due in 4h',
            tone: 'due',
          },
          {
            title: 'Water leak, Unit 3B',
            location: 'Tower B · Level 12',
            status: 'In progress',
            tone: 'info',
          },
          {
            title: 'Emergency lighting test',
            location: 'Bayview · All floors',
            status: 'Completed',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Every Request Needs a Clear Path',
        description:
          'Requests arrive by phone, email and chat, and each one needs an owner, a priority and a due date.',
        points: ['Many channels', 'Many teams', 'Many priorities'],
      },
      answer: {
        title: 'One Flow from Request to Resolution',
        description:
          'Fleet turns every request into a tracked work order, routed to the right team with SLAs and status updates built in.',
      },
    },
    capabilities: {
      title: 'Every Work Order, Start to Finish',
      description: 'Capture, assign, complete and report on jobs in one connected flow.',
      tabs: [
        {
          icon: 'requests',
          label: 'Requests',
          title: 'Capture Requests from Anywhere',
          description:
            'Requests from staff, tenants and email become work orders automatically, with photos and location attached.',
          points: [
            'Email to work order with Fleet Mail',
            'Photos and location on every request',
            'Requests logged from any channel',
          ],
          visual: {
            kind: 'steps',
            title: 'New request',
            steps: [
              {
                kind: 'Email',
                text: 'AC not cooling, Level 8',
              },
              {
                kind: 'Then',
                text: 'Work order WO-2310 created',
              },
              {
                kind: 'Then',
                text: 'Assigned to HVAC team',
              },
            ],
          },
        },
        {
          icon: 'routing',
          label: 'Assignment',
          title: 'Route Every Job to the Right Team',
          description:
            'Assign by location, trade or vendor, with priority levels and automatic notifications.',
          points: [
            'Routing rules by site and trade',
            'Priority levels with SLA targets',
            'Instant notifications on assignment',
          ],
          visual: {
            kind: 'jobs',
            title: 'Assignment queue',
            items: [
              {
                title: 'AC not cooling',
                location: 'Level 8 · HVAC',
                status: 'HVAC team',
                tone: 'info',
              },
              {
                title: 'Lift door fault',
                location: 'Core lifts · Lifts',
                status: 'LiftCo',
                tone: 'info',
              },
              {
                title: 'Leaking tap',
                location: 'Unit 1204 · Plumbing',
                status: 'In-house',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'mobile',
          label: 'Mobile',
          title: 'Updates Straight from the Field',
          description:
            'Technicians accept jobs, add photos and close work orders from any phone or tablet, iOS and Android.',
          points: [
            'Jobs accepted from the phone',
            'Photos and notes on completion',
            'Status shared with the team instantly',
          ],
          visual: {
            kind: 'log',
            title: 'WO-2310 activity',
            entries: [
              {
                when: '09:12',
                who: 'Fleet',
                what: 'created the work order from email',
              },
              {
                when: '09:20',
                who: 'Marco L.',
                what: 'accepted and set out to Level 8',
              },
              {
                when: '10:05',
                who: 'Marco L.',
                what: 'closed the job with 3 photos',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'SLAs',
          title: 'SLA Tracking on Every Job',
          description: 'Monitor open jobs, response times and overdue work from one dashboard.',
          points: [
            'Response and resolution times',
            'Overdue work highlighted',
            'SLA results by site and team',
          ],
          visual: {
            kind: 'chart',
            title: 'Average response time · hours',
            stats: [
              {
                label: 'SLA met',
                value: '96.4%',
              },
              {
                label: 'Open jobs',
                value: '128',
              },
            ],
            bars: [
              {
                label: 'Mon',
                value: 3,
              },
              {
                label: 'Tue',
                value: 2,
              },
              {
                label: 'Wed',
                value: 4,
              },
              {
                label: 'Thu',
                value: 2,
              },
              {
                label: 'Fri',
                value: 3,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Templates',
        title: 'Recurring Jobs on Autopilot',
        description:
          'Recurring templates create routine work orders on schedule, complete with checklists and assignees.',
        points: [
          'Templates for routine jobs',
          'Checklists attached automatically',
          'Assignees set by site and trade',
        ],
        visual: {
          kind: 'steps',
          title: 'Recurring job',
          steps: [
            {
              kind: 'Every',
              text: 'Monday, 06:00',
            },
            {
              kind: 'Then',
              text: 'Create cleaning checklist per floor',
            },
          ],
        },
        photo: {
          id: 'engineersRooftop',
          alt: 'Two engineers reviewing a tablet on a rooftop',
        },
      },
      {
        tag: 'Approvals',
        title: 'Cost Approvals Built In',
        description:
          'Quotes above set thresholds go to the right approver, and every decision is logged on the job.',
        points: [
          'Thresholds by site or category',
          'Approvals from phone or inbox',
          'Every decision on record',
        ],
        visual: {
          kind: 'jobs',
          title: 'Pending approvals',
          items: [
            {
              title: 'Chiller repair quote',
              location: '$6,800 · Harbour Point',
              status: 'Approve',
              tone: 'due',
            },
            {
              title: 'Lift door replacement',
              location: '$2,100 · Tower B',
              status: 'Approved',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'acFilterService',
          alt: 'Technician replacing an air conditioning filter',
        },
      },
      {
        tag: 'Reporting',
        title: 'Learn from Every Job',
        description:
          'Spot recurring issues by building, asset or vendor and use them to improve your preventive strategy.',
        points: ['Recurring issues by asset', 'Cost per job and per site', 'Trends over time'],
        visual: {
          kind: 'chart',
          title: 'Recurring issues · Q3',
          stats: [
            {
              label: 'Repeat faults',
              value: '14',
            },
            {
              label: 'Sites',
              value: '5',
            },
          ],
          bars: [
            {
              label: 'HVAC',
              value: 46,
            },
            {
              label: 'Lifts',
              value: 28,
            },
            {
              label: 'Plumbing',
              value: 19,
            },
            {
              label: 'Lighting',
              value: 12,
            },
            {
              label: 'Doors',
              value: 7,
            },
          ],
        },
        photo: {
          id: 'warehouseAnalytics',
          alt: 'Supervisor reviewing performance charts on a monitor',
        },
      },
    ],
    quote: {
      text: 'Other platforms felt too complex or generic. Fleet gave us a purpose-built solution with faster support.',
      author: 'Director of Maintenance',
      company: 'Logistics Hub',
      photo: {
        id: 'hvacTechnicians',
        alt: 'HVAC technicians servicing rooftop units',
      },
    },
    faq: [
      {
        question: 'What is work order management software?',
        answer:
          'Work order management software tracks every maintenance job from request to completion, including who is assigned, the priority, the due date, the cost and the proof of work.',
      },
      {
        question: 'How do requests become work orders?',
        answer:
          'Requests from staff, tenants and email become work orders automatically. With Fleet Mail, an email to your maintenance inbox creates a work order with its details attached.',
      },
      {
        question: 'Can vendors receive and update work orders?',
        answer:
          'Yes. Vendors receive jobs with quick access, then accept, update and close them with photos and notes.',
      },
      {
        question: 'Do technicians need special devices?',
        answer:
          'Fleet runs on any phone, tablet or desktop, iOS and Android, so technicians can start working right away.',
      },
      {
        question: 'How does Fleet track SLAs?',
        answer:
          'Every work order carries SLA targets for response and resolution, and dashboards show results by site, team and vendor.',
      },
    ],
  },
  fieldService: {
    hero: {
      eyebrow: 'Field Service Optimization',
      title: 'Field Service Optimization for Mobile Teams',
      description:
        'Send the right technician to the right site with the right information, and follow progress live from first visit to job closure.',
      highlights: ['Smart assignment', 'Mobile checklists', 'Live job status'],
      visual: {
        kind: 'log',
        title: 'Field activity · Today',
        entries: [
          {
            when: '08:10',
            who: 'Aisha K.',
            what: 'checked in at Northgate · Plant room',
          },
          {
            when: '09:35',
            who: 'CoolAir',
            what: 'completed AHU-07 service with readings',
          },
          {
            when: '10:20',
            who: 'Marco L.',
            what: 'started lift inspection at Tower B',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Field Teams Cover More Ground',
        description:
          'Technicians move between sites, trades and vendors every day, and each visit needs the right details on hand.',
        points: ['Multiple sites', 'Mixed trades', 'Tight SLAs'],
      },
      answer: {
        title: 'Every Visit Ready to Work',
        description:
          'Fleet gives technicians job details, asset history and checklists on their phone, and gives managers a live view of every team.',
      },
    },
    capabilities: {
      title: 'Optimize Every Field Visit',
      description: 'Plan, assign, complete and measure field work across your portfolio.',
      tabs: [
        {
          icon: 'scheduling',
          label: 'Scheduling',
          title: 'Plan the Day with Confidence',
          description:
            'Schedule preventive and reactive work by site, trade and availability, with workload balanced across teams and vendors.',
          points: [
            'Schedules by site, trade and availability',
            'Workload balanced across teams',
            'Preventive and reactive work together',
          ],
          visual: {
            kind: 'jobs',
            title: 'Today · Northgate',
            items: [
              {
                title: 'AHU-07 monthly service',
                location: '08:00 · Aisha K.',
                status: 'Scheduled',
                tone: 'info',
              },
              {
                title: 'Fire door inspection',
                location: '11:00 · Marco L.',
                status: 'Scheduled',
                tone: 'info',
              },
              {
                title: 'Pump room check',
                location: '14:00 · CoolAir',
                status: 'Confirmed',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'routing',
          label: 'Assignment',
          title: 'Assign by Location and Trade',
          description:
            'Route jobs to the nearest qualified technician or vendor, by building, zone or task type.',
          points: [
            'Routing by building and zone',
            'Skills and trades matched to jobs',
            'Vendors included in the same flow',
          ],
          visual: {
            kind: 'steps',
            title: 'Assignment rule',
            steps: [
              {
                kind: 'Trigger',
                text: 'HVAC job at Northgate',
              },
              {
                kind: 'If',
                text: 'Priority is high',
              },
              {
                kind: 'Then',
                text: 'Assign nearest HVAC technician',
              },
            ],
          },
        },
        {
          icon: 'mobile',
          label: 'On site',
          title: 'Everything Technicians Need on Site',
          description:
            'Asset history, manuals and checklists open from the job, with photos, readings and signatures captured on the spot.',
          points: [
            'Asset details opened by search or scan',
            'Checklists with photos and readings',
            'Signatures captured on completion',
          ],
          visual: {
            kind: 'asset',
            title: 'On-site asset',
            name: 'Lift L2',
            location: 'Northgate Mall · Core lifts',
            status: 'Service due',
            facts: [
              {
                label: 'Last inspection',
                value: '02 Aug',
              },
              {
                label: 'Certificate',
                value: 'Valid to Jan 2027',
              },
              {
                label: 'Manual',
                value: 'Lift L2 manual.pdf',
              },
              {
                label: 'Open jobs',
                value: '2',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Performance',
          title: 'Track Field Performance',
          description:
            'See response times, first-visit completion and SLA results by technician, team and vendor.',
          points: [
            'Response times by team',
            'First-visit completion rates',
            'SLA results by vendor',
          ],
          visual: {
            kind: 'chart',
            title: 'First-visit completion · Q3',
            stats: [
              {
                label: 'First visit',
                value: '87%',
              },
              {
                label: 'SLA met',
                value: '96.4%',
              },
            ],
            bars: [
              {
                label: 'HVAC',
                value: 88,
              },
              {
                label: 'Lifts',
                value: 84,
              },
              {
                label: 'Electrical',
                value: 91,
              },
              {
                label: 'Plumbing',
                value: 86,
              },
              {
                label: 'Fire',
                value: 93,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Mobile',
        title: 'Built for Every Site Condition',
        description:
          'Fleet performs in low-bandwidth areas like plant rooms, basements and car parks, so updates reach the team wherever work happens.',
        points: [
          'Performance in low-bandwidth areas',
          'Any phone or tablet, iOS and Android',
          'Photos and readings synced to the job',
        ],
        visual: {
          kind: 'jobs',
          title: 'Field updates',
          items: [
            {
              title: 'Basement pump check',
              location: 'Car park B2',
              status: 'Synced',
              tone: 'done',
            },
            {
              title: 'Rooftop AHU service',
              location: 'Roof level',
              status: 'Synced',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'factoryTechnician',
          alt: 'Technician checking equipment with a tablet',
        },
      },
      {
        tag: 'Communication',
        title: 'Real-Time Alerts and Approvals',
        description:
          'Technicians receive new jobs, approvals and updates instantly, and managers see status change the moment it happens.',
        points: [
          'Instant job notifications',
          'Approvals from the field',
          'Live status for managers',
        ],
        visual: {
          kind: 'log',
          title: 'Alerts',
          entries: [
            {
              when: '09:02',
              who: 'Fleet',
              what: 'sent urgent job WO-2318 to Aisha K.',
            },
            {
              when: '09:06',
              who: 'Aisha K.',
              what: 'accepted and is on the way',
            },
          ],
        },
        photo: {
          id: 'technicianPlantRoom',
          alt: 'Technician servicing equipment in a plant room',
        },
      },
      {
        tag: 'Vendors',
        title: 'Contractors in the Same Flow',
        description:
          'External technicians accept, update and close jobs through quick access, alongside your in-house team.',
        points: [
          'Quick access for vendors',
          'Same checklists and standards',
          'Vendor jobs on the same dashboard',
        ],
        visual: {
          kind: 'jobs',
          title: 'Vendor jobs',
          items: [
            {
              title: 'CoolAir · HVAC',
              location: '4 jobs today',
              status: 'On track',
              tone: 'done',
            },
            {
              title: 'LiftCo · Lifts',
              location: '2 jobs today',
              status: '1 due',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'hvacTechnicians',
          alt: 'HVAC technicians servicing rooftop units',
        },
      },
    ],
    quote: {
      text: 'Fleet has cut our reactive maintenance load by nearly 40%. We’ve finally got our technicians, asset logs, and job records in one place.',
      author: 'Property Ops Lead',
      company: 'Mixed-Use Development',
      photo: {
        id: 'warehouseTeam',
        alt: 'Warehouse team reviewing stock between racks',
      },
    },
    faq: [
      {
        question: 'What is field service optimization?',
        answer:
          'Field service optimization means planning, assigning and completing on-site work efficiently, so technicians reach the right job with the right information and managers can track results.',
      },
      {
        question: 'How does Fleet assign jobs?',
        answer:
          'Routing rules assign jobs by building, zone, trade or vendor, with priority levels and SLA targets on every job.',
      },
      {
        question: 'Does Fleet work in low-signal areas?',
        answer:
          'Fleet is designed to perform in low-bandwidth areas such as plant rooms, basements and car parks.',
      },
      {
        question: 'Can external contractors use Fleet?',
        answer:
          'Yes. Vendors get quick access to their jobs and follow the same checklists and standards as your in-house team.',
      },
      {
        question: 'What can managers see in real time?',
        answer:
          'Managers see job status, technician activity, overdue work and SLA results across every site as they happen.',
      },
    ],
  },
  tenants: {
    hero: {
      eyebrow: 'Tenant & Resident Management',
      title: 'Tenant and Resident Management That Builds Trust',
      description:
        'Give tenants and residents a simple way to raise requests, keep them updated at every step and resolve issues fast across every building.',
      highlights: ['Easy requests', 'Clear updates', 'Faster resolution'],
      visual: {
        kind: 'jobs',
        title: 'Resident requests · Bayview',
        items: [
          {
            title: 'Kitchen tap leak',
            location: 'Unit 1204',
            status: 'Resolved',
            tone: 'done',
          },
          {
            title: 'AC not cooling',
            location: 'Unit 806',
            status: 'Technician on the way',
            tone: 'info',
          },
          {
            title: 'Lobby light out',
            location: 'Tower A · Lobby',
            status: 'Scheduled',
            tone: 'due',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Residents Expect Fast, Visible Service',
        description:
          'Plumbing, air conditioning and lighting requests arrive every day, and residents want to know who is on it and when.',
        points: ['Daily requests', 'Many units', 'Shared spaces'],
      },
      answer: {
        title: 'Every Request Tracked to Resolution',
        description:
          'Fleet turns each request into a work order with a clear status, so residents, managers and technicians share the same view.',
      },
    },
    capabilities: {
      title: 'A Better Living and Working Experience',
      description: 'From the first request to closure, service residents and tenants can follow.',
      tabs: [
        {
          icon: 'requests',
          label: 'Requests',
          title: 'Simple Request Submission',
          description:
            'Requests arrive by email, through your tenant portal or from the front desk, and become work orders automatically.',
          points: [
            'Email to work order with Fleet Mail',
            'Tenant portal integrations',
            'Front-desk logging in seconds',
          ],
          visual: {
            kind: 'steps',
            title: 'Resident request',
            steps: [
              {
                kind: 'Email',
                text: 'Kitchen tap leaking, Unit 1204',
              },
              {
                kind: 'Then',
                text: 'Work order created with photos',
              },
              {
                kind: 'Then',
                text: 'Plumber assigned for today',
              },
            ],
          },
        },
        {
          icon: 'communication',
          label: 'Updates',
          title: 'Clear Status at Every Step',
          description:
            'Fleet keeps everyone informed from the initial report to job closure, with updates as the work progresses.',
          points: [
            'Updates at each stage of the job',
            'Photo proof on completion',
            'Status visible to the front desk',
          ],
          visual: {
            kind: 'log',
            title: 'Request updates',
            entries: [
              {
                when: '09:10',
                who: 'Fleet',
                what: 'received the request from Unit 1204',
              },
              {
                when: '09:25',
                who: 'Fleet',
                what: 'assigned the in-house plumber',
              },
              {
                when: '11:40',
                who: 'Marco L.',
                what: 'resolved the leak with photos',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Units',
          title: 'History for Every Unit',
          description:
            'Keep maintenance history for each unit and shared asset, from lifts and pumps to lobbies and car parks.',
          points: [
            'Unit-level maintenance history',
            'Shared assets on schedule',
            'Costs tracked by unit and zone',
          ],
          visual: {
            kind: 'asset',
            title: 'Unit profile',
            name: 'Unit 1204',
            location: 'Bayview · Tower A',
            status: 'Occupied',
            facts: [
              {
                label: 'Requests YTD',
                value: '4',
              },
              {
                label: 'Last visit',
                value: '18 Sep',
              },
              {
                label: 'Open jobs',
                value: '0',
              },
              {
                label: 'Cost YTD',
                value: '$640',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Reporting',
          title: 'Resolution Times Boards Can See',
          description:
            'Track resolution times and spend by building, zone or unit, and share read-only dashboards with committees and boards.',
          points: [
            'Resolution times by building',
            'Spend by zone and unit',
            'Read-only board dashboards',
          ],
          visual: {
            kind: 'chart',
            title: 'Average resolution · days',
            stats: [
              {
                label: 'Resolved',
                value: '312',
              },
              {
                label: 'Open',
                value: '8',
              },
            ],
            bars: [
              {
                label: 'Tower A',
                value: 2,
              },
              {
                label: 'Tower B',
                value: 3,
              },
              {
                label: 'Villas',
                value: 2,
              },
              {
                label: 'Podium',
                value: 1,
              },
              {
                label: 'Car park',
                value: 2,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Front of house',
        title: 'Front Desk, Security and Maintenance in Sync',
        description:
          'Role-specific views give concierge, security and maintenance teams exactly what they need to act quickly.',
        points: [
          'Views tailored to each role',
          'Requests logged at the front desk',
          'Handover notes shared across shifts',
        ],
        visual: {
          kind: 'jobs',
          title: 'Front desk',
          items: [
            {
              title: 'Parcel room light',
              location: 'Logged by concierge',
              status: 'Assigned',
              tone: 'info',
            },
            {
              title: 'Gate access fault',
              location: 'Logged by security',
              status: 'Resolved',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'supportAgent',
          alt: 'Customer service agent with a headset',
        },
      },
      {
        tag: 'Shared spaces',
        title: 'Shared Assets in Top Shape',
        description:
          'Scheduled tasks, real-time alerts and audit trails keep lifts, pumps, fire systems and amenities running.',
        points: [
          'Preventive schedules for shared assets',
          'Real-time alerts for faults',
          'Audit trails for every visit',
        ],
        visual: {
          kind: 'jobs',
          title: 'Shared assets · Bayview',
          items: [
            {
              title: 'Lift L1 monthly check',
              location: 'Tower A',
              status: 'Completed',
              tone: 'done',
            },
            {
              title: 'Pool pump service',
              location: 'Amenities',
              status: 'Due today',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'apartmentBuilding',
          alt: 'Modern residential buildings with landscaped gardens',
        },
      },
      {
        tag: 'Service',
        title: 'Hospitality-Grade Service',
        description:
          'Housekeeping, cleaning and maintenance run on schedule, so every space is ready for residents and guests.',
        points: [
          'Cleaning and housekeeping schedules',
          'Checklists with photo proof',
          'Service standards across buildings',
        ],
        visual: {
          kind: 'steps',
          title: 'Turnover checklist',
          steps: [
            {
              kind: 'Unit',
              text: 'Unit 806 · move-in Friday',
            },
            {
              kind: 'Then',
              text: 'Deep clean and inspection',
            },
            {
              kind: 'Then',
              text: 'Keys ready at the front desk',
            },
          ],
        },
        photo: {
          id: 'hotelHousekeeping',
          alt: 'Housekeeper preparing a room',
        },
      },
    ],
    quote: {
      text: 'Fleet has cut our reactive maintenance load by nearly 40%. We’ve finally got our technicians, asset logs, and job records in one place.',
      author: 'Property Ops Lead',
      company: 'Mixed-Use Development',
      photo: {
        id: 'technicianDrill',
        alt: 'Technician installing a fixture with a drill',
      },
    },
    faq: [
      {
        question: 'How do tenants and residents submit requests?',
        answer:
          'Requests arrive by email with Fleet Mail, through your tenant portal via integrations, or from front-desk and security staff, and each one becomes a work order.',
      },
      {
        question: 'How are residents kept informed?',
        answer:
          'Fleet keeps everyone in the loop from the initial report to job closure, with updates as the job moves forward and photo proof when it is done.',
      },
      {
        question: 'Can we track maintenance by unit?',
        answer:
          'Yes. Fleet keeps maintenance history and costs for each unit and shared asset, across every building and zone.',
      },
      {
        question: 'Can boards and committees see performance?',
        answer:
          'Yes. Share read-only dashboards with building committees and boards, with resolution times and spend by building.',
      },
      {
        question: 'Does Fleet work for commercial tenants too?',
        answer:
          'Yes. Fleet supports residential communities, offices, retail and mixed-use developments in one platform.',
      },
    ],
  },
  vendors: {
    hero: {
      eyebrow: 'Vendor & Supplier Management',
      title: 'Vendor and Supplier Management Across Every Site',
      description:
        'Coordinate contractors, quotes, contracts and performance in one platform, with every job, approval and document on record.',
      highlights: ['Vendor scorecards', 'Quote approvals', 'Contract tracking'],
      visual: {
        kind: 'jobs',
        title: 'Vendors · This month',
        items: [
          {
            title: 'CoolAir · HVAC',
            location: '42 jobs · 98% on time',
            status: 'Preferred',
            tone: 'done',
          },
          {
            title: 'LiftCo · Lifts',
            location: '18 jobs · 91% on time',
            status: 'Review due',
            tone: 'due',
          },
          {
            title: 'BrightSpark · Electrical',
            location: '27 jobs · 95% on time',
            status: 'Renewing',
            tone: 'info',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Partners Power Your Operation',
        description:
          'HVAC, lifts, cleaning and security partners each bring their own contracts, quotes, certificates and service levels.',
        points: ['Many contractors', 'Many contracts', 'Many quotes'],
      },
      answer: {
        title: 'Every Partner, One Shared Process',
        description:
          'Fleet gives vendors quick access to their jobs and gives you full visibility of cost, quality and compliance.',
      },
    },
    capabilities: {
      title: 'Manage Every Vendor Relationship',
      description: 'From onboarding to scorecards, vendor coordination in one place.',
      tabs: [
        {
          icon: 'vendors',
          label: 'Directory',
          title: 'A Complete Vendor Directory',
          description:
            'Keep contacts, trades, coverage areas, certificates and rates for every vendor in one place.',
          points: [
            'Trades and coverage areas',
            'Rates and contract terms',
            'Certificates and insurance on file',
          ],
          visual: {
            kind: 'jobs',
            title: 'Vendor directory',
            items: [
              {
                title: 'CoolAir',
                location: 'HVAC · All sites',
                status: 'Active',
                tone: 'done',
              },
              {
                title: 'LiftCo',
                location: 'Lifts · UAE region',
                status: 'Active',
                tone: 'done',
              },
              {
                title: 'SafeGuard',
                location: 'Fire safety · Tower B',
                status: 'Onboarding',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'approvals',
          label: 'Quotes',
          title: 'Quotes and Approvals in Flow',
          description:
            'Vendors submit quotes against the job, and approvals route by cost, site or category.',
          points: [
            'Quotes attached to the job',
            'Approvals routed by threshold',
            'Every decision on record',
          ],
          visual: {
            kind: 'steps',
            title: 'Quote approval',
            steps: [
              {
                kind: 'Quote',
                text: 'CoolAir · $3,800 chiller repair',
              },
              {
                kind: 'Approve',
                text: 'Finance manager approves from inbox',
              },
              {
                kind: 'Then',
                text: 'Vendor notified and job scheduled',
              },
            ],
          },
        },
        {
          icon: 'documents',
          label: 'Contracts',
          title: 'Contracts and Certificates on Track',
          description:
            'Track contract terms, insurance and certificates, with reminders before anything expires.',
          points: [
            'Contract terms on every vendor',
            'Insurance and certificate tracking',
            'Reminders before expiry',
          ],
          visual: {
            kind: 'files',
            title: 'Vendor documents',
            items: [
              {
                title: 'LiftCo service contract.pdf',
                location: 'Renews in 30 days',
                status: 'Renew',
                tone: 'due',
              },
              {
                title: 'CoolAir insurance.pdf',
                location: 'Valid to Mar 2027',
                status: 'Valid',
                tone: 'done',
              },
              {
                title: 'SafeGuard certificate.pdf',
                location: 'Uploaded today',
                status: 'Review',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Performance',
          title: 'Scorecards for Every Vendor',
          description: 'Compare response times, SLA results and costs across vendors and regions.',
          points: ['Response times by vendor', 'SLA results by region', 'Cost per job compared'],
          visual: {
            kind: 'chart',
            title: 'On-time completion · Q3',
            stats: [
              {
                label: 'Vendors',
                value: '24',
              },
              {
                label: 'On time',
                value: '95%',
              },
            ],
            bars: [
              {
                label: 'CoolAir',
                value: 98,
              },
              {
                label: 'LiftCo',
                value: 91,
              },
              {
                label: 'BrightSpark',
                value: 95,
              },
              {
                label: 'SafeGuard',
                value: 93,
              },
              {
                label: 'CleanPro',
                value: 96,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Access',
        title: 'Vendors Join in Minutes',
        description:
          'Vendors get quick access to their own jobs and documents, so new partners start working from day one.',
        points: [
          'Quick access with minimal setup',
          'Vendors see their own jobs only',
          'Same standards as in-house teams',
        ],
        visual: {
          kind: 'jobs',
          title: 'Vendor onboarding',
          items: [
            {
              title: 'SafeGuard',
              location: 'Access granted',
              status: 'Active',
              tone: 'done',
            },
            {
              title: 'CleanPro',
              location: 'Invitation sent',
              status: 'Pending',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'partnerMeeting',
          alt: 'Team meeting with partners around a table',
        },
      },
      {
        tag: 'Suppliers',
        title: 'Supplier Records Linked to Assets',
        description:
          'Link suppliers to the assets and contracts they support, with warranty and service details visible on every job.',
        points: [
          'Suppliers linked to assets',
          'Warranty details on every job',
          'Service history by supplier',
        ],
        visual: {
          kind: 'asset',
          title: 'Supplier link',
          name: 'Chiller CH-02',
          location: 'Supplier · CoolAir',
          status: 'Under warranty',
          facts: [
            {
              label: 'Warranty',
              value: 'Mar 2028',
            },
            {
              label: 'Jobs YTD',
              value: '6',
            },
            {
              label: 'Cost YTD',
              value: '$4,210',
            },
            {
              label: 'Contract',
              value: 'Annual',
            },
          ],
        },
        photo: {
          id: 'stockCheck',
          alt: 'Supply coordinator checking stock on shelves',
        },
      },
      {
        tag: 'Communication',
        title: 'Clear Communication with Every Partner',
        description:
          'Updates, photos and approvals flow between your team and vendors in real time, in Fleet or by email with Fleet Mail.',
        points: [
          'Updates and photos in real time',
          'Approvals by email or in Fleet',
          'Full history on every job',
        ],
        visual: {
          kind: 'log',
          title: 'Vendor thread · WO-2304',
          entries: [
            {
              when: '09:14',
              who: 'CoolAir',
              what: 'shared a quote for $3,800',
            },
            {
              when: '09:40',
              who: 'Finance',
              what: 'approved the quote by email',
            },
          ],
        },
        photo: {
          id: 'colleaguesTablets',
          alt: 'Two colleagues reviewing work on tablets',
        },
      },
    ],
    quote: {
      text: 'Other platforms felt too complex or generic. Fleet gave us a purpose-built solution with faster support.',
      author: 'Director of Maintenance',
      company: 'Logistics Hub',
      photo: {
        id: 'warehouseTeam',
        alt: 'Warehouse team reviewing stock between racks',
      },
    },
    faq: [
      {
        question: 'How do vendors access Fleet?',
        answer:
          'Vendors get quick access to their own jobs and documents with minimal setup, on any phone, tablet or desktop.',
      },
      {
        question: 'Can vendors submit quotes in Fleet?',
        answer:
          'Yes. Vendors attach quotes to the job, and approvals route to the right person by cost, site or category.',
      },
      {
        question: 'How does Fleet track vendor performance?',
        answer:
          'Fleet records response times, SLA results and costs for every job, and scorecards compare vendors by region and trade.',
      },
      {
        question: 'Can Fleet track vendor contracts and certificates?',
        answer:
          'Yes. Store contracts, insurance and certificates on each vendor, with reminders before anything expires.',
      },
      {
        question: 'Does Fleet work with vendors across regions?',
        answer:
          'Yes. Set coverage areas and rules by region, and compare vendor performance across your whole portfolio.',
      },
    ],
  },
}

export const industries: Record<IndustryPageId, CategoryPageContent> = {
  facilityManagement: {
    hero: {
      eyebrow: 'Facility Management',
      title: 'Facility Management Software for Every Site',
      description:
        'Fleet is your digital control panel for facility operations, from routine maintenance to unexpected repairs, so every building stays in peak condition.',
      highlights: ['Centralized control', 'Work order automation', 'Asset tracking'],
      visual: {
        kind: 'jobs',
        title: 'Facilities · Today',
        items: [
          {
            title: 'HVAC filter replacement',
            location: 'Tower B · Level 4',
            status: 'In progress',
            tone: 'info',
          },
          {
            title: 'Fire extinguisher check',
            location: 'Harbour Point · All floors',
            status: 'Due today',
            tone: 'due',
          },
          {
            title: 'Lobby door repair',
            location: 'Northgate · Entrance',
            status: 'Completed',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Facility Teams Juggle More Every Year',
        description:
          'Buildings, equipment, vendors and staff across one or many sites, each with their own schedules, budgets and compliance needs.',
        points: ['Many buildings', 'Many contractors', 'Many standards'],
      },
      answer: {
        title: 'One Platform for Every Facility',
        description:
          'Fleet brings maintenance, assets, vendors and compliance together in one cloud platform, so teams stay in command of every site.',
      },
    },
    capabilities: {
      title: 'Built for Modern Facility Teams',
      description:
        'Create, track and close jobs while staying aligned with budgets, compliance and real-world conditions.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Preventive',
          title: 'Preventive Plans for Every System',
          description:
            'Schedule and automate maintenance for HVAC, plumbing, lighting and fire safety by time or usage.',
          points: [
            'Recurring schedules by asset type',
            'Checklists for every visit',
            'Jobs created ahead of due dates',
          ],
          visual: {
            kind: 'steps',
            title: 'Preventive plan',
            steps: [
              {
                kind: 'Plan',
                text: 'Fire safety · monthly checks',
              },
              {
                kind: 'Then',
                text: 'Create work orders 7 days ahead',
              },
              {
                kind: 'Then',
                text: 'Assign to safety team with checklist',
              },
            ],
          },
        },
        {
          icon: 'workOrders',
          label: 'Repairs',
          title: 'Ad-Hoc Repairs, Tracked',
          description:
            'Track and assign repairs with image uploads, mobile updates and SLA timers on every job.',
          points: [
            'Requests with photos and location',
            'Jobs routed to teams or vendors',
            'SLA compliance on one dashboard',
          ],
          visual: {
            kind: 'jobs',
            title: 'Open repairs',
            items: [
              {
                title: 'Leaking pipe',
                location: 'Tower B · Basement',
                status: 'Assigned',
                tone: 'info',
              },
              {
                title: 'Broken window latch',
                location: 'Harbour Point · L7',
                status: 'Due today',
                tone: 'due',
              },
              {
                title: 'Faulty light sensor',
                location: 'Northgate · L2',
                status: 'Resolved',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Assets',
          title: 'Service History for Every Asset',
          description:
            'Log and store service history per building, floor or equipment, with costs and documents attached.',
          points: [
            'History by building, floor and asset',
            'Costs and downtime per asset',
            'Manuals and certificates attached',
          ],
          visual: {
            kind: 'asset',
            title: 'Asset profile',
            name: 'Boiler B-01',
            location: 'Northgate · Plant room',
            status: 'Operational',
            facts: [
              {
                label: 'Last service',
                value: '03 Sep',
              },
              {
                label: 'Next service',
                value: '03 Dec',
              },
              {
                label: 'Cost YTD',
                value: '$2,940',
              },
              {
                label: 'Open jobs',
                value: '0',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Reporting',
          title: 'Smarter Operational Decisions',
          description:
            'See which buildings have the most recurring issues, which assets use the most budget and which teams meet their SLAs.',
          points: [
            'Recurring issues by building',
            'Spend by asset and cost center',
            'SLA results by team',
          ],
          visual: {
            kind: 'chart',
            title: 'Open jobs by site',
            stats: [
              {
                label: 'Open jobs',
                value: '128',
              },
              {
                label: 'SLA met',
                value: '96.4%',
              },
            ],
            bars: [
              {
                label: 'Harbour Point',
                value: 34,
              },
              {
                label: 'Tower B',
                value: 29,
              },
              {
                label: 'Northgate',
                value: 26,
              },
              {
                label: 'Bayview',
                value: 22,
              },
              {
                label: 'Westport',
                value: 17,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Compliance',
        title: 'Stay Compliant and Accountable',
        description:
          'Built-in audit trails, document storage and version control keep every service record, permit and inspection on file.',
        points: [
          'Audit trails for every action',
          'Permits and certificates on record',
          'Inspection results linked to assets',
        ],
        visual: {
          kind: 'files',
          title: 'Compliance · Harbour Point',
          items: [
            {
              title: 'Fire safety certificate.pdf',
              location: 'Valid to Jun 2027',
              status: 'Valid',
              tone: 'done',
            },
            {
              title: 'Lift permit.pdf',
              location: 'Renews in 30 days',
              status: 'Renew',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'inspectionClipboard',
          alt: 'Inspector completing a checklist on a clipboard',
        },
      },
      {
        tag: 'Mobile',
        title: 'Real-Time Maintenance from Anywhere',
        description:
          'Fleet works on phones, tablets and desktops. Submit jobs on the go, get alerts when tasks are overdue and receive photo proof when they are done.',
        points: [
          'Jobs submitted from any device',
          'Alerts for overdue work',
          'Photo proof on completion',
        ],
        visual: {
          kind: 'log',
          title: 'Field updates',
          entries: [
            {
              when: '09:20',
              who: 'Marco L.',
              what: 'closed the boiler check with 4 photos',
            },
            {
              when: '09:05',
              who: 'Fleet',
              what: 'flagged 2 overdue jobs at Tower B',
            },
          ],
        },
        photo: {
          id: 'technicianPlantRoom',
          alt: 'Technician servicing equipment in a plant room',
        },
      },
      {
        tag: 'Multi-site',
        title: 'Scale Across Locations',
        description:
          'Set different rules and workflows by property, assign regional supervisors and roll up reports for a clear view across your portfolio.',
        points: [
          'Rules and workflows by property',
          'Regional supervisors',
          'Portfolio-wide reporting',
        ],
        visual: {
          kind: 'jobs',
          title: 'Portfolio · This week',
          items: [
            {
              title: 'Harbour Point',
              location: '34 jobs · 97% on time',
              status: 'On track',
              tone: 'done',
            },
            {
              title: 'Tower B',
              location: '29 jobs · 89% on time',
              status: 'Review',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'officeCorridor',
          alt: 'People walking through a bright office corridor',
        },
      },
    ],
    quote: {
      text: 'Fleet has cut our reactive maintenance load by nearly 40%. We’ve finally got our technicians, asset logs, and job records in one place.',
      author: 'Property Ops Lead',
      company: 'Mixed-Use Development',
      photo: {
        id: 'hvacTechnicians',
        alt: 'HVAC technicians servicing rooftop units',
      },
    },
    faq: [
      {
        question: 'What is facility management software?',
        answer:
          'Facility management software brings buildings, assets, maintenance, vendors and compliance records into one system, so teams can plan, run and report on every site.',
      },
      {
        question: 'Can Fleet manage school campuses, offices and mixed-use developments?',
        answer:
          'Yes. Fleet supports any type of facility, from a single building to campuses and multi-site portfolios, from one cloud-based platform.',
      },
      {
        question: 'How does Fleet help with compliance?',
        answer:
          'Fleet keeps audit trails, document storage and version control built in, so every service record, permit and inspection is ready for review.',
      },
      {
        question: 'Does Fleet connect to our other systems?',
        answer:
          'Yes. Fleet connects with accounting systems, access control, tenant portals and building management systems through 20+ integrations and an open REST API.',
      },
    ],
  },
  retail: {
    hero: {
      eyebrow: 'Shopping Malls & Retail',
      title: 'Mall and Retail Maintenance That Keeps Every Store Guest-Ready',
      description:
        'Fleet helps mall and retail teams stay proactive across stores, common areas and back-of-house, so every visit reflects your standards.',
      highlights: ['Fast work orders', 'Tenant coordination', 'Spend by floor and tenant'],
      visual: {
        kind: 'jobs',
        title: 'Northgate Mall · Today',
        items: [
          {
            title: 'Escalator E3 noise',
            location: 'Level 1 · Atrium',
            status: 'In progress',
            tone: 'info',
          },
          {
            title: 'Food court AC check',
            location: 'Level 3',
            status: 'Due today',
            tone: 'due',
          },
          {
            title: 'Store 214 lighting',
            location: 'Level 2 · Fashion',
            status: 'Completed',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Every Delay Is Visible to Shoppers',
        description:
          'High footfall puts lifts, escalators, air conditioning and lighting to work all day, and tenants expect fast, reliable service.',
        points: ['High footfall', 'Many tenants', 'Many vendors'],
      },
      answer: {
        title: 'Proactive Operations for Every Center',
        description:
          'Fleet combines fast work orders, preventive plans and tenant-specific history, so your team stays ahead of every issue.',
      },
    },
    capabilities: {
      title: 'Tailored for High-Traffic Retail',
      description:
        'From reactive jobs to preventive maintenance and tenant coordination, all in one platform.',
      tabs: [
        {
          icon: 'workOrders',
          label: 'Work orders',
          title: 'Fast Work Order Assignment',
          description:
            'Team members log jobs instantly from any device, with notifications, approvals and escalation built in.',
          points: [
            'Jobs logged from any device',
            'Escalation for urgent issues',
            'Approvals for third-party work',
          ],
          visual: {
            kind: 'jobs',
            title: 'Assigned today',
            items: [
              {
                title: 'Leaking ceiling',
                location: 'Level 2 · Corridor B',
                status: 'Plumbing team',
                tone: 'info',
              },
              {
                title: 'Gate shutter fault',
                location: 'Store 118',
                status: 'CoolAir',
                tone: 'info',
              },
              {
                title: 'Spill cleanup',
                location: 'Level 1 · Atrium',
                status: 'Done',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Preventive',
          title: 'Escalators, Lifts and HVAC on Schedule',
          description:
            'Automate preventive tasks for escalators, lifts and air conditioning, with SOPs technicians open on site.',
          points: [
            'PPM for escalators, lifts and HVAC',
            'SOPs available on site',
            'Vendors assigned by asset type',
          ],
          visual: {
            kind: 'steps',
            title: 'Escalator plan',
            steps: [
              {
                kind: 'Plan',
                text: 'Escalators E1–E6 · monthly service',
              },
              {
                kind: 'Then',
                text: 'Assign LiftCo with checklist',
              },
              {
                kind: 'Then',
                text: 'Log certificate to each asset',
              },
            ],
          },
        },
        {
          icon: 'tenants',
          label: 'Tenants',
          title: 'Work History by Store and Unit',
          description:
            'Tag work history by store, brand or unit, and coordinate with security and cleaning teams on shared dashboards.',
          points: [
            'History by store, brand and unit',
            'Shared dashboards for teams',
            'Tenant requests tracked to closure',
          ],
          visual: {
            kind: 'asset',
            title: 'Unit profile',
            name: 'Store 214',
            location: 'Northgate Mall · Level 2',
            status: 'Trading',
            facts: [
              {
                label: 'Requests YTD',
                value: '7',
              },
              {
                label: 'Last visit',
                value: '14 Sep',
              },
              {
                label: 'Open jobs',
                value: '1',
              },
              {
                label: 'Cost YTD',
                value: '$1,860',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Budgets',
          title: 'Better Visibility, Smarter Budgets',
          description:
            'Compare performance by location, asset class or vendor to prioritize CAPEX and OPEX planning.',
          points: [
            'Spend by floor, tenant and asset',
            'Recurring issues by zone',
            'Vendor performance compared',
          ],
          visual: {
            kind: 'chart',
            title: 'Maintenance spend by floor · Q3',
            stats: [
              {
                label: 'Spend Q3',
                value: '$62k',
              },
              {
                label: 'Recurring issues',
                value: '11',
              },
            ],
            bars: [
              {
                label: 'Level 1',
                value: 82,
              },
              {
                label: 'Level 2',
                value: 64,
              },
              {
                label: 'Level 3',
                value: 58,
              },
              {
                label: 'Car park',
                value: 31,
              },
              {
                label: 'Roof',
                value: 24,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Common areas',
        title: 'Common Areas Ready for Every Visitor',
        description:
          'Atriums, corridors, washrooms and food courts stay clean and working with scheduled tasks and fast reactive repairs.',
        points: [
          'Cleaning and inspection schedules',
          'Fast fixes for visible issues',
          'Photo proof on completion',
        ],
        visual: {
          kind: 'jobs',
          title: 'Common areas · Today',
          items: [
            {
              title: 'Washroom check L2',
              location: 'Every 2 hours',
              status: 'On track',
              tone: 'done',
            },
            {
              title: 'Atrium lighting',
              location: 'Level 1',
              status: 'Scheduled',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'mallAtrium',
          alt: 'Shoppers in a busy mall atrium',
        },
      },
      {
        tag: 'Vertical transport',
        title: 'Lifts and Escalators You Can Rely On',
        description:
          'Preventive plans, SOPs and certificates keep vertical transport running safely for shoppers.',
        points: [
          'Monthly service plans',
          'Certificates linked to assets',
          'Downtime tracked per unit',
        ],
        visual: {
          kind: 'asset',
          title: 'Asset profile',
          name: 'Escalator E3',
          location: 'Northgate Mall · Atrium',
          status: 'Service due',
          facts: [
            {
              label: 'Last service',
              value: '02 Sep',
            },
            {
              label: 'Certificate',
              value: 'Valid to Feb 2027',
            },
            {
              label: 'Downtime Q3',
              value: '3h',
            },
            {
              label: 'Vendor',
              value: 'LiftCo',
            },
          ],
        },
        photo: {
          id: 'liftTechnician',
          alt: 'Technician working inside a lift car',
        },
      },
      {
        tag: 'Teams',
        title: 'Security, Cleaning and Maintenance in Sync',
        description:
          'Shared dashboards keep security, cleaning and maintenance teams aligned on every open issue.',
        points: ['Shared dashboards', 'Issues logged by any team', 'Clear owners for every job'],
        visual: {
          kind: 'log',
          title: 'Shared activity',
          entries: [
            {
              when: '10:12',
              who: 'Security',
              what: 'logged a broken gate at entrance C',
            },
            {
              when: '10:20',
              who: 'Maintenance',
              what: 'assigned the gate repair to CoolAir',
            },
          ],
        },
        photo: {
          id: 'cleanerCorridor',
          alt: 'Cleaner disinfecting a door handle in a corridor',
        },
      },
    ],
    quote: {
      text: 'Fleet helped us cut reactive maintenance by nearly 40%. We now have visibility across all our sites and a faster response time.',
      author: 'Operations Director',
      company: 'Regional Mall Operator',
      photo: {
        id: 'acFilterService',
        alt: 'Technician replacing an air conditioning filter',
      },
    },
    faq: [
      {
        question: 'How does Fleet help shopping mall operations?',
        answer:
          'Fleet combines work orders, preventive maintenance for lifts, escalators and HVAC, tenant coordination and spend tracking in one platform for every center.',
      },
      {
        question: 'Can we track maintenance by tenant or unit?',
        answer:
          'Yes. Tag work history by store, brand or unit, and monitor maintenance spend per floor, tenant or asset.',
      },
      {
        question: 'Can third-party technicians use Fleet?',
        answer:
          'Yes. Vendors get quick access to their jobs, with permissions and approval layers set by your team.',
      },
      {
        question: 'Does Fleet scale to multiple malls?',
        answer:
          'Yes. Fleet supports one mall or 30 retail properties, with rules and reporting by property and region.',
      },
    ],
  },
  hospitality: {
    hero: {
      eyebrow: 'Hospitality, Food & Beverage',
      title: 'Hotel and F&B Maintenance That Protects Every Guest Experience',
      description:
        'Fleet helps hotels, resorts and restaurants stay proactive across guest rooms, kitchens and public spaces, with mobile work orders and built-in compliance.',
      highlights: ['Room-level tracking', 'Kitchen equipment checks', 'Safety compliance'],
      visual: {
        kind: 'jobs',
        title: 'Hotel requests · Today',
        items: [
          {
            title: 'AC not cooling',
            location: 'Room 1204',
            status: 'Technician on the way',
            tone: 'info',
          },
          {
            title: 'Leaking tap',
            location: 'Room 806',
            status: 'Resolved',
            tone: 'done',
          },
          {
            title: 'Cold room alarm',
            location: 'Main kitchen',
            status: 'Urgent',
            tone: 'overdue',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Guests Feel Every Detail',
        description:
          'A noisy AC, a leaking faucet or a broken lift shapes how guests remember their stay, and kitchens depend on every fridge and fryer.',
        points: ['Guest rooms', 'Kitchens', 'Public spaces'],
      },
      answer: {
        title: 'Operations Excellence Behind the Scenes',
        description:
          'Fleet keeps housekeeping, engineering, F&B and vendors coordinated, so issues are resolved fast and guests enjoy every moment.',
      },
    },
    capabilities: {
      title: 'Purpose-Built for Hospitality Operations',
      description: 'Front-of-house and back-of-house maintenance, in one platform.',
      tabs: [
        {
          icon: 'requests',
          label: 'Requests',
          title: 'Fast Job Reporting from Anywhere',
          description:
            'Staff log issues like leaking taps or AC failures from tablets or phones, tagged by room, suite or area.',
          points: [
            'Jobs tagged by room and area',
            'Logged by any team member',
            'Off-peak scheduling to protect guests',
          ],
          visual: {
            kind: 'steps',
            title: 'Guest request',
            steps: [
              {
                kind: 'Report',
                text: 'AC not cooling, Room 1204',
              },
              {
                kind: 'Then',
                text: 'Work order created and tagged',
              },
              {
                kind: 'Then',
                text: 'Engineer assigned, guest informed',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Preventive',
          title: 'Kitchens and Systems on Schedule',
          description:
            'Automate service for HVAC systems, fridges, ovens and elevators, with checklists for every visit.',
          points: [
            'Kitchen equipment checks',
            'HVAC and lift plans',
            'Checklists with photo proof',
          ],
          visual: {
            kind: 'jobs',
            title: 'Kitchen checks · This week',
            items: [
              {
                title: 'Walk-in fridge service',
                location: 'Main kitchen',
                status: 'Completed',
                tone: 'done',
              },
              {
                title: 'Grease trap cleaning',
                location: 'Back of house',
                status: 'Scheduled',
                tone: 'info',
              },
              {
                title: 'Combi oven inspection',
                location: 'Banquet kitchen',
                status: 'Due today',
                tone: 'due',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: 'Compliance',
          title: 'Health, Safety and Food Standards',
          description:
            'Track fire safety inspections and food storage audits, with records ready for every review.',
          points: [
            'Fire safety inspections',
            'Food storage audits',
            'Audit trails for every check',
          ],
          visual: {
            kind: 'files',
            title: 'Compliance · Harbour Hotel',
            items: [
              {
                title: 'Fire safety inspection.pdf',
                location: 'Completed 12 Sep',
                status: 'Valid',
                tone: 'done',
              },
              {
                title: 'Food storage audit.pdf',
                location: 'Due in 7 days',
                status: 'Due',
                tone: 'due',
              },
              {
                title: 'Lift certificate.pdf',
                location: 'Valid to Jan 2027',
                status: 'Valid',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Costs',
          title: 'Reduce Downtime and Operating Costs',
          description:
            'Track repair history and high-maintenance equipment to guide replacements and forecast budgets.',
          points: [
            'Repair history by asset',
            'Spend by rooms, kitchens and public spaces',
            'Replacement forecasts',
          ],
          visual: {
            kind: 'chart',
            title: 'Maintenance spend by area · Q3',
            stats: [
              {
                label: 'Spend Q3',
                value: '$48k',
              },
              {
                label: 'Rooms serviced',
                value: '312',
              },
            ],
            bars: [
              {
                label: 'Guest rooms',
                value: 74,
              },
              {
                label: 'Kitchens',
                value: 61,
              },
              {
                label: 'Public areas',
                value: 38,
              },
              {
                label: 'Spa & pool',
                value: 27,
              },
              {
                label: 'Back of house',
                value: 22,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Front of house',
        title: 'Every Room Ready for Arrival',
        description:
          'Housekeeping and engineering share one view of every room, so issues are fixed before the next guest checks in.',
        points: [
          'Room status shared across teams',
          'Repairs scheduled around occupancy',
          'Photo proof on completion',
        ],
        visual: {
          kind: 'jobs',
          title: 'Rooms · Level 12',
          items: [
            {
              title: 'Room 1204',
              location: 'AC repair',
              status: 'In progress',
              tone: 'info',
            },
            {
              title: 'Room 1210',
              location: 'Ready for arrival',
              status: 'Ready',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'hotelReception',
          alt: 'Guests checking in at a hotel reception',
        },
      },
      {
        tag: 'Back of house',
        title: 'Kitchens That Never Miss a Service',
        description:
          'Scheduled checks and fast repairs keep fridges, fryers and extraction running through every service.',
        points: [
          'Equipment checks before each service',
          'Vendors assigned for specialist systems',
          'Downtime tracked by appliance',
        ],
        visual: {
          kind: 'log',
          title: 'Kitchen activity',
          entries: [
            {
              when: '06:10',
              who: 'Chef Ana',
              what: 'reported the cold room alarm',
            },
            {
              when: '06:18',
              who: 'Fleet',
              what: 'assigned CoolAir as an urgent job',
            },
          ],
        },
        photo: {
          id: 'chefManager',
          alt: 'Chef and manager reviewing a tablet in a kitchen',
        },
      },
      {
        tag: 'Housekeeping',
        title: 'Housekeeping and Maintenance in Sync',
        description:
          'Tailored views for housekeeping, maintenance, F&B and front desk keep every team focused on the right work.',
        points: [
          'Views for each team',
          'Issues logged during cleaning',
          'Handover notes across shifts',
        ],
        visual: {
          kind: 'steps',
          title: 'Room turnover',
          steps: [
            {
              kind: 'Clean',
              text: 'Room 806 · checkout 11:00',
            },
            {
              kind: 'Then',
              text: 'Housekeeper logs dripping tap',
            },
            {
              kind: 'Then',
              text: 'Fixed before 15:00 arrival',
            },
          ],
        },
        photo: {
          id: 'hotelHousekeeping',
          alt: 'Housekeeper preparing a hotel room',
        },
      },
    ],
    quote: {
      text: 'Fleet has cut our reactive maintenance load by nearly 40%. We’ve finally got our technicians, asset logs, and job records in one place.',
      author: 'Property Ops Lead',
      company: 'Mixed-Use Development',
      photo: {
        id: 'busyKitchen',
        alt: 'Chefs working in a busy commercial kitchen',
      },
    },
    faq: [
      {
        question: 'How does Fleet support hotels and restaurants?',
        answer:
          'Fleet gives hospitality teams mobile work orders, preventive plans for kitchens and building systems, compliance tracking and reporting in one platform.',
      },
      {
        question: 'Can staff report issues from guest rooms?',
        answer:
          'Yes. Any team member can log an issue from a phone or tablet, tagged by room, suite or area, with photos.',
      },
      {
        question: 'Can Fleet track food safety and fire safety checks?',
        answer:
          'Yes. Fleet tracks fire safety inspections, food storage audits and other compliance tasks with audit trails.',
      },
      {
        question: 'Can we schedule maintenance around guests?',
        answer:
          'Yes. Plan work during off-peak hours and coordinate housekeeping and engineering so guests stay undisturbed.',
      },
    ],
  },
  healthcareEducation: {
    hero: {
      eyebrow: 'Healthcare & Education',
      title: 'Healthcare and Education Facility Maintenance You Can Trust',
      description:
        'Keep hospitals, clinics, schools and campuses safe, compliant and comfortable, with preventive plans, fast repairs and audit-ready records.',
      highlights: ['Preventive plans', 'Audit-ready records', 'Fast repairs'],
      visual: {
        kind: 'jobs',
        title: 'Campus requests · Today',
        items: [
          {
            title: 'Ward 3 AC check',
            location: 'East wing · Level 3',
            status: 'In progress',
            tone: 'info',
          },
          {
            title: 'Fire door inspection',
            location: 'Science block',
            status: 'Due today',
            tone: 'due',
          },
          {
            title: 'Classroom projector',
            location: 'Room B12',
            status: 'Completed',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Critical Spaces Need Reliable Systems',
        description:
          'Air conditioning, lifts, fire safety and hygiene keep patients, staff and students safe, and every check needs a record.',
        points: ['Patient areas', 'Classrooms', 'Strict standards'],
      },
      answer: {
        title: 'Safe, Compliant Buildings Every Day',
        description:
          'Fleet plans the maintenance, tracks every repair and keeps the records, so your teams focus on care and learning.',
      },
    },
    capabilities: {
      title: 'Built for Safe, Compliant Facilities',
      description: 'From air quality to fire safety, every system planned and proven.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Preventive',
          title: 'Preventive Plans for Critical Systems',
          description:
            'Schedule maintenance for HVAC, lifts, generators and fire safety, with checklists for every visit.',
          points: [
            'Plans for critical systems',
            'Checklists with readings',
            'Jobs created ahead of due dates',
          ],
          visual: {
            kind: 'steps',
            title: 'Preventive plan',
            steps: [
              {
                kind: 'Plan',
                text: 'Ward HVAC · monthly filter change',
              },
              {
                kind: 'Then',
                text: 'Create work order 7 days ahead',
              },
              {
                kind: 'Then',
                text: 'Assign to HVAC team with checklist',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: 'Compliance',
          title: 'Inspections and Certificates on Record',
          description:
            'Track inspections, certificates and permits, with reminders before anything expires.',
          points: [
            'Inspection records by building',
            'Certificates linked to assets',
            'Reminders before expiry',
          ],
          visual: {
            kind: 'files',
            title: 'Compliance · East wing',
            items: [
              {
                title: 'Fire door inspection.pdf',
                location: 'Completed 03 Sep',
                status: 'Valid',
                tone: 'done',
              },
              {
                title: 'Lift certificate.pdf',
                location: 'Renews in 30 days',
                status: 'Renew',
                tone: 'due',
              },
              {
                title: 'Generator test log.pdf',
                location: 'Monthly',
                status: 'Verified',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'workOrders',
          label: 'Repairs',
          title: 'Fast Response to Every Request',
          description:
            'Staff and teachers report issues from any device, and jobs reach the right team with priorities and SLAs.',
          points: [
            'Requests from any device',
            'Priorities for critical areas',
            'SLA timers on every job',
          ],
          visual: {
            kind: 'jobs',
            title: 'Open requests',
            items: [
              {
                title: 'Lab fume hood',
                location: 'Science block',
                status: 'Urgent',
                tone: 'overdue',
              },
              {
                title: 'Leaking sink',
                location: 'Ward 2',
                status: 'Assigned',
                tone: 'info',
              },
              {
                title: 'Broken chair',
                location: 'Room A04',
                status: 'Resolved',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Reporting',
          title: 'Clear Reporting for Leadership',
          description:
            'Show response times, compliance status and spend by building to leadership and regulators.',
          points: [
            'Response times by building',
            'Compliance status at a glance',
            'Exports for reviews',
          ],
          visual: {
            kind: 'chart',
            title: 'Planned work completed · Q3',
            stats: [
              {
                label: 'On time',
                value: '97%',
              },
              {
                label: 'Inspections',
                value: '186',
              },
            ],
            bars: [
              {
                label: 'East wing',
                value: 98,
              },
              {
                label: 'West wing',
                value: 96,
              },
              {
                label: 'Science',
                value: 95,
              },
              {
                label: 'Library',
                value: 99,
              },
              {
                label: 'Sports hall',
                value: 94,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Hygiene',
        title: 'Clean Spaces, Every Shift',
        description:
          'Cleaning schedules with checklists and photo proof keep wards, classrooms and washrooms at the right standard.',
        points: [
          'Cleaning schedules by area',
          'Checklists with photo proof',
          'Issues logged during rounds',
        ],
        visual: {
          kind: 'jobs',
          title: 'Cleaning rounds',
          items: [
            {
              title: 'Ward 3 washrooms',
              location: 'Every 2 hours',
              status: 'On track',
              tone: 'done',
            },
            {
              title: 'Canteen deep clean',
              location: 'Daily · 15:00',
              status: 'Scheduled',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'cleanerCorridor',
          alt: 'Cleaner disinfecting a door handle in a corridor',
        },
      },
      {
        tag: 'Air quality',
        title: 'Comfortable, Healthy Air',
        description:
          'Preventive HVAC plans keep filters, air handling units and cooling in top condition for patients and students.',
        points: [
          'Filter changes on schedule',
          'Readings logged on every visit',
          'Faults flagged early',
        ],
        visual: {
          kind: 'steps',
          title: 'Air quality plan',
          steps: [
            {
              kind: 'Every',
              text: 'Month · all air handling units',
            },
            {
              kind: 'Then',
              text: 'Replace filters and log readings',
            },
          ],
        },
        photo: {
          id: 'acFilterService',
          alt: 'Technician replacing an air conditioning filter',
        },
      },
      {
        tag: 'Power and safety',
        title: 'Power and Safety Systems Ready',
        description:
          'Generators, electrical panels and fire systems are tested on schedule, with every result on record.',
        points: [
          'Generator and panel tests',
          'Fire system inspections',
          'Results linked to each asset',
        ],
        visual: {
          kind: 'asset',
          title: 'Asset profile',
          name: 'Generator G-01',
          location: 'East wing · Plant room',
          status: 'Tested',
          facts: [
            {
              label: 'Last test',
              value: '01 Oct',
            },
            {
              label: 'Next test',
              value: '01 Nov',
            },
            {
              label: 'Run hours',
              value: '412',
            },
            {
              label: 'Open jobs',
              value: '0',
            },
          ],
        },
        photo: {
          id: 'electricianPanel',
          alt: 'Electrician working on a control panel',
        },
      },
    ],
    quote: {
      text: 'Fleet has cut our reactive maintenance load by nearly 40%. We’ve finally got our technicians, asset logs, and job records in one place.',
      author: 'Property Ops Lead',
      company: 'Mixed-Use Development',
      photo: {
        id: 'officeCorridor',
        alt: 'People walking through a bright office corridor',
      },
    },
    faq: [
      {
        question: 'Is Fleet suitable for hospitals, clinics and schools?',
        answer:
          'Yes. Fleet supports healthcare and education facilities of any size, from a single clinic or school to multi-site campuses.',
      },
      {
        question: 'How does Fleet help with inspections and audits?',
        answer:
          'Fleet keeps inspections, certificates and permits on record with audit trails and reminders before anything expires.',
      },
      {
        question: 'Can staff and teachers report issues?',
        answer:
          'Yes. Anyone you invite can report issues from a phone or tablet, and requests become work orders with priorities and SLAs.',
      },
      {
        question: 'Can we report performance to leadership?',
        answer:
          'Yes. Dashboards and exports show response times, compliance status and spend by building.',
      },
    ],
  },
  logistics: {
    hero: {
      eyebrow: 'Shipping & Logistics',
      title: 'Logistics Maintenance That Keeps Every Shipment Moving',
      description:
        'Fleet helps logistics teams keep warehouses, docks, equipment and vehicles running, with fast task creation and preventive plans across every hub.',
      highlights: ['Fast task creation', 'Fleet-wide preventive plans', 'Downtime tracking'],
      visual: {
        kind: 'jobs',
        title: 'Westport DC · Today',
        items: [
          {
            title: 'Dock door 4 fault',
            location: 'Loading bay',
            status: 'Urgent',
            tone: 'overdue',
          },
          {
            title: 'Conveyor C2 service',
            location: 'Sortation',
            status: 'In progress',
            tone: 'info',
          },
          {
            title: 'Forklift FL-07 check',
            location: 'Yard',
            status: 'Completed',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Every Hour of Downtime Ripples Outward',
        description:
          'When a dock door fails or a loading belt breaks, schedules shift for customers, carriers and teams.',
        points: ['Loading docks', 'Conveyors', 'Vehicles'],
      },
      answer: {
        title: 'Throughput Protected by Proactive Maintenance',
        description:
          'Fleet logs issues from the floor, schedules preventive work and tracks every asset, so shipments stay on time.',
      },
    },
    capabilities: {
      title: 'Built for Fast-Paced Logistics',
      description: 'Warehouses, equipment and vehicles managed from one dashboard.',
      tabs: [
        {
          icon: 'workOrders',
          label: 'Floor requests',
          title: 'Fast Task Creation from the Floor',
          description:
            'Technicians and supervisors log issues instantly from mobile, and jobs reach in-house teams or vendors by region or role.',
          points: [
            'Issues logged from mobile',
            'Jobs routed by region or role',
            'Vendors in the same flow',
          ],
          visual: {
            kind: 'jobs',
            title: 'Open jobs',
            items: [
              {
                title: 'Dock leveler stuck',
                location: 'Bay 6',
                status: 'Assigned',
                tone: 'info',
              },
              {
                title: 'Racking damage',
                location: 'Aisle 14',
                status: 'Inspect',
                tone: 'due',
              },
              {
                title: 'Charger fault',
                location: 'Forklift bay',
                status: 'Resolved',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Preventive',
          title: 'Never Miss a Critical Check',
          description:
            'Automate servicing for vehicles, conveyors and lifts, with triggers by mileage, operating hours or time.',
          points: [
            'Triggers by hours, mileage or time',
            'Automated inspection reminders',
            'Fewer emergency repairs',
          ],
          visual: {
            kind: 'steps',
            title: 'Usage-based plan',
            steps: [
              {
                kind: 'Trigger',
                text: 'Forklift FL-07 reaches 500 hours',
              },
              {
                kind: 'Then',
                text: 'Create service work order',
              },
              {
                kind: 'Then',
                text: 'Assign to fleet workshop',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Equipment',
          title: 'Cost and History for Every Asset',
          description:
            'See repair history and cost per forklift, vehicle or system, and identify which equipment causes bottlenecks.',
          points: [
            'Repair history per asset',
            'Cost per forklift and system',
            'Bottlenecks highlighted',
          ],
          visual: {
            kind: 'asset',
            title: 'Asset profile',
            name: 'Conveyor C2',
            location: 'Westport DC · Sortation',
            status: 'Operational',
            facts: [
              {
                label: 'Run hours',
                value: '6,420',
              },
              {
                label: 'Last service',
                value: '18 Sep',
              },
              {
                label: 'Downtime Q3',
                value: '5h',
              },
              {
                label: 'Cost YTD',
                value: '$7,850',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Insights',
          title: 'Downtime and Response Times',
          description:
            'Monitor downtime and response times across locations and spot early-warning signs.',
          points: [
            'Downtime by site and asset',
            'Response times by team',
            'Trends that flag risk early',
          ],
          visual: {
            kind: 'chart',
            title: 'Downtime hours by site · Q3',
            stats: [
              {
                label: 'Downtime Q3',
                value: '38h',
              },
              {
                label: 'SLA met',
                value: '95.1%',
              },
            ],
            bars: [
              {
                label: 'Westport DC',
                value: 14,
              },
              {
                label: 'Harbour hub',
                value: 9,
              },
              {
                label: 'Northgate DC',
                value: 7,
              },
              {
                label: 'Airport',
                value: 5,
              },
              {
                label: 'Bayview',
                value: 3,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Warehouses',
        title: 'Warehouses and Docks Ready for Every Shift',
        description:
          'Docks, doors, racking and lighting are inspected on schedule, and faults are logged and resolved fast.',
        points: [
          'Dock and door inspections',
          'Racking checks on schedule',
          'Fast fixes for floor issues',
        ],
        visual: {
          kind: 'jobs',
          title: 'Dock checks · Today',
          items: [
            {
              title: 'Dock doors 1–8',
              location: 'Daily inspection',
              status: 'Completed',
              tone: 'done',
            },
            {
              title: 'Dock leveler 6',
              location: 'Fault reported',
              status: 'Assigned',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'warehouseTeam',
          alt: 'Warehouse team reviewing stock between racks',
        },
      },
      {
        tag: 'Vehicles',
        title: 'Vehicles Road-Ready and Compliant',
        description:
          'Trucks, vans and service vehicles share the same dashboard, from maintenance logs to registrations and inspections.',
        points: [
          'Maintenance by mileage and hours',
          'Inspection and registration alerts',
          'Records ready for audits',
        ],
        visual: {
          kind: 'log',
          title: 'Vehicle alerts',
          entries: [
            {
              when: '08:00',
              who: 'Fleet',
              what: 'scheduled service for Van V-12 at 30,000 km',
            },
            {
              when: '08:05',
              who: 'Fleet',
              what: 'flagged registration renewal for Truck T-03',
            },
          ],
        },
        photo: {
          id: 'fleetManager',
          alt: 'Fleet manager with a tablet in front of trucks',
        },
      },
      {
        tag: 'Insights',
        title: 'Minimize Disruptions, Maximize Throughput',
        description:
          'Performance trends show which equipment slows operations, so you plan replacements before they cost you.',
        points: [
          'Bottleneck equipment highlighted',
          'Replacement planning',
          'Multi-location visibility',
        ],
        visual: {
          kind: 'chart',
          title: 'Top downtime drivers · Q3',
          stats: [],
          bars: [
            {
              label: 'Dock doors',
              value: 12,
            },
            {
              label: 'Conveyors',
              value: 9,
            },
            {
              label: 'Forklifts',
              value: 7,
            },
            {
              label: 'Racking',
              value: 4,
            },
            {
              label: 'Lighting',
              value: 2,
            },
          ],
        },
        photo: {
          id: 'warehouseAnalytics',
          alt: 'Supervisor reviewing performance charts on a monitor',
        },
      },
    ],
    quote: {
      text: 'Other platforms felt too complex or generic. Fleet gave us a purpose-built solution with faster support.',
      author: 'Director of Maintenance',
      company: 'Logistics Hub',
      photo: {
        id: 'stockCheck',
        alt: 'Supply coordinator checking stock on shelves',
      },
    },
    faq: [
      {
        question: 'How does Fleet support logistics and warehouse operations?',
        answer:
          'Fleet helps teams log issues from the floor, schedule preventive work for docks, conveyors, lifts and vehicles, and track downtime across every hub.',
      },
      {
        question: 'Can maintenance be triggered by usage?',
        answer:
          'Yes. Set maintenance triggers by mileage, operating hours or time, with automated reminders for inspections and servicing.',
      },
      {
        question: 'Can Fleet manage our vehicles too?',
        answer:
          'Yes. Fleet’s vehicle management gives logistics fleets the same visibility, from maintenance logs and registrations to driver records.',
      },
      {
        question: 'Can vendors work in Fleet?',
        answer:
          'Yes. Assign jobs to in-house teams or third-party vendors by region or role, with access, approvals and SLAs controlled by you.',
      },
    ],
  },
  hvacLifts: {
    hero: {
      eyebrow: 'HVAC, Lifts & Elevators',
      title: 'HVAC, Lift and Elevator Maintenance on Schedule',
      description:
        'Plan, perform and prove maintenance for air conditioning, lifts and escalators across every building, with certificates and vendor coordination built in.',
      highlights: ['Recurring schedules', 'Certificates on record', 'Vendor coordination'],
      visual: {
        kind: 'jobs',
        title: 'Critical systems · Today',
        items: [
          {
            title: 'Chiller CH-02 service',
            location: 'Harbour Point · Plant room',
            status: 'In progress',
            tone: 'info',
          },
          {
            title: 'Lift L2 monthly check',
            location: 'Tower B · Core',
            status: 'Due today',
            tone: 'due',
          },
          {
            title: 'Escalator E3 inspection',
            location: 'Northgate Mall',
            status: 'Completed',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Critical Systems Never Take a Day Off',
        description:
          'Cooling, lifts and escalators run every day, and each needs regular service, certificates and fast response when faults appear.',
        points: ['Chillers and AHUs', 'Lifts and escalators', 'Specialist vendors'],
      },
      answer: {
        title: 'Every System Planned and Proven',
        description:
          'Fleet schedules every service, routes it to the right specialist and keeps the certificate on the asset.',
      },
    },
    capabilities: {
      title: 'Keep Building Systems Running',
      description: 'Preventive plans, specialist vendors and certificates in one place.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Schedules',
          title: 'Recurring Service for Every Unit',
          description:
            'Schedule chillers, AHUs, lifts and escalators by time or usage, with best-practice checklists.',
          points: [
            'Schedules by time or usage',
            'Checklists by system type',
            'Work orders ahead of due dates',
          ],
          visual: {
            kind: 'steps',
            title: 'Lift service plan',
            steps: [
              {
                kind: 'Plan',
                text: 'Lifts L1–L4 · monthly service',
              },
              {
                kind: 'Then',
                text: 'Assign LiftCo with checklist',
              },
              {
                kind: 'Then',
                text: 'Attach service certificate',
              },
            ],
          },
        },
        {
          icon: 'vendors',
          label: 'Vendors',
          title: 'Specialists Assigned Automatically',
          description:
            'Route HVAC and lift work to the right specialist vendor by site and system, with SLAs on every job.',
          points: [
            'Vendors by system and site',
            'SLAs on every job',
            'Quotes and approvals in flow',
          ],
          visual: {
            kind: 'jobs',
            title: 'Specialist jobs',
            items: [
              {
                title: 'CoolAir · HVAC',
                location: '6 jobs today',
                status: 'On track',
                tone: 'done',
              },
              {
                title: 'LiftCo · Lifts',
                location: '3 jobs today',
                status: '1 due',
                tone: 'due',
              },
              {
                title: 'Escalift · Escalators',
                location: '2 jobs today',
                status: 'Scheduled',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Assets',
          title: 'Certificates and History per Unit',
          description:
            'Every unit keeps its service history, certificates, manuals and downtime in one profile.',
          points: [
            'Certificates linked to each unit',
            'Service history and costs',
            'Manuals available on site',
          ],
          visual: {
            kind: 'asset',
            title: 'Asset profile',
            name: 'Lift L2',
            location: 'Tower B · Core lifts',
            status: 'Service due',
            facts: [
              {
                label: 'Last service',
                value: '02 Sep',
              },
              {
                label: 'Certificate',
                value: 'Valid to Jan 2027',
              },
              {
                label: 'Downtime Q3',
                value: '4h',
              },
              {
                label: 'Vendor',
                value: 'LiftCo',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Downtime',
          title: 'Downtime Insight by System',
          description:
            'Spot units with recurring faults and plan replacements with lifecycle data.',
          points: [
            'Downtime by system and site',
            'Recurring faults highlighted',
            'Replacement forecasts',
          ],
          visual: {
            kind: 'chart',
            title: 'Downtime hours by system · Q3',
            stats: [
              {
                label: 'Total downtime',
                value: '61h',
              },
              {
                label: 'Units at risk',
                value: '5',
              },
            ],
            bars: [
              {
                label: 'Chillers',
                value: 22,
              },
              {
                label: 'AHUs',
                value: 15,
              },
              {
                label: 'Lifts',
                value: 12,
              },
              {
                label: 'Escalators',
                value: 8,
              },
              {
                label: 'Split units',
                value: 4,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'HVAC',
        title: 'Cooling That Keeps Up with Demand',
        description:
          'Chillers, AHUs and rooftop units are serviced on schedule, with readings logged on every visit.',
        points: ['Readings logged on site', 'Filter and coil plans', 'Faults flagged early'],
        visual: {
          kind: 'jobs',
          title: 'HVAC plan · October',
          items: [
            {
              title: 'Rooftop units RTU 1–12',
              location: 'Harbour Point',
              status: 'Scheduled',
              tone: 'info',
            },
            {
              title: 'AHU-07 filter change',
              location: 'Tower B',
              status: 'Completed',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'rooftopUnits',
          alt: 'Rooftop air conditioning units on a commercial building',
        },
      },
      {
        tag: 'Lifts',
        title: 'Lifts and Escalators Certified and Safe',
        description:
          'Monthly checks, statutory inspections and certificates stay on track for every unit.',
        points: [
          'Monthly checks by vendor',
          'Statutory inspections tracked',
          'Certificates renewed on time',
        ],
        visual: {
          kind: 'files',
          title: 'Lift certificates',
          items: [
            {
              title: 'Lift L1 certificate.pdf',
              location: 'Valid to Mar 2027',
              status: 'Valid',
              tone: 'done',
            },
            {
              title: 'Lift L2 certificate.pdf',
              location: 'Renews in 30 days',
              status: 'Renew',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'liftShaft',
          alt: 'Technicians working inside a lift shaft',
        },
      },
      {
        tag: 'Response',
        title: 'Fast Response When Faults Appear',
        description:
          'Faults from BMS alarms or staff reports become prioritized work orders for the right specialist.',
        points: [
          'BMS alarms to work orders',
          'Priority by system and site',
          'Vendors notified instantly',
        ],
        visual: {
          kind: 'log',
          title: 'Fault response',
          entries: [
            {
              when: '14:02',
              who: 'BMS',
              what: 'reported high temperature at AHU-07',
            },
            {
              when: '14:03',
              who: 'Fleet',
              what: 'created an urgent job for CoolAir',
            },
          ],
        },
        photo: {
          id: 'hvacTechnicians',
          alt: 'HVAC technicians servicing rooftop units',
        },
      },
    ],
    quote: {
      text: 'Fleet has cut our reactive maintenance load by nearly 40%. We’ve finally got our technicians, asset logs, and job records in one place.',
      author: 'Property Ops Lead',
      company: 'Mixed-Use Development',
      photo: {
        id: 'liftTechnician',
        alt: 'Technician working inside a lift car',
      },
    },
    faq: [
      {
        question: 'Can Fleet manage HVAC and lift maintenance together?',
        answer:
          'Yes. Fleet plans and tracks HVAC, lift and escalator maintenance in one platform, with schedules, vendors and certificates for every unit.',
      },
      {
        question: 'Can Fleet keep lift certificates on file?',
        answer:
          'Yes. Certificates attach to each lift or escalator, with reminders before they expire.',
      },
      {
        question: 'Can BMS alarms create work orders?',
        answer:
          'Yes. Through building management system integrations, alarms and readings can feed your maintenance plans and create jobs.',
      },
      {
        question: 'How do specialist vendors work in Fleet?',
        answer:
          'Vendors receive jobs for their systems and sites, submit quotes, and close work with photos and certificates.',
      },
    ],
  },
  dataCenters: {
    hero: {
      eyebrow: 'Data Centers',
      title: 'Data Center Facility Maintenance That Protects Uptime',
      description:
        'Keep cooling, power and safety systems in peak condition with preventive plans, BMS-connected alerts and complete change records.',
      highlights: ['Cooling and power plans', 'BMS-connected alerts', 'Complete change records'],
      visual: {
        kind: 'jobs',
        title: 'Data hall · Today',
        items: [
          {
            title: 'CRAH unit 4 filter change',
            location: 'Hall A',
            status: 'In progress',
            tone: 'info',
          },
          {
            title: 'UPS battery inspection',
            location: 'Power room 2',
            status: 'Due today',
            tone: 'due',
          },
          {
            title: 'Generator load test',
            location: 'Yard',
            status: 'Completed',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Uptime Depends on the Building',
        description:
          'Cooling, power distribution and fire suppression work around the clock, and every intervention needs planning and a record.',
        points: ['Cooling', 'Power', 'Fire suppression'],
      },
      answer: {
        title: 'Every System Maintained with Precision',
        description:
          'Fleet schedules every task, routes it to qualified teams and records every change for audits and SLAs.',
      },
    },
    capabilities: {
      title: 'Built for Mission-Critical Facilities',
      description: 'Planned maintenance, controlled changes and full traceability.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Preventive',
          title: 'Plans for Cooling and Power',
          description:
            'Schedule CRAH units, chillers, UPS systems and generators by time or run hours, with detailed checklists.',
          points: [
            'Plans by time or run hours',
            'Detailed checklists and readings',
            'Work planned ahead of windows',
          ],
          visual: {
            kind: 'steps',
            title: 'Generator plan',
            steps: [
              {
                kind: 'Every',
                text: 'Month · first Tuesday',
              },
              {
                kind: 'Then',
                text: 'Run load test for 60 minutes',
              },
              {
                kind: 'Then',
                text: 'Log readings to G-01 history',
              },
            ],
          },
        },
        {
          icon: 'approvals',
          label: 'Changes',
          title: 'Controlled Changes',
          description:
            'Approval checkpoints keep every intervention planned, approved and recorded before work starts.',
          points: [
            'Approvals before work starts',
            'Maintenance windows respected',
            'Every change on record',
          ],
          visual: {
            kind: 'jobs',
            title: 'Change requests',
            items: [
              {
                title: 'UPS module swap',
                location: 'Power room 2',
                status: 'Approve',
                tone: 'due',
              },
              {
                title: 'CRAH firmware update',
                location: 'Hall A',
                status: 'Approved',
                tone: 'done',
              },
              {
                title: 'PDU inspection',
                location: 'Hall B',
                status: 'Scheduled',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Assets',
          title: 'Complete Asset History',
          description:
            'Every chiller, UPS, PDU and generator keeps its service history, readings and documents.',
          points: [
            'Readings and history per asset',
            'Warranty and contract details',
            'Manuals available on site',
          ],
          visual: {
            kind: 'asset',
            title: 'Asset profile',
            name: 'UPS-2B',
            location: 'Power room 2',
            status: 'Operational',
            facts: [
              {
                label: 'Last service',
                value: '15 Aug',
              },
              {
                label: 'Battery age',
                value: '3 years',
              },
              {
                label: 'Load',
                value: '62%',
              },
              {
                label: 'Open jobs',
                value: '1',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Reporting',
          title: 'SLA-Ready Reporting',
          description:
            'Show planned work completion, response times and change history to customers and auditors.',
          points: ['Planned work completion', 'Response times by priority', 'Exports for audits'],
          visual: {
            kind: 'chart',
            title: 'Planned work completed · Q3',
            stats: [
              {
                label: 'On time',
                value: '99.2%',
              },
              {
                label: 'Changes',
                value: '84',
              },
            ],
            bars: [
              {
                label: 'Cooling',
                value: 99,
              },
              {
                label: 'Power',
                value: 100,
              },
              {
                label: 'Fire',
                value: 98,
              },
              {
                label: 'Security',
                value: 99,
              },
              {
                label: 'Building',
                value: 97,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Cooling',
        title: 'Cooling Under Constant Watch',
        description:
          'BMS alarms and readings feed preventive plans, so cooling units are serviced before performance drops.',
        points: ['BMS readings in plans', 'Filter and coil schedules', 'Alerts become work orders'],
        visual: {
          kind: 'log',
          title: 'Cooling alerts',
          entries: [
            {
              when: '02:14',
              who: 'BMS',
              what: 'reported rising supply temperature at CRAH 4',
            },
            {
              when: '02:15',
              who: 'Fleet',
              what: 'created a priority job for the on-call engineer',
            },
          ],
        },
        photo: {
          id: 'dataCenter',
          alt: 'Rows of server racks in a data center',
        },
      },
      {
        tag: 'Power',
        title: 'Power Systems Tested and Ready',
        description:
          'UPS, batteries, PDUs and generators are tested on schedule, with every result recorded.',
        points: [
          'UPS and battery inspections',
          'Generator load tests',
          'Results linked to each asset',
        ],
        visual: {
          kind: 'jobs',
          title: 'Power checks · October',
          items: [
            {
              title: 'Generator G-01 load test',
              location: 'Monthly',
              status: 'Completed',
              tone: 'done',
            },
            {
              title: 'UPS-2B battery check',
              location: 'Quarterly',
              status: 'Due today',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'electricianPanel',
          alt: 'Electrician working on a control panel',
        },
      },
      {
        tag: 'Teams',
        title: 'Engineers and Vendors in One Flow',
        description:
          'In-house engineers and specialist vendors follow the same procedures, approvals and records.',
        points: [
          'Same procedures for all teams',
          'Vendor access to their jobs',
          'Full history on every job',
        ],
        visual: {
          kind: 'jobs',
          title: 'Today’s teams',
          items: [
            {
              title: 'On-site engineers',
              location: '6 jobs',
              status: 'On track',
              tone: 'done',
            },
            {
              title: 'CoolAir · Cooling',
              location: '2 jobs',
              status: 'Scheduled',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'techniciansPanel',
          alt: 'Two technicians checking an equipment panel',
        },
      },
    ],
    quote: {
      text: 'Other platforms felt too complex or generic. Fleet gave us a purpose-built solution with faster support.',
      author: 'Director of Maintenance',
      company: 'Logistics Hub',
      photo: {
        id: 'factoryTechnician',
        alt: 'Technician checking equipment with a tablet',
      },
    },
    faq: [
      {
        question: 'Can Fleet support data center facility teams?',
        answer:
          'Yes. Fleet plans and tracks maintenance for cooling, power and fire systems, with approvals, readings and complete change records.',
      },
      {
        question: 'Can maintenance follow run hours?',
        answer:
          'Yes. Schedule work by time or usage, such as run hours for generators and UPS systems.',
      },
      {
        question: 'Can BMS alarms create work orders?',
        answer:
          'Yes. Building management system integrations let alarms and readings feed preventive plans and create jobs.',
      },
      {
        question: 'Can we show SLA performance to customers?',
        answer:
          'Yes. Dashboards and exports show planned work completion, response times and change history.',
      },
    ],
  },
  fitness: {
    hero: {
      eyebrow: 'Fitness & Wellness Centers',
      title: 'Fitness and Wellness Center Maintenance Members Notice',
      description:
        'Keep gyms, studios, pools and spas clean, safe and fully working, with equipment checks, cleaning schedules and fast repairs.',
      highlights: ['Equipment checks', 'Cleaning schedules', 'Fast repairs'],
      visual: {
        kind: 'jobs',
        title: 'Club requests · Today',
        items: [
          {
            title: 'Treadmill T-08 belt',
            location: 'Cardio floor',
            status: 'In progress',
            tone: 'info',
          },
          {
            title: 'Pool pH check',
            location: 'Pool hall',
            status: 'Due today',
            tone: 'due',
          },
          {
            title: 'Sauna heater',
            location: 'Spa',
            status: 'Completed',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Members Expect Everything to Work',
        description:
          'Machines, showers, pools and air conditioning are in constant use, and members notice every out-of-order sign.',
        points: ['Equipment', 'Pools and spas', 'Busy schedules'],
      },
      answer: {
        title: 'Every Space Ready for Every Member',
        description:
          'Fleet schedules checks, captures issues from staff and members, and routes repairs fast, across every club.',
      },
    },
    capabilities: {
      title: 'Built for Busy Clubs and Studios',
      description: 'Equipment, cleaning and building systems managed in one place.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Equipment',
          title: 'Equipment Checks on Schedule',
          description:
            'Plan inspections and servicing for treadmills, bikes, rigs and weight machines, with checklists.',
          points: [
            'Servicing plans by machine type',
            'Daily safety checks',
            'History for every machine',
          ],
          visual: {
            kind: 'steps',
            title: 'Cardio plan',
            steps: [
              {
                kind: 'Every',
                text: 'Week · Monday 06:00',
              },
              {
                kind: 'Then',
                text: 'Inspect all cardio machines',
              },
              {
                kind: 'Then',
                text: 'Log issues as work orders',
              },
            ],
          },
        },
        {
          icon: 'requests',
          label: 'Requests',
          title: 'Out-of-Order Fixed Fast',
          description:
            'Staff log faulty equipment from a phone in seconds, and repairs reach the right technician or vendor.',
          points: [
            'Issues logged in seconds',
            'Photos of every fault',
            'Vendors for specialist equipment',
          ],
          visual: {
            kind: 'jobs',
            title: 'Open requests',
            items: [
              {
                title: 'Rowing machine R-02',
                location: 'Cardio floor',
                status: 'Assigned',
                tone: 'info',
              },
              {
                title: 'Shower drain',
                location: 'Men’s changing room',
                status: 'Urgent',
                tone: 'overdue',
              },
              {
                title: 'Studio speaker',
                location: 'Studio 2',
                status: 'Resolved',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: 'Pools and spas',
          title: 'Water and Safety Checks Logged',
          description:
            'Record pool, sauna and steam room checks with readings, so standards are met every day.',
          points: [
            'Daily water readings',
            'Sauna and steam room checks',
            'Records ready for inspection',
          ],
          visual: {
            kind: 'files',
            title: 'Daily logs · Pool hall',
            items: [
              {
                title: 'Pool water readings.pdf',
                location: 'Logged 3 times today',
                status: 'Complete',
                tone: 'done',
              },
              {
                title: 'Lifeguard equipment check.pdf',
                location: 'Daily',
                status: 'Complete',
                tone: 'done',
              },
              {
                title: 'Spa safety inspection.pdf',
                location: 'Due in 5 days',
                status: 'Due',
                tone: 'due',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Reporting',
          title: 'Uptime Across Every Club',
          description:
            'See equipment uptime, repair costs and recurring faults by club to plan upgrades.',
          points: ['Equipment uptime by club', 'Repair costs by machine', 'Upgrade planning'],
          visual: {
            kind: 'chart',
            title: 'Equipment uptime by club · Q3',
            stats: [
              {
                label: 'Uptime',
                value: '97.8%',
              },
              {
                label: 'Repairs',
                value: '46',
              },
            ],
            bars: [
              {
                label: 'Harbour',
                value: 98,
              },
              {
                label: 'Northgate',
                value: 97,
              },
              {
                label: 'Tower B',
                value: 99,
              },
              {
                label: 'Bayview',
                value: 96,
              },
              {
                label: 'Westport',
                value: 98,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Air and comfort',
        title: 'Fresh Air and Comfortable Temperatures',
        description:
          'Preventive HVAC plans keep studios and gym floors comfortable through every class.',
        points: ['Filter changes on schedule', 'Readings on every visit', 'Faults flagged early'],
        visual: {
          kind: 'jobs',
          title: 'HVAC · This month',
          items: [
            {
              title: 'Studio 1 AC service',
              location: 'Harbour club',
              status: 'Completed',
              tone: 'done',
            },
            {
              title: 'Gym floor AHU filters',
              location: 'Northgate club',
              status: 'Scheduled',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'acFilterService',
          alt: 'Technician replacing an air conditioning filter',
        },
      },
      {
        tag: 'Cleaning',
        title: 'Clean Changing Rooms, Every Hour',
        description:
          'Cleaning rounds with checklists and photo proof keep changing rooms, showers and studios fresh.',
        points: [
          'Hourly cleaning rounds',
          'Checklists with photo proof',
          'Issues logged during rounds',
        ],
        visual: {
          kind: 'steps',
          title: 'Cleaning round',
          steps: [
            {
              kind: 'Every',
              text: 'Hour · 06:00 to 22:00',
            },
            {
              kind: 'Then',
              text: 'Clean changing rooms and log photos',
            },
          ],
        },
        photo: {
          id: 'cleanerCorridor',
          alt: 'Cleaner disinfecting a door handle in a corridor',
        },
      },
      {
        tag: 'Facilities',
        title: 'Showers, Pools and Plant Rooms Running',
        description:
          'Plumbing, pumps and water heaters are maintained on schedule, with fast response to leaks.',
        points: ['Pump and heater servicing', 'Fast response to leaks', 'History for every asset'],
        visual: {
          kind: 'asset',
          title: 'Asset profile',
          name: 'Pool pump PP-1',
          location: 'Harbour club · Plant room',
          status: 'Operational',
          facts: [
            {
              label: 'Last service',
              value: '20 Sep',
            },
            {
              label: 'Next service',
              value: '20 Dec',
            },
            {
              label: 'Run hours',
              value: '2,140',
            },
            {
              label: 'Open jobs',
              value: '0',
            },
          ],
        },
        photo: {
          id: 'plumberRepair',
          alt: 'Plumber repairing a kitchen sink',
        },
      },
    ],
    quote: {
      text: 'Fleet has cut our reactive maintenance load by nearly 40%. We’ve finally got our technicians, asset logs, and job records in one place.',
      author: 'Property Ops Lead',
      company: 'Mixed-Use Development',
      photo: {
        id: 'technicianDrill',
        alt: 'Technician installing a fixture with a drill',
      },
    },
    faq: [
      {
        question: 'Is Fleet suitable for gyms and wellness centers?',
        answer:
          'Yes. Fleet helps gyms, studios, pools and spas maintain equipment and building systems, with fast repairs and cleaning schedules.',
      },
      {
        question: 'Can staff report broken equipment?',
        answer:
          'Yes. Staff log faulty equipment from a phone with photos, and the repair reaches the right technician or vendor.',
      },
      {
        question: 'Can we record pool and spa checks?',
        answer:
          'Yes. Record daily readings and safety checks for pools, saunas and steam rooms, ready for inspection.',
      },
      {
        question: 'Can we manage multiple clubs?',
        answer:
          'Yes. Fleet supports multi-site operators, with rules, dashboards and reporting by club and region.',
      },
    ],
  },
  mep: {
    hero: {
      eyebrow: 'MEP Maintenance',
      title: 'MEP Maintenance Across Your Whole Portfolio',
      description:
        'Manage mechanical, electrical and plumbing work in one flow, with preventive plans, trade-based routing and compliance records for every building.',
      highlights: ['Trade-based routing', 'Preventive plans', 'Compliance records'],
      visual: {
        kind: 'jobs',
        title: 'MEP jobs · Today',
        items: [
          {
            title: 'Distribution board DB-3',
            location: 'Tower B · Level 6',
            status: 'In progress',
            tone: 'info',
          },
          {
            title: 'Booster pump service',
            location: 'Harbour Point · Basement',
            status: 'Due today',
            tone: 'due',
          },
          {
            title: 'AHU-07 belt change',
            location: 'Northgate · Roof',
            status: 'Completed',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Three Trades, One Building',
        description:
          'Mechanical, electrical and plumbing systems depend on each other, and each trade has its own plans, specialists and standards.',
        points: ['Mechanical', 'Electrical', 'Plumbing'],
      },
      answer: {
        title: 'MEP Work in One Coordinated Flow',
        description:
          'Fleet plans every trade, routes jobs to the right specialist and keeps a single record of every system.',
      },
    },
    capabilities: {
      title: 'Every Trade, Coordinated',
      description: 'Plans, routing and records for mechanical, electrical and plumbing systems.',
      tabs: [
        {
          icon: 'preventive',
          label: 'Preventive',
          title: 'Plans for Every MEP System',
          description:
            'Schedule HVAC, electrical panels, pumps and water systems by time or usage, with checklists by trade.',
          points: ['Checklists by trade', 'Plans by time or usage', 'Jobs ahead of due dates'],
          visual: {
            kind: 'steps',
            title: 'Electrical plan',
            steps: [
              {
                kind: 'Plan',
                text: 'Distribution boards · quarterly',
              },
              {
                kind: 'Then',
                text: 'Thermal scan and tighten terminals',
              },
              {
                kind: 'Then',
                text: 'Log results to each board',
              },
            ],
          },
        },
        {
          icon: 'routing',
          label: 'Routing',
          title: 'Jobs Routed by Trade',
          description:
            'Requests reach the right in-house technician or specialist vendor by trade, site and priority.',
          points: [
            'Routing by trade and site',
            'Priorities with SLA targets',
            'Vendors in the same flow',
          ],
          visual: {
            kind: 'jobs',
            title: 'Routing · Today',
            items: [
              {
                title: 'No hot water',
                location: 'Harbour Point · L9',
                status: 'Plumbing',
                tone: 'info',
              },
              {
                title: 'Tripped breaker',
                location: 'Tower B · L6',
                status: 'Electrical',
                tone: 'info',
              },
              {
                title: 'Noisy AHU',
                location: 'Northgate · Roof',
                status: 'Mechanical',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'assets',
          label: 'Assets',
          title: 'One Register for All Systems',
          description:
            'Pumps, panels, boilers and AHUs share one register with history, costs and documents.',
          points: [
            'History and costs per asset',
            'Single-line diagrams and manuals',
            'Warranty details on every job',
          ],
          visual: {
            kind: 'asset',
            title: 'Asset profile',
            name: 'Booster pump P-03',
            location: 'Harbour Point · Basement',
            status: 'Service due',
            facts: [
              {
                label: 'Last service',
                value: '10 Jul',
              },
              {
                label: 'Run hours',
                value: '8,310',
              },
              {
                label: 'Cost YTD',
                value: '$1,420',
              },
              {
                label: 'Open jobs',
                value: '1',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Reporting',
          title: 'Workload by Trade',
          description:
            'Balance workload and spend across mechanical, electrical and plumbing teams.',
          points: ['Jobs by trade and site', 'Spend by trade', 'Recurring faults by system'],
          visual: {
            kind: 'chart',
            title: 'Jobs by trade · Q3',
            stats: [
              {
                label: 'Jobs Q3',
                value: '642',
              },
              {
                label: 'SLA met',
                value: '95.8%',
              },
            ],
            bars: [
              {
                label: 'Mechanical',
                value: 248,
              },
              {
                label: 'Electrical',
                value: 196,
              },
              {
                label: 'Plumbing',
                value: 158,
              },
              {
                label: 'Fire',
                value: 40,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Electrical',
        title: 'Electrical Systems Tested and Safe',
        description:
          'Panels, lighting and emergency systems are tested on schedule, with every result recorded.',
        points: [
          'Panel and lighting tests',
          'Emergency lighting checks',
          'Results linked to each asset',
        ],
        visual: {
          kind: 'jobs',
          title: 'Electrical checks',
          items: [
            {
              title: 'Emergency lighting test',
              location: 'All floors',
              status: 'Completed',
              tone: 'done',
            },
            {
              title: 'DB-3 thermal scan',
              location: 'Tower B · L6',
              status: 'Scheduled',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'electricianPanel',
          alt: 'Electrician working on a control panel',
        },
      },
      {
        tag: 'Plumbing',
        title: 'Plumbing That Keeps Flowing',
        description:
          'Pumps, water heaters and drainage are maintained on schedule, and leaks get a fast response.',
        points: ['Pump and heater servicing', 'Fast response to leaks', 'Water system records'],
        visual: {
          kind: 'log',
          title: 'Plumbing activity',
          entries: [
            {
              when: '07:40',
              who: 'Front desk',
              what: 'reported no hot water on Level 9',
            },
            {
              when: '07:45',
              who: 'Fleet',
              what: 'assigned the in-house plumber as urgent',
            },
          ],
        },
        photo: {
          id: 'plumberRepair',
          alt: 'Plumber repairing a kitchen sink',
        },
      },
      {
        tag: 'Mechanical',
        title: 'Mechanical Systems at Peak Performance',
        description:
          'AHUs, fans and chillers are serviced with readings logged, so performance stays consistent.',
        points: ['Readings logged on site', 'Belt and filter changes', 'Faults flagged early'],
        visual: {
          kind: 'steps',
          title: 'AHU service',
          steps: [
            {
              kind: 'Every',
              text: 'Quarter · all AHUs',
            },
            {
              kind: 'Then',
              text: 'Change belts and filters, log readings',
            },
          ],
        },
        photo: {
          id: 'acFilterService',
          alt: 'Technician replacing an air conditioning filter',
        },
      },
    ],
    quote: {
      text: 'Fleet has cut our reactive maintenance load by nearly 40%. We’ve finally got our technicians, asset logs, and job records in one place.',
      author: 'Property Ops Lead',
      company: 'Mixed-Use Development',
      photo: {
        id: 'hvacTechnicians',
        alt: 'HVAC technicians servicing rooftop units',
      },
    },
    faq: [
      {
        question: 'What is MEP maintenance?',
        answer:
          'MEP maintenance covers the mechanical, electrical and plumbing systems of a building, such as HVAC, power distribution, lighting, pumps and water systems.',
      },
      {
        question: 'Can Fleet route jobs by trade?',
        answer:
          'Yes. Routing rules send jobs to the right in-house technician or specialist vendor by trade, site and priority.',
      },
      {
        question: 'Can we keep MEP documents in Fleet?',
        answer:
          'Yes. Store manuals, diagrams, certificates and test results on each asset, ready on site.',
      },
      {
        question: 'Does Fleet work for MEP contractors?',
        answer:
          'Yes. Contractors can manage maintenance for multiple client sites, with rules, reporting and access by client.',
      },
    ],
  },
  offices: {
    hero: {
      eyebrow: 'Offices & Mixed-Use',
      title: 'Office and Mixed-Use Building Maintenance for Productive Workplaces',
      description:
        'Keep offices, shared spaces and mixed-use developments running smoothly, with tenant requests, preventive plans and portfolio-wide reporting.',
      highlights: ['Tenant requests', 'Preventive plans', 'Portfolio reporting'],
      visual: {
        kind: 'jobs',
        title: 'Tower B · Today',
        items: [
          {
            title: 'Meeting room AC',
            location: 'Level 14',
            status: 'In progress',
            tone: 'info',
          },
          {
            title: 'Lift L3 monthly check',
            location: 'Core lifts',
            status: 'Due today',
            tone: 'due',
          },
          {
            title: 'Kitchen tap leak',
            location: 'Level 9 · Pantry',
            status: 'Completed',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Workplaces Run on Comfort and Uptime',
        description:
          'Air conditioning, lifts, lighting and shared amenities shape how tenants and employees experience every day.',
        points: ['Tenants', 'Shared spaces', 'Building systems'],
      },
      answer: {
        title: 'Smooth Operations for Every Floor',
        description:
          'Fleet connects tenant requests, preventive maintenance and vendors, so every floor stays comfortable and productive.',
      },
    },
    capabilities: {
      title: 'Built for Offices and Mixed-Use',
      description: 'From tenant requests to building systems, every floor managed in one place.',
      tabs: [
        {
          icon: 'requests',
          label: 'Requests',
          title: 'Tenant Requests Tracked to Closure',
          description:
            'Requests arrive by email, through your tenant portal or from reception, and become work orders automatically.',
          points: [
            'Email to work order with Fleet Mail',
            'Tenant portal integrations',
            'Status updates at every step',
          ],
          visual: {
            kind: 'steps',
            title: 'Tenant request',
            steps: [
              {
                kind: 'Email',
                text: 'Meeting room too warm, Level 14',
              },
              {
                kind: 'Then',
                text: 'Work order created and assigned',
              },
              {
                kind: 'Then',
                text: 'Tenant updated on completion',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Preventive',
          title: 'Building Systems on Schedule',
          description:
            'Plan HVAC, lifts, lighting and fire safety maintenance by time or usage across every building.',
          points: [
            'Plans for every system',
            'Checklists for every visit',
            'Work planned around office hours',
          ],
          visual: {
            kind: 'jobs',
            title: 'Planned this week',
            items: [
              {
                title: 'Lift L1–L4 service',
                location: 'Core lifts',
                status: 'Scheduled',
                tone: 'info',
              },
              {
                title: 'Fire alarm test',
                location: 'All floors',
                status: 'Completed',
                tone: 'done',
              },
              {
                title: 'AHU filter change',
                location: 'Roof',
                status: 'Due today',
                tone: 'due',
              },
            ],
          },
        },
        {
          icon: 'tenants',
          label: 'Tenants',
          title: 'History by Floor and Tenant',
          description:
            'Track work and costs by floor, tenant and shared space to support recharges and planning.',
          points: ['History by floor and tenant', 'Costs for recharges', 'Shared space upkeep'],
          visual: {
            kind: 'asset',
            title: 'Tenant profile',
            name: 'Level 14 · Northwind Ltd',
            location: 'Tower B',
            status: 'Occupied',
            facts: [
              {
                label: 'Requests YTD',
                value: '9',
              },
              {
                label: 'Last visit',
                value: '28 Sep',
              },
              {
                label: 'Open jobs',
                value: '1',
              },
              {
                label: 'Cost YTD',
                value: '$2,310',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Reporting',
          title: 'Portfolio-Wide Reporting',
          description:
            'Compare response times, spend and tenant requests across buildings and share dashboards with owners.',
          points: [
            'Response times by building',
            'Spend by building and floor',
            'Read-only owner dashboards',
          ],
          visual: {
            kind: 'chart',
            title: 'Tenant requests by building · Q3',
            stats: [
              {
                label: 'Requests',
                value: '486',
              },
              {
                label: 'Resolved on time',
                value: '96%',
              },
            ],
            bars: [
              {
                label: 'Tower B',
                value: 142,
              },
              {
                label: 'Harbour Point',
                value: 118,
              },
              {
                label: 'Northgate',
                value: 96,
              },
              {
                label: 'Bayview',
                value: 74,
              },
              {
                label: 'Westport',
                value: 56,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Workspaces',
        title: 'Comfortable, Productive Floors',
        description:
          'Air conditioning, lighting and meeting rooms are maintained on schedule, and issues are fixed fast.',
        points: [
          'Comfort issues fixed fast',
          'Meeting rooms checked daily',
          'Planned work outside office hours',
        ],
        visual: {
          kind: 'jobs',
          title: 'Level 14 · Today',
          items: [
            {
              title: 'Meeting room AC',
              location: 'Assigned to CoolAir',
              status: 'In progress',
              tone: 'info',
            },
            {
              title: 'Pantry tap leak',
              location: 'In-house plumber',
              status: 'Done',
              tone: 'done',
            },
          ],
        },
        photo: {
          id: 'officeFloor',
          alt: 'Open-plan office floor with people at work',
        },
      },
      {
        tag: 'Shared spaces',
        title: 'Lobbies and Amenities Always Ready',
        description:
          'Lobbies, lifts, car parks and amenities stay clean, safe and working for every visitor.',
        points: [
          'Lobby and lift checks',
          'Car park lighting and barriers',
          'Cleaning schedules with photo proof',
        ],
        visual: {
          kind: 'steps',
          title: 'Lobby routine',
          steps: [
            {
              kind: 'Every',
              text: 'Day · 07:00',
            },
            {
              kind: 'Then',
              text: 'Check lobby, lifts and entrance gates',
            },
          ],
        },
        photo: {
          id: 'officeCorridor',
          alt: 'People walking through a bright office corridor',
        },
      },
      {
        tag: 'Front of house',
        title: 'Reception and Maintenance in Sync',
        description:
          'Reception and security log issues for tenants and visitors, and every job is tracked to closure.',
        points: [
          'Issues logged at reception',
          'Updates shared with tenants',
          'Handover notes across shifts',
        ],
        visual: {
          kind: 'log',
          title: 'Reception log',
          entries: [
            {
              when: '09:05',
              who: 'Reception',
              what: 'logged a broken access gate at entrance B',
            },
            {
              when: '09:12',
              who: 'Fleet',
              what: 'assigned the gate repair to security systems vendor',
            },
          ],
        },
        photo: {
          id: 'supportAgent',
          alt: 'Customer service agent with a headset',
        },
      },
    ],
    quote: {
      text: 'Fleet has cut our reactive maintenance load by nearly 40%. We’ve finally got our technicians, asset logs, and job records in one place.',
      author: 'Property Ops Lead',
      company: 'Mixed-Use Development',
      photo: {
        id: 'acFilterService',
        alt: 'Technician replacing an air conditioning filter',
      },
    },
    faq: [
      {
        question: 'How does Fleet help office and mixed-use buildings?',
        answer:
          'Fleet connects tenant requests, preventive maintenance, vendors and reporting, so every floor and shared space stays comfortable and working.',
      },
      {
        question: 'How do tenants submit requests?',
        answer:
          'By email with Fleet Mail, through your tenant portal via integrations, or through reception and security staff.',
      },
      {
        question: 'Can we track costs by tenant?',
        answer:
          'Yes. Track work and costs by floor and tenant to support recharges and budget planning.',
      },
      {
        question: 'Can owners see building performance?',
        answer:
          'Yes. Share read-only dashboards with owners and boards, with response times and spend by building.',
      },
    ],
  },
  industrial: {
    hero: {
      eyebrow: 'Industrial Factory & Plant Management',
      title: 'Factory and Plant Maintenance Built for Maximum Uptime',
      description:
        'Keep production assets, utilities and safety systems running with asset registers, preventive and usage-based plans, and downtime analytics.',
      highlights: ['Usage-based plans', 'Safety inspections', 'Downtime analytics'],
      visual: {
        kind: 'jobs',
        title: 'Plant 1 · Today',
        items: [
          {
            title: 'Compressor C-2 service',
            location: 'Utilities',
            status: 'In progress',
            tone: 'info',
          },
          {
            title: 'Line 3 guard inspection',
            location: 'Production',
            status: 'Due today',
            tone: 'due',
          },
          {
            title: 'Boiler water treatment',
            location: 'Boiler house',
            status: 'Completed',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Production Depends on Every Asset',
        description:
          'Lines, compressors, boilers and safety systems work in sequence, and each stoppage affects output and delivery dates.',
        points: ['Production lines', 'Utilities', 'Safety systems'],
      },
      answer: {
        title: 'Uptime Planned, Not Hoped For',
        description:
          'Fleet turns asset data into preventive and usage-based plans, so teams act before breakdowns stop production.',
      },
    },
    capabilities: {
      title: 'Built for Industrial Operations',
      description: 'Assets, plans, safety and analytics for every plant.',
      tabs: [
        {
          icon: 'assets',
          label: 'Assets',
          title: 'A Register for Every Machine',
          description:
            'Create digital profiles for machines, utilities and safety systems, organized by plant, line and area.',
          points: [
            'Profiles by plant, line and area',
            'History, costs and manuals',
            'Spare parts noted on each asset',
          ],
          visual: {
            kind: 'asset',
            title: 'Asset profile',
            name: 'Compressor C-2',
            location: 'Plant 1 · Utilities',
            status: 'Operational',
            facts: [
              {
                label: 'Run hours',
                value: '12,840',
              },
              {
                label: 'Last service',
                value: '09 Sep',
              },
              {
                label: 'Downtime Q3',
                value: '2h',
              },
              {
                label: 'Cost YTD',
                value: '$5,620',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Usage-based',
          title: 'Maintenance by Hours or Cycles',
          description:
            'Trigger maintenance by run hours, cycles or time, so service matches real equipment use.',
          points: [
            'Triggers by hours or cycles',
            'Checklists by machine type',
            'Fewer emergency repairs',
          ],
          visual: {
            kind: 'steps',
            title: 'Usage-based plan',
            steps: [
              {
                kind: 'Trigger',
                text: 'Compressor C-2 reaches 13,000 hours',
              },
              {
                kind: 'Then',
                text: 'Create service work order',
              },
              {
                kind: 'Then',
                text: 'Assign to utilities team',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: 'Safety',
          title: 'Safety Inspections on Record',
          description:
            'Schedule guard checks, pressure system inspections and fire safety tests, with every result recorded.',
          points: [
            'Guard and interlock checks',
            'Pressure system inspections',
            'Records ready for audits',
          ],
          visual: {
            kind: 'files',
            title: 'Safety records · Plant 1',
            items: [
              {
                title: 'Pressure system inspection.pdf',
                location: 'Completed 12 Sep',
                status: 'Valid',
                tone: 'done',
              },
              {
                title: 'Line 3 guard check.pdf',
                location: 'Due today',
                status: 'Due',
                tone: 'due',
              },
              {
                title: 'Fire suppression test.pdf',
                location: 'Valid to Mar 2027',
                status: 'Valid',
                tone: 'done',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Downtime',
          title: 'Downtime Analytics by Line',
          description: 'See which lines and assets cause the most downtime and where to invest.',
          points: ['Downtime by line and asset', 'Repair costs over time', 'Replacement planning'],
          visual: {
            kind: 'chart',
            title: 'Downtime hours by line · Q3',
            stats: [
              {
                label: 'Downtime Q3',
                value: '27h',
              },
              {
                label: 'Planned work',
                value: '94%',
              },
            ],
            bars: [
              {
                label: 'Line 1',
                value: 4,
              },
              {
                label: 'Line 2',
                value: 6,
              },
              {
                label: 'Line 3',
                value: 9,
              },
              {
                label: 'Utilities',
                value: 5,
              },
              {
                label: 'Packaging',
                value: 3,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Production',
        title: 'Lines Running Shift After Shift',
        description:
          'Operators report faults from the floor, and maintenance responds with the right priority and parts.',
        points: [
          'Faults reported from the floor',
          'Priorities by line impact',
          'Repairs tracked to closure',
        ],
        visual: {
          kind: 'log',
          title: 'Line 3 activity',
          entries: [
            {
              when: '13:20',
              who: 'Operator',
              what: 'reported a jam at the Line 3 filler',
            },
            {
              when: '13:22',
              who: 'Fleet',
              what: 'assigned the shift technician as urgent',
            },
          ],
        },
        photo: {
          id: 'factoryTechnician',
          alt: 'Technician checking equipment with a tablet',
        },
      },
      {
        tag: 'Utilities',
        title: 'Utilities That Never Hold Production Back',
        description:
          'Compressors, boilers and chillers are serviced by usage, with readings logged on every visit.',
        points: ['Service by run hours', 'Readings logged on site', 'Faults flagged early'],
        visual: {
          kind: 'jobs',
          title: 'Utilities · This week',
          items: [
            {
              title: 'Boiler B-1 inspection',
              location: 'Boiler house',
              status: 'Completed',
              tone: 'done',
            },
            {
              title: 'Chiller CH-5 service',
              location: 'Utilities',
              status: 'Scheduled',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'techniciansPanel',
          alt: 'Two technicians checking an equipment panel',
        },
      },
      {
        tag: 'Leadership',
        title: 'Plant Performance at a Glance',
        description:
          'Plant managers see downtime, planned work completion and maintenance spend across every site.',
        points: ['Downtime by plant and line', 'Planned work completion', 'Spend by cost center'],
        visual: {
          kind: 'jobs',
          title: 'Plants · Q3',
          items: [
            {
              title: 'Plant 1',
              location: '94% planned work done',
              status: 'On track',
              tone: 'done',
            },
            {
              title: 'Plant 2',
              location: '88% planned work done',
              status: 'Review',
              tone: 'due',
            },
          ],
        },
        photo: {
          id: 'plantManagers',
          alt: 'Plant manager briefing engineers in hard hats',
        },
      },
    ],
    quote: {
      text: 'Other platforms felt too complex or generic. Fleet gave us a purpose-built solution with faster support.',
      author: 'Director of Maintenance',
      company: 'Logistics Hub',
      photo: {
        id: 'warehouseTeam',
        alt: 'Warehouse team reviewing stock between racks',
      },
    },
    faq: [
      {
        question: 'Is Fleet suitable for factories and plants?',
        answer:
          'Yes. Fleet manages production assets, utilities and safety systems, with preventive and usage-based plans and downtime analytics.',
      },
      {
        question: 'Can maintenance follow run hours or cycles?',
        answer:
          'Yes. Trigger maintenance by run hours, cycles or time, so service matches real equipment use.',
      },
      {
        question: 'Can Fleet track safety inspections?',
        answer:
          'Yes. Schedule and record guard checks, pressure system inspections and fire safety tests, ready for audits.',
      },
      {
        question: 'Can we compare performance across plants?',
        answer:
          'Yes. Dashboards show downtime, planned work completion and spend across plants and lines.',
      },
    ],
  },
  vehicles: {
    hero: {
      eyebrow: 'Vehicle Management',
      title: 'Vehicle Management from Procurement to Decommission',
      description:
        'Manage every vehicle in one place, from ordering and registration to maintenance, claims and disposal, with audit-ready records.',
      highlights: ['Full lifecycle view', 'Maintenance by mileage', 'Claims and fines'],
      visual: {
        kind: 'jobs',
        title: 'Fleet vehicles · Today',
        items: [
          {
            title: 'Van V-12 service',
            location: '30,000 km due',
            status: 'Scheduled',
            tone: 'info',
          },
          {
            title: 'Truck T-03 registration',
            location: 'Renews in 14 days',
            status: 'Due',
            tone: 'due',
          },
          {
            title: 'Van V-07 tyre change',
            location: 'Workshop',
            status: 'Completed',
            tone: 'done',
          },
        ],
      },
    },
    challenge: {
      pressure: {
        title: 'Every Vehicle Has a Long To-Do List',
        description:
          'Procurement, registrations, servicing, fines and claims each involve different teams, documents and deadlines.',
        points: ['Procurement', 'Maintenance', 'Compliance'],
      },
      answer: {
        title: 'Every Vehicle, Every Stage, One Place',
        description:
          'Fleet gives procurement, operations and finance one view of every vehicle, with every record audit-ready.',
      },
    },
    capabilities: {
      title: 'Complete Vehicle Lifecycle Management',
      description:
        'From acquisition to decommission, every movement logged and ready for reporting.',
      tabs: [
        {
          icon: 'assets',
          label: 'Lifecycle',
          title: 'Every Vehicle, Every Stage',
          description:
            'Track ordering, delivery, onboarding, active use and decommissioning for every vehicle.',
          points: [
            'Procurement and onboarding',
            'Active, idle and retired status',
            'Disposal records',
          ],
          visual: {
            kind: 'asset',
            title: 'Vehicle profile',
            name: 'Van V-12',
            location: 'Westport DC · Delivery',
            status: 'Active',
            facts: [
              {
                label: 'Mileage',
                value: '29,640 km',
              },
              {
                label: 'Next service',
                value: '30,000 km',
              },
              {
                label: 'Registration',
                value: 'Valid to Mar 2027',
              },
              {
                label: 'Cost YTD',
                value: '$3,180',
              },
            ],
          },
        },
        {
          icon: 'preventive',
          label: 'Maintenance',
          title: 'Maintenance by Mileage and Time',
          description:
            'Schedule preventive maintenance by mileage, engine hours or time, and track repairs automatically.',
          points: [
            'Triggers by mileage or time',
            'Technicians assigned automatically',
            'Repairs tracked to closure',
          ],
          visual: {
            kind: 'steps',
            title: 'Service plan',
            steps: [
              {
                kind: 'Trigger',
                text: 'Van V-12 reaches 30,000 km',
              },
              {
                kind: 'Then',
                text: 'Book workshop service',
              },
              {
                kind: 'Then',
                text: 'Log invoice to vehicle history',
              },
            ],
          },
        },
        {
          icon: 'compliance',
          label: 'Compliance',
          title: 'Registrations, Fines and Claims',
          description:
            'Manage renewals, tickets and insurance claims with reminders, photos and cost summaries.',
          points: [
            'Renewal alerts',
            'Fines with deadlines and payments',
            'Claims logged from the field',
          ],
          visual: {
            kind: 'files',
            title: 'Compliance · This month',
            items: [
              {
                title: 'Truck T-03 registration',
                location: 'Renews in 14 days',
                status: 'Renew',
                tone: 'due',
              },
              {
                title: 'Parking fine #4471',
                location: 'Paid 02 Oct',
                status: 'Closed',
                tone: 'done',
              },
              {
                title: 'Van V-05 claim',
                location: 'Appraisal in progress',
                status: 'Open',
                tone: 'info',
              },
            ],
          },
        },
        {
          icon: 'analytics',
          label: 'Utilization',
          title: 'Utilization and Cost Control',
          description:
            'Monitor usage, mileage and idle hours to spot underused vehicles and improve ROI.',
          points: ['Usage and idle hours', 'Cost per vehicle', 'Underused assets highlighted'],
          visual: {
            kind: 'chart',
            title: 'Utilization by vehicle type · Q3',
            stats: [
              {
                label: 'Vehicles',
                value: '86',
              },
              {
                label: 'Utilization',
                value: '78%',
              },
            ],
            bars: [
              {
                label: 'Vans',
                value: 84,
              },
              {
                label: 'Trucks',
                value: 79,
              },
              {
                label: 'Cars',
                value: 64,
              },
              {
                label: 'Forklifts',
                value: 88,
              },
              {
                label: 'Service vehicles',
                value: 71,
              },
            ],
          },
        },
      ],
    },
    rows: [
      {
        tag: 'Field',
        title: 'Incidents Captured from the Field',
        description:
          'Drivers log incidents with photos and notes, linked to the vehicle, and managers are notified instantly.',
        points: [
          'Mobile incident reports',
          'Photos and notes attached',
          'Instant manager notifications',
        ],
        visual: {
          kind: 'log',
          title: 'Incident log',
          entries: [
            {
              when: '16:40',
              who: 'Driver',
              what: 'reported a scratched door on Van V-05',
            },
            {
              when: '16:41',
              who: 'Fleet',
              what: 'opened a claim and notified the fleet manager',
            },
          ],
        },
        photo: {
          id: 'vanDriver',
          alt: 'Smiling driver at the wheel of a van',
        },
      },
      {
        tag: 'Inspections',
        title: 'Every Vehicle Road-Ready',
        description:
          'Scheduled inspections and checklists keep every vehicle safe, compliant and ready for the next route.',
        points: [
          'Pre-trip inspection checklists',
          'Defects become work orders',
          'Inspection history per vehicle',
        ],
        visual: {
          kind: 'jobs',
          title: 'Inspections · Today',
          items: [
            {
              title: 'Vans V-01 to V-12',
              location: 'Pre-trip checks',
              status: 'Completed',
              tone: 'done',
            },
            {
              title: 'Truck T-03',
              location: 'Brake inspection',
              status: 'Scheduled',
              tone: 'info',
            },
          ],
        },
        photo: {
          id: 'fleetInspection',
          alt: 'Inspector checking a row of vans with a tablet',
        },
      },
      {
        tag: 'Finance',
        title: 'Finance and Operations in Sync',
        description:
          'Maintenance, fuel and usage data roll up into one dashboard for budgeting and contract decisions.',
        points: [
          'Costs per vehicle and type',
          'Vendor and contract comparisons',
          'Budget tracking',
        ],
        visual: {
          kind: 'chart',
          title: 'Cost per vehicle type · YTD',
          stats: [],
          bars: [
            {
              label: 'Trucks',
              value: 48,
            },
            {
              label: 'Vans',
              value: 36,
            },
            {
              label: 'Cars',
              value: 18,
            },
            {
              label: 'Forklifts',
              value: 14,
            },
            {
              label: 'Service vehicles',
              value: 22,
            },
          ],
        },
        photo: {
          id: 'fleetVans',
          alt: 'Delivery vans parked outside a warehouse',
        },
      },
    ],
    quote: {
      text: 'Other platforms felt too complex or generic. Fleet gave us a purpose-built solution with faster support.',
      author: 'Director of Maintenance',
      company: 'Logistics Hub',
      photo: {
        id: 'fleetManager',
        alt: 'Fleet manager with a tablet in front of trucks',
      },
    },
    faq: [
      {
        question: 'What does Fleet’s vehicle management cover?',
        answer:
          'The full vehicle lifecycle: procurement, onboarding, maintenance, registrations, fines, claims, utilization and decommissioning.',
      },
      {
        question: 'Can maintenance be scheduled by mileage?',
        answer:
          'Yes. Schedule preventive maintenance by mileage, engine hours or time, with technicians assigned automatically.',
      },
      {
        question: 'Can drivers report incidents?',
        answer:
          'Yes. Drivers log incidents from the field with photos and notes, and managers are notified instantly.',
      },
      {
        question: 'Does vehicle management connect with our finance tools?',
        answer:
          'Yes. Fleet integrates with finance tools and ERPs, so maintenance and usage costs flow into unified reporting.',
      },
    ],
  },
}

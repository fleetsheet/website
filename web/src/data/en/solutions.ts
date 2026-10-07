import type { NavLink } from '@/config'
import type {
  OverviewModule,
  OverviewVisual,
  PlatformEntry,
  PlatformItem,
} from '@/data/en/platform'
import type { Photo } from '@/photos'
import type { CategoryPageId, SolutionGroup, SolutionPageId } from '@/solutions'

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
  industries: { title: string; description: string; items: { label: string; photo: Photo }[] }
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
  } satisfies Record<SolutionGroup, string>,
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
        label: 'Facility Management',
        photo: {
          id: 'inspectionClipboard',
          alt: 'Inspector completing a checklist on a clipboard',
        },
      },
      {
        label: 'Shopping Malls & Retail',
        photo: {
          id: 'mallAtrium',
          alt: 'Shoppers in a busy mall atrium',
        },
      },
      {
        label: 'Hospitality, Food & Beverage',
        photo: {
          id: 'hotelHousekeeping',
          alt: 'Housekeeper preparing a hotel room',
        },
      },
      {
        label: 'Shipping & Logistics',
        photo: {
          id: 'warehouseTeam',
          alt: 'Warehouse team reviewing stock between racks',
        },
      },
      {
        label: 'Data Centers',
        photo: {
          id: 'dataCenter',
          alt: 'Rows of server racks in a data center',
        },
      },
      {
        label: 'HVAC, Lifts & Elevators',
        photo: {
          id: 'hvacTechnicians',
          alt: 'HVAC technicians servicing rooftop units',
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
      id: 'techniciansPanel',
      alt: 'Two technicians checking an equipment panel',
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

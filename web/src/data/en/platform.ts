import type { NavLink } from '@/config'
import type { StatusItem } from '@/data/en/home'
import type { PlatformDetailId, PlatformGroup, PlatformPageId } from '@/platform'

export type PlatformItem = {
  title: string
  description: string
}

export type PlatformEntry = {
  label: string
  summary: string
  meta: { title: string; description: string }
}

export type OverviewVisual =
  | { kind: 'jobs'; title: string; items: StatusItem[] }
  | { kind: 'files'; title: string; items: StatusItem[] }
  | {
      kind: 'asset'
      title: string
      name: string
      location: string
      status: string
      facts: { label: string; value: string }[]
    }
  | {
      kind: 'chart'
      title: string
      stats: { label: string; value: string }[]
      bars: { label: string; value: number }[]
    }
  | { kind: 'steps'; title: string; steps: { kind: string; text: string }[] }
  | { kind: 'log'; title: string; entries: { when: string; who: string; what: string }[] }
  | {
      kind: 'chat'
      title: string
      request: StatusItem
      messages: { from: string; text: string; time: string; own: boolean }[]
    }

export type OverviewModule = {
  id: PlatformDetailId
  tag: string
  title: string
  description: string
  points: string[]
  visual: OverviewVisual
}

export type IntegrationCategory = 'finance' | 'operations' | 'building' | 'tenants' | 'developers'

export type IntegrationIcon =
  | 'accounting'
  | 'apAr'
  | 'finance'
  | 'erp'
  | 'vendors'
  | 'access'
  | 'bms'
  | 'tenants'
  | 'email'
  | 'api'

export type IntegrationItem = {
  icon: IntegrationIcon
  category: IntegrationCategory
  title: string
  description: string
}

export type AnalyticsPageContent = {
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryAction: NavLink
    secondaryAction: NavLink
    highlights: string[]
    visual: OverviewVisual
  }
  columns: PlatformItem[]
  rows: Omit<OverviewModule, 'id'>[]
  reports: {
    eyebrow: string
    title: string
    description: string
    points: string[]
    visual: OverviewVisual
  }
  extras: {
    icon: 'ai' | 'plug' | 'workflow'
    title: string
    description: string
    action: NavLink
  }[]
}

export type ProductIcon =
  | 'register'
  | 'workOrders'
  | 'lifecycle'
  | 'mobile'
  | 'storage'
  | 'versions'
  | 'permissions'
  | 'search'

export type ProductPageContent = {
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryAction: NavLink
    secondaryAction: NavLink
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
    tabs: (Omit<OverviewModule, 'id' | 'tag'> & { icon: ProductIcon; label: string })[]
  }
  rows: Omit<OverviewModule, 'id'>[]
  steps: { eyebrow: string; title: string; items: PlatformItem[] }
  banner: { eyebrow: string; title: string; description: string; action: NavLink }
  trust: { title: string; description: string; items: PlatformItem[] }
  quote: { text: string; author: string; company: string }
  industries: { title: string; description: string }
  integrate: { title: string; description: string; action: NavLink }
  faq: { title: string; items: { question: string; answer: string }[] }
}

export const menu = {
  label: 'Platform',
  groups: {
    platform: 'RunFleet Platform',
    features: 'Core features',
  } satisfies Record<PlatformGroup, string>,
  promo: {
    title: 'See Fleet in action',
    description: 'Get a guided walkthrough of the platform, tailored to your portfolio.',
    action: { label: 'Book a demo', href: '/contact' } satisfies NavLink,
  },
}

export const cta = {
  title: 'See Fleet in Action',
  description:
    'Book a walkthrough and see how Fleet brings every site, asset and work order into one place.',
  primaryAction: { label: 'Book a demo', href: '/contact' },
  secondaryAction: { label: 'Talk to our team', href: '/contact' },
}

export const pages: Record<PlatformPageId, PlatformEntry> = {
  overview: {
    label: 'Overview',
    summary: 'One platform for maintenance, assets and operations across every site.',
    meta: {
      title: 'Platform Overview | Fleet',
      description:
        'Fleet is the all-in-one maintenance and operations platform for real estate, facility and operations teams managing assets across multiple properties.',
    },
  },
  webAndMobile: {
    label: 'Web & Mobile',
    summary: 'Run operations from the office desktop or the plant room floor.',
    meta: {
      title: 'Web & Mobile | Fleet',
      description:
        'Fleet works on desktop, tablet and phone, with iOS and Android support, so technicians and managers share the same live data wherever they work.',
    },
  },
  integrations: {
    label: '20+ integrations',
    summary: 'Connect Fleet to finance, ERP, access control and building systems.',
    meta: {
      title: 'Integrations | Fleet',
      description:
        'Fleet connects with accounting and AP/AR systems, ERPs, access control, tenant portals and building management systems through 20+ integrations and a REST API.',
    },
  },
  runnerAi: {
    label: 'RunnerAI',
    summary: 'AI that fetches data, creates tasks, edits workflows and builds dashboards.',
    meta: {
      title: 'RunnerAI | Fleet',
      description:
        'RunnerAI is Fleet’s secure, rule-based AI for real estate and facilities teams: create workflows by text, generate dashboards on request and automate operations.',
    },
  },
  fleetMail: {
    label: 'Fleet Mail',
    summary: 'Turn emails into work orders and keep everyone updated by email.',
    meta: {
      title: 'Fleet Mail | Fleet',
      description:
        'Fleet Mail turns incoming emails from tenants and vendors into tracked work orders and sends alerts, approvals and reminders by email.',
    },
  },
  workflowBuilder: {
    label: 'Fleet Workflow Builder',
    summary: 'Design approvals, routing and escalations to match how you operate.',
    meta: {
      title: 'Fleet Workflow Builder | Fleet',
      description:
        'Shape maintenance operations around your structure, approval chains, vendor policies and cost thresholds with Fleet’s visual workflow builder.',
    },
  },
  preventiveMaintenance: {
    label: 'Preventive & Predictive Maintenance',
    summary: 'Schedule recurring work and act on early warning signs.',
    meta: {
      title: 'Preventive & Predictive Maintenance | Fleet',
      description:
        'Schedule preventive maintenance for every asset and use rule-based predictions to act before equipment fails, across every site in your portfolio.',
    },
  },
  reactiveMaintenance: {
    label: 'Reactive Maintenance',
    summary: 'Capture, assign and resolve unplanned repairs quickly.',
    meta: {
      title: 'Reactive Maintenance | Fleet',
      description:
        'Track ad-hoc repairs from request to resolution with mobile updates, smart routing and live SLA tracking across every property.',
    },
  },
  analyticsReporting: {
    label: 'Analytics and Reporting',
    summary: 'Live dashboards and exportable reports for every level of the business.',
    meta: {
      title: 'Analytics and Reporting | Fleet',
      description:
        'Make data-driven decisions with live dashboards, custom KPIs and exportable reports on job volume, response times, compliance and costs.',
    },
  },
  assetManagement: {
    label: 'Asset Management',
    summary: 'A live register of every asset, with history, costs and documents.',
    meta: {
      title: 'Asset Management | Fleet',
      description:
        'Create a live digital register of every asset across your properties, with maintenance history, costs, warranties and documents in one place.',
    },
  },
  documentManagement: {
    label: 'Document Management',
    summary: 'Every manual, permit and certificate, organized and audit-ready.',
    meta: {
      title: 'Document Management | Fleet',
      description:
        'Store, organize and retrieve manuals, warranties, permits and inspection reports in one place, linked to the assets, jobs and locations they belong to.',
    },
  },
  auditTracking: {
    label: 'Audit Tracking & Inspections',
    summary: 'Time-stamped records and inspections that keep every site audit-ready.',
    meta: {
      title: 'Audit Tracking & Inspections | Fleet',
      description:
        'Keep detailed, time-stamped logs of every action and run digital inspections so every site is ready for health and safety reviews and compliance audits.',
    },
  },
}

export const overview = {
  hero: {
    eyebrow: 'The Fleet Platform',
    title: 'All-in-One Maintenance Platform for Real Estate Teams',
    description:
      'Manage work orders, assets, vendors, documents and compliance across every property, in one cloud-based platform built for real estate, facility and operations teams.',
    primaryAction: { label: 'Book a demo', href: '/contact' },
    secondaryAction: { label: 'Talk to our team', href: '/contact' },
  },
  quote: {
    text: 'Fleet has cut our reactive maintenance load by nearly 40%. We’ve finally got our technicians, asset logs, and job records in one place.',
    author: 'Property Ops Lead, Mixed-Use Development',
  },
  learnMore: 'Learn more',
  modules: [
    {
      id: 'reactiveMaintenance',
      tag: 'Reactive Maintenance',
      title: 'Faster Repairs, Happier Tenants',
      description:
        'Capture every issue with photos and location, route it to the right team and track it to completion against your SLAs.',
      points: [
        'Route jobs to in-house teams or vendors by site and trade',
        'Live SLA tracking with alerts before deadlines pass',
        'Real-time updates and photo proof from the field',
      ],
      visual: {
        kind: 'jobs',
        title: 'Work orders',
        items: [
          {
            title: 'Water leak, Unit 3B',
            location: 'Bayview Residences',
            status: 'Overdue by 2d',
            tone: 'overdue',
          },
          {
            title: 'Loading bay door repair',
            location: 'Westport DC · Bay 07',
            status: 'Due in 4h',
            tone: 'due',
          },
          {
            title: 'Lift alarm reset',
            location: 'Tower B · Core lifts',
            status: 'In progress',
            tone: 'info',
          },
          {
            title: 'Lighting fault, Level 2',
            location: 'Northgate Mall',
            status: 'Completed',
            tone: 'done',
          },
        ],
      },
    },
    {
      id: 'assetManagement',
      tag: 'Asset Management',
      title: 'Every Asset at Your Fingertips',
      description:
        'A live digital register of every asset across your portfolio, with history, costs, warranties and documents one tap away.',
      points: [
        'Digital profiles with make, model, serial number and warranty',
        'Repair history and costs for every asset',
        'Lifecycle insights to plan replacements and capital spend',
      ],
      visual: {
        kind: 'asset',
        title: 'Asset profile',
        name: 'Chiller CH-02',
        location: 'Harbour Point · Plant room B2',
        status: 'Operational',
        facts: [
          { label: 'Last service', value: '12 Sep' },
          { label: 'Warranty', value: 'Mar 2028' },
          { label: 'Cost YTD', value: '$4,210' },
          { label: 'Open jobs', value: '1' },
        ],
      },
    },
    {
      id: 'analyticsReporting',
      tag: 'Analytics and Reporting',
      title: 'Turn Data into Decisions',
      description:
        'Live dashboards and exportable reports show where to focus, from a single asset to the whole portfolio.',
      points: [
        'Job volume, response times, compliance and costs in real time',
        'Drill down by building, asset, vendor or team',
        'Exports ready for audits and board reviews',
      ],
      visual: {
        kind: 'chart',
        title: 'Maintenance spend by site',
        stats: [
          { label: 'SLA met', value: '96.4%' },
          { label: 'Spend YTD', value: '$184k' },
        ],
        bars: [
          { label: 'Harbour Point', value: 82 },
          { label: 'Tower B', value: 64 },
          { label: 'Northgate', value: 48 },
          { label: 'Bayview', value: 36 },
          { label: 'Westport', value: 22 },
        ],
      },
    },
  ] satisfies OverviewModule[],
  darkModules: [
    {
      id: 'workflowBuilder',
      tag: 'Fleet Workflow Builder',
      title: 'Work as One with Your Teams and Vendors',
      description:
        'Design approvals, routing and escalations that match how you operate, so every task reaches the right person at the right time.',
      points: [
        'Conditional routing by site, asset type or priority',
        'Multi-step approvals based on cost and urgency',
        'Instant vendor access through a simple link',
      ],
      visual: {
        kind: 'steps',
        title: 'Workflow',
        steps: [
          { kind: 'Trigger', text: 'Repair quote above $5,000' },
          { kind: 'If', text: 'Approved by regional manager' },
          { kind: 'Then', text: 'Create a work order + notify vendor' },
        ],
      },
    },
    {
      id: 'auditTracking',
      tag: 'Audit Tracking & Inspections',
      title: 'Ready for Every Audit',
      description:
        'Time-stamped records and digital inspections keep every site compliant and every action accountable.',
      points: [
        'Every action logged automatically by user and role',
        'Digital inspection checklists with photos and signatures',
        'Exportable logs for any time frame or asset type',
      ],
      visual: {
        kind: 'log',
        title: 'Audit log',
        entries: [
          { when: '09:42', who: 'Aisha K.', what: 'completed fire door inspection, Stair A' },
          { when: '09:15', who: 'Workflow', what: 'requested approval for WO-2291' },
          { when: '08:58', who: 'Marco L.', what: 'uploaded lift certificate to Tower B' },
        ],
      },
    },
    {
      id: 'preventiveMaintenance',
      tag: 'Preventive & Predictive Maintenance',
      title: 'Solve Tomorrow’s Problems Today',
      description:
        'Recurring schedules and rule-based predictions keep equipment running and help your team act early.',
      points: [
        'Automatic PPM jobs for HVAC, plumbing, lifts and fire safety',
        'Predictive alerts linked to the rule that triggered them',
        'Compliance calendar with reminders before every due date',
      ],
      visual: {
        kind: 'jobs',
        title: 'Planned jobs',
        items: [
          {
            title: 'HVAC filter replacement',
            location: 'Tower B · AHU-07',
            status: 'Due in 4h',
            tone: 'due',
          },
          {
            title: 'Lift annual certification',
            location: 'Core lifts L1–L3',
            status: 'Scheduled',
            tone: 'info',
          },
          {
            title: 'Emergency lighting test',
            location: 'Northgate Mall',
            status: 'Completed',
            tone: 'done',
          },
        ],
      },
    },
    {
      id: 'documentManagement',
      tag: 'Document Management',
      title: 'Every File Where You Need It',
      description:
        'Manuals, permits, certificates and contracts stay organized, linked to the work they support and ready for inspection.',
      points: [
        'Documents attached to assets, jobs, locations and vendors',
        'Version control with a full edit history',
        'Expiry reminders for permits and contracts',
      ],
      visual: {
        kind: 'files',
        title: 'Documents',
        items: [
          {
            title: 'Fire safety certificate.pdf',
            location: 'Tower B · Permit',
            status: 'Expires in 30d',
            tone: 'due',
          },
          {
            title: 'CH-02 O&M manual.pdf',
            location: 'Chiller CH-02 · Manual',
            status: 'Linked',
            tone: 'info',
          },
          {
            title: 'Q3 lift inspection.pdf',
            location: 'Core lifts · Report',
            status: 'Verified',
            tone: 'done',
          },
        ],
      },
    },
  ] satisfies OverviewModule[],
  extend: {
    title: 'Extend Fleet Your Way',
    description: 'Connect your existing tools and put AI and email to work across your operations.',
    items: [
      {
        id: 'integrations',
        title: '20+ integrations',
        description:
          'Connect finance, ERP, access control, tenant portals and building systems through ready integrations and a REST API.',
        action: 'View integrations',
      },
      {
        id: 'runnerAi',
        title: 'RunnerAI',
        description:
          'Create workflows and dashboards from plain-language commands, on secure, ring-fenced servers.',
        action: 'Meet RunnerAI',
      },
      {
        id: 'fleetMail',
        title: 'Fleet Mail',
        description:
          'Turn incoming emails into tracked work orders and keep staff and vendors updated by email.',
        action: 'Explore Fleet Mail',
      },
    ] satisfies { id: PlatformDetailId; title: string; description: string; action: string }[],
  },
  audiences: {
    eyebrow: 'Web & Mobile',
    title: 'A Platform for Everyone',
    description:
      'Fleet works on desktop, tablet and phone, with iOS and Android apps, giving every person the right view of the same live data.',
    action: { label: 'Explore Web & Mobile', href: '/platform/web-and-mobile' },
    items: [
      {
        title: 'For managers',
        description: 'Plan schedules, approve costs and follow every site from live dashboards.',
        screen: 'Portfolio · 14 locations',
        tasks: [
          {
            title: 'Approve repair quote',
            location: 'Harbour Point',
            status: 'Due today',
            tone: 'due',
          },
          {
            title: 'SLA report, September',
            location: 'All regions',
            status: 'Ready',
            tone: 'done',
          },
        ],
      },
      {
        title: 'For field teams',
        description: 'Start, update and close jobs on site with photos, checklists and signatures.',
        screen: 'Today · 4 tasks',
        tasks: [
          {
            title: 'Fire door inspection',
            location: 'Level 3 · Stair A',
            status: 'Due in 2h',
            tone: 'due',
          },
          {
            title: 'Boiler annual service',
            location: 'Plant room B2',
            status: 'Scheduled',
            tone: 'info',
          },
        ],
      },
      {
        title: 'For tenants and vendors',
        description:
          'Submit requests with photos, receive updates and see assigned jobs through a simple link.',
        screen: 'My requests',
        tasks: [
          {
            title: 'Air conditioning too warm',
            location: 'Unit 1204',
            status: 'Assigned',
            tone: 'info',
          },
          { title: 'Kitchen tap leak', location: 'Unit 1204', status: 'Resolved', tone: 'done' },
        ],
      },
    ] satisfies { title: string; description: string; screen: string; tasks: StatusItem[] }[],
  },
  why: {
    eyebrow: 'Why Fleet',
    title: 'Built for Real Estate, Backed by People',
    description:
      'Fleet is purpose-built for multi-site real estate teams, with fast onboarding, transparent usage-based pricing and support that knows your region.',
    stats: [
      { value: 'Up to 40%', label: 'less reactive maintenance' },
      { value: 'Under 7 days', label: 'to onboard your team' },
      { value: '99.99%', label: 'uptime, backed by SLA' },
    ],
    points: [
      {
        title: 'Built for multi-site teams',
        description: 'Rules, reports and permissions set by property, region or portfolio.',
      },
      {
        title: 'Secure by design',
        description: 'Role-based access, encrypted storage and full audit trails.',
      },
      {
        title: 'Live, localized support',
        description: 'Chat with our team, with most tickets answered within the hour.',
      },
    ],
  },
  industries: {
    eyebrow: 'Industries',
    title: 'A Solution for Every Property Type',
    items: [
      'Shopping malls and retail',
      'Hospitality and F&B',
      'Shipping and logistics',
      'Residential communities',
      'Commercial offices',
      'Mixed-use developments',
      'Schools and campuses',
      'Vehicle fleets',
    ],
  },
}

export const webMobile = {
  hero: {
    eyebrow: 'Web & Mobile',
    title: 'Your Operations, on Every Screen',
    description:
      'Fleet runs in the browser and on iOS and Android, so managers plan from the desktop while technicians update jobs in real time from the field.',
    primaryAction: { label: 'Book a demo', href: '/contact' },
    highlights: ['iOS & Android', 'Works in any browser', 'Real-time sync'],
  },
  devices: {
    url: 'app.runfleet.com',
    greeting: 'Welcome, John S.',
    scope: 'Portfolio · 14 locations',
    stats: [
      { label: 'Open work orders', value: '128' },
      { label: 'SLA met', value: '96.4%' },
      { label: 'Preventive due', value: '37' },
    ],
    listTitle: 'Work orders',
    items: [
      {
        title: 'Chiller low pressure alarm',
        location: 'Harbour Point · Plant room',
        status: 'Overdue by 2d',
        tone: 'overdue',
      },
      {
        title: 'HVAC filter replacement',
        location: 'Tower B · Level 14',
        status: 'Due in 4h',
        tone: 'due',
      },
      {
        title: 'Loading bay door repair',
        location: 'Westport DC · Bay 07',
        status: 'Completed',
        tone: 'done',
      },
    ] satisfies StatusItem[],
    phoneTitle: 'Today · 4 tasks',
    phoneItems: [
      {
        title: 'Fire door inspection',
        location: 'Level 3 · Stair A',
        status: 'Due in 2h',
        tone: 'due',
      },
      {
        title: 'Boiler annual service',
        location: 'Plant room B2',
        status: 'Scheduled',
        tone: 'info',
      },
    ] satisfies StatusItem[],
    phoneActions: ['Start', 'Add photo'],
  },
  audiences: {
    eyebrow: 'A platform for everyone',
    title: 'Streamline Your Maintenance Operations',
    description:
      'Fleet connects everyone in your operation, with web and mobile views shaped around the needs of managers, field teams, tenants and vendors.',
  },
  rows: [
    {
      tag: 'Control',
      title: 'Full Visibility from Any Screen',
      description:
        'Follow every site, team and vendor from the desktop or your phone, with live numbers that update the moment work changes.',
      points: [
        'Live dashboards for job volume, SLAs and costs',
        'Approvals and alerts wherever you are',
        'The same data on desktop, tablet and phone',
      ],
      visual: {
        kind: 'chart',
        title: 'Portfolio at a glance',
        stats: [
          { label: 'SLA met', value: '96.4%' },
          { label: 'Open jobs', value: '128' },
        ],
        bars: [
          { label: 'Harbour Point', value: 46 },
          { label: 'Tower B', value: 28 },
          { label: 'Northgate', value: 19 },
          { label: 'Bayview', value: 12 },
          { label: 'Westport', value: 7 },
        ],
      },
    },
    {
      tag: 'Assets on site',
      title: 'Every Asset, One Scan Away',
      description:
        'Scan or search an asset to open its manuals, history and open work orders in seconds, right where the work happens.',
      points: [
        'Asset details, manuals and history on site',
        'Inspections recorded with photos and readings',
        'History updated for the whole team instantly',
      ],
      visual: {
        kind: 'asset',
        title: 'Scanned asset',
        name: 'Chiller CH-02',
        location: 'Harbour Point · Plant room B2',
        status: 'Operational',
        facts: [
          { label: 'Last service', value: '12 Sep' },
          { label: 'Warranty', value: 'Mar 2028' },
          { label: 'Manual', value: 'O&M manual.pdf' },
          { label: 'Open jobs', value: '1' },
        ],
      },
    },
    {
      tag: 'Communication',
      title: 'Clear Communication with Teams and Tenants',
      description:
        'Requests arrive with photos and location, and everyone involved sees progress and replies on the same job.',
      points: [
        'Tenants submit requests with photos from any device',
        'Updates and replies kept on the job history',
        'Notifications for every assignment and completion',
      ],
      visual: {
        kind: 'chat',
        title: 'Request · Unit 1204',
        request: {
          title: 'Air conditioning too warm',
          location: 'Bayview Residences · Unit 1204',
          status: 'Assigned',
          tone: 'info',
        },
        messages: [
          {
            from: 'Tenant',
            text: 'The living room unit is blowing warm air since this morning.',
            time: '09:12',
            own: false,
          },
          {
            from: 'Aisha K.',
            text: 'Thanks for the photo. I’ll be there at 11:00 to check the unit.',
            time: '09:20',
            own: true,
          },
          {
            from: 'Tenant',
            text: 'Perfect, thank you.',
            time: '09:21',
            own: false,
          },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  field: {
    eyebrow: 'Built for the field',
    title: 'Ready for Basements, Plant Rooms and Remote Sites',
    description:
      'Fleet stays fast and responsive in low-bandwidth areas, so technicians keep updating jobs, adding photos and closing work wherever they are.',
  },
  stories: {
    eyebrow: 'Customer stories',
    title: 'Hear It from Property Teams',
    items: [
      {
        quote:
          'Fleet has cut our reactive maintenance load by nearly 40%. We’ve finally got our technicians, asset logs, and job records in one place.',
        author: 'Property Ops Lead',
        company: 'Mixed-Use Development',
      },
      {
        quote:
          'Other platforms felt too complex or generic. Fleet gave us a purpose-built solution with faster support.',
        author: 'Director of Maintenance',
        company: 'Logistics Hub',
      },
    ],
  },
}

export const integrationsPage = {
  hero: {
    eyebrow: 'Integrations',
    title: 'Connect Fleet to the Tools You Already Use',
    description:
      'Fleet plugs into your existing tech stack with 20+ integrations and an open REST API, so finance, building and tenant systems work from the same live record.',
    primaryAction: { label: 'Book a demo', href: '/contact' },
    highlights: ['20+ integrations', 'Open REST API', 'Guided setup'],
  },
  featured: {
    eyebrow: 'Highlights',
    title: 'Featured Integrations',
    items: [
      {
        icon: 'accounting',
        title: 'Accounting and AP/AR',
        description:
          'Approved costs and invoices flow into your finance systems, keeping budgets accurate from first quote to final payment.',
      },
      {
        icon: 'bms',
        title: 'Building management systems',
        description:
          'BMS alarms and readings create work orders automatically, so the right team acts at the right moment.',
      },
      {
        icon: 'api',
        title: 'REST API',
        description:
          'Connect any system with a documented, secure REST API that follows your IT governance.',
      },
    ] satisfies { icon: IntegrationIcon; title: string; description: string }[],
    action: { label: 'Talk to our team', href: '/contact' },
  },
  directory: {
    title: 'All Integrations',
    searchLabel: 'Search integrations',
    searchPlaceholder: 'Search by system or use',
    filterLabel: 'Categories',
    all: 'All',
    results: '{count} integrations',
    empty: 'Try another search or category, or talk to our team about your system.',
    action: { label: 'Talk to our team', href: '/contact' },
    categories: {
      finance: 'Finance',
      operations: 'Operations',
      building: 'Building systems',
      tenants: 'Tenants and communication',
      developers: 'Developers',
    } satisfies Record<IntegrationCategory, string>,
    items: [
      {
        icon: 'accounting',
        category: 'finance',
        title: 'Accounting software',
        description:
          'Sync approved costs and invoices with your accounting system to keep budgets accurate.',
      },
      {
        icon: 'apAr',
        category: 'finance',
        title: 'AP/AR systems',
        description:
          'Send approved repair costs straight into your payables and receivables process.',
      },
      {
        icon: 'finance',
        category: 'finance',
        title: 'Finance tools',
        description:
          'Track maintenance spend by building, asset and vendor alongside your financial reporting.',
      },
      {
        icon: 'erp',
        category: 'operations',
        title: 'ERP software',
        description: 'Share assets, vendors and purchase data with your ERP for unified reporting.',
      },
      {
        icon: 'vendors',
        category: 'operations',
        title: 'Vendor portals',
        description:
          'Keep vendor records, jobs and documents in step with the portals your contractors use.',
      },
      {
        icon: 'access',
        category: 'building',
        title: 'Access control',
        description: 'Record on-site visits and vendor attendance automatically.',
      },
      {
        icon: 'bms',
        category: 'building',
        title: 'Building management systems',
        description: 'Turn BMS alarms and readings into work orders at the right moment.',
      },
      {
        icon: 'tenants',
        category: 'tenants',
        title: 'Tenant portals',
        description: 'Log tenant requests as tracked work orders and keep occupants updated.',
      },
      {
        icon: 'email',
        category: 'tenants',
        title: 'Email with Fleet Mail',
        description:
          'Turn incoming emails into work orders and send updates and approvals by email.',
      },
      {
        icon: 'api',
        category: 'developers',
        title: 'REST API',
        description: 'Build custom connections to any system with a documented, secure REST API.',
      },
    ] satisfies IntegrationItem[],
  },
  cta: {
    eyebrow: 'Get started',
    title: 'Ready to Connect Your Stack?',
    description:
      'Tell us about the systems you use today, and our team will map out how Fleet connects to them during onboarding.',
    action: { label: 'Book a demo', href: '/contact' },
    panelTitle: 'Connected systems',
    panelItems: [
      { title: 'Accounting software', location: 'Finance', status: 'Connected', tone: 'done' },
      {
        title: 'Building management system',
        location: 'Building systems',
        status: 'Connected',
        tone: 'done',
      },
      { title: 'Tenant portal', location: 'Tenants', status: 'Connected', tone: 'done' },
      { title: 'ERP software', location: 'Operations', status: 'In setup', tone: 'info' },
    ] satisfies StatusItem[],
  },
}

export type PreventiveIcon = 'schedules' | 'workOrders' | 'predictions' | 'compliance'

export type RunnerAiIcon = 'data' | 'tasks' | 'workflows' | 'dashboards'

export const runnerAiPage = {
  hero: {
    eyebrow: 'RunnerAI',
    title: 'Intelligence That Runs Your Operations',
    description:
      'RunnerAI is Fleet’s secure, rule-based AI for real estate and facilities teams. Type what you need, and it fetches data, creates tasks, edits workflows and builds dashboards across every site.',
    primaryAction: { label: 'Book a demo', href: '/contact' },
    secondaryAction: { label: 'Talk to our specialist', href: '/contact' },
    demo: {
      title: 'RunnerAI',
      context: 'Live data · 14 locations',
      prompt: 'Set up a weekly sanitation routine for every food court, with supervisor sign-off.',
      reply: 'Done. I created a workflow for 9 food courts across 4 malls.',
      steps: [
        { kind: 'Every', text: 'Monday, 06:00' },
        { kind: 'Then', text: 'Create a sanitation checklist per food court' },
        { kind: 'Then', text: 'Request supervisor sign-off with photos' },
      ],
      action: 'Deploy to 9 sites',
    },
  },
  challenge: {
    pressure: {
      title: 'Multi-Site Operations Move Fast',
      description:
        'Retail stores, shopping malls, logistics hubs and mixed-use developments each bring thousands of moving parts, from maintenance and compliance to reporting and assets.',
      points: [
        'Thousands of tasks across regions',
        'Local rules for every site',
        'Data spread across teams',
      ],
    },
    answer: {
      title: 'RunnerAI Keeps Pace',
      description:
        'RunnerAI anticipates next steps, structures workflows and surfaces the right insight instantly, so your teams spend more time on operations.',
    },
  },
  capabilities: {
    title: 'Intelligence That Helps You Plan Ahead',
    description: 'Four ways RunnerAI works for your team, all from plain-language commands.',
    tabs: [
      {
        icon: 'data',
        label: 'Data fetching',
        title: 'Answers from Your Live Data',
        description:
          'Ask a question in plain language and RunnerAI fetches the answer from your live operational data, with the work orders and assets behind it.',
        points: [
          'Questions about costs, SLAs, assets and vendors',
          'Answers drawn from live data across every site',
          'Sources shown for every answer',
        ],
        visual: {
          kind: 'chat',
          title: 'Ask RunnerAI',
          request: {
            title: 'Live data · 14 locations',
            location: 'Sources: 86 work orders · 14 assets',
            status: 'Answered',
            tone: 'done',
          },
          messages: [
            {
              from: 'You',
              text: 'Which chillers are due for service this month?',
              time: '09:12',
              own: true,
            },
            {
              from: 'RunnerAI',
              text: '6 chillers across 3 sites are due. Harbour Point has 3, including CH-02, which is due on 14 Oct.',
              time: '09:12',
              own: false,
            },
          ],
        },
      },
      {
        icon: 'tasks',
        label: 'Task creation',
        title: 'Tasks Created from a Sentence',
        description:
          'Describe the job and RunnerAI creates the work order or task, with the right asset, location, assignee and due date.',
        points: [
          'Work orders and tasks created from plain language',
          'Assigned to the right team or vendor',
          'Checklists, assets and due dates added automatically',
        ],
        visual: {
          kind: 'jobs',
          title: 'Tasks created by RunnerAI',
          items: [
            {
              title: 'Inspect AHU-07 vibration',
              location: 'Tower B · Level 14 · Aisha K.',
              status: 'Due tomorrow',
              tone: 'due',
            },
            {
              title: 'Replace lobby light fitting',
              location: 'Bayview Residences · Marco L.',
              status: 'Assigned',
              tone: 'info',
            },
            {
              title: 'Quarterly fire door check',
              location: 'Northgate Mall · 12 doors',
              status: 'Scheduled',
              tone: 'info',
            },
          ],
        },
      },
      {
        icon: 'workflows',
        label: 'Workflow editing',
        title: 'Edit Workflows in Seconds',
        description:
          'Tell RunnerAI what to change and it updates the steps, triggers and conditions, then rolls the change out to every site or selected regions.',
        points: [
          'Modify steps, triggers and conditions by text',
          'Deploy updates to all sites or selected regions',
          'Every change logged and traceable',
        ],
        visual: {
          kind: 'steps',
          title: 'Workflow updated',
          steps: [
            {
              kind: 'Trigger',
              text: 'Repair quote received',
            },
            {
              kind: 'If',
              text: 'Cost above $3,000 (was $5,000)',
            },
            {
              kind: 'Then',
              text: 'Request regional manager approval',
            },
          ],
        },
      },
      {
        icon: 'dashboards',
        label: 'Dashboard creation',
        title: 'Dashboards on Request',
        description:
          'Ask for any view and RunnerAI builds it in seconds from your live operational data, ready to share or pin.',
        points: [
          'Work order trends and backlog summaries',
          'Vendor performance and regional comparisons',
          'Portfolio-wide executive summaries',
        ],
        visual: {
          kind: 'chart',
          title: 'Work order backlog · 30 days',
          stats: [
            {
              label: 'Open',
              value: '128',
            },
            {
              label: 'Closed',
              value: '412',
            },
          ],
          bars: [
            {
              label: 'Harbour Point',
              value: 34,
            },
            {
              label: 'Tower B',
              value: 27,
            },
            {
              label: 'Northgate',
              value: 25,
            },
            {
              label: 'Bayview',
              value: 22,
            },
            {
              label: 'Westport',
              value: 20,
            },
          ],
        },
      },
    ] satisfies (Omit<OverviewModule, 'id' | 'tag'> & { icon: RunnerAiIcon; label: string })[],
  },
  steps: {
    eyebrow: 'How it works',
    title: 'From Request to Running Workflow',
    items: [
      {
        title: 'Ask',
        description:
          'Type what you need in plain language, from a new routine to a portfolio report.',
      },
      {
        title: 'Build',
        description:
          'RunnerAI structures the workflow or dashboard using your data and industry standards.',
      },
      {
        title: 'Deploy',
        description:
          'Roll it out instantly to every site or selected regions, adapted to local rules.',
      },
      {
        title: 'Improve',
        description:
          'Live insights and traceable predictions show where to adjust next, keeping every site on the same playbook.',
      },
    ],
  },
  rows: [
    {
      tag: 'Productivity',
      title: 'Less Admin, More Operations',
      description:
        'RunnerAI automates the creation and adjustment of the workflows behind maintenance, compliance, reporting and asset management.',
      points: [
        'Manual configuration replaced by simple commands',
        'Every property runs on the same playbook',
        'More time for on-site work',
      ],
      visual: {
        kind: 'log',
        title: 'RunnerAI activity',
        entries: [
          {
            when: '09:42',
            who: 'RunnerAI',
            what: 'updated the inspection workflow for 4 UAE sites',
          },
          {
            when: '09:15',
            who: 'RunnerAI',
            what: 'created the weekly vendor performance dashboard',
          },
          { when: '08:58', who: 'RunnerAI', what: 'suggested a PPM plan for 6 new chillers' },
        ],
      },
    },
    {
      tag: 'Decisions',
      title: 'Smarter Decisions, Faster',
      description:
        'Ask a question and get a live answer, so leaders and site teams act on current data with confidence.',
      points: [
        'Answers drawn from your live operational data',
        'Asset downtime and budget insights on request',
        'Regional comparisons in seconds',
      ],
      visual: {
        kind: 'chart',
        title: 'Vendor performance · UAE',
        stats: [
          { label: 'On-time jobs', value: '94%' },
          { label: 'Avg. response', value: '2.4h' },
        ],
        bars: [
          { label: 'HVAC vendor', value: 96 },
          { label: 'Lift vendor', value: 91 },
          { label: 'Electrical vendor', value: 87 },
          { label: 'Plumbing vendor', value: 82 },
        ],
      },
    },
    {
      tag: 'Visibility',
      title: 'A Clear View of Every Site',
      description:
        'Portfolio-wide summaries bring the past, present and future of your operation together in one place.',
      points: [
        'Work order trends and asset downtime analysis',
        'Compliance risk scoring by site',
        'Budget and preventive maintenance insights',
      ],
      visual: {
        kind: 'jobs',
        title: 'Top 10 malls · Risk',
        items: [
          {
            title: 'Northgate Mall',
            location: '3 open compliance items',
            status: 'Review',
            tone: 'due',
          },
          {
            title: 'Harbour Point',
            location: 'All checks complete',
            status: 'On track',
            tone: 'done',
          },
          {
            title: 'Marina Walk',
            location: '1 asset near end of life',
            status: 'Plan',
            tone: 'info',
          },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  rules: {
    eyebrow: 'Rule-based by design',
    title: 'Intelligence Shaped by Your Rules',
    description:
      'RunnerAI works within the rules you define, so every action stays traceable, compliant and aligned with your enterprise standards.',
    action: { label: 'Talk to our specialist', href: '/contact' },
  },
  security: {
    eyebrow: 'Secure AI framework',
    title: 'AI That Stays Within Your Perimeter',
    description:
      'RunnerAI runs on dedicated, client-specific servers, so sensitive information stays inside your organizational boundary.',
    items: [
      { title: 'Isolated compute', description: 'A dedicated environment for each organization.' },
      { title: 'Encrypted data', description: 'Encryption in transit and at rest.' },
      {
        title: 'Full audit trails',
        description: 'Every AI-generated action is logged and traceable.',
      },
      {
        title: 'Flexible deployment',
        description: 'Cloud, on-premise or hybrid, with GDPR, PDPL and PDPA support.',
      },
    ],
  },
  industries: {
    title: 'A Solution for Every Property Type',
    description:
      'From retail portfolios to logistics hubs, RunnerAI adapts to your assets and your market.',
  },
  integrate: {
    title: 'Built to Integrate',
    description:
      'RunnerAI works across Fleet’s 20+ integrations, drawing on finance, building and tenant data for a complete picture.',
    action: { label: 'See all integrations', href: '/platform/integrations' },
  },
}

export const fleetMailPage = {
  hero: {
    eyebrow: 'Fleet Mail',
    title: 'Every Email, a Tracked Job',
    description:
      'Fleet Mail turns requests from tenants and vendors into work orders the moment they arrive, and keeps everyone informed with automatic email updates.',
    primaryAction: { label: 'Book a demo', href: '/contact' },
    secondaryAction: { label: 'Talk to our team', href: '/contact' },
    hub: {
      center: 'Fleet Mail',
      nodes: ['Tenants', 'Vendors', 'Technicians', 'Managers'],
    },
  },
  challenge: {
    pressure: {
      title: 'Requests Arrive from Everywhere',
      description:
        'Tenants, vendors and staff send requests, quotes and updates to shared inboxes, and each message holds part of a job.',
      points: ['Tenant requests', 'Vendor quotes', 'Shared inboxes'],
    },
    answer: {
      title: 'Fleet Mail Brings Them Together',
      description:
        'Every email becomes part of one structured record, with the right team assigned and everyone kept up to date.',
    },
  },
  intro: {
    title: 'Keep Every Conversation Moving, in One Place',
    description:
      'Requests, replies and approvals flow through one record your whole team can see, while tenants and vendors keep using the email they know.',
  },
  rows: [
    {
      tag: 'Shared inbox',
      title: 'One Organized Queue',
      description:
        'A shared inbox becomes an organized queue, with every request logged, prioritized and assigned.',
      points: [
        'Each request logged with sender, attachments and location',
        'Duplicate requests grouped into one job',
        'Response times tracked against your SLAs',
      ],
      visual: {
        kind: 'jobs',
        title: 'maintenance@ · Today',
        items: [
          {
            title: 'Light out in lobby',
            location: 'From: Unit 1204 tenant',
            status: 'Work order created',
            tone: 'info',
          },
          {
            title: 'Quote for chiller service',
            location: 'From: HVAC vendor',
            status: 'Awaiting approval',
            tone: 'due',
          },
          {
            title: 'Re: Kitchen tap leak',
            location: 'From: Unit 802 tenant',
            status: 'Resolved',
            tone: 'done',
          },
        ],
      },
    },
    {
      tag: 'Email to work order',
      title: 'Requests Become Work Orders Instantly',
      description:
        'Each email turns into a work order, and every reply is added to the job history so the full conversation stays in context.',
      points: [
        'Photos and documents attached to the work order',
        'Smart routing by site, category and priority',
        'Replies kept on the job history automatically',
      ],
      visual: {
        kind: 'chat',
        title: 'WO-2318 · Email thread',
        request: {
          title: 'Light out in lobby',
          location: 'Bayview Residences · Lobby',
          status: 'Assigned',
          tone: 'info',
        },
        messages: [
          {
            from: 'Tenant',
            text: 'The main light in the lobby went out this evening.',
            time: '18:04',
            own: false,
          },
          {
            from: 'Fleet Mail',
            text: 'Thanks. Work order WO-2318 is created and assigned to Marco L.',
            time: '18:04',
            own: true,
          },
          {
            from: 'Marco L.',
            text: 'Replaced the fitting. Photo attached.',
            time: '09:30',
            own: true,
          },
        ],
      },
    },
    {
      tag: 'Approvals',
      title: 'Approvals in One Click',
      description:
        'Managers approve or reject costs straight from the email, and the job moves on automatically.',
      points: [
        'Approval requests sent to the right approver',
        'One-click approve or reject from the inbox',
        'Every decision recorded on the job',
      ],
      visual: {
        kind: 'steps',
        title: 'Approval by email',
        steps: [
          { kind: 'Email', text: 'Vendor quote received: $3,800' },
          { kind: 'Approve', text: 'Finance manager approves from inbox' },
          { kind: 'Then', text: 'Vendor notified + job scheduled' },
        ],
      },
    },
    {
      tag: 'Updates',
      title: 'Everyone Stays Informed',
      description:
        'Fleet sends the right message at the right time, so teams, vendors and tenants always know what comes next.',
      points: [
        'Assignment and due date notifications',
        'Escalations as deadlines approach',
        'Completion summaries with photo proof',
      ],
      visual: {
        kind: 'log',
        title: 'Emails sent today',
        entries: [
          {
            when: '09:31',
            who: 'Tenant, Unit 1204',
            what: 'received a completion summary with photo',
          },
          { when: '08:00', who: 'Marco L.', what: 'received today’s 4 assignments' },
          {
            when: '07:45',
            who: 'Regional manager',
            what: 'received the weekly overdue jobs summary',
          },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  flow: {
    eyebrow: 'How it works',
    title: 'From Inbox to Resolved Job',
    items: [
      {
        title: 'Receive',
        description: 'Tenants and vendors email your maintenance address as usual.',
      },
      {
        title: 'Create',
        description: 'Fleet Mail turns each email into a work order with its photos and location.',
      },
      {
        title: 'Route',
        description: 'The job goes to the right team or vendor by site, category and priority.',
      },
      {
        title: 'Update',
        description: 'Everyone receives progress, approvals and completion emails automatically.',
      },
    ],
  },
  banner: {
    eyebrow: 'Built for every sender',
    title: 'Email That Works for Everyone',
    description:
      'Tenants and vendors keep using the email they know, while your team works from one structured, trackable record.',
    action: { label: 'Talk to our team', href: '/contact' },
  },
  connect: {
    title: 'Connect Your Entire Operation',
    description:
      'Fleet Mail is part of the Fleet platform, so every email links to your assets, documents, workflows and reports.',
    items: [
      {
        title: 'Everyone on the same record',
        description: 'Tenants, vendors and staff follow one job, with every message in context.',
      },
      {
        title: 'A clear view of every request',
        description: 'See volumes, response times and open requests across every site.',
      },
      {
        title: 'More time for real work',
        description: 'Automatic logging and updates give your team time back for on-site work.',
      },
    ],
  },
  industries: {
    title: 'A Solution for Every Property Type',
    description:
      'From residential communities to logistics hubs, Fleet Mail fits the way each property communicates.',
  },
  integrate: {
    title: 'Built to Integrate',
    description:
      'Fleet Mail works alongside Fleet’s 20+ integrations, including tenant portals, finance tools and building systems.',
    action: { label: 'See all integrations', href: '/platform/integrations' },
  },
}

export const workflowBuilderPage = {
  hero: {
    eyebrow: 'Fleet Workflow Builder',
    title: 'Workflows That Adapt to How You Operate',
    description:
      'Shape your maintenance operations around your structure, approval chains, vendor policies and cost thresholds with a visual builder anyone on your team can use.',
    primaryAction: { label: 'Book a demo', href: '/contact' },
    highlights: ['Visual builder', 'Multi-step approvals', 'Live in your first week'],
  },
  build: {
    eyebrow: 'Fleet Workflow Builder',
    title: 'Build Your Own Fleet',
    description:
      'You define the process and Fleet follows it, so tasks reach the right people at the right time, every time.',
    helpTitle: 'We Help You Map Every Process',
    helpDescription:
      'Our onboarding team works with you to map your approvals, routing and escalations into Fleet during your first week.',
    action: { label: 'Talk to our team', href: '/contact' },
    center: 'Workflow',
    nodes: ['Approvals', 'Routing', 'Escalations', 'Notifications', 'Roles', 'Sites'],
  },
  panels: {
    blocks: {
      title: 'Every Building Block in One Place',
      description:
        'Combine triggers, conditions and actions to match your standard operating procedures across every site.',
      panelTitle: 'Workflow building blocks',
      status: 'Added',
      items: [
        {
          title: 'Trigger',
          description: 'New request, cost above threshold or deadline approaching',
        },
        { title: 'Condition', description: 'Site, asset type, priority, vendor or cost' },
        { title: 'Approval', description: 'Supervisor, manager or finance sign-off' },
        { title: 'Action', description: 'Assign, notify, escalate or create a work order' },
      ],
    },
    integrations: {
      title: 'Integration Is Key',
      description:
        'Workflows act on your documents, assets, permissions and vendors, and connect to finance, building and tenant systems.',
      panelTitle: 'Connected to your workflows',
      action: { label: 'View integrations', href: '/platform/integrations' },
      items: [
        {
          title: 'Accounting software',
          location: 'Approved costs sync automatically',
          status: 'Connected',
          tone: 'done',
        },
        {
          title: 'Building management system',
          location: 'Alarms trigger workflows',
          status: 'Connected',
          tone: 'done',
        },
        { title: 'Fleet Mail', location: 'Approvals by email', status: 'Connected', tone: 'done' },
      ] satisfies StatusItem[],
    },
  },
  templates: {
    title: 'All Your Processes in a Single Platform',
    description:
      'Start from ready-made workflows for common processes, then adapt each one to your sites, roles and thresholds.',
    tag: 'Template',
    items: [
      { title: 'Cost approval over $5,000', description: 'Supervisor sign-off before scheduling' },
      {
        title: 'Vendor routing by building',
        description: 'Plumbing to vendors in Building A, in-house in Building B',
      },
      {
        title: 'Preventive and reactive split',
        description: 'PPM to dedicated staff, reactive to general teams',
      },
      {
        title: 'SLA deadline alerts',
        description: 'Regional managers alerted as deadlines approach',
      },
      { title: 'Tenant move-in', description: 'Inspection, asset checks and documents' },
      {
        title: 'Compliance document check',
        description: 'Required documents attached before closing',
      },
    ],
  },
  benefits: {
    learnMore: 'Learn more',
    items: [
      {
        href: '/features/audit-tracking',
        title: 'Consistency',
        description: 'Every job follows the same steps, keeping operations accurate and compliant.',
      },
      {
        href: '/features/reactive-maintenance',
        title: 'Efficiency',
        description: 'Repeatable logic reduces manual handovers from job creation to closeout.',
      },
      {
        href: '/features/analytics-and-reporting',
        title: 'Insights',
        description: 'Structured workflows produce cleaner data and more actionable reports.',
      },
    ],
  },
}

export const preventivePage = {
  hero: {
    eyebrow: 'Preventive & Predictive Maintenance',
    title: 'Stay One Step Ahead of Every Breakdown',
    description:
      'Plan recurring maintenance for every asset, act on rule-based predictions and keep equipment running across every site, with up to 40% less reactive work.',
    primaryAction: { label: 'Book a demo', href: '/contact' },
    secondaryAction: { label: 'Explore the platform', href: '/platform' },
    highlights: ['Recurring schedules', 'Rule-based predictions', 'Compliance calendar'],
    prediction: {
      title: 'Fleet prediction',
      asset: 'AHU-07 · Tower B, L14',
      risk: 'High risk',
      message: 'Vibration trending above baseline for 9 days. Schedule maintenance within 7 days.',
      action: 'Create work order',
    },
  },
  challenge: {
    pressure: {
      title: 'Every Asset Has Its Own Rhythm',
      description:
        'HVAC, lifts, plumbing, lighting and fire safety each follow their own schedules, checklists and compliance dates across every site.',
      points: ['Recurring schedules', 'Statutory inspections', 'Multiple sites'],
    },
    answer: {
      title: 'Fleet Keeps Every Plan on Track',
      description:
        'Fleet turns maintenance plans into automatic schedules and uses live data to show where to act next.',
    },
  },
  capabilities: {
    title: 'The Smart Way to Run Your Preventive Maintenance Program',
    description:
      'From recurring schedules to traceable predictions, every part of your program in one platform.',
    tabs: [
      {
        icon: 'schedules',
        label: 'Schedules',
        title: 'Recurring PPM Schedules',
        description:
          'Schedule preventive tasks for HVAC, plumbing, lighting, lifts and fire safety by time or by usage.',
        points: [
          'Time-based and usage-based schedules',
          'Best-practice checklists for each asset type',
          'Workload balanced across technicians and vendors',
        ],
        visual: {
          kind: 'jobs',
          title: 'Planned jobs · This week',
          items: [
            {
              title: 'HVAC filter replacement',
              location: 'Tower B · AHU-07',
              status: 'Due in 4h',
              tone: 'due',
            },
            {
              title: 'Lift annual certification',
              location: 'Core lifts L1–L3',
              status: 'Scheduled',
              tone: 'info',
            },
            {
              title: 'Emergency lighting test',
              location: 'Northgate Mall',
              status: 'Completed',
              tone: 'done',
            },
          ],
        },
      },
      {
        icon: 'workOrders',
        label: 'Work orders',
        title: 'Jobs Created Automatically',
        description:
          'Fleet generates PPM work orders from each asset’s plan and assigns them to the right team, with checklists attached.',
        points: [
          'Work orders generated from every maintenance plan',
          'Assigned to in-house teams or vendors',
          'Photo proof and readings captured on completion',
        ],
        visual: {
          kind: 'steps',
          title: 'PPM automation',
          steps: [
            { kind: 'Plan', text: 'Chiller CH-02 · quarterly service' },
            { kind: 'Then', text: 'Create work order 14 days ahead' },
            { kind: 'Then', text: 'Assign to HVAC vendor + attach checklist' },
          ],
        },
      },
      {
        icon: 'predictions',
        label: 'Predictions',
        title: 'Predictive Alerts You Can Trace',
        description:
          'Rule-based machine learning scores equipment risk from live and historical data, and every alert links to the rule behind it.',
        points: [
          'Equipment risk scored from live and historical data',
          'Each alert linked to the rule that triggered it',
          'One click from prediction to work order',
        ],
        visual: {
          kind: 'jobs',
          title: 'Risk alerts',
          items: [
            {
              title: 'AHU-07 vibration trending up',
              location: 'Tower B · Level 14',
              status: 'High risk',
              tone: 'overdue',
            },
            {
              title: 'Pump P-03 pressure drift',
              location: 'Harbour Point',
              status: 'Medium risk',
              tone: 'due',
            },
            {
              title: 'Chiller CH-02 back within range',
              location: 'Harbour Point',
              status: 'Resolved',
              tone: 'done',
            },
          ],
        },
      },
      {
        icon: 'compliance',
        label: 'Compliance',
        title: 'A Compliance Calendar for Every Site',
        description:
          'Track statutory inspections and certificates with reminders before every due date, and keep the evidence on each record.',
        points: [
          'Reminders before every inspection and certificate date',
          'Certificates stored with each asset',
          'Audit-ready history for every site',
        ],
        visual: {
          kind: 'files',
          title: 'Upcoming compliance',
          items: [
            {
              title: 'Fire safety certificate',
              location: 'Tower B · Due 30 Oct',
              status: 'Due in 24d',
              tone: 'due',
            },
            {
              title: 'Lift inspection report',
              location: 'Core lifts · Due 12 Nov',
              status: 'Scheduled',
              tone: 'info',
            },
            {
              title: 'Legionella risk assessment',
              location: 'Bayview Residences',
              status: 'Up to date',
              tone: 'done',
            },
          ],
        },
      },
    ] satisfies (Omit<OverviewModule, 'id' | 'tag'> & { icon: PreventiveIcon; label: string })[],
  },
  rows: [
    {
      tag: 'Rule-based AI',
      title: 'Predictions That Prevent Downtime',
      description:
        'Fleet watches equipment trends and flags early warning signs, so your team acts before a fault reaches tenants.',
      points: [
        'Readings trending above baseline raise an alert',
        'Recommended next step with every alert',
        'Suggested plans for new equipment with RunnerAI',
      ],
      visual: {
        kind: 'log',
        title: 'Prediction activity',
        entries: [
          {
            when: '09:42',
            who: 'Fleet',
            what: 'flagged AHU-07 vibration above baseline for 9 days',
          },
          { when: '09:44', who: 'Aisha K.', what: 'created a work order from the alert' },
          { when: '08:58', who: 'RunnerAI', what: 'suggested a PPM plan for 6 new chillers' },
        ],
      },
    },
    {
      tag: 'Planning',
      title: 'Prevention Pays Off',
      description:
        'Shift work from reactive repairs to planned maintenance and see the difference in uptime, cost and tenant comfort.',
      points: [
        'Preventive and reactive work tracked side by side',
        'Maintenance spend planned by asset lifecycle',
        'Recurring issues turned into preventive tasks',
      ],
      visual: {
        kind: 'chart',
        title: 'Planned share of maintenance',
        stats: [
          { label: 'Planned work', value: '78%' },
          { label: 'Reactive work', value: '22%' },
        ],
        bars: [
          { label: 'Harbour Point', value: 84 },
          { label: 'Tower B', value: 80 },
          { label: 'Northgate', value: 76 },
          { label: 'Bayview', value: 72 },
          { label: 'Westport', value: 68 },
        ],
      },
    },
    {
      tag: 'Teams and vendors',
      title: 'Seamless Coordination with Teams and Vendors',
      description:
        'Route each preventive job to in-house technicians or contracted vendors, and follow progress in real time.',
      points: [
        'PPM jobs routed by site, trade and contract',
        'Vendors join through a simple link',
        'Photo proof and readings on every completed job',
      ],
      visual: {
        kind: 'jobs',
        title: 'This month’s PPM by assignee',
        items: [
          {
            title: 'In-house HVAC team',
            location: '24 jobs · 3 sites',
            status: '92% done',
            tone: 'done',
          },
          { title: 'Lift vendor', location: '9 jobs · 5 sites', status: 'On track', tone: 'info' },
          {
            title: 'Fire safety vendor',
            location: '12 jobs · 4 sites',
            status: '2 due today',
            tone: 'due',
          },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  steps: {
    eyebrow: 'How it works',
    title: 'From Plan to Proof',
    items: [
      {
        title: 'Plan',
        description:
          'Load your assets and maintenance plans, or start from best-practice templates.',
      },
      {
        title: 'Schedule',
        description:
          'Fleet creates and assigns work orders automatically, ahead of every due date.',
      },
      {
        title: 'Complete',
        description: 'Technicians follow checklists and capture photos and readings on site.',
      },
      {
        title: 'Predict',
        description: 'Live and historical data highlight risk early, so plans keep improving.',
      },
    ],
  },
  banner: {
    eyebrow: 'Get started',
    title: 'Plan Preventive Maintenance, Properly',
    description:
      'Our team helps you load your assets and maintenance plans during onboarding, so schedules run from your first week.',
    action: { label: 'Book a demo', href: '/contact' },
  },
  trust: {
    title: 'Preventive Maintenance You Can Rely On',
    description:
      'Fleet is purpose-built for real estate teams managing complex assets across multiple properties.',
    items: [
      {
        title: 'Built for real estate',
        description: 'Rules and plans set by property, region or portfolio.',
      },
      {
        title: 'Mobile for the field',
        description: 'Technicians complete checklists on any phone or tablet, iOS and Android.',
      },
      {
        title: 'Audit-ready records',
        description: 'Every inspection and service is time-stamped and attributed.',
      },
    ],
  },
  quote: {
    text: 'Fleet has cut our reactive maintenance load by nearly 40%. We’ve finally got our technicians, asset logs, and job records in one place.',
    author: 'Property Ops Lead',
    company: 'Mixed-Use Development',
  },
  industries: {
    title: 'Preventive Maintenance for Every Property Type',
    description:
      'From shopping malls to logistics hubs, Fleet adapts to your assets and your market.',
  },
  integrate: {
    title: 'Built to Integrate',
    description:
      'Connect building management systems so alarms and readings feed your preventive plans, alongside 20+ other integrations.',
    action: { label: 'See all integrations', href: '/platform/integrations' },
  },
}

export const reactivePage = {
  hero: {
    eyebrow: 'Reactive Maintenance',
    title: 'Resolve Every Repair, Fast',
    description:
      'Capture unplanned issues the moment they happen, send them to the right team and track every repair to completion against your SLAs.',
    primaryAction: { label: 'Book a demo', href: '/contact' },
    secondaryAction: { label: 'Explore the platform', href: '/platform' },
    highlights: ['Live SLA tracking', 'Photo-based requests', 'Smart routing'],
    visual: {
      kind: 'jobs',
      title: 'Work orders · Today',
      items: [
        {
          title: 'Water leak, Unit 3B',
          location: 'Bayview Residences · Photo attached',
          status: 'Overdue by 2h',
          tone: 'overdue',
        },
        {
          title: 'Loading bay door repair',
          location: 'Westport DC · Contracted vendor',
          status: 'Assigned',
          tone: 'info',
        },
        {
          title: 'Chiller alarm',
          location: 'Harbour Point · On-call engineer',
          status: 'In progress',
          tone: 'due',
        },
        {
          title: 'Lighting fault, Level 2',
          location: 'Northgate Mall',
          status: 'Completed',
          tone: 'done',
        },
      ],
    } satisfies OverviewVisual,
  },
  columns: [
    {
      title: 'Clear status for every job',
      description:
        'See every request from first report to sign-off, with live status, SLA timers and photo proof in one place.',
    },
    {
      title: 'Updates for everyone involved',
      description:
        'Tenants, technicians, vendors and managers receive the right update at the right moment, by app or email.',
    },
    {
      title: 'Records in the cloud',
      description:
        'Every job, photo and approval is stored securely and available from any device, wherever your team works.',
    },
  ],
  rows: [
    {
      tag: 'Work order management',
      title: 'End-to-End Reactive Maintenance',
      description:
        'From the first report to the final sign-off, every repair follows a clear path with the right people informed at each step.',
      points: [
        'Requests routed to in-house teams or vendors by site, trade and urgency',
        'Costs above set thresholds sent to the right approver automatically',
        'Open, overdue and completed jobs visible across every property',
      ],
      visual: {
        kind: 'jobs',
        title: 'Job dashboard · All sites',
        items: [
          { title: '42 open jobs', location: 'Across 14 sites', status: 'Live', tone: 'info' },
          {
            title: '3 jobs near SLA deadline',
            location: 'Alerts sent to supervisors',
            status: 'Due soon',
            tone: 'due',
          },
          {
            title: 'Repair quote above $3,000',
            location: 'Sent to finance for approval',
            status: 'Approval',
            tone: 'due',
          },
          {
            title: '118 jobs closed this week',
            location: 'Photo proof on every job',
            status: 'Done',
            tone: 'done',
          },
        ],
      },
    },
    {
      tag: 'Communication',
      title: 'Straight to the Point',
      description:
        'Requests arrive with photos, location and asset details, so technicians understand the problem before they arrive.',
      points: [
        'Photo and video evidence from the requester',
        'Asset history and manuals on every job',
        'Replies and updates kept on the job history',
      ],
      visual: {
        kind: 'chat',
        title: 'WO-2291 · Water leak',
        request: {
          title: 'Water leak, Unit 3B',
          location: 'Bayview Residences · Riser valve V-12',
          status: 'Assigned',
          tone: 'info',
        },
        messages: [
          {
            from: 'Tenant',
            text: 'Water is coming through the bathroom ceiling. Photo attached.',
            time: '08:12',
            own: false,
          },
          {
            from: 'Marco L.',
            text: 'On my way. Valve V-12 was serviced in June, checking it first.',
            time: '08:20',
            own: true,
          },
          {
            from: 'Marco L.',
            text: 'Seal replaced and leak fixed. Photos added to the job.',
            time: '11:05',
            own: true,
          },
        ],
      },
    },
    {
      tag: 'Location',
      title: 'Every Job, Pinned to Its Place',
      description:
        'Each repair is linked to its building, floor, room and asset, so the right person goes straight to the right spot.',
      points: [
        'Jobs organized by building, floor, room or zone',
        'Related jobs at the same location grouped automatically',
        'Recurring issues highlighted by building and asset',
      ],
      visual: {
        kind: 'asset',
        title: 'Job location',
        name: 'Riser valve V-12',
        location: 'Bayview Residences · Level 3 · Unit 3B',
        status: 'In repair',
        facts: [
          { label: 'Building', value: 'Bayview Residences' },
          { label: 'Floor', value: 'Level 3' },
          { label: 'Last service', value: '14 Jun' },
          { label: 'Jobs this year', value: '2' },
        ],
      },
    },
  ] satisfies Omit<OverviewModule, 'id'>[],
  happy: {
    eyebrow: 'Service quality',
    title: 'Everything Working, Everyone Happy',
    description:
      'Fast, well-documented repairs keep tenants comfortable and teams accountable. Live SLA tracking shows where service is strong and where to step in.',
    points: [
      'Response and resolution times measured live',
      'Alerts before a deadline passes',
      'SLA performance reviewed by building each month',
    ],
    visual: {
      kind: 'chart',
      title: 'SLA met by building · September',
      stats: [
        { label: 'SLA met', value: '96.4%' },
        { label: 'Avg. response', value: '1.8h' },
      ],
      bars: [
        { label: 'Harbour Point', value: 98 },
        { label: 'Tower B', value: 97 },
        { label: 'Northgate', value: 96 },
        { label: 'Bayview', value: 95 },
        { label: 'Westport', value: 93 },
      ],
    } satisfies OverviewVisual,
  },
}

export const analyticsPage: AnalyticsPageContent = {
  hero: {
    eyebrow: 'Analytics and Reporting',
    title: 'Make Smarter Operational Decisions',
    description:
      'Fleet turns day-to-day maintenance into actionable insight, with live dashboards and exportable reports for every team, site and asset.',
    primaryAction: {
      label: 'Book a demo',
      href: '/contact',
    },
    secondaryAction: {
      label: 'Explore the platform',
      href: '/platform',
    },
    highlights: ['Live dashboards', 'Custom KPIs', 'One-click exports'],
    visual: {
      kind: 'chart',
      title: 'Maintenance spend vs budget · YTD',
      stats: [
        {
          label: 'Spend YTD',
          value: '$184k',
        },
        {
          label: 'Budget used',
          value: '71%',
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
  columns: [
    {
      title: 'Real-time KPIs',
      description:
        'Track job volume, response times, compliance and costs as they change, across every site.',
    },
    {
      title: 'Custom dashboards',
      description:
        'Build views for each department and role, from technicians to the executive team.',
    },
    {
      title: 'In-depth reporting',
      description:
        'Drill into performance by building, asset, vendor or team, and export reports in a few clicks.',
    },
  ],
  rows: [
    {
      tag: 'Spending',
      title: 'Keep Maintenance Spend on Budget',
      description:
        'See spend by cost center as it happens and compare it with the budget for every site, so you act before costs drift.',
      points: [
        'Spend tracked by building, asset and vendor',
        'Budget comparisons for every site',
        'Costs above set thresholds sent for approval',
      ],
      visual: {
        kind: 'jobs',
        title: 'Budget by cost center',
        items: [
          {
            title: 'HVAC maintenance',
            location: '$62k of $80k',
            status: '78% used',
            tone: 'info',
          },
          {
            title: 'Lifts and escalators',
            location: '$31k of $35k',
            status: '89% used',
            tone: 'due',
          },
          {
            title: 'Fire safety',
            location: '$18k of $30k',
            status: '60% used',
            tone: 'done',
          },
        ],
      },
    },
    {
      tag: 'Cost analysis',
      title: 'Full-Scope Cost Analysis',
      description:
        'Understand where every dollar goes, from a single asset to the whole portfolio.',
      points: [
        'Repair history and costs for every asset',
        'Vendor costs compared across regions',
        'Assets using the most budget highlighted',
      ],
      visual: {
        kind: 'jobs',
        title: 'Top cost drivers · Q3',
        items: [
          {
            title: 'Chiller CH-02',
            location: 'Harbour Point · 9 jobs',
            status: '$12,400',
            tone: 'neutral',
          },
          {
            title: 'Lift bank L1–L3',
            location: 'Northgate Mall · 6 jobs',
            status: '$8,900',
            tone: 'neutral',
          },
          {
            title: 'Loading bay doors',
            location: 'Westport DC · 4 jobs',
            status: '$5,200',
            tone: 'neutral',
          },
        ],
      },
    },
    {
      tag: 'Forecasting',
      title: 'Plan Ahead with Data',
      description:
        'Lifecycle and downtime insights help you forecast replacements and plan capital spend with confidence.',
      points: [
        'Replacement forecasts based on real usage',
        'Asset downtime and lifecycle insights',
        'Preventive and reactive trends over time',
      ],
      visual: {
        kind: 'chart',
        title: 'Forecast replacement spend',
        stats: [
          {
            label: 'Next 12 months',
            value: '$96k',
          },
          {
            label: 'Assets due',
            value: '14',
          },
        ],
        bars: [
          {
            label: '2027',
            value: 40,
          },
          {
            label: '2028',
            value: 64,
          },
          {
            label: '2029',
            value: 52,
          },
          {
            label: '2030',
            value: 78,
          },
          {
            label: '2031',
            value: 58,
          },
        ],
      },
    },
  ],
  reports: {
    eyebrow: 'Reporting',
    title: 'Your Operation. Your Reports.',
    description:
      'Share the right numbers with the right people, on schedule and in the format they need.',
    points: [
      'Scheduled reports delivered by email',
      'Exports for audits and board packs',
      'Portfolio-wide executive summaries',
      'Reports for every department and role',
    ],
    visual: {
      kind: 'steps',
      title: 'Scheduled report',
      steps: [
        {
          kind: 'Data',
          text: 'Work orders, SLAs and costs',
        },
        {
          kind: 'Filter',
          text: 'UAE region · last 30 days',
        },
        {
          kind: 'Send',
          text: 'Every Monday to regional managers',
        },
      ],
    },
  },
  extras: [
    {
      icon: 'ai',
      title: 'Dashboards on Request with RunnerAI',
      description:
        'Ask a question in plain language and RunnerAI builds the dashboard from your live data in seconds.',
      action: {
        label: 'Meet RunnerAI',
        href: '/platform/runner-ai',
      },
    },
    {
      icon: 'plug',
      title: 'Connect Your Data to the Tools You Use',
      description:
        'Share Fleet data with finance and business tools through 20+ integrations and an open REST API.',
      action: {
        label: 'See all integrations',
        href: '/platform/integrations',
      },
    },
  ],
}

export const assetPage: ProductPageContent = {
  hero: {
    eyebrow: 'Asset Management',
    title: 'Total Visibility Over Every Asset You Manage',
    description:
      'From HVAC systems across dozens of buildings to pumps, lifts and lighting, Fleet gives you one live register of every asset you own, accessible from anywhere.',
    primaryAction: {
      label: 'Book a demo',
      href: '/contact',
    },
    secondaryAction: {
      label: 'Explore the platform',
      href: '/platform',
    },
    highlights: ['Digital asset profiles', 'Full repair history', 'Warranty alerts'],
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
  challenge: {
    pressure: {
      title: 'Assets Spread Across Every Site',
      description:
        'HVAC units, lifts, pumps and lighting across dozens of buildings, each with its own manuals, warranties and service history.',
      points: ['Many sites', 'Many asset types', 'Many records'],
    },
    answer: {
      title: 'One Live Register for Everything',
      description:
        'Fleet creates a live digital register of your physical assets, accessible from anywhere, so every decision starts with complete context.',
    },
  },
  capabilities: {
    title: 'Scale Asset Management Across Your Portfolio',
    description:
      'From a single chiller to thousands of assets across every site, all in one connected register.',
    tabs: [
      {
        icon: 'register',
        label: 'Asset register',
        title: 'Every Asset, Profiled',
        description:
          'Capture make, model, serial number, location, purchase date and warranty details for every asset.',
        points: [
          'Digital profiles for every asset',
          'Organized by building, floor, room or zone',
          'Search across your whole portfolio',
        ],
        visual: {
          kind: 'jobs',
          title: 'Asset register · Harbour Point',
          items: [
            {
              title: 'Chiller CH-02',
              location: 'Plant room B2 · HVAC',
              status: 'Operational',
              tone: 'done',
            },
            {
              title: 'Lift L2',
              location: 'Core lifts · Vertical transport',
              status: 'Service due',
              tone: 'due',
            },
            {
              title: 'Booster pump P-03',
              location: 'Basement · Plumbing',
              status: 'Operational',
              tone: 'done',
            },
          ],
        },
      },
      {
        icon: 'workOrders',
        label: 'Work orders',
        title: 'Connected to Work Orders and PPM',
        description:
          'Link each asset to its maintenance schedule and service history, and generate PPM jobs automatically.',
        points: [
          'Maintenance plans attached to each asset',
          'PPM jobs created automatically',
          'Every repair added to the asset history',
        ],
        visual: {
          kind: 'steps',
          title: 'Asset automation',
          steps: [
            {
              kind: 'Asset',
              text: 'Chiller CH-02 · quarterly plan',
            },
            {
              kind: 'Then',
              text: 'Create PPM work order',
            },
            {
              kind: 'Then',
              text: 'Log service to asset history',
            },
          ],
        },
      },
      {
        icon: 'lifecycle',
        label: 'Lifecycle',
        title: 'Lifecycle and Downtime Insight',
        description:
          'Spot underperforming equipment, forecast replacements and plan capital spend with live usage insights.',
        points: [
          'Downtime tracked per asset',
          'Repair costs over the asset’s life',
          'Replacement forecasts based on real usage',
        ],
        visual: {
          kind: 'chart',
          title: 'Downtime hours by asset type · Q3',
          stats: [
            {
              label: 'Total downtime',
              value: '112h',
            },
            {
              label: 'Assets at risk',
              value: '6',
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
              label: 'Pumps',
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
      },
      {
        icon: 'mobile',
        label: 'On site',
        title: 'Asset Details in the Field',
        description:
          'Technicians open asset details on site, log inspections in real time and attach photos and notes from their phones.',
        points: [
          'Search or scan to open any asset',
          'Inspections recorded with photos and readings',
          'History updated for the whole team instantly',
        ],
        visual: {
          kind: 'asset',
          title: 'Scanned asset',
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
    ],
  },
  rows: [
    {
      tag: 'Documentation',
      title: 'Every Manual Where You Need It',
      description:
        'Link manuals, photos, inspection reports and certificates to each asset for fast, on-site reference.',
      points: [
        'Files attached to every asset profile',
        'Certificates and warranties stored together',
        'Available on any phone or tablet',
      ],
      visual: {
        kind: 'files',
        title: 'Chiller CH-02 · Documents',
        items: [
          {
            title: 'CH-02 O&M manual.pdf',
            location: 'Manual',
            status: 'Linked',
            tone: 'info',
          },
          {
            title: 'Warranty certificate.pdf',
            location: 'Valid to Mar 2028',
            status: 'Active',
            tone: 'done',
          },
          {
            title: 'Q3 service report.pdf',
            location: 'Uploaded 12 Sep',
            status: 'Verified',
            tone: 'done',
          },
        ],
      },
    },
    {
      tag: 'RunnerAI',
      title: 'Automate Asset Management with AI',
      description:
        'RunnerAI suggests maintenance plans for new equipment and builds asset dashboards from a plain-language request.',
      points: [
        'Suggested PPM plans for new assets',
        'Dashboards of assets nearing end of life',
        'Answers about any asset in seconds',
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
            what: 'listed 4 assets nearing end of life',
          },
          {
            when: '08:58',
            who: 'Aisha K.',
            what: 'approved the suggested chiller plan',
          },
        ],
      },
    },
    {
      tag: 'Warranties and contracts',
      title: 'Warranties and Contracts Under Control',
      description:
        'Fleet tracks warranty and contract dates for every asset and alerts your team before anything expires.',
      points: [
        'Alerts before warranties and contracts expire',
        'Warranty status visible on every job',
        'Contract details linked to each vendor',
      ],
      visual: {
        kind: 'jobs',
        title: 'Upcoming expiries',
        items: [
          {
            title: 'Lift L2 maintenance contract',
            location: 'Northgate Mall',
            status: 'In 30 days',
            tone: 'due',
          },
          {
            title: 'Chiller CH-04 warranty',
            location: 'Tower B',
            status: 'In 60 days',
            tone: 'info',
          },
          {
            title: 'Booster pump P-03 warranty',
            location: 'Harbour Point',
            status: 'Renewed',
            tone: 'done',
          },
        ],
      },
    },
  ],
  steps: {
    eyebrow: 'How it works',
    title: 'From Register to Replacement',
    items: [
      {
        title: 'Register',
        description: 'Import your asset lists or create profiles with every detail you need.',
      },
      {
        title: 'Maintain',
        description: 'Link each asset to its plans and work orders, so service runs on schedule.',
      },
      {
        title: 'Track',
        description: 'Repairs, costs, documents and downtime build a full history automatically.',
      },
      {
        title: 'Plan',
        description: 'Lifecycle insights show when to repair, replace or invest.',
      },
    ],
  },
  banner: {
    eyebrow: 'Get started',
    title: 'Bring Every Asset into One Place',
    description:
      'Our onboarding team helps you import asset lists and maintenance plans, so your register is ready in your first week.',
    action: {
      label: 'Book a demo',
      href: '/contact',
    },
  },
  trust: {
    title: 'Why Fleet for Asset Management',
    description:
      'Fleet is purpose-built for real estate and facility teams, whether you manage lifts, boilers, lighting or plumbing.',
    items: [
      {
        title: 'Built for real estate',
        description:
          'Assets organized the way your portfolio works, by property, building and zone.',
      },
      {
        title: 'Mobile for the field',
        description:
          'Asset details, history and documents on any phone or tablet, iOS and Android.',
      },
      {
        title: 'Connected to every module',
        description: 'Assets link to work orders, documents, workflows and reports.',
      },
    ],
  },
  quote: {
    text: 'Fleet has cut our reactive maintenance load by nearly 40%. We’ve finally got our technicians, asset logs, and job records in one place.',
    author: 'Property Ops Lead',
    company: 'Mixed-Use Development',
  },
  industries: {
    title: 'Every Industry Has Assets',
    description:
      'From shopping malls to logistics hubs, Fleet adapts to the assets in your portfolio.',
  },
  integrate: {
    title: 'Built to Integrate',
    description:
      'Connect building management systems, ERPs and finance tools so asset data flows where you need it, through 20+ integrations.',
    action: {
      label: 'See all integrations',
      href: '/platform/integrations',
    },
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'What is asset management in Fleet?',
        answer:
          'A live digital register of every asset across your properties, with maintenance history, costs, warranties and documents in one place, connected to work orders and preventive plans.',
      },
      {
        question: 'What information can I store for each asset?',
        answer:
          'Make, model, serial number, location, purchase date and warranty details, plus manuals, photos, inspection reports, certificates and the full repair history.',
      },
      {
        question: 'Can technicians see asset details on site?',
        answer:
          'Yes. Technicians open any asset from their phone or tablet to see its manuals, history and open work orders, and record inspections with photos and readings.',
      },
      {
        question: 'How does Fleet help plan replacements?',
        answer:
          'Fleet tracks repair costs, downtime and usage for every asset, so you can spot underperforming equipment, forecast replacements and plan capital spend.',
      },
      {
        question: 'Can Fleet alert me before warranties expire?',
        answer:
          'Yes. Fleet tracks warranty and contract dates and alerts your team before they expire.',
      },
    ],
  },
}

export const documentPage: ProductPageContent = {
  hero: {
    eyebrow: 'Document Management',
    title: 'Centralize Your Maintenance Files in One Smart Hub',
    description:
      'Warranties, vendor agreements, compliance checklists and SOPs live in one place, linked to the work they support and ready the moment you need them.',
    primaryAction: {
      label: 'Book a demo',
      href: '/contact',
    },
    secondaryAction: {
      label: 'Explore the platform',
      href: '/platform',
    },
    highlights: ['Version control', 'Linked to assets and jobs', 'Audit-ready exports'],
    visual: {
      kind: 'files',
      title: 'Documents · Tower B',
      items: [
        {
          title: 'Fire safety certificate.pdf',
          location: 'Permit · Tower B',
          status: 'Expires in 30d',
          tone: 'due',
        },
        {
          title: 'CH-02 O&M manual.pdf',
          location: 'Manual · Chiller CH-02',
          status: 'Linked',
          tone: 'info',
        },
        {
          title: 'Q3 lift inspection.pdf',
          location: 'Report · Core lifts',
          status: 'Verified',
          tone: 'done',
        },
        {
          title: 'HVAC service contract.pdf',
          location: 'Contract · CoolAir vendor',
          status: 'Active',
          tone: 'done',
        },
      ],
    },
  },
  challenge: {
    pressure: {
      title: 'Every Job Depends on the Right File',
      description:
        'Safety certificates, inspection reports, manuals and invoices are proof of compliance and continuity, and teams need them at the point of use.',
      points: ['Certificates', 'Manuals', 'Contracts'],
    },
    answer: {
      title: 'Every File, One Click Away',
      description:
        'Fleet keeps documentation organized, linked to the work it supports and accessible from anywhere.',
    },
  },
  capabilities: {
    title: 'Manage Documents Across Your Portfolio',
    description:
      'Store, organize and retrieve every file in one place, built into the platform your team already uses.',
    tabs: [
      {
        icon: 'storage',
        label: 'Storage',
        title: 'Attach Files Anywhere',
        description:
          'Upload documents directly to assets, jobs, locations, vendors or users, and keep everything in context.',
        points: [
          'Files linked to assets, jobs and locations',
          'Tagged by type, site, department or asset class',
          'Storage built into Fleet',
        ],
        visual: {
          kind: 'files',
          title: 'Chiller CH-02 · Files',
          items: [
            {
              title: 'O&M manual.pdf',
              location: 'Manual',
              status: 'Linked',
              tone: 'info',
            },
            {
              title: 'Warranty certificate.pdf',
              location: 'Warranty',
              status: 'Active',
              tone: 'done',
            },
            {
              title: 'Service report Q3.pdf',
              location: 'Report',
              status: 'Verified',
              tone: 'done',
            },
          ],
        },
      },
      {
        icon: 'versions',
        label: 'Versions',
        title: 'Version Control and Audit Trail',
        description:
          'Track file changes over time with a full edit history. See who uploaded what and when, and roll back when needed.',
        points: [
          'Full edit history for every file',
          'Previous versions restored in a click',
          'Every upload time-stamped and attributed',
        ],
        visual: {
          kind: 'log',
          title: 'Version history · Fire safety plan',
          entries: [
            {
              when: '09:42',
              who: 'Marco L.',
              what: 'uploaded version 4 with updated exits',
            },
            {
              when: 'Mon',
              who: 'Aisha K.',
              what: 'approved version 3',
            },
            {
              when: 'Sep 12',
              who: 'Fleet',
              what: 'archived version 2',
            },
          ],
        },
      },
      {
        icon: 'permissions',
        label: 'Access',
        title: 'Role-Based Permissions',
        description:
          'Control who can view, upload or edit documentation, so sensitive information stays with authorized users.',
        points: [
          'View, upload and edit rights by role',
          'Vendor access limited to their own jobs',
          'Sensitive files kept secure',
        ],
        visual: {
          kind: 'jobs',
          title: 'Access · Vendor contracts',
          items: [
            {
              title: 'Finance team',
              location: 'Can view and edit',
              status: 'Edit',
              tone: 'info',
            },
            {
              title: 'Site managers',
              location: 'Can view',
              status: 'View',
              tone: 'done',
            },
            {
              title: 'Vendors',
              location: 'Their own contracts only',
              status: 'Limited',
              tone: 'due',
            },
          ],
        },
      },
      {
        icon: 'search',
        label: 'Search',
        title: 'Find Any File in Seconds',
        description:
          'Every file is discoverable through global search and linked to your dashboards and reports.',
        points: [
          'Global search across every site',
          'Filters by type, site and asset',
          'Results linked to their jobs and assets',
        ],
        visual: {
          kind: 'files',
          title: 'Search: "lift certificate"',
          items: [
            {
              title: 'Lift certificate 2026.pdf',
              location: 'Northgate Mall · Core lifts',
              status: 'Valid',
              tone: 'done',
            },
            {
              title: 'Lift certificate 2026.pdf',
              location: 'Tower B · Lift L2',
              status: 'Expires in 45d',
              tone: 'due',
            },
            {
              title: 'Lift inspection Q2.pdf',
              location: 'Harbour Point',
              status: 'Archived',
              tone: 'info',
            },
          ],
        },
      },
    ],
  },
  rows: [
    {
      tag: 'In the field',
      title: 'SOPs Inside Every Work Order',
      description:
        'Technicians open SOPs, installation guides and past reports directly from the job, right where the work happens.',
      points: [
        'Documents linked to every work order',
        'Available on any phone or tablet',
        'Budget approvals attached for full traceability',
      ],
      visual: {
        kind: 'files',
        title: 'WO-2304 · Attached documents',
        items: [
          {
            title: 'HVAC filter replacement SOP.pdf',
            location: 'Procedure',
            status: 'Required',
            tone: 'info',
          },
          {
            title: 'AHU-07 manual.pdf',
            location: 'Manual',
            status: 'Linked',
            tone: 'info',
          },
          {
            title: 'Budget approval.pdf',
            location: 'Approved by finance',
            status: 'Approved',
            tone: 'done',
          },
        ],
      },
    },
    {
      tag: 'Compliance',
      title: 'Always Ready for Inspection',
      description:
        'Certificates, permits and reports stay current, with reminders before anything expires.',
      points: [
        'Expiry tracking for permits and contracts',
        'Timestamped logs for compliance',
        'Fast retrieval during emergencies or audits',
      ],
      visual: {
        kind: 'jobs',
        title: 'Expiring soon',
        items: [
          {
            title: 'Fire safety certificate',
            location: 'Tower B',
            status: 'In 30 days',
            tone: 'due',
          },
          {
            title: 'Elevator permit',
            location: 'Northgate Mall',
            status: 'In 45 days',
            tone: 'due',
          },
          {
            title: 'Vendor contract · CoolAir',
            location: 'All sites',
            status: 'Renewed',
            tone: 'done',
          },
        ],
      },
    },
    {
      tag: 'Sharing',
      title: 'Packages for Audits and Handovers',
      description:
        'Download document packages for audits, vendor handovers or internal reviews in a few clicks.',
      points: [
        'Packages built by site, asset or date range',
        'Shared securely with auditors and vendors',
        'A complete record for property handovers',
      ],
      visual: {
        kind: 'steps',
        title: 'Audit package',
        steps: [
          {
            kind: 'Select',
            text: 'Tower B · fire safety · 2026',
          },
          {
            kind: 'Package',
            text: '14 certificates and reports',
          },
          {
            kind: 'Share',
            text: 'Secure link sent to auditor',
          },
        ],
      },
    },
  ],
  steps: {
    eyebrow: 'How it works',
    title: 'From Upload to Audit',
    items: [
      {
        title: 'Upload',
        description:
          'Add files from desktop or phone, or move your existing archive with our team.',
      },
      {
        title: 'Link',
        description: 'Attach each file to its asset, job, location or vendor.',
      },
      {
        title: 'Use',
        description: 'Technicians and managers open the right document at the point of work.',
      },
      {
        title: 'Share',
        description: 'Export packages for audits, handovers and reviews.',
      },
    ],
  },
  banner: {
    eyebrow: 'Get started',
    title: 'Bring Every File into One Place',
    description:
      'Our onboarding team helps you move manuals, certificates and contracts into Fleet and link them to your assets in your first week.',
    action: {
      label: 'Book a demo',
      href: '/contact',
    },
  },
  trust: {
    title: 'Why Fleet for Document Management',
    description:
      'Document management works across every Fleet module, built for busy teams managing multiple sites, asset types and contractors.',
    items: [
      {
        title: 'Built into every module',
        description: 'Files linked to assets, jobs, workflows and reports.',
      },
      {
        title: 'Secure by design',
        description: 'Role-based permissions, encrypted storage and full audit trails.',
      },
      {
        title: 'Fast to find',
        description: 'Global search and smart tags across every site.',
      },
    ],
  },
  quote: {
    text: 'Other platforms felt too complex or generic. Fleet gave us a purpose-built solution with faster support.',
    author: 'Director of Maintenance',
    company: 'Logistics Hub',
  },
  industries: {
    title: 'Every Industry Runs on Documents',
    description:
      'From hotels to logistics hubs, Fleet keeps every property’s paperwork organized and audit-ready.',
  },
  integrate: {
    title: 'Built to Integrate',
    description:
      'Connect finance tools, vendor portals and Fleet Mail so documents arrive where they belong, through 20+ integrations.',
    action: {
      label: 'See all integrations',
      href: '/platform/integrations',
    },
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'What kinds of documents can I store in Fleet?',
        answer:
          'Manuals, warranties, permits, inspection reports, certificates, vendor contracts, SOPs, invoices and photos, all linked to the assets, jobs and locations they belong to.',
      },
      {
        question: 'Can technicians open documents on site?',
        answer:
          'Yes. Technicians open SOPs, manuals and past reports directly from the work order on any phone or tablet.',
      },
      {
        question: 'How does version control work?',
        answer:
          'Fleet keeps a full edit history for every file, showing who uploaded what and when, and lets you restore earlier versions.',
      },
      {
        question: 'Who can see sensitive documents?',
        answer:
          'You decide. Role-based permissions control who can view, upload or edit each document, and vendors see only their own files.',
      },
      {
        question: 'Can Fleet remind me before certificates expire?',
        answer:
          'Yes. Fleet tracks expiry dates for permits, certificates and contracts and reminds your team in advance.',
      },
    ],
  },
}

export const auditPage: AnalyticsPageContent = {
  hero: {
    eyebrow: 'Audit Tracking & Inspections',
    title: 'Stay Compliant. Stay Accountable.',
    description:
      'Fleet records what happened, when and by whom, and runs your inspections digitally, so every site is ready for any internal or external audit.',
    primaryAction: {
      label: 'Book a demo',
      href: '/contact',
    },
    secondaryAction: {
      label: 'Explore the platform',
      href: '/platform',
    },
    highlights: ['Time-stamped logs', 'Digital inspections', 'Exportable audit reports'],
    visual: {
      kind: 'log',
      title: 'Audit trail · Tower B',
      entries: [
        {
          when: '09:42',
          who: 'Marco L.',
          what: 'closed fire door inspection WO-2291 with 6 photos',
        },
        {
          when: '09:15',
          who: 'Aisha K.',
          what: 'approved a $6,800 chiller repair',
        },
        {
          when: '08:58',
          who: 'Fleet',
          what: 'recorded Lift L2 status change to Service due',
        },
      ],
    },
  },
  columns: [
    {
      title: 'Time-stamped activity logs',
      description:
        'Every action is recorded automatically, from work order creation to completion and technician comments.',
    },
    {
      title: 'User accountability',
      description:
        'See who did what by user or role, from a technician closing a job to a manager approving a cost.',
    },
    {
      title: 'Exportable audit reports',
      description: 'Generate detailed logs for any time frame, site or asset type in a few clicks.',
    },
  ],
  rows: [
    {
      tag: 'Inspections',
      title: 'Digital Inspections on Every Site',
      description:
        'Run inspection checklists on any phone or tablet, with photos, readings and signatures captured on the spot.',
      points: [
        'Checklists for fire safety, lifts, HVAC and more',
        'Photos, readings and signatures on every inspection',
        'Results linked to assets and locations',
      ],
      visual: {
        kind: 'jobs',
        title: 'Inspections this week · Northgate Mall',
        items: [
          {
            title: 'Fire door inspection',
            location: 'Level 2 · 14 doors',
            status: 'Completed',
            tone: 'done',
          },
          {
            title: 'Emergency lighting test',
            location: 'All floors',
            status: 'Due today',
            tone: 'due',
          },
          {
            title: 'Lift L2 monthly check',
            location: 'Core lifts',
            status: 'Scheduled',
            tone: 'info',
          },
        ],
      },
    },
    {
      tag: 'History',
      title: 'Full History for Every Job and Asset',
      description:
        'Drill into any asset or job to see its activity, costs, documents and every change, with notes and version history.',
      points: [
        'Status changes and updates captured automatically',
        'Costs and documents in one timeline',
        'Change notes with version history',
      ],
      visual: {
        kind: 'asset',
        title: 'Asset history',
        name: 'Fire pump FP-01',
        location: 'Tower B · Pump room',
        status: 'Inspected',
        facts: [
          {
            label: 'Last inspection',
            value: '03 Oct',
          },
          {
            label: 'Inspections logged',
            value: '48',
          },
          {
            label: 'Certificate',
            value: 'Valid to Jun 2027',
          },
          {
            label: 'Changes this year',
            value: '12',
          },
        ],
      },
    },
    {
      tag: 'Approvals',
      title: 'Approvals That Run the Same Way Everywhere',
      description:
        'Set mandatory approval checkpoints and routing rules with the Workflow Builder, so compliance steps run consistently at every location.',
      points: [
        'Mandatory checkpoints for high-cost work',
        'Routing rules by site, cost or asset type',
        'Every approval recorded with name and time',
      ],
      visual: {
        kind: 'steps',
        title: 'Approval checkpoint',
        steps: [
          {
            kind: 'Trigger',
            text: 'Repair quote above $5,000',
          },
          {
            kind: 'Approve',
            text: 'Regional manager signs off',
          },
          {
            kind: 'Log',
            text: 'Approval added to the audit trail',
          },
        ],
      },
    },
  ],
  reports: {
    eyebrow: 'Audit readiness',
    title: 'Ready for Any Audit, Any Time',
    description:
      'Fleet compiles your records as work happens, so every review starts with complete, organized evidence.',
    points: [
      'Certificates and compliance forms stored with each record',
      'Edit rights limited to authorized personnel',
      'View access for leadership and auditors',
      'A complete digital paper trail for property handovers',
    ],
    visual: {
      kind: 'files',
      title: 'Audit pack · Tower B · 2026',
      items: [
        {
          title: 'Fire safety inspections.pdf',
          location: '52 records',
          status: 'Complete',
          tone: 'done',
        },
        {
          title: 'Lift certificates.pdf',
          location: '4 lifts',
          status: 'Valid',
          tone: 'done',
        },
        {
          title: 'Approval log.csv',
          location: '31 approvals',
          status: 'Exported',
          tone: 'info',
        },
      ],
    },
  },
  extras: [
    {
      icon: 'ai',
      title: 'Audit Answers on Request with RunnerAI',
      description:
        'Ask which inspections are due or who approved a repair, and RunnerAI answers from your live records in seconds.',
      action: {
        label: 'Meet RunnerAI',
        href: '/platform/runner-ai',
      },
    },
    {
      icon: 'workflow',
      title: 'Build Compliance into Every Workflow',
      description:
        'Design approval steps, checklists and sign-offs with the Workflow Builder, and every step is logged automatically.',
      action: {
        label: 'Explore the Workflow Builder',
        href: '/platform/workflow-builder',
      },
    },
  ],
}

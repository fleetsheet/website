import type { BadgeTone } from '@/components/ui/Badge.astro'

export type StatusItem = {
  title: string
  location?: string
  status: string
  tone: BadgeTone
}

export const meta = {
  title: 'Fleet | Unified Data and Intelligence for Real Estate',
  description:
    'Fleet is the commercial real estate management platform purpose-built for strategy, operations, and maintenance.',
}

export const hero = {
  announcement: {
    label: 'New',
    text: 'Rule-based AI agents for multi-site portfolios',
    href: '/#ai',
  },
  title: 'Unified Data and Intelligence for Real Estate',
  description:
    'Fleet is the commercial real estate management platform purpose-built for strategy, operations, and maintenance — every site, asset, and work order in one place.',
  primaryAction: { label: 'Book a demo', href: '/contact' },
  secondaryAction: { label: 'Explore the platform', href: '/#platform' },
  highlights: ['iOS & Android', 'Built-in audit logs', 'Ring-fenced data per organization'],
}

export const showcase = {
  greeting: 'Welcome, John S.',
  scope: 'Portfolio · 14 locations',
  filters: ['All regions', 'Last 30 days'],
  stats: [
    { label: 'Open work orders', value: '128' },
    { label: 'SLA met', value: '96.4%' },
    { label: 'Preventive due', value: '37' },
  ],
  workOrders: [
    {
      id: 'WO-2291',
      title: 'Chiller low pressure alarm',
      location: 'Harbour Point · Plant room',
      status: 'Overdue by 2d',
      tone: 'overdue',
    },
    {
      id: 'WO-2304',
      title: 'HVAC filter replacement',
      location: 'Tower B · Level 14',
      status: 'Due in 4h',
      tone: 'due',
    },
    {
      id: 'WO-2310',
      title: 'Fire door quarterly inspection',
      location: 'Northgate Mall · Stair A',
      status: 'Scheduled',
      tone: 'info',
    },
    {
      id: 'WO-2288',
      title: 'Loading bay door repair',
      location: 'Westport DC · Bay 07',
      status: 'Completed',
      tone: 'done',
    },
  ] satisfies (StatusItem & { id: string })[],
  prediction: {
    title: 'Fleet prediction',
    asset: 'AHU-07 · Tower B, L14',
    risk: 'High risk',
    message:
      'Vibration trending above baseline for 9 days. Schedule preventive maintenance within 7 days.',
    trend: [30, 34, 32, 38, 36, 42, 40, 48, 55, 60, 66, 72, 80, 92],
    alertFrom: 9,
    rule: 'Rule R-114 · traceable',
    action: 'Create work order',
  },
  audit: [
    { who: 'Aisha K.', what: 'closed WO-2288', when: '2m' },
    { who: 'Workflow', what: 'escalated WO-2291 to vendor', when: '1h' },
    { who: 'Marco L.', what: 'uploaded fire permit', when: '3h' },
  ],
}

export const unifiedModel = {
  eyebrow: 'One source of truth',
  title: 'From Fragmented Tools to a Unified Operating Model',
  description:
    'Spreadsheets, inboxes, shared drives, and vendor portals each hold part of the picture. Fleet connects them into one structured record — so every decision starts from complete context.',
  sources: ['Spreadsheets', 'Email threads', 'Shared drives', 'Vendor portals', 'Paper checklists'],
  outputs: ['Live dashboards', 'Asset history', 'Audit trail', 'Predictions'],
}

export const platform = {
  eyebrow: 'The platform',
  title: 'Not Just Another CMMS. Built for Multi-Site Real Estate.',
  description:
    'Enable only the modules your team needs. Each one shares the same data model — locations, assets, people, and history stay connected.',
  workOrders: {
    title: 'Work Orders & SLAs',
    description:
      'Schedule preventive tasks, track ad-hoc repairs, and route jobs to in-house teams or vendors.',
    items: [
      { initials: 'AK', title: 'Boiler annual service', status: 'Due in 4h', tone: 'due' },
      { initials: 'ML', title: 'Water leak, Unit 3B', status: 'Overdue by 2d', tone: 'overdue' },
      { initials: 'JT', title: 'Emergency lighting test', status: 'Completed', tone: 'done' },
    ] satisfies (StatusItem & { initials: string })[],
  },
  assets: {
    title: 'Asset Management',
    description:
      'Digital profiles with maintenance history, costs, warranties, and manuals — assigned to buildings and rooms.',
    asset: {
      name: 'Chiller CH-02',
      location: 'Harbour Point · Plant room B2',
      status: 'Operational',
      facts: [
        { label: 'Last service', value: '12 Sep' },
        { label: 'Warranty', value: 'Mar 2028' },
        { label: 'Cost YTD', value: '$4,210' },
      ],
    },
  },
  documents: {
    title: 'Document Management',
    description:
      'Manuals, warranties, inspection reports, and permits — audit-ready and accessible across sites.',
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
    ] satisfies StatusItem[],
  },
  workflows: {
    title: 'Custom Workflows',
    description:
      'Turn requests into action automatically. Approvals trigger work orders and vendor notifications without manual handoffs.',
    steps: [
      { kind: 'Trigger', text: 'Equipment upgrade request submitted' },
      { kind: 'If', text: 'Approved by site manager' },
      { kind: 'Then', text: 'Create a work order + notify vendor' },
    ],
  },
  auditLogs: {
    title: 'Audit Logs',
    description:
      'Every change is time-stamped and attributed. Stay compliant without chasing paper trails.',
    entries: [
      { when: '09:42', who: 'Aisha K.', what: 'changed status of WO-2304 to In progress' },
      { when: '09:15', who: 'Workflow', what: 'assigned WO-2310 to Northgate FM team' },
      { when: '08:58', who: 'Marco L.', what: 'attached inspection report to CH-02' },
    ],
  },
  mobile: {
    title: 'Mobile for the Field',
    description:
      'Technicians and tenants on iOS and Android. Log claims with photos, notes, and linked assets.',
    heading: 'Today · 4 tasks',
    task: {
      title: 'Fire door inspection',
      location: 'Level 3 · Stairwell A',
      status: 'Due in 2h',
      tone: 'due',
    } satisfies StatusItem,
    actions: ['Start', 'Add photo'],
  },
}

export const aiAgents = {
  eyebrow: 'Fleet AI agents',
  title: 'Ask Your Portfolio Anything',
  description:
    "Fleet's AI agent answers questions in plain language using your live portfolio data, and builds the dashboard to go with each answer. No pivot tables or report requests needed.",
  points: [
    {
      title: 'Answers in Plain Language',
      description:
        "Ask about costs, SLAs, assets, or vendors and get answers from your live data, not last month's export.",
    },
    {
      title: 'Dashboards on the Fly',
      description:
        'Each answer comes with a chart you can refine, share, or pin to a team dashboard.',
    },
    {
      title: 'Every Answer Traceable',
      description:
        'Answers cite the work orders and assets they draw on, and run in an isolated environment for each organization.',
    },
  ],
  chat: {
    assistant: 'Fleet Assistant',
    context: 'Live data · 14 locations',
    question: 'Which sites had the most HVAC downtime last quarter, and what did it cost us?',
    answer: {
      lead: 'Harbour Point',
      body: 'led with 46 hours of HVAC downtime, mostly from chiller CH-02. Across all sites, HVAC downtime cost',
      cost: '$38,400',
      tail: 'in Q3, up 18% on Q2.',
    },
    chartTitle: 'HVAC downtime by site · Q3',
    chartBadge: 'Generated dashboard',
    stats: [
      { label: 'Total hours', value: '112' },
      { label: 'Cost', value: '$38.4k' },
      { label: 'vs Q2', value: '+18%', trend: 'up' },
    ],
    rows: [
      { site: 'Harbour Point', hours: 46 },
      { site: 'Tower B', hours: 28 },
      { site: 'Northgate Mall', hours: 19 },
      { site: 'Bayview Hotel', hours: 12 },
      { site: 'Westport DC', hours: 7 },
    ],
    sources: 'Sources: 86 work orders · 14 assets',
    action: 'Pin to dashboard',
    followUps: ['Break down by asset', 'Compare to last year', 'Which vendors were involved?'],
    placeholder: 'Ask about any site, asset, or vendor…',
  },
}

export const solutions = {
  eyebrow: 'Solutions',
  title: 'One Platform, Tailored to Your Sector',
  sectors: [
    {
      label: 'Commercial',
      title: 'Commercial Offices',
      site: 'Harbour Point · 22 floors',
      description:
        'Keep multi-tenant towers running with preventive schedules, vendor coordination, and SLA dashboards across every floor.',
      points: [
        'Tenant requests routed by floor and trade',
        'Vendor performance tracked per contract',
        'Budget reporting by building',
      ],
      tasks: [
        {
          title: 'HVAC filter replacement',
          location: 'Level 14 · AHU-07',
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
          title: 'Lobby lighting fault',
          location: 'Ground floor',
          status: 'Completed',
          tone: 'done',
        },
      ],
    },
    {
      label: 'Retail',
      title: 'Retail',
      site: 'Northgate Mall · 180 units',
      description:
        'Keep storefronts and common areas guest-ready with scheduled tasks, SLA tracking, and real-time dashboards — backed by custom workflows.',
      points: [
        'Common-area checks on a schedule',
        'After-hours works coordinated with tenants',
        'SLA tracking per contractor',
      ],
      tasks: [
        {
          title: 'Escalator deep clean',
          location: 'Atrium · E2',
          status: 'Due in 2h',
          tone: 'due',
        },
        {
          title: 'Food court grease trap',
          location: 'Level 2',
          status: 'Overdue by 1d',
          tone: 'overdue',
        },
        { title: 'Car park lighting audit', location: 'P1–P3', status: 'Completed', tone: 'done' },
      ],
    },
    {
      label: 'Hospitality',
      title: 'Hospitality',
      site: 'Bayview Hotel · 312 rooms',
      description:
        'Manage preventative checks, vendor logs, and compliance requirements — with an audit trail for guest safety and regulatory peace of mind.',
      points: [
        'Room readiness tied to maintenance',
        'Fire safety checks logged automatically',
        'Guest-impacting issues prioritized',
      ],
      tasks: [
        {
          title: 'Room 1204 AC not cooling',
          location: 'Floor 12',
          status: 'Due in 1h',
          tone: 'due',
        },
        { title: 'Pool chemical log', location: 'Level 5 deck', status: 'Completed', tone: 'done' },
        {
          title: 'Kitchen hood inspection',
          location: 'Main kitchen',
          status: 'Scheduled',
          tone: 'info',
        },
      ],
    },
    {
      label: 'Logistics',
      title: 'Logistics',
      site: 'Westport DC · 14 bays',
      description:
        'Eliminate downtime in loading bays and equipment with real-time asset condition data, linked directly to repair scheduling.',
      points: [
        'Dock and door uptime by bay',
        'Forklift and MHE service history',
        'Downtime cost per asset',
      ],
      tasks: [
        {
          title: 'Dock leveller hydraulic leak',
          location: 'Bay 07',
          status: 'Overdue by 3h',
          tone: 'overdue',
        },
        {
          title: 'Rapid-roll door service',
          location: 'Bays 1–6',
          status: 'Due in 6h',
          tone: 'due',
        },
        {
          title: 'Sprinkler flow test',
          location: 'Warehouse A',
          status: 'Completed',
          tone: 'done',
        },
      ],
    },
    {
      label: 'Residential',
      title: 'Residential',
      site: 'Parkside Residences · 4 blocks',
      description:
        'Balance common-area upkeep, unit turnover, and resident requests — and keep communities safe, satisfied, and compliant.',
      points: [
        'Resident requests from mobile',
        'Unit turnover checklists',
        'Compliance logs per block',
      ],
      tasks: [
        { title: 'Unit 3B leaking tap', location: 'Block C', status: 'Due in 5h', tone: 'due' },
        { title: 'Gym equipment check', location: 'Clubhouse', status: 'Completed', tone: 'done' },
        { title: 'Unit 7A turnover', location: 'Block A', status: 'Scheduled', tone: 'info' },
      ],
    },
    {
      label: 'Vehicle fleets',
      title: 'Vehicle Management',
      site: 'Metro depot · 64 vehicles',
      description:
        'Maintenance, repairs, usage, and claims in one dashboard — with financial and operational data kept in sync.',
      points: [
        'Mileage, usage, and idle hours',
        'Claims logged from the field with photos',
        'Preventive service by odometer',
      ],
      tasks: [
        {
          title: 'Van V-218 brake service',
          location: 'Depot bay 2',
          status: 'Due in 3h',
          tone: 'due',
        },
        {
          title: 'Insurance claim #4471',
          location: 'Linked: V-102',
          status: 'In review',
          tone: 'info',
        },
        { title: 'Tyre rotation · 6 units', location: 'Depot', status: 'Completed', tone: 'done' },
      ],
    },
  ] satisfies {
    label: string
    title: string
    site: string
    description: string
    points: string[]
    tasks: StatusItem[]
  }[],
}

export const consultancy = {
  eyebrow: 'Fleet consultancy',
  title: 'Let Us Do the Heavy Lifting',
  description:
    'Each phase is tied to operational impact, so leaders can see the rollout delivering measurable results.',
  action: { label: 'Talk to a consultant →', href: '/contact' },
  phases: [
    {
      title: 'Assess',
      description:
        'Define what you need and map the transition from scattered tools to one platform.',
    },
    {
      title: 'Model the Impact',
      description:
        'Quantify labor efficiency, downtime, preventive maintenance, and vendor performance.',
    },
    {
      title: 'Pilot',
      description: 'Validate workflows and KPIs with managers and field teams before full rollout.',
    },
    {
      title: 'Deploy',
      description: 'Standardized workflows and asset governance across every building and region.',
    },
  ],
}

export const demoCta = {
  title: 'See Your Whole Portfolio in One Place',
  description:
    'Five office buildings or fifty campuses — get a walkthrough built around your sites and assets.',
  primaryAction: { label: 'Book a demo', href: '/contact' },
}

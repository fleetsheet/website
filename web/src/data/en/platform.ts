import type { NavLink } from '@/config'
import type { StatusItem } from '@/data/en/home'
import type { PlatformDetailId, PlatformGroup, TemplatePageId } from '@/platform'

export type PlatformItem = {
  title: string
  description: string
}

export type PlatformEntry = {
  label: string
  summary: string
  meta: { title: string; description: string }
}

export type PlatformPageContent = PlatformEntry & {
  eyebrow: string
  title: string
  description: string
  highlights: string[]
  features: { title: string; description: string; items: PlatformItem[] }
  details: (PlatformItem & { points: string[] })[]
  useCases: { title: string; description: string; items: string[] }
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

export const pageActions = {
  primary: { label: 'Book a demo', href: '/contact' },
  secondary: { label: 'Explore the platform', href: '/platform' },
} satisfies Record<string, NavLink>

export const sectionLabels = {
  features: 'Key capabilities',
  useCases: 'Use cases',
  related: 'Explore more',
  relatedTitle: 'More from the Fleet Platform',
  learnMore: 'Learn more',
}

export const cta = {
  title: 'See Fleet in Action',
  description:
    'Book a walkthrough and see how Fleet brings every site, asset and work order into one place.',
  primaryAction: { label: 'Book a demo', href: '/contact' },
  secondaryAction: { label: 'Talk to our team', href: '/contact' },
}

export const pages: {
  overview: PlatformEntry
  webAndMobile: PlatformEntry
  integrations: PlatformEntry
  runnerAi: PlatformEntry
  fleetMail: PlatformEntry
  workflowBuilder: PlatformEntry
} & Record<TemplatePageId, PlatformPageContent> = {
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
    summary: 'AI agents that build workflows and dashboards from plain language.',
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
    eyebrow: 'Preventive & Predictive Maintenance',
    title: 'Stay Ahead of Every Breakdown',
    description:
      'Plan recurring maintenance for every asset and use rule-based predictions to spot risk early, keeping equipment running and tenants comfortable.',
    highlights: ['Recurring schedules', 'Rule-based predictions', 'Up to 40% less reactive work'],
    features: {
      title: 'Plan Maintenance with Confidence',
      description:
        'Turn maintenance plans into automatic schedules and let live data tell you where to act next.',
      items: [
        {
          title: 'Recurring PPM schedules',
          description:
            'Schedule preventive tasks for HVAC, plumbing, lighting, lifts and fire safety by time or usage.',
        },
        {
          title: 'Automatic job creation',
          description:
            'Fleet generates PPM work orders from each asset’s plan and assigns them to the right team.',
        },
        {
          title: 'Predictive alerts',
          description:
            'Readings trending above baseline raise a traceable alert with a recommended next step.',
        },
        {
          title: 'Industry-standard templates',
          description:
            'Start with best-practice checklists for each asset type and adapt them to your sites.',
        },
        {
          title: 'Workload planning',
          description:
            'Balance schedules across technicians and vendors and see upcoming work at a glance.',
        },
        {
          title: 'Compliance calendar',
          description:
            'Track statutory inspections and certificates with reminders before every due date.',
        },
      ],
    },
    details: [
      {
        title: 'From Schedule to Signed-Off Job',
        description:
          'Each preventive task carries its checklist, asset history and documents, so technicians arrive prepared.',
        points: [
          'Checklists and SOPs attached to each task',
          'Photo proof and readings captured on completion',
          'Overdue tasks escalated automatically',
        ],
      },
      {
        title: 'Predictions You Can Trace',
        description:
          'Fleet’s rule-based machine learning explains every recommendation, so teams act with confidence.',
        points: [
          'Equipment risk scored from live and historical data',
          'Each alert linked to the rule that triggered it',
          'One click from prediction to work order',
        ],
      },
    ],
    useCases: {
      title: 'Preventive Maintenance in Practice',
      description: 'How property teams keep critical systems in peak condition.',
      items: [
        'Quarterly HVAC filter changes across every building',
        'Annual lift certification with reminders 30 days ahead',
        'Monthly emergency lighting tests logged with photos',
        'Chiller vibration monitored with predictive alerts',
        'Fire door inspections scheduled by floor and stairwell',
      ],
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
    eyebrow: 'Reactive Maintenance',
    title: 'Resolve Every Repair, Fast',
    description:
      'Capture unplanned issues the moment they happen, send them to the right team and track every repair to completion against your SLAs.',
    highlights: ['Live SLA tracking', 'Photo-based requests', 'Smart routing'],
    features: {
      title: 'From Request to Resolution',
      description: 'A clear path for every repair, with the right people informed at each step.',
      items: [
        {
          title: 'Quick request capture',
          description:
            'Staff and tenants log issues with photos, location and priority from any device.',
        },
        {
          title: 'Smart assignment',
          description: 'Route jobs to in-house teams or vendors based on site, trade and urgency.',
        },
        {
          title: 'SLA tracking',
          description:
            'Response and resolution times are measured live, with alerts before a deadline passes.',
        },
        {
          title: 'Real-time updates',
          description:
            'Technicians update status, add notes and upload proof straight from the field.',
        },
        {
          title: 'Cost approvals',
          description:
            'Quotes and costs above set thresholds go to the right approver automatically.',
        },
        {
          title: 'Central job dashboard',
          description:
            'Monitor open, overdue and completed jobs across every property in one view.',
        },
      ],
    },
    details: [
      {
        title: 'Every Issue, Captured in Context',
        description:
          'Each repair is linked to its asset, location and history, so technicians understand the problem before they arrive.',
        points: [
          'Asset history and manuals on every job',
          'Photo and video evidence from the requester',
          'Related jobs grouped automatically',
        ],
      },
      {
        title: 'Learn from Every Repair',
        description:
          'Reactive data shows where issues recur, helping you shift more work into preventive plans.',
        points: [
          'Recurring issues highlighted by building and asset',
          'Repair costs tracked by site, trade and vendor',
          'Insights that shape your preventive schedule',
        ],
      },
    ],
    useCases: {
      title: 'Reactive Maintenance in Practice',
      description: 'Everyday repairs handled with speed and full visibility.',
      items: [
        'A water leak in Unit 3B logged with photos and fixed the same day',
        'A loading bay door repair routed to the contracted vendor',
        'A chiller alarm escalated to the on-call engineer',
        'A high-cost repair sent to finance for approval',
        'SLA performance reviewed by building each month',
      ],
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
    eyebrow: 'Analytics and Reporting',
    title: 'Make Smarter Operational Decisions',
    description:
      'Fleet turns day-to-day maintenance into actionable insight, with live dashboards and exportable reports for every team, site and asset.',
    highlights: ['Live dashboards', 'Custom KPIs', 'One-click exports'],
    features: {
      title: 'Insight at Every Level',
      description:
        'From a single asset to the whole portfolio, see what is happening and where to focus next.',
      items: [
        {
          title: 'Live metrics',
          description: 'Track job volume, response times, compliance and costs as they change.',
        },
        {
          title: 'Custom dashboards',
          description:
            'Build views for each department and role, from technicians to the executive team.',
        },
        {
          title: 'Drill-down analysis',
          description: 'Explore performance by building, asset, vendor or team in a few clicks.',
        },
        {
          title: 'Budget tracking',
          description: 'See spend by cost center and compare it against budget across every site.',
        },
        {
          title: 'Exportable reports',
          description:
            'Export reports for audits, board reviews or team check-ins whenever you need them.',
        },
        {
          title: 'AI-generated dashboards',
          description:
            'Ask RunnerAI a question and get a ready-made dashboard from your live data.',
        },
      ],
    },
    details: [
      {
        title: 'See What Drives Performance',
        description:
          'Visualize which buildings have recurring issues, which assets use the most budget and which teams meet their SLAs.',
        points: [
          'Recurring issue analysis by site and asset',
          'SLA performance by team and vendor',
          'Asset downtime and lifecycle insights',
        ],
      },
      {
        title: 'Reports Ready When You Are',
        description:
          'Share the right numbers with the right people, on schedule and in the format they need.',
        points: [
          'Scheduled reports delivered by email',
          'Exports for audits and board packs',
          'Portfolio-wide executive summaries',
        ],
      },
    ],
    useCases: {
      title: 'Reporting in Practice',
      description: 'Questions property teams answer with Fleet every week.',
      items: [
        'Which sites had the most HVAC downtime last quarter',
        'How vendor response times compare across regions',
        'Where maintenance spend is above budget this year',
        'Which assets are due for replacement planning',
        'How SLA compliance has improved since rollout',
      ],
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
    eyebrow: 'Asset Management',
    title: 'Total Visibility Over Every Asset You Manage',
    description:
      'From HVAC systems across dozens of buildings to pumps, lifts and lighting, Fleet gives you one live register of every asset you own, accessible from anywhere.',
    highlights: ['Digital asset profiles', 'Full repair history', 'Warranty alerts'],
    features: {
      title: 'Key Features of Fleet Asset Management',
      description:
        'Your asset data becomes an engine for efficiency, budgeting and proactive planning.',
      items: [
        {
          title: 'Digital asset profiles',
          description:
            'Capture make, model, serial number, location, purchase date and warranty details.',
        },
        {
          title: 'Files and documentation',
          description: 'Link manuals, photos, inspection reports and certificates to each asset.',
        },
        {
          title: 'Repair history and costs',
          description:
            'See what has been done, how often and at what cost, for every asset in your portfolio.',
        },
        {
          title: 'Location and zone mapping',
          description:
            'Organize assets by building, floor, room or zone for multi-site operations.',
        },
        {
          title: 'Connected work orders and PPM',
          description:
            'Link each asset to its maintenance schedule and generate PPM jobs automatically.',
        },
        {
          title: 'Lifecycle and downtime insight',
          description:
            'Spot underperforming equipment, forecast replacements and plan capital spend.',
        },
      ],
    },
    details: [
      {
        title: 'Access Your Assets from Anywhere',
        description:
          'Technicians pull up asset details on site, log inspections in real time and attach photos and notes from their phones.',
        points: [
          'Search or scan to open any asset',
          'Inspection results recorded on the spot',
          'History updated for the whole team instantly',
        ],
      },
      {
        title: 'Smarter Maintenance Starts with Better Data',
        description:
          'Accurate, well-organized asset information helps you extend equipment life and budget with confidence.',
        points: [
          'Warranty and contract expiry alerts',
          'Asset performance reports for annual budgeting',
          'Replacement forecasts based on real usage',
        ],
      },
    ],
    useCases: {
      title: 'Asset Management in Practice',
      description:
        'From property portfolios to hospitality chains, teams use Fleet to understand their most critical infrastructure.',
      items: [
        'Centralize HVAC asset data across multiple commercial buildings',
        'Assign specific assets to site technicians for regular checks',
        'Track lift maintenance history with photo logs and certificates',
        'Export asset performance reports for annual budgeting',
        'Get alerted when warranty or contract dates approach',
      ],
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
    eyebrow: 'Document Management',
    title: 'Centralize Your Maintenance Files in One Smart Hub',
    description:
      'Warranties, vendor agreements, compliance checklists and SOPs live in one place, linked to the work they support and ready the moment you need them.',
    highlights: ['Version control', 'Linked to assets and jobs', 'Audit-ready exports'],
    features: {
      title: 'Key Features of Fleet Document Management',
      description: 'All relevant documentation, available right at the point of use.',
      items: [
        {
          title: 'Version control and audit trail',
          description:
            'See who uploaded what and when, with a full edit history and easy rollback.',
        },
        {
          title: 'Attach files anywhere',
          description:
            'Link documents to assets, jobs, locations, vendors or users to keep them in context.',
        },
        {
          title: 'Tagging and categories',
          description: 'Label files by type, site, department or asset class for fast retrieval.',
        },
        {
          title: 'Role-based permissions',
          description:
            'Control who can view, upload or edit each document to keep sensitive files secure.',
        },
        {
          title: 'Documents inside work orders',
          description:
            'Technicians open SOPs, installation guides and past reports from the job itself.',
        },
        {
          title: 'Export and share',
          description:
            'Download document packages for audits, vendor handovers or internal reviews.',
        },
      ],
    },
    details: [
      {
        title: 'Built into Your Maintenance Ecosystem',
        description:
          'Every file is discoverable through global search and linked to your dashboards and reports.',
        points: [
          'Global search across every site',
          'Documents linked to assets, jobs and vendors',
          'All storage built into Fleet',
        ],
      },
      {
        title: 'Always Ready for Inspection',
        description:
          'Certificates, permits and reports stay current, with reminders before anything expires.',
        points: [
          'Expiry tracking for permits and contracts',
          'Timestamped logs for compliance',
          'Fast retrieval during emergencies or audits',
        ],
      },
    ],
    useCases: {
      title: 'Document Management in Practice',
      description: 'Built for busy teams managing multiple sites, asset types and contractors.',
      items: [
        'Upload lift maintenance SOPs for technicians to use on site',
        'Link fire inspection certificates to compliance workflows',
        'Store vendor contracts and track expiry dates',
        'Attach budget approvals to work orders for full traceability',
        'Maintain digital manuals for HVAC, plumbing and lighting systems',
      ],
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
    eyebrow: 'Audit Tracking & Inspections',
    title: 'Stay Compliant. Stay Accountable.',
    description:
      'Fleet records what happened, when and by whom, and runs your inspections digitally, so every site is ready for any internal or external audit.',
    highlights: ['Time-stamped logs', 'Digital inspections', 'Exportable audit reports'],
    features: {
      title: 'Key Features of Audit Tracking',
      description:
        'Audit readiness built into your daily operations, running quietly in the background.',
      items: [
        {
          title: 'Time-stamped activity logs',
          description:
            'Every action is recorded automatically, from job creation to completion and comments.',
        },
        {
          title: 'User accountability',
          description:
            'Track actions by user or role, from a technician closing a job to a manager approving a cost.',
        },
        {
          title: 'Digital inspections',
          description: 'Run inspection checklists on mobile with photos, readings and signatures.',
        },
        {
          title: 'Job and asset-level logs',
          description: 'Drill into any asset or job to see its full history, costs and documents.',
        },
        {
          title: 'Configurable approvals',
          description:
            'Set mandatory checkpoints so compliance steps run the same way at every location.',
        },
        {
          title: 'Exportable audit reports',
          description: 'Generate detailed logs for any time frame or asset type in a few clicks.',
        },
      ],
    },
    details: [
      {
        title: 'Audit-Ready Every Day',
        description:
          'Fleet compiles your records as work happens, so inspection week is calm and well prepared.',
        points: [
          'Certificates and compliance forms stored with each record',
          'Inspection results linked to assets and locations',
          'Complete digital paper trail for property handovers',
        ],
      },
      {
        title: 'Clear Control Over Who Does What',
        description:
          'Role-based access keeps critical fields protected while giving oversight teams full visibility.',
        points: [
          'Edit rights limited to authorized personnel',
          'View access for leadership and auditors',
          'Change logs with notes and version history',
        ],
      },
    ],
    useCases: {
      title: 'Audit Tracking in Practice',
      description:
        'From one site to a hundred, Fleet helps you show your team does the right work, consistently.',
      items: [
        'Prove routine inspections were completed on time across all sites',
        'Show fire safety maintenance history to regulators',
        'See who approved a high-cost repair job',
        'Provide a digital paper trail during property handovers',
        'Export logs for annual compliance reviews',
      ],
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

export type RunnerAiIcon = 'workflows' | 'dashboards' | 'predictions' | 'templates'

export const runnerAiPage = {
  hero: {
    eyebrow: 'RunnerAI',
    title: 'Intelligence That Runs Your Operations',
    description:
      'RunnerAI is Fleet’s secure, rule-based AI for real estate and facilities teams. Type what you need, and it builds workflows, surfaces insights and creates dashboards across every site.',
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
    description:
      'Embedded operational intelligence for maintenance, compliance, reporting and asset management, all from plain-language commands.',
    tabs: [
      {
        icon: 'workflows',
        label: 'Workflows',
        title: 'Workflows from a Text Command',
        description:
          'Type what you want done in plain English or your native language. RunnerAI turns it into a standardized workflow for every location.',
        points: [
          'Modify steps, triggers and conditions in seconds',
          'Deploy updates to all sites or selected regions',
          'Adapt workflows to local regulations',
        ],
        visual: {
          kind: 'steps',
          title: 'Generated workflow',
          steps: [
            { kind: 'Trigger', text: 'Chiller vibration above baseline' },
            { kind: 'If', text: 'Asset is under warranty' },
            { kind: 'Then', text: 'Create a work order + notify vendor' },
          ],
        },
      },
      {
        icon: 'dashboards',
        label: 'Dashboards',
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
            { label: 'Open', value: '128' },
            { label: 'Closed', value: '412' },
          ],
          bars: [
            { label: 'Harbour Point', value: 34 },
            { label: 'Tower B', value: 27 },
            { label: 'Northgate', value: 25 },
            { label: 'Bayview', value: 22 },
            { label: 'Westport', value: 20 },
          ],
        },
      },
      {
        icon: 'predictions',
        label: 'Predictions',
        title: 'Predictions You Can Trace',
        description:
          'Rule-based machine learning flags equipment at risk and recommends the next step, with every action linked to the rule behind it.',
        points: [
          'Equipment risk scored from live and historical data',
          'Compliance risk scoring for every site',
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
              title: 'Lift certificate due in 30 days',
              location: 'Northgate Mall',
              status: 'Medium risk',
              tone: 'due',
            },
            {
              title: 'Pump P-03 back within range',
              location: 'Harbour Point',
              status: 'Resolved',
              tone: 'done',
            },
          ],
        },
      },
      {
        icon: 'templates',
        label: 'Templates',
        title: 'Best Practice from Day One',
        description:
          'Ready-to-use workflows tailored to your asset types, property category and market standards.',
        points: [
          'Automated maintenance for all equipment',
          'Suggested cleaning, inspection and sanitation routines',
          'Smart task recommendations for safety and compliance',
        ],
        visual: {
          kind: 'files',
          title: 'Suggested templates',
          items: [
            {
              title: 'Shopping mall HVAC plan',
              location: 'Retail · 12 tasks',
              status: 'Recommended',
              tone: 'info',
            },
            {
              title: 'Food court sanitation',
              location: 'Hospitality · 8 tasks',
              status: 'Recommended',
              tone: 'info',
            },
            {
              title: 'Fire safety inspections',
              location: 'All properties · 6 tasks',
              status: 'In use',
              tone: 'done',
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

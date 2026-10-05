import type { NavLink } from '@/config'
import type { StatusItem } from '@/data/en/home'
import type { PlatformDetailId, PlatformGroup } from '@/platform'

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

export type OverviewModule = {
  id: PlatformDetailId
  tag: string
  title: string
  description: string
  points: string[]
  visual: OverviewVisual
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

export const pages: { overview: PlatformEntry } & Record<PlatformDetailId, PlatformPageContent> = {
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
    eyebrow: 'Web & Mobile',
    title: 'Your Operations, on Every Screen',
    description:
      'Fleet runs in the browser and on iOS and Android, so managers plan from the desktop while technicians update jobs in real time from the field.',
    highlights: ['iOS & Android', 'Works in any browser', 'Real-time sync'],
    features: {
      title: 'Built for People on the Move',
      description:
        'The same platform, shaped for each role and each screen size, with every update synced instantly.',
      items: [
        {
          title: 'Field-ready job updates',
          description:
            'Technicians start, update and close jobs on site with photos, notes and signatures.',
        },
        {
          title: 'Instant alerts',
          description:
            'Push and in-app notifications flag new assignments, approvals and overdue tasks.',
        },
        {
          title: 'Asset details on site',
          description:
            'Scan or search an asset to see its manuals, history and open work orders in seconds.',
        },
        {
          title: 'Desktop command center',
          description:
            'Managers plan schedules, review dashboards and approve costs from a full web workspace.',
        },
        {
          title: 'Low-bandwidth performance',
          description:
            'Fleet stays responsive in basements, plant rooms and remote sites with weak signal.',
        },
        {
          title: 'Fast vendor access',
          description:
            'External vendors join through a simple link and see only the jobs assigned to them.',
        },
      ],
    },
    details: [
      {
        title: 'Real-Time Maintenance from Anywhere',
        description:
          'On site or remote, your team works from one live record. Submit jobs on the go, get alerts when tasks are due, and receive photo proof when they are done.',
        points: [
          'Works on phones, tablets and desktops',
          'Photo and video evidence attached to every job',
          'Status changes visible to the whole team instantly',
        ],
      },
      {
        title: 'One Experience for Every Role',
        description:
          'Each person sees the tools they need, from technician checklists to portfolio dashboards for leadership.',
        points: [
          'Role-based views for technicians, supervisors and vendors',
          'Dashboards and approvals for managers',
          'Tenant and occupant requests captured with photos',
        ],
      },
    ],
    useCases: {
      title: 'How Teams Use Fleet in the Field',
      description: 'Every visit, inspection and repair is captured where it happens.',
      items: [
        'Log a water leak with photos straight from the unit',
        'Complete a fire door inspection checklist on a tablet',
        'Approve an urgent repair from a phone between meetings',
        'Pull up a chiller manual while standing in the plant room',
        'Share a single job with an external contractor in seconds',
      ],
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
    eyebrow: 'Integrations',
    title: 'Connect Fleet to the Tools You Already Use',
    description:
      'Fleet plugs into your existing tech stack with 20+ integrations and an open REST API, building a connected, end-to-end operations ecosystem.',
    highlights: ['20+ integrations', 'Open REST API', 'Guided setup'],
    features: {
      title: 'Integrations Across Your Operations',
      description:
        'Bring finance, property and building data together so every team works from the same record.',
      items: [
        {
          title: 'Accounting and AP/AR',
          description:
            'Sync costs, invoices and approvals with your finance tools to keep budgets accurate.',
        },
        {
          title: 'ERP systems',
          description:
            'Share assets, vendors and purchase data with your ERP for unified reporting.',
        },
        {
          title: 'Access control',
          description:
            'Connect access systems so on-site visits and vendor attendance are recorded automatically.',
        },
        {
          title: 'Tenant portals',
          description:
            'Turn tenant requests into tracked work orders and keep occupants updated on progress.',
        },
        {
          title: 'Building management systems',
          description:
            'Bring BMS alarms and readings into Fleet to trigger work orders at the right moment.',
        },
        {
          title: 'REST API',
          description: 'Build custom connections to any system with a documented, secure REST API.',
        },
      ],
    },
    details: [
      {
        title: 'Finance and Operations in Sync',
        description:
          'Maintenance work and finance stay aligned, from the first quote to the final invoice.',
        points: [
          'Cost approvals flow straight into your AP process',
          'Budget tracking by building, asset and vendor',
          'Exportable reports for finance and board reviews',
        ],
      },
      {
        title: 'Secure by Default',
        description:
          'Every integration follows your IT governance, with clear permissions and full traceability.',
        points: [
          'Encrypted data in transit and at rest',
          'Whitelisted endpoints aligned with your IT policies',
          'Audit trails for every synced record',
        ],
      },
    ],
    useCases: {
      title: 'Integrations in Practice',
      description: 'Teams connect Fleet to remove double entry and keep every system current.',
      items: [
        'Push approved repair costs to your accounting system',
        'Create work orders automatically from BMS alarms',
        'Sync vendor records between Fleet and your ERP',
        'Log tenant requests from your tenant portal as jobs',
        'Feed Fleet data into your company-wide BI dashboards',
      ],
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
    eyebrow: 'RunnerAI',
    title: 'AI Agents Built for Real Estate and Facilities',
    description:
      'RunnerAI creates workflows, surfaces insights and builds dashboards from simple text commands, giving your teams more time for the work that matters on site.',
    highlights: [
      'Plain-language commands',
      'Rule-based and traceable',
      'Ring-fenced data per organization',
    ],
    features: {
      title: 'What RunnerAI Does',
      description:
        'Embedded operational intelligence that anticipates next steps, structures workflows and surfaces the right insight instantly.',
      items: [
        {
          title: 'Workflows by text command',
          description:
            'Type what you want done and RunnerAI turns it into a standardized workflow across every site.',
        },
        {
          title: 'Real-time adjustments',
          description:
            'Modify steps, triggers and conditions in seconds and deploy them to all or selected regions.',
        },
        {
          title: 'Industry-standard templates',
          description:
            'Start with best-practice workflows for your property type, asset mix and market.',
        },
        {
          title: 'Dashboards on request',
          description:
            'Ask for any view, such as equipment nearing end of life, and get a live dashboard in seconds.',
        },
        {
          title: 'Rule-based machine learning',
          description:
            'Predictions follow defined rules, so every action stays traceable, compliant and consistent.',
        },
        {
          title: 'Works in your language',
          description:
            'Create and adjust workflows in English or your native language, adapted to local regulations.',
        },
      ],
    },
    details: [
      {
        title: 'Dashboards at Your Command',
        description:
          'Ask a question and RunnerAI builds the dashboard from your live operational data, ready to share or pin.',
        points: [
          'Work order trends and backlog summaries',
          'Asset downtime and compliance risk scoring',
          'Vendor performance and regional comparisons',
          'Portfolio-wide executive summaries',
        ],
      },
      {
        title: 'AI That Stays Within Your Perimeter',
        description:
          'RunnerAI runs on dedicated, client-specific servers, keeping sensitive data inside your organizational boundary.',
        points: [
          'Isolated compute environments for each organization',
          'Encryption in transit and at rest',
          'Audit trails for every AI-generated action',
          'Support for GDPR, PDPL, PDPA and on-premise or hybrid deployment',
        ],
      },
    ],
    useCases: {
      title: 'Ask RunnerAI',
      description: 'A few of the requests property teams give RunnerAI every day.',
      items: [
        'Show me equipment nearing end of life across all sites',
        'Summarize the work order backlog for the last 30 days',
        'Give me vendor performance for the UAE region',
        'Create a risk dashboard for our top 10 malls',
        'Set up a weekly sanitation routine for every food court',
      ],
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
    eyebrow: 'Fleet Mail',
    title: 'Every Email, a Tracked Job',
    description:
      'Fleet Mail turns requests from tenants and vendors into work orders the moment they arrive, and keeps staff and vendors informed with automatic email updates.',
    highlights: ['Email to work order', 'Replies kept on the job', 'Automatic updates'],
    features: {
      title: 'Your Inbox, Connected to Operations',
      description:
        'Requests, replies and approvals flow through one structured record that the whole team can see.',
      items: [
        {
          title: 'Email to work order',
          description:
            'Each incoming request becomes a work order with its sender, attachments and location.',
        },
        {
          title: 'Threaded job history',
          description:
            'Replies are added to the job history automatically, keeping every conversation in context.',
        },
        {
          title: 'Smart routing',
          description:
            'Requests are assigned to the right team or vendor based on site, category and priority.',
        },
        {
          title: 'Email alerts',
          description:
            'Staff and vendors receive assignments, due dates and overdue reminders straight to their inbox.',
        },
        {
          title: 'Approvals by email',
          description: 'Managers approve or reject costs with one click from the email itself.',
        },
        {
          title: 'Status updates for requesters',
          description:
            'Tenants receive confirmation and progress updates until their request is resolved.',
        },
      ],
    },
    details: [
      {
        title: 'Incoming Requests, Instantly Organized',
        description:
          'A shared inbox becomes an organized queue, with every request logged, prioritized and assigned.',
        points: [
          'Photos and documents attached to the work order',
          'Duplicate requests grouped into one job',
          'Response times tracked against your SLAs',
        ],
      },
      {
        title: 'Updates That Reach the Right People',
        description:
          'Fleet sends the right message at the right time, so teams and vendors always know what comes next.',
        points: [
          'Assignment and due date notifications',
          'Escalations when deadlines approach',
          'Completion summaries with photo proof',
        ],
      },
    ],
    useCases: {
      title: 'Fleet Mail in Practice',
      description: 'Email keeps working the way people expect, now with full tracking behind it.',
      items: [
        'A tenant emails about a broken light and a job is created automatically',
        'A vendor replies with a quote that lands on the job history',
        'A finance manager approves a repair cost from their inbox',
        'A technician receives tomorrow’s assignments by email each evening',
        'A regional manager gets a weekly email summary of overdue jobs',
      ],
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
    eyebrow: 'Fleet Workflow Builder',
    title: 'Workflows That Adapt to How You Operate',
    description:
      'Shape your maintenance operations around your structure, approval chains, vendor policies and cost thresholds with a visual builder anyone on your team can use.',
    highlights: ['Visual builder', 'Multi-step approvals', 'Live in your first week'],
    features: {
      title: 'Build Once, Run It Everywhere',
      description:
        'You define the process and Fleet follows it, so tasks reach the right people at the right time.',
      items: [
        {
          title: 'Conditional task routing',
          description:
            'Assign jobs by location, type, priority or asset category, such as lifts to a set vendor.',
        },
        {
          title: 'Multi-step approvals',
          description:
            'Require management or finance sign-off based on job cost, urgency or scope.',
        },
        {
          title: 'Role-based responsibilities',
          description:
            'Define who can view, approve, assign or close tasks for technicians, supervisors and vendors.',
        },
        {
          title: 'Notifications and escalations',
          description:
            'Alert teams automatically when deadlines approach or a job is waiting for assignment.',
        },
        {
          title: 'Location-specific workflows',
          description: 'Tailor each building or region to its own standard operating procedures.',
        },
        {
          title: 'Connected to every module',
          description:
            'Workflows act on your documents, assets, permissions and vendors in one system.',
        },
      ],
    },
    details: [
      {
        title: 'Simple to Set Up, Powerful in Action',
        description:
          'Drag, drop and publish. Our onboarding team helps you map your workflows to Fleet in your first week.',
        points: [
          'Visual builder designed for operations teams',
          'Ready-made templates for common processes',
          'Test changes before rolling them out',
        ],
      },
      {
        title: 'Consistency, Efficiency and Insight',
        description:
          'Every job follows the same steps, which keeps operations accurate and makes reporting cleaner.',
        points: [
          'Compliance steps such as document checks enforced automatically',
          'Fewer manual handovers from job creation to closeout',
          'Structured data for more actionable reports',
        ],
      },
    ],
    useCases: {
      title: 'Workflows Teams Build',
      description: 'Common workflows property teams set up in their first month.',
      items: [
        'Send plumbing jobs to a vendor in Building A and in-house staff in Building B',
        'Require supervisor approval for any job over $5,000',
        'Route preventive jobs to dedicated staff and reactive jobs to general teams',
        'Alert regional managers as SLA deadlines approach',
        'Run a tenant move-in flow with inspection, asset checks and documents',
      ],
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

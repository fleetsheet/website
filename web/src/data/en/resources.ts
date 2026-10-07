import type { NavLink } from '@/config'
import type { PlatformEntry } from '@/data/en/platform'
import type { InsightTopic, ResourceGroup, ResourcePageId, StorySector } from '@/resources'

type Cta = { title: string; description: string; primaryAction: NavLink; secondaryAction: NavLink }

type Stat = { value: string; label: string }

type Item = { title: string; description: string }

export type ResourcesContent = {
  menu: {
    label: string
    groups: Record<ResourceGroup, string>
    promo: { title: string; description: string; action: NavLink }
  }
  pages: Record<ResourcePageId, PlatformEntry>
  contentLibrary: {
    title: string
    description: string
    search: { label: string; placeholder: string; button: string }
    featured: { badge: string; action: string }
    topics: { label: string; all: string; items: Record<InsightTopic, string> }
    card: { type: string; action: string; englishOnly: string }
    empty: string
    cta: Cta
  }
  customerStories: {
    hero: { eyebrow: string; title: string; description: string; action: NavLink }
    spotlight: { label: string; previous: string; next: string; action: string }
    results: Stat[]
    filter: { label: string; all: string; sectors: Record<StorySector, string> }
    stories: {
      sector: StorySector
      organization: string
      metric: string
      metricLabel: string
      title: string
      quote: string
      author: string
    }[]
    readStory: string
    serve: {
      title: string
      description: string
      items: { label: string; detail: string; href: string }[]
    }
    share: { title: string; description: string; action: NavLink }
    cta: Cta
  }
  easyOnboard: {
    hero: {
      eyebrow: string
      title: string
      description: string
      highlights: string[]
      primaryAction: NavLink
      secondaryAction: NavLink
    }
    stats: Stat[]
    steps: { title: string; description: string; label: string; items: Item[] }
    knowledge: {
      title: string
      description: string
      search: { label: string; placeholder: string }
      empty: string
      groups: { start: string; maintenance: string; assets: string; automation: string }
      faqs: string
    }
    training: { title: string; description: string; items: Item[] }
    support: { title: string; description: string; items: Item[] }
    faqTitle: string
    faq: { question: string; answer: string }[]
    cta: Cta
  }
  developers: {
    hero: {
      eyebrow: string
      title: string
      description: string
      primaryAction: NavLink
      secondaryAction: NavLink
    }
    cards: (Item & { action: NavLink })[]
    capabilities: {
      title: string
      description: string
      items: (Item & { points: string[] })[]
    }
    platform: { title: string; items: Stat[] }
    cta: Cta
  }
}

const demo: NavLink = { label: 'Book a demo', href: '/contact' }
const apiAccess: NavLink = { label: 'Request API access', href: '/contact' }

export const resources: ResourcesContent = {
  menu: {
    label: 'Resources',
    groups: { platform: 'RunFleet Platform' },
    promo: {
      title: 'Go live in under 7 days',
      description:
        'RunFleet EasyOnboard pairs you with an onboarding team that maps your workflows to Fleet in your first week.',
      action: { label: 'Discover EasyOnboard', href: '/resources/easyonboard' },
    },
  },
  pages: {
    contentLibrary: {
      label: 'Content Library',
      summary: 'Guides, ideas and insights for property and facility teams.',
      meta: {
        title: 'Content Library | Fleet',
        description:
          'Practical articles on maintenance, AI and property operations from the Fleet team, free to read.',
      },
    },
    customerStories: {
      label: 'Customer Stories',
      summary: 'How teams run every site with Fleet.',
      meta: {
        title: 'Customer Stories | Fleet',
        description:
          'See how property, logistics and retail teams use Fleet to cut reactive maintenance and respond faster across every site.',
      },
    },
    easyOnboard: {
      label: 'RunFleet EasyOnboard',
      summary: 'Onboarding, training and support to go live in days.',
      meta: {
        title: 'RunFleet EasyOnboard: Onboarding, Training and Support | Fleet',
        description:
          'Go live with Fleet in under 7 days. Our onboarding team maps your workflows, imports your data and trains your teams.',
      },
    },
    developers: {
      label: 'Developer Portal',
      summary: 'Connect Fleet to your tech stack with the REST API.',
      meta: {
        title: 'Developer Portal | Fleet',
        description:
          'Connect Fleet with finance tools, ERPs and property systems through the REST API and 20+ integrations.',
      },
    },
  },
  contentLibrary: {
    title: 'Explore our content library',
    description:
      'Practical ideas on maintenance, AI and property operations from the Fleet team, free to read.',
    search: { label: 'Search articles', placeholder: 'Search by keyword', button: 'Search' },
    featured: { badge: 'Featured', action: 'Read the article' },
    topics: {
      label: 'Topics',
      all: 'All topics',
      items: {
        ai: 'AI & automation',
        maintenance: 'Maintenance',
        operations: 'Digital operations',
        retail: 'Retail & malls',
      },
    },
    card: { type: 'Article', action: 'Read article', englishOnly: 'In English' },
    empty: 'Try another keyword or topic to see more articles.',
    cta: {
      title: 'Ready to put these ideas to work?',
      description:
        'Book a guided walkthrough and see how Fleet brings your teams, assets and vendors together.',
      primaryAction: demo,
      secondaryAction: { label: 'Explore the platform', href: '/platform' },
    },
  },
  customerStories: {
    hero: {
      eyebrow: 'Customer stories',
      title: 'Teams that run every site with confidence',
      description:
        'See how property, logistics and retail teams use Fleet to cut reactive work, connect their technicians and respond faster.',
      action: { label: 'Explore all stories', href: '#stories' },
    },
    spotlight: {
      label: 'Customer spotlight',
      previous: 'Previous story',
      next: 'Next story',
      action: 'Read the story',
    },
    results: [
      { value: 'Up to 40%', label: 'less reactive maintenance' },
      { value: 'Under 7 days', label: 'to onboard your team' },
      { value: '99.99%', label: 'uptime, backed by SLA' },
      { value: '20+', label: 'integrations with your stack' },
    ],
    filter: {
      label: 'Find your industry',
      all: 'All industries',
      sectors: {
        realEstate: 'Real estate',
        logistics: 'Logistics & warehousing',
        retail: 'Retail & malls',
      },
    },
    stories: [
      {
        sector: 'realEstate',
        organization: 'Mixed-use development',
        metric: 'Nearly 40%',
        metricLabel: 'less reactive maintenance load',
        title:
          'How a mixed-use development brought technicians, asset logs and job records into one place',
        quote:
          'Fleet has cut our reactive maintenance load by nearly 40%. We’ve finally got our technicians, asset logs, and job records in one place.',
        author: 'Property Ops Lead',
      },
      {
        sector: 'logistics',
        organization: 'Logistics hub',
        metric: 'Purpose-built',
        metricLabel: 'solution with faster support',
        title: 'Why a logistics hub chose a platform built around its operation',
        quote:
          'Other platforms felt too complex or generic. Fleet gave us a purpose-built solution with faster support.',
        author: 'Director of Maintenance',
      },
      {
        sector: 'retail',
        organization: 'Regional mall operator',
        metric: 'Nearly 40%',
        metricLabel: 'less reactive maintenance',
        title: 'How a regional mall operator gained visibility across every site',
        quote:
          'Fleet helped us cut reactive maintenance by nearly 40%. We now have visibility across all our sites and a faster response time.',
        author: 'Operations Director',
      },
    ],
    readStory: 'Read the story',
    serve: {
      title: 'Trusted by teams across every kind of portfolio',
      description:
        'From lean three-person operations teams to maintenance departments with hundreds of staff across multiple cities.',
      items: [
        {
          label: 'Real estate',
          detail: 'Commercial, residential and mixed-use',
          href: '/solutions/offices-mixed-use',
        },
        {
          label: 'Logistics and warehousing',
          detail: 'Hubs, docks and fleets',
          href: '/solutions/shipping-logistics',
        },
        {
          label: 'Education and campuses',
          detail: 'Schools, universities and campuses',
          href: '/solutions/healthcare-education',
        },
        {
          label: 'Retail and multi-location businesses',
          detail: 'Malls, stores and branches',
          href: '/solutions/shopping-malls-retail',
        },
        {
          label: 'Nonprofits and municipal facilities',
          detail: 'Public and community buildings',
          href: '/solutions/facility-management',
        },
      ],
    },
    share: {
      title: 'Share your Fleet story',
      description: 'Achieving great results with Fleet? We would love to feature your team.',
      action: { label: 'Get in touch', href: '/contact' },
    },
    cta: {
      title: 'Write your own success story',
      description:
        'Book a guided walkthrough and see how Fleet can support your teams, assets and vendors.',
      primaryAction: demo,
      secondaryAction: { label: 'Explore the platform', href: '/platform' },
    },
  },
  easyOnboard: {
    hero: {
      eyebrow: 'RunFleet EasyOnboard',
      title: 'Go live with Fleet in under 7 days',
      description:
        'Our onboarding team maps your workflows, brings in your data and trains your people, so every site is ready from week one.',
      highlights: ['Localized onboarding', 'Training for every role', 'Live chat support'],
      primaryAction: demo,
      secondaryAction: { label: 'Browse the knowledge base', href: '#knowledge-base' },
    },
    stats: [
      { value: 'Under 7 days', label: 'to full vendor access and job workflows' },
      { value: 'Week one', label: 'workflow mapping with our onboarding team' },
      { value: 'Every role', label: 'trained, from technicians to leadership' },
      { value: 'Live chat', label: 'support straight from our team' },
    ],
    steps: {
      title: 'Your first week with Fleet',
      description: 'A guided path from kickoff to go-live, shaped around your portfolio.',
      label: 'Step',
      items: [
        {
          title: 'Kick off and set up',
          description: 'Localized onboarding and account setup for your regions, sites and teams.',
        },
        {
          title: 'Map your workflows',
          description:
            'Our onboarding team maps your maintenance, inspection and vendor workflows to Fleet’s structure.',
        },
        {
          title: 'Bring in your data',
          description:
            'Import assets and documents through data imports, API syncing or guided manual uploads.',
        },
        {
          title: 'Invite teams and vendors',
          description:
            'Give technicians, managers and vendors access, with job workflows ready to run.',
        },
        {
          title: 'Train and go live',
          description:
            'Role-based training and digital adoption playbooks help every team work with confidence.',
        },
      ],
    },
    knowledge: {
      title: 'Knowledge base',
      description: 'Guides to help every team get the most from Fleet.',
      search: { label: 'Search the knowledge base', placeholder: 'Search onboarding topics' },
      empty: 'Try another keyword to see more topics.',
      groups: {
        start: 'Start here',
        maintenance: 'Maintenance',
        assets: 'Assets and compliance',
        automation: 'Automation and integrations',
      },
      faqs: 'Frequently asked questions',
    },
    training: {
      title: 'Training that builds confidence',
      description:
        'Structured training equips managers and teams with the skills and KPIs to run every property.',
      items: [
        {
          title: 'Workflow standardization',
          description: 'For maintenance, inspections and vendor management.',
        },
        {
          title: 'KPI configuration',
          description: 'For response times, work order SLAs, closure rates and asset health.',
        },
        {
          title: 'Cross-team communication',
          description: 'For regional alignment across property operations.',
        },
        {
          title: 'Digital adoption playbooks',
          description: 'That guide teams moving from offline or legacy systems.',
        },
        {
          title: 'Leadership dashboards',
          description: 'For real-time visibility across sites, zones and asset groups.',
        },
      ],
    },
    support: {
      title: 'Support whenever you need it',
      description: 'Real people, ready to help your teams long after go-live.',
      items: [
        {
          title: 'Live chat support',
          description: 'Friendly live chat that connects you straight to our team.',
        },
        {
          title: 'Multi-timezone team',
          description: 'A support team working across time zones for multi-region portfolios.',
        },
        {
          title: 'Training resources',
          description: 'A dedicated support team plus training and onboarding resources.',
        },
      ],
    },
    faqTitle: 'Onboarding questions',
    faq: [
      {
        question: 'How long does it take to onboard Fleet?',
        answer:
          'Most teams can onboard Fleet in under 7 days with full vendor access and job workflows ready.',
      },
      {
        question: 'Can we migrate our existing data?',
        answer:
          'Yes. Fleet supports custom migration paths, including asset data imports, API syncing and manual uploads with support.',
      },
      {
        question: 'Who configures Fleet for our workflows?',
        answer:
          'Fleet’s visual workflow builder makes configuration easy for your own team, and our onboarding team helps you map your workflows to Fleet’s structure in your first week.',
      },
      {
        question: 'How do technicians and vendors get access?',
        answer:
          'Fleet works in any mobile browser, so technicians and vendors can start right away with the jobs assigned to them.',
      },
    ],
    cta: {
      title: 'Start your first week with Fleet',
      description: 'Book a walkthrough and we’ll plan an onboarding path around your portfolio.',
      primaryAction: demo,
      secondaryAction: { label: 'Contact our team', href: '/contact' },
    },
  },
  developers: {
    hero: {
      eyebrow: 'Developer Portal',
      title: 'Fleet for developers',
      description:
        'Everything you need to connect Fleet with your tech stack, from finance tools to property systems.',
      primaryAction: apiAccess,
      secondaryAction: { label: 'Explore integrations', href: '/platform/integrations' },
    },
    cards: [
      {
        title: 'Build your integration',
        description:
          'Connect accounting, AP/AR and ERP systems to Fleet through the REST API, with our team on hand.',
        action: apiAccess,
      },
      {
        title: 'Explore integrations',
        description:
          'See how Fleet connects with finance tools, ERPs, tenant portals and building systems.',
        action: { label: 'View integrations', href: '/platform/integrations' },
      },
      {
        title: 'Stay up to date',
        description: 'Follow product news and ideas from the Fleet team in the content library.',
        action: { label: 'Visit the content library', href: '/insights' },
      },
    ],
    capabilities: {
      title: 'Integration capabilities',
      description: 'Common ways teams connect Fleet to streamline operations.',
      items: [
        {
          title: 'Work orders',
          description: 'Bring requests from other systems into Fleet and keep job status in sync.',
          points: ['Create requests', 'Status updates'],
        },
        {
          title: 'Asset data',
          description: 'Import and sync asset records so every system shares one source of truth.',
          points: ['Asset imports', 'API syncing'],
        },
        {
          title: 'Finance and AP/AR',
          description:
            'Bridge maintenance work with accounting, AP/AR and ERP tools for unified reporting.',
          points: ['Costs and invoices', 'Unified reporting'],
        },
        {
          title: 'Property systems',
          description: 'Connect tenant portals, access control and building management systems.',
          points: ['Tenant portals', 'Building management systems'],
        },
      ],
    },
    platform: {
      title: 'Built on a secure, reliable platform',
      items: [
        { value: 'REST API', label: 'for finance tools, ERPs and property systems' },
        { value: '20+', label: 'integrations with your stack' },
        { value: '99.99%', label: 'uptime, backed by SLA' },
        { value: 'Audit logs', label: 'and encrypted storage' },
      ],
    },
    cta: {
      title: 'Ready to connect Fleet?',
      description: 'Tell us about your systems and our team will help you plan the integration.',
      primaryAction: apiAccess,
      secondaryAction: demo,
    },
  },
}

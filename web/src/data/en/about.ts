import type { AboutGroup, AboutPageId } from '@/about'
import type { NavLink } from '@/config'
import type { PlatformEntry } from '@/data/en/platform'
import type { Photo } from '@/photos'

type Item = { title: string; description: string }

type Cta = { title: string; description: string; primaryAction: NavLink; secondaryAction: NavLink }

export type AboutContent = {
  menu: {
    label: string
    groups: Record<AboutGroup, string>
    promo: { title: string; description: string; action: NavLink }
  }
  pages: Record<AboutPageId, PlatformEntry>
  offices: { city: string; region: string }[]
  story: {
    hero: { eyebrow: string; title: string; description: string; photos: Photo[] }
    story: { eyebrow: string; title: string; chapters: (Item & { label: string })[] }
    mission: {
      eyebrow: string
      title: string
      description: string
      photo: Photo
      valuesTitle: string
      values: Item[]
    }
    offices: { eyebrow: string; title: string; description: string }
    careers: { title: string; description: string; action: NavLink }
    cta: Cta
  }
  careers: {
    hero: { eyebrow: string; title: string; description: string; action: NavLink; photos: Photo[] }
    growth: { title: string; description: string; stats: { value: string; label: string }[] }
    culture: { eyebrow: string; title: string; description: string; items: Item[] }
    spotlight: { title: string; description: string; points: string[]; photo: Photo }
    offices: { eyebrow: string; title: string; description: string }
    join: { eyebrow: string; title: string; label: string; steps: Item[] }
    invite: Cta
  }
  partners: {
    hero: { eyebrow: string; title: string; description: string; photos: Photo[] }
    programs: {
      eyebrow: string
      title: string
      description: string
      items: (Item & { points: string[]; action: NavLink })[]
    }
    why: { title: string; description: string; items: Item[] }
    referral: { badge: string; title: string; description: string; action: NavLink }
    cta: Cta
  }
}

const demo: NavLink = { label: 'Book a demo', href: '/contact' }

export const about: AboutContent = {
  menu: {
    label: 'About Fleet',
    groups: { company: 'Company' },
    promo: {
      title: 'Join the Fleet team',
      description:
        'Help property teams everywhere run their buildings with clarity, control and calm.',
      action: { label: 'View careers', href: '/about/careers' },
    },
  },
  pages: {
    story: {
      label: 'Company Story',
      summary: 'Our mission, our values and the teams we serve.',
      meta: {
        title: 'About Fleet: Our Story, Mission and Values | Fleet',
        description:
          'Fleet helps property teams, operations leads and facilities managers get the clarity, control and calm they deserve. Discover our story, mission and values.',
      },
    },
    careers: {
      label: 'Careers',
      summary: 'Grow with a team building the future of property operations.',
      meta: {
        title: 'Careers at Fleet | Fleet',
        description:
          'Build the future of property operations with Fleet. Discover how we work, where we are and how to join the team.',
      },
    },
    partners: {
      label: 'Partners',
      summary: 'Refer, implement or integrate with Fleet.',
      meta: {
        title: 'Partner Programme | Fleet',
        description:
          'Grow with Fleet as a referral, consulting and implementation, or technology partner, and help property teams run every site with confidence.',
      },
    },
  },
  offices: [
    { city: 'Bangkok', region: 'Thailand' },
    { city: 'Los Angeles', region: 'United States' },
    { city: 'Singapore', region: 'Singapore' },
  ],
  story: {
    hero: {
      eyebrow: 'About Fleet',
      title: 'Meet Fleet',
      description:
        'We’re on a mission to help property teams, operations leads and facilities managers get the clarity, control and calm they deserve.',
      photos: [
        { id: 'officeTeam', alt: 'Colleagues talking around a table in a bright office' },
        { id: 'teamWorkshop', alt: 'A team planning together at a whiteboard' },
        { id: 'officeCollaboration', alt: 'Colleagues collaborating in an open office' },
      ],
    },
    story: {
      eyebrow: 'Our story',
      title: 'Built for the teams who keep buildings running',
      chapters: [
        {
          label: 'The spark',
          title: 'A simple observation',
          description:
            'Fleet began when we saw maintenance teams keeping buildings running with spreadsheets, email chains and group chats.',
        },
        {
          label: 'The idea',
          title: 'A better way to work',
          description:
            'We set out to build software as fast and adaptable as the teams who use it, ready for every site and every asset.',
        },
        {
          label: 'The platform',
          title: 'Fleet takes shape',
          description:
            'A cloud-based, mobile-first platform for iOS and Android that simplifies maintenance across multiple sites and assets.',
        },
        {
          label: 'Today',
          title: 'Trusted across portfolios',
          description:
            'From five office buildings to fifty school campuses, Fleet helps teams get the right work done, faster and smarter.',
        },
      ],
    },
    mission: {
      eyebrow: 'Our mission',
      title: 'Connecting the physical world with digital tools',
      description:
        'We are building a sustainable future by reimagining real estate software and connecting our physical world with digital tools.',
      photo: {
        id: 'propertyManager',
        alt: 'Property manager with a tablet in front of high-rise buildings',
      },
      valuesTitle: 'Our values',
      values: [
        {
          title: 'Clarity first',
          description: 'Maintenance data should be clear and easy to act on.',
        },
        {
          title: 'Speed over complexity',
          description: 'Faster is better, especially for operations teams.',
        },
        {
          title: 'User-centered',
          description: 'Built for the people doing the work, as well as those reviewing it.',
        },
        {
          title: 'Trust by default',
          description: 'Secure, transparent and accountable in everything we build.',
        },
      ],
    },
    offices: {
      eyebrow: 'Our offices',
      title: 'Where to find us',
      description: 'Our teams work across three cities to support portfolios in many regions.',
    },
    careers: {
      title: 'Build what’s next with us',
      description:
        'Help property teams run every building with clarity and confidence. Discover life at Fleet.',
      action: { label: 'View careers', href: '/about/careers' },
    },
    cta: {
      title: 'See Fleet in action',
      description: 'Book a guided walkthrough tailored to your portfolio and your teams.',
      primaryAction: demo,
      secondaryAction: { label: 'Contact us', href: '/contact' },
    },
  },
  careers: {
    hero: {
      eyebrow: 'Careers',
      title: 'Build the future of property operations with us',
      description:
        'Join a team that turns maintenance chaos into clarity for property and facility teams around the world.',
      action: { label: 'Join the team', href: '#join' },
      photos: [
        { id: 'welcomeHandshake', alt: 'A new teammate welcomed with a handshake' },
        { id: 'officeTeam', alt: 'Colleagues talking around a table in a bright office' },
        { id: 'teamWorkshop', alt: 'A team planning together at a whiteboard' },
        { id: 'officeCollaboration', alt: 'Colleagues collaborating in an open office' },
      ],
    },
    growth: {
      title: 'Growing with every building we support',
      description:
        'Fleet serves teams across real estate, logistics, education, retail and public facilities, and our team grows with them.',
      stats: [
        { value: '3', label: 'office cities' },
        { value: '5', label: 'sectors we serve' },
        { value: '20+', label: 'integrations we support' },
        { value: '99.99%', label: 'uptime we deliver' },
      ],
    },
    culture: {
      eyebrow: 'Life at Fleet',
      title: 'How we work',
      description: 'Our values shape how we build Fleet and how we work together every day.',
      items: [
        {
          title: 'Clarity first',
          description: 'We share context openly so every teammate can make confident decisions.',
        },
        {
          title: 'Speed over complexity',
          description: 'We favor simple solutions and ship improvements quickly.',
        },
        {
          title: 'User-centered',
          description: 'We spend time with the people doing the work and build for their day.',
        },
        {
          title: 'Trust by default',
          description: 'We give each other ownership and take responsibility for results.',
        },
      ],
    },
    spotlight: {
      title: 'Built by people who care about the work',
      description:
        'Every feature starts with a real team in a real building. We listen to technicians, property managers and vendors, then build tools that make their day easier.',
      points: [
        'Close to customers in every region',
        'Ownership from idea to release',
        'Room to learn and grow',
      ],
      photo: { id: 'colleaguesTablets', alt: 'Two colleagues reviewing work on tablets' },
    },
    offices: {
      eyebrow: 'Our offices',
      title: 'Where you could work',
      description: 'Join colleagues in Bangkok, Los Angeles and Singapore.',
    },
    join: {
      eyebrow: 'How to join',
      title: 'Your path to Fleet',
      label: 'Step',
      steps: [
        {
          title: 'Send your CV',
          description: 'Tell us about yourself and the work you would love to do.',
        },
        {
          title: 'Intro conversation',
          description: 'A friendly chat about your experience and what you are looking for.',
        },
        {
          title: 'Meet the team',
          description: 'Talk with the people you would work with and explore the role together.',
        },
        {
          title: 'Welcome aboard',
          description: 'Get set up with everything you need to make an impact from day one.',
        },
      ],
    },
    invite: {
      title: 'Ready to join Fleet?',
      description:
        'We are always happy to meet talented people. Send us your CV and tell us how you would like to contribute.',
      primaryAction: { label: 'Send us your CV', href: '/contact' },
      secondaryAction: { label: 'Read our story', href: '/about' },
    },
  },
  partners: {
    hero: {
      eyebrow: 'Partners',
      title: 'Grow with Fleet',
      description:
        'Partner with Fleet and help property teams everywhere run every site with confidence. Choose the path that fits your business, from simple introductions to long-term collaboration.',
      photos: [
        { id: 'blueprintPlanning', alt: 'A team reviewing building plans together' },
        { id: 'engineersRooftop', alt: 'Two engineers reviewing a tablet on a rooftop' },
        { id: 'welcomeHandshake', alt: 'Two partners shaking hands across a desk' },
      ],
    },
    programs: {
      eyebrow: 'Partnership paths',
      title: 'Partner with Fleet',
      description: 'Three ways to grow together, each with dedicated support from our team.',
      items: [
        {
          title: 'Referral partner',
          description:
            'Know teams that could run better with Fleet? Introduce them, and our team takes care of the demo, onboarding and support.',
          points: ['Simple introductions', 'Our team leads every demo', 'Light effort for you'],
          action: { label: 'Send a referral', href: '/contact' },
        },
        {
          title: 'Consulting and implementation partner',
          description:
            'Help clients plan, launch and scale Fleet with workflow design, data migration and training.',
          points: [
            'Onboarding and training resources',
            'Workflow and KPI playbooks',
            'Joint delivery with our team',
          ],
          action: { label: 'Apply as a consulting partner', href: '/contact' },
        },
        {
          title: 'Technology partner',
          description:
            'Connect your product or platform with Fleet through the REST API and reach property and facility teams.',
          points: ['REST API access', 'Integration support', 'Shared value for joint customers'],
          action: { label: 'Apply as a technology partner', href: '/contact' },
        },
      ],
    },
    why: {
      title: 'Why partner with Fleet',
      description: 'A platform your clients will enjoy using, backed by a team that supports you.',
      items: [
        {
          title: 'Purpose-built for real estate',
          description: 'Designed for multi-site property and facility teams.',
        },
        {
          title: 'Fast to launch',
          description: 'Most teams onboard in under 7 days with job workflows ready.',
        },
        {
          title: 'Usage-based pricing',
          description: 'Clients pay for what they use, with transparent billing.',
        },
        {
          title: 'Open to integrate',
          description: 'A REST API and 20+ integrations connect Fleet to existing systems.',
        },
        {
          title: 'Regional presence',
          description: 'Teams in Bangkok, Los Angeles and Singapore with localized onboarding.',
        },
        {
          title: 'Mobile-first',
          description: 'Works in any browser on iOS and Android, ready for every technician.',
        },
      ],
    },
    referral: {
      badge: 'Referral partner',
      title: 'Know a team that needs Fleet?',
      description: 'Share an introduction and our team will take it from there.',
      action: { label: 'Send a referral', href: '/contact' },
    },
    cta: {
      title: 'Let’s grow together',
      description: 'Tell us about your business and we’ll find the partnership path that fits.',
      primaryAction: { label: 'Become a partner', href: '/contact' },
      secondaryAction: { label: 'Read our story', href: '/about' },
    },
  },
}

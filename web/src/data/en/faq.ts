export type FaqItem = {
  question: string
  answer: string
  points?: string[]
}

export const faqPage = {
  meta: {
    title: 'FAQs | Fleet',
    description:
      'Answers to common questions about Fleet: what it does, who it is for, onboarding, security, integrations and pricing.',
  },
  eyebrow: 'Fleet FAQs',
  title: 'Your questions, answered',
  description:
    'Everything teams usually ask before switching to Fleet. Can’t find what you need? Get in touch.',
  items: [
    {
      question: 'What is Fleet?',
      answer:
        'Fleet is a cloud-based real estate platform built to simplify facility, maintenance and operations across multiple sites. In addition to having a robust CMMS/CAFM, it helps teams manage work orders, assets, vendors, tenants, and billing & collections from one centralized facility management dashboard.',
    },
    {
      question: 'Is Fleet a CMMS or a CAFM?',
      answer:
        'Fleet originated as a cloud-based CMMS (Computerized Maintenance Management System) and now includes key capabilities typical of CAFM (Computer-Aided Facilities Management). We have grown to become the leading overarching real estate operations platform that unites maintenance, asset management, documentation, vendor coordination through custom workflows, and compliance tracking with audit tracking.',
    },
    {
      question: 'Who is Fleet built for?',
      answer:
        'Fleet is designed for multi-site operators across real estate, retail, logistics, hospitality, education, and healthcare — including industry-specific use cases like shopping malls & retail, hospitality & F&B, shipping & logistics, and residential communities.',
    },
    {
      question: 'How does Fleet help reduce downtime?',
      answer:
        'Fleet empowers preventive maintenance scheduling, real-time job tracking, and instant alerts — all managed via facility management. These features minimize reactive repairs and keep uptime high.',
    },
    {
      question: 'Does Fleet work across multiple properties or locations?',
      answer:
        'Yes. Fleet’s multi-site management system allows you to manage and track maintenance across buildings, zones, or entire regions — with location-based permissions.',
    },
    {
      question: 'Is Fleet mobile-friendly?',
      answer:
        'Absolutely. Fleet is a mobile-first platform — iOS and Android compatible. Log, assign, and track jobs from any device in real time.',
    },
    {
      question: 'Can Fleet integrate with our existing systems?',
      answer:
        'Yes. Fleet offers flexible integration with popular AP/AR systems, finance tools, ERP software, and vendor portals.',
    },
    {
      question: 'What types of maintenance can I manage with Fleet?',
      answer:
        'You can manage reactive, scheduled, and predictive maintenance, as well as inspections, audits, vendor services, and cost approvals.',
    },
    {
      question: 'How does Fleet support asset management?',
      answer:
        'Fleet creates digital profiles for every asset — tracking lifecycle, cost history, warranties, and location-based usage via asset management.',
    },
    {
      question: 'Can we assign different access levels to users?',
      answer:
        'Yes. Fleet includes role-based permissions for technicians, managers, vendors, and admins.',
    },
    {
      question: 'Does Fleet support document storage?',
      answer:
        'Yes. Upload and link manuals, warranties, service logs, and safety checklists directly to assets or job tickets, accessed via document management.',
    },
    {
      question: 'How does Fleet support compliance and audits?',
      answer:
        'Fleet logs and stores job histories, document changes, and completions with full traceability using audit tracking, making compliance effortless.',
    },
    {
      question: 'What makes Fleet different from other CMMS software?',
      answer:
        'Fleet is designed specifically for multi-site real estate teams and features no-app mobile access, fast onboarding, usage-based pricing, and robust reporting built for property teams — not factories.',
    },
    {
      question: 'Is there a free trial or demo available?',
      answer:
        'Yes. Book a free personalized demo to see how Fleet adapts to your team’s workflow and industry.',
    },
    {
      question: 'How long does it take to onboard Fleet?',
      answer:
        'Most teams can onboard Fleet in under 7 days with full vendor access and job workflows ready.',
    },
    {
      question: 'Is Fleet secure?',
      answer:
        'Yes. Fleet uses secure cloud infrastructure, encrypted data handling, and supports access logs and user traceability.',
    },
    {
      question: 'Does Fleet support PPM (Planned Preventive Maintenance)?',
      answer:
        'Yes. Create recurring schedules, link them to assets or locations, and monitor compliance via dashboard alerts.',
    },
    {
      question: 'What does Fleet’s reporting system include?',
      answer:
        'Fleet includes live dashboards, exportable reports, budget tracking, and custom KPIs for performance analysis.',
    },
    {
      question: 'Can Fleet help us reduce operational costs?',
      answer: 'Yes. Fleet helps lower OPEX by:',
      points: [
        'Cutting technician delays',
        'Reducing third-party property manager costs (often 6–8% of revenue)',
        'Improving asset longevity and performance tracking',
      ],
    },
    {
      question: 'Can I manage multiple vendors through Fleet?',
      answer:
        'Yes. Invite, tag, assign, and monitor vendor jobs with auto-notifications and service logs.',
    },
    {
      question: 'Does Fleet support different languages or regions?',
      answer:
        'Yes. Fleet is used by teams across Asia, Europe, and North America, with multi-language support and local timezone awareness.',
    },
    {
      question: 'Can we migrate from another CMMS or CAFM tool?',
      answer:
        'Yes. Fleet supports custom migration paths, including asset data imports, API syncing, and manual uploads with support.',
    },
    {
      question: 'Does Fleet support inventory or parts tracking?',
      answer:
        'Coming soon. Fleet is working on features for spare parts, inventory logs, and usage-based stock alerts.',
    },
    {
      question: 'What industries benefit most from Fleet?',
      answer: 'Fleet is ideal for:',
      points: [
        'Shopping malls & retail chains',
        'Hospitality & F&B operations',
        'Shipping, logistics & transport hubs',
        'Residential & mixed-use communities',
      ],
    },
    {
      question: 'How can I contact Fleet for more information?',
      answer: 'You can book a demo, visit our contact page, or email our team directly.',
    },
  ] satisfies FaqItem[],
  cta: {
    title: 'Still have questions?',
    description: 'Talk to the Fleet team about your sites, assets and workflows.',
    primaryAction: { label: 'Book a demo', href: '/contact' },
    secondaryAction: { label: 'Explore the platform', href: '/#platform' },
  },
}

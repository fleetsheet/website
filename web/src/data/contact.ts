export type ContactField = {
  name: string
  label: string
  type: 'text' | 'email' | 'textarea'
  autocomplete: string
  required: boolean
}

export const contactForm = {
  actionUrl: 'https://submit-form.com/Scb6CnrE2',
  redirectPath: '/contact/thanks',
  submitLabel: 'Send message',
  pendingLabel: 'Sending…',
  successMessage: 'Thanks, we got your message. Someone from the Fleet team will reply shortly.',
  errorMessage: 'Something went wrong. Please try again or email admin@runfleet.com.',
  fields: [
    { name: 'name', label: 'Name', type: 'text', autocomplete: 'name', required: true },
    { name: 'email', label: 'Work email', type: 'email', autocomplete: 'email', required: true },
    {
      name: 'company',
      label: 'Company',
      type: 'text',
      autocomplete: 'organization',
      required: false,
    },
    { name: 'message', label: 'Message', type: 'textarea', autocomplete: 'off', required: true },
  ] satisfies ContactField[],
}

export const contactPage = {
  meta: {
    title: 'Contact Fleet | Book a Demo & Consultation',
    description:
      'Get in touch to learn how Fleet can streamline your asset and work order management, automate workflows, and reduce downtime.',
  },
  eyebrow: 'Contact',
  title: 'Let’s connect',
  description:
    'Book a demo, ask about consultancy, or tell us about your portfolio. We’ll get back to you shortly.',
  highlights: [
    'A walkthrough built around your sites and assets',
    'Answers on pricing, rollout and integrations',
    'No commitment required',
  ],
}

export const contactThanks = {
  meta: {
    title: 'Thanks for reaching out | Fleet',
    description: 'Your message has been sent to the Fleet team.',
  },
  title: 'Thanks, we got your message',
  description: 'Someone from the Fleet team will reply to the email you gave us shortly.',
  action: { label: 'Back to home', href: '/' },
}

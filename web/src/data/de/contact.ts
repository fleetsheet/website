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
  submitLabel: 'Nachricht senden',
  pendingLabel: 'Wird gesendet…',
  successMessage:
    'Vielen Dank, Ihre Nachricht ist angekommen. Das Fleet-Team meldet sich in Kürze bei Ihnen.',
  errorMessage:
    'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie an admin@runfleet.com.',
  captchaMessage: 'Bitte schließen Sie vor dem Senden die Verifizierung ab.',
  fields: [
    { name: 'name', label: 'Name', type: 'text', autocomplete: 'name', required: true },
    {
      name: 'email',
      label: 'Geschäftliche E-Mail',
      type: 'email',
      autocomplete: 'email',
      required: true,
    },
    {
      name: 'company',
      label: 'Unternehmen',
      type: 'text',
      autocomplete: 'organization',
      required: false,
    },
    { name: 'message', label: 'Nachricht', type: 'textarea', autocomplete: 'off', required: true },
  ] satisfies ContactField[],
}

export const contactPage = {
  meta: {
    title: 'Kontakt zu Fleet | Demo & Beratung buchen',
    description:
      'Erfahren Sie, wie Fleet Ihr Anlagen- und Auftragsmanagement vereinfacht, Abläufe automatisiert und Ausfallzeiten reduziert.',
  },
  eyebrow: 'Kontakt',
  title: 'Sprechen wir miteinander',
  description:
    'Buchen Sie eine Demo, fragen Sie nach Beratung oder erzählen Sie uns von Ihrem Portfolio. Wir melden uns in Kürze.',
  highlights: [
    'Eine Vorführung, abgestimmt auf Ihre Standorte und Anlagen',
    'Antworten zu Preisen, Einführung und Integrationen',
    'Völlig unverbindlich',
  ],
}

export const contactThanks = {
  meta: {
    title: 'Danke für Ihre Nachricht | Fleet',
    description: 'Ihre Nachricht wurde an das Fleet-Team gesendet.',
  },
  title: 'Danke, Ihre Nachricht ist angekommen',
  description: 'Das Fleet-Team antwortet Ihnen in Kürze an die angegebene E-Mail-Adresse.',
  action: { label: 'Zur Startseite', href: '/' },
}

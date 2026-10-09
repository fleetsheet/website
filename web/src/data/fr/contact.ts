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
  submitLabel: 'Envoyer le message',
  pendingLabel: 'Envoi…',
  successMessage:
    'Merci, nous avons bien reçu votre message. L’équipe Fleet vous répondra très vite.',
  errorMessage: 'Une erreur est survenue. Veuillez réessayer ou écrire à admin@runfleet.com.',
  captchaMessage: 'Veuillez compléter la vérification avant l’envoi.',
  fields: [
    { name: 'name', label: 'Nom', type: 'text', autocomplete: 'name', required: true },
    {
      name: 'email',
      label: 'E-mail professionnel',
      type: 'email',
      autocomplete: 'email',
      required: true,
    },
    {
      name: 'company',
      label: 'Entreprise',
      type: 'text',
      autocomplete: 'organization',
      required: false,
    },
    { name: 'message', label: 'Message', type: 'textarea', autocomplete: 'off', required: true },
  ] satisfies ContactField[],
}

export const contactPage = {
  meta: {
    title: 'Contacter Fleet | Démo et conseil',
    description:
      'Découvrez comment Fleet peut simplifier la gestion de vos actifs et de vos bons de travail, automatiser vos processus et réduire les temps d’arrêt.',
  },
  eyebrow: 'Contact',
  title: 'Parlons-en',
  description:
    'Demandez une démo, renseignez-vous sur notre offre de conseil ou parlez-nous de votre patrimoine. Nous vous répondrons rapidement.',
  highlights: [
    'Une présentation construite autour de vos sites et de vos actifs',
    'Des réponses sur les tarifs, le déploiement et les intégrations',
    'Sans engagement',
  ],
}

export const contactThanks = {
  meta: {
    title: 'Merci de votre message | Fleet',
    description: 'Votre message a été envoyé à l’équipe Fleet.',
  },
  title: 'Merci, nous avons bien reçu votre message',
  description: 'L’équipe Fleet vous répondra très vite à l’adresse e-mail indiquée.',
  action: { label: 'Retour à l’accueil', href: '/' },
}

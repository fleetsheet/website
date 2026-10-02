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
  submitLabel: 'Enviar mensaje',
  pendingLabel: 'Enviando…',
  successMessage:
    'Gracias, hemos recibido su mensaje. Alguien del equipo de Fleet le responderá en breve.',
  errorMessage: 'Se produjo un error. Inténtelo de nuevo o escriba a admin@runfleet.com.',
  fields: [
    { name: 'name', label: 'Nombre', type: 'text', autocomplete: 'name', required: true },
    {
      name: 'email',
      label: 'Correo corporativo',
      type: 'email',
      autocomplete: 'email',
      required: true,
    },
    {
      name: 'company',
      label: 'Empresa',
      type: 'text',
      autocomplete: 'organization',
      required: false,
    },
    { name: 'message', label: 'Mensaje', type: 'textarea', autocomplete: 'off', required: true },
  ] satisfies ContactField[],
}

export const contactPage = {
  meta: {
    title: 'Contacte con Fleet | Solicite una demo y asesoría',
    description:
      'Póngase en contacto para descubrir cómo Fleet puede optimizar la gestión de sus activos y órdenes de trabajo, automatizar flujos y reducir el tiempo de inactividad.',
  },
  eyebrow: 'Contacto',
  title: 'Hablemos',
  description:
    'Solicite una demo, pregunte por nuestra consultoría o cuéntenos sobre su cartera. Le responderemos en breve.',
  highlights: [
    'Una demostración adaptada a sus inmuebles y activos',
    'Respuestas sobre precios, implantación e integraciones',
    'Sin ningún compromiso',
  ],
}

export const contactThanks = {
  meta: {
    title: 'Gracias por contactarnos | Fleet',
    description: 'Su mensaje se ha enviado al equipo de Fleet.',
  },
  title: 'Gracias, hemos recibido su mensaje',
  description: 'Alguien del equipo de Fleet responderá en breve al correo que nos indicó.',
  action: { label: 'Volver al inicio', href: '/' },
}

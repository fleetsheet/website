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
  submitLabel: 'إرسال الرسالة',
  pendingLabel: 'جارٍ الإرسال…',
  successMessage: 'شكرًا، وصلتنا رسالتك. سيتواصل معك أحد أعضاء فريق Fleet قريبًا.',
  errorMessage: 'حدث خطأ ما. يُرجى المحاولة مرة أخرى أو مراسلتنا على admin@runfleet.com.',
  fields: [
    { name: 'name', label: 'الاسم', type: 'text', autocomplete: 'name', required: true },
    {
      name: 'email',
      label: 'البريد الإلكتروني للعمل',
      type: 'email',
      autocomplete: 'email',
      required: true,
    },
    {
      name: 'company',
      label: 'الشركة',
      type: 'text',
      autocomplete: 'organization',
      required: false,
    },
    { name: 'message', label: 'الرسالة', type: 'textarea', autocomplete: 'off', required: true },
  ] satisfies ContactField[],
}

export const contactPage = {
  meta: {
    title: 'تواصل مع Fleet | احجز عرضًا توضيحيًا واستشارة',
    description:
      'تواصل معنا لتعرف كيف تساعدك Fleet على تبسيط إدارة الأصول وأوامر العمل، وأتمتة سير العمل، وتقليل فترات التوقف.',
  },
  eyebrow: 'تواصل معنا',
  title: 'لنتواصل',
  description:
    'احجز عرضًا توضيحيًا، أو استفسر عن خدماتنا الاستشارية، أو حدّثنا عن محفظتك العقارية. سنعود إليك قريبًا.',
  highlights: [
    'جولة تعريفية مصممة حول مواقعك وأصولك',
    'إجابات حول الأسعار والتطبيق والتكاملات',
    'دون أي التزام',
  ],
}

export const contactThanks = {
  meta: {
    title: 'شكرًا لتواصلك معنا | Fleet',
    description: 'تم إرسال رسالتك إلى فريق Fleet.',
  },
  title: 'شكرًا، وصلتنا رسالتك',
  description: 'سيرد أحد أعضاء فريق Fleet على البريد الإلكتروني الذي زوّدتنا به قريبًا.',
  action: { label: 'العودة إلى الرئيسية', href: '/' },
}

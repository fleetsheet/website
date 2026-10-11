import type { LegalContent } from '@/data/en/legal'

export const legal: LegalContent = {
  navLabel: 'Mentions légales',
  englishNotice: 'Cette politique est publiée en anglais, et la version anglaise fait foi.',
  pages: {
    privacy: {
      label: 'Politique de confidentialité',
      description:
        'Comment Fleet collecte, utilise, partage et protège les informations lorsque vous utilisez notre site.',
    },
    terms: {
      label: 'Conditions générales',
      description:
        'Les conditions qui s’appliquent lorsque vous consultez et utilisez le site Fleet.',
    },
    cookies: {
      label: 'Politique relative aux cookies',
      description: 'Comment le site Fleet utilise les cookies et les choix dont vous disposez.',
    },
  },
}

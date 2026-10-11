import type { LegalPageId } from '@/legal'

export type LegalContent = {
  /** Footer label for the policy links. */
  navLabel: string
  /** Shown above the English policy text on translated pages; empty in English. */
  englishNotice: string
  pages: Record<LegalPageId, { label: string; description: string }>
}

export const legal: LegalContent = {
  navLabel: 'Legal',
  englishNotice: '',
  pages: {
    privacy: {
      label: 'Privacy policy',
      description:
        'How Fleet collects, uses, shares and protects information when you use our website.',
    },
    terms: {
      label: 'Terms and conditions',
      description: 'The terms that apply when you visit and use the Fleet website.',
    },
    cookies: {
      label: 'Cookie policy',
      description: 'How the Fleet website uses cookies and the choices you have.',
    },
  },
}

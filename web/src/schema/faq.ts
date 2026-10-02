import { websiteConfig } from '@/config'
import { getContent } from '@/data'
import { languages, localizePath, type Locale } from '@/i18n'
import type { FAQPage, WithContext } from 'schema-dts'

export const faqSchema = (locale: Locale): WithContext<FAQPage> => {
  const { faqPage } = getContent(locale).faq

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: new URL(localizePath('/faqs', locale), websiteConfig.url).toString(),
    inLanguage: languages[locale].hreflang,
    mainEntity: faqPage.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: [item.answer, ...(item.points ?? [])].join(' '),
      },
    })),
  }
}

import { websiteConfig } from '@/config'
import { getContent } from '@/data'
import { languages, localizePath, type Locale } from '@/i18n'
import type { WebSite, WithContext } from 'schema-dts'

export const websiteSchema = (locale: Locale): WithContext<WebSite> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: websiteConfig.name,
    description: getContent(locale).site.description,
    url: new URL(localizePath('/', locale), websiteConfig.url).toString(),
    inLanguage: languages[locale].hreflang,
    publisher: {
      '@type': 'Organization',
      name: websiteConfig.name,
      url: new URL('/', websiteConfig.url).toString(),
    },
  }
}

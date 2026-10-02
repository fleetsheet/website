import { websiteConfig } from '@/config'
import type { WebSite, WithContext } from 'schema-dts'

export const websiteSchema = (): WithContext<WebSite> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: websiteConfig.name,
    description: websiteConfig.description,
    url: new URL('/', websiteConfig.url).toString(),
    inLanguage: websiteConfig.lang,
    publisher: {
      '@type': 'Organization',
      name: websiteConfig.name,
      url: new URL('/', websiteConfig.url).toString(),
    },
  }
}

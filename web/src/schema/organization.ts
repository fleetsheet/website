import { websiteConfig } from '@/config'
import { getContent } from '@/data'
import type { Locale } from '@/i18n'
import type { Organization, WithContext } from 'schema-dts'

export const organizationSchema = (locale: Locale): WithContext<Organization> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: websiteConfig.name,
    description: getContent(locale).site.description,
    url: new URL('/', websiteConfig.url).toString(),
    logo: websiteConfig.logo.url,
    email: websiteConfig.email,
    sameAs: websiteConfig.socialUrls,
  }
}

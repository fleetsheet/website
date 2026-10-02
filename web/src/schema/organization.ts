import { websiteConfig } from '@/config'
import type { Organization, WithContext } from 'schema-dts'

export const organizationSchema = (): WithContext<Organization> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: websiteConfig.name,
    description: websiteConfig.description,
    url: new URL('/', websiteConfig.url).toString(),
    logo: websiteConfig.logo.url,
    email: websiteConfig.email,
    sameAs: websiteConfig.socialUrls,
  }
}

import { websiteConfig } from '@/config'
import type { CollectionEntry } from 'astro:content'
import type { Article, WithContext } from 'schema-dts'

export const insightSchema = (insight: CollectionEntry<'insights'>): WithContext<Article> => {
  const { title, description, publishedAt, updatedAt, author, image } = insight.data

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: publishedAt.toISOString(),
    dateModified: (updatedAt ?? publishedAt).toISOString(),
    url: new URL(`/insights/${insight.id}`, websiteConfig.url).href,
    image: image ? new URL(image, websiteConfig.url).href : undefined,
    author: author
      ? { '@type': 'Person', name: author }
      : { '@type': 'Organization', name: websiteConfig.name },
    publisher: {
      '@type': 'Organization',
      name: websiteConfig.name,
      logo: websiteConfig.logo.url,
    },
  }
}

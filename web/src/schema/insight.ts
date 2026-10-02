import { websiteConfig } from '@/config'
import { getInsightPath } from '@/utils/insights'
import type { CollectionEntry } from 'astro:content'
import type { Article, WithContext } from 'schema-dts'

export const insightSchema = (
  insight: CollectionEntry<'insights'>,
  inLanguage: string,
  imageUrl?: string,
): WithContext<Article> => {
  const { title, description, publishedAt, updatedAt, author } = insight.data

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: publishedAt.toISOString(),
    dateModified: (updatedAt ?? publishedAt).toISOString(),
    url: new URL(getInsightPath(insight), websiteConfig.url).href,
    inLanguage,
    image: imageUrl,
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

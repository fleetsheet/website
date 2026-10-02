import { getCollection } from 'astro:content'

export const getPublishedInsights = async () => {
  const insights = await getCollection('insights', ({ data }) => !data.draft)
  return insights.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime())
}

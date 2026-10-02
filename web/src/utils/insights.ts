import { defaultLocale, isLocale, locales, localizePath, type Locale } from '@/i18n'
import { getCollection, type CollectionEntry } from 'astro:content'

type Insight = CollectionEntry<'insights'>

export const getInsightLocale = (insight: Insight): Locale => {
  const [folder, ...rest] = insight.id.split('/')
  return rest.length > 0 && isLocale(folder) ? folder : defaultLocale
}

export const getInsightSlug = (insight: Insight) => insight.id.split('/').at(-1) ?? insight.id

export const getInsightPath = (insight: Insight) =>
  localizePath(`/insights/${getInsightSlug(insight)}`, getInsightLocale(insight))

export const getAllPublishedInsights = async () => {
  const insights = await getCollection('insights', ({ data }) => !data.draft)
  return insights.sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime())
}

export const getTranslatedLocales = (insights: Insight[], slug: string) =>
  locales.filter((locale) =>
    insights.some(
      (insight) => getInsightLocale(insight) === locale && getInsightSlug(insight) === slug,
    ),
  )

export const getPublishedInsights = async (locale: Locale = defaultLocale) => {
  const insights = await getAllPublishedInsights()
  return insights
    .filter((insight) => getInsightLocale(insight) === defaultLocale)
    .map(
      (original) =>
        insights.find(
          (insight) =>
            getInsightLocale(insight) === locale &&
            getInsightSlug(insight) === getInsightSlug(original),
        ) ?? original,
    )
}

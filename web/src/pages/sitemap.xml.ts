import { aboutPages } from '@/about'
import { locales, localizePath } from '@/i18n'
import { platformPages } from '@/platform'
import { resourcePages } from '@/resources'
import { solutionPages } from '@/solutions'
import { getAllPublishedInsights, getInsightPath } from '@/utils/insights'
import type { APIRoute } from 'astro'
import { WEBSITE_URL } from 'astro:env/client'

export const GET: APIRoute = async () => {
  const insights = await getAllPublishedInsights()

  const paths = [
    ...locales.flatMap((locale) =>
      [
        '/',
        '/contact',
        '/faqs',
        ...platformPages.map((entry) => entry.href),
        ...solutionPages.map((entry) => entry.href),
        ...resourcePages.map((entry) => entry.href),
        ...aboutPages.map((entry) => entry.href),
      ].map((path) => localizePath(path, locale)),
    ),
    ...insights.map(getInsightPath),
  ]

  const urls = paths.map(
    (path) => `<url>
              <loc>${new URL(path, WEBSITE_URL)}</loc>
            </url>`,
  )

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
              ${urls.join('')}
            </urlset>`

  return new Response(sitemap, {
    status: 200,
    headers: { 'Content-Type': 'text/xml' },
  })
}

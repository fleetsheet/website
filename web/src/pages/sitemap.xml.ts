import { getPublishedInsights } from '@/utils/insights'
import type { APIRoute } from 'astro'
import { WEBSITE_URL } from 'astro:env/client'

export const GET: APIRoute = async () => {
  const insights = await getPublishedInsights()

  const paths = ['/', '/insights', ...insights.map((insight) => `/insights/${insight.id}`)]

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

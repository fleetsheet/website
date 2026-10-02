import { WEBSITE_URL } from 'astro:env/client'

export async function GET() {
  const robotsContent = ['User-agent: *', 'Allow: /', `Sitemap: ${WEBSITE_URL}/sitemap.xml`].join(
    '\n',
  )

  return new Response(robotsContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}

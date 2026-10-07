# Content map

Keep this file up to date: when a page or section is added, add a row.

## Site addresses

| What                  | Address                                                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Live site             | https://redesign.runfleet.com   |
| Pull request previews | Render's comment or deployment on the pull request; otherwise usually `https://fleet-website-pr-<pull request number>.onrender.com` |
| Local preview         | http://localhost:4321 after `pnpm build && pnpm preview` in `web/`                                                                  |

## Pages

All paths are relative to `web/src/`.

| Page                                                                                           | Address                 | Words live in                                                   |
| ---------------------------------------------------------------------------------------------- | ----------------------- | --------------------------------------------------------------- |
| Home: top banner, headline, buttons                                                            | `/`                     | `data/en/home.ts` (`hero`)                                         |
| Home: product preview panel                                                                    | `/`                     | `data/en/home.ts` (`showcase`)                                     |
| Home: "From fragmented tools" section                                                          | `/`                     | `data/en/home.ts` (`unifiedModel`)                                 |
| Home: platform modules                                                                         | `/#platform`            | `data/en/home.ts` (`platform`)                                     |
| Home: AI agents                                                                                | `/#ai`                  | `data/en/home.ts` (`aiAgents`)                                     |
| Home: solutions by sector                                                                      | `/#solutions`           | `data/en/home.ts` (`solutions`)                                    |
| Home: consultancy                                                                              | `/#consultancy`         | `data/en/home.ts` (`consultancy`)                                  |
| Home: closing "Book a demo" banner                                                             | `/`                     | `data/en/home.ts` (`demoCta`)                                      |
| Contact page                                                                                   | `/contact`              | `data/en/contact.ts` (`contactPage`, form labels in `contactForm`) |
| FAQs page                                                                                      | `/faqs`                 | `data/en/faq.ts` (`faqPage`)                                    |
| Contact thank-you page                                                                         | `/contact/thanks`       | `data/en/contact.ts` (`contactThanks`)                             |
| Newsletter signup (footer)                                                                     | every page              | `data/en/newsletter.ts` (`newsletterForm`)                         |
| Newsletter thank-you page                                                                      | `/newsletter/thanks`    | `data/en/newsletter.ts` (`newsletterThanks`)                       |
| Platform menu (header dropdown) and the 12 Platform pages: overview, web & mobile, integrations, RunnerAI, Fleet Mail, workflow builder, and the six core feature pages | `/platform`, `/platform/<page>`, `/features/<page>` | `data/en/platform.ts` (`menu`, `pages`, shared `cta`; the Overview page in `overview`, the Web & Mobile page in `webMobile`, the integrations page in `integrationsPage`, the RunnerAI page in `runnerAiPage`, the Fleet Mail page in `fleetMailPage`, the Workflow Builder page in `workflowBuilderPage`, the Preventive & Predictive Maintenance page in `preventivePage`, the Reactive Maintenance page in `reactivePage`, the Analytics and Reporting page in `analyticsPage`, the Asset Management page in `assetPage`, the Document Management page in `documentPage`, the Audit Tracking & Inspections page in `auditPage`); page addresses and menu order in `platform.ts` |
| Solutions menu (header dropdown), the 6 "By category" pages (CAFM/CMMS, PMS/REMS, work order, field service optimization, tenant & resident management, vendor & supplier management) and the 12 "By industry" pages (facility management, malls & retail, hospitality, healthcare & education, logistics, HVAC & lifts, data centers, fitness, MEP, offices, industrial, vehicles) | `/solutions/<page>` | `data/en/solutions.ts` (`menu`, `pages`, sections shared by every page in `shared`, each category page in `categories`, each industry page in `industries`); page addresses and menu order in `solutions.ts`; photos are picked by name from `photos.ts` |
| Insights list                                                                                  | `/insights`             | `data/en/insights.ts` (`insightsPage`)                          |
| Insights article                                                                               | `/insights/<file name>` | `content/insights/<file name>.md`                               |
| Page not found (English only)                                                                  | any missing address     | `pages/404.astro`                                               |
| Header links, footer links, Sign in and Book a demo buttons, tagline, menu and button labels   | every page              | `data/en/site.ts`                                               |
| Site name, contact email, logo, social links                                                   | every page              | `config.ts`                                                     |

## Languages

The site is in English plus German (`de`), Arabic (`ar`, right to left), French (`fr`), Chinese Simplified (`zh`) and Spanish (`es`). English pages have no prefix; translated pages live under `/de`, `/ar`, `/fr`, `/zh` and `/es` (for example `/de/contact`, `/ar/insights/the-building-is-alive`). The flag menu in the header switches language.

- Page wording: each language has its own copy of the data files above in `data/<language>/` (`data/de/home.ts`, `data/ar/site.ts`, ...). They have exactly the same structure as `data/en/`; only the words differ. `pnpm check` fails if a key is missing or added in one language.
- Insights articles: the English article is `content/insights/<file name>.md`; its translations are `content/insights/<language>/<file name>.md`, with the same file name. Images stay in the shared `content/insights/images/<file name>/` folder, so translated articles reference them as `../images/<file name>/...`. Root-relative links inside a translated article get the language prefix (`/de/contact`).
- An English article without a translation still appears in each language's Insights list, marked "In English", and the flag menu on it falls back to that language's home page.

## Insights articles

One Markdown file per article in `web/src/content/insights/`. The file name is the address: `my-article.md` appears at `/insights/my-article`. Use lowercase words joined by hyphens. Frontmatter fields (defined in `web/src/content.config.ts`):

```markdown
---
title: Article title
description: One or two sentences shown in the list and in search results.
publishedAt: 2026-10-02
author: Full name
category: Operations
image: ./images/my-article/cover.webp
imageAlt: What the image shows
draft: false
---

Article text in Markdown.
```

`draft: true` keeps an article off the site. `updatedAt` is optional.

Article images go in `web/src/content/insights/images/<file name>/` and are referenced with a relative path, both in `image` and in the article body (`![What the image shows](./images/my-article/chart.png)`). The build converts them to WebP.

## Images

| What                                                     | Where                                          |
| -------------------------------------------------------- | ---------------------------------------------- |
| Logo, favicon, social sharing image (`og.png`, 1200×630) | `web/public/`                                  |
| Brand images used by pages                               | `web/src/assets/brand/`                        |
| Editorial photos used by pages (listed in `photos.ts`)    | `web/src/assets/photos/`                       |
| Article images                                           | `web/src/content/insights/images/<file name>/` |

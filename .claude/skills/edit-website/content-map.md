# Content map

Keep this file up to date: when a page or section is added, add a row.

## Site addresses

| What                  | Address                                                                                                                           |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Live site             | https://fleet-website-mh1y.onrender.com (switches to https://runfleet.com once the domain points at Render; update this row then) |
| Pull request previews | Render's comment or deployment on the pull request; otherwise `https://fleet-website-mh1y-pr-<pull request number>.onrender.com`  |
| Local preview         | http://localhost:4321 after `pnpm build && pnpm preview` in `web/`                                                                |

## Pages

All paths are relative to `web/src/`.

| Page                                                                                           | Address                 | Words live in                                                   |
| ---------------------------------------------------------------------------------------------- | ----------------------- | --------------------------------------------------------------- |
| Home: top banner, headline, buttons                                                            | `/`                     | `data/home.ts` (`hero`)                                         |
| Home: product preview panel                                                                    | `/`                     | `data/home.ts` (`showcase`)                                     |
| Home: "From fragmented tools" section                                                          | `/`                     | `data/home.ts` (`unifiedModel`)                                 |
| Home: platform modules                                                                         | `/#platform`            | `data/home.ts` (`platform`)                                     |
| Home: AI agents                                                                                | `/#ai`                  | `data/home.ts` (`aiAgents`)                                     |
| Home: solutions by sector                                                                      | `/#solutions`           | `data/home.ts` (`solutions`)                                    |
| Home: consultancy                                                                              | `/#consultancy`         | `data/home.ts` (`consultancy`)                                  |
| Home: closing "Book a demo" banner                                                             | `/`                     | `data/home.ts` (`demoCta`)                                      |
| Contact page                                                                                   | `/contact`              | `data/contact.ts` (`contactPage`, form labels in `contactForm`) |
| Contact thank-you page                                                                         | `/contact/thanks`       | `data/contact.ts` (`contactThanks`)                             |
| Newsletter signup (footer)                                                                     | every page              | `data/newsletter.ts` (`newsletterForm`)                         |
| Newsletter thank-you page                                                                      | `/newsletter/thanks`    | `data/newsletter.ts` (`newsletterThanks`)                       |
| Insights list                                                                                  | `/insights`             | `pages/insights/index.astro` (title and intro)                  |
| Insights article                                                                               | `/insights/<file name>` | `content/insights/<file name>.md`                               |
| Page not found                                                                                 | any missing address     | `pages/404.astro`                                               |
| Header links, footer links, Sign in and Book a demo buttons, site name, tagline, contact email | every page              | `config.ts`                                                     |

## Insights articles

One Markdown file per article in `web/src/content/insights/`. The file name is the address: `my-article.md` appears at `/insights/my-article`. Use lowercase words joined by hyphens. Frontmatter fields (defined in `web/src/content.config.ts`):

```markdown
---
title: Article title
description: One or two sentences shown in the list and in search results.
publishedAt: 2026-10-02
author: Full name
category: Operations
image: /images/insights/my-article.webp
imageAlt: What the image shows
draft: false
---

Article text in Markdown.
```

`draft: true` keeps an article off the site. `updatedAt` is optional.

## Images

| What                                                     | Where                         |
| -------------------------------------------------------- | ----------------------------- |
| Logo, favicon, social sharing image (`og.png`, 1200×630) | `web/public/`                 |
| Brand images used by pages                               | `web/src/assets/brand/`       |
| Article images                                           | `web/public/images/insights/` |

# Fleet website

The marketing website for [Fleet](https://runfleet.com), the commercial real estate management platform for strategy, operations and maintenance. It is a static [Astro](https://astro.build/) site in `web/`, styled with [Tailwind CSS](https://tailwindcss.com/). All content lives in this repository, so changes go through pull requests and Vercel preview deployments.

## Getting started

Requirements: Node.js 22 and pnpm (the version is pinned in `package.json`).

1. Install dependencies with `pnpm install`.
2. Copy `web/.env.example` to `web/.env`.
3. Run `pnpm dev` in `web` and open http://localhost:4321.

## Commands

Run these from `web/`:

| Command       | What it does                                |
| ------------- | ------------------------------------------- |
| `pnpm dev`    | Start the local dev server                  |
| `pnpm build`  | Build the static site                       |
| `pnpm check`  | Type-check Astro files and validate content |
| `pnpm lint`   | Lint the source files                       |
| `pnpm format` | Format the source files with Prettier       |

## Where content lives

- **Insights articles**: one Markdown file per article in `web/src/content/insights/`. The file name is the URL slug (`my-article.md` is served at `/insights/my-article`). The frontmatter fields are defined in `web/src/content.config.ts`.
- **Landing page copy**: `web/src/data/home.ts`.
- **Navigation, footer, site details and default SEO settings**: `web/src/config.ts`.
- **UI primitives and page sections**: `web/src/components/`.
- **Layout, header, footer and SEO metadata**: `web/src/layout/`.
- **JSON-LD structured data**: `web/src/schema/`.
- **Favicon, app icon, logo and the default social sharing image** (`og.png`, 1200×630): `web/public/`.

See `CLAUDE.md` for the design system and coding conventions.

## Adding an Insights article

Create `web/src/content/insights/<slug>.md`:

```md
---
title: Article title
description: One or two sentences shown in the article list and search results.
publishedAt: 2026-10-02
author: Jane Doe
category: Guides
draft: false
---

Article body in Markdown.
```

Set `draft: true` to keep an article out of the site until it is ready. Run `pnpm check` in `web` to validate the frontmatter.

## SEO

Every page renders its title, description, canonical URL, Open Graph and Twitter card tags through `web/src/layout/SEOMetadata.astro`. Pages pass a `meta` object to `Layout`. Only production deployments (`VERCEL_ENV=production`) are indexable; preview and local builds send `noindex, nofollow`.

## Hosting

The site is fully static and deployed to [Vercel](https://vercel.com/) with the Astro Vercel adapter. Production deployments load [Plausible Analytics](https://plausible.io/), proxied through `/js/script.js` and `/api/event` (see `web/vercel.json`).

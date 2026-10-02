# Fleet website

The marketing website for [Fleet](https://runfleet.com), the commercial real estate management platform for strategy, operations and maintenance. It is a static [Astro](https://astro.build/) site in `web/`, styled with [Tailwind CSS](https://tailwindcss.com/). All content lives in this repository, so changes go through pull requests and Render preview deployments.

**Not a developer?** You can change the site by asking Claude. See [Editing the Fleet website with Claude](docs/editing-guide.md) for the setup and the prompt to start with.

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
image: ./images/<slug>/cover.jpg
imageAlt: Description of the cover image
draft: false
---

Article body in Markdown.

![Description of the image](./images/<slug>/photo.jpg)
```

Put the article's images in `web/src/content/insights/images/<slug>/` and reference them with relative paths as above. Never link to images hosted elsewhere. The build converts them to optimized WebP files, and the cover `image` becomes a 1200px social sharing image.

Set `draft: true` to keep an article out of the site until it is ready. Run `pnpm check` in `web` to validate the frontmatter.

## SEO

Every page renders its title, description, canonical URL, Open Graph and Twitter card tags through `web/src/layout/SEOMetadata.astro`. Pages pass a `meta` object to `Layout`. Only production deployments (`SITE_ENV=production`) are indexable; preview and local builds send `noindex, nofollow`.

## Hosting

The site is fully static and deployed to [Render](https://render.com/) as a static site in the Fleet Website project's production environment. `render.yaml` holds the build command, environment variables, and response headers.

Merging to `main` deploys to production once GitHub checks pass, and every pull request gets its own preview URL.

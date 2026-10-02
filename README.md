# Fleet website

The marketing website for Fleet, built with [Astro](https://astro.build/) and styled with Tailwind CSS. All content lives in this repository, so changes go through pull requests and Render preview deployments.

## Getting started

1. Install dependencies with `pnpm install`.
2. Copy `web/.env.example` to `web/.env`.
3. Run `pnpm dev` in `web` and open http://localhost:4321.

## Where content lives

- **Insights articles**: one Markdown file per article in `web/src/content/insights/`. The file name is the URL slug (`my-article.md` is served at `/insights/my-article`). The frontmatter fields are defined in `web/src/content.config.ts`.
- **Landing page copy**: `web/src/data/home.ts`.
- **Navigation, footer and site details**: `web/src/config.ts`.

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

## Hosting

The site is fully static and deployed to [Render](https://render.com/) as a static site in the Fleet Website project's production environment. `render.yaml` holds the build command, environment variables, response headers and the Plausible analytics proxy.

Merging to `main` deploys to production once GitHub checks pass, and every pull request gets its own preview URL.

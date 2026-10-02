# Fleet website

The marketing website for [Fleet](https://runfleet.com), the commercial real estate management platform for strategy, operations and maintenance.

The site is a static [Astro](https://astro.build/) site in `web/`, styled with [Tailwind CSS](https://tailwindcss.com/) and deployed on [Vercel](https://vercel.com/).

## Getting started

Requirements: Node.js 22 and pnpm (the version is pinned in `package.json`).

```bash
pnpm install
cd web
cp .env.example .env
pnpm dev
```

The site runs at http://localhost:4321.

## Commands

Run these from `web/`:

| Command        | What it does                          |
| -------------- | ------------------------------------- |
| `pnpm dev`     | Start the local dev server            |
| `pnpm build`   | Build the static site into `dist/`    |
| `pnpm check`   | Type-check Astro and TypeScript files |
| `pnpm lint`    | Lint the source files                 |
| `pnpm format`  | Format the source files with Prettier |

## Where things live

- `web/src/config.ts`: site name, description, navigation, footer links and the default SEO settings.
- `web/src/data/`: page copy, one typed file per page.
- `web/src/components/`: UI primitives (`ui/`) and page sections.
- `web/src/layout/`: the page layout, header, footer and SEO metadata.
- `web/src/schema/`: JSON-LD structured data.
- `web/public/`: favicon, app icon, logo and the default social sharing image (`og.png`, 1200×630).

See `CLAUDE.md` for the design system and coding conventions.

## SEO

Every page renders its title, description, canonical URL, Open Graph and Twitter card tags through `web/src/layout/SEOMetadata.astro`. Pages pass a `meta` object to `Layout`. Only production deployments (`VERCEL_ENV=production`) are indexable; preview and local builds send `noindex, nofollow`.

## Analytics

Production deployments load [Plausible Analytics](https://plausible.io/), proxied through `/js/script.js` and `/api/event` (see `web/vercel.json`).

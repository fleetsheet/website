# Helping an editor change the website

Most people asking you to change this site are not developers: they want wording, images, links, pages or Insights articles changed, and they approve what they see, not code. For any such request, use the `edit-website` skill (`.claude/skills/edit-website/SKILL.md`) and follow it end to end, every time:

1. Sync with `origin/main` before starting, and help the editor through any merge conflict.
2. If the request is vague, use the `grilling` skill to settle what they want before changing anything.
3. Make the change in the content files listed in the skill's content map.
4. Run the checks, then show before and after screenshots.
5. Open a pull request and share the Render preview link.
6. Merge only after the editor approves, then tell them when the change is live.

Talk to editors in plain language: no file paths, commands or diffs unless they ask. Setup steps and the starter prompt for editors are in `docs/editing-guide.md`.

The rest of this file is for code changes.

# Repository Overview

This repository contains the Fleet marketing website (`/web`): an Astro-based static site, styled with Tailwind CSS. There is no CMS: all content lives in the repository as Markdown files and typed data files.

## Essential Commands

### Frontend Development (`/web`)

```bash
pnpm dev
pnpm build
pnpm check
pnpm lint
pnpm format
```

## Architecture Overview

### Frontend Architecture

The frontend uses Astro's static site generation with content from the repository:

- **Components**: (`/web/src/components/`): Reusable .astro components
- **Layout**: (`/web/src/layout/`): Layout components like `Layout.astro`, `Header.astro`, `Footer.astro`
- **Content**: (`/web/src/content/`): Markdown content collections, with schemas in `/web/src/content.config.ts`
  - **insights**: (`/web/src/content/insights/`): one `.md` file per Insights article, served at `/insights/<file name>`
- **Pages**: (`/web/src/pages/`): Dynamic routing
- **Schema**: (`/web/src/schema/`): Structured data schemas for SEO

Key architectural patterns:

- Static site generation with Astro
- Content collections with strict frontmatter schemas; `pnpm check` fails on invalid content
- Tailwind CSS v4 for styling with custom design tokens

#### Design System

The site follows the Fleet design system (brand guide by Blackhat Agency, landing page designed in Claude Design). Every new page must reuse it instead of introducing new colors, fonts or one-off styles.

- **Tokens** live in `web/src/styles.css` (`@theme`). Use the brand utilities (`bg-page`, `bg-surface`, `text-rich-blue`, `text-azul-blue`, `text-muted`, `border-border`, `bg-columbia-blue`, `text-celestial-blue`, `bg-sun-orange`, …), the display sizes (`text-display-xl` for the page h1, `text-display-md` for section h2s, `text-display-lg` for CTA banners), `text-lead`, the `eyebrow` utility and the `bg-supergraphic` background. Never hard-code hex values.
- **Fonts**: Sora for headings (`font-display`, applied to h1–h6 automatically), Hanken Grotesk for body text (`font-sans`, the default). Both are self-hosted from `web/src/assets/fonts/` via Astro's font API in `astro.config.mjs`.
- **Global config** (`web/src/config.ts`): site name, URL, email, logo and social links. Translatable site-wide copy (tagline, header links, footer columns, the Sign in / Book a demo actions and UI labels) lives in `web/src/data/<locale>/site.ts`. Change navigation there, not in `Header.astro` or `Footer.astro`.
- **UI primitives** (`web/src/components/ui/`): `Container`, `PageSection` (tones `page`, `surface`, `inverse`), `SectionHeader`, `Button` (variants `primary`, `secondary`, `ghost`, `accent`, `inverse`), `Badge` (status tones `due`, `overdue`, `done`, `info`), `IconChip`, `FeatureCard`, `MockPanel`, `CheckList`, `Logo` and `CtaBanner`. Build new pages by composing these.
- **Page sections** for a specific page live in `web/src/components/<page>/` (e.g. `components/home/`), and their copy lives in a typed data file per language in `web/src/data/<locale>/` (e.g. `data/en/home.ts`), read through `getContent(locale)` from `@/data`, so wording can change without touching markup.
- **Visual rules**: Alice Blue page background with white cards, 1px `border-border` borders with subtle blue-tinted shadows, `rounded-md` buttons and badges, `rounded-xl` cards, Sun Orange only for marketing CTAs and overdue states, no gradients, no emoji, sentence case for UI labels.

#### Translations

The site is static and multilingual: English (default, no URL prefix) plus `de`, `ar` (right to left), `fr`, `zh` (Simplified) and `es` under `/<locale>/...`. Locales, their labels and helpers live in `web/src/i18n.ts`.

- Pages live in `web/src/pages/[...lang]/` and export `getStaticPaths` from `localeStaticPaths()`; components get the locale with `getLocale(Astro.url)` and copy with `getContent(locale)`. Never hard-code reader-facing text in components: add it to every `data/<locale>/` file (`Record<Locale, Content>` in `data/index.ts` makes `pnpm check` fail when a language is missing a key).
- Internal links go through `localizePath(href, locale)`; `Button` does this automatically. Language switch links use `data-astro-reload`.
- Translated Insights articles are `content/insights/<locale>/<slug>.md` with the English file name; helpers in `utils/insights.ts` resolve locale, slug, path and fallbacks.
- Use logical Tailwind utilities (`ms-*`, `pe-*`, `start-*`, `text-start`) instead of left/right ones, and flip directional icons with `rtl:-scale-x-100`, so Arabic lays out right to left. `styles.css` resets letter-spacing for Arabic and Chinese.
- When English copy changes, update the other five languages in the same change.

#### Astro Environment Variables

Always use Astro's type-safe environment variables instead of `import.meta.env`:

1. Define env vars in `astro.config.mjs` under `env.schema`
2. Import from `astro:env/client` or `astro:env/server`
3. Never use `import.meta.env.VARIABLE_NAME` directly

### TypeScript

Strict mode is enabled across the monorepo. Always ensure existing types are reused and type assertions are prevented.

## Rules

### Structured Data Schemas

This website implements JSON-LD structured data for SEO. All schema definitions are located in `/web/src/schema/`.

1. **File Organization**: Create one file per collection or schema type (e.g., `article.ts`, `author.ts`)
2. **Function Naming**: Name the main export function `{contentType}Schema` (e.g., `articleSchema`, `authorSchema`)
3. **Return Type**: Functions must return `WithContext<SchemaType>` from the `schema-dts` package
4. **URL Construction**: Always use `new URL(path, SITE_URL)`. Do not use `normalizePath`
5. **Usage**: Import and call schema functions in layout files, then render with `<Schema item={schema} />`

### Icon Imports

Always import `@lucide/astro` icons via the per-icon subpath, using the icon's kebab-case name (`import CalendarDays from '@lucide/astro/icons/calendar-days'`) — never the barrel `from '@lucide/astro'`, which drastically slows dev reloads.

### View Transitions

This website uses Astro's View Transitions (`<ClientRouter />`). When writing client-side `<script>` tags that need to run on every page visit:

1. **Wrap code in `astro:page-load`** - This event fires on initial load AND after every client-side navigation
2. **Never run DOM queries at module scope** - The DOM elements won't exist after navigation

```typescript
// Bad - only runs once on initial page load
const button = document.getElementById("my-button");
button?.addEventListener("click", handleClick);

// Good - runs on every page visit
document.addEventListener("astro:page-load", () => {
  const button = document.getElementById("my-button");
  button?.addEventListener("click", handleClick);
});
```

### Task Completion Checklist

When completing any task in this codebase, always perform these quality checks:

### Code Quality

- Run `pnpm lint`, `pnpm format` and `pnpm check` in `web`

### Deployment

The site is a static build of `web/` hosted on Render (Fleet Website project, production environment), configured in `render.yaml`.

- Merging to `main` deploys to production once GitHub checks pass.
- Every pull request gets its own Render preview URL, posted on the PR.
- `SITE_ENV` is `production` on the live site and `preview` on pull request previews; analytics and indexing only run in `production`.
- Response headers and any rewrites live in `render.yaml`, not in the Astro config.

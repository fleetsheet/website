# Design and voice

The site follows the Fleet design system. The full rules for code are in the "Design System" section of `CLAUDE.md`; this is what matters for editors' changes.

## Voice

- Audience: people who run commercial real estate portfolios (operations, facilities and asset managers, owners).
- Plain, confident and specific. Lead with what the customer gets, then how. Prefer concrete details ("every site, asset and work order in one place") over adjectives ("powerful", "seamless", "revolutionary").
- US English, short sentences, active voice. No exclamation marks, no emoji.
- Say "Fleet" for the product and company. Feature names match the site: work orders, asset management, document management, custom workflows, audit logs, AI agents.
- Headings: match the neighbouring headings on the same page. The home page uses Title Case section headings; the contact and thank-you pages use sentence case. Buttons, labels, navigation and form fields always use sentence case ("Book a demo", not "Book A Demo").
- Keep a heading close to its current length; long headings wrap badly on phones.

## Look

- Never change colors, fonts, spacing or sizes as part of a content edit. If the editor asks for a visual change ("make this button orange", "bigger headline"), explain that it changes the design system and check whether they want it for this one place or everywhere.
- Sun Orange is only for marketing calls to action and overdue states. No gradients.
- A new section or page is built from the existing building blocks in `web/src/components/ui/` (cards, buttons, badges, check lists, section headers, call-to-action banner) with its words in a data file. Use the `astro-components` skill, and say on the pull request that the change touches how the site is built.
- Before showing screenshots, compare the changed section with its neighbours: same alignment, spacing and text styles, nothing overflowing on phone width.

## Accessibility

- Every image needs alt text that says what it shows; decorative images get an empty alt.
- Link text says where it goes ("Read the asset management guide", not "click here").
- Don't put words inside images when they could be text on the page.

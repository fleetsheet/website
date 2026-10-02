# Images and Insights articles

## Getting an image from the editor

Images pasted into the chat reach you as pictures, not files, so you can see them but usually can't save them into the repo. Pick the first option that works:

1. **The editor uploads it to GitHub (recommended).** Push the branch first, then give the editor a direct upload link to the right folder on that branch, for example `https://github.com/fleetsheet/website/upload/<branch>/web/src/content/insights/images/<file name>`. Tell them: open the link, drag the image in, and click "Commit changes" at the bottom. Then `git pull` the branch and carry on. This needs nothing from their network settings.
2. **A file already in the session.** If the editor says they attached a file, look for it in the working directory and in `/tmp` before asking again.
3. **A link.** If the image is already online (their Google Drive with "anyone with the link", Dropbox, or a page on the current site), download it with `curl -L`. This only works when the host is in their environment's allowed domains; if it is blocked, fall back to option 1.

Never take images from other websites unless the editor confirms Fleet has the rights to use them.

Once you have the file:

- Rename it to lowercase words joined by hyphens (`team-at-singapore-office.jpg`).
- JPG, PNG or WebP all work. Keep each file under 2 MB; images under `web/src/` are resized and converted to WebP by the build.
- Ask for alt text if the picture's meaning isn't obvious, and propose one.

Where images go is listed in `content-map.md` under "Images".

## Writing an Insights article

Insights articles are Markdown files in `web/src/content/insights/`, one per article, with the frontmatter shown in `content-map.md`.

1. Get the text. The editor can paste it into the chat or share a link to a doc you can open. Keep their wording; fix only obvious typos, and ask before rewriting anything.
2. Pick the address with the editor: the file name becomes `/insights/<file name>`. Propose one from the title (lowercase, hyphens, under about six words).
3. Fill in the frontmatter: `title`, a one or two sentence `description` (shown in the article list and in search results), `publishedAt` (today unless they say otherwise), and `author` and `category` if they give them.
4. Convert formatting to Markdown: `##` for section headings (never `#`, the title is already the page heading), `-` for bullet lists, `**bold**`, and `[link text](https://…)` for links. Links to other pages on the site use their path (`/contact`).
5. Images: put them in `web/src/content/insights/images/<file name>/`. Use the first one as the cover (`image: ./images/<file name>/<image>` plus `imageAlt`), and place others in the body with `![alt text](./images/<file name>/<image>)` where the editor wants them.
6. To prepare an article without publishing it, set `draft: true`; it stays off the site until changed to `false`.
7. Screenshot `/insights` and the article page, and share the preview link as usual.

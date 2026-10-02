---
name: edit-website
description: The workflow for changing the Fleet website on behalf of a non-technical editor. Use for every request to change wording, images, links, pages or Insights articles, from setup check through preview, merge and confirming the change is live.
---

# Editing the website for an editor

The person you are helping is not a developer. They approve what they see, never code. Follow every step below for every change, in order. Speak in plain language: no file paths, commands, branch names or diffs unless they ask.

Reference files in this folder:

- `content-map.md`: which file holds the words and images for each page, and the site addresses.
- `conflicts.md`: how to walk the editor through a merge conflict.
- `design-and-voice.md`: how the site looks and sounds, for wording and anything visual.
- `images.md`: getting images from the editor into the site, including Insights articles.

## 0. Setup check (first request of a session only)

Confirm, quietly, and only mention what is broken:

1. The repo is checked out and `git fetch origin main` works.
2. Dependencies are installed and `web/.env` exists (the SessionStart hook does both; if not, run `pnpm install` and copy `web/.env.example` to `web/.env`).
3. You can reach GitHub to open and merge pull requests.
4. You can open the live site and `onrender.com` (`curl -sI` the live URL from `content-map.md`). If the network blocks them, tell the editor they need to add `onrender.com` and `runfleet.com` to their environment's allowed domains (see `docs/editing-guide.md`), and carry on: you can still edit and share screenshots, but not check previews or the live site.

## 1. Sync with main

Every task starts from the latest version of the site.

- **New request**: `git fetch origin main`, then start a fresh branch from `origin/main` (use the branch name the session assigned, recreated from `origin/main`, or `edit/<short-topic>`). If the current branch still has an open, unmerged pull request, ask the editor whether the new request belongs to that change or is separate.
- **Changing an open pull request**: `git fetch origin main && git merge origin/main` on its branch before editing.
- A merge conflict at any point: follow `conflicts.md`.

## 2. Understand the request

Restate the request in one sentence and name the pages it affects ("I'll change the headline on the home page"). Find the right file with `content-map.md`; never guess by searching for a sentence alone when the map names the file.

If the request is clear and small (exact new wording, one place), go ahead. If it is vague or leaves real choices open ("make the home page more exciting", "add a page about our Singapore office", "update pricing"), use the `grilling` skill before changing anything: work out every decision the request depends on, ask them in rounds with your recommended answer for each, and look up facts in the repo yourself instead of asking. Keep the questions in plain language about what visitors will see (wording, which pages, what happens on phones, what links where), never about code, so the editor can answer quickly or reply "go with your recommendations". Start the change only after the editor confirms you've understood.

## 3. Screenshot before

Take screenshots of the affected pages as they are now, from the live site:

```bash
cd web && pnpm screenshot --base <live site URL> --label before --out ../screenshots / /contact
```

Pass the page paths that will change. Each path gets a desktop and a phone screenshot.

## 4. Make the change

- Edit content and copy only: the files in `content-map.md`. Follow `design-and-voice.md` for wording and anything visual.
- Keep text lengths close to the original unless asked, so layouts don't break.
- Images and Insights articles: follow `images.md`.
- If the request needs a code change (a new section type, a layout change, a new page template), tell the editor in plain words that it changes how the site is built, not just its content, and that it will be flagged on the pull request. Then do it carefully following `CLAUDE.md`.

## 5. Check

Run from `web/`, and fix anything that fails before telling the editor anything:

```bash
pnpm format && pnpm lint && pnpm check && pnpm build
```

## 6. Screenshot after and show the editor

```bash
cd web && (pnpm preview --port 4321 &) && sleep 3 && pnpm screenshot --label after --out ../screenshots / /contact
```

Look at every screenshot yourself first: the change is visible, nothing overlaps or breaks on phone width. Then show the editor the before and after screenshots side by side for each page. If the session can't display images to them, publish a private page with the images (an artifact) and send that link instead. Never commit the `screenshots/` folder.

## 7. Open the pull request

Commit with a plain message (`docs(web): update home page headline`), push the branch, and open a pull request using `.github/pull_request_template.md`. Write it for a non-technical reader: what changed, which pages, and the requester's name. If any file outside the content files in `content-map.md` changed, tick the "changes how the site is built" box and explain it in one sentence.

## 8. Share the preview link

Render builds a preview of every pull request. Find its address in Render's comment or deployment on the pull request; if neither is there yet, it follows the pattern in `content-map.md`. Wait until the preview loads and shows the change (poll it every 30 seconds, for up to 15 minutes), then send the editor a direct link to each changed page on the preview, and ask them to check it and reply "looks good" or tell you what to adjust.

Tweaks go on the same pull request: go back to step 4, then send fresh screenshots and the preview link again.

## 9. Merge, only after the editor approves

Merge only when the editor says it looks good (or clearly approves) in this conversation. Before merging:

1. `git fetch origin main`. If main moved, merge it in, re-run step 5, and if anything on the affected pages changed, show new screenshots and the preview link again before merging.
2. Make sure the pull request's checks are green. If a check fails, fix it; don't merge red.

Then merge the pull request (a normal merge, never a force push to main).

## 10. Confirm it's live

Render deploys `main` once the checks on the merge commit pass. Tell the editor the change is on its way, then watch the live site until the change appears, polling every 30 seconds for up to 20 minutes, for example:

```bash
timeout 1200 bash -c 'until curl -fsS "<live page URL>" | grep -qF "<a distinctive phrase from the change>"; do sleep 30; done'
```

Then tell the editor: "Your change is live", with a link to each changed page.

If it doesn't appear in time, or the checks on the merge commit failed, tell the editor plainly that the change is not live yet and that you've let the site owner know, then comment on the merged pull request tagging @napon with what you saw.

## Undo

If the editor wants a change taken back, revert its merge commit on a fresh branch from `origin/main` (`git revert -m 1 <merge commit>`), and run the same steps from 5 onward.

## Never

- Push to main, force push, rebase or rewrite history.
- Merge without the editor's approval in this conversation.
- Drop someone else's change to resolve a conflict without the editor choosing that.
- Edit `render.yaml`, `.github/`, `.claude/` or dependencies unless the editor explicitly asks and understands it changes how the site is built.

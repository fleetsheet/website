# Editing the Fleet website with Claude

You can change the website's wording, images, links, pages and Insights articles by asking Claude in plain English. Claude makes the change, shows you screenshots and a preview of the site, and only publishes it after you say it looks good. Then it tells you when your change is live.

## One-time setup

1. **GitHub account.** Create one at [github.com](https://github.com/signup) if you don't have one, and send your username to Napon. Accept the invitation to `fleetsheet/website` that arrives by email.
2. **Claude.** You need a Claude plan that includes Claude Code. Go to [claude.ai/code](https://claude.ai/code) (or the Code tab in the Claude desktop app) and connect your GitHub account when asked.
3. **Choose the repository.** Pick `fleetsheet/website` as the repository for your session.
4. **Allow the preview sites.** Claude needs to open the preview and live websites to check your changes. Open the environment settings for your session (the environment menu next to the repository, then the settings gear), set **Network access** to **Custom**, keep the default package managers, and add these allowed domains:
   - `onrender.com`
   - `runfleet.com`

   The full steps are in [Claude's cloud environment docs](https://code.claude.com/docs/en/cloud-environments#network-access).

## Starting a session

Start a new session with `fleetsheet/website` selected and paste this as your first message:

```text
You're helping me edit the Fleet marketing website (fleetsheet/website). I'm not a developer, so explain things in plain language and don't show me code unless I ask.

For every change I ask for, follow the editor workflow in this repo's CLAUDE.md and the edit-website skill: show me screenshots and the preview link before anything goes live, and only merge when I say it looks good. After merging, tell me when the change is live.

Start by checking that I'm set up, then ask me what I'd like to change.
```

Then describe what you'd like changed, for example:

- "Change the home page headline to 'Real estate operations, unified'."
- "Add a new Insights article from this text: …"
- "Replace the phone number in the footer with …"

## What happens next

1. Claude gets the latest version of the site and makes your change.
2. It checks nothing is broken and shows you before and after screenshots on desktop and phone.
3. It sends you a link to a preview of the whole site with your change. Click around and check it.
4. Reply "looks good" to publish, or tell Claude what to adjust. Every adjustment gets fresh screenshots and a new preview.
5. After you approve, Claude publishes the change and tells you when it's live, with a link.

If someone else changed the same part of the site in the meantime, Claude shows you both versions and asks which to keep.

## Tips

- One change per request is easiest to review. Several small changes to the same page can go together.
- Be specific about where: the page, and the words currently there.
- To take a change back, say "put back the home page headline as it was". Claude handles it the same way, with a preview first.
- If Claude says a change "changes how the site is built", it touches more than content. That's fine, but take a closer look at the preview, and Napon may want to review it.

## For the site owner

One-time repository settings that make this safe:

- GitHub Actions runs the checks in `.github/workflows/ci.yml` (Format, Lint, Type Check, Build) on every pull request. Render only deploys `main` once these checks pass.
- Protect `main`: require a pull request before merging, require the Format, Lint, Type Check and Build checks to pass, and block force pushes.
- Invite each editor to the repository with **Write** access.

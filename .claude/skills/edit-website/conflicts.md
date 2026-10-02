# Merge conflicts

A conflict means someone else changed the same lines since this edit started. The editor decides what to keep for content; you handle the mechanics.

1. Stop and tell the editor in plain words: "Someone else changed the same part of the <page> since I started. I need you to pick which version to keep."
2. For each conflicting spot, show both versions as the reader would see them, not as code:
   - **Already on the site (from main):** the other person's wording.
   - **Your change:** the editor's wording.
   - **Combined (suggested):** only when both changes can sensibly live together, for example one changed the headline and the other fixed a typo in it.
3. Ask which to keep: theirs, yours or combined. Never pick for them, and never drop the other person's change without the editor choosing that.
4. Apply the choice, remove every conflict marker, and run `pnpm format && pnpm lint && pnpm check && pnpm build` in `web/`.
5. Commit the merge (`git commit` with the default merge message), push, and send fresh screenshots and the preview link before asking for approval again.

If the conflict is in code (components, layout, styles, configuration other than `config.ts` links and text, `render.yaml`, `.github/`, dependencies or `pnpm-lock.yaml`), don't ask the editor to choose. Tell them it needs the site owner, run `git merge --abort`, and comment on the pull request tagging @napon with the files involved.

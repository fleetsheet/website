# Forms (FormSpark)

The site's two forms send their submissions to FormSpark, an outside service. The site only shows the form; FormSpark receives, stores and emails the submissions.

| Form              | Where on the site                      | FormSpark form name  | Form ID     |
| ----------------- | -------------------------------------- | -------------------- | ----------- |
| Contact form      | `/contact` (and `/<language>/contact`) | "Contact Form"       | `Scb6CnrE2` |
| Newsletter signup | Footer of every page                   | "Newsletter Sign Up" | `3gWO6kLFK` |

## The FormSpark dashboard

- Address: https://formspark.io, then sign in to reach the dashboard.
- Sign in with **Google**, using the account **admin@runfleet.com**. There is no separate FormSpark password.
- You can't open or change the dashboard yourself. When a request belongs there, tell the editor in plain words where to go and what to look for, and say that only someone who can sign in to admin@runfleet.com can do it. If they don't have access, they should ask Napon.

## Where each change happens

Decide this first, and tell the editor which it is.

**In the FormSpark dashboard (the editor does it, no pull request):**

- Who gets an email when someone submits a form, or stopping those emails.
- Reading, searching, exporting or deleting submissions (contact messages and newsletter signups).
- Spam protection settings.
- An automatic reply email to the person who submitted.
- Sending submissions to other tools (for example Zapier, Slack, a webhook or a mailing list).
- Renaming a form or creating a new one in FormSpark.

Open the dashboard, pick the form by its name in the table above, and look in its settings. The exact menu names come from FormSpark and may change; this repo can't confirm them, so describe the goal ("the notification email setting for the Contact Form") rather than quoting buttons.

**In the website (you do it, with the usual edit-website workflow):**

- Wording of the forms: labels, button text, the message after sending, the error message, and the thank-you pages. Files are in `content-map.md` (Contact page, Newsletter signup rows), in all six languages.
- Adding, removing or renaming a field, or making one required. The contact form's fields are the `fields` list in `data/<language>/contact.ts`; change all six languages the same way. FormSpark stores whatever fields arrive, so nothing needs to change in the dashboard, but tell the editor that new fields show up in submissions only from the next one onwards.
- Pointing a form at a different FormSpark form: the editor creates it in the dashboard and gives you its form ID; replace `actionUrl` (`https://submit-form.com/<form ID>`) in `contact.ts` or `newsletter.ts` for all six languages.
- Adding a new form somewhere else on the site: this changes how the site is built. Reuse the existing form components and `scripts/formspark.ts`, and the editor creates a new form in the dashboard first.

## Things to know

- The site already sends a hidden spam-trap field (`_honeypot`) with each form; leave it in place.
- Submissions from pull request previews reach the same FormSpark forms as the live site, so testing a form on a preview creates a real submission (and a notification email). Warn the editor before testing, and suggest they delete the test submission in the dashboard afterwards.
- If a form shows its error message on the live site, the usual causes are on FormSpark's side (form deleted or disabled, or the plan's submission limit reached). Send the editor to the dashboard to check, and tell Napon if it isn't that.

# Commonground

**An official Forumulate careers template.** Modelled on: a charity’s jobs and volunteering page.

A nonprofit’s careers page in the default look: paid roles and volunteer places on one board, grouped by programme, with the mission up front, a weekly digest for supporters and the equal-opportunity statement in plain words.

## What it uses

- Paid roles, internships and volunteer places on one board, told apart by type
- Departments preset: roles under their programme with counts
- Volunteer places say what the hours are instead of a salary
- Role layout: split — facts, Apply and share in a sticky column
- Weekly digest offered to supporters on the job-alert control
- Zero custom CSS — every detail is a theme setting

## What applying it creates

- **The look** — `bundle.json`, a theme bundle: palette, type, header and footer, and the board's look (`theme.careers`). Published to the space straight away.
- **The front page** — the composed careers page in `template.json` (`frontPage`), ending in the live roles board.
- **The layout** — board preset `departments`, role layout `split` and the front door's options.
- **3 teams with 6 sample roles** — each with its location, employment type, where the work happens and level set as fields, and the typed sections filled in:
  - Community Programme Manager
  - Youth Worker (part time)
  - Trusts and Foundations Fundraiser
  - Fundraising Intern
  - Food Project Volunteer
  - Trustee, Finance and Audit
- **One page beside the roles** — "How we hire and welcome volunteers", a page, not a role.
- **The apply form** — phone, links, two custom questions, the voluntary self-identification section and a consent line.

The sample copy is original, with a `Your Brand` placeholder where the company's name goes; replace it with the space's own words after applying.

## Preview

`screenshots/desktop.png` and `screenshots/phone.png` are not captured yet, and the picker's thumbnail (`apps/web/public/templates/commonground.jpg`) is a copy of Keelboard's. Capture both from the applied template with `scripts/capture-template-shots.mjs`.

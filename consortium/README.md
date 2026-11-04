# Consortium

**An official Forumulate careers template.** Modelled on: a large company’s multi-team careers site.

An enterprise careers site in the board look with the table layout: every open role in one ruled table, a filter rail with team, place, type and level, team pages of their own, similar roles and previous/next on every role.

## What it uses

- Look: board — a ruled table, a column each for team, location, type and level
- Filter rail on the left (team, location, type, where the work happens, level)
- Team pages of their own, each with its feeds, and facet pages (“Jobs in Berlin”) in the sitemap
- Role layout: tabs — Overview and Application; similar roles and previous/next under the form
- Equal-opportunity statement and accommodations said once for the space
- Zero custom CSS — every detail is a theme setting

## What applying it creates

- **The look** — `bundle.json`, a theme bundle: palette, type, header and footer, and the board's look (`theme.careers`). Published to the space straight away.
- **The front page** — the composed careers page in `template.json` (`frontPage`), ending in the live roles board.
- **The layout** — board preset `table`, role layout `tabs` and the front door's options.
- **4 teams with 7 sample roles** — each with its location, employment type, where the work happens and level set as fields, and the typed sections filled in:
  - Principal Engineer, Payments
  - Site Reliability Engineer
  - Financial Controller
  - Accounts Payable Analyst
  - Supply Chain Planner
  - Talent Partner
  - People Operations Intern
- **One page beside the roles** — "Our hiring process", a page, not a role.
- **The apply form** — phone, links, two custom questions, the voluntary self-identification section and a consent line.

The sample copy is original, with a `Your Brand` placeholder where the company's name goes; replace it with the space's own words after applying.

## Preview

`screenshots/desktop.png` and `screenshots/phone.png` are not captured yet, and the picker's thumbnail (`apps/web/public/templates/consortium.jpg`) is a copy of Keelboard's. Capture both from the applied template with `scripts/capture-template-shots.mjs`.

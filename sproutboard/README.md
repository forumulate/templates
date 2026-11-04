# Sproutboard

**An official Forumulate careers template.** Modelled on: an early-stage startup’s “join us” page.

A startup’s careers page in the bold look: a short pitch, a handful of roles as cards with their facts as chips, equity and pay said plainly, and the role as one column with an Apply bar that stays in reach.

## What it uses

- Look: bold — large role titles, pill chips, a brand-coloured Apply bar
- Board preset cards: each role a card, two to a row, its place and type as chips
- Featured roles pinned first; pay band and equity said on every role
- Role layout: single — the role, then the apply form, with a sticky Apply bar
- Weekly digest offered on the board’s job-alert control
- Zero custom CSS — every detail is a theme setting

## What applying it creates

- **The look** — `bundle.json`, a theme bundle: palette, type, header and footer, and the board's look (`theme.careers`). Published to the space straight away.
- **The front page** — the composed careers page in `template.json` (`frontPage`), ending in the live roles board.
- **The layout** — board preset `cards`, role layout `single` and the front door's options.
- **2 teams with 4 sample roles** — each with its location, employment type, where the work happens and level set as fields, and the typed sections filled in:
  - Founding Engineer
  - Product Designer
  - Growth Marketer
  - Marketing Intern
- **One page beside the roles** — "How we hire", a page, not a role.
- **The apply form** — phone, links, two custom questions, the voluntary self-identification section and a consent line.

The sample copy is original, with a `Your Brand` placeholder where the company's name goes; replace it with the space's own words after applying.

## Preview

`screenshots/desktop.png` and `screenshots/phone.png` are not captured yet, and the picker's thumbnail (`apps/web/public/templates/sproutboard.jpg`) is a copy of Keelboard's. Capture both from the applied template with `scripts/capture-template-shots.mjs`.

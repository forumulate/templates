# Nomadic Jobs

**An official Forumulate careers template.** Modelled on: a remote-first agency’s jobs page.

A remote-first agency’s careers page in the paper look: roles as a plain list with where in the world each can be done, a time-zone note on every role, and remote and freelance roles easy to find.

## What it uses

- Look: paper — a quiet list with long, readable role titles
- Place first: each role says where in the world it can be done, and “Remote” has a page of its own
- Freelance and contract roles beside employed ones, filtered by type
- Role layout: single — the role, then the apply form
- Benefits said once for the space and shown under every role
- Zero custom CSS — every detail is a theme setting

## What applying it creates

- **The look** — `bundle.json`, a theme bundle: palette, type, header and footer, and the board's look (`theme.careers`). Published to the space straight away.
- **The front page** — the composed careers page in `template.json` (`frontPage`), ending in the live roles board.
- **The layout** — board preset `list`, role layout `single` and the front door's options.
- **2 teams with 4 sample roles** — each with its location, employment type, where the work happens and level set as fields, and the typed sections filled in:
  - Senior Brand Designer
  - Motion Designer (freelance)
  - Producer
  - Front-end Developer
- **One page beside the roles** — "How we work", a page, not a role.
- **The apply form** — phone, links, two custom questions, the voluntary self-identification section and a consent line.

The sample copy is original, with a `Your Brand` placeholder where the company's name goes; replace it with the space's own words after applying.

## Preview

`screenshots/desktop.png` and `screenshots/phone.png` are not captured yet, and the picker's thumbnail (`apps/web/public/templates/nomadic-jobs.jpg`) is a copy of Keelboard's. Capture both from the applied template with `scripts/capture-template-shots.mjs`.

# Fernway

**An official Forumulate ROADMAP template.** Modelled on: a product-feedback platform’s roadmap.

A product roadmap in four open columns — Planned, Next up, In progress, Done — each with its own mark and a one-line description, raised rounded cards with a vote pill in the corner, and a light or dark look that follows the reader.

Screenshots are taken from the live preview after deploy (`screenshots/desktop.png`, `screenshots/phone.png`).

## What it uses

- Preset: board — four plain columns, each head a mark, a name, a count and one line on what the lane means
- A board-added status, “Next up”, between Planned and In progress (RM-4 custom statuses)
- Raised 12px cards: tag eyebrow, two-line excerpt, author and comments in the footer, vote pill in the top corner
- Tabs for Trending / Top / New, tags and search; phones swipe between lanes
- Item page: Follow, vote and voters (faces) in a side rail, facts, share and copy actions
- Follows the reader’s light or dark setting; Inter; soft shadows
- Zero custom CSS — every detail is a theme setting

## What applying it creates

- **The look** — `bundle.json`, a theme bundle: palette, type, header and the `theme.roadmap` keys (lanes, cards, vote, filters, item page). Published to the space straight away.
- **The layout** — preset `board`.
- **The board** — `settings.roadmap`, applied through `PUT …/roadmap-settings`: a board-added “Next up” status (sky, with a description); lanes Planned / Next up / In progress / Done; new requests land in the hidden Submitted lane until you triage them.
- **9 sample items** — 3 planned, 2 next up, 2 in progress, 2 done. Each is written in the shape's own slots (“The problem”, “What we are thinking”) with its target, size and theme, a few comments credited by name to placeholder people, and — on the items the team has moved — the team's answer as the official response.
- **No votes.** A template never seeds a vote count: the board starts at zero and fills with your readers' real votes.
- **Pictures** — `assets/mark.svg`, copied into your library.
- New requests from readers arrive in **Submitted**, which this template keeps off the public board (a feedback inbox, not a roadmap lane). Show it again in the board’s lane settings if you want requests visible straight away.

## Placeholders

- **“Your Brand”** — every place the brand appears becomes your organization’s name when the template is applied.
- **People** — the requesters, commenters and “Sam Okafor” (who answers for the team) are fictional placeholders credited by name; no account is made for them. Delete the sample items when your own arrive.

## Files

- `template.json` — the manifest (`forumulate.space-template` v1): layout, `settings.roadmap` and the sample items under `roadmap`. Schema: `packages/shared/src/official-templates-content-roadmap.ts`.
- `bundle.json` — the theme bundle; also listed in the theme marketplace as `template-fernway`.
- `assets/` — the placeholder pictures.

# Lanyard

**An official Forumulate ROADMAP template.** Modelled on: a customer-feedback tool’s public roadmap.

A feedback board’s public roadmap: three bordered lane panels with a coloured dot in each head, a square vote box on the left of every card, an uppercase theme eyebrow, and an item page with its voters in a left-hand rail.

Screenshots are taken from the live preview after deploy (`screenshots/desktop.png`, `screenshots/phone.png`).

## What it uses

- Preset: board — three lane panels (Under review / Planned / In progress) with a tinted dot and a hairline under each head
- Square vote box with a chevron at the start of each card; uppercase theme eyebrow; no excerpt
- Sort row (Trending / Top / New), tags and search above the board
- Item page: the voters, vote and Follow in a rail on the left; the team’s answer under the title
- White and indigo, Inter, 6px corners
- Zero custom CSS — every detail is a theme setting

## What applying it creates

- **The look** — `bundle.json`, a theme bundle: palette, type, header and the `theme.roadmap` keys (lanes, cards, vote, filters, item page). Published to the space straight away.
- **The layout** — preset `board`.
- **The board** — `settings.roadmap`, applied through `PUT …/roadmap-settings`: lanes renamed Under review / Planned / In progress / Complete; Complete and Declined hidden from the public board (their items stay reachable by link).
- **9 sample items** — 3 under review, 3 planned, 3 in progress (one pinned). Each is written in the shape's own slots (“The problem”, “What we are thinking”) with its target, size and theme, a few comments credited by name to placeholder people, and — on the items the team has moved — the team's answer as the official response.
- **No votes.** A template never seeds a vote count: the board starts at zero and fills with your readers' real votes.
- **Pictures** — `assets/mark.svg`, copied into your library.

## Placeholders

- **“Your Brand”** — every place the brand appears becomes your organization’s name when the template is applied.
- **People** — the requesters, commenters and “Sam Okafor” (who answers for the team) are fictional placeholders credited by name; no account is made for them. Delete the sample items when your own arrive.

## Files

- `template.json` — the manifest (`forumulate.space-template` v1): layout, `settings.roadmap` and the sample items under `roadmap`. Schema: `packages/shared/src/official-templates-content-roadmap.ts`.
- `bundle.json` — the theme bundle; also listed in the theme marketplace as `template-lanyard`.
- `assets/` — the placeholder pictures.

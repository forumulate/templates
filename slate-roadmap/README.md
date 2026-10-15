# Slate

**An official Forumulate ROADMAP template.** Modelled on: a product-development tool’s public roadmap.

A dark, dense list roadmap: one column grouped by status under ring, half and check marks in grey, single-line rows with target and comments, a quiet vote at the end, and an item page that leads with its history.

Screenshots are taken from the live preview after deploy (`screenshots/desktop.png`, `screenshots/phone.png`).

## What it uses

- Preset: list — one 760px column grouped by status, empty groups hidden
- Monochrome status marks: ring, half-filled ring, check (no lane colours)
- Compact flat rows: one-line title, target and comments, a ghost vote at the end
- Segmented New / Top switch with a status row
- Item page: one column, history of every move under the body, “Shipped in” prominent
- Dark scheme, Geist at 14px
- Zero custom CSS — every detail is a theme setting

## What applying it creates

- **The look** — `bundle.json`, a theme bundle: palette, type, header and the `theme.roadmap` keys (lanes, cards, vote, filters, item page). Published to the space straight away.
- **The layout** — preset `list`.
- **The board** — `settings.roadmap`, applied through `PUT …/roadmap-settings`: lanes named Backlog / Planned / In progress / Completed / Canceled, ordered In progress first; Canceled hidden.
- **10 sample items** — 3 in progress, 2 planned, 2 in the backlog, 3 completed. Each is written in the shape's own slots (“The problem”, “What we are thinking”) with its target, size and theme, a few comments credited by name to placeholder people, and — on the items the team has moved — the team's answer as the official response.
- **No votes.** A template never seeds a vote count: the board starts at zero and fills with your readers' real votes.
- **Pictures** — `assets/mark.svg`, copied into your library.

## Placeholders

- **“Your Brand”** — every place the brand appears becomes your organization’s name when the template is applied.
- **People** — the requesters, commenters and “Sam Okafor” (who answers for the team) are fictional placeholders credited by name; no account is made for them. Delete the sample items when your own arrive.

## Files

- `template.json` — the manifest (`forumulate.space-template` v1): layout, `settings.roadmap` and the sample items under `roadmap`. Schema: `packages/shared/src/official-templates-content-roadmap.ts`.
- `bundle.json` — the theme bundle; also listed in the theme marketplace as `template-slate-roadmap`.
- `assets/` — the placeholder pictures.

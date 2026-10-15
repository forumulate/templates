# Gridlane

**An official Forumulate ROADMAP template.** Modelled on: a code-hosting company’s public roadmap board.

A dense project-board roadmap: five grey lane panels that scroll sideways, open-ring status marks with count pills, compact outlined cards with many-coloured label chips, and tabs to filter by status — set in the system font.

Screenshots are taken from the live preview after deploy (`screenshots/desktop.png`, `screenshots/phone.png`).

## What it uses

- Preset: board — five grey panels (Exploring / Up next / In progress / Shipped / Paused) at 340px, scrolling sideways
- “Paused” is a board-added status (RM-4) with its own mark and description
- Compact outlined cards: a "roadmap #NN" number eyebrow, labels and target in the footer, an inline vote in the foot
- Release-phase and area labels in distinct colours (tag colours)
- Filter tabs with status, tags, sort and search; a board as wide as the window
- GitHub-style greys, the system font, 6px corners
- Zero custom CSS — every detail is a theme setting

## What applying it creates

- **The look** — `bundle.json`, a theme bundle: palette, type, header and the `theme.roadmap` keys (lanes, cards, vote, filters, item page). Published to the space straight away.
- **The layout** — preset `board`.
- **The board** — `settings.roadmap`, applied through `PUT …/roadmap-settings`: a board-added “Paused” status; lanes Exploring / Up next / In progress / Shipped / Paused; Declined hidden.
- **9 sample items** — 2 exploring, 2 up next, 2 in progress, 2 shipped, 1 paused. Each is written in the shape's own slots (“The problem”, “What we are thinking”) with its target, size and theme, a few comments credited by name to placeholder people, and — on the items the team has moved — the team's answer as the official response.
- **No votes.** A template never seeds a vote count: the board starts at zero and fills with your readers' real votes.
- **Pictures** — `assets/mark.svg`, copied into your library.

## Placeholders

- **“Your Brand”** — every place the brand appears becomes your organization’s name when the template is applied.
- **People** — the requesters, commenters and “Sam Okafor” (who answers for the team) are fictional placeholders credited by name; no account is made for them. Delete the sample items when your own arrive.

## Files

- `template.json` — the manifest (`forumulate.space-template` v1): layout, `settings.roadmap` and the sample items under `roadmap`. Schema: `packages/shared/src/official-templates-content-roadmap.ts`.
- `bundle.json` — the theme bundle; also listed in the theme marketplace as `template-gridlane`.
- `assets/` — the placeholder pictures.

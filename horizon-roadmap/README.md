# Horizon

**An official Forumulate ROADMAP template.** Modelled on: a product-management platform’s customer portal.

A Now / Next / Later portal: the lanes are horizons rather than workflow, each with a tinted head; outlined cards carry a theme eyebrow, a three-line description and their status as a chip, under a warm serif headline.

Screenshots are taken from the live preview after deploy (`screenshots/desktop.png`, `screenshots/phone.png`).

## What it uses

- Lanes are horizons — Now, Next, Later — set as the board’s grouping (RM-4 `groupBy: target`); the status rides on each card
- Tinted lane heads, outlined cards with a theme eyebrow and a three-line description
- A thumbs-up vote pill in each card’s foot; comments count beside it
- A centred hero over a warm wash: kicker, headline, intro, a Share an idea button and Subscribe
- Warm paper palette, Newsreader headings over Inter
- Zero custom CSS — every detail is a theme setting

## What applying it creates

- **The look** — `bundle.json`, a theme bundle: palette, type, header and the `theme.roadmap` keys (lanes, cards, vote, filters, item page). Published to the space straight away.
- **The layout** — preset `board`.
- **The board** — `settings.roadmap`, applied through `PUT …/roadmap-settings`: grouped by `target` with the horizons Now / Next / Later (the `target` field becomes a select of those three); lanes named Exploring / Planned / Building / Released for the status chip on each card; Declined hidden.
- **9 sample items** — 3 now, 3 next, 3 later. Each is written in the shape's own slots (“The problem”, “What we are thinking”) with its target, size and theme, a few comments credited by name to placeholder people, and — on the items the team has moved — the team's answer as the official response.
- **No votes.** A template never seeds a vote count: the board starts at zero and fills with your readers' real votes.
- **Pictures** — `assets/mark.svg`, copied into your library.
- To group by workflow instead, set the board’s grouping back to status: the same items fall into their status lanes, and the horizon shows as the card’s target.

## Placeholders

- **“Your Brand”** — every place the brand appears becomes your organization’s name when the template is applied.
- **People** — the requesters, commenters and “Sam Okafor” (who answers for the team) are fictional placeholders credited by name; no account is made for them. Delete the sample items when your own arrive.

## Files

- `template.json` — the manifest (`forumulate.space-template` v1): layout, `settings.roadmap` and the sample items under `roadmap`. Schema: `packages/shared/src/official-templates-content-roadmap.ts`.
- `bundle.json` — the theme bundle; also listed in the theme marketplace as `template-horizon-roadmap`.
- `assets/` — the placeholder pictures.

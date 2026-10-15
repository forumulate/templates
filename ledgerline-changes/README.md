# Ledgerline Changes

**An official Forumulate changelog template.** Modelled on: a payments company’s API changelog.

A payments company's API changelog in a docs-like shell: dated versions grouped under named release families with an overview card, Breaking badges, typed rows, a version compare form and GA / preview channels. The changelog companion to [Ledgerline](../ledgerline/), the API docs template — same marks, same palette.

## What it uses

- Release families (Basil, Acacia) with an overview card for each — the `family` and `familyOverview` release fields; the filter band offers one chip per family and `?family=` narrows to it
- Change types renamed to an API changelog's words: Added, Changed, Deprecated, Removed — and channels GA / Preview — through the manifest's `shape` patch
- Breaking badge, mono version pill and the Preview channel badge on every row (`channelBadge.skip: ["GA"]`)
- Checklist filter: types, tags, Breaking, search, the version picker and "Compare versions" (`filters.versions: true` → `?from=&to=`)
- Section eyebrows with glyphs and a rule between them (`changelog.sections`), square bullets (`changelog.prose.listMarker`)
- Screenshots on a soft gradient panel (`components.image.backdrop`), a grid hero (`layout.heroDecor`)
- Light docs shell with a dark twin
- Zero custom CSS — every detail is a theme setting
- Type: Inter and Source Code Pro — self-hosted (the font is mirrored onto our own CDN on apply; readers never fetch from a third party)

## What applying it creates

- **The look** — `bundle.json`, a theme bundle: palette, type, header and footer, the changelog's look (`theme.changelog`) and the composed front page. Published to the space straight away.
- **The layout** — index preset `rows`.
- **The shape** — `shape` in `template.json`: the change-type and channel options renamed. Everything else keeps the changelog type's declaration.
- **The release page's after-band** — a subscribe box under every release.
- **Tags** — 4 tags with their labels.
- **5 sample releases** in two families:
  - Basil: one request for every payment method (2026-09-30.basil, Changed, breaking, the family overview)
  - Refund reasons are required for partial refunds (2026-10-08.basil, Changed, breaking)
  - Thin events for webhooks (2026-10-02.basil, Added, Preview)
  - Acacia: Connect accounts without a type (2026-04-30.acacia, Added, the family overview)
  - Legacy sources are removed (2026-03-31.acacia, Removed, breaking, with upgrade notes)

Nobody is mailed about a sample: the releases are published without notifying subscribers or watchers.

## Placeholders

- **“Your Brand”** — everywhere the brand appears it becomes your organization’s name when the template is applied.
- **Pictures** — the logos and card in `assets/` are drawn placeholders, copied into your space’s asset library.
- **Links** — header, footer and front-page links point at your new space’s own address.
- **Change types and channels** — rename them again in Design → shape; `theme.changelog.typeBadge.tones` keys follow the names.

## Files

- `template.json` — the manifest (`forumulate.space-template` v1): layout, shape, release page, tags, sample releases (with their `fields`). Schema: `packages/shared/src/official-templates.ts`.
- `bundle.json` — the theme bundle (`forumulate.theme-bundle`); also listed in the theme marketplace as `template-ledgerline-changes`.
- `assets/` — the placeholder pictures.

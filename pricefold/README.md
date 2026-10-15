# Pricefold

**An official Forumulate FAQ template.** Modelled on: a software company’s pricing-page FAQ.

The pricing-page FAQ: heading, intro and contact on the left, a single-open accordion with plus icons and muted answers on the right, in a dark scheme.

Screenshots are taken from the live preview after deploy (`screenshots/desktop.png`, `screenshots/phone.png`).

## What it uses

- Preset: two-column — heading, intro and contact left, questions right
- Single-open accordion, plus icon at the end, hairline rules
- Muted answer ink, no feedback row, no search
- Dark scheme, Geist
- Zero custom CSS — every detail is a theme setting

## What applying it creates

- **The look** — `bundle.json`, a theme bundle: palette, type, header, the collapsible and the `theme.faq` keys. Published to the space straight away.
- **The layout** — preset `two-column`, front door {"showSearch": false}.
- **7 sample questions** in 1 section(s): Pricing questions.
- **Pictures** — `assets/mark.svg`, copied into your library.
- The accordion is also placeable on any page as a feed (`spaceFeed` with `layout: "accordion"`, X3b/FQ-2), so a pricing page elsewhere can carry these questions.

## Placeholders

- **“Your Brand”** — every place the brand appears becomes your organization’s name when the template is applied.
- **Links** — written against `/faq/your-org/your-faq`, the new space’s own address.

## Files

- `template.json` — the manifest (`forumulate.space-template` v1): layout and the sample questions under `faq`. Schema: `packages/shared/src/official-templates.ts`.
- `bundle.json` — the theme bundle; also listed in the theme marketplace as `template-pricefold`.
- `assets/` — the placeholder pictures.

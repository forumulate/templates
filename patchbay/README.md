# Patchbay

**An official Forumulate FAQ template.** Modelled on: a software company’s support page.

A plain-spoken support page: big title and lede, contact cards first, then the common issues as ruled rows with muted answers, all open. Dark.

Screenshots are taken from the live preview after deploy (`screenshots/desktop.png`, `screenshots/phone.png`).

## What it uses

- Preset: sectioned — every answer open
- Contact cards above the questions (front-door section order)
- Ruled rows, no disclosure icon, muted answers, no feedback row
- An “Or email …” line under the cards
- Zero custom CSS — every detail is a theme setting

## What applying it creates

- **The look** — `bundle.json`, a theme bundle: palette, type, header, the collapsible and the `theme.faq` keys. Published to the space straight away.
- **The layout** — preset `sectioned`, front door {"showCategoryCards": false, "showFeatured": false, "sectionOrder": "intro,contact,questions"}.
- **6 sample questions** in 2 section(s): Common issues, Account.
- **Pictures** — `assets/mark.svg`, copied into your library.
- Change the “Or email” address (`theme.faq.contact.email`, `support@example.com`) to your own.

## Placeholders

- **“Your Brand”** — every place the brand appears becomes your organization’s name when the template is applied.
- **Links** — written against `/faq/your-org/your-faq`, the new space’s own address.

## Files

- `template.json` — the manifest (`forumulate.space-template` v1): layout and the sample questions under `faq`. Schema: `packages/shared/src/official-templates.ts`.
- `bundle.json` — the theme bundle; also listed in the theme marketplace as `template-patchbay`.
- `assets/` — the placeholder pictures.

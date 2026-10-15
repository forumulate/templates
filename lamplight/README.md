# Lamplight

**An official Forumulate FAQ template.** Modelled on: a customer-support software company’s help centre.

A friendly help centre: a soft gradient search hero, four-up category cards with icons and question counts, popular questions and a contact band.

Screenshots are taken from the live preview after deploy (`screenshots/desktop.png`, `screenshots/phone.png`).

## What it uses

- Preset: help-centre — each category’s questions on its own page
- Search hero with a gradient background and ⌘K
- Category cards: icon, description, question count (4 per row)
- Popular questions from the question’s own “Popular question” field
- “Still stuck?” contact cards
- Zero custom CSS — every detail is a theme setting

## What applying it creates

- **The look** — `bundle.json`, a theme bundle: palette, type, header, the collapsible and the `theme.faq` keys. Published to the space straight away.
- **The layout** — preset `help-centre`.
- **11 sample questions** in 4 section(s): Getting started, Billing and plans, Conversations, Account and security.
- **Popular questions** — marked with the question’s own `featured` field: How do I create an account?; How do I change my plan?; Can I save replies I send often?.
- **Pictures** — `assets/mark.svg`, copied into your library.

## Placeholders

- **“Your Brand”** — every place the brand appears becomes your organization’s name when the template is applied.
- **Links** — written against `/faq/your-org/your-faq`, the new space’s own address.

## Files

- `template.json` — the manifest (`forumulate.space-template` v1): layout and the sample questions under `faq`. Schema: `packages/shared/src/official-templates.ts`.
- `bundle.json` — the theme bundle; also listed in the theme marketplace as `template-lamplight`.
- `assets/` — the placeholder pictures.

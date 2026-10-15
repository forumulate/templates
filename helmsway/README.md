# Helmsway

**An official Forumulate FAQ template.** Modelled on: a payments company’s support site.

A restrained support site: a left-aligned search hero, popular articles with their first line and topic chips, then a compact topic list and contact.

Screenshots are taken from the live preview after deploy (`screenshots/desktop.png`, `screenshots/phone.png`).

## What it uses

- Preset: help-centre, sections ordered popular → topics → contact
- Left-aligned search hero, no picture, ⌘K
- Popular articles: excerpt and topic chips, from the “Popular question” field
- Popular topics as a compact list with counts
- Zero custom CSS — every detail is a theme setting

## What applying it creates

- **The look** — `bundle.json`, a theme bundle: palette, type, header, the collapsible and the `theme.faq` keys. Published to the space straight away.
- **The layout** — preset `help-centre`, front door {"sectionOrder": "featured,categories,intro,questions,contact"}.
- **11 sample questions** in 5 section(s): Payments, Payouts, Disputes and fraud, Account and settings, Tax.
- **Popular questions** — marked with the question’s own `featured` field: Why was a customer’s payment declined?; How long does a refund take to reach the customer?; When will I receive my payouts?; How do I respond to a dispute?; How do I give a teammate limited access?.
- **Pictures** — `assets/mark.svg`, copied into your library.
- **“Helped N% of readers”** (`faq.item.helpfulStat`, from 20 votes) under each answer — on the question’s own page and in search results.

## Placeholders

- **“Your Brand”** — every place the brand appears becomes your organization’s name when the template is applied.
- **Links** — written against `/faq/your-org/your-faq`, the new space’s own address.

## Files

- `template.json` — the manifest (`forumulate.space-template` v1): layout and the sample questions under `faq`. Schema: `packages/shared/src/official-templates.ts`.
- `bundle.json` — the theme bundle; also listed in the theme marketplace as `template-helmsway`.
- `assets/` — the placeholder pictures.

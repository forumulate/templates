# Meadow

**An official Forumulate FAQ template.** Modelled on: a customer-messaging platform’s help centre.

A calm, editorial help centre: a serif headline over a landscape hero, a centred search, and three-up collection tiles with large icons.

Screenshots are taken from the live preview after deploy (`screenshots/desktop.png`, `screenshots/phone.png`).

## What it uses

- Preset: help-centre — each collection on its own page
- Picture hero with a serif headline (Newsreader) and ⌘K search
- Collection tiles: large icon, description, article count (3 per row)
- Contact cards for the org’s contact space, community and status page
- Zero custom CSS — every detail is a theme setting

## What applying it creates

- **The look** — `bundle.json`, a theme bundle: palette, type, header, the collapsible and the `theme.faq` keys. Published to the space straight away.
- **The layout** — preset `help-centre`.
- **13 sample questions** in 6 section(s): Get started, Inbox, Help centre, AI agent, Billing, Privacy and security.
- **Popular questions** — marked with the question’s own `featured` field: What is Your Brand?; How do routing rules work?; Can my help centre be in more than one language?.
- **Pictures** — `assets/mark.svg`, `assets/hero.svg`, copied into your library.
- **A second language** — Español, added through the translation door, with every question translated and published; the hero links English · Español (`faq.search.languages`, the original named by the space setting `defaultLocaleLabel`). A plan without translation languages skips it and the template applies in English.
- **Follow** — each collection page carries a Follow button (`faq.follow.sections`): readers are emailed when a question in it is added or changes.
- **The left collection rail** is the docs sidebar every collection and question page already draws; `faq.jump` is not set, because a help centre lists no questions on its landing for a rail to index.

## Placeholders

- **“Your Brand”** — every place the brand appears becomes your organization’s name when the template is applied.
- **Links** — written against `/faq/your-org/your-faq`, the new space’s own address.

## Files

- `template.json` — the manifest (`forumulate.space-template` v1): layout and the sample questions under `faq`. Schema: `packages/shared/src/official-templates.ts`.
- `bundle.json` — the theme bundle; also listed in the theme marketplace as `template-meadow`.
- `assets/` — the placeholder pictures.

# Folio

**An official Forumulate legal template.** Modelled on: a frontend cloud platform’s legal register.

A monochrome register in two columns: a large heading on the left, the documents ruled on the right with “Last updated” and a pill Read button each; documents are minimal, with an on-this-page rail.

| Desktop | Phone |
| ------- | ----- |
| ![Folio on a desktop](screenshots/desktop.png) | ![Folio on a phone](screenshots/phone.png) |

## What it uses

- Preset: split — heading column beside a ruled list
- Each row: title, “Last updated” date spelled long, pill Read button
- Nine documents, ungrouped, in the order you set
- Minimal document page: no side register, on-this-page rail, numbered sections
- Monochrome palette, Geist and Geist Mono
- Zero custom CSS — every detail is a theme setting

## What applying it creates

- **The look** — `bundle.json`, a theme bundle: palette, type, header and footer, and the register's and documents' look (`theme.legal`). Published to the space straight away.
- **The front page** — the composed register page in `template.json` (`frontPage`), ending in the documents band.
- **The layout** — register preset `split`.
- **9 sample documents** in 1 group(s) (Documents), each with its version, effective date and governing law set as fields and the typed sections (in plain English, the document, questions) filled in:
  - Terms of Service
  - Privacy Policy
  - Data Processing Addendum
  - Service Level Agreement
  - Acceptable Use Policy
  - Sub-processors
  - Cookie Policy
  - Vulnerability Disclosure Policy
  - Trademark Guidelines

## The sample text is not legal advice

Every document is **sample text for a fictional company**, written to show the layout: clause numbering, the plain-English summary, definitions, history and the register. It is not legal advice, it is not copied from any real company's terms, and it is not fit to publish. Each document opens with a "Sample text" callout saying so. Replace every word with text written for your business and reviewed by your own counsel, then delete the callout. None of the samples asks members to accept anything (`mustAccept` is left off), so applying the template never prompts anyone.

## Placeholders

- **“Your Brand”** — everywhere the brand appears (header and footer copy, the wordmark, the sample text) it becomes your organization’s name when the template is applied.
- **Governing law** — the samples name a placeholder jurisdiction; set your own in each document's fields.
- **Addresses** — contact addresses use the reserved `example.com` domain.
- **Links** — header, footer and front-page links point at your register's own address.

## Files

- `template.json` — the manifest (`forumulate.space-template` v1): layout, front page and the sample documents under `legal`. Schema: `packages/shared/src/official-templates.ts`.
- `bundle.json` — the theme bundle (`forumulate.theme-bundle`); also listed in the theme marketplace as `template-folio`.
- `assets/` — the placeholder pictures.

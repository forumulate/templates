# Dropline

**An official Forumulate blog template.** Modelled on: a sneaker and streetwear release newsroom.

A release newsroom: every post is a drop with its release day (apart from the
publish date), retail price, style code, colourway, retailers and regions; an
“Out now” badge that turns itself on the morning of the release; a month and
week release calendar at `/calendar`; and a weekly roundup post that lists the
week's drops without anybody editing it.

Written directly as data (no replica): `Your Brand` placeholders, drawn
pictures and original sample posts. Screenshots are captured from a space
made with it (`scripts/capture-template-shots.mjs`); the thumbnail is
`apps/web/public/templates/dropline.jpg`.

## What it uses

- The `drop` post kind (Product release): typed release fields, judged like
  every declared field — editable in the studio, through `/items`, the blog
  door's `fields`, markdown front matter and folder sync
- The `roundup` post kind: `roundupRange: this-week`, so the list is always
  this week's
- A composed front page: this week's drops (`releaseRoundup` band), upcoming
  releases (a `spaceFeed` sorted by release day), the week ahead
  (`releaseCalendar` band), out now, and the subscribe band
- `theme.blog.release`: details block as a grid between rules, square status
  tags in the newsroom's colours, the calendar switched on (Monday weeks,
  New York time), region chips, roundups as a grid by day, Product JSON-LD
- Index layout: grid; post layout: split cover
- Zero custom CSS — every detail is a theme setting
- Type: Archivo, Inter, IBM Plex Mono

## What applying it creates

- **The look** — `bundle.json`: palette, type, header and footer, the
  composed front page and every release key. Published straight away.
- **Posts** — seven sample drops (upcoming, a window-only one, one already
  out, one restocked, one Japan-only) dated relative to the day you apply it,
  and the self-assembling roundup.
- **Tags** — Sneakers, Running, Basketball, Apparel, Roundups.
- **Authors** — 2 placeholder people (Alex Morgan, Sam Rivera).

See the guide: `docs/guides/release-newsroom.md`.

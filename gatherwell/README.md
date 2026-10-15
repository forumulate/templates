# Gatherwell

**An official Forumulate events template.** Modelled on: a local-groups platform’s group and event pages.

A local group’s home: a warm banner, what the group is about, its numbers and its organizers, then the meetups as rows with seats left and who is going. Each event opens on a wide picture with the place, a map card and a sticky RSVP bar on phones.

| Desktop | Phone |
| ------- | ----- |
| ![Gatherwell on a desktop](screenshots/desktop.png) | ![Gatherwell on a phone](screenshots/phone.png) |

## What it uses

- Group banner, about text, member stats and organizers on the front page
- Rows grouped by month with an outlined date tile, seats left and “N going”
- Past events behind one “Past events” link, so the page stays about what is next
- Event page: wide cover, facts, a drawn map card, RSVP bar fixed to a phone’s screen
- Guest +1 on every RSVP; the who’s-going list switched on
- Zero custom CSS — every detail is a theme setting

## What applying it creates

- **The look** — `bundle.json`, a theme bundle: palette, type, header and footer, and the calendar's look (`theme.events`: the list, the event page, the agenda and speakers). Published to the space straight away.
- **The front page** — `frontPage` in `template.json`, ending in the live calendar.
- **The layout** — preset `community` and its front-door options.
- **3 upcoming and 3 past events**, dated relative to the day you apply it, in each event's own time zone — so the calendar is never a page of past events:
  - Repair Cafe
  - Intro to Soldering
  - Makerspace Open House
  - Show Your Project (past)
  - Laser Cutting Basics (past)
  - Summer Picnic (past)
- **Hosts** — 3 placeholder people in the space's author registry, credited on the events they host.
- **Settings** — the who’s-going list is switched on (`eventAttendance.publicAttendees`); each RSVP may bring one guest (`guestsMax: 1`).

Nobody is mailed about a sample: the events are announced to nobody, and none has an RSVP.

## Placeholders

- **“Your Brand”** — everywhere the brand appears (header and footer, the mark, the covers, the sample copy) it becomes your organization’s name.
- **Pictures** — the mark, covers and portraits in `assets/` are drawn placeholders, copied into your space’s asset library on apply.
- **Links** — join links and recordings point at `example.com` addresses. Replace them with your own before you publish; a past event’s recording link is what its page offers instead of an RSVP.
- **Events** — sample events in neutral copy. Edit, duplicate or delete them; a published event is a real event to search engines.

## Files

- `template.json` — the manifest (`forumulate.space-template` v1): layout, front page, hosts, the sample events and their programme. Schema: `packages/shared/src/official-templates.ts` and `official-templates-content-events.ts`.
- `bundle.json` — the theme bundle (`forumulate.theme-bundle`); also listed in the theme marketplace as `template-gatherwell`.
- `assets/` — the placeholder pictures.

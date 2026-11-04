# Devlog Terminal

**An official Forumulate changelog template.** Modelled on: an API changelog in a terminal palette.

A dark API changelog: ruled rows, type chips before each title, mono versions, Breaking badges and a "Latest" chip on the newest stable release.

## What it uses

- The `devlog` changelog look — a patch of independent `theme.changelog` keys, so any key you set still wins
- Change types New, Improved, Fixed, Deprecated, Retired, Security with their tone colours
- "Latest" chip on the newest stable release, pre-releases on their own channel
- Was-this-helpful under every release, answers in Studio → Readers
- Subscribe box under every release; RSS, Atom and JSON feeds
- Zero custom CSS — every detail is a theme setting

## What applying it creates

- **The look** — `bundle.json`: palette, type, header and footer, and `theme.changelog` with `look: devlog`.
- **The shape** — channels Stable and Beta.
- **The release page's after-band** — a subscribe box under every release.
- **Tags** — 5 tags with their labels.
- **6 sample releases**, one of them a pre-release on the Beta channel.

The thumbnail (`/templates/devlog-terminal.jpg`) is captured by `scripts/capture-template-shots.mjs`.

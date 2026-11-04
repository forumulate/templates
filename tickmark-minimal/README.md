# Tickmark Minimal

**An official Forumulate changelog template.** Modelled on: a developer tool’s release list.

A minimal, GitHub-style release list: title rows, mono versions, no covers and plain tags, for a developer tool that ships often.

## What it uses

- The `minimal` changelog look — a patch of independent `theme.changelog` keys, so any key you set still wins
- Change types New, Improved, Fixed, Deprecated, Retired, Security with their tone colours
- "Latest" chip on the newest stable release, pre-releases on their own channel
- Was-this-helpful under every release, answers in Studio → Readers
- Subscribe box under every release; RSS, Atom and JSON feeds
- Zero custom CSS — every detail is a theme setting

## What applying it creates

- **The look** — `bundle.json`: palette, type, header and footer, and `theme.changelog` with `look: minimal`.
- **The shape** — channels Stable and Beta.
- **The release page's after-band** — a subscribe box under every release.
- **Tags** — 5 tags with their labels.
- **6 sample releases**, one of them a pre-release on the Beta channel.

The thumbnail (`/templates/tickmark-minimal.jpg`) is captured by `scripts/capture-template-shots.mjs`.

# Letterpress

**An official Forumulate blog template.** Modelled on: a paid newsletter publication.

A newsletter-first publication: a narrow reading column, the subscribe box above the posts, full posts in the email, paid and free tiers and a referral programme ready to switch on.

## What it uses

- The `newsletter` blog look — a patch of `theme.post` and `theme.blog` keys you can override one by one
- A narrow column with the subscribe box first, and after every post
- Comments threaded two deep, newest first
- "Was this helpful?" and claps at the foot of each post
- Zero custom CSS — every detail is a theme setting

## What applying it creates

- **The look** — `bundle.json`, with `theme.blog.look: newsletter`, recommendations after a signup, and the post's helpful prompt, claps and highlights.
- **The layout** — the `feed` preset with dates, authors and read times.
- **Sample posts** with authors and tags.

Memberships, the referral programme and the newsletter's sender are switched on in Studio after applying — they need the organization's Stripe and mail settings. The thumbnail (`/templates/letterpress.jpg`) is captured by `scripts/capture-template-shots.mjs`.

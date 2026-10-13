# Forumulate templates

The official space templates for [Forumulate](https://forumulate.com) — the
hosted platform for docs, forums, blogs and changelogs. Each folder is a whole
space, ready-made: the look (a theme bundle), the reader layout, the front page
and, for blogs and forums, a handful of short sample posts, so a space started
from one looks like its preview on day one.

Every template is built entirely from theme settings — no custom CSS — so
everything you see can be changed from the space's settings afterwards.

## Using a template

**In the app.** Create a new space, pick its type (Blog, Changelog, Docs or
Forum), then pick a template. You can also install just the *look* of any
template from the theme marketplace (listed as `template-<id>`); the
new-space picker brings the look, the front page and the sample content.

**With the API.** Authenticate with a Personal Access Token (create one at
https://forumulate.com/account/tokens), list the templates for a type, then
apply one to a space by its id (the folder name):

```sh
export FORUMULATE_TOKEN=cft_...

curl -H "Authorization: Bearer $FORUMULATE_TOKEN" \
  "https://forumulate.com/api/orgs/$ORG_ID/space-templates?type=DOCS"

curl -X POST -H "Authorization: Bearer $FORUMULATE_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"templateId": "basalt"}' \
  "https://forumulate.com/api/orgs/$ORG_ID/spaces/$SPACE_ID/apply-template"
```

The same calls are available in the TypeScript SDK
([`@forumulate/sdk`](https://github.com/forumulate/forumulate-js)) and the
CLI ([`@forumulate/cli`](https://github.com/forumulate/cli)).

## The templates

### Blog

| Preview | Template |
| --- | --- |
| <a href="corvane/"><img src="corvane/thumbnail.jpg" width="360" alt="Corvane"></a> | **[Corvane](corvane/)**<br>A bright product blog with a gradient hero band, a lead story, category tabs and a subscribe band after every post. Light, crisp and corporate.<br><sub>Template id: `corvane`</sub> |
| <a href="kestrel/"><img src="kestrel/thumbnail.jpg" width="360" alt="Kestrel"></a> | **[Kestrel](kestrel/)**<br>A monochrome developer blog: a dense card grid, tag pills, mega-menu header, six-column footer and a closing call to action under every post.<br><sub>Template id: `kestrel`</sub> |
| <a href="margins/"><img src="margins/thumbnail.jpg" width="360" alt="Margins"></a> | **[Margins](margins/)**<br>A dark editorial magazine with condensed headlines, colourful collage covers, featured-story menus and a newsletter band — a design publication, not a changelog.<br><sub>Template id: `margins`</sub> |
| <a href="kilter/"><img src="kilter/thumbnail.jpg" width="360" alt="Kilter"></a> | **[Kilter](kilter/)**<br>A loud tech-news front page: a vertical masthead, lead story, quick-hit rail, colour-coded sections and a “most popular” sidebar on every story.<br><sub>Template id: `kilter`</sub> |
| <a href="forgeline/"><img src="forgeline/thumbnail.jpg" width="360" alt="Forgeline"></a> | **[Forgeline](forgeline/)**<br>A developer-platform blog with a dark header and footer, category mega-menus, featured strip, “popular” sidebar and a table-of-contents article layout.<br><sub>Template id: `forgeline`</sub> |
| <a href="halcyon/"><img src="halcyon/thumbnail.jpg" width="360" alt="Halcyon"></a> | **[Halcyon](halcyon/)**<br>A polished newsroom: a thin top bar, large feature tiles with standfirsts, “In the loop” stories and a share-and-download press kit on every article.<br><sub>Template id: `halcyon`</sub> |
| <a href="vectra/"><img src="vectra/thumbnail.jpg" width="360" alt="Vectra"></a> | **[Vectra](vectra/)**<br>A near-black product blog with a red accent, glowing footer art, a two-up post grid and a newsletter footer — launch-day energy for an app company.<br><sub>Template id: `vectra`</sub> |
| <a href="tinkerbloom/"><img src="tinkerbloom/thumbnail.jpg" width="360" alt="Tinkerbloom"></a> | **[Tinkerbloom](tinkerbloom/)**<br>A friendly, hand-made tutorial blog: sky-and-hills hero, category chips, a “popular content” list and a table-of-contents article page with a playful masthead.<br><sub>Template id: `tinkerbloom`</sub> |
| <a href="kiln-journal/"><img src="kiln-journal/thumbnail.jpg" width="360" alt="Kiln Journal"></a> | **[Kiln Journal](kiln-journal/)**<br>A warm, dark studio journal: big cover grid, outlined topic badges, illustrated menu feature and a quiet single-column article page.<br><sub>Template id: `kiln-journal`</sub> |

### Changelog

| Preview | Template |
| --- | --- |
| <a href="plinth/"><img src="plinth/thumbnail.jpg" width="360" alt="Plinth"></a> | **[Plinth](plinth/)**<br>A sleek dark changelog: dates in the gutter, illustrated release notes, tag filters and a one-line email subscribe.<br><sub>Template id: `plinth`</sub> |

### Docs

| Preview | Template |
| --- | --- |
| <a href="basalt/"><img src="basalt/thumbnail.jpg" width="360" alt="Basalt Docs"></a> | **[Basalt Docs](basalt/)**<br>Roomy developer docs with an agent-prompt panel beside the title, a framework quickstart grid and product menus in the top bar.<br><sub>Template id: `basalt`</sub> |
| <a href="emberline/"><img src="emberline/thumbnail.jpg" width="360" alt="Emberline Developer Docs"></a> | **[Emberline Developer Docs](emberline/)**<br>Developer docs with a tabbed product panel under the title, an orange accent and a slim header of top-level sections.<br><sub>Template id: `emberline`</sub> |
| <a href="halite/"><img src="halite/thumbnail.jpg" width="360" alt="Halite"></a> | **[Halite](halite/)**<br>Framework docs with a version banner, a bold hero beside a dotted illustration and a sidebar switching Tutorial, Guide, Reference and Ecosystem.<br><sub>Template id: `halite`</sub> |
| <a href="keyward/"><img src="keyward/thumbnail.jpg" width="360" alt="Keyward Docs"></a> | **[Keyward Docs](keyward/)**<br>A centred welcome, a copy-a-prompt bar, product cards and an explore-by-feature grid, with an SDK picker in the sidebar.<br><sub>Template id: `keyward`</sub> |
| <a href="ledgerline/"><img src="ledgerline/thumbnail.jpg" width="360" alt="Ledgerline"></a> | **[Ledgerline](ledgerline/)**<br>Payments-style docs: a dotted hero with an illustrated card, product link columns and a try-it-out code panel.<br><sub>Template id: `ledgerline`</sub> |
| <a href="postwick/"><img src="postwick/thumbnail.jpg" width="360" alt="Postwick"></a> | **[Postwick](postwick/)**<br>Compact, tidy API docs with a top tab bar, an on-this-page rail and quickstart cards.<br><sub>Template id: `postwick`</sub> |
| <a href="ridgeline/"><img src="ridgeline/thumbnail.jpg" width="360" alt="Ridgeline Docs"></a> | **[Ridgeline Docs](ridgeline/)**<br>A big headline beside a tabbed terminal panel, an agent-prompt block and plugin cards.<br><sub>Template id: `ridgeline`</sub> |
| <a href="sprig/"><img src="sprig/thumbnail.jpg" width="360" alt="Sprig CSS"></a> | **[Sprig CSS](sprig/)**<br>Monospace section labels, numbered install steps with terminal panels and hatched gutters.<br><sub>Template id: `sprig`</sub> |
| <a href="strata/"><img src="strata/thumbnail.jpg" width="360" alt="Strata Docs"></a> | **[Strata Docs](strata/)**<br>Gradient Build and Deploy panels of linked cards, a version picker in the sidebar and an announcement bar.<br><sub>Template id: `strata`</sub> |
| <a href="tessel/"><img src="tessel/thumbnail.jpg" width="360" alt="Tessel Docs"></a> | **[Tessel Docs](tessel/)**<br>A dark help centre: Popular and Basics card grids under a quiet title, with collapsible sidebar sections.<br><sub>Template id: `tessel`</sub> |

### Forum

| Preview | Template |
| --- | --- |
| <a href="driftline/"><img src="driftline/thumbnail.jpg" width="360" alt="Driftline Community"></a> | **[Driftline Community](driftline/)**<br>A community front page with a featured video, changelog and guides tabs, latest videos and upcoming events.<br><sub>Template id: `driftline`</sub> |
| <a href="heapfield/"><img src="heapfield/thumbnail.jpg" width="360" alt="Heapfield"></a> | **[Heapfield](heapfield/)**<br>A Q&A forum: vote and answer counts beside each question, tag chips, a left nav and a sidebar of featured posts.<br><sub>Template id: `heapfield`</sub> |
| <a href="hearthlink/"><img src="hearthlink/thumbnail.jpg" width="360" alt="Hearthlink Community"></a> | **[Hearthlink Community](hearthlink/)**<br>Categories with coloured bars beside the latest topics, under a bright blue header.<br><sub>Template id: `hearthlink`</sub> |
| <a href="kitebox/"><img src="kitebox/thumbnail.jpg" width="360" alt="Kitebox Forum"></a> | **[Kitebox Forum](kitebox/)**<br>A bright hero with illustrated shapes and a search box, an icon grid of categories and featured topics.<br><sub>Template id: `kitebox`</sub> |
| <a href="larkhost/"><img src="larkhost/thumbnail.jpg" width="360" alt="Larkhost Community"></a> | **[Larkhost Community](larkhost/)**<br>A dark header over a boxed topic table with poster avatars, replies, views and activity.<br><sub>Template id: `larkhost`</sub> |
| <a href="lattice-commons/"><img src="lattice-commons/thumbnail.jpg" width="360" alt="Lattice Commons"></a> | **[Lattice Commons](lattice-commons/)**<br>Discussions with pinned announcement cards, vote counts, solved labels and a most-helpful leaderboard.<br><sub>Template id: `lattice-commons`</sub> |
| <a href="quillstone/"><img src="quillstone/thumbnail.jpg" width="360" alt="Quillstone Forum"></a> | **[Quillstone Forum](quillstone/)**<br>A dark forum: categories beside their latest topics, coloured category bars and purple accents.<br><sub>Template id: `quillstone`</sub> |
| <a href="threadwell/"><img src="threadwell/thumbnail.jpg" width="360" alt="Threadwell Meta"></a> | **[Threadwell Meta](threadwell/)**<br>A classic topic list with excerpts, poster avatars, views and activity, and a categories sidebar.<br><sub>Template id: `threadwell`</sub> |
| <a href="tessel-forum/"><img src="tessel-forum/thumbnail.jpg" width="360" alt="Tessel Forum"></a> | **[Tessel Forum](tessel-forum/)**<br>A warm off-white forum: featured posts, categories with descriptions and the latest topics with avatars.<br><sub>Template id: `tessel-forum`</sub> |
| <a href="vantor-dev/"><img src="vantor-dev/thumbnail.jpg" width="360" alt="Vantor Developer Community"></a> | **[Vantor Developer Community](vantor-dev/)**<br>A developer forum with resource links in the sidebar, pinned announcements and a dense topic table.<br><sub>Template id: `vantor-dev`</sub> |

## What is in a folder

| File | What it is |
| --- | --- |
| `template.json` | The manifest: id, type, name, description, layout, the front page and any sample content. |
| `bundle.json` | The theme bundle — palette, type, header and footer, element styles. The same format the theme marketplace and `GET …/theme/bundle` use. |
| `assets/` | Pictures the template uses, copied into your library when it is applied. |
| `screenshots/` | Full-size screenshots. |
| `thumbnail.*` | The picker thumbnail shown above. |
| `README.md` | What applying it creates. |

Brands, people and posts in the templates are fictional placeholders.
`node scripts/validate.mjs` checks that every manifest parses and every file
it names exists.

## Links

- Guides: https://forumulate.com/guides
- API reference: https://forumulate.com/reference
- Community: https://forumulate.com/community

## License

MIT — see [LICENSE](LICENSE).

---

## About this repository

This repository is a public mirror, refreshed on each Forumulate release
(one commit per release). Pull requests are welcome; accepted changes are
applied upstream and arrive here with the next release.

- API reference: https://forumulate.com/reference
- Guides: https://forumulate.com/guides
- Community and support: https://forumulate.com/community
- Source: https://github.com/forumulate/templates

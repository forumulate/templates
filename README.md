# Forumulate templates

The official space templates for [Forumulate](https://forumulate.com) — the
hosted platform for docs, forums, blogs and changelogs. Each folder is a whole
space, ready-made: the look (a theme bundle), the reader layout, the front page
and, for blogs and forums, a handful of short sample posts, so a space started
from one looks like its preview on day one.

Every template is built entirely from theme settings — no custom CSS — so
everything you see can be changed from the space's settings afterwards.

## Using a template

**In the app.** Create a new space, pick its type (any of them: blog, docs,
forum, changelog, roadmap, status page, legal, FAQ, careers, contact, events,
courses or custom), then pick a template. You can also install just the *look* of any
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
| <a href="dropline/"><img src="dropline/thumbnail.jpg" width="360" alt="Dropline"></a> | **[Dropline](dropline/)**<br>A release newsroom in the sneaker-news genre: every drop with its release day, price, style code, retailers and regions, an “Out now” badge that turns itself on, a month and week release calendar, and a weekly roundup nobody edits.<br><sub>Template id: `dropline`</sub> |
| <a href="letterpress/"><img src="letterpress/thumbnail.jpg" width="360" alt="Letterpress"></a> | **[Letterpress](letterpress/)**<br>A newsletter-first publication: a narrow reading column, the subscribe box above the posts, full posts in the email, paid and free tiers and a referral programme ready to switch on.<br><sub>Template id: `letterpress`</sub> |

### Changelog

| Preview | Template |
| --- | --- |
| <a href="plinth/"><img src="plinth/thumbnail.jpg" width="360" alt="Plinth"></a> | **[Plinth](plinth/)**<br>A sleek dark changelog: dates in the gutter, illustrated release notes, tag filters and a one-line email subscribe.<br><sub>Template id: `plinth`</sub> |
| <a href="quarrel/"><img src="quarrel/thumbnail.jpg" width="360" alt="Quarrel"></a> | **[Quarrel](quarrel/)**<br>A dark, dense changelog of typed rows: a grid-line hero, releases grouped under collapsible month headings, a mono date and an upper-case type label on every row, and a checkbox panel to narrow by type and tag.<br><sub>Template id: `quarrel`</sub> |
| <a href="vellum/"><img src="vellum/thumbnail.jpg" width="360" alt="Vellum"></a> | **[Vellum](vellum/)**<br>A light, airy changelog of summaries: each day once in a wide date gutter beside a hairline rail, big tight titles, the people who shipped it, tag pills and a round feed button — and a release page with its facts in a side column.<br><sub>Template id: `vellum`</sub> |
| <a href="keystroke/"><img src="keystroke/thumbnail.jpg" width="360" alt="Keystroke"></a> | **[Keystroke](keystroke/)**<br>A dark, version-led changelog for an app on several platforms: the version in a red pill over the date in the gutter, platforms as a segmented switch, every release in full under New, Improvements and Fixes, and key caps inline.<br><sub>Template id: `keystroke`</sub> |
| <a href="inkwell/"><img src="inkwell/thumbnail.jpg" width="360" alt="Inkwell"></a> | **[Inkwell](inkwell/)**<br>A black, editorial changelog: a large serif title, a cover picture over every release, summaries with the authors’ faces, a white-dotted rail — and a centred release page with code in tabs, video and a link to the page as Markdown.<br><sub>Template id: `inkwell`</sub> |
| <a href="ledgerline-changes/"><img src="ledgerline-changes/thumbnail.jpg" width="360" alt="Ledgerline Changes"></a> | **[Ledgerline Changes](ledgerline-changes/)**<br>A payments company's API changelog in a docs-like shell: dated versions grouped under named release families with an overview card, Breaking badges, typed rows, a version compare form and GA / preview channels.<br><sub>Template id: `ledgerline-changes`</sub> |
| <a href="pressline-cards/"><img src="pressline-cards/thumbnail.jpg" width="360" alt="Pressline Cards"></a> | **[Pressline Cards](pressline-cards/)**<br>A product changelog of cover cards: each release a card with its picture, summary and type chip, in a centred column with a subscribe box under every release.<br><sub>Template id: `pressline-cards`</sub> |
| <a href="tickmark-minimal/"><img src="tickmark-minimal/thumbnail.jpg" width="360" alt="Tickmark Minimal"></a> | **[Tickmark Minimal](tickmark-minimal/)**<br>A minimal, GitHub-style release list: title rows, mono versions, no covers and plain tags, for a developer tool that ships often.<br><sub>Template id: `tickmark-minimal`</sub> |
| <a href="launchpad-product/"><img src="launchpad-product/thumbnail.jpg" width="360" alt="Launchpad Product"></a> | **[Launchpad Product](launchpad-product/)**<br>A product changelog with dates in a left gutter on the rail, covers under each title and a side column on every release page.<br><sub>Template id: `launchpad-product`</sub> |
| <a href="devlog-terminal/"><img src="devlog-terminal/thumbnail.jpg" width="360" alt="Devlog Terminal"></a> | **[Devlog Terminal](devlog-terminal/)**<br>A dark API changelog: ruled rows, type chips before each title, mono versions, Breaking badges and a "Latest" chip on the newest stable release.<br><sub>Template id: `devlog-terminal`</sub> |

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

### Roadmap

| Preview | Template |
| --- | --- |
| <a href="lanyard/"><img src="lanyard/thumbnail.jpg" width="360" alt="Lanyard"></a> | **[Lanyard](lanyard/)**<br>A feedback board’s public roadmap: three bordered lane panels with a coloured dot in each head, a square vote box on the left of every card, an uppercase theme eyebrow, and an item page with its voters in a left-hand rail.<br><sub>Template id: `lanyard`</sub> |
| <a href="fernway/"><img src="fernway/thumbnail.jpg" width="360" alt="Fernway"></a> | **[Fernway](fernway/)**<br>A product roadmap in four open columns — Planned, Next up, In progress, Done — each with its own mark and a one-line description, raised rounded cards with a vote pill in the corner, and a light or dark look that follows the reader.<br><sub>Template id: `fernway`</sub> |
| <a href="gridlane/"><img src="gridlane/thumbnail.jpg" width="360" alt="Gridlane"></a> | **[Gridlane](gridlane/)**<br>A dense project-board roadmap: five grey lane panels that scroll sideways, open-ring status marks with count pills, compact outlined cards with many-coloured label chips, and tabs to filter by status — set in the system font.<br><sub>Template id: `gridlane`</sub> |
| <a href="horizon-roadmap/"><img src="horizon-roadmap/thumbnail.jpg" width="360" alt="Horizon"></a> | **[Horizon](horizon-roadmap/)**<br>A Now / Next / Later portal: the lanes are horizons rather than workflow, each with a tinted head; outlined cards carry a theme eyebrow, a three-line description and their status as a chip, under a warm serif headline.<br><sub>Template id: `horizon-roadmap`</sub> |
| <a href="slate-roadmap/"><img src="slate-roadmap/thumbnail.jpg" width="360" alt="Slate"></a> | **[Slate](slate-roadmap/)**<br>A dark, dense list roadmap: one column grouped by status under ring, half and check marks in grey, single-line rows with target and comments, a quiet vote at the end, and an item page that leads with its history.<br><sub>Template id: `slate-roadmap`</sub> |
| <a href="milepost/"><img src="milepost/thumbnail.jpg" width="360" alt="Milepost"></a> | **[Milepost](milepost/)**<br>A product team’s public roadmap told as a timeline: lanes in the team’s own priority order, a dated rail down the page, quiet cards with no vote counts in front, and an item page that leads with the team’s answer.<br><sub>Template id: `milepost`</sub> |

### Status page

| Preview | Template |
| --- | --- |
| <a href="beacon-status/"><img src="beacon-status/thumbnail.jpg" width="360" alt="Beacon Status"></a> | **[Beacon Status](beacon-status/)**<br>The classic status page: a painted header, a solid banner that says it in one line, every component in a two-column grid with thin ninety-day bars, a legend under them and the last fifteen days spelled out — “No incidents reported” included.<br><sub>Template id: `beacon-status`</sub> |
| <a href="quietline/"><img src="quietline/thumbnail.jpg" width="360" alt="Quietline"></a> | **[Quietline](quietline/)**<br>A calm, narrow status page that follows the visitor’s light or dark setting: a tinted banner, components folded into groups that say how many they hold, small rounded bars with the uptime beside each, and the incident history as a month calendar.<br><sub>Template id: `quietline`</sub> |
| <a href="halo-status/"><img src="halo-status/thumbnail.jpg" width="360" alt="Halo Status"></a> | **[Halo Status](halo-status/)**<br>A floating card over a dark band: a centred headline inside a soft halo, each group as its own card with its uptime, fat ribbon bars that read as one stripe, and a light/dark switch in the footer.<br><sub>Template id: `halo-status`</sub> |
| <a href="switchyard/"><img src="switchyard/thumbnail.jpg" width="360" alt="Switchyard"></a> | **[Switchyard](switchyard/)**<br>An observability dashboard: pill tabs, a big centred headline with the time it was last checked, a card per group with its uptime, response-time charts under the bars, and a system-metrics panel with a Day / Week / Month switch.<br><sub>Template id: `switchyard`</sub> |
| <a href="meridian-status/"><img src="meridian-status/thumbnail.jpg" width="360" alt="Meridian"></a> | **[Meridian](meridian-status/)**<br>A dark, bespoke page for a payments network: tiles that count components by state, the flagship group as a hero card beside the open incidents and maintenance, square bars, and times in UTC with a Local / UTC switch.<br><sub>Template id: `meridian-status`</sub> |
| <a href="lumen-status/"><img src="lumen-status/thumbnail.jpg" width="360" alt="Lumen Status"></a> | **[Lumen Status](lumen-status/)**<br>A bold status page floating on a brand-coloured band: a centred banner that says it in one line, KPI tiles, a card per group with pill bars, an uppercase caption and the sub-pages as tabs.<br><sub>Template id: `lumen-status`</sub> |
| <a href="gauge-status/"><img src="gauge-status/thumbnail.jpg" width="360" alt="Gauge Status"></a> | **[Gauge Status](gauge-status/)**<br>A dense, engineering-first status page: response time under every component's bars, square bars with three-decimal uptime, a big uptime headline, a 99.9% target and compact rows.<br><sub>Template id: `gauge-status`</sub> |
| <a href="stillwater-status/"><img src="stillwater-status/thumbnail.jpg" width="360" alt="Stillwater Status"></a> | **[Stillwater Status](stillwater-status/)**<br>A quiet, roomy status page that reads like a note from the team: a soft tinted banner without a glyph, sentence-case words, tinted incident cards with relative times, a subscribe card with a component picker and no legend.<br><sub>Template id: `stillwater-status`</sub> |
| <a href="plainline-status/"><img src="plainline-status/thumbnail.jpg" width="360" alt="Plainline Status"></a> | **[Plainline Status](plainline-status/)**<br>The least a status page can be and still say everything: a ruled banner, thin ribbon bars with only the percentage beside each row, no legend, no hero, a tab icon that turns colour when something is wrong, and compact type.<br><sub>Template id: `plainline-status`</sub> |

### Legal

| Preview | Template |
| --- | --- |
| <a href="covenant/"><img src="covenant/thumbnail.jpg" width="360" alt="Covenant"></a> | **[Covenant](covenant/)**<br>A legal hub with weight: an intro and three cards on how the agreements fit, documents grouped as Agreements, Privacy and Policies, and documents with numbered clauses, a boxed plain-English summary and the register in a sidebar.<br><sub>Template id: `covenant`</sub> |
| <a href="bylaw/"><img src="bylaw/thumbnail.jpg" width="360" alt="Bylaw"></a> | **[Bylaw](bylaw/)**<br>A site-policy register like an open-source handbook: recommended cards, a filterable list grouped as Terms, Acceptable use, Privacy and Security, and documents with lettered clauses, a “what each section says” table, a breadcrumb and Copy as Markdown.<br><sub>Template id: `bylaw`</sub> |
| <a href="folio/"><img src="folio/thumbnail.jpg" width="360" alt="Folio"></a> | **[Folio](folio/)**<br>A monochrome register in two columns: a large heading on the left, the documents ruled on the right with “Last updated” and a pill Read button each; documents are minimal, with an on-this-page rail.<br><sub>Template id: `folio`</sub> |
| <a href="statute/"><img src="statute/thumbnail.jpg" width="360" alt="Statute"></a> | **[Statute](statute/)**<br>Minimal and typographic, on dark: a huge title under a monospace “EFFECTIVE DATE” kicker, headings exactly as written, defined terms set bold at the start of their meaning, and a narrow measure.<br><sub>Template id: `statute`</sub> |
| <a href="assurance/"><img src="assurance/thumbnail.jpg" width="360" alt="Assurance"></a> | **[Assurance](assurance/)**<br>A trust centre: compliance badge tiles in the brand accent, the policies grouped as Security, Privacy and Terms, a document library with public reports and Request access, the status page’s live state, a sortable sub-processor list and region/language versions.<br><sub>Template id: `assurance`</sub> |
| <a href="rampart-trust/"><img src="rampart-trust/thumbnail.jpg" width="360" alt="Rampart Trust"></a> | **[Rampart Trust](rampart-trust/)**<br>A trust centre in the trust-center look: compliance tiles with audit windows, a security controls catalogue by category, a document library gated by NDA or approval, the live status pill, and policies as cards.<br><sub>Template id: `rampart-trust`</sub> |

### FAQ

| Preview | Template |
| --- | --- |
| <a href="lamplight/"><img src="lamplight/thumbnail.jpg" width="360" alt="Lamplight"></a> | **[Lamplight](lamplight/)**<br>A friendly help centre: a soft gradient search hero, four-up category cards with icons and question counts, popular questions and a contact band.<br><sub>Template id: `lamplight`</sub> |
| <a href="meadow/"><img src="meadow/thumbnail.jpg" width="360" alt="Meadow"></a> | **[Meadow](meadow/)**<br>A calm, editorial help centre: a serif headline over a landscape hero, a centred search, and three-up collection tiles with large icons.<br><sub>Template id: `meadow`</sub> |
| <a href="helmsway/"><img src="helmsway/thumbnail.jpg" width="360" alt="Helmsway"></a> | **[Helmsway](helmsway/)**<br>A restrained support site: a left-aligned search hero, popular articles with their first line and topic chips, then a compact topic list and contact.<br><sub>Template id: `helmsway`</sub> |
| <a href="pricefold/"><img src="pricefold/thumbnail.jpg" width="360" alt="Pricefold"></a> | **[Pricefold](pricefold/)**<br>The pricing-page FAQ: heading, intro and contact on the left, a single-open accordion with plus icons and muted answers on the right, in a dark scheme.<br><sub>Template id: `pricefold`</sub> |
| <a href="patchbay/"><img src="patchbay/thumbnail.jpg" width="360" alt="Patchbay"></a> | **[Patchbay](patchbay/)**<br>A plain-spoken support page: big title and lede, contact cards first, then the common issues as ruled rows with muted answers, all open. Dark.<br><sub>Template id: `patchbay`</sub> |
| <a href="lockstep/"><img src="lockstep/thumbnail.jpg" width="360" alt="Lockstep"></a> | **[Lockstep](lockstep/)**<br>An internal IT help desk: categories with sections nested inside them, each section its own page of answers, related questions under every answer, and a request form for whatever is not covered.<br><sub>Template id: `lockstep`</sub> |

### Careers

| Preview | Template |
| --- | --- |
| <a href="quarry-careers/"><img src="quarry-careers/thumbnail.jpg" width="360" alt="Quarry Careers"></a> | **[Quarry Careers](quarry-careers/)**<br>A dark, culture-first careers page: a one-line hero with an anchor to the roles, a short essay on quality, eleven numbered principles, talks and interviews, then every opening grouped under its team with counts.<br><sub>Template id: `quarry-careers`</sub> |
| <a href="ledgerwise/"><img src="ledgerwise/thumbnail.jpg" width="360" alt="Ledgerwise Jobs"></a> | **[Ledgerwise Jobs](ledgerwise/)**<br>A bright, large-board jobs search: a slim hero, an “assess your fit” band, then one ruled table of roles — team, location and type as columns — with search, a filter bar and pages of twenty.<br><sub>Template id: `ledgerwise`</sub> |
| <a href="brightwater/"><img src="brightwater/thumbnail.jpg" width="360" alt="Brightwater Careers"></a> | **[Brightwater Careers](brightwater/)**<br>A warm, culture-led careers page: a photo-collage hero, values and benefits as cards, words from the team with portraits, office cards, then roles as two-up cards with their facts as chips.<br><sub>Template id: `brightwater`</sub> |
| <a href="hostboard/"><img src="hostboard/thumbnail.jpg" width="360" alt="Hostboard"></a> | **[Hostboard](hostboard/)**<br>A neutral, hosted-style job board: the brand’s accent and nothing else, a left filter rail beside roles grouped by department with pill chips, and role pages with Overview and Application tabs and a full native apply form.<br><sub>Template id: `hostboard`</sub> |
| <a href="keelboard/"><img src="keelboard/thumbnail.jpg" width="360" alt="Keelboard"></a> | **[Keelboard](keelboard/)**<br>A department-first careers board in the board look: roles under their team with counts, a filter rail, posted dates, featured roles pinned first, team and benefits bands, and the role in two columns with a sticky column.<br><sub>Template id: `keelboard`</sub> |
| <a href="plainwork/"><img src="plainwork/thumbnail.jpg" width="360" alt="Plainwork Jobs"></a> | **[Plainwork Jobs](plainwork/)**<br>A calm, single-column jobs page in large serif prose: a few paragraphs about the company, a link to how we hire, and a plain list of openings with the salary stated in every one.<br><sub>Template id: `plainwork`</sub> |
| <a href="sproutboard/"><img src="sproutboard/thumbnail.jpg" width="360" alt="Sproutboard"></a> | **[Sproutboard](sproutboard/)**<br>A startup’s careers page in the bold look: a short pitch, a handful of roles as cards with their facts as chips, equity and pay said plainly, and the role as one column with an Apply bar that stays in reach.<br><sub>Template id: `sproutboard`</sub> |
| <a href="consortium/"><img src="consortium/thumbnail.jpg" width="360" alt="Consortium"></a> | **[Consortium](consortium/)**<br>An enterprise careers site in the board look with the table layout: every open role in one ruled table, a filter rail with team, place, type and level, team pages of their own, similar roles and previous/next on every role.<br><sub>Template id: `consortium`</sub> |
| <a href="nomadic-jobs/"><img src="nomadic-jobs/thumbnail.jpg" width="360" alt="Nomadic Jobs"></a> | **[Nomadic Jobs](nomadic-jobs/)**<br>A remote-first agency’s careers page in the paper look: roles as a plain list with where in the world each can be done, a time-zone note on every role, and remote and freelance roles easy to find.<br><sub>Template id: `nomadic-jobs`</sub> |
| <a href="commonground/"><img src="commonground/thumbnail.jpg" width="360" alt="Commonground"></a> | **[Commonground](commonground/)**<br>A nonprofit’s careers page in the default look: paid roles and volunteer places on one board, grouped by programme, with the mission up front, a weekly digest for supporters and the equal-opportunity statement in plain words.<br><sub>Template id: `commonground`</sub> |

### Contact

| Preview | Template |
| --- | --- |
| <a href="merrow-sales/"><img src="merrow-sales/thumbnail.jpg" width="360" alt="Merrow Sales"></a> | **[Merrow Sales](merrow-sales/)**<br>A two-step contact-sales page: work email and topic first, the qualifying questions after Continue, in a raised card on a bright, generous page.<br><sub>Template id: `merrow-sales`</sub> |
| <a href="halyard/"><img src="halyard/thumbnail.jpg" width="360" alt="Halyard Contact"></a> | **[Halyard Contact](halyard/)**<br>A dark topic router: a card per topic with a line saying what it is for, and the form opening on the one somebody picks — asking only that topic’s questions.<br><sub>Template id: `halyard`</sub> |
| <a href="vantage-contact/"><img src="vantage-contact/thumbnail.jpg" width="360" alt="Vantage Contact"></a> | **[Vantage Contact](vantage-contact/)**<br>A split contact-sales page: the pitch, three proof numbers and a logo wall on the left; a raised form card on the right that stays in view while you read.<br><sub>Template id: `vantage-contact`</sub> |
| <a href="atriumline/"><img src="atriumline/thumbnail.jpg" width="360" alt="Atriumline Contact"></a> | **[Atriumline Contact](atriumline/)**<br>A company contact page for a business with offices around the world: topic cards that open the right form, your sales line and hours with an “Open now” line, and a grid of office cards — photo, address, phone, hours and a map link each.<br><sub>Template id: `atriumline`</sub> |
| <a href="fieldnote/"><img src="fieldnote/thumbnail.jpg" width="360" alt="Fieldnote Support"></a> | **[Fieldnote Support](fieldnote/)**<br>A calm, single-column support page in a large serif: a human promise, your hours and how fast you answer up front, and a plain form with no box around it.<br><sub>Template id: `fieldnote`</sub> |
| <a href="relay-intake/"><img src="relay-intake/thumbnail.jpg" width="360" alt="Relay Intake"></a> | **[Relay Intake](relay-intake/)**<br>A one-thing-at-a-time intake form: a bold card over a soft gradient, a progress bar across three pages, a scale, a country, a yes/no that opens a follow-up, a rating at the end — and a different thank-you for each topic.<br><sub>Template id: `relay-intake`</sub> |
| <a href="meridian-help/"><img src="meridian-help/thumbnail.jpg" width="360" alt="Meridian Help"></a> | **[Meridian Help](meridian-help/)**<br>A support directory: topic cards first (the router), then the form for the one picked, offices with “Open now”, and the other ways to get help — facts beside the form.<br><sub>Template id: `meridian-help`</sub> |

### Events

| Preview | Template |
| --- | --- |
| <a href="lanternhall/"><img src="lanternhall/thumbnail.jpg" width="360" alt="Lanternhall"></a> | **[Lanternhall](lanternhall/)**<br>A community calendar in the day-by-day style: every event on a timeline under its date, a square cover beside it, the hosts and who is going; each event page puts the cover on the left over a sticky register card, with the place drawn as our own map card.<br><sub>Template id: `lanternhall`</sub> |
| <a href="gatherwell/"><img src="gatherwell/thumbnail.jpg" width="360" alt="Gatherwell"></a> | **[Gatherwell](gatherwell/)**<br>A local group’s home: a warm banner, what the group is about, its numbers and its organizers, then the meetups as rows with seats left and who is going. Each event opens on a wide picture with the place, a map card and a sticky RSVP bar on phones.<br><sub>Template id: `gatherwell`</sub> |
| <a href="keynote-coast/"><img src="keynote-coast/thumbnail.jpg" width="360" alt="Keynote Coast"></a> | **[Keynote Coast](keynote-coast/)**<br>An annual conference microsite: a saturated full-width hero, the numbers, featured speakers, the calendar, a call for proposals, tiered sponsors and an FAQ. The conference itself opens on a full-bleed hero with a countdown, and its programme reads as a grid by stage with day tabs and filters.<br><sub>Template id: `keynote-coast`</sub> |
| <a href="shipcast/"><img src="shipcast/thumbnail.jpg" width="360" alt="Shipcast"></a> | **[Shipcast](shipcast/)**<br>A developer launch stream: strict dark, hairline borders and square corners, times in mono in both zones. The launch page counts down over a single column, its schedule is a time · title · speaker table, and after the stream every session keeps its recording.<br><sub>Template id: `shipcast`</sub> |
| <a href="briefing-room/"><img src="briefing-room/thumbnail.jpg" width="360" alt="Briefing Room"></a> | **[Briefing Room](briefing-room/)**<br>A webinar series: a calm white page with one blue call to action, the hosts, then each episode as a card with a wide cover; past episodes stay listed with their recordings. Each episode page opens on a wide cover with a sticky register card and every time shown in the host’s zone and the reader’s.<br><sub>Template id: `briefing-room`</sub> |
| <a href="expohall/"><img src="expohall/thumbnail.jpg" width="360" alt="Expohall"></a> | **[Expohall](expohall/)**<br>A trade show and summit with the whole event toolkit switched on: an exhibitor hall with sponsor booths and opt-in leads, live Q&A and polls, attendee photos, an open call for papers, sign-up workshops with their own seats, a password-protected VIP dinner, certificates of attendance and an after-event rating.<br><sub>Template id: `expohall`</sub> |

### Courses

| Preview | Template |
| --- | --- |
| <a href="primer/"><img src="primer/thumbnail.jpg" width="360" alt="Primer"></a> | **[Primer](primer/)**<br>A chapter-by-chapter tutorial: numbered chapters, a chapter badge and an "In this chapter" box over every lesson, code with file names, Reveal-the-solution exercises, and a "Next up" card at the end of each chapter.<br><sub>Template id: `primer`</sub> |
| <a href="reelhouse/"><img src="reelhouse/thumbnail.jpg" width="360" alt="Reelhouse"></a> | **[Reelhouse](reelhouse/)**<br>A dark, dense video course: a wide cover over a stats strip, the instructors with their companies, and the lessons as a timed table. Every lesson is a self-hosted video with chapters, a searchable transcript and a speed row.<br><sub>Template id: `reelhouse`</sub> |
| <a href="cohortly/"><img src="cohortly/thumbnail.jpg" width="360" alt="Cohortly"></a> | **[Cohortly](cohortly/)**<br>A cohort course landing: the pitch beside a sticky panel with the start date and the button, a "Previously at" logo row, what is included, a weekly syllabus that opens week by week, testimonials and a long FAQ, on a warm page with editorial serif headings.<br><sub>Template id: `cohortly`</sub> |
| <a href="pathwise/"><img src="pathwise/thumbnail.jpg" width="360" alt="Pathwise"></a> | **[Pathwise](pathwise/)**<br>A bright, game-like learning path: short lessons as round nodes on a winding path, a chunky progress bar over every lesson, quick checks between explanations, lessons that open one after another, and a unit test at the end.<br><sub>Template id: `pathwise`</sub> |
| <a href="doodle-school/"><img src="doodle-school/thumbnail.jpg" width="360" alt="Doodle School"></a> | **[Doodle School](doodle-school/)**<br>An illustrated short course: a round, hand-drawn course badge beside the pitch, bite-sized lessons as cards with their length, kind and free-preview pills, a playful display face and soft pastel colours, in light and dark.<br><sub>Template id: `doodle-school`</sub> |
| <a href="clearline/"><img src="clearline/thumbnail.jpg" width="360" alt="Clearline"></a> | **[Clearline](clearline/)**<br>A corporate compliance refresher: a calm teal landing with a countdown to the enrolment deadline, lessons that open in order, true/false and short-answer checks, a timed assessment drawn from a question bank, and a minimal certificate with an expiry date and a QR code.<br><sub>Template id: `clearline`</sub> |

### Custom

| Preview | Template |
| --- | --- |
| <a href="lumen-launch/"><img src="lumen-launch/thumbnail.jpg" width="360" alt="Lumen Launch"></a> | **[Lumen Launch](lumen-launch/)**<br>A dark product homepage: gradient display type, a split hero with a product shot in perspective, a logo wall, alternating feature rows, a five-cell bento, a changelog teaser and a closing call to action under a blurred sticky header with a mega menu.<br><sub>Template id: `lumen-launch`</sub> |
| <a href="gridline/"><img src="gridline/thumbnail.jpg" width="360" alt="Gridline"></a> | **[Gridline](gridline/)**<br>A monochrome developer-platform homepage on a hairline grid: a centred hero on a faded grid pattern, a scrolling logo marquee, a tabbed feature switcher with code, feature cards, testimonials, numbers and a two-button call to action.<br><sub>Template id: `gridline`</sub> |
| <a href="tidepool-pricing/"><img src="tidepool-pricing/thumbnail.jpg" width="360" alt="Tidepool Pricing"></a> | **[Tidepool Pricing](tidepool-pricing/)**<br>A light pricing page: a centred headline, three plans with a monthly / yearly switch, a comparison table whose header stays put as you scroll, an FAQ and an enterprise band with a contact form that lands in your inbox.<br><sub>Template id: `tidepool-pricing`</sub> |
| <a href="northstar-story/"><img src="northstar-story/thumbnail.jpg" width="360" alt="Northstar Story"></a> | **[Northstar Story](northstar-story/)**<br>A long-form product story in large serif type: a full-bleed film behind the title, a numbers band, a scroll-driven sequence where the picture stays put while the chapters pass, pull quotes and parallax picture breaks.<br><sub>Template id: `northstar-story`</sub> |
| <a href="keystone-trust/"><img src="keystone-trust/thumbnail.jpg" width="360" alt="Keystone Trust"></a> | **[Keystone Trust](keystone-trust/)**<br>A trust centre in the article layout: the page tree and an on-this-page rail, uptime and audit numbers, a wall of compliance badges, cards for each control, an FAQ and a way to reach the security team — with pages for practices, compliance, privacy, subprocessors and vulnerability reports.<br><sub>Template id: `keystone-trust`</sub> |
| <a href="harbor-site/"><img src="harbor-site/thumbnail.jpg" width="360" alt="Harbor Site"></a> | **[Harbor Site](harbor-site/)**<br>A small multi-page company site on the `pages` layout: home, product (with two sub-pages in a dropdown), pricing, about (with a team page) and contact — the header nav built from the page tree.<br><sub>Template id: `harbor-site`</sub> |
| <a href="linkline-bio/"><img src="linkline-bio/thumbnail.jpg" width="360" alt="Linkline Bio"></a> | **[Linkline Bio](linkline-bio/)**<br>A link-in-bio one-pager: your picture, one line about you, and a stack of big buttons to everywhere you are — centred, quick to load on a phone.<br><sub>Template id: `linkline-bio`</sub> |
| <a href="beacon-waitlist/"><img src="beacon-waitlist/thumbnail.jpg" width="360" alt="Beacon Waitlist"></a> | **[Beacon Waitlist](beacon-waitlist/)**<br>A launch waitlist: a big promise, three reasons, and a short form — email, role and a 1–5 “how much do you need this” scale — on one page.<br><sub>Template id: `beacon-waitlist`</sub> |
| <a href="atelier-portfolio/"><img src="atelier-portfolio/thumbnail.jpg" width="360" alt="Atelier Portfolio"></a> | **[Atelier Portfolio](atelier-portfolio/)**<br>A designer’s portfolio on the `pages` layout: selected work on the home page, a page per project nested under Work, and an about page — wide, centred and quiet.<br><sub>Template id: `atelier-portfolio`</sub> |

### About

| Preview | Template |
| --- | --- |
| <a href="lantern-about/"><img src="lantern-about/thumbnail.jpg" width="360" alt="Lantern About"></a> | **[Lantern About](lantern-about/)**<br>The mission first, then the story, the numbers, the team and who backs it: a warm, light startup page with greyscale customer logos and quotes in a grid.<br><sub>Template id: `lantern-about`</sub> |
| <a href="granite-group/"><img src="granite-group/thumbnail.jpg" width="360" alt="Granite Group"></a> | **[Granite Group](granite-group/)**<br>Scale first: the numbers, the leadership, offices, awards, commitments and the legal entity, in a wide, restrained page with a rule between bands.<br><sub>Template id: `granite-group`</sub> |
| <a href="studiohaus/"><img src="studiohaus/thumbnail.jpg" width="360" alt="Studiohaus"></a> | **[Studiohaus](studiohaus/)**<br>The work and who it was for: a full-bleed banner, a strip of client logos, featured quotes and a gallery of the studio at work.<br><sub>Template id: `studiohaus`</sub> |
| <a href="commonweal/"><img src="commonweal/thumbnail.jpg" width="360" alt="Commonweal"></a> | **[Commonweal](commonweal/)**<br>The mission as a pull quote, the impact in big numbers, the board and advisors, the charity’s registration and its commitments to donors.<br><sub>Template id: `commonweal`</sub> |
| <a href="opencore/"><img src="opencore/thumbnail.jpg" width="360" alt="Opencore"></a> | **[Opencore](opencore/)**<br>The community leads: contribution links, the maintainers in a dense grid, who uses it and how it is run, in a dark developer palette.<br><sub>Template id: `opencore`</sub> |
| <a href="solo-notes/"><img src="solo-notes/thumbnail.jpg" width="360" alt="Solo Notes"></a> | **[Solo Notes](solo-notes/)**<br>A narrow, personal page: the story first, the milestones newest first, where the work has been featured and how to reach the writer.<br><sub>Template id: `solo-notes`</sub> |

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

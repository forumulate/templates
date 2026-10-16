/**
 * The sample marketing site the seed script writes into a library made from
 * the `website` template: a fictional analytics product, Brightfield.
 *
 * Pure data plus one pure function. References between entries are written
 * symbolically (`entry('page:pricing')`) because ids only exist once the
 * entries do; `materialize()` swaps in the real ids. The api unit lane judges
 * every materialized entry through the production field compiler
 * (apps/api/src/content/marketing-seed.test.ts), so a template change that
 * breaks this content fails a test rather than a seed run.
 */
import { bold, doc, h2, h3, link, p, quote, ul } from './rich.mjs';

/** A reference to another seeded entry, by its seed key. */
export const entry = (key) => ({ kind: 'entry', $entry: key });
const to = (key, label) => ({ type: 'reference', reference: entry(key), ...(label ? { label } : {}) });
const url = (href, label) => ({ type: 'url', url: href, ...(label ? { label } : {}) });

/** @typedef {{ key: string, type: string, title: string, slug?: string, fields: Record<string, unknown> }} SeedEntry */

/** @type {SeedEntry[]} */
export const PAGES = [
  {
    key: 'page:home',
    type: 'page',
    title: 'Home',
    slug: 'home',
    fields: {
      seo: {
        title: 'Brightfield — product analytics for small teams',
        description: 'See what your customers do, in plain language. Set up in five minutes, no data team required.',
      },
      blocks: [
        {
          blockType: 'hero',
          variant: 'centered',
          heading: 'Know what your customers actually do',
          subheading:
            'Brightfield turns raw product events into answers your whole team can read. No SQL, no data team, no six-week rollout.',
          ctas: [
            { label: 'Start free', link: to('page:pricing') },
            { label: 'Read the launch post', link: to('post:launch') },
          ],
        },
        {
          blockType: 'features',
          heading: 'Everything a small team needs, nothing it doesn’t',
          items: [
            { title: 'Five-minute setup', body: 'One script tag or one SDK call. Events start arriving before your coffee cools.' },
            { title: 'Questions, not queries', body: 'Ask “where do trial users drop off?” and get a funnel, not a blank editor.' },
            { title: 'Private by default', body: 'No cookies, no fingerprinting, EU hosting. Your visitors stay anonymous.' },
            { title: 'Alerts that matter', body: 'Get a message when sign-ups dip or a release breaks a flow — not every time a number twitches.' },
          ],
        },
        {
          blockType: 'text',
          body: doc(
            h2('Built for the people doing the work'),
            p(
              'Most analytics tools are built for analysts. Brightfield is built for the founder checking last week’s numbers on a Monday, the designer testing a new onboarding flow, and the engineer who wants to know whether anyone uses the feature they shipped.',
            ),
            quote('“We replaced three dashboards and a spreadsheet with one Brightfield board. Everyone actually looks at it.” — Priya N., Head of Product at Lattice Supply'),
          ),
        },
        {
          blockType: 'cta',
          heading: 'Try Brightfield free for 30 days',
          body: 'Every feature, no credit card. Keep your data if you leave.',
          link: to('page:pricing', 'See plans'),
        },
      ],
    },
  },
  {
    key: 'page:pricing',
    type: 'page',
    title: 'Pricing',
    slug: 'pricing',
    fields: {
      seo: { title: 'Pricing', description: 'Simple plans that grow with your product. Start free, upgrade when you need to.' },
      blocks: [
        {
          blockType: 'hero',
          variant: 'centered',
          heading: 'Simple pricing that grows with you',
          subheading: 'Pay for the events you send, not the seats you add. Everyone on your team gets in.',
        },
        {
          blockType: 'features',
          items: [
            { title: 'Starter — free', body: 'Up to 100k events a month\n1 project\n30 days of history\nCommunity support' },
            { title: 'Team — $49 / month', body: 'Up to 2M events a month\nUnlimited projects\n2 years of history\nAlerts and shared boards\nEmail support' },
            { title: 'Business — $199 / month', body: 'Up to 20M events a month\nSSO and audit log\nUnlimited history\nData export to your warehouse\nPriority support' },
          ],
        },
        {
          blockType: 'text',
          body: doc(
            h2('Questions people ask'),
            h3('What counts as an event?'),
            p('A page view, a click you chose to track, or a custom event you send from your code. Bots and duplicate events are filtered out before they count.'),
            h3('What happens if I go over my plan?'),
            p('Nothing breaks. We keep collecting, tell you, and suggest a plan at the end of the month. We never bill overages without asking.'),
            h3('Do you offer discounts?'),
            p('Yes: 50% off for non-profits and open-source projects, and two months free on yearly plans. ', link('Ask us', 'mailto:hello@brightfield.example'), '.'),
          ),
        },
        {
          blockType: 'cta',
          heading: 'Not sure which plan fits?',
          body: 'Start on Starter. You can change plans any time, and unused days are credited.',
          link: url('mailto:sales@brightfield.example', 'Talk to us'),
        },
      ],
    },
  },
  {
    key: 'page:about',
    type: 'page',
    title: 'About',
    slug: 'about',
    fields: {
      seo: { title: 'About us', description: 'A small, independent team building analytics we would want to use.' },
      blocks: [
        {
          blockType: 'hero',
          variant: 'centered',
          heading: 'A small team with a simple idea',
          subheading: 'Product analytics should answer questions, not create homework.',
        },
        {
          blockType: 'text',
          body: doc(
            p(
              'Brightfield started in 2024, when the three of us were running product at companies too small for a data team and too busy to learn one more query language. We kept exporting CSVs to answer the same five questions. So we built the tool that answers them.',
            ),
            h2('What we believe'),
            ul(
              'Your visitors’ privacy is not a setting. We collect the least we can and store it in the EU.',
              'Pricing should be predictable. No per-seat fees, no surprise overages.',
              'Software should explain itself. If you need a training course, we got it wrong.',
            ),
            h2('Who we are'),
            p(bold('Maya Okafor'), ' (CEO) ran growth at two B2B startups. ', bold('Jonas Lindqvist'), ' (CTO) built event pipelines that process billions of rows a day. ', bold('Lea Moreau'), ' (Design) has spent a decade making complicated tools feel calm.'),
            p('We are fully remote, bootstrapped, and profitable — which means we answer to our customers, not to a board.'),
          ),
        },
        {
          blockType: 'cta',
          heading: 'We’re hiring',
          body: 'One senior engineer and one support lead, remote within ±3 hours of CET.',
          link: url('mailto:jobs@brightfield.example', 'Say hello'),
        },
      ],
    },
  },
  {
    key: 'page:blog',
    type: 'page',
    title: 'Blog',
    slug: 'blog',
    fields: {
      seo: { title: 'Blog', description: 'Product news, guides and the occasional opinion from the Brightfield team.' },
      blocks: [
        {
          blockType: 'hero',
          variant: 'centered',
          heading: 'The Brightfield blog',
          subheading: 'Product news, practical guides, and what we learn building a calmer analytics tool.',
        },
      ],
    },
  },
];

/** @type {SeedEntry[]} */
export const POSTS = [
  {
    key: 'post:launch',
    type: 'post',
    title: 'Introducing Brightfield',
    slug: 'introducing-brightfield',
    fields: {
      publishedAt: '2026-09-02T09:00:00Z',
      author: 'Maya Okafor',
      excerpt: 'Today we are opening Brightfield to everyone: product analytics that answers questions in plain language.',
      body: doc(
        p('After eighteen months of private beta with 140 teams, Brightfield is open to everyone today.'),
        h2('Why another analytics tool?'),
        p('Because the existing ones assume you have an analyst. Most teams don’t. They have a founder, a designer and a couple of engineers who all want the same answers and none of whom want to write SQL to get them.'),
        h2('What you get on day one'),
        ul('Funnels, retention and paths, built by asking a question', 'Shared boards your whole team can read', 'Alerts when a number moves for a reason', 'Cookieless tracking, hosted in the EU'),
        p('Starter is free forever for up to 100k events a month. ', link('See the plans', '/pricing'), '.'),
      ),
      seo: { description: 'Brightfield is open to everyone: product analytics in plain language.' },
    },
  },
  {
    key: 'post:funnels',
    type: 'post',
    title: 'Five funnels every SaaS should watch',
    slug: 'five-funnels-every-saas-should-watch',
    fields: {
      publishedAt: '2026-09-23T09:00:00Z',
      author: 'Lea Moreau',
      excerpt: 'Sign-up, activation, the first invite, the upgrade and the cancel flow: what to measure in each and what “good” looks like.',
      body: doc(
        p('You don’t need fifty dashboards. You need five funnels, watched every week.'),
        h2('1. Visit to sign-up'),
        p('Measure from the first page view of a session to a completed sign-up. A healthy B2B site converts 2–5% of visitors.'),
        h2('2. Sign-up to activation'),
        p('Define activation as the first moment a user gets value — a report viewed, a file shared. Then measure how many get there in their first week.'),
        h2('3. Activation to first invite'),
        p('Products that spread inside a company grow without a sales team. Track how many activated users invite a colleague.'),
        h2('4. Trial to paid'),
        p('Split it by the plan they chose and the channel they came from; the average hides everything interesting.'),
        h2('5. The cancel flow'),
        p('Everyone forgets this one. Watch where people leave it — and read every answer to “why are you leaving?”.'),
      ),
    },
  },
  {
    key: 'post:privacy',
    type: 'post',
    title: 'Analytics without cookies: how we count visitors',
    slug: 'analytics-without-cookies',
    fields: {
      publishedAt: '2026-10-07T09:00:00Z',
      author: 'Jonas Lindqvist',
      excerpt: 'No cookies, no fingerprinting, and still accurate unique visitor counts. Here is how the daily salted hash works.',
      body: doc(
        p('Brightfield sets no cookies and stores nothing on your visitors’ devices. So how do we count unique visitors?'),
        h2('A hash that forgets'),
        p('For each request we hash the site, the visitor’s IP address, their user agent and a random salt. The salt is replaced every 24 hours and never stored, so yesterday’s hashes cannot be linked to today’s — not even by us.'),
        h2('What that costs'),
        p('We cannot tell that the visitor on Monday is the same person on Tuesday. For a marketing site that is the right trade: daily uniques are accurate, and nobody is tracked across days.'),
        h2('What it buys'),
        ul('No cookie banner needed for analytics in most of the EU', 'No personal data stored', 'Numbers that ad blockers do not distort as much'),
      ),
    },
  },
];

/** @type {SeedEntry[]} */
export const MENUS = [
  {
    key: 'menu:main',
    type: 'menu',
    title: 'Main menu',
    slug: 'main',
    fields: {
      items: [
        { label: 'Pricing', link: to('page:pricing') },
        { label: 'Blog', link: to('page:blog') },
        {
          label: 'Company',
          link: to('page:about'),
          children: [
            { label: 'About us', link: to('page:about') },
            { label: 'Careers', link: url('mailto:jobs@brightfield.example') },
          ],
        },
      ],
    },
  },
  {
    key: 'menu:footer',
    type: 'menu',
    title: 'Footer menu',
    slug: 'footer',
    fields: {
      items: [
        { label: 'Product', link: to('page:home'), children: [{ label: 'Pricing', link: to('page:pricing') }, { label: 'Launch post', link: to('post:launch') }] },
        { label: 'Company', link: to('page:about'), children: [{ label: 'About', link: to('page:about') }, { label: 'Blog', link: to('page:blog') }] },
        { label: 'Contact', link: url('mailto:hello@brightfield.example') },
      ],
    },
  },
];

/** @type {SeedEntry[]} */
export const GLOBALS = [
  {
    key: 'global:site',
    type: 'site',
    title: 'Site settings',
    slug: 'site',
    fields: {
      name: 'Brightfield',
      social: [
        { network: 'GitHub', url: 'https://github.com/brightfield-example' },
        { network: 'Mastodon', url: 'https://mastodon.social/@brightfield_example' },
      ],
      seo: {
        title: 'Brightfield — product analytics for small teams',
        description: 'Product analytics that answers questions in plain language. Cookieless, EU-hosted, free to start.',
      },
      announcement: { enabled: true, message: 'New: alerts that tell you why a number moved →', link: to('post:launch') },
    },
  },
  {
    key: 'global:header',
    type: 'header',
    title: 'Header',
    slug: 'header',
    fields: { menu: entry('menu:main'), cta: to('page:pricing', 'Start free') },
  },
  {
    key: 'global:footer',
    type: 'footer',
    title: 'Footer',
    slug: 'footer',
    fields: {
      menu: entry('menu:footer'),
      note: 'Brightfield is a fictional product. This site is the reference implementation of a Forumulate content library.',
      copyright: '© 2026 Brightfield',
    },
  },
  {
    key: 'global:strings',
    type: 'strings',
    title: 'Strings',
    slug: 'strings',
    fields: {
      strings: [
        { key: 'posts.readMore', value: 'Read more' },
        { key: 'newsletter.submit', value: 'Subscribe' },
        { key: 'notFound.title', value: 'Page not found' },
      ],
    },
  },
];

/** Paths, and what each shows. Posts live under `/blog`, which is what makes the Blog page their index. */
export const ROUTES = [
  { path: '/', entry: 'page:home', layout: 'landing' },
  { path: '/pricing', entry: 'page:pricing' },
  { path: '/about', entry: 'page:about' },
  { path: '/blog', entry: 'page:blog' },
  ...POSTS.map((post) => ({ path: `/blog/${post.slug}`, entry: post.key })),
];

/** @type {SeedEntry[]} */
export const ROUTE_ENTRIES = ROUTES.map((r) => ({
  key: `route:${r.path}`,
  type: 'route',
  title: r.path,
  slug: r.path === '/' ? 'route-home' : `route${r.path.replace(/\//g, '-')}`,
  fields: { path: r.path, entry: entry(r.entry), layout: r.layout ?? 'default', status: 'active' },
}));

/**
 * Every entry, in the order the seed creates them. Order only matters for
 * readability of the run log: references are filled in after every entry
 * exists, so nothing here has to come before what it points at.
 */
export const SEED = [...PAGES, ...POSTS, ...MENUS, ...GLOBALS, ...ROUTE_ENTRIES];

/**
 * `fields` with every `{ $entry: key }` replaced by `{ kind: 'entry', id }`.
 * Throws on a key with no id, so a typo fails before anything is written.
 */
export function materialize(fields, ids) {
  const walk = (v) => {
    if (Array.isArray(v)) return v.map(walk);
    if (v && typeof v === 'object') {
      if (typeof v.$entry === 'string') {
        const id = ids.get(v.$entry);
        if (!id) throw new Error(`seed: no entry with key ${v.$entry}`);
        return { kind: 'entry', id };
      }
      return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)]));
    }
    return v;
  };
  return walk(fields);
}

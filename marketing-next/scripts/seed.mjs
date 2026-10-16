#!/usr/bin/env node
/**
 * Create a content library from the `website` template and fill it with the
 * sample marketing site in ../seed/content.mjs, through the public management
 * API — the same calls a customer's migration script would make.
 *
 *   FORUMULATE_API_URL=http://localhost:3001/api \
 *   FORUMULATE_TOKEN=cft_… FORUMULATE_ORG_ID=… npm run seed
 *
 *   --library <id>     fill an existing library instead of creating one
 *   --name <name>      the new library's name (default "Brightfield marketing site")
 *   --allow-production run against forumulate.com (see below)
 *
 * The token needs scopes `read`, `write` and `admin` (admin issues the
 * delivery key) on an organization where you may create content
 * libraries. Prints the `.env.local` lines the site needs at the end.
 *
 * WHY IT REFUSES PRODUCTION. Every run creates a new library with twenty
 * published entries and a live key. Pointed at forumulate.com by mistake,
 * that lands in a real customer organization. Seed a local API or the e2e
 * stack; the showcase org is seeded on purpose, with --allow-production.
 */
import { createContentClient } from '@forumulate/embed/content';
import { SEED, materialize } from '../seed/content.mjs';

const argv = process.argv.slice(2);
const arg = (name) => {
  const i = argv.indexOf(name);
  return i >= 0 ? argv[i + 1] : undefined;
};

const API = (process.env.FORUMULATE_API_URL ?? '').replace(/\/+$/, '');
const TOKEN = process.env.FORUMULATE_TOKEN ?? '';
const ORG = process.env.FORUMULATE_ORG_ID ?? '';

function fail(message) {
  console.error(`seed: ${message}`);
  process.exit(1);
}

if (!API) fail('set FORUMULATE_API_URL (the API origin including /api, e.g. http://localhost:3001/api)');
if (!TOKEN) fail('set FORUMULATE_TOKEN (a personal access token with read, write and admin scopes)');
if (!ORG) fail('set FORUMULATE_ORG_ID');
const host = new URL(API).hostname;
if (/(^|\.)forumulate\.com$/i.test(host) && !argv.includes('--allow-production')) {
  fail(`${host} is production. Seed a local API or the e2e stack, or pass --allow-production if you mean it.`);
}

async function call(method, path, body, headers = {}) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: {
      authorization: `Bearer ${TOKEN}`,
      'content-type': 'application/json',
      // The edge challenges default library user agents.
      'user-agent': 'forumulate-marketing-next-seed/1.0',
      ...headers,
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const text = await res.text();
  if (!res.ok) fail(`${method} ${path} → ${res.status} ${text.slice(0, 600)}`);
  return text ? JSON.parse(text) : null;
}

const lib = (libraryId) => `/orgs/${ORG}/content/libraries/${libraryId}`;

async function main() {
  let libraryId = arg('--library');
  if (!libraryId) {
    const { library } = await call('POST', `/orgs/${ORG}/content/libraries`, {
      name: arg('--name') ?? 'Brightfield marketing site',
      template: 'website',
    });
    libraryId = library.id;
    console.log(`library  ${libraryId}  (created from the website template)`);
  }

  // 1. Every entry, empty: references need ids, and ids need entries.
  const ids = new Map();
  for (const e of SEED) {
    const { item } = await call(
      'POST',
      `${lib(libraryId)}/items`,
      { title: e.title, slug: e.slug, preset: e.type },
      // Same key → same entry, so a run that died halfway can be re-run on --library.
      { 'idempotency-key': `seed:${libraryId}:${e.key}` },
    );
    ids.set(e.key, item.id);
  }
  console.log(`entries  ${ids.size} created`);

  // 2. Their fields, with every symbolic reference now a real id.
  for (const e of SEED) {
    await call('PATCH', `${lib(libraryId)}/items/${ids.get(e.key)}/fields`, { fields: materialize(e.fields, ids) });
  }

  // 3. Publish. Targets first, routes last, so no route ever points at a draft.
  const order = [...SEED.filter((e) => e.type !== 'route'), ...SEED.filter((e) => e.type === 'route')];
  for (const e of order) await call('POST', `${lib(libraryId)}/items/${ids.get(e.key)}/publish`);
  console.log(`publish  ${order.length} entries live`);

  // 4. The site's key, for published content. Drafts need no key of their
  // own: an editor's preview session hands the site a short-lived credential.
  const delivery = await call('POST', `${lib(libraryId)}/keys`, { name: 'marketing-next (server)', kind: 'delivery' });

  // 5. Read it back the way the site will, so a green run means a working site.
  const cms = createContentClient({ library: libraryId, key: delivery.secret, baseUrl: API });
  const home = await cms.resolveRoute('/');
  if (!home || home.kind !== 'entry') fail('the home route did not resolve through the delivery API');
  const routes = await cms.get('routes', { limit: '100' });
  console.log(`verify   / resolves to "${home.entry.title}"; ${routes.data.length} routes live`);

  console.log('\nAdd to templates/marketing-next/.env.local (the key is shown once):\n');
  console.log(`FORUMULATE_API_URL=${API}`);
  console.log(`FORUMULATE_LIBRARY_ID=${libraryId}`);
  console.log(`FORUMULATE_DELIVERY_KEY=${delivery.secret}`);
}

main().catch((err) => fail(err?.stack ?? String(err)));

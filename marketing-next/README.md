# marketing-next — a website whose every page is content

The reference site for Forumulate content libraries: a Next.js (App Router)
marketing site where **no page, menu or setting is in the code**. Pages,
posts, routes, the header and footer menus, the announcement bar and the
default SEO all come from a library made from the **Website** template, read
through the delivery API.

Unlike the other folders in `templates/` this is not a space template: it is
code you copy and deploy yourself.

## What is in it

| Path                         | What it does                                                                                                                                                         |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `app/[[...path]]/page.tsx`   | Every page. Resolves the path against the library's routes and renders the entry with `<Content>` from `@forumulate/blocks-react`. Redirect rules and 404s included. |
| `app/layout.tsx`             | Header, footer, announcement bar and default metadata, from the `site`, `header` and `footer` globals and the menus they point at.                                   |
| `components/blocks/`         | This site's components for the template's block types (`hero`, `features`, `cta`, `text`, `image`). A block type with no component still renders, field by field.   |
| `app/api/revalidate`         | The publish webhook receiver (`createRevalidateHandler`): drops exactly the cached reads a publish made stale.                                                        |
| `app/api/preview`, `exit-preview` | Draft mode (`createPreviewRoute` / `createExitPreviewRoute`): POST only; a single-use preview token in, an httpOnly preview cookie out. See [Preview](#preview). |
| `app/sitemap.ts`, `robots.ts` | From the route table.                                                                                                                                               |
| `lib/cms.ts`                 | Every read: `createContent` from `@forumulate/next/content` (tagged for revalidation), and the route table through `createContentClient({ library, key })`.          |
| `scripts/seed.mjs`           | Creates a library from the Website template and fills it with a sample site (Brightfield, a fictional analytics product).                                           |

A page becomes an index of posts by its path: the posts are routed at
`/blog/<slug>`, so the page at `/blog` lists them. Put a page at `/news` and
posts at `/news/<slug>`, and that works the same way with no code.

## Run it

```sh
cp .env.example .env.local     # fill in the library id and a delivery key
npm install
npm run dev
```

With no library configured the site still builds and runs, and shows how to
connect one. `FORUMULATE_LIBRARY_ID` must be the library **id**, not its slug:
the publish webhook's cache tags carry ids, and a site configured by slug
would never update.

To have edits appear within seconds, add a webhook in the library (Content →
Webhooks) for the `content.*` events, pointing at
`https://<your site>/api/revalidate`, and put its signing secret in
`FORUMULATE_WEBHOOK_SECRET`. Without one, cached pages refresh every five
minutes.

## Preview

Draft mode is entered only through a preview session, never a shared secret:

1. An editor who can read the library mints a single-use token bound to the
   library, the entry and the path (`POST /orgs/{orgId}/content/libraries/{libraryId}/preview/sessions`
   with `{ entryId, path }`, as the signed-in editor). It is valid for ten
   minutes.
2. The token is POSTed as a form field (never in a URL) to this site's
   `/api/preview` with the same `path`.
3. The route exchanges it server-side for an hour-long preview credential,
   keeps that in an httpOnly `Partitioned; SameSite=None; Secure` cookie,
   turns draft mode on and redirects to the path (relative paths only).
   Every read then uses the credential, and nothing it reads is cached.

The banner's **Exit preview** button POSTs to `/api/exit-preview`, which
clears the cookie and returns to the page. A reused, expired or mismatched
token, or one for another library, answers 401; the credential stops working
the moment the editor loses access to the library.

### Live preview and click-to-edit in the studio

Open an entry in the console's Content section and choose **Site preview**:
the studio frames this site at the entry's path through the same preview
session. In draft mode the page renders `components/LiveContent.tsx`, whose
`useLivePreview` (from `@forumulate/next/live-preview`) merges every edit in
as the editor types — a reference picked a second ago arrives populated — and
whose bridge outlines fields on hover. Double-click a field marked with
`data-fm-field` (`<Content>` marks every field; the pricing tiers' names and
descriptions are marked in `components/blocks`) and its card opens in the
studio. Published pages carry neither the attribute nor the bridge.

Two settings make the frame work:

- The site must let the studio frame it:
  `Content-Security-Policy: frame-ancestors 'self' https://forumulate.com`
  (the studio shows the exact header when a frame is refused).
- `FORUMULATE_STUDIO_ORIGIN` when your console is not at the API's origin.

## Seed a library with sample content

The seed script writes through the public management API, exactly as a
migration script of yours would. It needs a personal access token (Account →
Tokens) with the scopes `read`, `write` and `admin` — `admin` because it issues
the site's delivery key.

```sh
FORUMULATE_API_URL=http://localhost:3001/api \
FORUMULATE_TOKEN=cft_… \
FORUMULATE_ORG_ID=<org id> \
npm run seed
```

It creates a library, twenty entries (four pages, three posts, two menus, the
four globals and seven routes), publishes them, issues a delivery key, reads the home page back through the delivery API, and prints
the `.env.local` lines to paste. The key is shown once.

- `--library <id>` fills an existing library instead of creating one. Entries
  are created with idempotency keys, so a run that stopped halfway can be
  re-run on the same library.
- `--name <name>` names the new library.

**Do not point it at production.** Every run creates a library with live
keys. It refuses a `forumulate.com` API unless you pass `--allow-production`,
which is for seeding the showcase organization on purpose. Use a local API or
the e2e stack (`pnpm --filter @forumulate/web run e2e:stack`, then
`FORUMULATE_API_URL=http://localhost:3000/api`).

## Checking it from the monorepo

```sh
pnpm --filter "./packages/**" run build
node scripts/marketing-next.mjs   # packs the SDKs from source, then typecheck, unit tests, next build
```

The browser flows (home, a page added after the build, a menu change) are in
`apps/web/e2e/cms-reference-site.spec.ts` and run on the e2e stack after the
script above has built the site.

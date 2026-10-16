/**
 * Every read this site makes from its content library.
 *
 * Entries, globals and route resolution go through `@forumulate/next`'s
 * `createContent`, which tags each fetch with the API's cache tags so the
 * publish webhook (app/api/revalidate) drops exactly what changed, and reads
 * drafts with the preview credential in draft mode. The route table has no
 * wrapper there, so it is read with the plain `createContentClient` and the
 * same tag by hand.
 *
 * Wrapped in React's `cache()`: the layout, the page and `generateMetadata`
 * all ask for the globals and the route table, and one render should make
 * each request once.
 */
import { cache } from 'react';
import { cookies, draftMode } from 'next/headers';
import { createContentClient } from '@forumulate/embed/content';
import { contentTags, createContent, PREVIEW_COOKIE, type Entry, type RouteResolution } from '@forumulate/next/content';
import { cmsConfig, REVALIDATE_SECONDS } from './env';
import type { FooterFields, HeaderFields, MenuFields, PostFields, Ref, RouteSummary, SiteFields } from './fields';

export const cms = cmsConfig
  ? createContent({
      library: cmsConfig.library,
      key: cmsConfig.key,
      baseUrl: cmsConfig.baseUrl,
      revalidate: REVALIDATE_SECONDS,
    })
  : null;

/** Draft mode, or false outside a request (build-time params, the sitemap at build). */
export const isDraft = cache(async (): Promise<boolean> => {
  try {
    return (await draftMode()).isEnabled;
  } catch {
    return false;
  }
});

export const resolvePath = cache(async (path: string): Promise<RouteResolution | null> => {
  if (!cms) return null;
  return cms.resolveRoute(path);
});

/** A global, or null when it has not been published yet (a new library has none). */
async function global<T>(key: string): Promise<Entry<T> | null> {
  if (!cms) return null;
  try {
    return await cms.getGlobal<T>(key);
  } catch (err) {
    if ((err as { status?: number }).status === 404) return null;
    throw err;
  }
}

export const getSite = cache(() => global<SiteFields>('site'));
export const getHeader = cache(() => global<HeaderFields>('header'));
export const getFooter = cache(() => global<FooterFields>('footer'));

/**
 * A menu a header or footer points at. Delivery populates the reference to the
 * plan's depth; past it the menu arrives as a stub, so it is fetched by id.
 */
export async function menuOf(ref: Ref<MenuFields> | undefined): Promise<MenuFields | null> {
  if (!ref || !cms) return null;
  if (ref.fields) return ref.fields;
  try {
    return (await cms.getEntry<MenuFields>('menu', ref.id)).fields;
  } catch (err) {
    if ((err as { status?: number }).status === 404) return null;
    throw err;
  }
}

/** The most routes a site walks. Far past any marketing site; it bounds a runaway cursor. */
const MAX_ROUTE_PAGES = 100;

/** Every live route (`GET …/routes`, 100 at a time): prerendering, the sitemap, and entry links. */
export const getRoutes = cache(async (): Promise<RouteSummary[]> => {
  if (!cmsConfig) return [];
  // The same draft key `createContent` reads with: the hour-long preview
  // credential the preview route left in its httpOnly cookie. Draft mode can
  // outlive it (Next's bypass cookie lasts the browser session); then the
  // site reads published content until the editor opens the preview again.
  const draftKey = (await isDraft()) ? (await cookies()).get(PREVIEW_COOKIE)?.value || undefined : undefined;
  const draft = !!draftKey;
  const client = createContentClient({
    library: cmsConfig.library,
    key: draftKey ?? cmsConfig.key,
    baseUrl: cmsConfig.baseUrl,
    draft,
    // A draft read must never land in the Data Cache, where the next visitor would get it.
    init: draft
      ? { cache: 'no-store' }
      : { next: { revalidate: REVALIDATE_SECONDS, tags: [contentTags.type(cmsConfig.library, 'route')] } },
  });
  const out: RouteSummary[] = [];
  let cursor: string | null = null;
  for (let i = 0; i < MAX_ROUTE_PAGES; i++) {
    const page: { data: RouteSummary[]; page: { hasMore: boolean; nextCursor: string | null } } = await client.get(
      'routes',
      { limit: '100', cursor: cursor ?? undefined },
    );
    out.push(...page.data);
    if (!page.page.hasMore || !page.page.nextCursor) break;
    cursor = page.page.nextCursor;
  }
  return out;
});

/** Posts, newest first, for an index page. */
export async function getPosts(ids: readonly string[]): Promise<Entry<PostFields>[]> {
  if (!cms || !ids.length) return [];
  const wanted = new Set(ids);
  const posts = await cms.all<PostFields>('post', {
    sort: '-publishedAt',
    select: ['publishedAt', 'author', 'excerpt', 'cover'],
    max: 500,
  });
  return posts.filter((p) => wanted.has(p.id));
}

/**
 * Every page of the site.
 *
 * One catch-all: the path is looked up in the library's routes, and what the
 * route shows is rendered through `<Content>`. A marketer adds a page by
 * publishing an entry and a route — no code, no deploy. Paths that existed
 * at build time are prerendered; a new one renders on its first visit
 * (`dynamicParams`) and is cached from then on until a publish revalidates it.
 */
import type { Metadata } from 'next';
import { notFound, permanentRedirect, redirect } from 'next/navigation';
import { Content } from '@forumulate/blocks-react';
import type { Entry } from '@forumulate/next/content';
import { getPosts, getRoutes, getSite, isDraft, resolvePath } from '@/lib/cms';
import { cmsConfig, siteUrl, studioOrigin } from '@/lib/env';
import type { PageFields, RouteFields, Seo } from '@/lib/fields';
import { childRoutes, pathFromSegments, routeIndex, segmentsFromPath } from '@/lib/paths';
import { buildMetadata } from '@/lib/seo';
import { blockOverrides } from '@/components/blocks';
import { LiveContent } from '@/components/LiveContent';
import { PostLayout } from '@/components/PostLayout';
import { PostList } from '@/components/PostList';
import { SetupNotice } from '@/components/SetupNotice';

type Props = { params: Promise<{ path?: string[] }> };

export const dynamicParams = true;

export async function generateStaticParams(): Promise<{ path: string[] }[]> {
  return (await getRoutes()).map((r) => ({ path: segmentsFromPath(r.path) }));
}

async function load(props: Props) {
  const path = pathFromSegments((await props.params).path);
  return { path, hit: cmsConfig ? await resolvePath(path) : null };
}

const seoOf = (e: Entry | undefined) => (e?.fields as { seo?: Seo } | undefined)?.seo ?? null;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { path, hit } = await load(props);
  if (!hit || hit.kind !== 'entry') return {};
  const route = hit.route as Entry<RouteFields> | undefined;
  return buildMetadata({
    site: (await getSite())?.fields ?? null,
    routeSeo: route?.fields.seo ?? null,
    entrySeo: seoOf(hit.entry),
    entryTitle: hit.entry.title ?? null,
    entryDescription: (hit.entry.fields as { excerpt?: string }).excerpt ?? null,
    path,
    siteUrl,
  });
}

export default async function CatchAll(props: Props) {
  if (!cmsConfig) return <SetupNotice />;
  const { path, hit } = await load(props);
  if (!hit) notFound();
  if (hit.kind === 'redirect') {
    // Rules from the library's redirect table (spec 3.7.6): a moved page's old
    // path keeps its search ranking with a permanent redirect.
    if (hit.status === 301 || hit.status === 308) permanentRedirect(hit.to);
    redirect(hit.to);
  }
  const entry = hit.entry;
  const route = hit.route as Entry<RouteFields> | undefined;
  const [routes, draft] = await Promise.all([getRoutes(), isDraft()]);
  const links = routeIndex(routes);
  const blocks = (entry.fields as PageFields).blocks ?? [];
  const first = blocks[0];
  const posts = entry.type === 'page' ? await getPosts(childRoutes(routes, path, 'post').map((r) => r.entry!.id)) : [];
  // A page whose first block is not a hero still needs one `<h1>`.
  const needsHeading = entry.type === 'page' && first?.blockType !== 'hero';
  return (
    <div className={`layout layout--${route?.fields.layout ?? 'default'}`}>
      {needsHeading && <h1 className="visually-hidden">{entry.title}</h1>}
      {draft && studioOrigin ? (
        // Previewing: the studio's unsaved edits arrive live (and the
        // click-to-edit bridge runs) only inside a draft-mode session.
        <LiveContent entry={entry} routes={[...links]} studioOrigin={studioOrigin} />
      ) : (
        <Content
          entry={entry}
          preview={draft}
          overrides={{
            blocks: blockOverrides(links, first?.blockType === 'hero' ? (first.id ?? null) : null),
            contentTypes: { post: PostLayout },
          }}
        />
      )}
      <PostList posts={posts} routes={links} />
    </div>
  );
}

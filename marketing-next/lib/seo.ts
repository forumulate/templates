/**
 * The `<head>` of a routed page, from three layers of the content (spec 3.8):
 * the route's `seo` overrides the entry's, which overrides the site's
 * defaults. Pure (test/seo.test.ts) — the precedence is the part that is
 * easy to get backwards.
 */
import type { Metadata } from 'next';
import type { Seo, SiteFields } from './fields';

export interface MetadataInput {
  site: SiteFields | null;
  /** The route's own `seo` (an override for this path only). */
  routeSeo?: Seo | null;
  /** The entry's `seo`. */
  entrySeo?: Seo | null;
  /** The entry's title, the last resort for `<title>`. */
  entryTitle?: string | null;
  /** A summary the entry already has (a post's excerpt), before the site's default description. */
  entryDescription?: string | null;
  path: string;
  /** This site's public origin, for canonical URLs. */
  siteUrl?: string | null;
}

const pick = <K extends keyof Seo>(key: K, ...layers: (Seo | null | undefined)[]): Seo[K] | undefined => {
  for (const l of layers) {
    const v = l?.[key];
    if (v !== undefined && v !== null && v !== '') return v;
  }
  return undefined;
};

export function buildMetadata(input: MetadataInput): Metadata {
  const { site, routeSeo, entrySeo, entryTitle, entryDescription, path, siteUrl } = input;
  const defaults = site?.seo ?? null;
  const name = site?.name?.trim() || undefined;
  const ownTitle = pick('title', routeSeo, entrySeo) ?? (entryTitle?.trim() || undefined);
  // The home page usually IS the brand; elsewhere the brand follows the page.
  const title = ownTitle ? (name && path !== '/' ? `${ownTitle} · ${name}` : ownTitle) : (pick('title', defaults) ?? name);
  const description =
    pick('description', routeSeo, entrySeo) ?? (entryDescription?.trim() || undefined) ?? pick('description', defaults);
  const image = pick('image', routeSeo, entrySeo, defaults);
  const noindex = pick('noindex', routeSeo, entrySeo) ?? false;
  const canonical = pick('canonical', routeSeo, entrySeo) ?? (siteUrl ? new URL(path, siteUrl).toString() : undefined);
  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    ...(canonical ? { alternates: { canonical } } : {}),
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      ...(name ? { siteName: name } : {}),
      ...(image?.url ? { images: [{ url: image.url, ...(image.width ? { width: image.width } : {}), ...(image.height ? { height: image.height } : {}), ...(image.alt ? { alt: image.alt } : {}) }] } : {}),
    },
  };
}

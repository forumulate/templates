import type { MetadataRoute } from 'next';
import { getRoutes } from '@/lib/cms';
import { siteUrl } from '@/lib/env';

/** Every live route. Regenerated with the route table: the same tag revalidates both. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const origin = siteUrl;
  if (!origin) return [];
  return (await getRoutes()).map((r) => ({ url: new URL(r.path, origin).toString(), lastModified: r.updatedAt }));
}

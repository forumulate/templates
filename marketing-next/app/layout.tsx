import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { getFooter, getHeader, getRoutes, getSite, isDraft, menuOf } from '@/lib/cms';
import { cmsConfig, siteUrl } from '@/lib/env';
import { routeIndex } from '@/lib/paths';
import { buildMetadata } from '@/lib/seo';
import { PreviewBanner } from '@/components/PreviewBanner';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import './globals.css';

/** Site-wide defaults from the `site` global; each page's own metadata layers over them. */
export async function generateMetadata(): Promise<Metadata> {
  const site = (await getSite())?.fields ?? null;
  const base = buildMetadata({ site, path: '/', siteUrl });
  const name = site?.name || 'Your site';
  return {
    ...base,
    ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
    title: { default: (base.title as string | undefined) ?? name, template: `%s` },
    ...(site?.favicon?.url ? { icons: { icon: site.favicon.url } } : {}),
  };
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  // The header and footer are content too: menus, the button, the
  // announcement and the small print all come from globals, so a menu change
  // is a publish, never a deploy.
  const [site, header, footer, routes, draft] = await Promise.all([getSite(), getHeader(), getFooter(), getRoutes(), isDraft()]);
  const [mainMenu, footerMenu] = await Promise.all([menuOf(header?.fields.menu), menuOf(footer?.fields.menu)]);
  const links = routeIndex(routes);
  return (
    <html lang="en">
      <body>
        {draft && <PreviewBanner />}
        {cmsConfig && <SiteHeader site={site?.fields ?? null} header={header?.fields ?? null} menu={mainMenu} routes={links} />}
        <main id="main">{children}</main>
        {cmsConfig && <SiteFooter site={site?.fields ?? null} footer={footer?.fields ?? null} menu={footerMenu} routes={links} />}
      </body>
    </html>
  );
}

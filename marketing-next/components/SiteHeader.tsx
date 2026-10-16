import Link from 'next/link';
import { FmImage } from '@forumulate/blocks-react';
import type { HeaderFields, MenuFields, SiteFields } from '@/lib/fields';
import { MenuList } from './Menu';
import { SmartLink } from './SmartLink';

export function SiteHeader({
  site,
  header,
  menu,
  routes,
}: {
  site: SiteFields | null;
  header: HeaderFields | null;
  menu: MenuFields | null;
  routes: ReadonlyMap<string, string>;
}) {
  const name = site?.name || 'Your site';
  const announcement = site?.announcement;
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {announcement?.enabled && announcement.message && (
        <div className="announcement" role="region" aria-label="Announcement">
          <SmartLink link={announcement.link ?? null} routes={routes}>
            {announcement.message}
          </SmartLink>
        </div>
      )}
      <header className="site-header">
        <div className="container site-header__inner">
          <Link href="/" className="brand" aria-label={`${name} home`}>
            {site?.logo?.url ? <FmImage media={site.logo} sizes="160px" className="brand__logo" alt={name} /> : name}
          </Link>
          <nav aria-label="Main" className="site-nav">
            <MenuList items={menu?.items ?? []} routes={routes} className="site-nav__list" />
          </nav>
          {header?.cta && <SmartLink link={header.cta} routes={routes} className="button button--primary site-header__cta" />}
        </div>
      </header>
    </>
  );
}

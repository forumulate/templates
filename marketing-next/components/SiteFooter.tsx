import type { FooterFields, MenuFields, SiteFields } from '@/lib/fields';
import { MenuList } from './Menu';

export function SiteFooter({
  site,
  footer,
  menu,
  routes,
}: {
  site: SiteFields | null;
  footer: FooterFields | null;
  menu: MenuFields | null;
  routes: ReadonlyMap<string, string>;
}) {
  const social = (site?.social ?? []).filter((s) => s.url && /^https?:/i.test(s.url));
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <nav aria-label="Footer">
          <MenuList items={menu?.items ?? []} routes={routes} className="footer-menu" />
        </nav>
        {social.length > 0 && (
          <ul className="social" aria-label="Social links">
            {social.map((s, i) => (
              <li key={s.id ?? i}>
                <a href={s.url} rel="me noopener noreferrer" target="_blank">
                  {s.network}
                </a>
              </li>
            ))}
          </ul>
        )}
        {footer?.note && <p className="site-footer__note">{footer.note}</p>}
        {footer?.copyright && <p className="site-footer__copyright">{footer.copyright}</p>}
      </div>
    </footer>
  );
}

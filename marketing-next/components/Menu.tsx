import type { MenuItem } from '@/lib/fields';
import { SmartLink } from './SmartLink';

/**
 * A menu's rows as nested lists, to the template's depth of 3. Children open
 * on hover and on keyboard focus (`:focus-within` in globals.css), so a
 * keyboard user reaches every link with Tab and no script runs.
 */
export function MenuList({ items, routes, className }: { items: MenuItem[]; routes: ReadonlyMap<string, string>; className?: string }) {
  if (!items.length) return null;
  return (
    <ul className={className}>
      {items.map((item, i) => (
        <li key={item.id ?? i} className={item.children?.length ? 'has-children' : undefined}>
          <SmartLink link={item.link ? { ...item.link, label: item.label ?? item.link.label } : null} routes={routes} fallback={item.label} />
          {item.children?.length ? <MenuList items={item.children} routes={routes} className="submenu" /> : null}
        </li>
      ))}
    </ul>
  );
}

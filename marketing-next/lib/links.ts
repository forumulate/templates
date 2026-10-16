/**
 * Link fields → hrefs. Pure (test/links.test.ts).
 *
 * A `link` that points at an entry stores the entry's id, not its path, so a
 * page moved to a new path keeps every menu item and button that points at
 * it. The path comes from wherever delivery already has it: the populated
 * entry's `route`, else the route table this site loaded once per request.
 */
import type { Link } from './fields';

/** Schemes a visitor may be sent to. Anything else (`javascript:`, `data:`) is dropped, not rendered. */
const SAFE = /^(https?:|mailto:|tel:)/i;

export function hrefOf(link: Link | null | undefined, routes: ReadonlyMap<string, string>): string | null {
  if (!link || typeof link !== 'object') return null;
  if (link.type === 'reference' || (!link.type && link.reference)) {
    const ref = link.reference;
    if (!ref || typeof ref.id !== 'string') return null;
    const routed = typeof ref.route === 'string' && ref.route ? ref.route : routes.get(ref.id);
    return routed ?? null;
  }
  const url = typeof link.url === 'string' ? link.url.trim() : '';
  if (!url) return null;
  if (url.startsWith('/') && !url.startsWith('//')) return url;
  if (url.startsWith('#') || SAFE.test(url)) return url;
  return null;
}

/** The words on the link: its own label, else the target entry's title, else the fallback. */
export function labelOf(link: Link | null | undefined, fallback = ''): string {
  if (!link) return fallback;
  if (link.label?.trim()) return link.label.trim();
  const title = link.reference && typeof link.reference.title === 'string' ? link.reference.title : '';
  return title || fallback;
}

/** Off-site links open as the editor asked; we add `noopener` whenever a new tab is involved. */
export function linkTargetProps(link: Link | null | undefined): { target?: string; rel?: string } {
  return link?.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {};
}

export function isExternal(href: string): boolean {
  return /^https?:/i.test(href);
}

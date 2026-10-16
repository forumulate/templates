/**
 * Paths, as the catch-all sees them. Pure, so the rules a 404 or a listing
 * hangs on are tested without a server (test/paths.test.ts).
 */
import type { RouteSummary } from './fields';

/**
 * `[[...path]]` params → the site path the API resolves. Segments arrive
 * percent-encoded from Next; the route table stores the decoded spelling.
 */
export function pathFromSegments(segments: readonly string[] | undefined): string {
  if (!segments?.length) return '/';
  const decoded = segments.map((s) => {
    try {
      return decodeURIComponent(s);
    } catch {
      // A malformed escape is a path nobody can have routed; resolve it as typed and let it 404.
      return s;
    }
  });
  return `/${decoded.filter(Boolean).join('/')}`;
}

/** The inverse, for `generateStaticParams`: `/` is the empty catch-all. */
export function segmentsFromPath(path: string): string[] {
  return path.split('/').filter(Boolean);
}

/** `/blog/launch` → `/blog`; `/pricing` → `/`; `/` → null. */
export function parentPath(path: string): string | null {
  if (path === '/' || !path.startsWith('/')) return null;
  const cut = path.lastIndexOf('/');
  return cut <= 0 ? '/' : path.slice(0, cut);
}

/**
 * The routes directly under `path` that show entries of `type`, in table order.
 *
 * This is how a page becomes an index without a "post list" block: put the
 * posts at `/blog/<slug>` and the page at `/blog` lists them. The editor
 * decides the structure by choosing paths, and the site needs no code per
 * section — a `/news` page over `/news/<slug>` posts works the same day.
 */
export function childRoutes(routes: readonly RouteSummary[], path: string, type: string): RouteSummary[] {
  return routes.filter((r) => r.entry?.type === type && r.path !== path && parentPath(r.path) === path);
}

/** Every routed entry id → its path, for links that name an entry instead of a URL. */
export function routeIndex(routes: readonly RouteSummary[]): Map<string, string> {
  const out = new Map<string, string>();
  for (const r of routes) if (r.entry && !out.has(r.entry.id)) out.set(r.entry.id, r.path);
  return out;
}

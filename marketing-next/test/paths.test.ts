import { describe, expect, it } from 'vitest';
import { childRoutes, parentPath, pathFromSegments, routeIndex, segmentsFromPath } from '../lib/paths';
import type { RouteSummary } from '../lib/fields';

const r = (path: string, type: string | null, id = path): RouteSummary => ({
  id: `r${path}`,
  path,
  entry: type ? { id, type } : null,
  title: null,
  layout: null,
  updatedAt: '2026-10-15T00:00:00.000Z',
});

describe('catch-all paths', () => {
  it('maps the optional catch-all to site paths and back', () => {
    expect(pathFromSegments(undefined)).toBe('/');
    expect(pathFromSegments([])).toBe('/');
    expect(pathFromSegments(['blog', 'launch'])).toBe('/blog/launch');
    expect(pathFromSegments(['caf%C3%A9'])).toBe('/café');
    // A broken escape resolves as typed (and 404s) instead of throwing a 500.
    expect(pathFromSegments(['%E0%A4%A'])).toBe('/%E0%A4%A');
    expect(segmentsFromPath('/')).toEqual([]);
    expect(segmentsFromPath('/blog/launch')).toEqual(['blog', 'launch']);
  });

  it('finds a path’s parent', () => {
    expect(parentPath('/')).toBeNull();
    expect(parentPath('/pricing')).toBe('/');
    expect(parentPath('/blog/launch')).toBe('/blog');
    expect(parentPath('relative')).toBeNull();
  });

  it('lists only the direct children of the asked type', () => {
    const routes = [r('/blog', 'page'), r('/blog/a', 'post'), r('/blog/b', 'post'), r('/blog/2026/c', 'post'), r('/blog/about', 'page'), r('/news/x', 'post'), r('/blog/gone', null)];
    expect(childRoutes(routes, '/blog', 'post').map((x) => x.path)).toEqual(['/blog/a', '/blog/b']);
    expect(childRoutes(routes, '/', 'page').map((x) => x.path)).toEqual(['/blog']);
  });

  it('indexes entry ids to their first path', () => {
    const idx = routeIndex([r('/a', 'page', 'e1'), r('/b', 'page', 'e1'), r('/c', null)]);
    expect(idx.get('e1')).toBe('/a');
    expect(idx.size).toBe(1);
  });
});

import { describe, expect, it } from 'vitest';
import { buildMetadata } from '../lib/seo';
import { readCmsConfig } from '../lib/env';

const site = { name: 'Brightfield', seo: { title: 'Brightfield — analytics', description: 'Default description' } };

describe('metadata precedence: route over entry over site', () => {
  it('uses the route’s override, then the entry’s, then the defaults', () => {
    const m = buildMetadata({ site, routeSeo: { title: 'Route title' }, entrySeo: { title: 'Entry title', description: 'Entry desc' }, path: '/pricing', siteUrl: 'https://b.example' });
    expect(m.title).toBe('Route title · Brightfield');
    expect(m.description).toBe('Entry desc');
    expect(m.alternates).toEqual({ canonical: 'https://b.example/pricing' });
  });

  it('falls back to the entry title, and the home page is not suffixed', () => {
    expect(buildMetadata({ site, entryTitle: 'About', path: '/about' }).title).toBe('About · Brightfield');
    expect(buildMetadata({ site, entryTitle: 'Home', path: '/' }).title).toBe('Home');
    expect(buildMetadata({ site, path: '/' }).title).toBe('Brightfield — analytics');
    expect(buildMetadata({ site, path: '/x' }).description).toBe('Default description');
    // A post's excerpt says more about the post than the site's tagline does.
    expect(buildMetadata({ site, entryDescription: 'The excerpt', path: '/blog/a' }).description).toBe('The excerpt');
    expect(buildMetadata({ site, entrySeo: { description: 'Own' }, entryDescription: 'The excerpt', path: '/blog/a' }).description).toBe('Own');
  });

  it('noindex and canonical come from the page, never the site defaults', () => {
    const m = buildMetadata({ site: { ...site, seo: { ...site.seo, noindex: true } }, entrySeo: { canonical: 'https://elsewhere.example/a' }, path: '/a' });
    expect(m.robots).toBeUndefined();
    expect(m.alternates).toEqual({ canonical: 'https://elsewhere.example/a' });
    expect(buildMetadata({ site, routeSeo: { noindex: true }, path: '/a' }).robots).toEqual({ index: false, follow: true });
  });
});

describe('connection config', () => {
  const id = '0f8fad5b-d9cb-469f-a165-70867728950e';
  it('is null until both the library and a key are set', () => {
    expect(readCmsConfig({})).toBeNull();
    expect(readCmsConfig({ FORUMULATE_LIBRARY_ID: id })).toBeNull();
    expect(readCmsConfig({ FORUMULATE_LIBRARY_ID: id, FORUMULATE_DELIVERY_KEY: 'cfd_x' })).toEqual({
      library: id,
      key: 'cfd_x',
      baseUrl: 'https://forumulate.com/api',
    });
  });
  it('refuses a library slug: webhook tags carry ids, so a slug-configured site would never update', () => {
    expect(() => readCmsConfig({ FORUMULATE_LIBRARY_ID: 'marketing', FORUMULATE_DELIVERY_KEY: 'cfd_x' })).toThrow(/uuid/);
  });
});

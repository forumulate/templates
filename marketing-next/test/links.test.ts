import { describe, expect, it } from 'vitest';
import { hrefOf, labelOf, linkTargetProps } from '../lib/links';

const routes = new Map([['e1', '/pricing']]);

describe('link fields', () => {
  it('sends an entry link to its route: populated route first, then the route table', () => {
    expect(hrefOf({ type: 'reference', reference: { id: 'e1' } }, routes)).toBe('/pricing');
    expect(hrefOf({ type: 'reference', reference: { id: 'e1', route: '/new-pricing' } }, routes)).toBe('/new-pricing');
    // An unrouted or unservable target is no link at all, never a dead href.
    expect(hrefOf({ type: 'reference', reference: { id: 'e2' } }, routes)).toBeNull();
    expect(hrefOf({ type: 'reference', reference: null }, routes)).toBeNull();
  });

  it('keeps safe URLs and drops the rest', () => {
    for (const ok of ['/about', '#top', 'https://x.example', 'mailto:a@b.example', 'tel:+15551234'])
      expect(hrefOf({ type: 'url', url: ok }, routes), ok).toBe(ok);
    for (const bad of ['javascript:alert(1)', 'data:text/html,x', '//evil.example', '', 'ftp://x'])
      expect(hrefOf({ type: 'url', url: bad }, routes), bad).toBeNull();
    expect(hrefOf(null, routes)).toBeNull();
  });

  it('labels from the link, then the target’s title, then the fallback', () => {
    expect(labelOf({ label: ' Buy ', reference: { id: 'e1', title: 'Pricing' } })).toBe('Buy');
    expect(labelOf({ type: 'reference', reference: { id: 'e1', title: 'Pricing' } })).toBe('Pricing');
    expect(labelOf({ type: 'url', url: '/x' }, 'More')).toBe('More');
  });

  it('adds noopener whenever a new tab opens', () => {
    expect(linkTargetProps({ newTab: true })).toEqual({ target: '_blank', rel: 'noopener noreferrer' });
    expect(linkTargetProps({})).toEqual({});
  });
});

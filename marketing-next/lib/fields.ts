/**
 * The field values of the website content template (spec 3.8), as delivery
 * serves them. Written by hand to keep this site dependency-free; generate
 * them instead with `forumulate content types` once your model diverges.
 *
 * Every field is optional on purpose: a marketer can publish a draft-quality
 * page, and the site must render what is there rather than crash on what
 * isn't.
 */
import type { Entry, Media } from '@forumulate/next/content';

/** A reference as delivery lays it back: the entry itself (populated), a stub, or null when unservable. */
export type Ref<T = Record<string, unknown>> =
  | (Partial<Entry<T>> & { id: string; kind?: string; contentType?: string })
  | null;

export interface Link {
  type?: 'url' | 'reference';
  url?: string;
  reference?: Ref;
  label?: string;
  newTab?: boolean;
}

export interface Seo {
  title?: string;
  description?: string;
  image?: Media | null;
  noindex?: boolean;
  canonical?: string;
}

export interface MenuItem {
  id?: string;
  label?: string;
  link?: Link | null;
  children?: MenuItem[];
}

export interface MenuFields {
  items?: MenuItem[];
}

export interface SiteFields {
  name?: string;
  logo?: Media | null;
  favicon?: Media | null;
  social?: { id?: string; network?: string; url?: string }[];
  seo?: Seo;
  announcement?: { enabled?: boolean; message?: string; link?: Link | null };
}

export interface HeaderFields {
  menu?: Ref<MenuFields>;
  cta?: Link | null;
}

export interface FooterFields {
  menu?: Ref<MenuFields>;
  note?: string;
  copyright?: string;
}

export interface BlockRow {
  id?: string;
  blockType: string;
  variant?: string | null;
  [field: string]: unknown;
}

export interface PageFields {
  blocks?: BlockRow[];
  seo?: Seo;
}

export interface PostFields {
  publishedAt?: string;
  author?: string;
  excerpt?: string;
  cover?: Media | null;
  body?: { type: 'doc'; content?: unknown[] };
  seo?: Seo;
}

export interface RouteFields {
  path?: string;
  entry?: Ref;
  seo?: Seo;
  layout?: 'default' | 'wide' | 'landing';
  status?: 'active' | 'disabled';
}

/** One row of `GET …/routes`: what the catch-all prerenders and the sitemap lists. */
export interface RouteSummary {
  id: string;
  path: string;
  entry: { id: string; type: string } | null;
  title: string | null;
  layout: string | null;
  updatedAt: string;
}

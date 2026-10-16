/**
 * Draft mode on — the route the studio's Preview button submits to.
 *
 * POST only, with a single-use, ten-minute preview token the editor's own
 * session minted for this library, entry and path. `createPreviewRoute`
 * exchanges it server-side for an hour-long preview credential, keeps that in
 * an httpOnly `Partitioned` cookie (the site is third-party inside the
 * studio's iframe), turns `draftMode()` on and redirects to the path —
 * relative paths only. No shared secret exists to leak: there is nothing in a
 * URL, and the credential reads drafts only while the editor can still read
 * the library.
 */
import { createPreviewRoute } from '@forumulate/next/content';
import { cmsConfig } from '@/lib/env';

export const POST = createPreviewRoute({ library: cmsConfig?.library, baseUrl: cmsConfig?.baseUrl });

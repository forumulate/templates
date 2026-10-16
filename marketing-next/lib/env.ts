/**
 * The site's connection to its content library, read once from the
 * environment. `null` when it is not configured, so `next build` succeeds in
 * CI with no secrets and a fresh clone shows how to connect instead of a
 * stack trace.
 */
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export interface CmsConfig {
  library: string;
  key: string;
  baseUrl: string;
}

export function readCmsConfig(env: Record<string, string | undefined>): CmsConfig | null {
  const library = env.FORUMULATE_LIBRARY_ID?.trim();
  const key = env.FORUMULATE_DELIVERY_KEY?.trim();
  if (!library || !key) return null;
  // The ID, never the slug: the publish webhook's cache tags carry library ids,
  // and a site configured by slug would tag every fetch with a name no webhook
  // ever sends — it would render fine and never update.
  if (!UUID.test(library)) {
    throw new Error('FORUMULATE_LIBRARY_ID must be the library id (a uuid), not its slug.');
  }
  return {
    library,
    key,
    baseUrl: env.FORUMULATE_API_URL?.trim() || 'https://forumulate.com/api',
  };
}

export const cmsConfig = readCmsConfig(process.env);

/**
 * The studio's origin: the one window this site's live-preview bridge talks
 * to inside the studio's frame (spec 5 L2). The API's own origin unless the
 * console runs elsewhere (a custom console domain, a local stack).
 */
export function readStudioOrigin(env: Record<string, string | undefined>, baseUrl: string | undefined): string | null {
  const raw = env.FORUMULATE_STUDIO_ORIGIN?.trim() || baseUrl;
  if (!raw) return null;
  try {
    return new URL(raw).origin;
  } catch {
    return null;
  }
}

export const studioOrigin = readStudioOrigin(process.env, cmsConfig?.baseUrl);

export const siteUrl = process.env.SITE_URL?.trim() || null;

/**
 * Seconds a cached read may be served before Next refetches in the
 * background. The publish webhook is what makes edits appear in seconds; this
 * is only the safety net for a webhook that never arrived.
 */
export const REVALIDATE_SECONDS = 300;

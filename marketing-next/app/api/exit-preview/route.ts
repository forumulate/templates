import { createExitPreviewRoute, safeRelativePath } from '@forumulate/next/content';

const exit = createExitPreviewRoute();

/**
 * Leaves draft mode and returns to the posted `path`, or else to the page the
 * banner's button was pressed on (same-origin referrer only), or else home.
 *
 * POST only (the banner is a form button): a GET exit is a URL, and Next
 * prefetches links in the viewport — an "Exit preview" link would end the
 * preview the moment the banner rendered.
 */
export async function POST(request: Request): Promise<Response> {
  const url = new URL(request.url);
  if (!url.searchParams.has('path')) {
    const referrer = request.headers.get('referer');
    let back: string | null = null;
    try {
      const r = referrer ? new URL(referrer) : null;
      if (r && r.origin === url.origin) back = safeRelativePath(r.pathname + r.search);
    } catch {
      back = null;
    }
    if (back) url.searchParams.set('path', back);
  }
  return exit(new Request(url, request));
}

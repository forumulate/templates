/**
 * The publish webhook's receiver. Point a `content.*` webhook of the library
 * at `https://<this site>/api/revalidate` and set its signing secret as
 * FORUMULATE_WEBHOOK_SECRET.
 *
 * Tags do the work: each fetch was tagged with the API's cache tags, and the
 * delivery names the ones a publish made stale (the entry's, its type's, and
 * every entry that references it). The paths are revalidated too, for one
 * case tags cannot reach: a path that 404ed before its route existed was
 * cached as a 404 page, and only its path names it.
 */
import { revalidatePath } from 'next/cache';
import { createRevalidateHandler, safeRelativePath } from '@forumulate/next/content';

let handler: ((request: Request) => Promise<Response>) | null = null;

export async function POST(request: Request): Promise<Response> {
  const secret = process.env.FORUMULATE_WEBHOOK_SECRET?.trim();
  // Built lazily: `createRevalidateHandler` refuses an empty secret, and
  // `next build` loads this module with no environment at all.
  if (!secret) return Response.json({ error: 'not_configured' }, { status: 503 });
  handler ??= createRevalidateHandler({
    secret,
    onRevalidate(result) {
      for (const p of result.paths) {
        const path = safeRelativePath(p);
        if (path) revalidatePath(path.split(/[?#]/, 1)[0]!);
      }
    },
  });
  return handler(request);
}

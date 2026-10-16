/**
 * Shown on every page while draft mode is on, so nobody mistakes a draft for
 * the live site. Exit is a form button, not a link: the exit route is POST
 * only (a link would be prefetched and end the preview on sight). It returns
 * to the page it was pressed on (the route reads the referrer), with no
 * script on the page.
 */
export function PreviewBanner() {
  return (
    <form className="preview-banner" role="status" method="post" action="/api/exit-preview">
      You are previewing drafts. <button type="submit">Exit preview</button>
    </form>
  );
}

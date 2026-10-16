import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Link as LinkValue } from '@/lib/fields';
import { hrefOf, isExternal, labelOf, linkTargetProps } from '@/lib/links';

/**
 * A `link` field rendered as an anchor: `next/link` for on-site paths (client
 * navigation and prefetch), a plain `<a>` for everything else. A link whose
 * target cannot be served (an unpublished page, an unsafe URL) renders its
 * words without an anchor rather than a dead `href`.
 */
export function SmartLink({
  link,
  routes,
  className,
  fallback,
  children,
}: {
  link: LinkValue | null | undefined;
  routes: ReadonlyMap<string, string>;
  className?: string;
  fallback?: string;
  children?: ReactNode;
}) {
  const href = hrefOf(link, routes);
  const body = children ?? labelOf(link, fallback);
  if (!href) return body ? <span className={className}>{body}</span> : null;
  const target = linkTargetProps(link);
  if (isExternal(href) || target.target || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a href={href} className={className} {...target}>
        {body}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {body}
    </Link>
  );
}

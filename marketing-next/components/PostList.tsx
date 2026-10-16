import Link from 'next/link';
import { formatDate } from '@forumulate/blocks-react';
import type { Entry } from '@forumulate/next/content';
import type { PostFields } from '@/lib/fields';

/** The posts routed under an index page, newest first. */
export function PostList({ posts, routes }: { posts: Entry<PostFields>[]; routes: ReadonlyMap<string, string> }) {
  if (!posts.length) return null;
  return (
    <section className="container post-list" aria-label="Posts">
      <ul>
        {posts.map((p) => {
          const href = routes.get(p.id);
          if (!href) return null;
          const date = formatDate(p.fields.publishedAt ?? p.publishedAt ?? undefined);
          return (
            <li key={p.id} className="post-card">
              <h2 className="post-card__title">
                <Link href={href}>{p.title ?? p.slug}</Link>
              </h2>
              <p className="post-card__meta">
                {date && <time dateTime={p.fields.publishedAt}>{date}</time>}
                {p.fields.author && <span> · {p.fields.author}</span>}
              </p>
              {p.fields.excerpt && <p className="post-card__excerpt">{p.fields.excerpt}</p>}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

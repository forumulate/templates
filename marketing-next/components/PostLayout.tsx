import type { EntryOverrideProps } from '@forumulate/blocks-react';
import { FmImage, RichText, formatDate } from '@forumulate/blocks-react';
import type { PostFields } from '@/lib/fields';

/**
 * A post, as an override of `<Content>` for the `post` type: the site lays out
 * the article, and the body still renders through the same rich-text renderer
 * the hosted reader uses.
 */
export function PostLayout({ entry }: EntryOverrideProps) {
  const f = entry.fields as PostFields;
  const date = formatDate(f.publishedAt ?? (entry.publishedAt as string | undefined));
  return (
    <article className="post container container--narrow">
      <header className="post__header">
        <h1 className="post__title">{(entry.title as string | undefined) ?? entry.slug as string}</h1>
        <p className="post__meta">
          {date && <time dateTime={f.publishedAt}>{date}</time>}
          {f.author && <span> · {f.author}</span>}
        </p>
        {f.excerpt && <p className="post__excerpt">{f.excerpt}</p>}
      </header>
      {f.cover?.url && <FmImage media={f.cover} priority sizes="(min-width: 760px) 720px, 100vw" className="post__cover" />}
      <div className="prose">
        <RichText doc={f.body as Parameters<typeof RichText>[0]['doc']} />
      </div>
    </article>
  );
}

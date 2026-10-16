/**
 * This site's components for the website template's block types.
 *
 * `<Content>` would render every block on its own (built-in blocks with the
 * hosted reader's markup, other types field by field). A marketing site wants
 * its own design system, so each block type the template declares is
 * overridden here — and a block type an editor adds later still renders,
 * through `<Content>`'s default, until somebody writes a component for it.
 */
import type { BlockOverrideProps, ContentOverrides } from '@forumulate/blocks-react';
import { FmImage, RichText, fieldAttrs } from '@forumulate/blocks-react';
import type { Media } from '@forumulate/next/content';
import type { Link as LinkValue } from '@/lib/fields';
import { SmartLink } from '../SmartLink';

type Row = BlockOverrideProps['block'];

const str = (v: unknown) => (typeof v === 'string' && v.trim() ? v : null);
const media = (v: unknown) => (v && typeof v === 'object' && typeof (v as Media).url === 'string' ? (v as Media) : null);
const rows = <T,>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);

/** `data-fm-field` in preview (click-to-edit), nothing in production. */
type Attrs = BlockOverrideProps['attrs'];

function Hero({ block, attrs, routes, first }: { block: Row; attrs: Attrs; routes: ReadonlyMap<string, string>; first: boolean }) {
  const image = media(block.image);
  const ctas = rows<{ id?: string; label?: string; link?: LinkValue }>(block.ctas);
  const split = block.variant === 'split' && image;
  const Heading = first ? 'h1' : 'h2';
  return (
    <section className={`hero${split ? ' hero--split' : ''}`} {...attrs}>
      <div className="hero__text">
        <Heading className="hero__heading">{str(block.heading)}</Heading>
        {str(block.subheading) && <p className="hero__sub">{str(block.subheading)}</p>}
        {ctas.length > 0 && (
          <div className="hero__ctas">
            {ctas.map((c, i) => (
              <SmartLink
                key={c.id ?? i}
                link={c.link ? { ...c.link, label: c.label ?? c.link.label } : null}
                routes={routes}
                className={i === 0 ? 'button button--primary' : 'button'}
                fallback={c.label}
              />
            ))}
          </div>
        )}
      </div>
      {image && (
        <div className="hero__media">
          <FmImage media={image} priority={first} sizes={split ? '(min-width: 900px) 50vw, 100vw' : '100vw'} />
        </div>
      )}
    </section>
  );
}

/** The block's own address, for marking the fields inside it (click-to-edit). */
type At = Pick<BlockOverrideProps, 'entryId' | 'path' | 'preview'>;

function Features({ block, attrs, at }: { block: Row; attrs: Attrs; at: At }) {
  const items = rows<{ id?: string; title?: string; body?: string; icon?: Media }>(block.items);
  // Each item's fields by row id: on the pricing page these are the tiers, and
  // double-clicking a tier's name in the studio opens exactly that field.
  const mark = (item: { id?: string }, key: string) =>
    item.id ? fieldAttrs(at.entryId, [...at.path, 'items', { id: item.id }, key], at.preview) : {};
  return (
    <section className="features" {...attrs}>
      {str(block.heading) && <h2 className="section-heading">{str(block.heading)}</h2>}
      <ul className="features__grid">
        {items.map((item, i) => (
          <li key={item.id ?? i} className="feature">
            {media(item.icon) && <FmImage media={media(item.icon)} sizes="48px" className="feature__icon" />}
            <h3 className="feature__title" {...mark(item, 'title')}>
              {item.title}
            </h3>
            {str(item.body) && (
              <p className="feature__body" {...mark(item, 'body')}>
                {item.body}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Cta({ block, attrs, routes }: { block: Row; attrs: Attrs; routes: ReadonlyMap<string, string> }) {
  return (
    <section className="cta" {...attrs}>
      <h2 className="cta__heading">{str(block.heading)}</h2>
      {str(block.body) && <p className="cta__body">{str(block.body)}</p>}
      <SmartLink link={block.link as LinkValue} routes={routes} className="button button--primary" fallback="Learn more" />
    </section>
  );
}

function Text({ block, attrs }: { block: Row; attrs: Attrs }) {
  return (
    <section className="prose" {...attrs}>
      <RichText doc={block.body as Parameters<typeof RichText>[0]['doc']} />
    </section>
  );
}

function Picture({ block, attrs }: { block: Row; attrs: Attrs }) {
  const image = media(block.image);
  if (!image) return null;
  return (
    <figure className="picture" {...attrs}>
      <FmImage media={image} sizes="(min-width: 1100px) 1040px, 100vw" />
      {str(block.caption) && <figcaption>{str(block.caption)}</figcaption>}
    </figure>
  );
}

/**
 * The overrides for one page render. A closure, not a module constant,
 * because buttons need the route table (an entry link stores an id) and the
 * first hero needs to know it is the page's `<h1>`.
 */
/**
 * The field each component cannot draw without. A block of the same NAME but
 * another shape — an imported Payload `cta` holds `richText`, not `heading` —
 * is not this template's, so it gets `<Content>`'s own rendering (`children`)
 * instead of an empty heading and a "Learn more" pointing nowhere.
 */
const SHAPE: Record<string, string> = { hero: 'heading', features: 'items', cta: 'heading', text: 'body', image: 'image' };
const ours = (block: Row) => block[SHAPE[block.blockType] ?? ''] !== undefined;

export function blockOverrides(routes: ReadonlyMap<string, string>, firstBlockId: string | null): ContentOverrides['blocks'] {
  return {
    hero: ({ block, attrs, children }) =>
      ours(block) ? <Hero block={block} attrs={attrs} routes={routes} first={!!block.id && block.id === firstBlockId} /> : children,
    features: ({ block, attrs, entryId, path, preview, children }) =>
      ours(block) ? <Features block={block} attrs={attrs} at={{ entryId, path, preview }} /> : children,
    cta: ({ block, attrs, children }) => (ours(block) ? <Cta block={block} attrs={attrs} routes={routes} /> : children),
    text: ({ block, attrs, children }) => (ours(block) ? <Text block={block} attrs={attrs} /> : children),
    image: ({ block, attrs, children }) => (ours(block) ? <Picture block={block} attrs={attrs} /> : children),
  };
}

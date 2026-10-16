/**
 * A few builders for the block document (`{ type: 'doc', content }`) that
 * `richText` fields hold, so the sample copy in ./content.mjs reads as copy.
 */
export const text = (t, marks) => ({ type: 'text', text: t, ...(marks ? { marks } : {}) });
export const bold = (t) => text(t, [{ type: 'bold' }]);
export const link = (t, href) => text(t, [{ type: 'link', attrs: { href } }]);
export const p = (...parts) => ({ type: 'paragraph', content: parts.map((x) => (typeof x === 'string' ? text(x) : x)) });
export const h2 = (t) => ({ type: 'heading', attrs: { level: 2 }, content: [text(t)] });
export const h3 = (t) => ({ type: 'heading', attrs: { level: 3 }, content: [text(t)] });
export const ul = (...items) => ({
  type: 'bulletList',
  content: items.map((i) => ({ type: 'listItem', content: [typeof i === 'string' ? p(i) : i] })),
});
export const quote = (t) => ({ type: 'blockquote', content: [p(t)] });
export const doc = (...content) => ({ type: 'doc', content });

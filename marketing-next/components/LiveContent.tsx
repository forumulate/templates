'use client';
/**
 * The page's content while previewing inside the studio (spec 5 L2): the
 * same `<Content>` and the same block components as the published page, with
 * the editor's unsaved edits merged in as they type (`useLivePreview`).
 *
 * Rendered only in draft mode — the published page renders `<Content>` on the
 * server and ships none of this. The route table crosses the server/client
 * line as pairs because a Map is not serialisable.
 */
import { Content } from '@forumulate/blocks-react';
import { useLivePreview } from '@forumulate/next/live-preview';
import type { Entry } from '@forumulate/next/content';
import { useMemo } from 'react';
import { blockOverrides } from './blocks';
import { PostLayout } from './PostLayout';

export function LiveContent({
  entry,
  routes,
  studioOrigin,
}: {
  entry: Entry;
  routes: [string, string][];
  studioOrigin: string;
}) {
  const live = useLivePreview(entry, { studioOrigin });
  const links = useMemo(() => new Map(routes), [routes]);
  const blocks = ((live.fields as { blocks?: { id?: string; blockType?: string }[] }).blocks ?? []);
  const first = blocks[0];
  return (
    <Content
      entry={live}
      preview
      overrides={{
        blocks: blockOverrides(links, first?.blockType === 'hero' ? (first.id ?? null) : null),
        contentTypes: { post: PostLayout },
      }}
    />
  );
}

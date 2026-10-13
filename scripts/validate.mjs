#!/usr/bin/env node
// Every template listed in index.json must have a parseable template.json and
// bundle.json whose id matches its folder, and every asset and thumbnail it
// names must exist. Run by CI on every push.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const problems = [];
const { templates } = JSON.parse(readFileSync(join(root, 'index.json'), 'utf8'));
for (const id of templates) {
  const dir = join(root, id);
  let manifest;
  try {
    manifest = JSON.parse(readFileSync(join(dir, 'template.json'), 'utf8'));
    JSON.parse(readFileSync(join(dir, 'bundle.json'), 'utf8'));
  } catch (err) {
    problems.push(`${id}: ${err.message}`);
    continue;
  }
  if (manifest.id !== id) problems.push(`${id}: template.json id is ${manifest.id}`);
  if (!['BLOG', 'CHANGELOG', 'DOCS', 'FORUM'].includes(manifest.type))
    problems.push(`${id}: unknown type ${manifest.type}`);
  for (const file of Object.values(manifest.assets ?? {}))
    if (!existsSync(join(dir, file))) problems.push(`${id}: missing asset ${file}`);
  if (!['thumbnail.jpg', 'thumbnail.png', 'thumbnail.webp'].some((f) => existsSync(join(dir, f))))
    problems.push(`${id}: missing thumbnail`);
}
if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}
console.log(`${templates.length} templates OK`);

import { describe, expect, it } from 'vitest';
import { readStudioOrigin } from '../lib/env';

describe('studio origin (live preview)', () => {
  it('defaults to the API’s origin', () => {
    expect(readStudioOrigin({}, 'https://forumulate.com/api')).toBe('https://forumulate.com');
  });
  it('takes an explicit console origin, normalised', () => {
    expect(readStudioOrigin({ FORUMULATE_STUDIO_ORIGIN: 'https://Console.example.com/o/1' }, undefined)).toBe('https://console.example.com');
  });
  it('is null when nothing usable is configured', () => {
    expect(readStudioOrigin({}, undefined)).toBeNull();
    expect(readStudioOrigin({ FORUMULATE_STUDIO_ORIGIN: 'not a url' }, undefined)).toBeNull();
  });
});

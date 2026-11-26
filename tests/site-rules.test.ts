// Rules every page must keep, checked on the built site (docs/spec.md, Testing Decisions).
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { builtSite } from './support/built-site.ts';
import { visibleText } from './support/html.ts';

/** Routes from the spec's Pages table that exist so far. Each ticket adds its routes here. */
const routes = ['/', '/404'];

describe('routes', () => {
  for (const route of routes) {
    it(`builds a page for ${route}`, async () => {
      assert.match(await (await builtSite()).page(route), /<html\b/);
    });
  }
});

describe('private details and wording on every page', () => {
  it('never shows a phone number', async () => {
    for (const [route, html] of await (await builtSite()).pages()) {
      assert.doesNotMatch(html, /href="tel:/i, `phone link on ${route}`);
      assert.doesNotMatch(visibleText(html), /\+\s?91|\d(?:[ .()-]?\d){9,}/, `phone-like number on ${route}`);
    }
  });

  it('never names an internal JPMorgan system or team', async () => {
    const internalNames = [/Market Monitor/i, /Flow Monitor/i, /\bCVS\b/, /\bGAP\b/, /\bNADC\b/, /\bSPG\b/];
    for (const [route, html] of await (await builtSite()).pages()) {
      for (const name of internalNames) assert.doesNotMatch(html, name, `${name} on ${route}`);
    }
  });

  it('never describes Gokul as full-stack', async () => {
    for (const [route, html] of await (await builtSite()).pages()) {
      assert.doesNotMatch(html, /full[\s-]?stack/i, route);
    }
  });

  it('says "traders" only in the union-and-intersection Note, where it names a filter field', async () => {
    for (const [route, html] of await (await builtSite()).pages()) {
      if (route === '/notes/union-and-intersection') continue;
      assert.doesNotMatch(html, /\btraders?\b/i, route);
    }
  });
});

describe('fonts', () => {
  it('loads nothing from Google Fonts on any page, stylesheet or script', async () => {
    const site = await builtSite();
    for (const file of (await site.files()).filter((f) => /\.(html|css|js)$/.test(f))) {
      assert.doesNotMatch(await site.text(file), /fonts\.(googleapis|gstatic)\.com/, file);
    }
  });

  it('self-hosts Literata, Kalam and IBM Plex Mono as woff2 files that are in the build', async () => {
    const site = await builtSite();
    const files = await site.files();
    const faces = [...(await site.css()).matchAll(/@font-face\s*{([^}]*)}/g)].map((m) => m[1]);
    const families = new Set(faces.map((face) => /font-family:\s*["']?([^;"']+)/.exec(face)?.[1]));
    assert.deepEqual([...families].sort(), ['IBM Plex Mono', 'Kalam', 'Literata']);
    for (const face of faces) {
      const sources = [...face.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)].map((m) => m[1]);
      assert.ok(sources.length > 0, `@font-face without a src: ${face}`);
      for (const src of sources) {
        assert.match(src, /^\/fonts\/[\w-]+\.woff2$/, src);
        assert.ok(files.includes(src.slice(1)), `${src} is missing from the build`);
      }
    }
  });
});

describe('colour tokens', () => {
  const light = { paper: '#f6f7f5', grid: '#e2e7e6', ink: '#22272b', muted: '#5d656b', pen: '#2346c4', mark: '#ffe46b', wash: '#eef1fb', err: '#b3261e' };
  const dark = { paper: '#15181b', grid: '#20262a', ink: '#e1e5e7', muted: '#99a2a8', pen: '#8eb0ff', mark: '#6a5b10', wash: '#1b2232', err: '#ff8a80' };

  function tokens(css: string): Record<string, string> {
    return Object.fromEntries([...css.matchAll(/--(\w+):\s*(#[0-9a-f]{3,8})/gi)].map((m) => [m[1], m[2].toLowerCase()]));
  }

  it('uses the light palette by default and the dark palette when the visitor prefers dark', async () => {
    const css = await (await builtSite()).css();
    const media = /@media\s*\(\s*prefers-color-scheme:\s*dark\s*\)\s*{\s*:root\s*{([^}]*)}/.exec(css);
    assert.ok(media, 'no :root block under @media (prefers-color-scheme: dark)');
    const outside = css.replace(media[0], '');
    assert.deepEqual(tokens(media[1]), dark);
    assert.deepEqual(
      Object.fromEntries(Object.entries(tokens(outside)).filter(([name]) => name in light)),
      light,
    );
  });
});

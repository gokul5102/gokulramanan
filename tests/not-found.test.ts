import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { builtSite } from './support/built-site.ts';
import { element, links, visibleText } from './support/html.ts';

describe('the 404 page', () => {
  it('says the page is not here and links home', async () => {
    const html = await (await builtSite()).page('/404');
    const main = element(html, 'main');
    assert.equal(visibleText(element(main, 'h1')), "This page isn't here.");
    assert.ok(links(main).some((l) => l.href === '/' && l.text === 'Go to the homepage →'));
  });

  it('keeps the header and footer so the visitor is not stuck', async () => {
    const html = await (await builtSite()).page('/404');
    element(html, 'header');
    element(html, 'footer');
  });
});

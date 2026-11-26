import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { builtSite } from './support/built-site.ts';
import { element, links, visibleText } from './support/html.ts';

describe('the header on every page', () => {
  it('links the name home, lists the sections in order and offers Get in touch', async () => {
    for (const [route, html] of await (await builtSite()).pages()) {
      const header = element(html, 'header');
      assert.deepEqual(
        links(header),
        [
          { href: '/', text: 'Gokul Ramanan' },
          { href: '/work', text: 'Work' },
          { href: '/notes', text: 'Notes' },
          { href: '/about', text: 'About' },
          { href: '/resume', text: 'Résumé' },
          { href: '/contact', text: 'Get in touch' },
        ],
        `header on ${route}`,
      );
    }
  });

  it('marks no section as current on the homepage', async () => {
    const header = element(await (await builtSite()).page('/'), 'header');
    assert.doesNotMatch(header, /aria-current/);
  });
});

describe('the footer on every page', () => {
  it('says hello, shows the email as text, links LinkedIn, GitHub and the Résumé PDF, and ends with the colophon', async () => {
    for (const [route, html] of await (await builtSite()).pages()) {
      const footer = element(html, 'footer');
      assert.equal(visibleText(element(footer, 'h2')), 'Say hello.', `heading on ${route}`);
      assert.match(footer, /<span class="email">gokulr5102@gmail\.com<\/span>/, `email on ${route}`);
      assert.deepEqual(
        links(footer),
        [
          { href: 'https://www.linkedin.com/in/gokul-ramanan1', text: 'LinkedIn' },
          { href: 'https://github.com/gokul5102', text: 'GitHub' },
          { href: '/resume.pdf', text: 'Résumé (PDF)' },
        ],
        `links on ${route}`,
      );
      assert.match(
        visibleText(footer),
        /Built with Astro, hosted on Netlify\. © \d{4} Gokul Ramanan\.$/,
        `colophon on ${route}`,
      );
    }
  });

  it('has no freelance line and no reply-time promise at launch', async () => {
    for (const [route, html] of await (await builtSite()).pages()) {
      const text = visibleText(element(html, 'footer'));
      assert.doesNotMatch(text, /freelance/i, route);
      assert.doesNotMatch(text, /reply within|within \d+ (hours|days)|get back to you/i, route);
    }
  });
});

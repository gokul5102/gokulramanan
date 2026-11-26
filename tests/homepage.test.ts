import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { builtSite } from './support/built-site.ts';
import { element, links, visibleText } from './support/html.ts';

describe('the homepage hero', () => {
  it('shows the eyebrow with role, employer and city', async () => {
    const html = await (await builtSite()).page('/');
    assert.match(visibleText(html), /Software engineer at JPMorgan Chase · Mumbai/);
  });

  it('shows the headline with only "real-time systems" highlighted', async () => {
    const html = await (await builtSite()).page('/');
    const h1 = element(html, 'h1');
    assert.equal(visibleText(h1), 'I build real-time systems for internal sales teams and external clients.');
    assert.equal(visibleText(element(h1, 'mark')), 'real-time systems');
    assert.equal(html.match(/<mark\b/g)?.length, 1);
  });

  it('shows the agreed intro', async () => {
    const text = visibleText(await (await builtSite()).page('/'));
    assert.ok(
      text.includes(
        "I'm a backend engineer. I work on live data streaming and alerting, with a focus on low latency and high availability: apps that respond fast and keep running when something fails. I use AI coding tools to assist with my daily workflows.",
      ),
    );
  });

  it('shows both Margin notes in the margin beside the text', async () => {
    const html = await (await builtSite()).page('/');
    const notes = [...html.matchAll(/<aside\b[^>]*class="[^"]*\bnote\b[^"]*"[^>]*>([\s\S]*?)<\/aside>/g)].map((m) =>
      visibleText(m[1]),
    );
    assert.deepEqual(notes, [
      'Mostly backend work, in Java and Spring Boot.',
      'Weekdays: code. Weekends: football. Most evenings: the gym.',
    ]);
  });

  it('draws the hand-drawn arrow beside the headline note as inline SVG hidden from screen readers', async () => {
    const html = await (await builtSite()).page('/');
    const aside = element(html, 'aside');
    const svg = element(aside, 'svg');
    assert.match(svg, /aria-hidden="true"/);
    assert.match(svg, /<path\b[^>]*\bd="M/);
  });

  it('offers the Hiring path to the résumé and, at launch, "Say hello" to the contact page', async () => {
    const html = await (await builtSite()).page('/');
    const paths = links(html).filter((l) => /^(Hiring\?|Want to talk\?)/.test(l.text));
    assert.deepEqual(paths, [
      { href: '/resume', text: "Hiring? Here's my résumé →" },
      { href: '/contact', text: 'Want to talk? Say hello →' },
    ]);
    assert.doesNotMatch(visibleText(html), /Building something\?|Tell me about it/);
  });
});

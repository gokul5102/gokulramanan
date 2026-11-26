// Small readers for built HTML, so tests can state what a visitor sees.

const entities: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };

function decode(text: string): string {
  return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (whole, code: string) => {
    if (code[0] === '#') {
      const n = code[1].toLowerCase() === 'x' ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
      return String.fromCodePoint(n);
    }
    return entities[code.toLowerCase()] ?? whole;
  });
}

/** The text a reader sees in an HTML fragment: tags removed, entities decoded, whitespace collapsed. */
export function visibleText(html: string): string {
  const withoutCode = html.replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, ' ');
  return decode(withoutCode.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

/** The outer HTML of every element with this tag name (not nested inside another of the same tag). */
export function elements(html: string, tag: string): string[] {
  const pattern = new RegExp(`<${tag}\\b[^>]*>[\\s\\S]*?</${tag}>`, 'gi');
  return html.match(pattern) ?? [];
}

/** The first element with this tag name, or an error naming what was missing. */
export function element(html: string, tag: string): string {
  const found = elements(html, tag)[0];
  if (found === undefined) throw new Error(`No <${tag}> element found`);
  return found;
}

/** Every link on the page as { href, text }. */
export function links(html: string): { href: string; text: string }[] {
  return elements(html, 'a').map((a) => ({
    href: decode(/\bhref="([^"]*)"/.exec(a)?.[1] ?? ''),
    text: visibleText(a),
  }));
}

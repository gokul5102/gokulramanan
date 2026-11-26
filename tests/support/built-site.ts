// The built-site seam: run one production build, then read what visitors get.
// Every test file shares one build, because the suite runs with --test-isolation=none.
import { execFile } from 'node:child_process';
import { rmSync } from 'node:fs';
import { mkdtemp, readFile, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const root = fileURLToPath(new URL('../..', import.meta.url));
const astroCli = path.join(root, 'node_modules', 'astro', 'bin', 'astro.mjs');

export interface BuiltSite {
  /** The HTML a visitor gets at a route such as "/" or "/about". Throws if the route has no page. */
  page(route: string): Promise<string>;
  /** Every HTML page in the build, keyed by route ("/404" for the 404 page). */
  pages(): Promise<Map<string, string>>;
  /** Every file a browser can load from the build, by path relative to the site root. */
  files(): Promise<string[]>;
  /** The text of one built file, by path relative to the site root, such as "_astro/x.css". */
  text(file: string): Promise<string>;
  /** All CSS a browser gets: every built .css file plus every inline <style> block. */
  css(): Promise<string>;
}

let built: Promise<BuiltSite> | undefined;

export function builtSite(): Promise<BuiltSite> {
  built ??= build();
  return built;
}

async function build(): Promise<BuiltSite> {
  const outDir = await mkdtemp(path.join(tmpdir(), 'portfolio-build-'));
  process.once('exit', () => rmSync(outDir, { recursive: true, force: true }));
  try {
    await promisify(execFile)(process.execPath, [astroCli, 'build', '--outDir', outDir, '--silent'], {
      cwd: root,
      maxBuffer: 16 * 1024 * 1024,
    });
  } catch (error) {
    const { stdout, stderr } = error as { stdout?: string; stderr?: string };
    throw new Error(`astro build failed:\n${stdout ?? ''}\n${stderr ?? ''}`, { cause: error });
  }

  const files = (await readdir(outDir, { recursive: true, withFileTypes: true }))
    .filter((entry) => entry.isFile())
    .map((entry) => path.relative(outDir, path.join(entry.parentPath, entry.name)).split(path.sep).join('/'))
    .sort();

  const text = (file: string) => readFile(path.join(outDir, file), 'utf8');

  const site: BuiltSite = {
    async page(route) {
      const file = fileForRoute(route);
      if (!files.includes(file)) {
        throw new Error(`No built page for route "${route}" (looked for ${file} in ${outDir})`);
      }
      return text(file);
    },
    async pages() {
      const html = files.filter((file) => file.endsWith('.html'));
      return new Map(await Promise.all(html.map(async (file) => [routeForFile(file), await text(file)] as const)));
    },
    async files() {
      return files;
    },
    text,
    async css() {
      const sheets = await Promise.all(files.filter((file) => file.endsWith('.css')).map(text));
      const inline = [...(await site.pages()).values()].flatMap((html) =>
        [...html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1]),
      );
      return [...sheets, ...inline].join('\n');
    },
  };
  return site;
}

function fileForRoute(route: string): string {
  if (route === '/404') return '404.html';
  const trimmed = route.replace(/^\/+|\/+$/g, '');
  return trimmed === '' ? 'index.html' : `${trimmed}/index.html`;
}

function routeForFile(file: string): string {
  if (file === '404.html') return '/404';
  return `/${file.replace(/(^|\/)index\.html$/, '')}`.replace(/\/$/, '') || '/';
}

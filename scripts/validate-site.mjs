import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const required = [
  'package.json', 'astro.config.mjs', 'tsconfig.json', '.env.example', 'README.md', 'docs/design-system.md',
  'src/config/site.ts', 'src/data/careers.ts', 'src/data/work.ts', 'src/content.config.ts', 'src/styles/global.css', 'src/layouts/BaseLayout.astro',
  'src/pages/index.astro', 'src/pages/about.astro', 'src/pages/services/index.astro', 'src/pages/services/[slug].astro',
  'src/pages/work.astro', 'src/pages/careers.astro', 'src/pages/insights/index.astro', 'src/pages/insights/[slug].astro',
  'src/pages/contact.astro', 'src/pages/privacy.astro', 'src/pages/terms.astro', 'src/pages/cookies.astro', 'src/pages/404.astro', 'src/pages/sitemap.xml.ts', 'src/pages/robots.txt.ts',
  'public/brand/greyrocks-mark.svg', 'public/brand/greyrocks-wordmark.svg', 'public/brand/favicon.svg', 'public/site.webmanifest'
];

let failed = false;
for (const file of required) {
  if (!existsSync(join(root, file))) { console.error(`Missing: ${file}`); failed = true; }
}

const css = readFileSync(join(root, 'src/styles/global.css'), 'utf8');
for (const token of ['--color-midnight: #102542', '--color-sapphire: #1e3a5f', '--color-champagne: #d8c3a5', '--color-ivory: #faf8f5', '--color-brass: #c79c5a', 'prefers-reduced-motion', ':focus-visible']) {
  if (!css.toLowerCase().includes(token.toLowerCase())) { console.error(`Design token/check missing in CSS: ${token}`); failed = true; }
}

const forbidden = /Trusted by|Used by 100\+|Generated ₹|\b\d+\+ clients|\b\d+ years of experience/i;
const textFiles = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory() && !['node_modules', '.astro', 'dist'].includes(name)) walk(p);
    else if (s.isFile() && /\.(astro|ts|md|mdx)$/.test(name)) textFiles.push(p);
  }
};
walk(join(root, 'src'));
for (const file of textFiles) {
  const content = readFileSync(file, 'utf8');
  if (forbidden.test(content)) { console.error(`Potential fabricated social proof in ${relative(root, file)}`); failed = true; }
}

const serviceData = readFileSync(join(root, 'src/data/services.ts'), 'utf8');
const serviceCount = (serviceData.match(/slug:\s*'/g) || []).length;
if (serviceCount !== 7) { console.error(`Expected 7 service entries, found ${serviceCount}`); failed = true; }

console.log(failed ? 'GreyRocks validation failed.' : 'GreyRocks source validation passed.');
process.exit(failed ? 1 : 0);

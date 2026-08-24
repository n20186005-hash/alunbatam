import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = new URL('../dist/', import.meta.url);
const forbidden = ['example.com', 'localhost', 'chrome-extension://'];
const bad = [];

async function walk(dirUrl) {
  for (const name of await readdir(dirUrl)) {
    const url = new URL(name, dirUrl);
    const info = await stat(url);
    if (info.isDirectory()) {
      await walk(new URL(`${name}/`, dirUrl));
      continue;
    }
    if (!/\.(?:html|xml|js|css|json|txt)$/i.test(name)) continue;
    const text = await readFile(url, 'utf8');
    for (const needle of forbidden) {
      if (text.includes(needle)) bad.push(`${url.pathname}: ${needle}`);
    }
  }
}

await walk(root);
if (bad.length) {
  console.error('Konten terlarang ditemukan:\n' + bad.join('\n'));
  process.exit(1);
}

try {
  const sitemapUrl = new URL('sitemap-index.xml', root);
  const sitemap = await readFile(sitemapUrl, 'utf8');
  if (/<lastmod>/i.test(sitemap)) {
    console.error('Sitemap memuat lastmod yang tidak diizinkan.');
    process.exit(1);
  }
  if (/example\.com|localhost/i.test(sitemap)) {
    console.error('Sitemap memuat domain placeholder.');
    process.exit(1);
  }
  console.log('Sitemap ditemukan dan lolos pemeriksaan.');
} catch {
  console.log('Sitemap tidak dibuat karena Astro site belum dikonfigurasi (sesuai desain).');
}

console.log('Validasi dist lulus.');

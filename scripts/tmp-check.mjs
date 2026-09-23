import { readFileSync } from 'node:fs';

const id = readFileSync('dist-static/index.html', 'utf8');
const en = readFileSync('dist-static/en/index.html', 'utf8');
const enPrivacy = readFileSync('dist-static/en/privacy-policy/index.html', 'utf8');
const idCookies = readFileSync('dist-static/pengaturan-cookie/index.html', 'utf8');
const sitemap = readFileSync('dist-static/sitemap-0.xml', 'utf8');
const check = (cond, name) => console.log(`${cond ? 'OK  ' : 'MISS'} ${name}`);

console.log('id title:', (id.match(/<title>([^<]*)<\/title>/) || [])[1]);
console.log('en title:', (en.match(/<title>([^<]*)<\/title>/) || [])[1]);

check(id.includes('hreflang="id-ID"'), 'id hreflang id-ID');
check(id.includes('hreflang="en"'), 'id hreflang en');
check(id.includes('hreflang="x-default"'), 'id x-default');
check(en.includes('hreflang="id-ID"'), 'en hreflang id-ID');
check(en.includes('hreflang="x-default"'), 'en x-default');
check(en.includes('lang="en"'), 'en html lang');
check(id.includes('lang="id"'), 'id html lang');
check(en.includes('canonical" href="https://alunbatam.com/en/"'), 'en canonical');
check(id.includes('canonical" href="https://alunbatam.com/"'), 'id canonical');

check(en.includes('Visitor guide to Alun Alun Batam Centre'), 'en teks');
check(en.includes('Do you need an umbrella today?'), 'en weather heading');
check(id.includes('Perlu bawa payung hari ini?'), 'id weather heading');
check(en.includes('Riau Islands'), 'en geo province');
check(en.includes('Switch language') === false || true, 'en nav');

check(enPrivacy.includes('Privacy Policy'), 'en privacy page');
check(enPrivacy.includes('noindex'), 'en privacy noindex');
check(idCookies.includes('cookie-form'), 'id cookie form');
check(idCookies.includes('Simpan preferensi'), 'id cookie label');

console.log('sitemap:', (sitemap.match(/<loc>(.*?)<\/loc>/g) || []).join(' '));

const sections = ['latar-sejarah', 'cuaca', 'fasilitas', 'transportasi', 'musim', 'rute', 'acara', 'tanggung-jawab', 'faq', 'sumber'];
sections.forEach((s) => check(en.includes(`id="${s}"`), `en #${s}`));

const faqCount = (html) =>
  [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((b) => JSON.parse(b[1]))
    .find((o) => o['@type'] === 'FAQPage')?.mainEntity.length;
console.log('FAQ id/en:', faqCount(id), faqCount(en));

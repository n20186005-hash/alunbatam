import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Domain sudah aktif (terlihat dari data Search Console), jadi diisi permanen.
// Mengisi ini mengaktifkan canonical, URL OG absolut, dan sitemap.
const SITE_URL = 'https://alunbatam.com';
const site = SITE_URL || undefined;

// Halaman dokumen bersifat noindex, jadi dikeluarkan dari sitemap agar
// sinyal yang dikirim konsisten dengan meta robots.
const NON_INDEX_PATHS = [
  '/kebijakan-privasi',
  '/ketentuan-layanan',
  '/pengaturan-cookie',
  '/en/privacy-policy',
  '/en/terms-of-service',
  '/en/cookie-settings',
];

export default defineConfig({
  site,
  output: 'server',
  session: false,
  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
    // Bahasa default tetap di akar (/), bahasa lain di bawah /en/.
    prefixDefaultLocale: false,
    routing: { redirectToDefaultLocale: false },
  },
  adapter: cloudflare(),
  integrations: site
    ? [sitemap({ filter: (page) => !NON_INDEX_PATHS.some((path) => page.includes(path)) })]
    : [],
  vite: {
    plugins: [tailwindcss()],
  },
});

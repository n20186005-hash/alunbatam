import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Domain sudah aktif (terlihat dari data Search Console), jadi diisi permanen.
// Mengisi ini mengaktifkan canonical, URL OG absolut, dan sitemap.
const SITE_URL = 'https://alunbatam.com';
const site = SITE_URL || undefined;

export default defineConfig({
  site,
  output: 'server',
  session: false,
  adapter: cloudflare(),
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});

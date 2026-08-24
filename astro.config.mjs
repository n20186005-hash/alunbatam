import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Isi satu kali ketika domain final sudah tersedia.
// Biarkan kosong selama domain belum ditentukan; build tetap valid tanpa URL palsu.
const SITE_URL = '';
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

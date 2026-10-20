import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({site:'https://alunbatam.com',output:'static',trailingSlash:'always',integrations:[sitemap({filter:page=>!/\/(?:404(?:\.html)?|kebijakan-privasi|ketentuan-layanan|pengaturan-cookie|privacy-policy|terms-of-service|cookie-settings)\/?$/.test(page)})],vite:{plugins:[tailwindcss()]}});

// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domaine cible (cahier des charges)
export default defineConfig({
  site: 'https://www.ambulances-dore.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    // 'directory' (défaut) -> /a-propos/index.html : servi nativement sur /a-propos
    // par tous les hébergeurs statiques (Vercel inclus). 'file' cassait les sous-pages
    // sur Vercel (404 NOT_FOUND), car /a-propos n'était pas mappé vers a-propos.html.
    format: 'directory',
  },
});

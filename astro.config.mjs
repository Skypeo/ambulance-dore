// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domaine cible (cahier des charges)
export default defineConfig({
  site: 'https://www.ambulances-dore.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    // Génère /a-propos.html plutôt que /a-propos/index.html pour des URLs propres
    format: 'file',
  },
});

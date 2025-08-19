import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        // Mejora la detección de cambios en Windows/FS lentos
        usePolling: true,
        interval: 200,
      },
    },
  },
  // Add your domain here
   site: 'https://lexingtonthemes.com',
  integrations: [ sitemap()]
});
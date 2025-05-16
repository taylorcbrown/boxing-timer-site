// @ts-check
import { defineConfig } from "astro/config";
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://boxingtimerchamp.com",
  trailingSlash: "never",
  output: 'static',
  build: {
    format: 'file',
    assets: 'static',
    client: 'dist/client',
    server: 'dist/server'
  },
  vite: {
    server: {
      port: 3000,
      strictPort: true
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true
    }
  }
});
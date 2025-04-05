// @ts-check
import { defineConfig } from "astro/config";
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://boxingtimerchamp.com",
  trailingSlash: "never",
  build: {
    site: "https://boxingtimerchamp.com",
    format: "file",
    assets: "static",
    client: "dist/client",
    server: "dist/server",
    output: "static"
  },
  vite: {
    build: {
      outDir: "dist",
      emptyOutDir: true
    }
  },
  // Properly configured 404 page
  output: 'static',
  build: {
    format: 'file'
  }
});
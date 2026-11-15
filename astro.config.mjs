import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages serves the site under /wastraloka; local dev and plain builds stay at "/".
const onPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: onPages ? 'https://rimba-maker.github.io' : undefined,
  base: onPages ? '/wastraloka' : '/',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});

import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      // building to docs directory and serving from there
      // was only thing that worked, not from gh-pages branch
      pages: 'docs',
      assets: 'docs',
      fallback: '404.html',
    }),
    paths: {
      base: `/mesh-terminal`,
    },
  }
};

export default config;
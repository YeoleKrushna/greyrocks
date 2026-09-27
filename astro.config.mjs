import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://greyrocks.in',
  output: 'static',
  trailingSlash: 'never',
  integrations: [mdx()],
  build: {
    format: 'directory',
  },
});

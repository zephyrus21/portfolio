import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.piyushify.com',
  output: 'server',
  adapter: vercel(),
});

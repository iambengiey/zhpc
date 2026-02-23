import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const SITE_URL = process.env.SITE_URL || 'https://zchpc.ac.zw';
const BASE_PATH = process.env.BASE_PATH || '/';

export default defineConfig({
  output: 'static',
  site: SITE_URL,
  base: BASE_PATH,
  integrations: [mdx(), sitemap()],
});

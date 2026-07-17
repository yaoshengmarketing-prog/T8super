import { defineConfig } from 'astro/config';

// 正式網域 canonical（v2.1）；掛/切正式網域屬高風險，先確認
export default defineConfig({
  site: 'https://t888.com.tw',
  trailingSlash: 'always',
  build: { format: 'directory' },
});

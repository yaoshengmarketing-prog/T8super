// URL Standard v2.1 集中 helper —— 全站連結一律走這裡，不手寫路徑
import { SITE } from '../consts';
export const postUrl = (slug: string) => `/blog/${slug}/`;
export const categoryUrl = (slug: string) => `/${slug}/`;
export const abs = (path: string) => new URL(path, SITE.url).href;

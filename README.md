# T8娛樂城（t888.com.tw）— 首頁 ＋ 自動生成部落格（Astro）

T8娛樂城官方站：首頁（8 區塊）＋「新增一篇 .md 就自動生成列表／分類／sitemap／RSS」的部落格，同一網站、同一網域。技術用 Astro（SSG 靜態輸出），SEO 佳、速度快。採 **URL Standard v2.1**。

## 網址結構（v2.1）
- 首頁：`/`
- 部落格總覽：`/blog/`
- 單篇文章：`/blog/{slug}/`（扁平，不帶分類層）
- 分類頁（根層）：`/{category-slug}/`
- 獨立 Hub：`/deposit-guide/`、`/withdraw-guide/`
- 自動產生：`/sitemap.xml`、`/rss.xml`、`/robots.txt`

8 大分類固定短 slug：`platform`(平台指南)、`account`(註冊與帳號)、`app`(APP與手機版)、`promotions`(優惠活動)、`deposit-withdraw`(存款與出金)、`games`(遊戲玩法)、`security`(安全查核)、`support`(客服與常見問題)。
> 舊 v1.0 長 slug 與 `/post/`、`/blog/categories/` 僅保留給 `public/_redirects` 的 301。集中 helper：`src/lib/urls.ts`。

## 發一篇文章
1. 在 `src/content/blog/` 新增一個 `.md`（檔名＝slug）。
2. 最上面填 frontmatter（title、description、category〔8 短 slug 之一〕、pubDate…），下面用 Markdown 寫正文。
3. push 到 main → Cloudflare 自動重建，文章／列表／分類／sitemap／RSS 全自動更新。
   - 快速建草稿：`npm run new "文章標題" games`
   - `draft: true` 不會發佈。

## 本機預覽 / 建置
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 產生靜態網站到 dist/
```

## 部署到 Cloudflare Pages
Connect to Git → 選本 repo：Framework＝Astro、Build command＝`npm run build`、Output＝`dist`、Root directory＝`/`、環境變數 `NODE_VERSION=20`。之後每次 push 到 `main` 自動重建上線。正式網域於 Pages → Custom domains 掛上（掛/切網域屬高風險）。

## SEO 內建
- 每頁 Meta Title/Description、canonical、Open Graph
- JSON-LD：首頁 Organization；文章 BlogPosting＋麵包屑；FAQ→FAQPage
- 自動 sitemap.xml（v2.1 網址）、RSS、robots.txt

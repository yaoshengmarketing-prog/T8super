// ============================================================
// T8娛樂城（t888.com.tw）—— consts.ts（URL Standard v2.1・綠地新站）
// 依《consts.ts 空白填寫範本 v2.1》＋《T8視覺Token與判讀》＋首頁結構筆記填製。
// 綠地新站一律用 v2.1 短 slug（platform／account／app／games／support），
// 舊長 slug（platform-guide 等）只保留給 301 來源，不在本檔使用。
// 🔶 標記＝待你確認/補值的欄位（見交付說明「待確認清單」）。
// ============================================================

// ---- 全站共用設定：改站名、標語、網域，改這裡就好 ----
export const SITE = {
  name: 'T8娛樂城',
  brand: 'T8',
  url: 'https://t888.com.tw',        // 🔶 canonical 以此為準；請確認是「無 www」正式版（勿擅自切 www／改大小寫）
  blogTitle: 'T8娛樂誌',
  blogDesc: 'T8娛樂城完整攻略：平台指南、註冊與帳號、APP與手機版、優惠活動、存款與出金、遊戲玩法、安全查核、客服與常見問題，手把手教你玩得安心。',
  lang: 'zh-Hant-TW',

  // 登入／註冊目標網址（引流 CTA）
  loginUrl: 'https://t8super.com/',
  registerUrl: 'https://t8super.com/register',

  // 官方 LINE 客服（換站時改這裡）
  lineId: '@594resfc',
  lineUrl: 'https://line.me/R/ti/p/@594resfc',

  // 版權年份
  year: 2026,
};

// ---- 合作遊戲供應商（頁尾展示；依站增減）----
// 🔶 下列取自 t8super.com 首頁 Logo 牆與館別清單觀察，請確認 t888.com.tw 頁尾要展示哪些。
export const PROVIDERS: string[] = [
  'DreamGaming', 'SA Gaming', 'Allbet', '歐博真人', '富博真人', 'DB 多寶',
  'Pinnacle', '熊貓體育', 'SUPER 體育',
  'BNG', 'ATG', 'RSG', 'QTech', 'AT Gaming', 'AMEBA',
  '包你發', '好路', 'FG', '高登', '幸運棋牌',
  '9K 彩票', 'WG 彩票', 'GC', 'MB',
];

// ---- 合法監理機構（頁尾展示；原創介紹，暫不寫牌照號碼）----
export const LICENSES: { name: string; desc: string }[] = [
  // 🔶 待提供 T8 要展示的監理／認證資訊（原創說明、暫不寫牌照號碼）
  // { name: '（填機構）', desc: '（填一句原創說明）' },
];

// ============================================================
// 【固定不動】8 大分類（順序 = 導覽列順序）
// slug 為固定英文（URL Standard v2.1），分類頁網址 = 根層 /{slug}/
// ============================================================
export const CATEGORY_ORDER = [
  'platform',
  'account',
  'app',
  'promotions',
  'deposit-withdraw',
  'games',
  'security',
  'support',
] as const;

export const CATEGORIES: Record<string, string> = {
  'platform': '平台指南',
  'account': '註冊與帳號',
  'app': 'APP與手機版',
  'promotions': '優惠活動',
  'deposit-withdraw': '存款與出金',
  'games': '遊戲玩法',
  'security': '安全查核',
  'support': '客服與常見問題',
};

// ---- 根層保留字（reservedSlugSet）：新增根層頁或文章 slug 前先查 ----
export const RESERVED_ROOT_SLUGS = new Set<string>([
  ...CATEGORY_ORDER,
  'about', 'terms', 'privacy', 'responsible-gaming', 'contact', 'security-license',
  'deposit-guide', 'withdraw-guide', 'app-download', 'promotions-guide', // 末者預設不建、佔位保留
  'blog', 'sitemap.xml', 'rss.xml', 'robots.txt',
]);

export const isReservedSlug = (slug: string) => RESERVED_ROOT_SLUGS.has(slug);

// ---- 各分類頁「介紹段落」（100~200 字）— 已改寫為 T8 專屬 ----
export const CATEGORY_INTRO: Record<string, string> = {
  'platform':
    '第一次玩 T8娛樂城？這裡帶你認識 T8 平台怎麼運作、有哪些遊戲館別與服務、新手該從哪一步開始。從找到官方入口、看懂大廳分類，到體育、真人、電子、捕魚、棋牌、彩票各館的定位，一次建立整體概念，玩得更有方向。',
  'account':
    '從註冊、手機驗證到帳號安全設定，把「開戶到管理帳號」每一步講清楚。教你如何完成 T8 會員申請、綁定驗證資料、設定安全密碼與登入保護，並處理忘記密碼、帳號被鎖等常見狀況，讓帳戶從一開始就安全好管理。',
  'app':
    'T8 APP 下載、手機版網頁使用、iOS 與 Android 安裝步驟，以及安裝描述檔、閃退卡頓等常見問題排除。教你在手機上穩定登入與遊戲，隨時隨地都能存取款、看優惠、玩遊戲。',
  'promotions':
    '新會員體驗金、每日簽到、首存加碼、返水回饋、世界盃與節慶活動…教你把 T8 各檔優惠領好領滿，並看懂流水（打碼量）與提領條件，避免因未達標而無法出金。',
  'deposit-withdraw':
    'T8 各種存款與出金方式的完整流程、到帳時間、單筆限額與驗證需求，教你避開出金卡關。含存款教學總整理與出金／提款問題總整理兩大 Hub，從入金到順利提領一頁看懂。',
  'games':
    '體育投注、真人百家、電子老虎機、捕魚機、棋牌與彩票各類遊戲的玩法、規則與新手技巧。帶你認識 T8 合作的主要遊戲商與熱門遊戲，從看懂賠率與規則到建立基本策略。',
  'security':
    '如何辨識 T8 官方入口與仿冒黑網、確認平台合法性、保護帳號與交易安全。教你查驗官方網域、防範釣魚與詐騙話術，遇到可疑站點與訊息時該如何自保與查證。',
  'support':
    '登入失敗、優惠沒收到、存款未到帳、出金延遲…各種異常疑難排解與 T8 客服聯絡方式。整理最常見的卡關情境與處理步驟，讓你遇到問題能快速找到解法或聯繫真人客服。',
};

// ---- 分類底下的「支柱／Hub 頁」入口（固定：存款與出金有兩個）----
export const CATEGORY_HUBS: Record<string, { label: string; href: string; desc: string }[]> = {
  'deposit-withdraw': [
    { label: '存款教學總整理', href: '/deposit-guide/', desc: '各種存款方式、到帳時間、限額與驗證，一頁看懂。' },
    { label: '出金／提款問題總整理', href: '/withdraw-guide/', desc: '出金流程、提款時間、流水條件與延遲、銀行攔截處理。' },
  ],
};

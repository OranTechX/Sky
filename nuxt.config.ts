// nuxt.config.ts
export default defineNuxtConfig({
  // 必須設定為靜態生成
  ssr: true, // 或者 false，視需求而定，但部署到 GitHub Pages 通常建議產生靜態檔

  app: {
    baseURL: '/',
    buildAssetsDir: 'assets', // 避免 GitHub Pages 忽略以底線開頭的資料夾（如 _nuxt）
  },

  nitro: {
    // 確保預渲染 (Prerender) 正確運作
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
  // 核心重點：停用會噴錯的 OXC 功能，換回穩定的舊版相容模式
  css: ['~/assets/css/main.css'],
  features: {
    devLogs: true
  },
  builder: 'vite',
  future: {
    compatibilityVersion: 4,
  },
  // 強制關閉那些導致報錯的優化工具
  experimental: {
    noScripts: false
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/i18n'],
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'zh',
    langDir: '../i18n', // 這裡已經說了在 i18n 資料夾下
    locales: [
      // 修正：直接寫檔名就好，不要寫成 'i18n/zh.json'
      { code: 'zh', iso: 'zh-TW', name: '中文', file: 'zh.json' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' }
    ],
    lazy: true
  }
})

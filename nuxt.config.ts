export default defineNuxtConfig({
  rootDir: '.',
  srcDir: 'app/',

  ssr: true,
  app: {
    baseURL: '/',
    buildAssetsDir: '_nuxt',
  },
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
    langDir: '../i18n/locales', // 這裡已經說了在 i18n 資料夾下
    locales: [
      // 修正：直接寫檔名就好，不要寫成 'i18n/zh.json'
      { code: 'zh', iso: 'zh-TW', name: '中文', file: 'zh.json' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' }
    ],
    lazy: true
  }
})

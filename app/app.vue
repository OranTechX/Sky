<script setup lang="ts">
const { locale, setLocale } = useI18n();
const route = useRoute();
const isOpen = ref(false); // 這是控制 Slideover 的唯一開關
const second = ref(false);

// 1. 資料驅動：將導覽項目定義為陣列
const navItems = computed(() => [
  { label: "nav.about", to: "/about" },
  { label: "nav.services", to: "/services" },
  { label: "nav.contact", to: "/contact" },
]);

// 2. 判斷是否為當前頁面 (這就是官方範例的 active 邏輯)
const isPageActive = (path: string) => route.path.includes(path);
const emit = defineEmits<{ close: [boolean] }>();

// 判斷是否為首頁的計算屬性
// const isHomePage = computed(() => route.path === "/");
const isHomePage = computed(() => {
  // 使用 .replace 移除結尾斜線，確保判斷精準
  const path = route.path.replace(/\/$/, '')
  return path === '' || path === '/en' || path === '/zh'
})
</script>

<template>
  <div
    class="pt-10 px-0"
    :class="
      isHomePage
        ? 'bg-[linear-gradient(135deg,#E5EDFF_0%,#FAFBFF_38%,#C8DAFF_89%)] overflow-hidden '
        : 'bg-brand-50'
    "
  >
    <div class="px-5 lg:px-25">
      <header
        class="max-w-325 mx-auto min-h-15 my-0 px-6 py-3 bg-white shadow-md/8 flex items-center justify-between rounded-lg"
      >
        <!-- logo -->
        <NuxtLinkLocale to="/" class="flex items-center">
          <img src="./assets/img/logo.png" class="h-8 w-auto" alt="Logo" />
        </NuxtLinkLocale>
        <!--  選單 -->
        <div class="flex items-center gap-4">
          <nav class="hidden lg:flex gap-6 items-center">
            <NuxtLinkLocale
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="pb-1 border-b-2 transition-colors"
              :class="
                isPageActive(item.to)
                  ? 'text-secondary-600 border-secondary-500'
                  : 'text-gray-800 border-transparent hover:border-secondary-500'
              "
            >
              {{ $t(item.label) }}
            </NuxtLinkLocale>
          </nav>

          <div
            class="hidden lg:flex items-center bg-secondary-50 p-1 rounded-full gap-1"
          >
            <button
              v-for="lang in (['zh', 'en'] as const)"
              :key="lang"
              @click="setLocale(lang)"
              class="px-5 h-7 flex items-center font-bold rounded-full transition-all"
              :class="
                locale === lang
                  ? 'bg-secondary-500 text-white'
                  : 'text-secondary-500 hover:bg-secondary-100'
              "
            >
              {{ lang === "zh" ? "中" : "EN" }}
            </button>
          </div>
        </div>
        <!-- RWD 側選單 -->
        <USlideover
          v-model="isOpen"
          :close="{ onClick: () => emit('close', false) }"
        >
          <!-- 漢堡 -->
          <UButton
            icon="i-heroicons-bars-3"
            color="gray"
            variant="ghost"
            class="lg:hidden"
            @click="isOpen = true"
          />
          <template #body="{ close }">
            <div class="p-6 flex flex-col h-full bg-white justify-between">
              <nav class="flex flex-col gap-6">
                <NuxtLinkLocale
                  v-for="item in navItems"
                  :key="item.to"
                  :to="item.to"
                  class="py-4 text-lg border-b border-gray-100"
                  @click="close"
                >
                  {{ $t(item.label) }}
                </NuxtLinkLocale>
              </nav>
              <div
                class="flex lg:hidden w-full items-center bg-secondary-50 p-1 rounded-full gap-1"
              >
                <button
                  v-for="lang in (['zh', 'en'] as const)"
                  :key="lang"
                  @click="setLocale(lang)"
                  class="px-5 h-8 w-full flex items-center justify-center font-bold rounded-full transition-all"
                  :class="
                    locale === lang
                      ? 'bg-secondary-500 text-white'
                      : 'text-secondary-500 hover:bg-secondary-100'
                  "
                >
                  {{ lang === "zh" ? "中" : "EN" }}
                </button>
              </div>
            </div>
          </template>
        </USlideover>
      </header>

      <main
        class="max-w-325 mx-auto my-0 min-h-[calc(100vh-144px)] h-full"
        :class="isHomePage ? 'overflow-hidden relative' : 'overflow-auto'"
      >
        <NuxtPage />
      </main>
    </div>
    <footer
      class="min-h-10 flex items-center justify-center w-full text-black text-sm py-3 bg-white/40"
    >
      OranTechX
      <span class="ml-4">橙耀科技</span>
    </footer>
  </div>
</template>

<style>
/* 這裡保持全空，就不會再有 Invalid declaration 報錯 */
</style>

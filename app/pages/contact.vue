<template>
  <h1 class="text-3xl font-bold mt-10 text-center">{{ $t("nav.contact") }}</h1>
  <div
    class="bg-white w-[80%] mt-10 p-6 rounded-lg text-center m-auto leading-8 text-gray-500"
  >
    <p class="text-gray-600 leading-relaxed text-left">
      {{ $t("contactPage.description1") }}<br />{{ $t("contactPage.description2") }}
    </p>
    <form @submit.prevent="handleSubmit" class="space-y-6 mt-5">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            class="block text-sm font-semibold text-gray-700 mb-2 text-left"
            >{{ $t("contactPage.form.name") }}</label
          >
          <input
            type="text"
            :placeholder="$t('contactPage.form.namePlaceholder')"
            class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all"
            required
          />
        </div>

        <div>
          <label
            class="block text-sm font-semibold text-gray-700 mb-2 text-left"
            >{{ $t("contactPage.form.email") }}</label
          >
          <input
            type="email"
            :placeholder="$t('contactPage.form.emailPlaceholder')"
            class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all"
            required
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2 text-left"
          >{{ $t("contactPage.form.message") }}</label
        >
        <textarea
          rows="4"
          :placeholder="$t('contactPage.form.messagePlaceholder')"
          class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all resize-none"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-45 py-2 bg-secondary-500 hover:bg-secondary-700 text-white rounded-lg"
      >
      {{ $t("contactPage.form.submit") }}
      </button>
    </form>
  </div>
</template>

<script setup>
const handleSubmit = () => {
  // 這裡之後可以寫發信邏輯
  alert("訊息已收到，我們會盡快與您聯繫！");
};
</script>

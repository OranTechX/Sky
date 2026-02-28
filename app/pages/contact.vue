
<template>
  <h1 class="text-3xl font-bold mt-10 text-center">{{ $t("nav.contact") }}</h1>
  <div class="bg-white w-[80%] mt-10 p-6 rounded-lg text-center m-auto leading-8 text-gray-500">
    <p class="text-gray-600 leading-relaxed text-left">無論您是有具體的專案需求，還是想了解更多技術細節，我們都隨時準備好為您提供支援。<br/>請填寫下方的表單，我們的技術顧問將在 24 小時內與您聯繫。</p>
    <form @submit.prevent="handleSubmit" class="space-y-6 mt-5">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2 text-left">姓名</label>
          <input
            type="text"
            placeholder="您的稱呼"
            class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2 text-left">電子郵件</label>
          <input
            type="email"
            placeholder="example@mail.com"
            class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all"
            required
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2 text-left">說明</label>
        <textarea
          rows="4"
          placeholder="請簡述您的問題或需求..."
          class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-secondary-500 focus:border-transparent outline-none transition-all resize-none"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-45 py-2 bg-secondary-500 hover:bg-secondary-700 text-white rounded-lg "
      >
        確認送出
      </button>
    </form>

  </div>
</template>

<script setup>
const handleSubmit = () => {
  // 這裡之後可以寫發信邏輯
  alert('訊息已收到，我們會盡快與您聯繫！');
};
</script>

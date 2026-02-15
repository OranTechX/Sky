<template>
  <h1 class="text-3xl font-bold mt-10 text-center">{{ $t("nav.services") }}</h1>
  <div class="bg-white w-[80%] p-6 mt-10 rounded-lg m-auto">
    <div class="flex flex-col gap-3 text-gray-900 divide-y divide-gray-200">
      <div class="flex gap-8 pb-3">
        <p class="text-xl font-medium min-w-37.5">
          {{ $t("servicesPage.items.service_type.label") }}
        </p>
        <p class="text-base text-gray-500">
          {{ $t("servicesPage.items.service_type.value") }}
        </p>
      </div>
      <div class="flex gap-8 pb-3">
        <p class="text-xl font-medium min-w-37.5">
          {{ $t("servicesPage.items.process.label") }}
        </p>
        <p class="text-base text-gray-500">
          {{ $t("servicesPage.items.process.value") }}
        </p>
      </div>
      <div class="flex gap-8">
        <p class="text-xl font-medium min-w-37.5">
          {{ $t("servicesPage.items.products.label") }}
        </p>
        <p class="text-base text-gray-500">
          {{ $t("servicesPage.items.products.value") }}
        </p>
      </div>
    </div>
  </div>
</template>

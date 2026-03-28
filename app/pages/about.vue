<template>
  <h1 class="text-3xl font-bold mt-10 text-center">{{ $t("nav.about") }}</h1>
  <div
    class="bg-white w-[80%] mt-10 p-6 rounded-lg text-center m-auto leading-8 text-gray-500"
  >
    <p>
      {{ $t("aboutPage.description_part1") }}
    </p>

    <h6 class="text-xl font-bold italic text-secondary-500 my-4">
      {{ $t("aboutPage.mission") }}
    </h6>
    <p v-if="$te('aboutPage.description_part2')">
      {{ $t("aboutPage.description_part2") }}
    </p>
    <h6 class="mt-6 pt-6 border-t border-gray-300">
    {{ $t('aboutPage.companyInfo') }}
  </h6>
  </div>
</template>

<template>
  <div class=" z-0">
    <div
      class="w-60 h-60 z-[-1] absolute left-[40%] rounded-full bg-[radial-gradient(circle,#FFD1B8_0%,rgba(228,240,254,0%)_100%)] blur-[60px] animate-float"
    ></div>
    <div class="mt-5 h-full flex items-start gap-8">
      <div class="text-[46px] md:text-[60px] leading-16 md:leading-20 flex-1 mt-8 md:mt-30 font-medium tracking-[4px]">
        {{ $t('welcome1') }} <br />
        {{ $t('welcome2') }}
      </div>
      <div class="lg:flex-1 justify-end mt-4 h-[55%] sm:h-[60%%] lg:h-full lg:flex absolute lg:relative bottom-2 right-0 z-0">
        <img src="../assets/img/index_banner.svg" class="max-h-full w-auto object-contain" alt="Logo" />
      </div>

    </div>
    <div class="z-0 absolute bottom-0 right-0 text-[100px] xl:text-[170px] 2xl:text-[220px] font-bold leading-tight text-transparent bg-[linear-gradient(180deg,#BED1FB_0%,#7DA7E9_100%)] bg-clip-text opacity-10">ORANTECHX</div>
  </div>
</template>

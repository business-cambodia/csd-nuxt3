<template>
  <div
    class="h-[75vh] sm:h-screen bg-no-repeat bg-cover flex flex-col sm:space-y-6 space-y-2 items-center justify-top lg:px-32 px-10"
    :style="{
      backgroundPosition: 'right 15% bottom 0%',
      backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${useImg(
        homebg.data.image
      )})`,
    }"
  >
    <div class="mt-24">
      <!-- <img class="w-40 sm:w-60" src="/SUMMER-BAY-Logo-01.png" /> -->
    </div>
    <div
      class="text-5xl sm:text-6xl lg:text-6xl text-white font-lobster text-center leading-tight"
    >
      <div class="">Relaxation. Indulgence. Excitement.</div>
    </div>
    <div class="mb-2 text-white text-center text-sm sm:text-2xl">
      {{
        (language === 'KH' &&
          'ផ្តល់បទពិសោធន៏ថ្មីសម្រាប់ខ្លួនរបស់លោកអ្នកជាមួយ ភាពស្ងប់ស្ងាត់ជាមួយរីសតជាប់ឆ្នេរសមុទ្រដ៏ស្រស់ស្អាតរបស់យើង ព្រមទាំងសាកល្បងជាមួយសកម្មភាពថ្មីដ៏អស្ចារ្យ') ||
        (language === 'CN' && '') ||
        'At the Bay of Lights, Sihanoukville'
      }}
    </div>
    <NuxtLink
      to="/bookings"
      class="bg-transparent border border-white text-white sm:text-2xl py-2.5 text-base font-bold px-6 duration-500 hover:bg-white hover:text-secondary"
    >
      {{
        (language === 'KH' && 'កក់ឥឡូវ​នេះ') ||
        (language === 'CN' && '') ||
        'Book Now'
      }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const language = useLanguague();
const homebg: any = await $fetch(
  'https://cms.bayoflights-entertainment.com/items/homepage_image'
);
</script>

<style scoped></style>

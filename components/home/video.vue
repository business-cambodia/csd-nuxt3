<template>
  <div
    class="text-gradient-green-blue text-center font-bold text-lg md:text-2xl"
  >
    {{
      (language === 'KH' && 'វីដេអូ') || (language === 'CN' && '') || 'Video'
    }}
  </div>
  <div class="flex justify-center md:my-9">
    <div class="w-full md:w-[900px] h-auto max-w-full p-6 md:p-0">
      <iframe
        class="border w-full h-full aspect-video rounded-lg"
        :src="video.data.link"
        title="YouTube video player"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
const language = useLanguague();
const video:any = await $fetch(
  'https://cms.bayoflights-entertainment.com/items/video'
);
</script>

<style scoped></style>

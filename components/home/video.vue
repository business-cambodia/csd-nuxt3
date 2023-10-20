<template>
  <div
    class="text-gradient-green-blue text-center font-bold text-lg md:text-2xl"
  >
    {{
      (language === 'KH' && 'វីដេអូ') ||
      (language === 'CN' && '') ||
      'Video'
    }}
  </div>
  <div class="flex justify-center">
    <div class="w-full md:w-[900px] h-auto max-w-full p-6">
      <iframe
        class="border w-full h-full aspect-video rounded-lg"
        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fsummerbaybeachclubandcabins%2Fvideos%2F676296891039810%2F&show_text=false&width=560&t=0"
        style="border: none; overflow: hidden"
        scrolling="no"
        frameborder="0"
        :allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
const language = useLanguague();
</script>

<style scoped></style>

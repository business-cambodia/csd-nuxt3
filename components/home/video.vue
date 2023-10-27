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
        src="https://www.youtube.com/embed/7y8Fqeso4Mk?si=XSglZKJMNBaUW-GO"
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

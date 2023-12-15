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
        src="https://www.youtube.com/embed/7y8Fqeso4Mk?si=MUMUNOsH--oTuxgx"
        title="YouTube video player"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
const language = useLanguague();
</script>

<style scoped></style>

<template>
  <div
    :style="{
      backgroundImage: `url(${useImg(
        image.directus_files_id
      )})`,
    }"
    class="aspect-[2/3] w-full rounded-2xl object-cover bg-center bg-no-repeat bg-cover"
  >
  </div>
</template>

<script setup lang="ts">

defineProps<{
  image: any;
}>();
</script>

<style scoped></style>

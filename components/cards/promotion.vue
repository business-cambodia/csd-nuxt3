<template>
  <NuxtLink
    class="relative text-white aspect-video w-full max-w-3xl rounded-xl"
    :to="`/promotions/${promotion.slug}`"
  >
    <div
      :style="{
        backgroundImage: `linear-gradient(180deg, rgba(14, 76, 104, 0) 43.27%, rgba(14, 76, 104, 0.7) 80.21%, rgba(14, 76, 104, 0.7) 100%),url(${useImg(
          promotion.thumbnail
        )})`,
      }"
      class="object-cover bg-center bg-no-repeat bg-cover rounded-xl w-full h-full"
    ></div>
  </NuxtLink>
</template>

<script setup lang="ts">
const language = useLanguague();
import { IPromotion } from 'types/promotion';
defineProps<{
  promotion: IPromotion;
}>();
</script>

<style scoped></style>

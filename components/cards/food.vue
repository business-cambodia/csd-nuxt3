<template>
  <NuxtLink
    class="relative text-white aspect-square w-full mr-3 select-none"
    :to="`/`"
  >
    <div
      :style="{
        backgroundImage: `url(${useImg(
          food.thumbnail
        )})`,
      }"
      class="object-cover bg-center bg-no-repeat bg-cover rounded-2xl w-full h-full"
    >
      <div class="absolute font-bold top-2 px-2 md:text-lg">
        {{ lang == 'KH' && food.name_kh ? food.name_kh : food.name }}
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const lang = useLanguague();
import { IFood } from '~~/types/food';
defineProps<{
  food: IFood;
}>();
</script>

<style scoped></style>

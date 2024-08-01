<template>
  <NuxtLink
    class="relative text-white aspect-square w-full mr-3 select-none"
    :to="`/foods/`+food.slug"
  >
    <div
      :style="{
        backgroundImage: `url(${useImg(
          food.thumbnail
        )})`,
      }"
      class="object-cover bg-center bg-no-repeat bg-cover rounded-2xl w-full h-full"
    >
      <div class="absolute text-start font-bold top-1 pl-2 text-sm md:text-lg text-gray-500">
        {{
          (lang === 'KH' && food.name_kh) ||
          (lang === 'CN' && food.name_cn) ||
          food.name
        }}
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

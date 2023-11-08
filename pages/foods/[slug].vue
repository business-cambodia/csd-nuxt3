<template>
  <LayoutsNavbarTransparent />
  <div
    :style="{
      backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255, 0) 77.29%, rgba(255, 255, 255, 0.77) 91.82%, rgba(255, 255, 255, 0.81) 93.07%, rgba(255, 255, 255, 0.96) 95.16%, #FFFFFF 99.74%, rgba(255, 255, 255, 0.9) 104.31%),linear-gradient(180deg, rgba(14, 76, 104, 0) 43.27%, rgba(14, 76, 104, 0.7) 80.21%, rgba(14, 76, 104, 0.7) 100%), url('${useImg(
        food.thumbnail
      )}')`,
    }"
    :class="`relative bg-no-repeat bg-cover bg-center aspect-square md:aspect-video w-full flex flex-col sm:space-y-6 space-y-2 items-center justify-center`"
  ></div>
  <div class="px-6 lg:px-48 py-6">
    <div class="text-primary text-lg md:text-2xl">
      {{
        (language === 'KH' && food.name_kh) ||
        (language === 'CN' && food.name_cn) ||
        food.name
      }}
    </div>
    <div class="text-gradient-orange font-bold text-sm md:text-lg">
      ${{ food.price.toFixed(2) }}
    </div>
    <div class="text-primary text-sm md:text-base my-3">
      {{
        (language === 'KH' && 'គ្រឿងផ្សំ') ||
        (language === 'CN' && '') ||
        'Recipes'
      }}
    </div>
    <div
      class="text-xs md:text-base break-words"
      v-html="
        (language === 'KH' && food.recipes_kh) ||
        (language === 'CN' && food.recipes_cn) ||
        food.recipes
      "
    ></div>
    <div class="text-white flex justify-center mt-3 md:mt-9">
      <a
        class="bg-gradient-green-blue py-1 px-3 rounded-xl text-sm md:text-base"
        href="https://cms.bayoflights-entertainment.com/assets/7468d163-83c9-47ce-b90d-52d52940dce8"
        >Download Menu</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { IResponse } from 'types/api';
import { IFood } from 'types/food';

definePageMeta({
  layout: 'default',
});

const language = useLanguague();
const route = useRoute();
const food = (
  await (<Promise<IResponse<IFood[]>>>(
    useApi('items/foods?filter[slug]=' + route.params.slug, {
      method: 'GET',
    })
  ))
).data[0];
</script>

<style scoped></style>

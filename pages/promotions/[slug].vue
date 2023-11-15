<template>
  <LayoutsNavbarTransparent />
  <div
    :style="{
      backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255, 0) 77.29%, rgba(255, 255, 255, 0.77) 91.82%, rgba(255, 255, 255, 0.81) 93.07%, rgba(255, 255, 255, 0.96) 95.16%, #FFFFFF 99.74%, rgba(255, 255, 255, 0.9) 104.31%),linear-gradient(180deg, rgba(14, 76, 104, 0) 43.27%, rgba(14, 76, 104, 0.7) 80.21%, rgba(14, 76, 104, 0.7) 100%), url('${useImg(
        promotions.thumbnail
      )}')`,
    }"
    :class="`relative mt-12 bg-no-repeat bg-cover bg-center aspect-video w-full flex flex-col sm:space-y-6 space-y-2 items-center justify-center`"
  ></div>
  <div class="px-6 lg:px-48 py-6">
    <div class="text-primary text-lg md:text-2xl">
      {{
        (language === 'KH' && promotions.title_kh) ||
        (language === 'CN' && promotions.title_cn) ||
        promotions.title
      }}
    </div>
    <div class="flex items-center space-x-1 text-sm md:text-base">
      <IconsDate />
      <div class="text-gradient-green-blue">
        {{
          (language === 'KH' && 'សុពលភាពរហូតដល់ • ') ||
          (language === 'CN' && '') ||
          'valid until •'
        }}
        {{
          new Date(promotions.expiry_date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        }}
      </div>
    </div>
    <div class="text-primary text-sm md:text-base my-3">
      {{
        (language === 'KH' && 'អំពីប្រូម៉ូសិន') ||
        (language === 'CN' && '') ||
        'About Promotion'
      }}
    </div>
    <div
      class="text-xs md:text-base break-words"
      v-html="
        (language === 'KH' && promotions.description_kh) ||
        (language === 'CN' && promotions.description_cn) ||
        promotions.description
      "
    ></div>
  </div>
</template>

<script setup lang="ts">
import { IResponse } from 'types/api';
import { IPromotion } from 'types/promotion';
const language = useLanguague();
const route = useRoute();
const promotions = (
  await (<Promise<IResponse<IPromotion[]>>>(
    useApi('items/promotions?filter[slug]=' + route.params.slug, {
      method: 'GET',
    })
  ))
).data[0];
</script>

<style scoped></style>

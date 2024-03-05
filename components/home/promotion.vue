<template v-if="promotions.length > 0">
  <div
    class="text-center text-2xl md:text-5xl text-gradient-green-blue leading-normal pt-6"
  >
    {{
      (language === 'KH' && 'ប្រូម៉ូសិន') ||
      (language === 'CN' && '') ||
      'Promotions'
    }}
  </div>
  <div class="mx-6 my-3 text-center">
    <Carousel
      :autoplay="3000"
      ref="activitySlideHome"
      :breakpoints="breakpoints"
    >
      <Slide v-for="(p, index) in promotions" :key="index">
        <CardsPromotion :promotion="p" />
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
    <ClientOnly>
      <div class="flex flex-col items-center my-3">
        <div class="text-center font-bold md:text-xl">
          {{
            (language === 'KH' &&
              promotions[activitySlideHome.data.currentSlide.value]?.title_kh) ||
            (language === 'CN' && '') ||
            promotions[activitySlideHome.data.currentSlide.value]?.title
          }}
        </div>
      </div>
    </ClientOnly>
    <div class="text-center text-xs lg:text-sm my-3">
      {{
        (language === 'KH' && '*លក្ខខណ្ឌផ្សេងៗត្រូវបានអនុវត្ត') ||
        (language === 'CN' && '') ||
        '*Terms & Conditions Applied'
      }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { IResponse } from 'types/api';
import { IPromotion } from 'types/promotion';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
const activitySlideHome = ref();

const language = useLanguague();
const promotions: IPromotion[] = (
  await (<Promise<IResponse<IPromotion[]>>>(
    useApi('items/promotions?filter[status]=published&sort=-date_created', {
      method: 'GET',
    })
  ))
).data;
const breakpoints = {
  // mobile
  0: {
    wrapAround: true,
    itemsToShow: 1,
    snapAlign: 'start',
    mouseDrag: false,
  },
};
</script>

<style scoped></style>

<template>
  <div class="ellipse"></div>
  <div class="pb-24"></div>
  <div
    class="text-center font-lobster text-5xl lg:text-7xl text-gradient-green-blue leading-snug lg:pb-6"
  >
    {{
      (language === 'KH' && 'ប្រូម៉ូសិន') ||
      (language === 'CN' && '') ||
      'Promotions'
    }}
  </div>
  <div class="text-center lg:text-lg">
    {{
      (language === 'KH' && 'ទទួលយកប្រូម៉ូសិនដ៏អស្ចារ្យរបស់ពួកយើង') ||
      (language === 'CN' && '') ||
      'Check out our exclusive promotion!'
    }}
  </div>
  <div class="mx-6 my-12 text-center">
    <Carousel ref="activitySlide" :breakpoints="breakpoints">
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
              promotions[activitySlide.data.currentSlide.value].title_kh) ||
            (language === 'CN' && '') ||
            promotions[activitySlide.data.currentSlide.value].title
          }}
        </div>
      </div>
    </ClientOnly>
  </div>

  <div class="text-center text-xs lg:text-sm my-3">
    {{
      (language === 'KH' && '*លក្ខខណ្ឌផ្សេងៗត្រូវបានអនុវត្ត') ||
      (language === 'CN' && '') ||
      '*Terms & Conditions Applied'
    }}
  </div>
</template>

<script setup lang="ts">
import { IResponse } from 'types/api';
import { IPromotion } from 'types/promotion';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
const activitySlide = ref();

const language = useLanguague();
const promotions: IPromotion[] = (
  await (<Promise<IResponse<IPromotion[]>>>(
    useApi('items/promotions?sort=-date_created', { method: 'GET' })
  ))
).data;
const breakpoints = {
  // mobile
  0: {
    wrapAround: true,
    itemsToShow: 1,
    snapAlign: 'start',
    mouseDrag: false
  },
};
</script>

<style scoped>
.ellipse {
  /* Ellipse 2623 */

  position: absolute;
  width: 258.45px;
  height: 149.66px;
  left: -150px;
  top: -79px;

  background: #71b3a3;
  opacity: 0.24;
  filter: blur(17.5px);
  transform: rotate(20.77deg);
}
</style>

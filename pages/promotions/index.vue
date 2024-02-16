<template>
  <LayoutsNavbarTransparent />
  <h1 class="hidden">
    Promotions Resort Hotels Beach Offers Packages Cambodia
  </h1>
  <div class="ellipse"></div>
  <div class="pb-20"></div>
  <div
    class="text-center font-lobster text-5xl lg:text-7xl text-gradient-green-blue leading-snug"
  >
    {{
      (language === 'KH' && 'ប្រូម៉ូសិន') ||
      (language === 'CN' && '') ||
      'Promotions'
    }}
  </div>
  <div class="mx-6 my-3 text-center" v-if="promotions.length > 0">
    <div class="text-center lg:text-lg pb-6">
      {{
        (language === 'KH' && 'ទទួលយកប្រូម៉ូសិនដ៏អស្ចារ្យរបស់ពួកយើង') ||
        (language === 'CN' && '') ||
        'Check out our exclusive promotion!'
      }}
    </div>
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
    <div class="text-center text-xs lg:text-sm my-3">
      {{
        (language === 'KH' && '*លក្ខខណ្ឌផ្សេងៗត្រូវបានអនុវត្ត') ||
        (language === 'CN' && '') ||
        '*Terms & Conditions Applied'
      }}
    </div>
  </div>

  <div v-else class="flex flex-col items-center my-6">
    <img class="w-64 lg:w-80" src="/promotion.png" alt="" />
    <div class="lg:text-2xl">
      {{
        (language === 'KH' && '*លក្ខខណ្ឌផ្សេងៗត្រូវបានអនុវត្ត') ||
        (language === 'CN' && '') ||
        'There is currently no promotion available.'
      }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { IResponse } from 'types/api';
import { IPromotion } from 'types/promotion';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
const activitySlide = ref();

useHead({
  title: 'Promotions Resort Hotels Beach Offers Packages Cambodia',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        'Promotions Resort Hotels Beach Sihanoukville The beach was gorgeous accommodation with a garden & Private parking in Sihanoukville and it was amazing! ',
    },
  ],
});

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

<template>
  <div
    class="bg object-cover bg-center bg-no-repeat bg-cover w-full h-full lg:h-[90vh] bg-none flex flex-col justify-center"
  >
    <div class="m-4 lg:m-0 lg:ml-32 flex flex-col lg:flex-row">
      <div
        class="flex lg:flex-col justify-between lg:justify-start lg:space-y-6 mb-2 lg:mr-9"
      >
        <NuxtLink
          class="text-gradient-green-blue text-xl lg:text-4xl font-bold lg:pb-1"
          to="/"
        >
          {{
            (language === 'KH' && 'អាហារ') ||
            (language === 'CN' && '') ||
            'Foods'
          }}
        </NuxtLink>
        <div class="hidden lg:block w-60">
          {{
            (language === 'KH' && 'ពួកយើងមានម្ហូបសម្បូរបែបជាច្រើនដូចជាម្ហូបខ្មែរ ថៃ អឺរ៉ុប') ||
            (language === 'CN' && '') ||
            "We have Khmer Food, Western Food, Thai Food and many more."
          }}
        </div>
        <div class="flex space-x-3 items-center">
          <div @click="foodSlide.prev()">
            <IconsArrowLeft
              :active="foodSlide?.data?.currentSlide?.value != 0"
            />
          </div>
          <div @click="foodSlide.next()">
            <IconsArrowRight
              :active="
                foodSlide?.data?.currentSlide?.value !=
                foodSlide?.data?.maxSlide?.value
              "
            />
          </div>
        </div>
      </div>
      <Carousel
        class="grow"
        ref="foodSlide"
        :breakpoints="breakpoints"
        :mouseDrag="false"
      >
        <Slide v-for="(a, index) in activities" :key="index">
          <CardsFood :food="a" />
        </Slide>

        <template #addons> </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IResponse } from 'types/api';
import { IFood } from 'types/food';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
const foodSlide = ref();
const language = useLanguague();

const activities: IFood[] = (
  await (<Promise<IResponse<IFood[]>>>(
    useApi('items/foods?filter[status]=published', { method: 'GET' })
  ))
).data;

//responsive breakpoints for carousel
const breakpoints = {
  // mobile
  0: {
    itemsToShow: 1.6,
    snapAlign: 'center',
  },

  // 640px to 770
  640: {
    itemsToShow: 3,
    snapAlign: 'center',
  },

  // 770px to 1024
  960: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
};
</script>
<style scoped>

@media (min-width: 1024px) {
  .bg {
    background-image: linear-gradient(
        101.28deg,
        rgba(118, 183, 159, 0) -2.17%,
        rgba(75, 144, 190, 0) 101.26%
      ),
      url('/desktop-bg.webp');
  }
}
</style>

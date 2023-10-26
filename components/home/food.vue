<template>
  <div class="my-6 md:my-12 mx-4">
    <div class="flex justify-between">
      <NuxtLink
        class="text-gradient-green-blue text-xl md:text-2xl font-bold mb-3 leading-[2]"
        to="/"
      >
        {{
          (language === 'KH' && 'ម្ហូប') || (language === 'CN' && '') || 'Foods'
        }}
      </NuxtLink>

      <div class="flex space-x-3 items-center">
        <div @click="foodSlide.prev()">
          <IconsArrowLeft :active="foodSlide?.data?.currentSlide?.value != 0" />
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
    <Carousel ref="foodSlide" :breakpoints="breakpoints" :mouseDrag="false">
      <Slide v-for="(a, index) in activities" :key="index">
        <CardsFood :food="a" />
      </Slide>

      <template #addons> </template>
    </Carousel>
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
  await (<Promise<IResponse<IFood[]>>>useApi('items/foods', { method: 'GET' }))
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

<template>
  <div class="my-6 mx-4 select-none">
    <div class="flex justify-between px-3">
      <NuxtLink
        class="text-gradient-green-blue text-xl md:text-2xl font-bold mb-3"
        to="/"
      >
        Latest News
      </NuxtLink>

      <div class="flex space-x-3 items-center">
        <div @click="newsSlides.prev()">
          <IconsArrowLeft :active="newsSlides?.data?.currentSlide?.value != 0" />
        </div>
        <div @click="newsSlides.next()">
          <IconsArrowRight
            :active="
              newsSlides?.data?.currentSlide?.value !=
              newsSlides?.data?.maxSlide?.value
            "
          />
        </div>
      </div>
    </div>
    <Carousel ref="newsSlides" :breakpoints="breakpoints" :mouseDrag="false">
      <Slide v-for="(n, index) in news" :key="index">
        <CardsNews :news="n" />
      </Slide>

      <template #addons> </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import { IResponse } from 'types/api';
import { INews } from 'types/news';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
const newsSlides = ref();

const news: INews[] = (
  await (<Promise<IResponse<INews[]>>>useApi('items/news?sort=-date_created&filter[status]=published', { method: 'GET' }))
).data;

//responsive breakpoints for carousel
const breakpoints = {
  // mobile
  0: {
    itemsToShow: 1.25,
    snapAlign: 'center',
  },

  // 640px to 770
  640: {
    itemsToShow: 2,
    snapAlign: 'center',
  },

  // 770px to 1024
  770: {
    itemsToShow: 3,
    snapAlign: 'start',
  },
};
</script>

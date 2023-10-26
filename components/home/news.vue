<template>
  <div class="my-6 md:my-12 mx-4 select-none">
    <div class="flex justify-between px-3">
      <NuxtLink
        class="text-gradient-green-blue text-xl md:text-2xl font-bold mb-3"
        to="/"
      >
        {{
          (language === 'KH' && 'ព័ត៌មានថ្មីៗ') ||
          (language === 'CN' && '') ||
          'Latest News'
        }}
      </NuxtLink>

      <div class="flex space-x-3 items-center">
        <div @click="newsSlides.prev()">
          <IconsArrowLeft
            :active="newsSlides?.data?.currentSlide?.value != 0"
          />
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
const language = useLanguague();

const news: INews[] = (
  await (<Promise<IResponse<INews[]>>>(
    useApi('items/news?sort=-date_created&limit=4&filter[status]=published', {
      method: 'GET',
    })
  ))
).data;

//responsive breakpoints for carousel
const breakpoints = {
  // mobile
  0: {
    itemsToShow: 1.5,
    snapAlign: 'center',
  },

  500: {
    itemsToShow: 2,
    snapAlign: 'center',
  },

  // 640px to 770
  720: {
    itemsToShow: 3,
    snapAlign: 'center',
  },

  // 770px to 1024
  770: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
};
</script>

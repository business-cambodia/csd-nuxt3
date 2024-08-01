<template>
  <div
    class="bg object-cover bg-center bg-no-repeat bg-cover w-full h-full lg:h-[90vh] bg-none flex flex-col justify-center"
  >
    <div class="m-4 lg:m-0 lg:ml-32 flex flex-col lg:flex-row select-none">
      <div
        class="flex lg:flex-col justify-between lg:justify-start lg:space-y-6 mb-2 lg:mr-9"
      >
        <NuxtLink
          class="text-gradient-green-blue text-xl lg:text-4xl font-bold lg:pb-1"
          to="/"
        >
          {{
            (language === 'KH' && 'ព័ត៌មានថ្មីៗ') ||
            (language === 'CN' && '') ||
            'Latest News'
          }}
        </NuxtLink>
        <div class="hidden lg:block w-60">
          {{
            (language === 'KH' &&
              'ស្វែងយល់បន្ថែមពីព័ត៌មានផ្សេងៗនៅរីសត​ Summerbay') ||
            (language === 'CN' && '') ||
            "Find out what's happening at the Summerbay Resort"
          }}
        </div>
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
      <Carousel
        class="grow"
        ref="newsSlides"
        :breakpoints="breakpoints"
        :mouseDrag="false"
      >
        <Slide v-for="(n, index) in news" :key="index">
          <CardsNews :news="n" />
        </Slide>

        <template #addons> </template>
      </Carousel>
    </div>
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
  1024: {
    itemsToShow: 3.5,
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

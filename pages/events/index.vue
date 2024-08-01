<template>
  <LayoutsNavbarTransparent />
  <h1 class="hidden">Events Resort Hotels Beach Offers Packages Cambodia</h1>
  <div
    class="bg object-cover bg-center bg-no-repeat bg-cover w-full h-[90vh] bg-none flex flex-col justify-center"
  >
    <div class="flex flex-col justify-center items-center mb-2 lg:mr-9">
      <NuxtLink
        class="text-gradient-green-blue text-xl lg:text-4xl font-bold lg:pb-1"
        to="/"
      >
        {{
          (language === 'KH' && 'ព្រឹត្តិការណ៍ថ្មីៗ') ||
          (language === 'CN' && '') ||
          'Events'
        }}
      </NuxtLink>
      <div class="mb-6 text-sm lg:text-base text-center">
        {{
          (language === 'KH' &&
            'ស្វែងយល់បន្ថែមពីព្រឹត្តិការណ៍ផ្សេងៗនៅរីសត​ Summerbay') ||
          (language === 'CN' && '') ||
          "Find out what's happening at the Summerbay Resort"
        }}
      </div>
    </div>
    <div class="m-4 lg:m-0 lg:mx-3 flex justify-center items-center space-x-1">
      <div @click="eventSlide.prev()">
        <IconsChervonLeft />
      </div>
      <Carousel
        class="w-full lg:w-[50vw]"
        ref="eventSlide"
        :breakpoints="breakpoints"
      >
        <Slide v-for="(e, index) in events" :key="index">
          <CardsEvent :event="e" />
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
      <div @click="eventSlide.next()">
        <IconsChervonRight />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IResponse } from 'types/api';
import { IEvent } from 'types/event';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
const eventSlide = ref();
const language = useLanguague();

useHead({
  title: 'Events Resort Hotels Beach Offers Packages Cambodia',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        'Events Resort Hotels Beach Sihanoukville The beach was gorgeous accommodation with a garden & Private parking in Sihanoukville and it was amazing! ',
    },
  ],
});

const events: IEvent[] = (
  await (<Promise<IResponse<IEvent[]>>>(
    useApi('items/events?filter[status]=published&sort=-event_date&limit=4', {
      method: 'GET',
    })
  ))
).data;

//responsive breakpoints for carousel
const breakpoints = {
  // mobile
  0: {
    itemsToShow: 1,
    snapAlign: 'center',
    wrapAround: true,
  },

};
</script>

<style scoped>
.bg {
  background-image: linear-gradient(
      101.28deg,
      rgba(118, 183, 159, 0) -2.17%,
      rgba(75, 144, 190, 0) 101.26%
    ),
    url('/desktop-bg.webp');
}
</style>

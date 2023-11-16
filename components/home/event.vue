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
            (language === 'KH' && 'ព្រឹត្តិការណ៍ថ្មីៗ') ||
            (language === 'CN' && '') ||
            'Events'
          }}
        </NuxtLink>
        <div class="hidden lg:block w-60">
          {{
            (language === 'KH' && 'ស្វែងយល់បន្ថែមពីព្រឹត្តិការណ៍ផ្សេងៗនៅរីសត​ Summerbay') ||
            (language === 'CN' && '') ||
            "Find out what's happening at the Summerbay Resort"
          }}
        </div>
        <div class="flex space-x-3 items-center">
          <div @click="eventSlide.prev()">
            <IconsArrowLeft
              :active="eventSlide?.data?.currentSlide?.value != 0"
            />
          </div>
          <div @click="eventSlide.next()">
            <IconsArrowRight
              :active="
                eventSlide?.data?.currentSlide?.value !=
                eventSlide?.data?.maxSlide?.value
              "
            />
          </div>
        </div>
      </div>
      <Carousel
        class="grow"
        ref="eventSlide"
        :breakpoints="breakpoints"
        :mouseDrag="false"
      >
        <Slide v-for="(e, index) in events" :key="index">
          <CardsEvent :event="e" />
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IResponse } from 'types/api';
import { IEvent } from 'types/event';
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
const eventSlide = ref();
const language = useLanguague();

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
    itemsToShow: 1.2,
    snapAlign: 'center',
  },

  // 640px to 770
  640: {
    itemsToShow: 2,
    snapAlign: 'center',
  },

  // 770px to 1024
  770: {
    itemsToShow: 2.5,
    snapAlign: 'center',
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
      url('desktop-bg.png');
  }
}
</style>

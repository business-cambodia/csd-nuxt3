<template>
  <div class="m-4 md:my-12">
    <div class="flex justify-between mb-2">
      <NuxtLink
        class="text-gradient-green-blue text-xl md:text-2xl font-bold"
        to="/"
      >
        {{
          (language === 'KH' && 'ព្រឹត្តិការណ៍ថ្មីៗ') ||
          (language === 'CN' && '') ||
          'Upcoming Events'
        }}
      </NuxtLink>
      <div class="flex space-x-3 items-center md:hidden">
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
    <Carousel ref="eventSlide" :breakpoints="breakpoints" :mouseDrag="false">
      <Slide v-for="(e, index) in events" :key="index">
        <CardsEvent :event="e" />
      </Slide>
    </Carousel>
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
    useApi('items/events?sort=-event_date&limit=4', { method: 'GET' })
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
    itemsToShow: 3,
    snapAlign: 'center',
  },
};
</script>

<style scoped></style>

<template>
  <div
    class="flex my-6 md:my-12 md:mx-6 rounded-lg select-none bg-[linear-gradient(251.49deg,rgba(62,133,198,0.1)-3.81%,rgba(140,203,142,0.1)90.36%)] aspect-[2/3] md:aspect-auto"
  >
    <div class="flex flex-col items-center justify-center py-6">
      <div class="text-gradient-green-blue font-bold text-xl md:text-2xl">
        {{
          (language === 'KH' && 'ការផ្តល់យោបល់ផ្សេងៗលើពួកយើង') ||
          (language === 'CN' && '') ||
          'What people say about us'
        }}
      </div>
      <Carousel ref="testimonialsSlide" :breakpoints="breakpoints">
        <Slide v-for="(r, index) in testimonials.result.reviews" :key="index">
          <div class="flex flex-col space-y-3 px-6 mb-3">
            <div class="flex items-center justify-between px-[10%]">
              <div @click="testimonialsSlide.prev()">
                <IconsChervonLeft />
              </div>
              <img :src="r.profile_photo_url" alt="" />
              <div @click="testimonialsSlide.next()">
                <IconsChervonRight />
              </div>
            </div>
            <div class="text-sm md:text-base line-clamp-[9] text-gray-600">
              {{ r.text }}
            </div>
            <div class="flex justify-center space-x-2">
              <IconsStar v-for="s in r.rating" />
            </div>
            <div class="font-bold">{{ r.author_name }}</div>
          </div>
        </Slide>
        <template #addons> </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
const testimonialsSlide = ref();
const language = useLanguague();

const testimonials: any = (
  await useFetch(
    'https://maps.googleapis.com/maps/api/place/details/json?fields=reviews&place_id=ChIJH6JdHrEJCDERgqBGdlxE00E&key=AIzaSyDzeX_CZ3TfqBbNHoJDnGViWHgYkwIjg7Y'
  )
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

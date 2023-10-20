<template>
  <div class="my-6">
    <div class="flex justify-center">
      <NuxtLink
        class="text-gradient-green-blue text-xl md:text-2xl font-bold mb-3"
        to="/"
      >
        {{
          (language === 'KH' && 'សកម្មភាព') ||
          (language === 'CN' && '') ||
          'Activities'
        }}
      </NuxtLink>
    </div>
    <Carousel ref="activitySlide" :breakpoints="breakpoints">
      <Slide v-for="(a, index) in activities" :key="index">
        <CardsActivity :activity="a" />
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
    <ClientOnly>
      <div class="flex flex-col items-center my-3 px-6">
        <div class="text-center font-bold md:text-xl">
          {{
            (language === 'KH' &&
              activities[activitySlide.data.currentSlide.value].name_kh) ||
            (language === 'CN' && '') ||
            activities[activitySlide.data.currentSlide.value].name
          }}
        </div>
        <div
          class="text-sm md:text-base text-center mt-3 line-clamp-2"
          v-html="
            (language === 'KH' &&
              activities[activitySlide.data.currentSlide.value]
                .description_kh) ||
            (language === 'CN' && '') ||
            activities[activitySlide?.data?.currentSlide.value]?.description
          "
        ></div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { IResponse } from 'types/api';
import { IActivity } from 'types/activity';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
const activitySlide = ref();
const language = useLanguague();

const activities: IActivity[] = (
  await (<Promise<IResponse<IActivity[]>>>(
    useApi('items/activities', { method: 'GET' })
  ))
).data;

//responsive breakpoints for carousel
const breakpoints = {
  // mobile
  0: {
    wrapAround: true,
    itemsToShow: 1.75,
    snapAlign: 'center',
  },

  // 640px to 770
  640: {
    wrapAround: true,
    itemsToShow: 2,
    snapAlign: 'center',
  },

  // 770px to 1024
  770: {
    wrapAround: true,
    itemsToShow: 3,
    snapAlign: 'center',
  },
};
</script>

<style scoped>
.carousel__slide {
  padding: 0px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.8);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.8);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1);
}
</style>

<style>
.carousel__pagination-button::after {
  height: 9px;
  width: 9px;
  border-radius: 100%;
}

.carousel__pagination-button--active::after {
  width: 24px;
  border-radius: 9px;
  background: linear-gradient(
    101.28deg,
    rgba(118, 183, 159, 0.9) -2.17%,
    rgba(75, 144, 190, 0.9) 101.26%
  );
}
</style>

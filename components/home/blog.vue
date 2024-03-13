<template>
  <div class="my-6">
    <div
      class="text-2xl md:text-4xl text-gradient-green-blue text-center mb-6 font-sans line-clamp-6"
    >
      {{
        (language === 'KH' && 'Blog របស់យើង') ||
        (language === 'CN' && '') ||
        'Our Blogs'
      }}
    </div>
    <div class="md:mx-12">
      <Carousel
        class="md:col-span-10"
        ref="blogSlideHome"
        :breakpoints="breakpoints"
      >
        <Slide v-for="(b, index) in blogs" :key="index">
          <CardsBlog :blog="b" />
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import { IResponse } from 'types/api';
import { IBlog } from 'types/blog';
const language = useLanguague();
const blogs = (
  await (<Promise<IResponse<IBlog[]>>>(
    useApi('items/blogs?filter[status]=published&limit=3&sort=-date_created', {
      method: 'GET',
    })
  ))
).data;

//responsive breakpoints for carousel
const breakpoints = {
  // mobile
  0: {
    autoplay: 3000,
    wrapAround: true,
    itemsToShow: 1,
    snapAlign: 'center',
  },

  // 770px to 1024
  770: {
    wrapAround: true,
    itemsToShow: 2,
    snapAlign: 'start',
  },
  1024: {
    wrapAround: true,
    itemsToShow: blogs.length >= 3 ? 3 : blogs.length,
    snapAlign: 'start',
  },
};
</script>

<style scoped></style>

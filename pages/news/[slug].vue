<template>
  <div
    :style="{
      backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 77.29%, rgba(255, 255, 255, 0.87) 91.82%, rgba(255, 255, 255, 0.91) 93.07%, rgba(255, 255, 255, 0.96) 95.16%, #FFFFFF 99.74%, rgba(255, 255, 255, 0.9) 104.31%),linear-gradient(180deg, rgba(14, 76, 104, 0) 43.27%, rgba(14, 76, 104, 0.7) 80.21%, rgba(14, 76, 104, 0.7) 100%), url('${useImg(
        news.thumbnail
      )}')`,
    }"
    :class="`relative bg-no-repeat bg-cover bg-center h-[60vh] md:h-[75vh] flex flex-col sm:space-y-6 space-y-2 items-center justify-center`"
  ></div>
  <div class="px-6 lg:px-48 pb-6">
    <div class="text-primary text-lg md:text-2xl">
      {{
        (language === 'KH' && news.title_kh) ||
        (language === 'CN' && news.title_cn) ||
        news.title
      }}
    </div>
    <div class="flex items-center space-x-1 text-sm md:text-base">
      <IconsDate />
      <div class="text-gradient-green-blue">
        {{
          new Date(news.date_created).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        }}
        {{
          (language === 'KH' && '• រយៈពេលអាន 1នាទី') ||
          (language === 'CN' && '') ||
          '• 1 min read'
        }}
      </div>
    </div>
    <div class="text-primary text-sm md:text-base my-3">
      {{
        (language === 'KH' && 'ការពិព័ណ៌នា') ||
        (language === 'CN' && '') ||
        'Description'
      }}
    </div>
    <div
      class="text-xs md:text-base break-words"
      v-html="
        (language === 'KH' && news.description_kh) ||
        (language === 'CN' && news.description_cn) ||
        news.description
      "
    ></div>
  </div>
</template>

<script setup lang="ts">
import { IResponse } from 'types/api';
import { INews } from 'types/news';
const language = useLanguague();
const route = useRoute();
const news = (
  await (<Promise<IResponse<INews[]>>>(
    useApi('items/news?filter[slug]=' + route.params.slug, { method: 'GET' })
  ))
).data[0];

useHead({
  title: news.title,
  meta: [
    {
      property: 'og:image',
      content: useImg(news.thumbnail),
    },
    {
      hid: 'og:image',
      name: 'og:image',
      content: useImg(news.thumbnail),
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: news.description,
    },
    {
      hid: 'og:title',
      name: 'og:title',
      content: news.title,
    },
    {
      hid: 'description',
      name: 'description',
      content: news.description,
    },
  ],
});
</script>

<style scoped></style>

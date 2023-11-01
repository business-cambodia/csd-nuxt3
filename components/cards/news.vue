<template>
  <NuxtLink
    :to="`/news/${news.slug}`"
    :style="{
      backgroundImage: `linear-gradient(180deg, rgba(14, 76, 104, 0) 43.27%, rgba(14, 76, 104, 0.7) 80.21%, rgba(14, 76, 104, 0.7) 100%),url(${useImg(
        news.thumbnail
      )})`,
    }"
    :class="`aspect-[2/3] max-h-[s00px] w-full rounded-3xl object-cover bg-top bg-no-repeat bg-cover mr-3 relative`"
  >
    <div class="absolute bottom-3 px-3 w-full h-2/5">
      <div
        :style="{
          backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))`,
        }"
        class="h-full w-full rounded-xl p-3 flex"
      >
        <div class="flex flex-col items-center justify-center align-middle">
          <div class="line-clamp-3 font-bold text-sm md:text-lg text-start">
            {{
              (language === 'KH' && news.title_kh) ||
              (language === 'CN' && news.title_cn) ||
              news.title
            }}
          </div>
          <div class="text-gradient-green-blue text-xs md:text-sm italic px-1">
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
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { INews } from 'types/news';
defineProps<{
  news: INews;
}>();
const language = useLanguague();
</script>

<style scoped></style>

<template>
  <div
    :style="{
      backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 77.29%, rgba(255, 255, 255, 0.87) 91.82%, rgba(255, 255, 255, 0.91) 93.07%, rgba(255, 255, 255, 0.96) 95.16%, #FFFFFF 99.74%, rgba(255, 255, 255, 0.9) 104.31%), linear-gradient(245.5deg, rgba(14, 76, 104, 0) -5.67%, #0E4C68 126.05%), url('${useImg(
        event.thumbnail
      )}')`,
    }"
    :class="`relative bg-no-repeat bg-cover bg-center h-[60vh] md:h-[75vh] flex flex-col sm:space-y-6 space-y-2 items-center justify-center`"
  ></div>
  <div class="px-6 lg:px-48 pb-6">
    <div class="text-primary text-lg md:text-2xl">
      {{
        (language === 'KH' && event.title_kh) ||
        (language === 'CN' && event.title_cn) ||
        event.title
      }}
    </div>
    <div class="flex items-center space-x-1 text-sm md:text-base">
      <IconsDate />
      <div class="text-gradient-green-blue">
        {{
          new Date(event.event_date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        }}
      </div>
    </div>
    <div class="text-primary text-sm md:text-base my-3">
      {{
        (language === 'KH' && 'អំពីព្រឹត្តិការណ៍') ||
        (language === 'CN' && '') ||
        'About Event'
      }}
    </div>
    <div
      class="text-xs md:text-base break-words"
      v-html="
        (language === 'KH' && event.description_kh) ||
        (language === 'CN' && event.description_cn) ||
        event.description
      "
    ></div>
  </div>
</template>

<script setup lang="ts">
import { IResponse } from 'types/api';
import { IEvent } from '~~/types/event';
const language = useLanguague();
const route = useRoute();
const event = (
  await (<Promise<IResponse<IEvent[]>>>(
    useApi('items/events?filter[slug]=' + route.params.slug, { method: 'GET' })
  ))
).data[0];

useHead({
  meta: [
    {
      property: 'og:image',
      content: useImg(event.thumbnail),
    },
    {
      hid: 'og:image',
      name: 'og:image',
      content: useImg(event.thumbnail),
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: event.description,
    },
    {
      hid: 'og:title',
      name: 'og:title',
      content: event.title,
    },
    {
      hid: 'description',
      name: 'description',
      content: event.description,
    },
  ],
});
</script>

<style scoped></style>

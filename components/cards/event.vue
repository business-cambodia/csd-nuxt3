<template>
  <NuxtLink
    class="relative text-white aspect-video w-full rounded-xl mr-3"
    :to="`/events/${event.slug}`"
  >
    <div
      :style="{
        backgroundImage: `linear-gradient(182.04deg, rgba(14, 76, 104, 0) 50.45%, rgba(14, 76, 104, 0.79) 90.59%, rgba(14, 76, 104, 0.79) 105.17%),url(${useImg(
          event.thumbnail
        )})`,
      }"
      class="object-cover bg-center bg-no-repeat bg-cover rounded-xl w-full h-full"
    >
      <div
        class="absolute flex flex-col justify-center items-center top-3 right-3 bg-gradient-green-blue rounded-xl w-1/6 h-1/3"
      >
        <div class="text-lg xl:text-xl">
          {{ new Date(event.event_date).getDate() }}
        </div>
        <div class="text-xs xl:text-sm">
          {{
            new Date(event.event_date).toLocaleDateString(undefined, {
              month: 'short',
            })
          }}
        </div>
      </div>
      <div class="absolute bottom-3 px-3 xl:text-lg">
        {{
          (language === 'KH' && event.title_kh) ||
          (language === 'CN' && event.title_cn) ||
          event.title
        }}
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const language = useLanguague();
import { IEvent } from '~~/types/event';
defineProps<{
  event: IEvent;
}>();
</script>

<style scoped></style>

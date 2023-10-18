<template>
  <NuxtLink
    class="relative  text-white h-48 md:h-60 w-full rounded-xl mr-3"
    :to="`/`"
  >
    <div
      :style="{
        backgroundImage: `url(${useImg(
          event.thumbnail
        )})`,
      }"
      class="object-cover bg-center bg-no-repeat bg-cover rounded-xl w-full h-full"
    >
      <div
        class="absolute flex flex-col justify-center items-center top-3 right-3 bg-gradient-green-blue rounded-xl w-1/6 h-1/3"
      >
        <div class="text-lg md:text-xl">
          {{ new Date(event.event_date).getDate() }}
        </div>
        <div class="text-xs md:text-sm">
          {{
            new Date(event.event_date).toLocaleDateString(undefined, {
              month: 'short',
            })
          }}
        </div>
      </div>
      <div class="absolute bottom-6 px-3 md:text-lg">
        {{ lang == 'KH' && event.title_kh ? event.title_kh : event.title }}
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const lang = useLanguague();
import { IEvent } from '~~/types/event';
defineProps<{
  event: IEvent;
}>();
</script>

<style scoped></style>

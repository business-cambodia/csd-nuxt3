<template>
  <div
    :style="{
      backgroundImage: `linear-gradient(182.04deg, rgba(14, 76, 104, 0) 43.63%, rgba(14, 76, 104, 0.68) 79.92%, rgba(14, 76, 104, 0.68) 105.17%),url(${useImg(
        accommodation.images[0].directus_files_id
      )})`,
    }"
    class="relative text-white object-cover bg-center bg-no-repeat bg-cover rounded-xl w-full h-full aspect-video"
  >
    <div
      class="absolute flex flex-col justify-center items-center top-3 right-3 bg-gradient-green-blue rounded-xl w-[13%] h-[30%]"
    >
      <div class="text-lg md:text-2xl">
        {{ accommodation.pax }}
      </div>
      <div class="text-xs md:text-base">
        {{
          (language === 'KH' && 'នាក់') || (language === 'CN' && '') || 'Paxes'
        }}
      </div>
    </div>
    <div class="absolute bottom-3 px-3 flex flex-col">
      <div class="text-lg md:text-2xl font-bold">
        {{
          (language === 'KH' && accommodation.title_kh) ||
          (language === 'CN' && accommodation.title_cn) ||
          accommodation.name
        }}
      </div>
      <div class="font-bold text-lg">
        ${{ accommodation.price
        }}<span class="text-xs md:text-sm">
          /
          {{
            (language === 'KH' && 'យប់') || (language === 'CN' && '') || 'night'
          }}</span
        >
      </div>
    </div>
    <button
      class="absolute right-3 md:text-xl px-3 py-1 md:py-2 bottom-3 rounded-xl bg-gradient-green-blue"
      id="btn-interested"
      @click="$router.push('/bookings')"
    >
      {{
        (language === 'KH' && 'កក់ឥឡូវ​នេះ') ||
        (language === 'CN' && '') ||
        'Book Now'
      }}
    </button>
  </div>
  <ul class="list-disc text-[10px] my-1 ml-8 md:text-base">
    <li v-for="(amentie, index) in accommodation.amenties">
      {{ amentie }}
    </li>
  </ul>
</template>

<script setup lang="ts">
const language = useLanguague();
import { IAccommodation } from 'types/accommodation';
defineProps<{
  accommodation: IAccommodation;
  changeRoom: Function;
}>();
</script>

<style scoped></style>

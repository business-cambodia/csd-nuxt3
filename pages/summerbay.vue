<template>
  <h1 class="hidden">
    Summer Bay Beach Club and Cabins in Sihanoukville Cambodia
  </h1>
  <div
    :style="{
      backgroundImage: `linear-gradient(180deg,rgba(255,255,255,0)77.29%,rgba(255,255,255,0.87)91.82%,rgba(255,255,255,0.91)93.07%,rgba(255,255,255,0.96)95.16%,rgb(255,255,255)99.74%,rgba(255,255,255,0.9)104.31%),linear-gradient(245.5deg,rgba(14,76,104,0)-5.67%,rgb(14,76,104)126.05%),url('accommodation.jpg')`,
    }"
    class="relative bg-no-repeat bg-cover bg-center h-[60vh] flex flex-col sm:space-y-6 space-y-2 items-center justify-center"
  >
    <div class="font-lobster text-white text-4xl md:text-6xl">
      {{
        (language == 'KH' && 'សូមស្វាគមន៍') ||
        (language === 'CN' && '') ||
        'Welcome'
      }}
    </div>
    <div class="text-center text-white text-xs md:text-base px-3">
      {{
        language == 'EN'
          ? 'Come Indulge at Summer Bay Beach Club (Bay of Lights), Sihanoukville. Where senses come alive!'
          : 'ទួលយកបទពិសោធន៍ដ៏ល្អឥតខ្ចោះ ជាមួយការសម្រាកលំហែកាយដ៏ស្ងប់ស្ងាត់នៅរីសតដ៏ប្រណីត ទទួលទានអាហារដ៏ឈ្ងុយឆ្ងាញ់ និងសកម្មភាពកម្សាន្តលើឆ្នេរសមុទ្រឯកជនដ៏អស្ចារ្យ'
      }}
    </div>
  </div>
  <div class="mx-4 md:mx-40 lg:mx-80">
    <header class="">
      <div
        class="text-center text-2xl sm:text-4xl font-bold uppercase text-primary"
      >
        {{
          (language == 'KH' && 'កន្លែងស្នាក់នៅរបស់ពួកយើង') ||
          (language === 'CN' && '') ||
          'Our Accommodations'
        }}
      </div>
      <div class="flex justify-center my-1">
        <div class="text-center w-32 border-gold border-b-2"></div>
      </div>
    </header>
    <div class="" v-for="(accommodation, index) in accommodations">
      <div class="my-4" :key="index">
        <CardsAccommodation
          :accommodation="accommodation"
          :changeRoom="changeRoom"
        />
      </div>
      <hr />
    </div>
    <div class="text-xs sm:text-base font-bold text-center">
      {{ language == 'EN' ? '*Disclamer:' : '*បញ្ជាក់:' }}
    </div>
    <div class="text-xs sm:text-base">
      {{
        language == 'EN'
          ? '•Cabin types ( eg. garden view, sea view) will be allocated subject to availability.'
          : '•ប្រភេទនៃបន្ទប់នឹងត្រូវបែងចែកទៅតាមចំនួនដែលមានជាក់ស្តែង'
      }}
    </div>
    <div class="text-xs sm:text-base">
      {{
        language == 'EN'
          ? '•This rates are not applicable for holidays.'
          : '•តម្លៃនេះអាចប្រែប្រួលទៅតាមថ្ងៃឈប់សម្រាក'
      }}
    </div>
    <div class="text-xs sm:text-base">
      {{
        language == 'EN'
          ? '•You must place your booking three days in advance of your desired staying date.'
          : '•លោកអ្នកត្រូវតែកក់បន្ទប់ឱ្យបានមុន៣ថ្ងៃដែលត្រូវចូលស្នាក់នៅ'
      }}
    </div>
  </div>
  <!-- <ModalsBooking :rooms="accommodations" :propRoom="room" /> -->
</template>

<script setup lang="ts">
import { initFlowbite } from 'flowbite';
import { IAccommodation } from 'types/accommodation';
import { IResponse } from 'types/api';

useHead({
  title: 'Summer Bay Beach Club and Cabins in Sihanoukville Cambodia',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        'Summer Bay Beach Club and Cabins in Sihanoukville Cambodia and it was amazing! The beach Beach Sihanoukville is gorgeous - white sand, crystal clear water',
    },
  ],
});

const language = useLanguague();
const room = ref({});
const accommodations = (
  await (<Promise<IResponse<IAccommodation[]>>>(
    useApi(
      'items/accommodations?filter[status]=published&fields=*,images.directus_files_id',
      { method: 'GET' }
    )
  ))
)?.data;

const changeRoom = (_room: any) => {
  room.value = _room;
};
onMounted(() => {
  initFlowbite();
});
</script>

<style scoped></style>

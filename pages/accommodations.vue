<template>
  <div class="w-full h-12 bg-primary md:h-14 fixed top-0"></div>
  <div class="mx-4 mt-[70px] md:mx-40 lg:mx-80">
    <header class="my-6">
      <div
        class="text-center text-2xl sm:text-4xl font-bold uppercase text-primary"
      >
        {{
          language == 'EN' ? 'Our Accommodations' : 'កន្លែងស្នាក់នៅរបស់ពួកយើង'
        }}
      </div>
      <div class="flex justify-center my-1">
        <div class="text-center w-32 border-gold border-b-2"></div>
      </div>
      <div class="text-center text-xs sm:text-base">
        {{
          language == 'EN'
            ? 'Book Now Experience the perfect blend of indulgence and tranquility with our elegant cottage hotel, delicious dinning and extraordinary beach activities.'
            : 'ទួលយកបទពិសោធន៍ដ៏ល្អឥតខ្ចោះ ជាមួយការសម្រាកលំហែកាយដ៏ស្ងប់ស្ងាត់នៅរីសតដ៏ប្រណីត ទទួលទានអាហារដ៏ឈ្ងុយឆ្ងាញ់ និងសកម្មភាពកម្សាន្តលើឆ្នេរសមុទ្រឯកជនដ៏អស្ចារ្យ'
        }}
      </div>
    </header>
    <div class="" v-for="(accommodation, index) in accommodations">
      <div class="my-4" :key="index">
        <div class="text-gold font-bold text-lg md:text-2xl">
          🌟 {{ accommodation.name }}
        </div>
        <div class="flex justify-between mx-7 items-center md:text-xl">
          <div class="flex items-center gap-1 text-lg md:text-xl">
            💎
            <div class="text-lg md:text-xl">
              {{ language == 'EN' ? 'Price' : 'តម្លៃ' }}:
            </div>
            <!-- <div class="relative text-xs">
              ${{ accommodation.price }}
              <div
                class="absolute bottom-2 left-0 w-full h-full border-b border-red-600 transform -rotate-6"
              ></div>
            </div> -->
            <div class="font-bold underline">${{ accommodation.price }}</div>
            /
            {{ language == 'EN' ? 'night' : 'យប់' }}
          </div>
          <div>
            👤 {{ accommodation.pax }}
            {{ language == 'EN' ? 'paxes' : 'នាក់' }}
          </div>
        </div>
        <div class="flex items-center gap-1 ml-7 text-lg"></div>

        <ul class="list-disc text-[0.8rem] ml-8 my-2 md:text-base">
          <li v-for="(amentie, index) in accommodation.amenties">
            {{ amentie }}
          </li>
        </ul>
        <div class="my-2">
          <img
            class="rounded-xl"
            :src="useImg(accommodation.images[0].directus_files_id)"
            alt="img"
            loading="lazy"
          />
        </div>
        <div class="flex justify-center">
          <button
            id="btn-interested"
            data-modal-target="booking-modal"
            data-modal-toggle="booking-modal"
            class="bg-primary text-white py-1 px-3 font-bold rounded-lg flex items-center gap-1 md:text-lg"
            @click="room = accommodation"
          >
            {{ language == 'EN' ? 'Book Now' : 'កក់ឥឡូវ​នេះ' }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              fill="white"
            >
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              />
            </svg>
          </button>
        </div>
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
  <ModalsBooking :rooms="accommodations" :propRoom="room" />
</template>

<script setup lang="ts">
import { initFlowbite } from 'flowbite';

const language = useLanguague();
const room = ref({});
const accommodations: any = (
  await useApi(
    'items/accommodations?filter[status]=published&fields=*,images.directus_files_id',
    { method: 'GET' }
  )
)?.data;
onMounted(() => {
  initFlowbite();
});
</script>

<style scoped></style>

<template>
  <LayoutsNavbarWhite />
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
            <div class="relative text-xs">
              ${{ accommodation.price }}
              <div
                class="absolute bottom-2 left-0 w-full h-full border-b border-red-600 transform -rotate-6"
              ></div>
            </div>
            <div class="font-bold underline">
              ${{ accommodation.discounted_price }}
            </div>
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
          ? '•You must place your booking three days in advance of your desired staying date.'
          : '•លោកអ្នកត្រូវតែកក់បន្ទប់ឱ្យបានមុន៣ថ្ងៃដែលត្រូវចូលស្នាក់នៅ'
      }}
    </div>
  </div>
  <ModalsBooking :rooms="accommodations" :propRoom="room" />
  <footer
    class="bottom-0 h-full bg-primary text-white text-center select-none md:flex md:justify-center md:space-x-12 md:items-end"
  >
    <div class="md:flex md:flex-col md:space-y-2">
      <a href="https://goo.gl/maps/23AiZ5hPutkHD7Xe6" target="_blank">
        <div
          :class="
            'font-katibeh flex justify-center h-8 pt-2 sm:items-center underline decoration-1 underline-offset-2 ' +
            (language == 'EN' ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl')
          "
        >
          {{ language == 'EN' ? 'Our Address' : 'ទីតាំងពួកយើង' }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="0.7em"
            viewBox="0 0 576 512"
            fill="white"
            class="ml-2 shake-button"
          >
            <path
              d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
            />
          </svg></div
      ></a>
      <div class="text-base md:text-lg">
        {{
          language == 'EN'
            ? 'Chhner Ream Blvd, Sihanoukville (city), Cambodia'
            : 'មហាវិថីឆ្នេររាម ក្រុងព្រះសីហនុ ព្រះរាជាណាចក្រកម្ពុជា'
        }}
      </div>
    </div>
    <div class="text-sm md:text-lg">
      {{ language == 'EN' ? 'Developed by' : 'វែបសាយបង្កើតដោយ' }}
      <a
        class="underline"
        href="https://facebook.com/techcambodia2022"
        target="_blank"
        >Technology Cambodia</a
      >
    </div>
  </footer>
</template>

<script setup lang="ts">
const language = useLanguague();
const room = ref({});
const accommodations: any = (
  await useApi(
    'items/accommodations?filter[status]=published&fields=*,images.directus_files_id',
    { method: 'GET' }
  )
)?.data;
</script>

<style scoped></style>

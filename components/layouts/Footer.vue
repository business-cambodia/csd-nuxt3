<template>
  <div
    class="h-[40vh] w-full bg-no-repeat bg-cover bg-center mb-16 xl:mb-0 flex flex-col xl:flex-row items-center xl:items-end xl:pb-6 justify-center xl:justify-between xl:px-[10%] text-white mt-2"
    :style="{
      backgroundImage: `linear-gradient(180deg, rgba(14, 76, 104, 0) -58.05%, #0E4C68 100%), url('/footer.webp')`,
    }"
  >
    <div
      class="flex flex-col xl:space-y-6 items-center xl:items-start justify-center"
    >
      <NuxtLink to="/">
        <img src="/SUMMER-BAY-Logo-01.png" class="w-40 xl:w-44" alt="logo" />
      </NuxtLink>
      <div class="flex my-2 space-x-5 xl:hidden">
        <a
          href="https://www.facebook.com/summerbaybeachclubandcabins"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.8em"
            viewBox="0 0 512 512"
            fill="white"
          >
            <path
              d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/summerbay_beachclub_cabins"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.9em"
            viewBox="0 0 448 512"
            fill="white"
          >
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            />
          </svg>
        </a>
        <a
          href="https://www.tiktok.com/@beach_club_cabins"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.8em"
            viewBox="0 0 448 512"
            fill="white"
          >
            <path
              d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
            />
          </svg>
        </a>
        <a
          href="https://www.youtube.com/@Summerbaybeachclubandcabins"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.8em"
            viewBox="0 0 576 512"
            fill="white"
          >
            <path
              d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
            />
          </svg>
        </a>
      </div>
      <div class="text-sm text-center xl:text-start">
        <div class="sm:flex space-x-1">
          <p>
            {{
              (language === 'KH' &&
                'លេខទំនាក់ទំនងរីសត និងលេខទំនាក់ទំនងការឧបត្ថម្ភ') ||
              (language === 'CN' && '') ||
              'Resort Contact & Sponsorship Enquiries'
            }}:
          </p>
          <!-- <span>+855 17 505 444 / 070 888 452</span> -->
        </div>
        <a
          href="https://maps.app.goo.gl/9nxTHZxP6yEdGE2s8"
          target="_blank"
          class="underline"
        >
          {{
            (language === 'KH' &&
              'មហាវិថីឆ្នេររាម ក្រុងព្រះសីហនុ ព្រះរាជាណាចក្រកម្ពុជា') ||
            (language === 'CN' && '') ||
            'Chhner Ream Blvd, Sihanoukville, Cambodia'
          }}
        </a>
        <div class="flex flex-col xl:flex-row xl:mt-6">
          <div class="">© 2024 Summer Bay All rights reserved</div>
          <div class="mx-3 hidden xl:block">||</div>
          <div>
            {{
              (language === 'KH' && 'អភិវឌ្ឍន៍ដោយ') ||
              (language === 'CN' && '') ||
              'Developed by'
            }}
            <a
              class="font-bold font-serif"
              href="https://facebook.com/techcambodia2022"
              target="_blank"
              >Technology Cambodia</a
            >
            <div
              class="flex xl:opacity-0 xl:fixed text-sm space-y-1 space-x-3 justify-center items-center"
            >
              <div class="text-xs sm:text-sm">We accept:</div>
              <IconsWeAccept />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden xl:flex xl:flex-col space-y-3">
      <div class="hidden xl:flex space-x-5">
        <a
          href="https://www.facebook.com/summerbaybeachclubandcabins"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.8em"
            viewBox="0 0 512 512"
            fill="white"
          >
            <path
              d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/summerbay_beachclub_cabins"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.9em"
            viewBox="0 0 448 512"
            fill="white"
          >
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            />
          </svg>
        </a>
        <a
          href="https://www.tiktok.com/@beach_club_cabins"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.8em"
            viewBox="0 0 448 512"
            fill="white"
          >
            <path
              d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
            />
          </svg>
        </a>
        <a
          href="https://www.youtube.com/@Summerbaybeachclubandcabins"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.8em"
            viewBox="0 0 576 512"
            fill="white"
          >
            <path
              d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
            />
          </svg>
        </a>
      </div>
      <div class="text-sm flex space-x-3">
        <div>We accept:</div>
        <!-- <IconsWeAccept  /> -->
        <IconsWeAccept class="hidden xl:block" />
      </div>
    </div>
  </div>
</template>

<script setup>
const language = useLanguague();
</script>

<style lang="scss" scoped></style>

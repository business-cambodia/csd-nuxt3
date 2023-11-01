<template>
  <svg
    class="w-7 sm:w-9"
    viewBox="0 0 29 28"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M28.5 14C28.5 21.7319 22.2319 28 14.5 28C6.76801 28 0.5 21.7319 0.5 14C0.5 6.26801 6.76801 0 14.5 0C22.2319 0 28.5 6.26801 28.5 14ZM18.7 9.8C18.7 12.1197 16.8197 14 14.5 14C12.1803 14 10.3 12.1197 10.3 9.8C10.3 7.48041 12.1803 5.6 14.5 5.6C16.8197 5.6 18.7 7.48041 18.7 9.8ZM14.5 25.9C16.9976 25.9 19.3156 25.1306 21.2297 23.8157C22.0751 23.235 22.4363 22.1287 21.9449 21.2285C20.926 19.3624 18.8263 18.2 14.4999 18.2C10.1736 18.2 8.07396 19.3623 7.055 21.2285C6.56347 22.1287 6.92474 23.2348 7.77014 23.8155C9.68425 25.1304 12.0023 25.9 14.5 25.9Z"
      :fill="
        scrollPosition > 0 && drawer == false && 'url(#paint0_linear_1057_5256)'
      "
    />
    <defs v-if="scrollPosition > 0 && drawer == false">
      <linearGradient
        id="paint0_linear_1057_5256"
        x1="-0.229858"
        y1="-1.41861e-06"
        x2="33.1793"
        y2="6.66114"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#76B79F" />
        <stop offset="1" stop-color="#4B90BE" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script setup>
defineProps({
  drawer: Boolean,
  scrollPosition: Number,
});
</script>

<style scoped></style>

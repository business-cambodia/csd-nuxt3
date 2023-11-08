<template>
  <svg
    class="w-6 sm:w-8"
    viewBox="0 0 22 17"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
  <path
      d="M2 2H20M2 8.75H20M2 15.5H20"
      :stroke="scrollPosition > 0 && drawer == false ? 'url(#paint0_linear_1044_4152)' : 'white'"
      stroke-width="2.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs v-if="scrollPosition > 0 && drawer == false">
      <linearGradient
        id="paint0_linear_1044_4152"
        x1="1.53081"
        y1="2"
        x2="22.3879"
        y2="7.54467"
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

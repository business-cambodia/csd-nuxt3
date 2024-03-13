<template>
  <div class="rounded-md p-3 flex space-x-s3 shadow-md items-center">
    <IconsWechat />
    <div class="flex flex-col -space-y-1 ml-3">
      <p class="text-xs font-semibold text-[#081B37]">Wechat</p>
      <p class="text-[10px] text-[#697386]">Scan to pay with Wechat</p>
    </div>
    <button class="ml-auto">
      <svg
        v-if="cart.payment_option == 'wechat'"
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        width="20"
        viewBox="0 0 448 512"
        fill="green"
      >
        <path
          d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
        />
      </svg>
      <svg
        v-else
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="20" height="20" rx="3.2" fill="#F2F3F7" />
        <path
          d="M9 7L12.0987 10.2485L9 13.5488"
          stroke="#535362"
          stroke-width="1.6"
          stroke-linecap="round"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
const cart = useCart();
</script>

<style scoped></style>

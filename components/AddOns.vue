<template>
  <div class="relative w-full bg-grey p-3 rounded-2xl mt-6">
    <div class="flex absolute -top-3 left-1/2 -translate-x-1/2 justify-center">
      <div class="bg-gradient-orange rounded-full px-9 xl:text-xl text-white">
        ADD-ONS
      </div>
    </div>
    <div class="flex justify-center">
      <img class="w-40 xl:w-72" src="/Splash Logo.png" />
    </div>
    <CardsAddons :addons="jetski" addon_img="/Jetskii.jpg" />
    <CardsAddons :addons="waterpark" addon_img="/waterpark.jpg" />
    <CardsAddons :addons="wakeboarding" addon_img="/wakeboarding.jpg" />
    <div class="flex justify-center">
      <img class="w-24 xl:w-52 rounded-2xl" src="/FLYMAX.png" />
    </div>
    <CardsAddons :addons="reverse_bungee" addon_img="/bungeee.jpg" />
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { IResponse } from 'types/api';
const cart = useCart();
const jetski = (
  await (<Promise<IResponse<any>>>(
    axios.get('https://api.bayoflights-entertainment.com/addons/267600')
  ))
)?.data?.data;
const waterpark = (
  await (<Promise<IResponse<any>>>(
    axios.get('https://api.bayoflights-entertainment.com/addons/267602')
  ))
)?.data?.data;
const wakeboarding = (
  await (<Promise<IResponse<any>>>(
    axios.get('https://api.bayoflights-entertainment.com/addons/267605')
  ))
)?.data?.data;
const reverse_bungee = (
  await (<Promise<IResponse<any>>>(
    axios.get('https://api.bayoflights-entertainment.com/addons/267606')
  ))
)?.data?.data;
</script>

<style scoped></style>

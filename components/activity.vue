<template>
  <div
    class="fixed top-56 left-1/2 transform -translate-x-1/2 -translate-y-1/3 p-4 z-30 w-full px-9 py-0 font-proxima max-w-sm smh:w-[400px]"
  >
    <div class="absolute top-0 left-10 flex flex-col space-y-2">
      <div class="w-2 h-2 self-end rounded-full bg-primary"></div>
      <div class="w-12 h-12 rounded-full bg-primary"></div>
    </div>
    <!-- above-image -->
    <div class="flex justify-between space-x-2 rotate-30s relative h-52">
      <div class="overflow-hidden w-full self-end h-48 rounded-t-full">
        <img
          src="/bungee.jpg"
          class="object-cover w-full h-full rounded-b-3xl"
          alt=""
        />
      </div>
      <div class="overflow-hidden w-full rounded-t-full h-48">
        <img
          src="/resort.jpg"
          class="object-cover object-right w-full h-full rounded-b-3xl"
          alt=""
        />
      </div>
    </div>

    <!-- Promotion text -->
    <div class="transform -rotate-6 z-30 select-none">
      <div class="flex justify-between items-center">
        <div class="text-primary w-1/3 text-sm"><p>BAY OF LIGHTS</p></div>
        <div class="w-3/4">
          <hr class="border-2 border-secondary" />
        </div>
      </div>
      <div
        class="text-5xl text-secondary font-bold mb-1 text-center"
      >
        VACATION
      </div>
      <hr class="border-2 border-secondary mb-1" />
      <div
        class="text-4xl text-secondary font-bold  text-center"
      >
        IS CALLING!
      </div>
      <div class="flex justify-between items-center">
        <div class="w-3/4">
          <hr class="border-2 border-secondary" />
        </div>
        <div class="text-primary w-2/4 text-sm text-end">
          <p>BEACH CLUB RESORT</p>
        </div>
      </div>
    </div>

    <!-- Below Image -->
    <div class="flex justify-between space-x-2 rotate-30s h-40">
      <div
        class="overflow-hidden w-full h-36 rounded-b-full self-end"
      >
        <img
          src="/kart.jpg"
          class="object-cover w-full h-full rounded-t-3xl"
          alt=""
        />
      </div>
      <div class="overflow-hidden w-full h-36 rounded-b-full z-20">
        <img
          src="/jetski.jpg"
          class="object-cover w-full h-full rounded-t-3xl"
          alt=""
        />
      </div>
    </div>
    <div class="absolute -bottom-3 to right-12 flex flex-col space-y-2">
      <div class="w-12 h-12 rounded-full bg-primary"></div>
      <div class="w-2 h-2 rounded-full bg-primary"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.top-40 {
  top: 40%;
}
.rotate-30 {
  transform: rotate(-6deg);
}
.rotate-300 {
  transform: rotate(0deg);
}
</style>

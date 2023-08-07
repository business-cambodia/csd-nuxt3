<template>
  <div
    class="fixed maxw top-[230px] top-pos left-1/2 transform -translate-x-1/2 -translate-y-1/3 p-4 z-30 w-full px-6 py-0 font-proxima max-w-[340px]"
  >
    <div class="absolute top-3 left-6 flex flex-col space-y-2">
      <div class="w-2 h-2 self-end rounded-full bg-primary"></div>
      <div class="w-12 h-12 rounded-full bg-primary"></div>
    </div>
    <!-- above-image -->
    <img src="/activities.png" class="z-40 w-full h-[550px] relative small-screen" alt="" />
    <div class="absolute bottom-3 to right-6 flex flex-col space-y-2">
      <div class="w-12 h-12 rounded-full bg-primary"></div>
      <div class="w-2 h-2 rounded-full bg-primary"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>

@media (max-width: 370px) {
  .maxw {
    max-width: 300px;
  }
}

@media (max-height:700px) {
  .small-screen {
    height: 450px;
    width: 90%;
  }
  .top-pos {
    top: 200px;
  }
}
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

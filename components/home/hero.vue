<template>
  <div
    class="hero bg-no-repeat bg-cover flex flex-col sm:space-y-6 space-y-2 items-center justify-top lg:px-32 px-10"
  >
    <div
      class="text-5xl sm:text-6xl lg:text-7xl mt-28 text-white font-lobster text-center leading-tight"
    >
      <div class="">It's Always Summer Here</div>
    </div>
    <div class="mb-2 text-white text-center sm:text-2xl">
      Come Indulge at Summer Bay Beach Club (Bay of Lights), Sihanoukville.
      Where senses come alive!
    </div>
    <NuxtLink
      to="/accommodations"
      class="bg-transparent border border-white text-white sm:text-2xl py-2.5 text-base font-bold px-6 duration-500 hover:bg-white hover:text-secondary"
    >
      Book Now
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const sth = ref(false);
</script>

<style scoped>
.hero {
  height: 75vh;
  background-position: bottom;
  background-image: linear-gradient(
      to bottom,
      rgba(118, 183, 159, 0),
      rgba(75, 144, 190, 0)
    ),
    url('/homepage.jpg');
}
@media (min-width: 640px) {
  .hero {
    height: 100vh;
    background-position: bottom;
    background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.1)
      ),
      url('/homebg.jpg');
  }
}
</style>

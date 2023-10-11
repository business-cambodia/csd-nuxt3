<template>
  <div
    class="h-screen w-screen text-start flex top-0 justify-start md:justify-center backdrop-blur-md fixed z-40 bg-primary bg-opacity-50 drawer px-12"
    id="navbar"
  >
    <ul class="mt-20">
      <div class="flex flex-col xl:flex-row">
        <NuxtLink
          v-for="(item, index) in navItems"
          :key="index"
          :to="item.to"
          class="mx-4 text-white list-none hover:font-semibold dropdown"
          active-class="text-primary font-bold"
          exact
          @click="() => closeDrawer?.()"
        >
          <li class="text-left uppercase text-2xl md:text-4x my-3 items-center">
            <div>{{ item.property }}</div>
          </li>
        </NuxtLink>
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  drawer: {
    type: Boolean,
    required: true,
  },
  closeDrawer: {
    type: Function,
  }
});
const navItems = ref([
  { to: '/', property: 'home' },
  { to: '/', property: 'events' },
  { to: '/', property: 'activities' },
  { to: '/', property: 'promotions' },
  { to: '/accommodations', property: 'accommodations' },
  { to: '/', property: 'about us' },
  { to: '/', property: 'contact' },
]);

</script>

<style>
.drawer {
  left: -100vw; /* Start offscreen to the left */
  width: screen;
  transition: left 0.4s ease-in-out, opacity 0.2s ease-in-out;
  opacity: 0;
}

.drawer.open {
  left: 0vw; /* Slide in from the left */
  opacity: 1; /* Fade in */
}

.dropdown:hover .dropdown-menu {
  display: block;
}
</style>

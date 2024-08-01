<template>
  <div class="relative">
    <LayoutsNavbar />
    <!-- <ClientOnly>
      <PopUp />
    </ClientOnly> -->
    <slot />
    <LayoutsFooter />
    <LayoutsBottomNavbar />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

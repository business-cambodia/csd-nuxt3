<template>
  <div class="relative">
    <LayoutsNavbarWhite />
    <ClientOnly>
      <PopUp />
    </ClientOnly>
    <slot />
    <LayoutsFooter />
    <LayoutsBottomNavbar />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

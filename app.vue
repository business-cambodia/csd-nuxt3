<template>
  <NuxtLoadingIndicator
    :duration="5000"
    color="linear-gradient(239.85deg, #F0644E 24.35%, #F0BA2C 122.07%)"
  />
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { initFlowbite } from 'flowbite';

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

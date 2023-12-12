<template>
  <LayoutsNavbar />
  <div
    style="
      background-image: linear-gradient(
          180deg,
          rgba(14, 76, 104, 0) 6.34%,
          rgba(14, 75, 104, 1) 100%
        ),
        url('/homebg.jpg');
    "
    class="hero h-screen bg-no-repeat bg-bottom bg-cover flex flex-col sm:space-y-6 space-y-2 items-center justify-center justify-top lg:px-32 px-10"
  >
    <ModalsLogin />
    <ModalsSignUp />
    <ModalsResetPassword />
  </div>
</template>

<script setup lang="ts">
const user = useUser();

definePageMeta({
  layout: false,
  middleware: ['has-user'],
});
</script>

<style scoped></style>

<template>
  <div
    style="
      background: linear-gradient(
        101.28deg,
        rgba(118, 183, 159, 0.2) -2.17%,
        rgba(75, 144, 190, 0.2) 101.26%
      );
    "
    v-if="booking"
    class="opacitys-20 max-w-full h-auto rounded-2xl p-3 relative grid grid-cols-2 items-center mb-3"
  >
    <div class="text-sm">

      <div class="">
        #Ref: <strong>{{ booking?.reservationID }}</strong>
      </div>
      <div class="">Status: {{ booking?.status }}</div>
      <div class="">Check In: {{ booking?.startDate }}</div>
      <div class="">Check Out: {{ booking?.endDate }}</div>
      <div class="">Booked on: {{ booking?.dateCreated?.split(' ')[0] }}</div>
    </div>
    <div class="">
      <div
        v-for="(room, index) in booking?.assigned"
        class="text-primary text-xl"
      >
        <div>
          <span class="text-base">1x </span>
          <span>
            {{ room?.roomTypeName }}
          </span>
        </div>
      </div>
      <div>Total: ${{ booking?.total }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  booking: any;
}>();
</script>

<style scoped></style>

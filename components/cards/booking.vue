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
    class="max-w-full h-auto rounded-2xl p-3 relative grid grid-cols-1 sm:grid-cols-2 items-center mb-3"
  >
    <div class="text-sm">
      <div class="">
        #Ref: <strong>{{ booking?.reservationID }}</strong>
      </div>
      <div class="">Status: {{ booking?.status }}</div>
      <div class="">Check In: {{ booking?.startDate }}</div>
      <div class="">Check Out: {{ booking?.endDate }}</div>
      <div class="">Booked on: {{ booking?.dateCreated?.split(' ')[0] }}</div>
      <div class="font-bold font-sans">
        Grand Total: ${{ booking?.balanceDetailed.grandTotal }}
      </div>
      <div class="border-b w-full my-2 border-gray-500 sm:hidden"></div>
    </div>
    <div class="">
      <p>• Rooms</p>
      <div
        v-for="(room, index) in booking?.assigned"
        class="text-primary sm:text-xl"
      >
        <div>
          <span class="text-base">1x </span>
          <span>
            {{ room?.roomTypeName }}
          </span>
        </div>
      </div>
      <div class="text-end text-xs sm:text-sm">
        Sub Total: ${{ booking?.balanceDetailed.subTotal }}
      </div>
      <div v-if="add_ons?.length > 0">
        <p>• Add Ons</p>
        <div v-for="(add_on, index) in add_ons" class="text-primary sm:text-xl">
          <div>
            <span class="text-base">{{ add_on.productQuantity }} x </span>
            <span>
              {{ add_on.productName }}
            </span>
          </div>
        </div>
        <div class="text-end text-xs sm:text-sm">
          Sub Total: ${{ booking?.balanceDetailed.additionalItems }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  booking: any;
  add_ons: any;
}>();
</script>

<style scoped></style>

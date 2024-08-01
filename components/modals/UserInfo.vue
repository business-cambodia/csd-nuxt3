<template>
  <!-- Main modal -->
  <div
    id="user-info-modal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-4 w-full max-w-4xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-2xl font-semibold text-gray-900 text-center">
            User Information
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="user-info-modal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5 space-y-4">
          <p class="">Name: {{ userProp.firstName }} {{ userProp.lastName }}</p>
          <p class="">
            Phone Number: <span class="text-sm">(0)</span>
            {{ userProp.phone_number }}
          </p>
          <p class="">Email: {{ userProp.email }}</p>
          <div>
            <p class="text-2xl font-sans font-semibold text-center mb-3">
              User's Bookings
            </p>
            <CardsBooking
              v-if="userProp?.bookings?.length > 0"
              v-for="booking in userProp?.bookings"
              :booking="booking.data"
              :tran_id="booking.tran_id"
              :add_ons="booking.add_ons"
            />
            <div class="text-center" v-else>
              There's no booking for this user!
            </div>
          </div>
        </div>
        <!-- Modal footer -->
        <div
          class="flex justify-end items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
        >
          <button
            data-modal-hide="user-info-modal"
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';

const props = defineProps({
  userProp: {
    type: Object,
    required: true,
  },
});

watch(
  () => props.userProp,
  () => {
    console.log(props.userProp.bookings);
    props.userProp?.bookings?.map(async (booking: any, index: number) => {
      const userBooking = await axios(
        useNest+'/users/booking/' +
          booking.reservationID
      );
      if (userBooking.data.data) {
        const userAddon = await axios(
          useNest+'/users/bookingInvoice/' +
            booking.reservationID
        );
        props.userProp.bookings[index].add_ons =
          userAddon.data.data?.reservationAdditionalProducts;
        props.userProp.bookings[index].data = userBooking.data.data;
      }
    });
  }
);
</script>

<style scoped></style>

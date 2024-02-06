<template>
  <LayoutsNavbarTransparent />
  <!-- component -->
  <div class="bg-gray-100 h-screen flex items-center justify-center">
    <div class="max-w-5xl mx-">
      <div class="bg-white p-3">
        <svg
          viewBox="0 0 24 24"
          class="text-green-600 w-12 h-12 lg:w-16 lg:h-16 mx-auto my-6"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div class="text-center">
          <h3
            class="md:text-2xl text-base text-gray-900 font-semibold text-center"
          >
            Booking Success!
          </h3>
          <p class="text-gray-600 my-2">
            Thank you for choosing Summer Bay Beach Club and Cabins.
          </p>
        </div>
        <div class="py-3 text-center">
          <NuxtLink
            to="/profile"
            class="px-6 lg:px-9 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 lg:py-3"
          >
            View My Bookings
          </NuxtLink>
        </div>
      </div>

      <div class="bg-orange-100 w-full p-3">
        <div class="space-y-2 text-xs md:text-sm">
          <p class="font-bold font-sans">- CHECK-IN & CHECK-OUT POLICY:</p>
          <p class="">
            <span class="text-red-600 font-sans font-bold">NOTE: </span>Check-in
            time is after 14:00 pm and check-out time is 11:00 am. Late
            check-out can be arranged in advance with the front desk based on
            availability. Any late check-out not confirmed by the front desk
            will be subject to a charge of a half-day rate before 18:00 pm and a
            day rate after 18:00 pm.
          </p>
          <p class="">• A $50 Cash Deposit will be collected upon check-in.</p>
          <p class="">
            • A government-issued photo ID, credit card, or cash deposit is
            required at check-in to cover incidental charges.
          </p>
          <p class="">
            • Bringing in outside food and own speaker is not permitted. No Pet
            Policy inside the rooms.
          </p>
          <p class="font-bold font-sans">
            - CANCELLATION, NO SHOW & EARLY DEPARTURE POLICY:
          </p>
          <p class="">
            • Cancellations made less than 48 hours prior to the check-in date
            will be charged one night's room rate.
          </p>
          <p class="">
            • No Show: For "no-show" guaranteed reservations, the full night's
            room rate will be charged.
          </p>
          <p class="">
            • In case of early check-out/shortened stay on the first day of
            stay, 100% of the total room rate for the entire shortened stay will
            be charged.
          </p>
          <p class="">
            • Policy and Terms & conditions are subject to change without prior
            notice.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

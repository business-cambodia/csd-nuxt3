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
import axios from 'axios';
const user = useUser();

// initialize components based on data attribute selectors
onMounted(async () => {
  initFlowbite();
  if (localStorage.getItem('user')) {
    const res = await axios(
      useNest+'/users/' +
        JSON.parse(localStorage.getItem('user')).id
    );
    user.value = res.data;
    user.value.bookings?.map(async (booking, index) => {
      const userBooking = await axios(
        useNest+'/users/booking/' +
          booking.reservationID
      );
      if (userBooking.data.data) {
        const userAddon = await axios(
          useNest+'/users/bookingInvoice/' +
            booking.reservationID
        );
        user.value.bookings[index].add_ons =
          userAddon.data.data?.reservationAdditionalProducts;
        user.value.bookings[index].data = userBooking.data.data;
      }
    });
  }
});
</script>

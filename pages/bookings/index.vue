<template>
  <h1 class="hidden">Book your Hotel Resort Beach in Sihanoukville Cambodia</h1>
  <LayoutsNavbarTransparent />
  <div class="flex justify-center mt-20 mb-6 mx-6 sm:mx-9">
    <BookingSearch />
  </div>
  <div class="flex items-center justify-center mt-6 mb-[60vh]" v-if="loading">
    <CardsLoading />
  </div>

  <div
    class="xl:grid xl:grid-cols-12 gap-3 px-3 xl:px-12 relative"
    v-if="!loading && !rooms.data.every((item:any) => item.roomsAvailable === 0)"
  >
    <div class="xl:col-span-9">
      <div v-for="(room, index) in rooms.data" :key="room.id">
        <CardsRoom :room="room" v-if="room.roomsAvailable > 0" />
      </div>
      <AddOns />
    </div>
    <div class="col-span-3 mx-3 xl:mx-0">
      <ModalsTermCondition />
      <BookingCart class="xl:sticky top-20" />
    </div>
  </div>

  <div class="text-center my-12 mb-32 xl:mb-[50vh]" v-else-if="!loading">
    <div class="text-xl xl:text-4xl mb-3">
      There are no rooms available on these dates!
    </div>
    <div class="text-sm xl:text-xl">Please select new dates and try again.</div>
  </div>
</template>

<script setup lang="ts">
const loading = ref(false);
const cart = useCart();

const formatDate = (dateString: any) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
  const day = date.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

const rooms: any = ref(
  await $fetch(
    `https://api.bayoflights-entertainment.com/rooms?startDate=${formatDate(
      cart.value.startDate
    )}&endDate=${formatDate(cart.value.endDate)}&adults=${cart.value.adults}`
  )
);

useHead({
  title: 'Book your Hotel Resort Beach in Sihanoukville Cambodia',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        'Book your Hotel Resort Beach in Sihanoukville Cambodia & The best hotels in Resort Beach Sihanoukville Waterfront Online Booking Resort Beach',
    },
  ],
});

watch(
  () => [cart.value.startDate, cart.value.endDate],
  async () => {
    cart.value.rooms.forEach((room: any) => {
      (<any>document.getElementById('roomQty' + room.roomTypeID)!).value = 0;
    });
    cart.value.rooms = [];
    try {
      loading.value = true;
      const newRooms: any = ref(
        await $fetch(
          `https://api.bayoflights-entertainment.com/rooms?startDate=${formatDate(
            cart.value.startDate
          )}&endDate=${formatDate(cart.value.endDate)}&adults=${
            cart.value.adults
          }`
        )
      );
      rooms.value = newRooms.value;
      loading.value = false;
    } catch (error) {
      console.log(error);
    }
  }
);

onMounted(() => {
  cart.value.rooms = [];
  cart.value.addons = [];
  cart.value.adults = 1;
});
</script>

<style scoped></style>

<template>
  <LayoutsNavbarTransparent />
  <div class="flex justify-center mt-20 mb-6 mx-9">
    <BookingSearch />
  </div>
  <div class="flex items-center justify-center mt-6 mb-[60vh]" v-if="loading">
    <CardsLoading />
  </div>

  <div
    class="md:grid md:grid-cols-12 gap-3 px-3 md:px-12 relative"
    v-if="!loading && !rooms.data.every((item:any) => item.roomsAvailable === 0)"
  >
    <div class="md:col-span-9">
      <div v-for="(room, index) in rooms.data" :key="room.id">
        <CardsRoom :room="room" v-if="room.roomsAvailable > 0" />
      </div>
    </div>
    <div class="col-span-3 mx-9 md:mx-0">
      <BookingCart class="" />
    </div>
  </div>

  <div class="text-center my-12 mb-32 md:mb-[50vh]" v-else-if="!loading">
    <div class="text-xl md:text-4xl mb-3">
      There are no rooms available on these dates!
    </div>
    <div class="text-sm md:text-xl">Please select new dates and try again.</div>
  </div>
</template>

<script setup lang="ts">
const loading = ref(false);
const cart = useCart();
const rooms: any = ref(
  await $fetch(
    `https://api.bayoflights-entertainment.com/rooms?startDate=${
      new Date().toISOString().split('T')[0]
    }&endDate=${
      new Date(new Date().setDate(new Date().getDate() + 1))
        .toISOString()
        .split('T')[0]
    }&adults=${cart.value.adults}`
  )
);
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
          `https://api.bayoflights-entertainment.com/rooms?startDate=${new Date(
            cart.value.startDate
          ).toLocaleDateString('en-CA')}&endDate=${new Date(
            cart.value.endDate
          ).toLocaleDateString('en-CA')}&adults=${cart.value.adults}`
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
});
</script>

<style scoped></style>

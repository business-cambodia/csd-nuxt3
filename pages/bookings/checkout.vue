<template>
  <LayoutsNavbarTransparent />
  <div class="md:mx-20 text-center mt-20">
    <div class="text-3xl">CHECK OUT</div>
  </div>
  <div class="md:grid md:grid-cols-12 gap-3 px-3 md:px-12 relative">
    <div class="md:col-span-8 mx-6">
      <div class="text-lg mb-3">Add your details</div>
      <form @submit.prevent="handleBooking">
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >First name <span class="text-red-600">*</span></label
            >
            <input
              v-model="formData.guestFirstName"
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Last name <span class="text-red-600">*</span></label
            >
            <input
              v-model="formData.guestLastName"
              type="text"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div class="mb-6">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Country / Region <span class="text-red-600">*</span></label
          >
          <select
            v-model="formData.guestCountry"
            required
            @change="
              (e:any) => {
                formData.guestCountry = e.target.value;
              }"
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected disabled>Choose a country</option>
            <option v-for="country in countries" :value="country.code">
              {{ country.name }}
            </option>
          </select>
        </div>

        <div class="mb-6">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Phone Number <span class="text-red-600">*</span></label
          >
          <input
            v-model="formData.guestPhone"
            type="number"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Email address <span class="text-red-600">*</span></label
          >
          <input
            v-model="formData.guestEmail"
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button id="bookingForm" type="submit" class="hidden">gg</button>
      </form>
    </div>
    <div class="col-span-4 mx-6">
      <BookingCart :loading="loading" />
    </div>
  </div>
</template>

<script setup lang="ts">
import countries from '~/countries.js';
import { toast } from 'vue3-toastify';

const cart = useCart();
const router = useRouter();
const language = useLanguague();
const loading = ref(false);
const formData = ref({
  startDate: cart.value.startDate,
  endDate: cart.value.endDate,
  guestFirstName: '',
  guestLastName: '',
  guestCountry: '',
  guestPhone: null || '',
  guestEmail: '',
  rooms: cart.value.rooms.map((room: any) => ({
    roomTypeID: room.roomTypeID,
    quantity: room.quantity,
  })),
  children: cart.value.rooms.map((room: any) => ({
    roomTypeID: room.roomTypeID,
    quantity: 0,
  })),
  adults: cart.value.rooms.map((room: any) => ({
    roomTypeID: room.roomTypeID,
    quantity: 2,
  })),
  paymentMethod: '1',
});

onMounted(() => {
  if (cart.value.rooms.length == 0) {
    router.push('/bookings');
  }
});

const handleBooking = async () => {
  if (!validateNumber(formData.value.guestPhone)) {
    return toast.error(
      language.value == 'EN'
        ? 'Please enter a valid phone number!'
        : 'សូមបញ្ចូលលេខទូរស័ព្ទត្រឹមត្រូវ!'
    );
  }
  loading.value = true;
  formData.value.guestPhone = '0' + formData.value.guestPhone;

  formData.value.startDate = new Date(cart.value.startDate).toLocaleDateString(
    'en-CA'
  );
  formData.value.endDate = new Date(cart.value.endDate).toLocaleDateString(
    'en-CA'
  );
  try {
    const res: any = await $fetch(
      'https://api.bayoflights-entertainment.com/rooms',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: formData.value,
      }
    );
    if (res.success) {
      toast.success(
        language.value == 'EN' ? 'Booking successfully!' : 'ការកក់បានជោគជ័យ!'
      );
      setTimeout(() => {
        loading.value = false;
        router.push('/');
      }, 3000);
    } else toast.error(res.message);
  } catch (error) {}
};

const validateNumber = (phone_number: string) => {
  const regex = /^(1[^9]|3[18]|6[^2-5]|7[016-8]|8[^2]|9[^4])\d{6,7}$/;

  // Alternative syntax using RegExp constructor
  // const regex = new RegExp('^(1[^9]|3[18]|6[^2-5]|7[016-8]|8[^2]|9[^4])\\d{6,7}$', '')

  if (regex.exec(phone_number) !== null) {
    return true;
  }
  return false;
};
</script>

<style scoped></style>

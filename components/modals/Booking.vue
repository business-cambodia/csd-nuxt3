<template>
  <!-- Main modal -->
  <div
    id="booking-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 md:backdrop-blur-sm right-0 z-[99] hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-3xl shadow p-6">
        <!-- header -->
        <div class="flex justify-center flex-col items-center">
          <div class="text-gold text-4xl font-katibeh">Confirm Booking</div>
          <div class="text-center">
            {{
              language == 'EN'
                ? 'Secure your room by filling the form below'
                : 'បំពេញព័ត៌មានមួយចំនួន និងបញ្ជាក់លេខទូរស័ព្ទ'
            }}
          </div>
          <!-- lines -->
          <hr class="w-1/2 border-gold mt-3" />
          <hr class="w-1/3 border-gold mt-1" />
        </div>
        <!-- sign up -->
        <div class="flex justify-center flex-col items-center">
          <!-- <div class="text-primary text-xl">Sign Up</div> -->
          <form
            class="w-full px-s6 text-secondary"
            @submit.prevent="handleBooking"
          >
            <div class="relative h-11 w-full min-w-[200px] my-3">
              <input
                v-model="formData.full_name"
                required
                type="text"
                class="peer h-full w-full border-b border-0 focus:ring-0 focus:p-0 border-primary bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-black outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gold focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label
                class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gold after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gold peer-focus:after:scale-x-100 peer-focus:after:border-gold peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-black"
              >
                {{ language == 'EN' ? 'Full Name*' : 'ឈ្មោះពេញ*' }}
              </label>
            </div>
            <div class="relative h-11 w-full min-w-[200px] my-3">
              <input
                v-model="formData.phone_number"
                type="number"
                required
                class="peer h-full w-full border-b border-0 focus:ring-0 focus:p-0 border-primary bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-black outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gold focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label
                class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gold after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gold peer-focus:after:scale-x-100 peer-focus:after:border-gold peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                {{ language == 'EN' ? 'Phone Number*' : 'លេខទូរស័ព្ទ*' }}
              </label>
            </div>

            <div class="flex justify-between gap-2 items-center">
              <div class="relative w-full">
                <label for="">Checkin Date*</label>
                <div
                  class="absolute inset-y-0 top-5 left-0 flex items-center pl-3.5 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                    />
                  </svg>
                </div>
                <input
                  v-model="formData.check_in"
                  type="date"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                />
              </div>

              <div class="relative w-full">
                <label for="">Checkout Date*</label>
                <div
                  class="absolute inset-y-0 top-5 left-0 flex items-center pl-3.5 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                    />
                  </svg>
                </div>
                <input
                  v-model="formData.check_out"
                  type="date"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                />
              </div>
            </div>

            <div class="relative h-11 w-full min-w-[200px] my-3">
              <label for="rooms">Choose room type*</label>
              <select
                @change="formData.accommodations = $event.target?.value"
                id="rooms"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option
                  :selected="room.id == propRoom.id ? true : false"
                  :value="room.id"
                  v-for="(room, index) in rooms"
                >
                  {{ room.name }}
                </option>
              </select>
            </div>

            <div class="relative h-11 w-full min-w-[200px] mt-9">
              <label for="countries">Room amount*</label>
              <input
                v-model="formData.amount"
                type="number"
                id="small-input"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Room amount"
              />
            </div>

            <div class="relative h-11 w-full min-w-[200px] mb-9 mt-6">
              <label for="message">Remarks</label>
              <textarea
                v-model="formData.remarks"
                id="message"
                rows="2"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <div class="flex justify-between py-3">
              <button
                type="button"
                :class="'bottom-4 self-center left-1/3 text-white bg-gray-600 font-medium rounded-md px-5 py-2 text-center'"
                data-modal-hide="booking-modal"
              >
                {{ language == 'EN' ? 'Close' : 'បិទ​​​  ' }}
              </button>
              <button
                :class="'bottom-4 self-center left-1/3 text-white bg-green-500 font-medium rounded-md px-5 py-2 text-center'"
                type="submit"
              >
                {{ language == 'EN' ? 'Submit' : 'បញ្ជូន' }}
              </button>
            </div>
          </form>
        </div>
        <!-- button -->
        <button
          id="btn-close-booking"
          class="hidden"
          data-modal-hide="booking-modal"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toast } from 'vue3-toastify';
const props = defineProps({
  propRoom: {
    type: Object,
    required: true,
  },
  rooms: Array<any>,
});
const language = useLanguague();
const formData = ref({
  full_name: '',
  phone_number: '',
  check_in: '',
  check_out: '',
  amount: 1,
  accommodations: 0,
  remarks: '',
});

const handleBooking = async () => {
  if (formData.value.accommodations == 0) {
    formData.value.accommodations = props?.propRoom?.id;
  }
  if (formData.value.check_in == '' || formData.value.check_out == '') {
    return toast.warning(
      language.value == 'EN' ? 'Please select date' : 'សូមជ្រើសរើសថ្ងៃចូលនៅ'
    );
  }
  if (!validateNumber(formData.value.phone_number)) {
    return toast.warning(
      language.value == 'EN'
        ? 'Invalid phone number'
        : 'លេខទូរស័ព្ទមិនត្រឹមត្រូវ'
    );
  }
  if (formData.value.check_in >= formData.value.check_out) {
    return toast.warning(
      language.value == 'EN'
        ? 'Checkin date must be before checkout date'
        : 'ថ្ងៃចូលនៅត្រូវតែមានមុនថ្ងៃចេញពីសម្រាកថ្ងៃចូលនៅ'
    );
  }
  if (formData.value.check_in < new Date().toISOString().split('T')[0]) {
    return toast.warning(
      language.value == 'EN'
        ? 'Checkin date must be after today'
        : 'ថ្ងៃចូលនៅត្រូវតែមានបន្ទាប់ពីថ្ងៃនេះ'
    );
  }
  formData.value.accommodations = +formData.value.accommodations;
  formData.value.phone_number = '0' + formData.value.phone_number;
  try {
    await useFetch(
      'https://cms.bayoflights-entertainment.com/items/bookings_accommodations',
      {
        method: 'POST',
        body: formData.value,
      }
    );
    toast.success('Booking succeed, We will contact you soon.');
    formData.value = {
      full_name: '',
      phone_number: '',
      check_in: '',
      check_out: '',
      amount: 1,
      accommodations: 0,
      remarks: '',
    };
    document.getElementById('btn-close-booking')?.click();
  } catch (error: any) {
    toast.error(error.message);
  }
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

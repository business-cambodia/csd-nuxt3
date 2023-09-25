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

            <div class="relative h-11 w-full min-w-[200px] my-3">
              <input
                type="number"
                v-model="formData.otp"
                required
                class="peer h-full w-full border-b border-0 focus:ring-0 focus:p-0 border-primary bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-black outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gold focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label
                class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gold after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gold peer-focus:after:scale-x-100 peer-focus:after:border-gold peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                OTP Code*
              </label>
              <button
                v-if="!otpSend"
                id="btn-otp"
                @click="handleSendOtp"
                type="button"
                class="bg-gold absolute right-0 bottom-2 text-white px-2 py-0.5 rounded-xl text-sm text-cengter"
              >
                {{ language == 'EN' ? 'GET' : 'ទទួល' }}
              </button>
              <button
                v-else
                type="button"
                class="bg-gray-500 absolute right-0 bottom-2 text-white px-2 py-0.5 rounded-xl text-sm cursor-default"
              >
                {{ language == 'EN' ? 'Resend in ' : 'ម្តងទៀតនៅ ' }}
                {{ second }}s
              </button>
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
                  :min="
                    new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000)
                      .toISOString()
                      .split('T')[0]
                  "
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
                  :min="
                    new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000)
                      .toISOString()
                      .split('T')[0]
                  "
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                />
              </div>
            </div>

            <div class="flex items-center justify-between mt-3 gap-9">
              <label for="rooms">Choose room type*</label>
              <label for="countries">Room amount*</label>
            </div>
            <div
              class="flex items-center gap-9 my-1"
              v-for="(i, roomIndex) in formData.accommodations"
            >
              <div class="relative h-11 w-full">
                {{
                  formData.accommodations[roomIndex].accommodations_id
                    ? ''
                    : (formData.accommodations[roomIndex].accommodations_id =
                        propRoom.id)
                }}
                <select
                  v-model="formData.accommodations[roomIndex].accommodations_id"
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
              <div class="flex gap-3 items-center">
                <div class="relative h-11">
                  <input
                    v-model="formData.accommodations[roomIndex].amount"
                    type="number"
                    id="small-input"
                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <svg
                  @click="handleRemoveRoom(roomIndex)"
                  xmlns="http://www.w3.org/2000/svg"
                  class="cursor-pointer"
                  fill="red"
                  height="2em"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
                  />
                </svg>
              </div>
            </div>
            <div class="flex justify-end mr-6">
              <div
                class="bg-primary text-white py-1 px-2 text-sm rounded-2xl cursor-pointer"
                @click="handleAddRoom"
              >
                Add
              </div>
            </div>

            <div class="relative h-11 w-full min-w-[200px] mb-9">
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
const otpSend = ref(false);
const second = ref(60);
const otp = useOtp();
const props = defineProps({
  propRoom: {
    type: Object,
    required: true,
  },
  rooms: {
    type: Array<any>,
    required: true,
  },
});
const language = useLanguague();
const formData = ref({
  full_name: '',
  phone_number: '',
  check_in: '',
  check_out: '',
  amount: 1,
  accommodations: [{ accommodations_id: props.propRoom.id, amount: 1 }],
  remarks: '',
  otp: '',
});

const handleSendOtp = async () => {
  if (formData.value.phone_number) {
    if (!validateNumber(formData.value.phone_number)) {
      return toast.warning(
        language.value == 'EN'
          ? 'Invalid phone number'
          : 'លេខទូរស័ព្ទមិនត្រឹមត្រូវ'
      );
    }
    try {
      const { pending, data: otpApi }: any = await useFetch(
        'https://api.bayoflights-entertainment.com/users/sendOtpLogin',
        {
          method: 'POST',
          body: {
            phone_number: formData.value.phone_number,
          },
        }
      );
      if (!otpApi.value?.otp) {
        return toast.warning(otpApi.value?.message);
      }
      otp.value = otpApi.value?.otp;
    } catch (error: any) {
      toast.error(error.message);
    }
    //
    otpSend.value = true;
    setInterval((id: any) => {
      if (second.value == 0) {
        clearInterval('');
        otpSend.value = false;
      } else second.value -= 1;
    }, 1000);
    second.value = 60;
  } else {
    toast.warning(
      language.value == 'EN'
        ? 'Please input phone number'
        : 'សូមបញ្ចូលលេខទូរស័ព្ទ'
    );
  }
};

const handleAddRoom = () => {
  if (formData.value.accommodations.length < props.rooms.length)
    formData.value.accommodations.push({
      accommodations_id: props.propRoom.id,
      amount: 1,
    });
};

const handleRemoveRoom = (index: number) => {
  if (formData.value.accommodations.length > 1)
    formData.value.accommodations.splice(index, 1);
};

const handleBooking = async () => {
  if (formData.value.otp != otp.value) {
    return toast.error(
      language.value == 'EN' ? 'Wrong OTP Code' : 'លេខកូដ OTP មិនត្រឹមត្រូវ'
    );
  }
  if (hasDuplicateRooms(formData.value.accommodations)) {
    return toast.warning(
      language.value == 'EN'
        ? 'You cannot choose the same room type.'
        : 'អ្នកមិនអាចជ្រើសរើសបន្ទប់ដែលដូចគ្នាបានទេ'
    );
  }
  if (formData.value.check_in == '' || formData.value.check_out == '') {
    return toast.warning(
      language.value == 'EN' ? 'Please select date' : 'សូមជ្រើសរើសថ្ងៃចូលនៅ'
    );
  }
  if (formData.value.check_in >= formData.value.check_out) {
    return toast.warning(
      language.value == 'EN'
        ? 'Checkin date must be before checkout date'
        : 'ថ្ងៃចូលនៅត្រូវតែមានមុនថ្ងៃចេញពីសម្រាកថ្ងៃចូលនៅ'
    );
  }
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
      accommodations: [{ accommodations_id: props.propRoom.id, amount: 1 }],
      remarks: '',
      otp: '',
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

const hasDuplicateRooms = (arr: Array<any>) => {
  const idSet = new Set(); // Create a Set to store encountered id values

  for (const item of arr) {
    if (idSet.has(item.accommodations_id)) {
      return true; // If the id is already in the Set, it's a duplicate
    }
    idSet.add(item.accommodations_id); // Add the id to the Set
  }

  return false;
};
</script>

<style scoped></style>

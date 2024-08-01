<template>
  <!-- Main modal -->

  <div
    id="login-modal"
    tabindex="-1"
    aria-hidden="true"
    class="flex justify-center w-full"
  >
    <div class="hiddens w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-3xl shadow p-6">
        <!-- header -->
        <div class="flex justify-center flex-col items-center">
          <div class="text-gold text-5xl text-[34px] font-katibeh">
            SUMMER BAY
          </div>

          <!-- lines -->
          <hr class="w-1/2 border-gold mt-3" />
          <hr class="w-1/3 border-gold mt-1" />
        </div>
        <!-- 3 dots -->
        <div class="flex justify-center space-x-3 my-6">
          <div class="w-3 h-3 bg-primary rounded-full"></div>
          <div class="w-3 h-3 bg-primary rounded-full"></div>
          <div class="w-3 h-3 bg-primary rounded-full"></div>
        </div>
        <!-- sign up -->
        <div class="flex justify-center flex-col items-center">
          <div class="text-primary text-xl">
            {{ language == 'EN' ? 'LOG IN' : 'ចូលប្រើ' }}
          </div>
          <form
            @submit.prevent="handleLogin()"
            class="w-full px-6 text-secondary"
          >
            <div class="relative h-11 w-full min-w-[200px] my-3">
              <input
                v-model="formData.email"
                name="email"
                type="email"
                required
                class="peer h-full w-full border-b border-0 focus:ring-0 focus:p-0 border-primary bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-black outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gold focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=""
              />
              <label
                class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gold after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gold peer-focus:after:scale-x-100 peer-focus:after:border-gold peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                {{ language == 'EN' ? 'Email' : 'លេខទូរស័ព្ទ' }}
              </label>
            </div>
            <div class="relative h-11 w-full min-w-[200px] my-3">
              <input
                id="logPass"
                type="password"
                v-model="formData.password"
                required
                class="peer h-full w-full border-b border-0 focus:ring-0 focus:p-0 border-primary bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-black outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gold focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label
                class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gold after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gold peer-focus:after:scale-x-100 peer-focus:after:border-gold peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                Password
              </label>
              <button
                @click="seePass"
                type="button"
                class="absolute right-0 bottom-2 text-white px-2 py-0.5 rounded-xl text-sm text-cengter"
              >
                <IconsEye />
              </button>
            </div>

            <div class="flex justify-end">
              <button
                id="btn-reset"
                type="button"
                class="text-xs"
                data-modal-target="reset-password-modal"
                data-modal-toggle="reset-password-modal"
              >
                RESET PASSWORD
              </button>
            </div>

            <div class="flex justify-center py-3">
              <button
                :class="'bottom-4 self-center left-1/3 text-white bg-primary font-medium rounded-md px-6 py-2.5 text-center'"
                type="submit"
              >
                {{ language == 'EN' ? 'Login' : 'បញ្ជូន' }}
              </button>
            </div>
            <div class="flex items-center w-full">
              <div class="flex-1 h-[1px] bg-gray-500"></div>
              <div class="mx-3 text-sm text-black">OR</div>
              <div class="flex-1 h-[1px] bg-gray-500"></div>
            </div>
          </form>
          <div class="flex justify-center py-3 text-sm">
            Don't have account?
            <button class="mx-2 font-black" @click="openSignup">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { toast } from 'vue3-toastify';
const language = useLanguague();
const user = useUser();
const cart = useCart();
const router = useRouter();
const formData = ref({
  email: '',
  password: '',
});
const seePass = () => {
  (<any>document.getElementById('logPass')!).type =
    (<any>document.getElementById('logPass')!).type == 'password'
      ? 'text'
      : 'password';
};
const openSignup = () => {
  document.getElementById('login-modal')?.classList.add('hidden');
  document.getElementById('signup-modal')?.classList.remove('hidden');
};

const handleLogin = async () => {
  try {
    const res = await axios(
      useNest+'/users/login',
      {
        method: 'POST',
        data: {
          ...formData.value,
        },
      }
    );
    user.value = res.data;
    user.value.bookings?.map(async (booking: any, index: any) => {
      const userBooking = await axios(
        useNest+'/users/booking/' +
          booking.reservationID
      );
      user.value.bookings[index].data = userBooking.data.data;
    });
    localStorage.setItem('user', JSON.stringify({ id: res.data.id }));
    if (cart.value.rooms.length > 0) {
      router.push('/bookings/checkout');
    } else router.push('/');
  } catch (error: any) {
    toast.error(error.response.data.message);
  }
};
</script>

<style scoped></style>

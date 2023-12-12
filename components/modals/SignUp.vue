<template>
  <!-- Main modal -->
  <div
    id="signup-modal"
    tabindex="-1"
    aria-hidden="true"
    class="hidden w-full max-w-md max-h-full"
  >
    <div class="relative w-full max-w-md max-h-full">
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
          <div class="text-primary text-xl mb-2">Sign Up</div>
          <form
            @submit.prevent="handleSignUp()"
            class="w-full px-6 text-secondary"
          >
            <div class="grid md:grid-cols-2 md:gap-6 h-28 md:h-11">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  v-model="formData.firstName"
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  class="block py-2.5 px-0 w-full bg-transparent border-0 border-primary border-b appearance-none text-black dark:border-gray-600 dark:focus:border-gold focus:outline-none focus:ring-0 focus:border-gold peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_first_name"
                  class="peer-focus:font-medium absolute dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gold peer-focus:dark:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >First name</label
                >
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  v-model="formData.lastName"
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  class="block py-2.5 px-0 w-full bg-transparent border-0 border-b border-primary appearance-none text-black dark:border-gray-600 dark:focus:border-gold focus:outline-none focus:ring-0 focus:border-gold peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_last_name"
                  class="peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-gold peer-focus:dark:text-gold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Last name</label
                >
              </div>
            </div>

            <div class="relative h-11 w-full min-w-[200px] my-3">
              <input
                v-model="formData.email"
                type="email"
                name="email"
                class="peer h-full w-full border-b border-0 focus:ring-0 focus:p-0 border-primary bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-black outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gold focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label
                class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gold after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gold peer-focus:after:scale-x-100 peer-focus:after:border-gold peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                {{ language == 'EN' ? 'Email' : 'អ៊ីមែល' }}
              </label>
            </div>
            <div class="relative h-11 w-full min-w-[200px] my-3">
              <input
                v-model="formData.phone_number"
                type="number"
                name="phone"
                class="peer h-full w-full border-b border-0 focus:ring-0 focus:p-0 border-primary bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-black outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gold focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=""
              />
              <label
                class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gold after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gold peer-focus:after:scale-x-100 peer-focus:after:border-gold peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                {{ language == 'EN' ? 'Phone Number' : 'លេខទូរស័ព្ទ' }}
              </label>
            </div>
            <div class="relative h-11 w-full min-w-[200px] my-3">
              <input
                id="signPass"
                v-model="formData.password"
                required
                type="password"
                class="peer h-full w-full border-b border-0 focus:ring-0 focus:p-0 border-primary bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-black outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gold focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label
                class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gold after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gold peer-focus:after:scale-x-100 peer-focus:after:border-gold peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-black"
              >
                {{ language == 'EN' ? 'Password' : 'ឈ្មោះពេញ*' }}
              </label>
              <button
                @click="seePass"
                type="button"
                class="absolute right-0 bottom-2 text-white px-2 py-0.5 rounded-xl text-sm text-cengter"
              >
                <IconsEye />
              </button>
            </div>
            <div class="relative h-11 w-full min-w-[200px] my-3">
              <input
                id="conPass"
                type="password"
                v-model="formData.confirmPassword"
                required
                class="peer h-full w-full border-b border-0 focus:ring-0 focus:p-0 border-primary bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-black outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gold focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label
                class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gold after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gold peer-focus:after:scale-x-100 peer-focus:after:border-gold peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                Confirm Password
              </label>
              <button
                @click="seeConPass"
                type="button"
                class="absolute right-0 bottom-2 text-white px-2 py-0.5 rounded-xl text-sm text-cengter"
              >
                <IconsEye />
              </button>
            </div>
            <div class="flex justify-center py-3">
              <button
                :class="'bottom-4 self-center left-1/3 text-white bg-primary font-medium rounded-md px-6 py-2.5 text-center'"
                type="submit"
              >
                {{ language == 'EN' ? 'Sign Up' : 'បញ្ជូន' }}
              </button>
            </div>
            <div class="flex items-center w-full">
              <div class="flex-1 h-[1px] bg-gray-500"></div>
              <div class="mx-3 text-sm text-black">OR</div>
              <div class="flex-1 h-[1px] bg-gray-500"></div>
            </div>
          </form>
          <div class="flex justify-center py-3 text-sm">
            Already have account?
            <button class="mx-2 font-black" @click="openLogin">Log In</button>
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

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone_number: '',
  password: '',
  confirmPassword: '',
});

const seePass = () => {
  (<any>document.getElementById('signPass')!).type =
    (<any>document.getElementById('signPass')!).type == 'password'
      ? 'text'
      : 'password';
};
const seeConPass = () => {
  (<any>document.getElementById('conPass')!).type =
    (<any>document.getElementById('conPass')!).type == 'password'
      ? 'text'
      : 'password';
};
const openLogin = () => {
  document.getElementById('signup-modal')?.classList.add('hidden');
  document.getElementById('login-modal')?.classList.remove('hidden');
};

const handleSignUp = async () => {
  formData.value.phone_number = '' + formData.value.phone_number;

  try {
    const res = await axios(
      'https://api.bayoflights-entertainment.com/users/signup',
      {
        method: 'POST',
        data: {
          ...formData.value,
        },
      }
    );
    toast.success(
      language.value == 'EN' ? 'Sign up successfully!' : 'ចុះឈ្មោះបានជោគជ័យ!'
    );
    openLogin();
  } catch (error: any) {
    toast.error(
      error.response.data.message?.map((item: any) => `- ${item}`).join('\n')
    );
  }
};
</script>

<style scoped></style>

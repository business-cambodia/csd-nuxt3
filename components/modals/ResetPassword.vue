<template>
  <!-- Main modal -->
  <div
    id="reset-password-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-hidden md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <div
          class="w-full p-6 bg-white rounded-lg shadow md:mt-0 sm:max-w-md sm:p-8"
        >
          <h2
            class="mb-1 text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
          >
            Change Password
          </h2>
          <p class="text-xs text-center">
            Please input the otp code from your email inbox to confirm changing
            your password
          </p>
          <form
            @submit.prevent="handleResetPassword"
            class="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            action=""
          >
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Email</label
              >
              <input
                v-model="formData.email"
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>

            <div class="relative">
              <label
                for="otp"
                class="block mb-2 text-sm font-medium text-gray-900"
                >OTP Code</label
              >
              <input
                v-model="formData.otp"
                type="text"
                name="otp"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder=""
                required
              />
              <button
                v-if="!otpSend"
                id="btn-otp"
                @click="handleSendOtp"
                type="button"
                class="bg-gold absolute right-0 bottom-2 text-white px-2 py-1 rounded-full text-sm"
              >
                {{ language == 'EN' ? 'Send Code' : 'ទទួល' }}
              </button>
              <button
                v-else
                type="button"
                class="bg-gray-500 absolute right-0 bottom-2 text-white px-2 py-1 rounded-xl text-sm cursor-default"
              >
                {{ language == 'EN' ? 'Resend in ' : 'ម្តងទៀតនៅ ' }}
                {{ second }}s
              </button>
            </div>

            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900"
                >New Password</label
              >
              <input
                v-model="formData.newPassword"
                type="password"
                name="password"
                id="password"
                placeholder=""
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label
                for="confirm-password"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Confirm password</label
              >
              <input
                v-model="formData.confirmPassword"
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder=""
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
              />
            </div>

            <button
              type="submit"
              class="w-full bg-primary text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Reset passwod
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { toast } from 'vue3-toastify';
const language = useLanguague();
const otpSend = ref(false);
const second = ref(60);
const formData = ref({
  email: '',
  otp: '',
  newPassword: '',
  confirmPassword: '',
});
const handleSendOtp = async () => {
  if (formData.value.email) {
    otpSend.value = true;
    try {
      await axios.post(
        'https://api.bayoflights-entertainment.com/users/sendEmailOtp',
        {
          email: formData.value.email,
        }
      );
      toast.success(
        'OTP code has been sent to your email, Please check your inbox or spams folder.',
        { autoClose: 6000 }
      );
    } catch (error: any) {
      otpSend.value = false;
      return toast.error(
        error.response.data.message?.map((item: any) => `- ${item}`).join('\n')
      );
    }
    setInterval((id: any) => {
      if (second.value == 0) {
        clearInterval('');
        otpSend.value = false;
      } else second.value -= 1;
    }, 1000);
    second.value = 60;
  } else {
    toast.warning(
      language.value == 'EN' ? 'Please input Email' : 'សូមបញ្ចូលអុីម៉ែល'
    );
  }
};
const handleResetPassword = async () => {
  try {
    await axios.patch(
      'https://api.bayoflights-entertainment.com/users/resetPassword',
      {
        email: formData.value.email,
        otp_code: formData.value.otp,
        newPassword: formData.value.newPassword,
        confirmPassword: formData.value.confirmPassword,
      }
    );
    formData.value = {
      email: '',
      otp: '',
      newPassword: '',
      confirmPassword: '',
    };
    toast.success('Password Reset Successfully');
    document.getElementById('btn-reset')?.click();
  } catch (error: any) {
    return toast.error(
      error.response.data.message?.map((item: any) => `- ${item}`).join('\n')
    );
  }
};
</script>

<style scoped></style>

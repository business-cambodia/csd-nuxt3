<template>
  <!-- Main modal -->
  <div
    id="login-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-3xl shadow p-6">
        <!-- header -->
        <div class="flex justify-center flex-col items-center">
          <div class="text-gold text-5xl text-[34px] font-katibeh">
            Bay of Lights Entertainment
          </div>
          <div class="text-center">
            {{
              language == 'EN'
                ? 'Login with your phone number to get'
                : 'បំពេញជាមួយលេខទូរស័ព្ទ ដើម្បីទទួលយក'
            }}
            <br />
            {{ language == 'EN' ? 'your voucher code' : 'លេខកូដរង្វាន់គូប៉ុង' }}
          </div>
          <!-- lines -->
          <hr class="w-1/2 border-gold mt-3" />
          <hr class="w-1/3 border-gold mt-1" />
        </div>
        <!-- 3 dots -->
        <div class="flex justify-center space-x-3 my-6">
          <div class="w-3 h-3 bg-primary rounded-full"></div>
          <div class="w-3 h-3 bg-primary rounded-full"></div>
          <div class="w-3 h-3 bg-grey rounded-full"></div>
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
            <div class="flex justify-center py-3">
              <button
                :class="'bottom-4 self-center left-1/3 text-white bg-primary font-medium rounded-md px-6 py-2.5 text-center'"
                type="submit"
              >
                {{ language == 'EN' ? 'Submit' : 'បញ្ជូន' }}
              </button>
            </div>
          </form>
        </div>
        <!-- button -->
        <button
          id="btn-voucher1"
          class="hidden"
          data-modal-target="voucher-modal"
          data-modal-toggle="voucher-modal"
          data-modal-hide="login-modal"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toast } from 'vue3-toastify';
const voucher = useVoucher();
const language = useLanguague();
const otpSend = ref(false);
const second = ref(60);
const otp = useOtp();
const formData = ref({
  phone_number: '',
  otp: '',
  voucherCode: '',
});
const handleSendOtp = async () => {
  if (formData.value.phone_number) {
    if ((formData.value.phone_number + '').length < 8) {
      return toast.warning(
        language.value == 'EN'
          ? 'Invalid phone number'
          : 'លេខទូរស័ព្ទមិនត្រឹមត្រូវ'
      );
    }
    try {
      const { pending, data: otpApi }: any = await useFetch(
        'http://127.0.0.1:8000/users/sendOtpLogin',
        {
          method: 'POST',
          body: {
            email: 'teammarvel124@gmail.com',
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
const handleLogin = async () => {
  if (formData.value.otp == otp.value) {
    const { pending, data: user }: any = await useFetch(
      'http://127.0.0.1:8000/users/login',
      {
        method: 'POST',
        body: {
          phone_number: formData.value.phone_number,
        },
      }
    );
    voucher.value.code = user.value?.voucher?.code;
    voucher.value.type = user.value?.voucher?.type;
    document.getElementById('btn-voucher1')?.click();
  } else {
    toast.error(
      language.value == 'EN' ? 'Wrong OTP Code' : 'លេខកូដ OTP មិនត្រឹមត្រូវ'
    );
  }
};
</script>

<style scoped></style>

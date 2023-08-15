<template>
  <!-- <div class="bg-primary opacity-60 w-screen h-screen fixed z-0">ss</div> -->
  <div class="card-containers">
    <div style="width: 100%; height: 100%">
      <img
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.5);
        "
        src="/bg.png"
      />
    </div>
    <div class="absolute">
      <div class="flex flex-col items-center justify-center w-80 sm:w-[444px]">
        <div
          class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0"
        >
          <div class="flex justify-center">
            <img class="w-1/2" src="/logo.png" alt="logo" />
          </div>
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="flex justify-center text-xl font-bold leading-tight tracking-tight text-secondary md:text-2xl"
            >
              DASHBOARD LOGIN
            </h1>
            <form class="space-y-4 md:space-y-6" @submit.prevent="handleSubmit">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Email</label
                >
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Password</label
                >
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>

              <button
                type="submit"
                class="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toast } from 'vue3-toastify';
import { setCookie } from '../auth';
const router = useRouter();
const email = ref('');
const password = ref('');

const handleSubmit = async () => {
  const res = await setCookie(
    { username: email.value, password: password.value }
    // isMatch
  );
  if (res) {
    router.push('/dashboard');
  } else {
    toast.error('Invalid credential.');
  }
};
</script>

<style scoped>
.card-containers {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}
</style>

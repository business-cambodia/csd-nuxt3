<template>
  <!-- Main modal -->
  <div
    id="signup-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-3xl shadow dark:bg-gray-700 p-6">
        <!-- header -->
        <div class="flex justify-center flex-col items-center">
          <div class="text-gold text-5xl text-[34px] font-katibeh">
            Bay of Lights Entertainment
          </div>
          <div class="text-center">
            Fill in some information and verify<br />phone number
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
          <!-- <div class="text-primary text-xl">Sign Up</div> -->
          <form action="" class="w-full px-6 text-secondary">
            <div class="relative h-11 w-full min-w-[200px] my-3">
              <input
                type="text"
                class="peer h-full w-full border-b border-0 focus:ring-0 focus:p-0 border-primary bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-black outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gold focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label
                class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gold after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gold peer-focus:after:scale-x-100 peer-focus:after:border-gold peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-black"
              >
                Full Name
              </label>
            </div>
            <div class="relative h-11 w-full min-w-[200px] my-3">
              <input
                type="email"
                class="peer h-full w-full border-b border-0 focus:ring-0 focus:p-0 border-primary bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-black outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gold focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label
                class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gold after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gold peer-focus:after:scale-x-100 peer-focus:after:border-gold peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                Email
              </label>
            </div>
            <div class="relative h-11 w-full min-w-[200px] my-3">
              <input
                type="number"
                class="peer h-full w-full border-b border-0 focus:ring-0 focus:p-0 border-primary bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-black outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gold focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label
                class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gold after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gold peer-focus:after:scale-x-100 peer-focus:after:border-gold peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                Phone Number
              </label>
            </div>
            <div class="relative h-11 w-full min-w-[200px] my-3">
              <input
                type="number"
                min="0"
                step="5"
                max="9999"
                class="peer h-full w-full border-b border-0 focus:ring-0 focus:p-0 border-primary bg-transparent pt-4 pb-1.5 font-sans text-base font-normal text-black outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gold focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label
                class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gold after:transition-transform after:duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gold peer-focus:after:scale-x-100 peer-focus:after:border-gold peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                OTP Code
              </label>
              <div
                class="bg-gold absolute right-0 bottom-2 text-white px-2 rounded-xl text-sm"
              >
                GET
              </div>
            </div>
          </form>
        </div>
        <!-- button -->
        <div class="flex justify-center py-3">
          <button
            data-modal-target="voucher-modal"
            data-modal-toggle="voucher-modal"
            data-modal-hide="signup-modal"
            :class="'bottom-4 left-1/3 text-white bg-primary font-medium rounded-md px-6 py-2.5 text-center'"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

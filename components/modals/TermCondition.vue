<template>
  <div>
    <div
      id="term-modal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-center justify-center pt-5 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="font-medium text-gold text-4xl font-katibeh self-center">
              Terms And Conditions
            </h3>
          </div>
          <!-- Modal body -->
          <div class="p-6 px-9 space-y-6 lii">
            <ul class="list-disc">
              <li class="">
                To redeem reward, redemption code must be shown to resort
                receptionist upon check in.
              </li>
              <li>
                Redemption code can also be retrieved by logging on to
                <a
                  href="https://bayoflight-entertainment.com/"
                  class="text-blue-600 underline"
                  >Bayoflight-Entertainment.com</a
                >
              </li>
              <li>
                Reward can be redeemed for single, twin and triple cottage
                bookings, subject to availability.
              </li>
              <li>
                Voucher reward is not transferable and may not be redeemed for
                cash.
              </li>
              <li>Voucher reward may not be combined with other promotions.</li>
              <li>Voucher must be used prior to expiration date.</li>
              <li>
                Terms and conditions are subject to change without prior notice.
              </li>
            </ul>
          </div>
          <!-- Modal footer -->
          <div
            class="flex justify-center items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              data-modal-hide="term-modal"
              type="button"
              class="text-white bg-primary rounded-lg border text-sm font-medium px-5 py-2.5"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.lii {
  word-wrap: break-word;
  hyphens: auto;
  max-width: 100%;
}
</style>

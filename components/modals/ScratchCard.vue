<template>
  <div
    id="defaultModal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-2xl max-h-full">
      <div class="relative bg-white rounded-3xl shadow p-6">
        <!-- header -->
        <div class="flex justify-center flex-col items-center">
          <div class="text-gold text-5xl text-[34px] font-katibeh">
            Bay of Lights Entertainment
          </div>
          <div :class="'text-center ' + (language == 'en' ? '' : 'pt-2')">
            {{
              language == 'EN'
                ? 'Scratch the card to get special'
                : 'កោសកាតដើម្បីឈ្នះរង្វាន់គូប៉ុងពិសេស'
            }}
            <br />
            {{ language == 'EN' ? 'voucher discounts!' : '' }}
          </div>
          <!-- lines -->
          <hr class="w-1/2 border-gold mt-3" />
          <hr class="w-1/3 border-gold mt-1" />
        </div>
        <!-- 3 dots -->
        <div class="flex justify-center space-x-3 my-6">
          <div class="w-3 h-3 bg-primary rounded-full"></div>
          <div class="w-3 h-3 bg-grey rounded-full"></div>
          <div class="w-3 h-3 bg-grey rounded-full"></div>
        </div>
        <!-- scratch card -->
        <div id="container">
          <div id="card"></div>
        </div>
        <!-- button -->
        <div class="flex justify-center py-3 flex-col items-center">
          <button
            :disabled="!val"
            data-modal-target="signup-modal"
            data-modal-toggle="signup-modal"
            data-modal-hide="defaultModal"
            :class="
              val
                ? 'bottom-4 left-1/3 text-white bg-primary font-medium rounded-md px-6 py-2.5 text-center'
                : 'bottom-4 left-1/3 text-white bg-primary opacity-40 font-medium rounded-md px-6 py-2.5 text-center'
            "
            type="button"
          >
            {{ language == 'EN' ? 'Redeem' : 'ទទួលយក' }}
          </button>
          <div class="text-[11px] mt-3 text-center">
            <p>
              {{
                language == 'EN'
                  ? '* Voucher is valid until October 31st, 2023.'
                  : '* គូប៉ុងនេះមានសុពលភាពដល់ថ្ងៃ៣១ខែតុលាឆ្នាំ២០២៣'
              }}
            </p>
            <p>
              {{
                language == 'EN'
                  ? '* By clicking Redeem, you agreed to our'
                  : '* ពេលចុចទទួលយក មានន័យថាលោកអ្នកបានយល់ព្រមជាមួយនឹង'
              }}
              <br v-if="language == 'KH'" />
              <span
                class="underline text-secondary"
                data-modal-target="term-modal"
                data-modal-toggle="term-modal"
                >{{
                  language == 'EN'
                    ? 'Terms & Conditions'
                    : 'លក្ខខណ្ឌនៃការប្រើប្រាស់'
                }}</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '../../wScratchpad.min.js';
import '../../scratch.js';
import { val } from '../../wScratchpad.min.js';
const language = useLanguague();
</script>

<style scoped>
#container {
  width: inherit;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}

#card {
  border-radius: 5%;
  width: 330px;
  height: 200px;
  position: relative;
  user-select: none;
}

img,
canvas {
  border-radius: 10px;
}

#card:active {
  transform: scale(1.05);
}
</style>

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
        <div class="relative bg-white rounded-lg shadow">
          <!-- Modal header -->
          <div class="flex items-center justify-center pt-5 border-b rounded-t">
            <h3
              :class="
                'font-medium text-gold font-katibeh self-center ' +
                (language == 'EN' ? 'text-4xl' : 'text-2xl')
              "
            >
              {{
                language == 'EN'
                  ? 'Terms & Conditions'
                  : 'លក្ខខណ្ឌនៃការប្រើប្រាស់'
              }}
            </h3>
          </div>
          <!-- Modal body -->
          <div class="p-6 px-9 space-y-6 lii">
            <ul class="list-disc">
              <li>
                {{
                  language == 'EN'
                    ? 'To redeem reward, redemption code must be shown to resort receptionist upon check in.'
                    : 'ដើម្បីប្រើប្រាស់រង្វាន់នេះបាន លោកអ្នកត្រូវយកលេខកូដ៥ខ្ទង់ពីក្នុងគូប៉ុងទៅបង្ហាញអ្នកទទួលភ្ញៀវនៅពេល check in.'
                }}
              </li>
              <li>
                {{
                  language == 'EN'
                    ? 'Redemption code can also be retrieved by logging on to our website:'
                    : 'អ្នកអាចយកគូប៉ុងកូដបាន តាមរយៈវែបសាយ'
                }}
                <br />
                <a
                  href="https://bayoflights-entertainment.com/"
                  class="text-blue-600 underline"
                  >Bayoflights-Entertainment.com</a
                >
              </li>
              <li>
                {{
                  language == 'EN'
                    ? 'Reward can be redeemed for single, twin and triple cottage bookings, subject to availability.'
                    : 'រង្វាន់អាចប្រើប្រាស់បាន ក្នុងការកក់ប្រភេទបន្ទប់ផ្សេងៗដែលមាននៅទំនេរ'
                }}
              </li>
              <li>
                {{
                  language == 'EN'
                    ? 'Voucher reward is not transferable and may not be redeemed for cash.'
                    : 'រង្វាន់គូប៉ុងមិនអាចផ្លាស់ប្តូរឱ្យគ្នាបាន និងមិនអាចប្តូរយកប្រាក់សុទ្ធវិញបាននោះទេ'
                }}
              </li>
              <li>
                {{
                  language == 'EN'
                    ? 'Voucher reward may not be combined with other promotions.'
                    : 'រង្វាន់គូប៉ុងមិនអាចយកទៅប្រើប្រាស់ រួមបញ្ចូលជាមួយនឹងប្រ៉ូម៉ូសិនផ្សេងទៀតបាននោះទេ'
                }}
              </li>
              <li>
                {{
                  language == 'EN'
                    ? 'Voucher must be used prior to expiration date.'
                    : 'រង្វាន់គូប៉ុងអាចប្រើប្រាស់បានតែក្នុងកំឡុងពេលដែលមិនទាន់ដល់ថ្ងៃផុតកំណត់'
                }}
              </li>
              <li>
                {{
                  language == 'EN'
                    ? 'Terms and conditions are subject to change without prior notice.'
                    : 'យើងរក្សាសិទ្ធិក្នុងការផ្លាស់ប្តូរលក្ខខណ្ឌនៃការប្រើប្រាស់ដោយមិនចាំបាច់ប្រាប់ដំណឹងជាមុន'
                }}
              </li>
            </ul>
          </div>
          <!-- Modal footer -->
          <div
            class="flex justify-center items-center p-6 space-x-2 border-t border-gray-200 rounded-b"
          >
            <button
              data-modal-hide="term-modal"
              type="button"
              class="text-white bg-primary rounded-lg border text-sm font-medium px-5 py-2.5"
            >
              {{
                language == 'EN'
                  ? 'Close'
                  : 'បិទ'
              }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const language = useLanguague();
</script>

<style>
li {
  hyphens: none;
}
</style>

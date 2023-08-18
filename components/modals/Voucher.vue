<template>
  <!-- Main modal -->
  <div
    id="voucher-modal"
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
          <!-- <div class="text-center">
            Scratch the card to get special <br />
            voucher discounts!
          </div> -->
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
          <div class="text-gold text-5xl text-[30px] font-katibeh">
            {{ language == 'EN' ? 'CONGRATULATIONS' : 'សូមអបអរសាទរ' }}
          </div>
          <div class="text-sm text-center">
            {{
              language == 'EN'
                ? 'Here is your 5 digits unique code to use the voucher at our resort. Save the code by '
                : 'នេះគឺលេខកូដ៥ខ្ទង់សម្រាប់ប្រើប្រាស់ក្នុងការទទួលយករង្វាន់ពីពួកយើង។ '
            }}
            <strong v-if="language == 'EN'">Screenshot or Log in</strong>
            {{
              language == 'EN'
                ? 'anytime to recieve again.'
                : 'ថតស្គ្រីនទុកឬ ចូលម្តងទៀតដើម្បីទទួលយកកូដនៅពេលក្រោយ។'
            }}
          </div>
        </div>
        <!-- voucher code -->
        <div class="copy-text bg-grey my-3">
          <input
            type="text"
            class="text bg-grey w-full focus:ring-0 text-primary font-bold"
            readonly
            :value="voucher?.code"
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              fill="white"
            >
              <path
                d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"
              />
            </svg>
          </button>
        </div>

        <ClientOnly
          ><img
            class="rounded-xl"
            :src="
              '/z' +
              (voucher.type == '50$ OFF'
                ? 'Vouchers.jpg'
                : voucher.type == '35$ OFF'
                ? 'Vouchers-3.jpg'
                : 'Vouchers-2.jpg')
            "
            :alt="voucher"
          />
          <div class="pl-3 pt-1 text-sm">
            {{
              voucher?.type == '50$ OFF'
                ? language == 'EN'
                  ? 'Voucher 1: $50 OFF'
                  : 'គូប៉ុងទី១៖ បញ្ចុះតម្លៃ $50'
                : voucher.type == '35$ OFF'
                ? language == 'EN'
                  ? 'Voucher 1: $35 OFF'
                  : 'គូប៉ុងទី១៖ បញ្ចុះតម្លៃ $35'
                : language == 'EN'
                ? 'Voucher 2: FREE 1 Room/Night'
                : 'គូប៉ុងទី២៖ ផ្តល់ជូន ១យប់/បន្ទប់ ដោយឥតគិតថ្លៃ'
            }}
            <br />
            {{
              voucher?.type == '50$ OFF'
                ? language == 'EN'
                  ? '• With 1-night booking'
                  : '• ប្រើសម្រាប់ការស្នាក់នៅ១យប់'
                : voucher.type == '35$ OFF'
                ? language == 'EN'
                  ? '• With 1-night booking'
                  : '• ប្រើសម្រាប់ការស្នាក់នៅ១យប់'
                : language == 'EN'
                ? '• Book 1 Room get 1 Room Free / Book the first night get next free'
                : '• កក់បន្ទប់១ទទួលបានបន្ទប់មួយទៀតហ្វ្រី ឬកក់១យប់ថែម១យប់'
            }}
            <br />{{
              language == 'EN'
                ? '• This voucher is valid until November 30, 2023.'
                : '• គូប៉ុងនេះមានសុពលភាពដល់ថ្ងៃ៣០ខែវិច្ឆិកាឆ្នាំ២០២៣'
            }}
          </div></ClientOnly
        >
        <p
          class="text-secondary underline text-center text-sm cursor-pointer"
          data-modal-target="term-modal"
          data-modal-toggle="term-modal"
        >
          {{
            language == 'EN' ? 'Terms & Conditions' : 'លក្ខខណ្ឌនៃការប្រើប្រាស់'
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const voucher = useVoucher();
const language = useLanguague();
if (process.client) {
  let copyText = document.querySelector('.copy-text')!;
  copyText.querySelector('button')!.addEventListener('click', function () {
    let input = copyText.querySelector('input.text');
    input?.select();
    document.execCommand('copy');
    copyText.classList.add('active');
    window.getSelection()?.removeAllRanges();
    setTimeout(function () {
      copyText.classList.remove('active');
    }, 2000);
  });
}
</script>

<style scoped>
.copy-text {
  position: relative;
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
}
.copy-text input.text {
  padding: 1px;
  font-size: 28px;
  border: none;
  outline: none;
}
.copy-text button {
  position: absolute;
  right: 10px;
  padding: 10px;
  background: #0e4c68;
  color: #fff;
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 30%;
  cursor: pointer;
}

.copy-text button:active {
  background: #0e4c68;
}
.copy-text button:before {
  content: 'Copied';
  position: absolute;
  top: -45px;
  right: -10px;
  background: #0e4c68;
  padding: 8px 10px;
  border-radius: 20px;
  font-size: 15px;
  display: none;
}
.copy-text button:after {
  z-index: 440;
  content: '';
  position: absolute;
  top: -15px;
  right: 10px;
  width: 10px;
  height: 10px;
  background: #0e4c68;
  transform: rotate(45deg);
  display: none;
}
.copy-text.active button:before,
.copy-text.active button:after {
  display: block;
}
</style>

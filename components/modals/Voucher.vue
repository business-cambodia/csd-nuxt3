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
      <div class="relative bg-white rounded-3xl shadow dark:bg-gray-700 p-6">
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
            CONGRATULATIONS
          </div>
          <div class="text-sm text-center">
            Here is your 5 digits unique code to use the voucher at our resort.
          </div>
        </div>
        <!-- voucher code -->
        <div class="copy-text bg-grey my-3">
          <input
            type="text"
            class="text bg-grey w-full focus:ring-0 text-primary font-bold"
            readonly
            value="K7J9U"
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

        <img class="rounded-xl" src="vouchers.jpg" alt="" />

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

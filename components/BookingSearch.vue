<template>
  <div
    class="flex border justify-center rounded-2xl md:rounded-full md:h-20 shadow-2xl px-9 py-3 w-full mx-3 md:w-auto"
  >
    <VDatePicker
      v-model.range.number="range"
      mode="date"
      :popover="popover"
      :disabled-dates="disabledDates"
    >
      <template
        #default="{
          inputValue,
          inputEvents,
          togglePopover,
          showPopover,
          hidePopover,
        }"
      >
        <div
          class="flex flex-col md:flex-row md:justify-start items-center md:space-x-6"
        >
          <div class="flex self-center md:space-x-6 mb-3 md:mb-0">
            <div class="flex items-center space-x-3">
              <IconsCalendar />
              <div
                class="relative flex flex-col items-start text-sm w-28 md:w-auto md:border-r-2"
              >
                <div class="text-gray-500">Check-In</div>
                <input
                  readonly
                  @mouseenter="
                    () => {
                      hidePopover();
                      popover.placement = 'bottom-start';
                    }
                  "
                  @click="
                    () => {
                      showPopover();
                    }
                  "
                  type="text"
                  class="border-none text-start cursor-pointer w-28 md:w-auto text-gray-900 focus:ring-0 p-0"
                  placeholder="Select date"
                  :value="
                    new Date(inputValue.start).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })
                  "
                />
              </div>
            </div>

            <div class="flex items-center text-start space-x-3">
              <IconsCalendar />
              <div
                class="relative flex flex-col text-sm w-28 md:w-auto md:border-r-2"
              >
                <div class="text-gray-500">Check-Out</div>
                <input
                  readonly
                  @mouseenter="
                    () => {
                      hidePopover();
                      popover.placement = 'bottom';
                    }
                  "
                  @click="
                    () => {
                      showPopover();
                    }
                  "
                  :value="
                    new Date(inputValue.end).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })
                  "
                  type="text"
                  class="border-none text-start w-28 md:w-auto cursor-pointer text-gray-900 focus:ring-0 p-0"
                  placeholder="Select date"
                />
              </div>
            </div>
          </div>

          <div class="flex justify-between self-start items-center w-full">
            <div class="flex items-center space-x-3">
              <svg
                class="w-6 mr-1"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_547_4658)">
                  <path
                    d="M2.69141 23.9016C2.69141 21.6737 3.5764 19.5372 5.15171 17.9619C6.72701 16.3866 8.86359 15.5016 11.0914 15.5016C13.3192 15.5016 15.4558 16.3866 17.0311 17.9619C18.6064 19.5372 19.4914 21.6737 19.4914 23.9016H17.3914C17.3914 22.2307 16.7277 20.6283 15.5462 19.4468C14.3647 18.2653 12.7623 17.6016 11.0914 17.6016C9.42054 17.6016 7.81811 18.2653 6.63663 19.4468C5.45515 20.6283 4.79141 22.2307 4.79141 23.9016H2.69141ZM11.0914 14.4516C7.61066 14.4516 4.79141 11.6323 4.79141 8.15156C4.79141 4.67081 7.61066 1.85156 11.0914 1.85156C14.5722 1.85156 17.3914 4.67081 17.3914 8.15156C17.3914 11.6323 14.5722 14.4516 11.0914 14.4516ZM11.0914 12.3516C13.4119 12.3516 15.2914 10.4721 15.2914 8.15156C15.2914 5.83106 13.4119 3.95156 11.0914 3.95156C8.77091 3.95156 6.89141 5.83106 6.89141 8.15156C6.89141 10.4721 8.77091 12.3516 11.0914 12.3516ZM19.7896 16.2397C21.2652 16.9043 22.5175 17.9809 23.3959 19.3401C24.2744 20.6992 24.7416 22.2832 24.7414 23.9016H22.6414C22.6416 22.6877 22.2913 21.4997 21.6324 20.4802C20.9736 19.4608 20.0343 18.6533 18.9276 18.1549L19.7886 16.2397H19.7896ZM19.0672 4.38521C20.1251 4.82127 21.0296 5.56178 21.666 6.51275C22.3023 7.46373 22.6418 8.58231 22.6414 9.72656C22.6418 11.1675 22.1035 12.5566 21.1321 13.6208C20.1607 14.6851 18.8264 15.3477 17.3914 15.4785V13.3648C18.1694 13.2534 18.8912 12.8955 19.4508 12.3436C20.0104 11.7918 20.3783 11.0751 20.5006 10.2987C20.6229 9.52239 20.4931 8.72727 20.1302 8.03013C19.7673 7.33299 19.1905 6.77055 18.4845 6.42536L19.0672 4.38521Z"
                    fill="url(#paint0_linear_547_4658)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_547_4658"
                    x1="12.5669"
                    y1="-4.4998"
                    x2="-12.9046"
                    y2="10.2925"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F0644E" />
                    <stop offset="1" stop-color="#F0BA2C" />
                  </linearGradient>
                  <clipPath id="clip0_547_4658">
                    <rect
                      width="25.2"
                      height="25.2"
                      fill="white"
                      transform="translate(0.589844 0.804688)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div class="relative flex flex-col text-sm">
                <div class="text-gray-500">Adult</div>
                <input
                  :min="1"
                  v-model.number="cart.adults"
                  type="number"
                  class="border-none cursor-pointer text-gray-900 focus:ring-0 p-0 w-12"
                  placeholder="Select Adult"
                />
              </div>
            </div>

            <button
              @click="
                () => {
                  cart.startDate = inputValue.start;
                  cart.endDate = inputValue.end;
                }
              "
              class="flex justify-center space-x-2 items-center bg-gradient-orange w-24 md:w-12 h-9 md:h-12 rounded-full"
            >
              <svg
                class="h-1/2"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.2271 16.2463L21.7242 20.7424L20.2385 22.2281L15.7424 17.731C14.0695 19.0721 11.9886 19.8015 9.84453 19.7984C4.62813 19.7984 0.394531 15.5648 0.394531 10.3484C0.394531 5.13204 4.62813 0.898438 9.84453 0.898438C15.0609 0.898438 19.2945 5.13204 19.2945 10.3484C19.2976 12.4925 18.5682 14.5734 17.2271 16.2463ZM15.1208 15.4672C16.4533 14.0968 17.1975 12.2599 17.1945 10.3484C17.1945 6.28704 13.9049 2.99844 9.84453 2.99844C5.78313 2.99844 2.49453 6.28704 2.49453 10.3484C2.49453 14.4088 5.78313 17.6984 9.84453 17.6984C11.756 17.7014 13.5929 16.9573 14.9633 15.6247L15.1208 15.4672Z"
                  fill="white"
                />
              </svg>
              <p class="md:hidden text-white text-sm">Search</p>
            </button>
          </div>
        </div>
      </template>
    </VDatePicker>
  </div>
</template>

<script setup lang="ts">
const cart = useCart();
const range = ref({
  start: new Date(),
  end: new Date(new Date().setDate(new Date().getDate() + 1)),
});

const disabledDates = ref([
  { start: null, end: new Date(new Date().setDate(new Date().getDate() - 1)) },
]);

const popover = ref({
  visibility: 'click',
  autoHide: true,
  placement: 'bottom-start',
  showDelay: 0,
  hideDelay: 110,
});

</script>

<style scoped></style>

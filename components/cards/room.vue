<template>
  <div
    class="rounded-xl m-3 md:my-6 flex flex-col md:flex-row md:justify-betwen shadoww shadow-2xl font-poppins border-3 border-red-900"
  >
    <Carousel class="md:w-1/2">
      <Slide v-for="slide in room.roomTypePhotos" :key="slide">
        <img
          class="rounded-t-xl md:rounded-l-xl md:rounded-tr-none h-52 w-full object-cover object-center md:h-[45vh] md:aspect-square"
          :src="slide"
          alt=""
        />
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    <div
      class="p-3 md:p-6 text-xs md:text-sm flex flex-col justify-between md:w-1/2 bg-gray-50 rounded-b-xl md:rounded-s-none md:rounded-e-xl"
    >
      <div class="">
        <div
          class="text-2xl uppedrcase md:text-3xl font-bold font-katibeh text-primary p-[-12px]"
        >
          {{ room.roomTypeName }}
        </div>
        <div class="text-xs md:text-sm flex mb-2">
          <svg
            class="w-4 mr-1"
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
          Sleeps {{ room.maxGuests }} |
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 mx-1"
            viewBox="0 0 448 512"
            fill="url(#paint0_linear_547_4658)"
          >
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
            </defs>
            <path
              d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"
            />
          </svg>

          Breakfast Included
        </div>
        <div class="a" v-html="room.roomTypeDescription"></div>
        <div class="mt-4">
          Room features
          <ul class="grid grid-cols-2">
            <li class="flex" v-for="feature in room.roomTypeFeatures">
              <svg
                class="mr-2 w-3"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_110_9505"
                  style="mask-type: luminance"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="5"
                  width="15"
                  height="15"
                >
                  <path
                    d="M14.9333 5.05469H0V19.2181H14.9333V5.05469Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_110_9505)">
                  <path
                    d="M7.46667 5.05469C7.72016 8.86179 10.9193 11.896 14.9333 12.1364C10.9193 12.3768 7.72016 15.411 7.46667 19.2181C7.21319 15.411 4.01405 12.3768 0 12.1364C4.01405 11.896 7.21319 8.86179 7.46667 5.05469Z"
                    fill="#0E4C68"
                  />
                </g>
                <mask
                  id="mask1_110_9505"
                  style="mask-type: luminance"
                  maskUnits="userSpaceOnUse"
                  x="9"
                  y="0"
                  width="7"
                  height="7"
                >
                  <path
                    d="M16.0016 0H9.60156V6.07004H16.0016V0Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask1_110_9505)">
                  <path
                    d="M12.8016 0C12.9102 1.63161 14.2812 2.93199 16.0016 3.03502C14.2812 3.13806 12.9102 4.43841 12.8016 6.07004C12.6929 4.43841 11.3219 3.13806 9.60156 3.03502C11.3219 2.93199 12.6929 1.63161 12.8016 0Z"
                    fill="#0E4C68"
                  />
                </g>
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
      <div class="flex justify-end items-center space-x-2">
        <div
          class="text-sm md:text-base font-sans font-bold text-gradient-green-blue"
        >
          USD {{ room.roomRate }}
        </div>
        <select
          :id="'roomQty' + room.roomTypeID"
          @change="
            (e:any) => {
              const index = cart.rooms.findIndex(
                (x:any) => x.roomTypeID == room.roomTypeID
                );
                if (e?.target?.value == 0) 
                  return cart.rooms.splice(index, 1);
                if (index > -1) {
                  cart.rooms[index].quantity = e.target.value;
                } else {
                  room.quantity = e.target.value;
                  cart.rooms.push(room);
                }

              // cart.rooms.push(room);
            }
          "
          class="rounded-xl border-gray-300 shadow-sm focus:border-gray-300 focus:ring-0 text-sm md:text-base w-16"
        >
          <option selected :value="0">0</option>
          <option
            v-for="amount in room.roomsAvailable"
            :key="amount"
            :value="amount"
          >
            {{ amount }} ($ {{ room.roomRate * amount }})
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
const cart = useCart();

defineProps<{
  room: any;
}>();
</script>

<style scoped>
.shadoww {
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
}
</style>

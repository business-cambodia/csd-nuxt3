<template>
  <div class="rounded-2xl mt-6 shadow-2xl h-fit">
    <div class="bg-gray-100 w-full rounded-t-2xl p-3 text-sm">
      <div class="text-base flex items-center space-x-3 font-bold font-sans">
        <IconsDate />
        <div>
          {{
            new Date(cart.startDate).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })
          }}
          -
          {{
            new Date(cart.endDate).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })
          }}
        </div>
        ,
        <div>
          {{
            Math.floor(
              (new Date(cart.endDate).setHours(0, 0, 0, 0) -
                new Date(cart.startDate).setHours(0, 0, 0, 0)) /
                (24 * 60 * 60 * 1000)
            )
          }}
          night
        </div>
        ,
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 mx-1"
            viewBox="0 0 448 512"
          >
            <path
              d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
            />
          </svg>
          {{ cart.adults }}
        </div>
      </div>
    </div>
    <div class="gg p-3 text-sm flex flex-col space-y-4">
      <div class="flex justify-between w-full">
        <p>Check In:</p>
        {{
          new Date(cart.startDate).toLocaleDateString('en-US', {
            weekday: 'short',
            day: 'numeric',
            month: 'long',
          })
        }}
      </div>
      <div class="flex justify-between w-full">
        <p>Check Out:</p>
        {{
          new Date(cart.endDate).toLocaleDateString('en-US', {
            weekday: 'short',
            day: 'numeric',
            month: 'long',
          })
        }}
      </div>
      <div v-if="cart.rooms.length > 0" class="my-3 flex flex-col space-y-2">
        <div
          class="flex justify-between"
          v-for="room in cart.rooms"
          :key="room.id"
        >
          <div class="flex items-center space-x-2">
            <svg
              v-if="!isCheckOutPage"
              @click="removeRoomFromCart(cart, room)"
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 cursor-pointer"
              fill="red"
              viewBox="0 0 448 512"
            >
              <path
                d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"
              />
            </svg>
            <span class="text-secondary" v-else>-</span>
            <div>{{ room.quantity }} x {{ room.roomTypeName }}</div>
          </div>
          <div class="flex sm:flex-row flex-col">
            <span class="relative mx-2 text-xs" v-if="isDiscounted">
              ${{ room?.baseRate * room.quantity }}
              <div
                class="absolute bottom-1/2 left-0 w-full h-full border-b border-red-600 transform -rotate-6"
              ></div>
            </span>
            <div>${{ room.roomRate * room.quantity }}</div>
          </div>
        </div>
      </div>

      <div v-if="cart.addons.length > 0">
        <p class="font-black">• ADD-ONS</p>
        <div class="my-3 flex flex-col space-y-2">
          <div
            class="flex justify-between"
            v-for="addon in cart.addons"
            :key="addon.id"
          >
            <div class="flex items-center space-x-2">
              <svg
                v-if="!isCheckOutPage"
                @click="removeAddonFromCart(cart, addon)"
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 cursor-pointer"
                fill="red"
                viewBox="0 0 448 512"
              >
                <path
                  d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                />
              </svg>
              <span class="text-secondary" v-else>-</span>
              <div>{{ addon.quantity }} x {{ addon.name }}</div>
            </div>
            ${{ addon.price * addon.quantity }}
          </div>
        </div>
      </div>
      <form
        @submit.prevent="searchPromocode()"
        class="grid grid-cols-12 space-x-3"
        v-if="isCheckOutPage"
      >
        <input
          :disabled="isDiscounted"
          v-model="promocode"
          @change="() => (isDiscounted = null)"
          type="text"
          :class="`${
            isDiscounted && 'bg-gray-100'
          } rounded-2xl text-sm text-center w-full col-span-9 focus:border-0 uppercase focus:ring-black ring-1 ring-black border-0`"
          placeholder="ADD PROMO CODE"
        />
        <button
          type="submit"
          :disabled="isDiscounted ?? promocode == ''"
          :class="`border text-sm rounded-2xl ${
            isDiscounted ? 'bg-gray-600 text-white' : 'bg-gray-200'
          } italic col-span-3`"
        >
          {{ isDiscounted ? 'Applied' : 'Apply' }}
        </button>
      </form>
      <span
        v-if="isDiscounted == false && promocode != ''"
        class="text-red-600 text-xs"
      >
        {{
          (language === 'KH' && 'ប្រ៉ូម៉ូកូដនេះមិនត្រឹមត្រូវទេ') ||
          (language === 'CN' && '') ||
          'This promo code is invalid.'
        }}</span
      >
      <div class="text-base font-black">
        <hr />
        <div class="flex justify-between my-3">
          <p>TOTAL:</p>
          <p>
            $
            {{
              cart.rooms.reduce((accumulator: any, room: any) => {
                return accumulator + room.roomRate * room.quantity;
              }, 0) +
              cart.addons.reduce((accumulator: any, addon: any) => {
                return accumulator + addon.price * addon.quantity;
              }, 0)
            }}
          </p>
        </div>
        <hr />
        <div class="flex flex-col space-y-3 mt-3" v-if="isCheckOutPage">
          <p class="text-xs">Choose Payment Option:</p>
          <div
            class="cursor-pointer"
            @click="cart.payment_option = 'abapay_khqr'"
          >
            <CardsKHQR />
          </div>
          <div class="cursor-pointer" @click="cart.payment_option = 'cards'">
            <CardsCreditDebit />
          </div>
          <div class="cursor-pointer" @click="cart.payment_option = 'alipay'">
            <CardsAlipay />
          </div>
          <div class="cursor-pointer" @click="cart.payment_option = 'wechat'">
            <CardsWechat />
          </div>
        </div>
        <div class="text-[10px] font-light p-0 leading-4 mt-3">
          By clicking the booking button below, I agree to the
          <span
            @click="scrollTop"
            data-modal-target="term-modal"
            data-modal-toggle="term-modal"
            class="font-sans font-bold cursor-pointer hover:underline"
            >Policy and Terms & Conditions.</span
          >
        </div>
      </div>
    </div>
    <div class="text-red-600 text-xs text-center py-1">
      {{
        cart.rooms.length != 0 &&
        cart.adults >
          cart.rooms.reduce(
            (sum: number, room: any) => sum + +(room.maxGuests * room.quantity),
            0
          )
          ? (language === 'KH' &&
              `សូមបន្ថែមចំនួនបន្ទប់សម្រាប់ភ្ញៀវសរុប ${cart.adults} នាក់!`) ||
            (language === 'CN' && '') ||
            `Please add more room to fit ${cart.adults} adults!`
          : ''
      }}
    </div>
    <div class="flex justify-center" v-if="loading">
      <CardsLoading />
    </div>
    <!-- <button
      v-else
      @click="handleBooking"
      :disabled="cart.rooms.length == 0 || (cart.adults > cart.rooms.reduce(
          (sum: number, room: any) => sum + +(room.maxGuests * room.quantity),
          0
        ) )"
      class="text-white w-full font-black py-3 md:py-4 text-xl text-center rounded-b-2xl"
      :class="
        cart.rooms.length == 0 || (cart.adults > cart.rooms.reduce(
          (sum: number, room: any) => sum + +(room.maxGuests * room.quantity),
          0
        ) )
        ? 'bg-gray-500 cursor-default'
        : 'bg-secondary hover:bg-primary'
      "
    >
      {{ isCheckOutPage ? 'CONFIRM BOOKING' : 'BOOK NOW' }}
    </button> -->
  </div>
</template>

<script setup lang="ts">
defineProps({
  loading: Boolean,
});
const language = useLanguague();
const cart = useCart();
const router = useRouter();
const promocode = ref('');
const isDiscounted = ref();
const isCheckOutPage = ref(
  router.currentRoute.value.name?.toString().includes('checkout')
);

const scrollTop = () => {
  window.scrollTo(0, 0);
};
const removeRoomFromCart = (cart: any, roomP: any) => {
  (<any>document.getElementById('roomQty' + roomP.roomTypeID)!).value = 0;
  cart.rooms.splice(
    cart.rooms.findIndex((room: any) => room.roomTypeID == roomP.roomTypeID),
    1
  );
};

const removeAddonFromCart = (cart: any, addonP: any) => {
  (<any>document.getElementById('addonQty' + addonP.itemID)!).value = 0;
  cart.addons.splice(
    cart.addons.findIndex((addon: any) => addon.itemID == addonP.itemID),
    1
  );
};

const handleBooking = () => {
  if (isCheckOutPage.value) {
    document.getElementById('paywayBtn')?.click();
  } else {
    router.push('/bookings/checkout');
  }
};

const formatDate = (dateString: any) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
  const day = date.getDate().toString().padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

const searchPromocode = async () => {
  promocode.value = promocode.value.toUpperCase();
  const res: any = await $fetch(
    `https://api.bayoflights-entertainment.com/rooms/promoCode?startDate=${formatDate(
      cart.value.startDate
    )}&endDate=${formatDate(cart.value.endDate)}&roomTypeID=&promoCode=${
      promocode.value
    }`
  );
  if (res.success) {
    cart.value.rooms.forEach((room: any) => {
      const discountRoom = res.data.find(
        (item: any) => item.roomTypeID == room.roomTypeID
      );
      if (discountRoom && discountRoom.roomRateDetailed[0].rate != 0) {
        room.baseRate = room.roomRate;
        room.roomRate = discountRoom.roomRate;
        room.promoCode = promocode.value;
        return (isDiscounted.value = true);
      } else {
        return (isDiscounted.value = false);
      }
    });
  } else {
    setTimeout(() => {
      promocode.value = '';
      isDiscounted.value = null;
    }, 3000);
    isDiscounted.value = false;
    return;
  }
};
</script>

<style scoped></style>

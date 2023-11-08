<template>
  <div class="ellipse"></div>
  <div class="pb-16"></div>
  <div
    class="text-center font-lobster text-5xl lg:text-7xl text-gradient-green-blue leading-snug lg:pb-6"
  >
    {{
      (language === 'KH' && 'ទាក់ទងពួកយើង') ||
      (language === 'CN' && '') ||
      'Contact us'
    }}
  </div>
  <div class="text-center text-sm lg:text-lg">
    <div class="">KH +855 12 345 678</div>
    <a href="https://maps.app.goo.gl/9nxTHZxP6yEdGE2s8" target="_blank">
      {{
        (language === 'KH' &&
          'មហាវិថីឆ្នេររាម ក្រុងព្រះសីហនុ ព្រះរាជាណាចក្រកម្ពុជា') ||
        (language === 'CN' && '') ||
        'Chhner Ream Blvd, Sihanoukville, Cambodia'
      }}
    </a>
    <div class="flex my-2 space-x-3 justify-center">
      <a
        href="https://www.facebook.com/summerbaybeachclubandcabins"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="29"
          viewBox="0 0 512 512"
          fill="none"
        >
          <path
            d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
            fill="url(#paint0_linear_1057_5240)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1057_5240"
              x1="8.08572"
              y1="2.57422"
              x2="23.5437"
              y2="4.19227"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#76B79F" />
              <stop offset="1" stop-color="#4B90BE" />
            </linearGradient>
          </defs>
        </svg>
      </a>
      <a
        href="https://www.instagram.com/summerbay_beachclub_cabins"
        target="_blank"
      >
        <svg
          width="30"
          height="29"
          viewBox="0 0 30 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.7505 10.9718C12.7622 10.9718 11.1515 12.5831 11.1515 14.5708C11.1515 16.559 12.7628 18.1698 14.7505 18.1698C16.7387 18.1698 18.3495 16.5585 18.3495 14.5708C18.3495 12.5826 16.7382 10.9718 14.7505 10.9718ZM14.7505 8.57251C18.062 8.57251 20.7488 11.2563 20.7488 14.5708C20.7488 17.8825 18.065 20.5691 14.7505 20.5691C11.4389 20.5691 8.7522 17.8853 8.7522 14.5708C8.7522 11.2592 11.436 8.57251 14.7505 8.57251ZM22.5483 8.27157C22.5483 9.09947 21.8755 9.77117 21.0487 9.77117C20.2208 9.77117 19.5491 9.09844 19.5491 8.27157C19.5491 7.44471 20.2218 6.77302 21.0487 6.77302C21.8744 6.77198 22.5483 7.44471 22.5483 8.27157ZM14.7505 4.97353C11.782 4.97353 11.2981 4.98139 9.91741 5.04287C8.97674 5.08703 8.34617 5.21355 7.7603 5.44101C7.23964 5.64293 6.86407 5.88405 6.4639 6.28422C6.06219 6.68593 5.8215 7.0605 5.62039 7.58139C5.39241 8.16861 5.26593 8.79818 5.22256 9.73756C5.16048 11.062 5.15322 11.5249 5.15322 14.5708C5.15322 17.5394 5.16108 18.0232 5.22255 19.4037C5.26673 20.344 5.39342 20.9755 5.62032 21.56C5.82278 22.0814 6.06439 22.4578 6.46263 22.8561C6.86591 23.2588 7.2416 23.5003 7.75755 23.6995C8.35056 23.9287 8.98073 24.0554 9.91723 24.0987C11.2417 24.1607 11.7046 24.1681 14.7505 24.1681C17.7191 24.1681 18.2029 24.1601 19.5835 24.0987C20.5217 24.0547 21.1537 23.9277 21.7397 23.7009C22.2596 23.499 22.6373 23.2566 23.0358 22.8586C23.4392 22.4547 23.6802 22.0799 23.8795 21.5628C24.1082 20.9719 24.2351 20.3409 24.2784 19.4041C24.3405 18.0796 24.3478 17.6166 24.3478 14.5708C24.3478 11.6023 24.3399 11.1184 24.2784 9.73782C24.2343 8.79932 24.1072 8.16641 23.8803 7.58061C23.6788 7.0614 23.4369 6.68467 23.037 6.28422C22.6347 5.88186 22.2611 5.64166 21.7398 5.44071C21.1531 5.21291 20.5225 5.08625 19.5837 5.04289C18.2593 4.98079 17.7963 4.97353 14.7505 4.97353ZM14.7505 2.57422C18.0095 2.57422 18.4164 2.58622 19.6961 2.6462C20.9727 2.70519 21.8435 2.90712 22.6083 3.20404C23.399 3.50896 24.0668 3.92083 24.7336 4.58764C25.3994 5.25446 25.8114 5.92426 26.1173 6.71304C26.4131 7.47683 26.6151 8.34857 26.6751 9.62521C26.7321 10.9048 26.7471 11.3117 26.7471 14.5708C26.7471 17.8299 26.7351 18.2367 26.6751 19.5164C26.6161 20.7931 26.4131 21.6638 26.1173 22.4286C25.8123 23.2194 25.3994 23.8871 24.7336 24.554C24.0668 25.2198 23.396 25.6316 22.6083 25.9376C21.8435 26.2335 20.9727 26.4354 19.6961 26.4954C18.4164 26.5524 18.0095 26.5674 14.7505 26.5674C11.4914 26.5674 11.0845 26.5554 9.8049 26.4954C8.52826 26.4364 7.6585 26.2335 6.89273 25.9376C6.10294 25.6326 5.43413 25.2198 4.76733 24.554C4.10052 23.8871 3.68964 23.2164 3.38373 22.4286C3.08681 21.6638 2.88587 20.7931 2.82589 19.5164C2.7689 18.2367 2.75391 17.8299 2.75391 14.5708C2.75391 11.3117 2.7659 10.9048 2.82589 9.62521C2.88486 8.34757 3.08681 7.47782 3.38373 6.71304C3.68863 5.92327 4.10052 5.25446 4.76733 4.58764C5.43413 3.92083 6.10395 3.50995 6.89273 3.20404C7.65751 2.90712 8.52726 2.70618 9.8049 2.6462C11.0845 2.58921 11.4914 2.57422 14.7505 2.57422Z"
            fill="url(#paint0_linear_1057_5246)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1057_5246"
              x1="2.12849"
              y1="2.57422"
              x2="30.7568"
              y2="8.28215"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#76B79F" />
              <stop offset="1" stop-color="#4B90BE" />
            </linearGradient>
          </defs>
        </svg>
      </a>
      <a
        href="https://www.tiktok.com/@beach_club_cabins"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="29"
          viewBox="0 0 448 512"
          fill="none"
        >
          <path
            d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
            fill="url(#paint0_linear_168)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_168"
              x1="8.08572"
              y1="2.57422"
              x2="23.5437"
              y2="4.19227"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#76B79F" />
              <stop offset="1" stop-color="#4B90BE" />
            </linearGradient>
          </defs>
        </svg>
      </a>
      <a
        href="https://www.youtube.com/@Summerbaybeachclubandcabins"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="30"
          height="29"
          viewBox="0 0 30 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.6798 4.79688C16.3205 4.8004 17.9236 4.8159 19.6269 4.88413L20.2308 4.91046C21.9457 4.99165 23.6592 5.13036 24.509 5.36731C25.6426 5.68576 26.5336 6.61496 26.8347 7.7928C27.3142 9.66318 27.3742 13.3137 27.3816 14.1972L27.3827 14.3802V14.3931C27.3827 14.3931 27.3827 14.3975 27.3827 14.406L27.3816 14.5891C27.3742 15.4725 27.3142 19.1231 26.8347 20.9935C26.5294 22.1756 25.6384 23.1049 24.509 23.4189C23.6592 23.6559 21.9457 23.7945 20.2308 23.8758L19.6269 23.902C17.9236 23.9703 16.3205 23.9858 15.6798 23.9894L15.3986 23.9903H15.3861C15.3861 23.9903 15.3819 23.9903 15.3736 23.9903L15.0927 23.9894C13.7366 23.9819 8.06656 23.9206 6.26322 23.4189C5.12965 23.1004 4.23869 22.1713 3.93751 20.9935C3.45805 19.1231 3.39811 15.4725 3.39062 14.5891V14.1972C3.39811 13.3137 3.45805 9.66318 3.93751 7.7928C4.24286 6.61059 5.13382 5.68141 6.26322 5.36731C8.06656 4.86553 13.7366 4.80434 15.0927 4.79688H15.6798ZM12.9868 10.1943V18.5919L20.1848 14.3931L12.9868 10.1943Z"
            fill="url(#paint0_linear_1057_5244)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1057_5244"
              x1="2.76524"
              y1="4.79687"
              x2="30.7895"
              y2="11.7813"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#76B79F" />
              <stop offset="1" stop-color="#4B90BE" />
            </linearGradient>
          </defs>
        </svg>
      </a>
    </div>
  </div>
  <div class="px-4 my-3 mb-6">
    <a href="https://maps.app.goo.gl/9nxTHZxP6yEdGE2s8" target="_blank">
      <img src="map.jpg" class="rounded-lg" alt="map image" />
    </a>
  </div>
  <div class="px-4 my-3 mb-6">
    <form
      class="flex flex-col space-y-6 text"
      action=""
      @submit.prevent="handleSubmit"
    >
      <input
        v-model="formData.name"
        type="text"
        class="bg-gray-50 border text-sm border-gray-300 text-gray-900 rounded-lg outline-none"
        placeholder="Name"
        required
      />
      <input
        v-model="formData.email"
        type="email"
        class="bg-gray-50 border text-sm border-gray-300 text-gray-900 rounded-lg outline-none"
        placeholder="Email"
      />
      <input
        v-model="formData.phone"
        type="text"
        class="bg-gray-50 border text-sm border-gray-300 text-gray-900 rounded-lg outline-none"
        placeholder="Phone"
        required
      />
      <textarea
        v-model="formData.message"
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
        placeholder="Message..."
      ></textarea>
      <button class="bg-gradient-green-blue text-sm text-white rounded-lg h-9">
        Submit
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { toast } from 'vue3-toastify';

const language = useLanguague();
const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
});

const handleSubmit = async () => {
  try {
    await useApi('items/contact_form', {
      method: 'POST',
      data: formData.value,
    });
    toast.success(
      (language.value === 'KH' && ' សាររបស់អ្នកត្រូវបានផ្ញើដោយជោគជ័យ') ||
        (language.value === 'CN' && '') ||
        'Your message has been sent successfully'
    );
    formData.value = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
  } catch (error) {
    toast.error('Something went wrong');
  }
};
</script>

<style scoped>
.ellipse {
  /* Ellipse 2623 */

  position: absolute;
  width: 258.45px;
  height: 149.66px;
  left: -150px;
  top: -79px;

  background: #71b3a3;
  opacity: 0.24;
  filter: blur(17.5px);
  transform: rotate(20.77deg);
}
</style>

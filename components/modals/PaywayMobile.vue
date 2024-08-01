<template>
    <div
    id="aba_checkout_sheet"
    class="aba_checkout_column aba_checkout_items_center aba_checkout_justify_end !flex !hidden"
    aria-hidden="false"
    @click="closePayway()"
  >
    <!-- Dark background for the sheet -->
    <div class="aba_checkout_overlay"></div>

    <!-- The sheet itself -->
    <div
      class="aba_checkout_contents aba_checkout_column"
      style="height: 565px"
    >
      <!-- Sheet controls -->
      <header>
        <!-- The thing to drag if you want to resize the sheet -->
        <div class="aba_checkout_draggable_area">
          <div class="aba_checkout_draggable-thumb"></div>
        </div>
      </header>

      <!-- Body of the sheet -->
      <main
        class="aba_checkout_column aba-checkout-mobile"
        id="aba_checkout_app"
      >
        <img
          style="
            position: fixed;
            top: -30px;
            margin: 0 auto;
            right: 20px;
            width: 118px !important;
          "
          src="https://checkout.payway.com.kh/images/payway-logo-white.svg"
        /><img
          style="
            position: fixed;
            top: -30px;
            margin: 0 auto;
            right: 20px;
            width: 118px !important;
          "
          src="https://checkout.payway.com.kh/images/payway-logo-white.svg"
        /><img
          style="
            position: fixed;
            top: -30px;
            margin: 0 auto;
            right: 20px;
            width: 118px !important;
          "
          src="https://checkout.payway.com.kh/images/payway-logo-white.svg"
        /><img
          style="
            position: fixed;
            top: -30px;
            margin: 0 auto;
            right: 20px;
            width: 118px !important;
          "
          src="https://checkout.payway.com.kh/images/payway-logo-white.svg"
        /><img
          style="
            position: fixed;
            top: -30px;
            margin: 0 auto;
            right: 20px;
            width: 118px !important;
          "
          src="https://checkout.payway.com.kh/images/payway-logo-white.svg"
        /><img
          style="
            position: fixed;
            top: -30px;
            margin: 0 auto;
            right: 20px;
            width: 118px !important;
          "
          src="https://checkout.payway.com.kh/images/payway-logo-white.svg"
        /><img
          style="
            position: fixed;
            top: -30px;
            margin: 0 auto;
            right: 20px;
            width: 118px !important;
          "
          src="https://checkout.payway.com.kh/images/payway-logo-white.svg"
        /><iframe
          allow="web-share"
          frameborder="0"
          width="100%"
          height="416"
          style="border-radius: 1.5rem 1.5rem 0px 0px; height: 565px"
          scrolling="yes"
          :src="link.data"
          name="aba_webservice"
          id="aba_webservice"
        ></iframe>
        <div v-if="!link.data" id="aba_webservice_loading">
          <img
            src="https://checkout.payway.com.kh/images/loading.svg"
            class="loading-icon"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  link: {
    type: Object,
    required: true,
  },
  closePayway: {
    type: Function,
    required: true,
  },
});
</script>

<style scoped>

</style>
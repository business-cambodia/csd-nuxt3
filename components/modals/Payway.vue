<template>
  <div id="aba-checkout" class="aba-checkout-desktop hidden">
    <div class="aba-checkout-modal-container">
      <div class="aba-checkout-content">
        <img
          style="
            right: 0;
            z-index: 100;
            position: absolute;
            top: -30px;
            width: 118px !important;
          "
          src="https://checkout.payway.com.kh/images/payway-logo-white.svg"
        /><img
          class="aba-close-button"
          @click="closePayway()"
          src="https://checkout.payway.com.kh/images/checkout_cross.svg"
        /><iframe
          allow="web-share"
          style="
            border-radius: 12px;
            background: rgb(255, 255, 255);
            transition: height 0.25s ease 0s;
            overflow: hidden;
            max-height: 595px;
            height: 595px;
          "
          frameborder="0"
          width="100%"
          height="264"
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
      </div>
    </div>

    <input type="hidden" value="" id="payway_cancel_url" />
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

<style scoped></style>

<template>
  <!-- background for big screen -->
  <div class="hidden md:block w-screen h-screen bg-primary opacity-60"></div>
  <div
    class="md:hidden z-20 w-[500px] h-[600px] fixed -left-10 top-24 bg-grey bg-curve"
  ></div>
  <div
    class="hidden md:block fixed left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/3 text-white z-50 w-full"
  >
    <div class="font-katibeh uppercase text-6xl text-center">
      Enjoy a luxury Experience
    </div>
    <div class="flex justify-center items-center space-x-4">
      <div class="flex flex-col space-y-1">
        <div class="w-32 border-b-2"></div>
        <div class="w-32 border-b-2 ml-9"></div>
      </div>
      <div class="text-2xl">Resort • Jetski • Fly Max • Nitro Kart</div>
      <div class="flex flex-col space-y-1">
        <div class="w-32 border-b-2"></div>
        <div class="w-32 border-b-2 ml-9"></div>
      </div>
    </div>
  </div>
  <!-- mobile screen -->
  <div
    class="curve md:hidden z-0 w-72 h-40 bg-grey absolute -top-5 -left-40 sm:-left-20"
  ></div>
  <div
    class="z-20 absolute flex justify-between items-center w-full px-6 md:px-12 -top-2 mdg:bg-gray-200"
  >
    <div
      class="bg-primary text-white px-2 md:px-4 rounded-full text-xs sm:text-lg"
    >
      LOGIN
    </div>
    <div class="w-52 md:w-72 relative -top-1">
      <img src="/logo.png" alt="" />
    </div>
    <div class="w-6 sm:w-9"><img src="/cambodia.png" alt="" /></div>
  </div>
  <!--  -->

  <Activity class="md:hidden" />
  <!--  -->

  <div class="absolute bottom-0 z-40 font-proxima">
    <div class="bottom-20 flex justify-center w-screen">
      <button
        class="avatar btn-grad text-3xl md:text-5xl font-bold"
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
      >
        GET VOUCHER
      </button>
    </div>
    <footer
      class="bottom-0 h-16 md:h-20 md:text-primary bg-primary text-white text-center select-none md:flex md:justify-center md:space-x-12 md:items-end"
    >
      <div class="md:flex md:flex-col md:space-y-3">
        <a href="https://goo.gl/maps/23AiZ5hPutkHD7Xe6" target="_blank">
          <div
            class="font-katibeh flex justify-center text-2xl md:text-4xl h-6 pt-1 sm:items-center"
          >
            Our Address
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="0.7em"
              viewBox="0 0 576 512"
              fill="white"
              class="ml-2"
            >
              <path
                d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
              />
            </svg></div
        ></a>
        <div class="text-sm md:text-lg">
          Chhner Ream Blvd, Sihanoukville (city), Cambodia
        </div>
      </div>
      <div class="text-sm md:text-lg">
        Developed by
        <a
          class="underline"
          href="https://facebook.com/techcambodia2022"
          target="_blank"
          >Technology Cambodia</a
        >
      </div>
    </footer>
  </div>
  <ModalsScratchCard />
  <ModalsSignUp />
  <ModalsVoucher />
  <ModalsTermCondition />
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://code.jquery.com/jquery-2.2.4.min.js',
      integrity: 'sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=',
      crossorigin: 'anonymous',
    },
  ],
});
</script>

<style>
@media (min-width: 768px) {
  body {
    background-image: url('/bg.png');
    object-fit: cover;
    background-size: cover;
    background-repeat: no-repeat;
    height: screen;
  }
  footer {
    background: linear-gradient(
      180deg,
      rgba(236, 209, 140, 0.88) 0%,
      #faf7ec 100%
    );
  }
}

.bg-curve {
  border-radius: 100% 0% 37% 63% / 51% 53% 47% 49%;
}

@media (min-width: 400px) {
  .bg-curve {
    width: 800px;
  }
}

.curve {
  border-radius: 0 0 100% 0;
  transform: rotate(-20deg);
}

@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
}
.avatar {
  /* border-radius: 50%; */
  height: auto;
  animation: float 3s ease-in-out infinite;
}

.btn-grad {
  background-image: linear-gradient(
    to right,
    #43cea2 0%,
    #185a9d 51%,
    #43cea2 100%
  );
  margin: 10px;
  padding: 15px 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 25px;
  display: block;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
</style>

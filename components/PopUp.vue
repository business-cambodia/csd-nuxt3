<template>
  <div
    id="popup"
    class="w-screen h-full fixed top-0 backdrop-blur-sm z-[99] popup flex flex-col items-center justify-center"
  >
    <div
      class="w-max h-[360px] sm:h-96 md:h-[440px] md:w-max mx-4 md:mx-8 rounded-lg relative animate"
    >
      <div
        class="absolute -right-0 -top-2 z-[100] cursor-pointer"
        @click="handleClosePopup"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 512 512"
        >
          <path
            fill="white"
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
          />
        </svg>
      </div>
      <a target="_blank">
        <img
          format="webp"
          loading="lazy"
          src="/Teaser-kh.jpg"
          alt=""
          class="h-full rounded-xl object-cover bg-center bg-no-repeat bg-cover"
      /></a>
    </div>
    <div
      class="beat-button flex justify-end bg-transparent py-1 px-4 rounded-b-lg"
    >
      <button
        class="bg-secondary rounded-md text-white px-4 py-1 text-lg"
        @click="handleInterested"
      >
        I'm Interested
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

const timer = ref(5);

const handleClosePopup = () => {
  const popup = document.getElementById('popup');
  if (popup) {
    popup.remove();
  }
};

const handleInterested = () => {
  document.getElementById('btn-interested')?.click();
  handleClosePopup();
};
</script>

<style>
.popup {
  background: rgba(0, 0, 0, 0.7);
}

.animate {
  animation: rubberband 800ms alternate ease-out;
}

@keyframes rubberband {
  0% {
    transform: scaleX(1);
  }
  40% {
    transform: scaleX(1.12) scaleY(0.75);
  }
  55% {
    transform: scaleX(0.85) scaleY(1);
  }
  65% {
    transform: scaleX(1.09) scaleY(0.85);
  }
  75% {
    transform: scaleX(0.9) scaleY(1);
  }
  90% {
    transform: scaleX(1.05) scaleY(0.95);
  }
  100% {
    transform: scaleX(1) scaleY(1);
  }
}

.beat-button {
  animation: heartBeat 1s infinite;
}

@keyframes heartBeat {
  from {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>

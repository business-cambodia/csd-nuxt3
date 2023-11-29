<template>
  <div class="relative select-none" :class="scrollPosition > 0 && 'hidden'">
    <div
      :class="`fixed flex justify-between px-4 xl:px-16 w-full items-center top-0 py-2 z-50 text-black navbar ${
        scrollPosition > 0 && drawer == false
          ? 'bg-white  border-b border-b-gray-300'
          : ''
      }`"
      id="navbar"
    >
      <div class="flex items-center space-x-4">
        <IconsMenu
          class="lg:hidden"
          @click="toggleDrawer"
          v-if="drawer == false"
          :drawer="drawer"
          :scrollPosition="1"
        />
        <IconsX @click="toggleDrawer" v-else />
        <NuxtLink to="/">
          <img src="/SUMMER-BAY-Logo-01.png" class="w-32 sm:w-40" alt="logo" />
        </NuxtLink>
      </div>

      <div class="hidden lg:flex space-x-6 text-lg font-poppins">
        <NuxtLink
          class="nav-item"
          v-for="(item, index) in navbarItems"
          :key="index"
          :to="item.link"
        >
          {{ item.name }}
        </NuxtLink>
      </div>

      <div class="flex items-center space-x-4 font-poppins">
        <button
          id="dropdownDefaultButton1"
          data-dropdown-toggle="dropdown1"
          data-dropdown-offset-distance="13"
          data-dropdown-offset-skidding="40"
          class="flex items-center justify-between text-center border border-l-0 h-7 md:h-9 w-[70px] md:w-[90px] rounded-3xl text-gray-800 border-gray-500"
          type="button"
        >
          <div class="ml-[0.2px]">
            <img
              class="h-7 md:h-9"
              :src="
                languageItems[
                  languageItems.findIndex((x) => x.code == language)
                ].flag
              "
            />
          </div>
          <div class="flex items-center space-x-1 mr-2.5 text-xs md:text-base">
            <p>
              {{
                (language === 'KH' && 'KH') ||
                (language === 'CN' && 'CN') ||
                'EN'
              }}
            </p>
            <svg
              class="w-2 h-2 md:w-2.5 md:h-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </div>
        </button>

        <!-- Dropdown menu -->
        <div
          id="dropdown1"
          class="z-10 hidden bg-white rounded-lg shadow w-36 md:w-48 relative border border-gray-500"
        >
          <svg
            class="absolute -top-[7px] left-6 md:left-6"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            <!-- Top two sides of the triangle with black border -->
            <line
              x1="0"
              y1="240"
              x2="160"
              y2="0"
              stroke="black"
              stroke-width="20"
            />
            <line
              x1="320"
              y1="240"
              x2="160"
              y2="0"
              stroke="black"
              stroke-width="20"
            />

            <!-- Bottom side of the triangle without a border -->
            <polygon points="0,240 320,240 160,0" fill="white" />
          </svg>

          <ul
            class="py-2 text-xs md:text-base text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li class="px-4 py-1">Select Language</li>
            <li
              v-for="lang in languageItems"
              class="px-1 md:px-2 py-0.5"
              @click="handleLanguageChange(lang.code)"
              :key="lang.code"
            >
              <div
                class="flex items-center space-x-3 hover:bg-gray-200 rounded-lg cursor-pointer px-2 py-1 md:py-1.5"
                :class="language == lang.code && 'bg-gray-100'"
              >
                <img :src="lang.flag" alt="" class="h-6 md:h-8" />
                <p>{{ lang.name }}</p>
                <svg
                  class="grow"
                  :class="language !== lang.code && 'hidden'"
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4.6L3.4 7L9.4 1"
                    stroke="#0E4C68"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>

        <IconsProfile :drawer="drawer" :scrollPosition="1" />
      </div>
    </div>

    <!-- drawer -->
    <LayoutsDrawer :drawer="drawer" :closeDrawer="toggleDrawer" />
  </div>
</template>

<script setup lang="ts">
import { initFlowbite } from 'flowbite';

const drawer = ref(false);
const close = ref(false);
const scrollPosition = ref(0);

const navbarItems = [
  {
    name: 'Events',
    link: '/',
  },
  {
    name: 'Promotions',
    link: '/promotions',
  },
  {
    name: 'Accommodations',
    link: '/accommodations',
  },
  {
    name: 'Bookings',
    link: '/bookings',
  },
  {
    name: 'Rewards',
    link: '/',
  },
  {
    name: 'About Us',
    link: '/about',
  },
];

const languageItems = [
  {
    name: 'English',
    code: 'EN',
    flag: '/united-kingdom.png',
  },
  {
    name: 'Khmer',
    code: 'KH',
    flag: '/khmer.png',
  },
  {
    name: 'Chinese',
    code: 'CN',
    flag: '/china.png',
  },
];

const toggleDrawer = () => {
  drawer.value = !drawer.value;
  close.value = !close.value;
  document.body.classList.toggle('open');
  document.body.classList.toggle('overflow-y-hidden');
  document.getElementsByClassName('drawer')[0].classList.toggle('open');
};

const handleScroll = () => {
  scrollPosition.value = window.scrollY;
};

onMounted(() => {
  initFlowbite();
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      drawer.value = false;
      close.value = false;
      document.body.classList.remove('open');
      document.body.classList.remove('overflow-y-hidden');
    }
  });
});
const language = useLanguague();
const handleLanguageChange = (code: string) => {
  document.getElementById('dropdown')?.classList.add('hidden');
  language.value = code;
  if (code == 'EN') {
    document.body.style.fontFamily = '';
  } else if (code == 'KH') {
    document.body.style.fontFamily = 'Kantumruy Pro';
  } else document.body.style.fontFamily = 'Poppins';
};
</script>

<style>
.navbar {
  transition: top 0.7s ease-in-out;
}
.nav-item {
  position: relative;
}
.nav-item:before {
  content: '';
  width: 0px;
  height: 3px;
  background: linear-gradient(239.85deg, #f0644e 24.35%, #f0ba2c 122.07%);
  position: absolute;
  top: 100%;
  left: 0;
  transition: 0.5s;
  mix-blend-mode: multiply;
}

.nav-item:hover:before {
  width: 100%;
  transform: translateX(-100);
}
</style>

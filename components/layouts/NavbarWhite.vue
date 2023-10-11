<template>
  <div class="relative select-none">
    <div
      :class="`fixed flex justify-between px-4 md:px-9 w-full items-center top-0 py-2 z-50 navbar ${
        scrollPosition > 0 && drawer == false
          ? 'bg-white text-black  border-b border-b-gray-300'
          : 'text-white'
      }`"
      id="navbar"
    >
      <div class="flex items-center space-x-4">
        <IconsMenu
          @click="toggleDrawer"
          v-if="drawer == false"
          :drawer="drawer"
          :scrollPosition="scrollPosition"
        />
        <IconsX @click="toggleDrawer" v-else />
        <NuxtLink to="/">
          <img src="/SUMMER-BAY-Logo-01.png" class="w-32 sm:w-40" alt="logo" />
        </NuxtLink>
      </div>
      <div class="flex items-center space-x-4">
        <div @click="handleLanguageChange" class="rounded-full border-2">
          <img
            v-if="language == 'EN'"
            class="w-7 sm:w-9"
            src="/khmer.png"
            alt="khflag"
          />
          <img
            v-else
            class="w-7 sm:w-9"
            src="/united-kingdom.png"
            alt="UKflag"
          />
        </div>
        <IconsProfile :drawer="drawer" :scrollPosition="scrollPosition" />
      </div>
    </div>

    <!-- drawer -->
    <LayoutsDrawer :drawer="drawer" :closeDrawer="toggleDrawer" />
  </div>
</template>

<script setup lang="ts">

const drawer = ref(false);
const close = ref(false);
const scrollPosition = ref(0);


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
const handleLanguageChange = () => {
  language.value = language.value == 'EN' ? 'KH' : 'EN';
};
</script>

<style>
.navbar {
  transition: top 0.7s ease-in-out;
}
/* .dropbtn {
  } */
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {
  background-color: #ddd;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
.nav-menu {
  background: rgba(0, 0, 0, 0.8);
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
}
.open .nav-menu {
  opacity: 1;
  visibility: visible;
}
.nav-menu > li {
  color: #f9f9f9;
  text-decoration: none;
}
.open .nav-menu > li {
  animation: appear 0.3s both;
}
.nav-item {
  position: relative;
}
.nav-item:before {
  content: '';
  width: 0px;
  height: 3px;
  background: red;
  position: absolute;
  top: 120%;
  left: 0;
  transition: 0.5s;
  mix-blend-mode: multiply;
}
.nav-item:after {
  content: '';
  width: 0px;
  height: 3px;
  background: gray;
  position: absolute;
  top: 120%;
  right: 0;
  transition: 0.5s;
  mix-blend-mode: multiply;
}
.nav-item:hover:after {
  width: 50%;
  transform: translateX(100);
}
.nav-item:hover:before {
  width: 50%;
  transform: translateX(-100);
}
@keyframes appear {
  0% {
    opacity: 0;
    translate: 0 50px;
  }
  100% {
    opacity: 1;
  }
}
</style>

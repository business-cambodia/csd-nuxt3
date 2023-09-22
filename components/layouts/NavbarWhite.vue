<template>
  <div class="relative">
    <div
      :class="`fixed flex justify-center w-full items-center top-0 py-2 z-40 navbar ${
        drawer == false
          ? 'bg-white text-black  border-b border-b-gray-300'
          : 'text-white'
      }`"
      id="navbar"
    >
      <a href="/">
        <img src="/SUMMER BAY-Logo-01.png" class="w-32" alt="logo" />
      </a>
    </div>

    <!-- drawer -->
    <!-- <LayoutsDrawer :drawer="drawer" :closeDrawer="toggleDrawer" /> -->
  </div>
</template>

<script setup lang="ts">
// import { useStore } from '~~/stores';

const drawer = ref(false);
const close = ref(false);

// const store = useStore();
// await store.fetchCategories();

const toggleDrawer = () => {
  drawer.value = !drawer.value;
  close.value = !close.value;
  document.body.classList.toggle('open');
  document.body.classList.toggle('overflow-y-hidden');
};

onMounted(() => {
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      drawer.value = false;
      close.value = false;
      document.body.classList.remove('open');
      document.body.classList.remove('overflow-y-hidden');
    }
  });
});
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

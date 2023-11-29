<template>
  <div
    class="hero bg-no-repeat bg-cover flex flex-col sm:space-y-6 space-y-2 items-center justify-top lg:px-32 px-10"
  >
    <div
      class="text-5xl sm:text-6xl lg:text-7xl mt-28 text-white font-lobster text-center leading-tight"
    >
      <div class="">Vacation Is Calling!</div>
    </div>
    <div class="mb-2 text-white text-center text-sm sm:text-2xl">
      {{
        (language === 'KH' &&
          'ផ្តល់បទពិសោធន៏ថ្មីសម្រាប់ខ្លួនរបស់លោកអ្នកជាមួយ ភាពស្ងប់ស្ងាត់ជាមួយរីសតជាប់ឆ្នេរសមុទ្រដ៏ស្រស់ស្អាតរបស់យើង ព្រមទាំងសាកល្បងជាមួយសកម្មភាពថ្មីដ៏អស្ចារ្យ') ||
        (language === 'CN' && '') ||
        'Come Indulge at Summer Bay Beach Club (Bay of Lights), Sihanoukville. Where senses come alive!'
      }}
    </div>
    <NuxtLink
      to="/bookings"
      class="bg-transparent border border-white text-white sm:text-2xl py-2.5 text-base font-bold px-6 duration-500 hover:bg-white hover:text-secondary"
    >
      {{
        (language === 'KH' && 'កក់ឥឡូវ​នេះ') ||
        (language === 'CN' && '') ||
        'Book Now'
      }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const language = useLanguague();
</script>

<style scoped>
.hero {
  height: 75vh;
  background-position: right 15% bottom 0%;
  background-image: linear-gradient(
      to bottom,
      rgba(118, 183, 159, 0),
      rgba(75, 144, 190, 0)
    ),
    url('/homebg.jpg');
}
@media (min-width: 640px) {
  .hero {
    height: 100vh;
    background-position: bottom;
    background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.1)
      ),
      url('/homebg.jpg');
  }
}
</style>

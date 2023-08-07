/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './node_modules/flowbite/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        proxima: ['Proxima Nova'],
        katibeh: ['Katibeh']
      },
    },
    colors: {
      primary: '#0E4C68',
      secondary: '#098BBA',
      grey: '#f0f0f0',
      gold: '#CBA10E',
    },
  },
  plugins: [require('flowbite/plugin')],
};

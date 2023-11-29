import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

// Register the package
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VCalendar);
});

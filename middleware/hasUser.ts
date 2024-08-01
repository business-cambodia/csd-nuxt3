export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    if (localStorage.getItem('user')) {
      return navigateTo('/');
    }
  }
});

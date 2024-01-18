export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    if (!localStorage.getItem('user')) {
      return navigateTo('/auth');
    }
  }
  // const user = useUser();
  // if (!user.value) {
  //   return navigateTo('/auth');
  // }
});

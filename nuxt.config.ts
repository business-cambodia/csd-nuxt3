// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Bay Of Lights & Summer Bay Beach Club Sihanoukville Cambodia',
      meta: [
        {
          charset: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Bay Of Lights Clean beach peaceful environment and the best sunset spot for photos & Cabins with a garden Summer Bay Beach Club Sihanoukville Cambodia',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.cdnfonts.com/css/proxima-nova-condensed',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Katibeh&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lobster&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Kantumruy+Pro&display=swap',
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-T2P8KCDE7J',
          async: true,
        },
        {
          src: 'https://checkout.payway.com.kh/plugins/checkout2-0.js',
        },
        {
          hid: 'gtmHead',
          innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T2P8KCDE7J');
          `,
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

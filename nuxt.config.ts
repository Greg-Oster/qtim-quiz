// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    // '~/assets/styles/easy-responsive-shortcodes.css',
    // '~/assets/styles/font-awesome.min.css',
    // '~/assets/styles/woocommerce-layout.css',
    // '~/assets/styles/woocommerce-smallscreen.css',
    // '~/assets/styles/woocommerce.css',
    '~/assets/styles/style.css',
  ],
  app: {
    head: {
      title: 'Blog quiz',
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})

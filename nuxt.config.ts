// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  alias: {
    assets: "/<rootDir>/assets"
  },
  css : [
    "~/assets/css/main.scss",
  ], 
  ui: {
    global: true,
    icons: ['mdi'],
  },
  app: {
    head: {
      title: 'Ideacube',
    }
  },
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/device',
    '@nuxtjs/storybook',
    'nuxt-typed-router',
    '@nuxt/ui'
  ],
  storybook: {
    url: 'http://localhost:6006',
    storybookRoute: '/__storybook__',
    port: 6006,
  },
  ssr: false,
  server: {
    host: '0',
    port: '3000' // optional
  }
})

/** Might be used in the future
 *  https://nuxt.com/modules/security - For file transfer and other things
 *  https://nuxt.com/modules/swiper - Swiping library
 *  
 */

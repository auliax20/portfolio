// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  app: {
    pageTransition: { name: 'page', mode: 'in-out'}
  }
})

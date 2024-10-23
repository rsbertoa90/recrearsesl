// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ["@/assets/scss/global.css"],
  modules:[
    'vuetify-nuxt-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/device'
  ],
  googleFonts: {
    families:{
      'Be Vietnam':true
    }
  },
  app: {
    head: {
        link: [{ rel: 'icon', type: 'image/png', href: '/mano.png' }]
    }
},
})
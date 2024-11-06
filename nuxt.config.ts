// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {

    },
    redisHost: process.env.REDIS_HOST,
    redisPort: process.env.REDIS_PORT,
    redisPassword: process.env.REDIS_PASSWORD
  },
  css: [
    '~/assets/style/main.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/global.scss" as *;'
        }
      }
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})

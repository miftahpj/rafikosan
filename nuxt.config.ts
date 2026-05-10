import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2026-05-10',

  modules: ['@nuxtjs/supabase'],

  supabase: {
    url: 'https://bjdcnhrohjafgbmuzwua.supabase.co',
    key: 'sb_publishable_rAX3MM9RtytEkyE9Rn78GQ_uhT2wt9w',
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/', '/members'],
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'NOVA',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;900&family=JetBrains+Mono:wght@300;400;500&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/aos@2.3.4/dist/aos.css',
        },
      ],
      script: [
        { src: 'https://unpkg.com/aos@2.3.4/dist/aos.js', defer: true },
      ],
    },
  },
})
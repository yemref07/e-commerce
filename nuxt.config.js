// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  image: {
    provider: "ipx",
  },

  components: {
    global: true,
    dirs: [
      "~/components",
      "~/components/UI",
      "~/components/sliders",
      "~/components/products",
      "~/components/layouts",
       'composables',
    ],
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  iconifyApiOptions: {
    publicApiFallback: true,
  },

  googleFonts: {
    display: 'swap'
  },

  css: ["~/assets/css/main.css"],
  modules: [
    "@pinia/nuxt",
    '@pinia-plugin-persistedstate/nuxt',
    "nuxt-icon",
    "@stefanobartoletti/nuxt-social-share",
    "@nuxt/image",
    '@vueuse/nuxt',
    '@vee-validate/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        Poppins: {
          wght: [100,200,300,400,500,600],
          ital: [300,400]
        },
        Lato : {
          wght: [100,200,300,400,500,600],
          ital: [300,400]
        },

      }
  }],


  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    // Options
    format: ['webp','jpg','avif','jpeg','png'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage'
  },
});

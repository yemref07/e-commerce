// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
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

  plugins: ['~/plugins/runOnAppMount.js'],

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
          wght: [100, 200, 300, 400, 500, 600],
          ital: [300, 400]
        },
        Lato: {
          wght: [100, 200, 300, 400, 500, 600],
          ital: [300, 400]
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
    domains: ['https://cdn.dummyjson.com'],
    format: ['webp', 'jpg', 'avif', 'jpeg', 'png'],
    providers: {
      myProvider: {
        name: 'dummy', // optional value to overrider provider name
        provider: '~/providers/my-provider.ts', // Path to custom provider
        options: {
          baseURL: "https://cdn.dummyjson.com"
        }
      }
    },
    provider: 'netlify',
  },

  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
    },
    storage: 'localStorage'
  },

  ssr:true

  
});

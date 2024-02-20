// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  html: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true,
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500&display=swap",
        },
      ],
    },
  },

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

  css: ["~/assets/css/main.css"],
  modules: ["@pinia/nuxt", "nuxt-icon"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

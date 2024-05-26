export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'static',
  loading: {
    color: "#01d28e",
    height: "11px",
  },
  server: {
    port: 9091, // sesuaikan dengan port yang Anda inginkan
    host: "0.0.0.0", // izinkan koneksi dari luar container
  },

  env: {
    NUXT_ENV_PUSHER_KEY: process.env.NUXT_ENV_PUSHER_KEY,
    NUXT_ENV_PUSHER_CLUSTER: process.env.NUXT_ENV_PUSHER_CLUSTER,
    NUXT_ENV_PUSHER_CHANNEL: process.env.NUXT_ENV_PUSHER_CHANNEL,
  },

  generate: {
    dir: "dist",
    cache: {
      ignore: ["renovate.json"],
    },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "SIROJUL MUHTADIN",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
        "Ponpes Sirojul Muhtadin Kp. Citaliktik Desa Pananjung Kec. Cangkuang, Banjaran, Jawa Barat, Indonesia",
      },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "keyword",
        content: "Ponpes Sirojul Muhtadin",
      },
      {
        name: "description",
        content:
        "Ponpes Sirojul Muhtadin Kp. Citaliktik Desa Pananjung Kec. Cangkuang, Banjaran, Jawa Barat, Indonesia",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://sirmuh-pos-testing.vercel.app/",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "SIROJUL MUHTADIN",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "SIROJUL MUHTADIN",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
        "Ponpes Sirojul Muhtadin Kp. Citaliktik Desa Pananjung Kec. Cangkuang, Banjaran, Jawa Barat, Indonesia",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:image:type",
        property: "og:image:type",
        content: "image/png",
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
        "https://gitlab.com/sirojul-muhtadin-project/sirmuh-pos-ui-frontend/-/raw/main/assets/img/logo.png?ref_type=heads",
      },
      {
        hid: "og:image:width",
        property: "og:image:width",
        content: "600",
      },
      {
        hid: "og:image:height",
        property: "og:image:height",
        content: "600",
      },
      ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/flowbite.min.css",
      },
      ],
    script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/datepicker.min.js",
      body: true,
      ssr: false,
    }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/main.css",
    "@/assets/css/global.css",
    "@/assets/css/tailwind.css",
    "@/assets/css/tabs-components.css",
    ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/clipboard.js' },
    { src: "~/plugins/myMixin"},
    { src: "~/plugins/api" },
    { src: "~/plugins/vue-sweetalert2" },
    { src: "~/plugins/role" },
    { src: "~/plugins/laravel-echo" },
    { src: "~/plugins/v-select2-component" },
    { src: "~/plugins/size" },
    { src: "~/plugins/currency",ssr: false },
    { src: "~/plugins/convert-weight" },
    { src: "~/plugins/pagination" },
    { src: "~/plugins/vClickOutside" },
    { src: "~/plugins/lodash" },
    { src: "~/plugins/truncate-html" },
    { src: "~/plugins/he" },
    { src: "~/plugins/autoLogoutMixin.js" },
    { src: "~/plugins/tel-input" },
    { src: "~/plugins/vue-tiny-mce" },
    { src: "~/plugins/timestamp" },
    { src: "~/plugins/decode" },
    { src: "~/plugins/encode" },
    { src: "~/plugins/vue-wysiwyg" },
    { src: "~/plugins/vue2-datepicker" },
    { src: "~/plugins/vue-multiselect" },
    { src: "~/plugins/capitalize" },
    { src: "~/plugins/roundup" },
    { src: "~/plugins/numeral" },
    { src: "~/plugins/tabs" },
    ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/postcss8",
    "@nuxtjs/dotenv",
    "@nuxtjs/moment",
    "@nuxtjs/style-resources",
    // "@nuxtjs/fontawesome",
    ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/tailwindcss",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/toast",
    ],

  toast: {
    position: "bottom-center",
    iconPack: "fontawesome",
    theme: "bubble",
  },

  //   fontawesome: {
  //     component: 'Fa',
  //     suffix: false,
  //     icons: {
  //       solid: true,
  //       brands: true,
  //     },
  // },

  device: {
    refreshOnResize: true,
  },
  
  styleResources: {
    scss: [
      "~/assets/scss/_app.scss",
      // "~/assets/scss/_custome-multiselect.scss",
      "~/assets/scss/_costume.scss",
      ],
  },
  moment: {
    timezone: true,
    defaultTimezone: "Asias/Jakarta",
    locales: ["id"],
  },
  axios: {
    baseURL: process.env.NUXT_ENV_API_URL
  },
  workbox: {
    // workboxOptions: {
    //   skipWaiting: true,
    // },
    cachingExtensions: "@/plugins/workbox-cache.js",
    cacheOptions: {
      cacheId: "sirmuh-cache",
      clientsClaim: true,
    },
    offline: true,
    // offlineStrategy: 'NetworkFirst',
    // offlinePage: null,
    // offlineAssets: [],
    runtimeCaching: [
    {
      urlPattern: "/assets/css/.*",
      handler: "cacheFirst",
      method: "GET",
      strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
    },
    {
      urlPattern: "/assets/fonts/.*",
      handler: "cacheFirst",
      method: "GET",
      strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
    },
    {
      urlPattern: "/assets/img/.*",
      method: "GET",
      strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
    },
    {
      urlPattern: "/assets/js/.*",
      method: "GET",
      strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
    },
    {
      urlPattern: "/assets/scss/.*",
      method: "GET",
      strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
    },
    {
      urlPattern: "/assets/vendor/.*",
      method: "GET",
      strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
    },
    ],
  },


  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: "SIRMUH::APP",
      author: "SIROJUL MUHTADIN",
      icon: true,
      canonical: "https://sirmuh-pos-testing.vercel.app/",
      description: "",
      keywords: "SIRMUH - SIROJUL MUHTADIN",
      ogUrl: "https://sirmuh-pos-testing.vercel.app/",
      ogType: "website",
      ogSiteName: "SIRMUH::APP",
      ogTitle: "SIRMUH::APP",
      ogImage: "/icon.png",
      ogImageWidth: "600",
      ogImageHeight: "400",
    },
    manifest: {
      lang: "en",
      name: "SIRMUH::APP",
      short_name: "SIRMUH::APP",
      description: "",
      start_url: "/",
      lang: "en",
      display: "standalone",
      theme_color: "#000",
      background_color: "#000",
      icons: [
      {
        src: "/icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/icon-128x128.png",
        sizes: "128x128",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "maskable any",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable any",
      },
      ],
    },
  },
  robots: {
    UserAgent: "*",
    Disallow: "/",
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
  },
};

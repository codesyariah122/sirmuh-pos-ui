export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  loading: {
    color: "#01d28e",
    height: "11px",
  },
  server: {
    port: 9091, // sesuaikan dengan port yang Anda inginkan
    host: "0.0.0.0", // izinkan koneksi dari luar container
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
    { src: "~/plugins/myMixin",ssr: false},
    { src: "~/plugins/api", ssr: false},
    { src: "~/plugins/vue-sweetalert2", ssr: false},
    { src: "~/plugins/role" },
    { src: "~/plugins/laravel-echo" },
    { src: "~/plugins/v-select2-component" },
    { src: "~/plugins/size" },
    { src: "~/plugins/currency" },
    { src: "~/plugins/convert-weight" },
    { src: "~/plugins/pagination" },
    { src: "~/plugins/vClickOutside", ssr: false },
    { src: "~/plugins/lodash", ssr: false },
    { src: "~/plugins/truncate-html", ssr: false },
    { src: "~/plugins/he", ssr: false },
    { src: "~/plugins/autoLogoutMixin.js", ssr: false },
    { src: "~/plugins/tel-input", ssr: false },
    { src: "~/plugins/vue-tiny-mce", ssr: false },
    { src: "~/plugins/timestamp" },
    { src: "~/plugins/decode", ssr: false },
    { src: "~/plugins/encode", ssr: false },
    { src: "~/plugins/vue-wysiwyg" },
    { src: "~/plugins/vue2-datepicker", ssr: false },
    { src: "~/plugins/vue-multiselect", ssr: false },
    { src: "~/plugins/capitalize", ssr: false },
    { src: "~/plugins/roundup", ssr: false },
    { src: "~/plugins/numeral", ssr: false },
    { src: "~/plugins/tabs", ssr: false },
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
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.NUXT_ENV_API_URL,
    credential: true
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
    },
  },
};

export default {
  // Source files on src folder
  srcDir: 'src/',
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/nssw/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: { lang: 'fr' },
    title: 'NSSW / e-learning platform',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=no',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'NSSW / e-learning platform',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Styled resources
  styleResources: {
    scss: ['~~/node_modules/sass-rem/_rem.scss', '~/assets/scss/*.scss'],
    hoistUseStatements: true, // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // Pinia
    '@nuxtjs/composition-api/module',
    '@pinia/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'NSSW / e-learning platform',
      author: 'Valtech France',
    },
    manifest: {
      lang: 'en',
      name: 'NSSW / e-learning platform',
      short_name: 'NSSW',
      description: 'NSSW / e-learning platform demo',
      theme_color: '#14172B',
      background_color: '#14172B',
      display: 'fullscreen',
      Scope: '/',
      orientation: 'portrait',
    },
    icons: {
      fileName: 'icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512],
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'The Culture',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The Culture is a weekly conversation show focusing on film, music, TV, streaming, books and art.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'The Culture' },
      { property: 'og:description', content: 'The Culture is a weekly conversation show focusing on film, music, TV, streaming, books and art.' },
      { property: 'og:image', content: '/the-culture.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'The Culture' },
      { name: 'twitter:image', content: '/the-culture.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ],
    script: [
      {
        hid: 'google-tag-manager',
        vmid: 'google-tag-manager',
        innerHTML: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MQGJ8VB');
        `
      }
    ],
    noscript: [
      {
        hid: 'noscript-google-tag-manager',
        vmid: 'noscript-google-tag-manager',
        innerHTML: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MQGJ8VB"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `,
        body: true
      },
    ],
    __dangerouslyDisableSanitizers: ['innerHTML'],
    __dangerouslyDisableSanitizersByTagID: {
      'google-tag-manager': ['innerHTML'],
      'noscript-google-tag-manager': ['innerHTML']
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      // 'assets/scss/file/_path.scss',
      './styles/main.scss'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

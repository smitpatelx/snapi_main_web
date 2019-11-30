require('dotenv').config();
module.exports = {
  server: {
    port: process.env.APP_PORT, // default: 3000
    host: '127.0.0.1', // default: localhost,
    timing: false
  },
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.APP_NAME || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        href: '/favicon.ico'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        href: '/favicon.ico'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/style/style.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Or if you have custom options...
    ['vue-scrollto/nuxt', {
      duration: 700
    }],
    'nuxt-purgecss',
    '@nuxtjs/sitemap',
  ],
  purgeCSS: {
    //https://regenrek.com/posts/how-to-use-tailwind-css-1.0.1-in-nuxt/#bonus-use-purgecss-to-remove-unused-css-in-the-production-build

  },
  sitemap: {
    // custom configuration
    hostname: 'https://snapi.netdevv.com',
    gzip: true,
    sitemaps: [
      {
        path: '/sitemap.xml',
        routes: ['/**',],
        gzip: true
      },
    ],
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    loaders: {
      scss: {
        import: ['~assets/style/style.scss']
      }
    },
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /*
   * Nuxt Generate For /dist
   */
  generate: {}
}

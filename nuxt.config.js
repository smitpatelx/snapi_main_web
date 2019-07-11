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
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/ico1-xs.png'
    }]
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
  modules: [],
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

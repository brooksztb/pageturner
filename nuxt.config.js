module.exports = {
  publicRuntimeConfig: {
    axios: {
      baseURL:
        process.env.NODE_ENV === 'production'
          ? process.env.BASE_URL || 'http://localhost:8888/'
          : 'http://localhost:8888/'
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Pageturner: Track your Reading Habits',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  target: 'static',
  modules: ['@nuxtjs/axios'],
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/pwa'],

  //module configs
  pwa: {}
}

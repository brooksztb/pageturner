module.exports = {
  publicRuntimeConfig: {
    axios: {
      baseURL:
        process.env.NODE_ENV === 'production'
          ? process.env.BASE_URL || 'http://localhost:8888/'
          : 'http://localhost:8888/'
    }
  },
  server: {
    // host: 0, //set to active to test pwa/mobile
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Pageturner - Track Reading Habits',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Pageturner is a web app to help you track your reading habits and give your rough estimates to how long it will take to finish books.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#f59a00' },
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
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/pwa', '@nuxtjs/fontawesome'],

  //module configs
  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faBook', 'faBookOpen']
    }
  },
  pwa: {
    manifest: {
      name: 'Pageturner - Track Reading Habits'
    },
    meta: {
      appleStatusBarStyle: 'black-translucent'
    }
  }
}

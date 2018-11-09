module.exports = {
  /*
  ** Set source directory
  */
  srcDir: 'src/',
  /*
  ** Headers of the page
  */
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },
  head: {
    title: 'Welcome to Nuxt!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    babel: {
      presets: ["@vue/app"]
    }
  },
  /*
  ** Nuxt Typescript module
  */
  modules: ["nuxt-typescript"],
  typescript: {
    formatter: "default",
    parallel: true,
    tsconfig: "./tsconfig.json",
    tslint: "./tslint.json",
  },
};
import path from 'path';
import PurgecssPlugin from 'purgecss-webpack-plugin';
import glob from 'glob-all';

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:/]+/g) || []
  }
}

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
      presets: ['@vue/app']
    },
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: './tailwind.js',
      },
      preset: { autoprefixer: { grid: true } },
    },
    extend(config, { isDev }) {
      if (!isDev) {
        config.plugins.push(
          new PurgecssPlugin({
            // purgecss configuration
            // https://github.com/FullHuman/purgecss
            paths: glob.sync([
              path.join(__dirname, './pages/**/*.vue'),
              path.join(__dirname, './layouts/**/*.vue'),
              path.join(__dirname, './components/**/*.vue')
            ]),
            extractors: [
              {
                extractor: TailwindExtractor,
                extensions: ['vue']
              }
            ],
            whitelist: ['html', 'body', 'nuxt-progress']
          })
        )
      }
    }
  },
  css: ['@/assets/css/main.css'],
  /*
  ** Nuxt Typescript module
  */
  modules: ['nuxt-typescript'],
  typescript: {
    formatter: "default",
    parallel: true,
    tsconfig: "./tsconfig.json",
    tslint: "./tslint.json",
  },
};
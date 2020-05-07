require("dotenv").config() //一番上に
const client = require("./plugins/contentful")

import colors from 'vuetify/es5/util/colors'


export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + 'のーどインク',
    title: 'のーどインク',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:image', property: 'og:image', content: 'https://lh3.googleusercontent.com/u_t50jA6V7Rt0XVcVbbDvU5qSB2mrzOgpdjpBsOwAzBmSdaM4CBmAkKgu2C7Ffji-bYXyi_QEmm6Z4Sdv7jZPlHmVOCilLw_sNNT7wDdol6_pXXdWjWuvJMeUEgALG8F8haGln5ytg=w2400' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ],
    script: [
      { src: "https://platform.twitter.com/widgets.js", type: 'text/javascript' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/contentful',
    '~/plugins/markdownit',
    '~/plugins/firebase'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-analytics', {
      id: 'UA-157474508-1'
    }],
    [
      "@nuxtjs/google-adsense",
      {
        id: "ca-pub-6334332538554348",  // Google AdSense クライアントID（必須）
        //analyticsUacct: "UA-157474508-1",  // analyticsアカウントID（オプション）
        //analyticsDomainName: "knote.life"  // analyticsアカウントドメイン（オプション）
      }
    ],
    '@nuxtjs/pwa'
  ],
  manifest: {
    name: 'contentful-blog',
    lang: 'ja'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
     ** You can extend webpack config here
     */
    // NOTE: これがないとnuxtとfirebaseが共存できない（core-js2とcore-js3の共存）
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      }
    },

  },
  /*markdownit: {
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true,
  },*/
  generate: {
    routes() {
      const post = client
        .getEntries({ content_type: 'post' })
        .then(entries => {
          return entries.items.map(entry => {
            return {
              route: "/posts/" + entry.fields.slug + "/",
              payload: entry
            }
          })
        })
      return post
    }/*,
    routes() {
      const event = client
        .getEntries({ content_type: 'event' })
        .then(entries => {
          return entries.items.map(entry => {
            return {
              route: "/events/" + entry.fields.slug + "/",
              payload: entry
            }
          })
        })
      return event
    }*/
  },
  sitemap: {
    hostname: 'https://node-color-ink.studio',
    routes() {
      return client
        .getEntries({ content_type: 'post' })
        .then(entries => {
          return entries.items.map(entry => {
            return "/posts/" + entry.fields.slug + "/"
          })
        })
    }
  },
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN,
  }
}

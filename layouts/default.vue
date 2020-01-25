<template>
  <v-app>
  <div style="background-color: #E0F7FA">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
    >
      <v-list>
        <v-list-item
        @click="drawer= !drawer">
          <v-list-item-action>
            <v-icon>mdi-arrow-left</v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

<template>
  <v-flex xs12>
  <v-card 
  class="mx-auto" 
  max-width="1200px"
  tile
  >
    <v-img
      class="white--text align-end"
      height="160px"
      :src="topImg"
    >
      <v-btn class="ma-2 mb-7"
      text
      icon
      color="white"
      @click="drawer= !drawer"><v-icon>mdi-menu</v-icon></v-btn>
      <v-card-title style="font-size: 20pt" class="mb-1">COLOR PALETTE</v-card-title>
      <v-card-subtitle style="color: white; font-size: 14pt; margin-left: 10px">ー 私の色づくり ー</v-card-subtitle>
    </v-img>


     <!--<v-card-text class="text--primary">
       サブタイトル的な説明を入れるときに使用
    </v-card-text>-->

    <v-card-actions>
      <v-layout row wrap justify-space-around>
      <v-btn
        color="orange"
        text
        to="/"
      >
        home
      </v-btn>

      <v-btn
        color="orange"
        text
        to="/profile"
      >
        Profile
      </v-btn>

      <v-btn
        color="orange"
        text
        to="contact"
      >
        Contact
      </v-btn>
      </v-layout>
    </v-card-actions>
  </v-card>
  </v-flex>
      <v-content>
      <v-container style="max-width: 1200px">
        <v-layout row wrap>
        <v-flex xs12 sm8>
          <nuxt class="mt-5" />
        </v-flex>
        <v-flex xs12 sm4>
            <!--<article>
              <v-card class="mt-5" style="margin: 0 10px 0 10px" color="primary">profile</v-card>
            </article>
            <article>
              <v-card class="mt-5" style="margin: 0 10px 0 10px" color="primary">category</v-card>
            </article>-->
        </v-flex>
        </v-layout>
      </v-container>
      </v-content>
</template>

    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer
    color="cyan lighten-2"
    padless
    max-width="1200px"
    class="mx-auto"
  >
    <v-row
      no-gutters
    >
      <v-btn
        color="grey darken-2"
        text
        rounded
        class="my-2"
        style="margin-left: 20px"
        to="/profile"
      >
        プロフィール
      </v-btn>
      <v-btn
        color="grey darken-2"
        text
        rounded
        class="my-2"
        style="margin-left: 20px"
        to="/contact"

      >
        お問い合わせ
      </v-btn>
      <v-btn
        color="grey darken-2"
        text
        rounded
        class="my-2"
        style="margin-left: 20px"
        to="/privacy-policy"
      >
        プライバシーポリシー
      </v-btn>
      <v-col
        class="cyan lighten-4 py-1 text-center"
        cols="12"
      >
        <span style="color:#616161">2020 Proudly powered by <a href="https://twitter.com/node_mental">@node_mental</a></span><br><span style="margin-left: 20px; color:#616161">All Rights Reserved.</span>
      </v-col>
    </v-row>
  </v-footer>
  </div>
  </v-app>
</template>

<script>
import topImg from "@/static/top.jpg"
export default {
  data () {
    return {
      topImg,
      clipped: false,
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Top',
          to: '/'
        },
        {
          icon: 'mdi-file-outline',
          title: 'プロフィール',
          to: '/profile'
        },
        {
          icon: 'mdi-controller-classic',
          title: 'カテゴリー',
          to: '/category'
        },
        {
          icon: 'mdi-microphone-settings',
          title: '記事一覧',
          to: '/posts'
        },
        {
          icon: 'mdi-calendar-today',
          title: 'お問い合わせ',
          to: '/contact'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false
    }
  }
}
</script>

<style>

</style>
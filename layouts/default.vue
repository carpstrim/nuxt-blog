<template>
  <v-app>
    <div style="background-color: #E0F7FA">
      <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed>
        <v-list>
          <v-list-item @click="drawer= !drawer">
            <v-list-item-action>
              <v-icon>mdi-arrow-left</v-icon>
            </v-list-item-action>
          </v-list-item>
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
            <v-list-item-action>
              <v-icon color="orange">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <template>
        <v-flex xs12>
          <v-card class="mx-auto" max-width="1200px" tile>
            <v-img class="white--text align-end" height="160px" :src="topImg">
              <v-btn class="ma-2 mb-6" text icon color="white" @click="drawer= !drawer">
                <v-icon>mdi-menu</v-icon>
              </v-btn>
              <v-card-title
                style="font-size: 20pt; cursor: pointer"
                class="mb-2 ml-2"
                @click="$router.push('/')"
              >のーどインク</v-card-title>
              <v-card-subtitle style="color: white; font-size: 11pt; margin-left: 10px">
                ー 自分の"色"を作るブログ ー
                <!--ー 私の色づくり ー-->
              </v-card-subtitle>
            </v-img>

            <v-card-actions>
              <v-layout row wrap justify-space-around>
                <v-btn color="primary" text to="/#header">
                  <v-icon class="mr-2">mdi-home</v-icon>Home
                </v-btn>

                <v-btn color="primary" text to="/profile/">
                  <v-icon class="mr-2">mdi-account</v-icon>Profile
                </v-btn>

                <v-btn color="primary" text to="/contact/">
                  <v-icon class="mr-2">mdi-forum</v-icon>Contact
                </v-btn>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-content>
          <nuxt class="mt-5" />
        </v-content>
      </template>
      <div style="max-width:1200px" class="mx-auto">
        <v-btn
          text
          large
          color="grey darken-1"
          to="/#header"
          class="mb-2"
          style="margin-right: 15px"
        >＜ Homeに戻る</v-btn>
      </div>
      <v-footer color="cyan lighten-2" padless max-width="1200px" class="mx-auto">
        <v-row no-gutters>
          <v-btn
            color="grey darken-2"
            text
            rounded
            class="my-2"
            style="margin-left: 20px"
            to="/profile/"
          >プロフィール</v-btn>
          <v-btn
            color="grey darken-2"
            text
            rounded
            class="my-2"
            style="margin-left: 20px"
            to="/contact/"
          >お問い合わせ</v-btn>
          <v-btn
            color="grey darken-2"
            text
            rounded
            class="my-2"
            style="margin-left: 20px"
            to="/privacy-policy/"
          >プライバシーポリシー</v-btn>
          <v-col class="cyan lighten-4 py-1 text-center" cols="12">
            <span style="color:#616161">
              2020 Proudly powered by
              <a href="https://twitter.com/node_mental">@node_mental</a>
            </span>
            <br />
            <span style="margin-left: 20px; color:#616161">All Rights Reserved.</span>
          </v-col>
        </v-row>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      topImg:
        "https://lh3.googleusercontent.com/u_t50jA6V7Rt0XVcVbbDvU5qSB2mrzOgpdjpBsOwAzBmSdaM4CBmAkKgu2C7Ffji-bYXyi_QEmm6Z4Sdv7jZPlHmVOCilLw_sNNT7wDdol6_pXXdWjWuvJMeUEgALG8F8haGln5ytg=w2400",
      clipped: false,
      drawer: false,
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/"
        },
        {
          icon: "mdi-account",
          title: "プロフィール",
          to: "/profile/"
        },
        {
          icon: "mdi-tag-multiple",
          title: "カテゴリー",
          to: "/category/"
        },
        {
          icon: "mdi-forum",
          title: "お問い合わせ",
          to: "/contact/"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false
    };
  }
};
</script>

<style>
</style>
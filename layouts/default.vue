<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
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
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />



      <v-toolbar-title v-text="title" />
      <v-spacer />


    </v-app-bar>
    <v-content>
      <v-container>
        <v-layout row wrap>
        <v-flex xs12 sm8>
          <nuxt style="margin: 0 10px" />
        </v-flex>
        <v-flex xs12 sm4>
            <article>
              <v-card style="margin: 0 20px" color="primary">profile</v-card>
            </article>
            <article>
              <v-card class="mt-5" style="margin: 0 20px" color="primary">category</v-card>
            </article>
        </v-flex>
        </v-layout>
      </v-container>
    </v-content>
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
      :fixed="fixed"
      app
    >
      <span>2020 Proudly powered by <a href="https://twitter.com/node_mental">@node_mental</a></span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Top',
          to: '/'
        },
        {
          icon: 'mdi-file-outline',
          title: 'Profile',
          to: '/profile'
        },
        {
          icon: 'mdi-controller-classic',
          title: 'Category',
          to: '/category'
        },
        {
          icon: 'mdi-microphone-settings',
          title: 'Articles',
          to: '/posts'
        },
        {
          icon: 'mdi-calendar-today',
          title: 'Contact',
          to: '/contact'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'ブログサンプル',
      subTitle: "つれづれなる日記"
    }
  }
}
</script>

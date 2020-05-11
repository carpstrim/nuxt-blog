<template>
  <v-container style="max-width: 1150px">
    <v-layout row wrap>
      <v-flex xs12 sm8 class="mb-1">
        <div v-for="(post, index) in posts" :key="index">
          <post-outline-card :post="post" />
        </div>
        <v-layout v-if="length > 11" row wrap justify-end class="ma-7">
          <v-btn to="/page/2" color="secondary" large outlined>次ページ ＞</v-btn>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm4>
        <article>
          <profile style="margin: 0 25px" />
        </article>
        <article>
          <category-list class="mt-10 mb-10" style="margin: 0 25px" />
        </article>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
//import client from "~/plugins/contentful";
import CategoryList from "@/components/CategoryList";
import Profile from "@/components/Profile";
import PostOutlineCard from "@/components/PostOutlineCard";

export default {
  async asyncData({ params, app }) {
    /*const posts = await client
      .getEntries({
        content_type: "post",
        order: "-fields.createdAt",
        limit: 10 + 1
        //skip: maxEntry * (page - 1)
      })
      .then(entries => {
        return entries.items;
      });*/

    const { data } = await app.$axios.get(`/_nuxt/api/datas.json`);
    const posts = data.apiDatas;

    return { posts };
  },
  mounted() {
    //console.log({ post: this.posts });
  },
  created() {
    this.length = this.posts.length;
    //console.log(this.length);
    this.posts = this.posts.slice(0, 10);
  },
  head: {
    title: "ホーム",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "自分の色を作るブログ"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "TOP - のーどインク"
      },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://node-color-ink.studio/"
      },
      { hid: "og:title", property: "og:title", content: "のーどインク" },
      {
        hid: "og:description",
        property: "og:description",
        content: "自分の色を作るブログ"
      },
      //{ hid: 'og:image', property: 'og:image', content: topImg },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://lh3.googleusercontent.com/u_t50jA6V7Rt0XVcVbbDvU5qSB2mrzOgpdjpBsOwAzBmSdaM4CBmAkKgu2C7Ffji-bYXyi_QEmm6Z4Sdv7jZPlHmVOCilLw_sNNT7wDdol6_pXXdWjWuvJMeUEgALG8F8haGln5ytg=w2400"
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },
      { hid: "twitter:site", name: "twitter:site", content: "@node_mental" }
    ],
    link: [{ rel: "canonical", href: "https://node-color-ink.studio/" }]
  },
  components: {
    CategoryList,
    Profile,
    PostOutlineCard
  },
  data() {
    return {};
  },
  methods: {}
};
</script>


<template>
  <v-container style="max-width: 1200px">
    <v-layout row wrap>
      <v-flex xs12 sm8 class="mb-1">
        <div v-for="(post, index) in posts" :key="index">
          <post-outline-card :post="post" />
        </div>
        <v-layout v-if="posts.length === 10" row wrap justify-end class="ma-7">
          <v-btn to="/page/2" color="secondary" large outlined>次ページ ＞</v-btn>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm4>
        <article>
          <profile style="margin: 0 25px" />
        </article>
        <article>
          <category-list :categories="categories" class="mt-10 mb-10" style="margin: 0 25px" />
        </article>
        <adsbygoogle ad-slot="7918916412" ad-style="display: inline-block, margin: 0 25px" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import client from "~/plugins/contentful";
import CategoryList from "@/components/CategoryList";
import Profile from "@/components/Profile";
import PostOutlineCard from "@/components/PostOutlineCard";

export default {
  async asyncData({ params }) {
    const posts = await client
      .getEntries({
        content_type: "post",
        order: "-fields.createdAt",
        limit: 10
        //skip: maxEntry * (page - 1)
      })
      .then(entries => {
        return entries.items;
      });
    const categories = await client
      .getEntries({
        content_type: "category",
        order: "fields.index"
      })
      .then(entries => {
        return entries.items.map(e => {
          return e.fields;
        });
      });

    return { posts, categories };
  },
  mounted() {
    console.log({ post: this.posts });
    console.log({ categories: this.categories });
    console.log({ postNum: this.posts.length });
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
        content: "TOP - のーど Inc"
      },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: "https://color-in-k.com/" },
      { hid: "og:title", property: "og:title", content: "のーど Inc" },
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
      { hid: "twitter:card", name: "twitter:card", content: "summary" },
      { hid: "twitter:site", name: "twitter:site", content: "@node_mental" }
    ]
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

<style>
</style>
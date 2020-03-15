<template>
  <v-container style="max-width: 1200px">
    <v-layout row wrap>
      <v-flex xs12 sm8 class="mb-5">
        <div v-for="(post, index) in posts" :key="index">
          <post-outline-card :post="post" />
        </div>
        <v-layout row wrap justify-space-between class="ma-7">
          <v-btn
            v-if="length > 0"
            :to="'/page/' + (page*1 - 1)"
            color="secondary"
            large
            outlined
          >＜ 前ページ</v-btn>
          <v-btn
            v-if="length === 11"
            :to="'/page/' + (page*1 + 1)"
            color="secondary"
            large
            outlined
          >次ページ ＞</v-btn>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm4>
        <article>
          <profile style="margin: 0 25px" />
        </article>
        <article>
          <category-list class="mt-10 mb-10" style="margin: 0 25px" />
        </article>

        <!--<adsbygoogle ad-slot="7918916412" style="margin: 0 25px" />-->
      </v-flex>
    </v-layout>
    <!-- this.posts.lenghtをトリガーにして、次ページへのボタンを作成-->
  </v-container>
</template>

<script>
import client from "~/plugins/contentful";
import CategoryList from "@/components/CategoryList";
import Profile from "@/components/Profile";
import PostOutlineCard from "@/components/PostOutlineCard";

export default {
  async asyncData({ params, error, payload }) {
    const page = params.page;
    const posts = await client
      .getEntries({
        content_type: "post",
        order: "-fields.createdAt",
        limit: 10 + 1,
        skip: 10 * (page * 1 - 1)
      })
      .then(entries => {
        return entries.items;
      });

    return { posts, page };
  },
  mounted() {
    console.log({ post: this.posts });
    console.log({ pageNum: this.page * 1 });
    if (this.page * 1 === 1) {
      this.$router.push("/");
    }
  },
  created() {
    this.length = this.posts.length;
    console.log(this.length);
    this.posts = this.posts.slice(0, 10);
  },
  head: {
    title: "page",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "記事一覧"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "記事一覧 - のーど Inc"
      },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: "https://color-in-k.com/" },
      { hid: "og:title", property: "og:title", content: "のーど Inc" },
      {
        hid: "og:description",
        property: "og:description",
        content: "記事一覧"
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
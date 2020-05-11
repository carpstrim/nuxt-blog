<template>
  <v-container style="max-width: 1150px">
    <v-layout row wrap>
      <v-flex xs12 sm8>
        <div class="page-title">
          <h1>カテゴリー：{{selectedCategoryName}} の記事一覧 （{{params.page}}ページ目）</h1>
        </div>
        <div v-for="(post, index) in postsOnThisPage" :key="index">
          <post-outline-card :post="post" />
        </div>
        <v-layout row wrap justify-space-between class="ma-7">
          <v-btn
            v-if="length > 0"
            :to="'/category/' + params.category + '/page/' + (page*1 - 1)"
            color="secondary"
            large
            outlined
          >＜ 前ページ</v-btn>
          <v-btn
            v-if="length === 11"
            :to="'/category/' + params.category + '/page/' + (page*1 + 1)"
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
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
//_subcategory作る可能性を考慮したディレクトリ構造
import client from "~/plugins/contentful";
import CategoryList from "@/components/CategoryList";
import Profile from "@/components/Profile";
import PostOutlineCard from "@/components/PostOutlineCard";

export default {
  async asyncData({ params, app }) {
    const page = params.page;
    /*const posts = await client
      .getEntries({
        content_type: "post",
        "fields.category.sys.contentType.sys.id": "category",
        "fields.category.fields.slug": params.category,
        order: "-sys.createdAt",
        limit: 10 + 1,
        skip: 10 * (page * 1 - 1)
      })
      .then(entries => {
        return entries.items;
      });*/
    const { data } = await app.$axios.get(`/_nuxt/api/datas.json`);
    const posts = data.apiDatas.filter(
      e => e.category.fields.slug === params.category
    );

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

    const selectedCategoryName = await categories.filter(
      el => el.slug === params.category
    )[0].title;
    console.log({ selectedCategoryName });

    return { params, posts, page, categories, selectedCategoryName };
  },
  mounted() {
    console.log({ post: this.posts });
    console.log({ categories: this.categories });
    if (this.page * 1 === 1) {
      this.$router.push("/category/" + this.params.category);
    }
  },
  created() {
    this.postsOnThisPage = this.posts.splice(10 * (this.page * 1 - 1), 10);
    console.log(this.posts.length);
    this.length = this.posts.length - 10 * (this.page * 1 - 2);
    console.log(this.length);
  },
  head: {
    title: "カテゴリー毎の記事一覧"
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
.page-title h1 {
  color: #424242;
  font-size: 20pt;
  position: relative;
  margin: 10px 10px 30px 10px;
}

.page-title h1:after {
  position: absolute;
  content: " ";
  display: block;
  border-bottom: solid 3px #5472cd;
  bottom: -3px;
  width: 30%;
}
</style>
<template>
  <v-container style="max-width: 1200px">
    <v-layout row wrap>
      <v-flex xs12 sm8>
        <div class="page-title">
        <h1>カテゴリー：{{selectedCategoryName}} の記事一覧</h1>
        </div>
        <div v-for="(post, index) in posts" :key="index">
          <post-outline-card
          :post="post"
          />
        </div>
      </v-flex>
        <v-flex xs12 sm4>
            <article>
              <profile style="margin: 0 25px" />
            </article>
            <article>
              <category-list
              :categories="categories"
              class="mt-10 mb-10"
              style="margin: 0 25px"
              />
            </article>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import client from '~/plugins/contentful'
import CategoryList from "@/components/CategoryList"
import Profile from "@/components/Profile"
import PostOutlineCard from "@/components/PostOutlineCard"

export default {
async asyncData({ params }) {
    const posts = await client
      .getEntries({
        content_type: 'post',
        'fields.category.sys.contentType.sys.id': 'category',
        'fields.category.fields.slug': params.category,
        order: '-sys.createdAt',
      })
      .then(entries => {
        return entries.items
      })
          

    const categories = await client
      .getEntries({
        content_type: 'category',
        order: 'fields.index',
      })
      .then(entries => {
        return entries.items.map(e => { return e.fields})
      })

    const selectedCategoryName = await categories.filter(el => el.slug === params.category)[0].title
    console.log({selectedCategoryName})
      
      return {params, posts, categories, selectedCategoryName}
  },
  mounted(){
    console.log({post:this.posts})
    console.log({categories: this.categories})
  },
  head: {
    title: 'カテゴリー毎の記事一覧',
  },
  components: {
    CategoryList,
    Profile,
    PostOutlineCard,
  },
  data(){
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
.page-title h1{
    color: #424242;
    font-size: 20pt;
    position: relative;
    margin: 10px 10px 30px 10px
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
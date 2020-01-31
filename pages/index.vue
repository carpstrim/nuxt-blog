<template>
  <v-container style="max-width: 1200px">
    <v-layout row wrap>
      <v-flex xs12 sm8 class="mb-5">
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
import topImg from "@/static/top.jpg"

export default {
async asyncData({ params }) {
    const posts = await client
      .getEntries({
        content_type: 'post',
        order: '-sys.createdAt',
      })
      .then(entries => {
        return entries.items.slice(0, 10)
      })
    const categories = await client
      .getEntries({
        content_type: 'category',
        order: 'fields.index',
      })
      .then(entries => {
        return entries.items.map(e => { return e.fields})
      })
      
      return {posts, categories}
  },
  mounted(){
    console.log({post:this.posts})
    console.log({categories: this.categories})
  },
  head: {
    title: 'トップ',
    meta: [
        { hid: 'description', name: 'description', content: "思ったままを気ままに綴るブログ。" },
        { hid: 'og:site_name', property: 'og:site_name', content: 'TOP - COLOR PALETTE' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://color-in-k.com/' },
        { hid: 'og:title', property: 'og:title', content: 'COLOR PALETTE' },
        { hid: 'og:description', property: 'og:description', content: "思ったままを気ままに綴るブログ。" },
        { hid: 'og:image', property: 'og:image', content: topImg },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@node_mental' }
      ]
  },
  components: {
    CategoryList,
    Profile,
    PostOutlineCard
  },
  data(){
    return {
      topImg
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
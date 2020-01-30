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
        order: '-fields.index',
      })
      .then(entries => {
        entries.items.forEach(e => {
          console.log({t: e/*.fields.title,sys:e.sys*/})
        });

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
  },
  components: {
    CategoryList,
    Profile,
    PostOutlineCard
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

</style>
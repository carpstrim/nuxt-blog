<template>
  <v-container style="max-width: 1200px">
    <v-layout row wrap>
      <v-flex xs12 sm8>
        <div class="page-title">
        <h1>カテゴリー</h1>
        </div>
        <div v-for="(category, index) in categories" :key="index">
            <v-container class="mb-5">
            <category-card
            :category="category"
            width="70%"
            />
            </v-container>
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
import CategoryCard from "@/components/CategoryCard"

export default {
async asyncData({ params }) {
    
    const categories = await client
      .getEntries({
        content_type: 'category',
        order: '-sys.createdAt',
      })
      .then(entries => {
        return entries.items.map(e => { return e.fields})
      })
      
      return {categories}
  },
  mounted(){
    console.log({categories: this.categories})
  },
  head: {
    title: '記事一覧',
  },
  components: {
    CategoryList,
    Profile,
    CategoryCard
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
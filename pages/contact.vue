<template>
  <v-container style="max-width: 1200px">
    <v-layout row wrap>
      <v-flex xs12 sm8>
        <div class="page-title">
        <h1>お問い合わせ</h1>
        </div>

        <form name="contact" method="POST" data-netlify="true">
        <p>
            <label>Your Name: <input type="text" name="name" /></label>   
        </p>
        <p>
            <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
            <label>Your Role: <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
            </select></label>
        </p>
        <p>
            <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
            <button type="submit">Send</button>
        </p>
        </form>

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
        order: 'fields.index',
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
    title: 'お問い合わせ',
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
<template>
  <v-container style="max-width: 1200px">
    <v-layout row wrap>
    <v-flex xs12 sm8>
      <v-card
      flat
      tile
      class="mb-10 mr-2 ml-2"
      >
      <article class="post">
        <v-container style="white-space: pre-line; word-break: break-all;">
          <p class="date"><span>{{ formatDate(post.sys.createdAt) }}</span></p>
          <h1>{{ post.fields.title }}</h1>
          <v-img　
          class="ma-2" 
          :src="post.fields.image.fields.file.url"
          aspect-ratio="1.77" />
          <div class="content" v-html="$md.render(post.fields.content)"></div>
        </v-container>
      </article>
      </v-card>
    </v-flex>

        <v-flex xs12 sm4>
            <!--<article>
              <profile style="margin: 0 25px" />
            </article>-->
            <article>
              <category-list
              :categories="categories"
              class="mb-10"
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


export default {
  components: {
    CategoryList,
    Profile
  },
  async asyncData({ params, error, payload }) {
//    if (payload) return { post: payload }
    const post = await client
      .getEntries({
        content_type: 'post',
        'fields.slug': params.slug,
      })
      .then(entries => {
        return entries.items[0]
      })
    const categories = await client
      .getEntries({
        content_type: 'category',
        order: '-sys.createdAt',
      })
      .then(entries => {
        return entries.items.map(e => { return e.fields})
      })
      
      return {post, categories}
  },
  head() {
    return {
      title: this.post.fields.title,
    }
  },
  mounted() {
    console.log({post: this.post, categories: this.categories})
  },
  data(){
    return {

    }
  },
  methods: {
    formatDate(iso) {
      const date = new Date(iso)
      const yyyy = new String(date.getFullYear())
      const mm = new String(date.getMonth() + 1).padStart(2, "0")
      const dd = new String(date.getDate()).padStart(2, "0")
      return `${yyyy}-${mm}-${dd}`
    }
  }
}
</script>

<style>

.post h1 {
  border-bottom: solid 3px #cce4ff;
  position: relative;
  margin: 20px 10px 0 10px
}

.post h1:after {
  position: absolute;
  content: " ";
  display: block;
  border-bottom: solid 3px #5472cd;
  bottom: -3px;
  width: 20%;
}

.post h2 {
  padding: 0.5em;/*文字周りの余白*/
  color: #494949;/*文字色*/
  background: #cce4ff;/*背景色*/
  border-left: solid 5px #5472cd;/*左線（実線 太さ 色）*/
  margin: 20px 0 20px 0
}

.post h3 {
  color: #6594e0;/*文字色*/
  /*線の種類（点線）2px 線色*/
  border-bottom: dashed 2px #6594e0;
  margin: 15px 1rem 10px 1rem;
}

.post p {
  margin: 10px 1rem 0 1rem;
}


.post .author {
  text-align: right;
  margin-top: 7px;
  color: #5472cd;
  font-size: 13pt;
}

.post .content {
  margin-top: 40px;
}



</style>
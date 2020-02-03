<template>
<v-card
          flat
          tile
          class="mb-5 mr-2 ml-2">
        <v-container class="post-outline">
          <v-layout row wrap>
          <v-flex xs12 sm4>
          <v-img　
          class="ma-1 ml-3 mr-3 mb-2"
          :src="post.fields.image.fields.file.url"
          aspect-ratio="1.3"
          />
          </v-flex>
          <v-flex xs12 sm8>
          <div class="mt-1 ml-2 mb-1">
          <span>{{ formatDate(post.sys.createdAt) }}</span>
          <v-btn
          outlined
          color="orange"
          height="25px"
          :to="'/category/' + post.fields.category.fields.slug"
          style="margin-left: 20px">{{post.fields.category.fields.title}}</v-btn>
          </div>
            <nuxt-link :to="'posts/'+post.fields.slug" style="text-decoration: none">
          <h2 class="mr-1 ml-1">{{ post.fields.title }}</h2>
          </nuxt-link>
          <v-card
          flat
          tile
          class="mr-1 ml-1">
            <v-card-text>{{post.fields.outline}}</v-card-text>
            
          </v-card>
          </v-flex>
          </v-layout>
          <v-card
          outlined
          color="#EEEEEE"
          :to="'/posts/' + post.fields.slug"
          style="text-align: center; padding: 10px 0"
          >
          <span style="font-size: 10pt; color: #424242;">この記事を読む</span>
          </v-card>
        </v-container>
          </v-card>
</template>

<script>
export default {
    props:{
        post: {
            type: Object,
            default: () => {}
        },
        color: {
            type: String,
            default: null
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
.post-outline h2 {
  border-bottom: solid 3px #cce4ff;
  position: relative;
  color: black;
  font-size: 15pt
}

.post-outline h2:hover{
    text-decoration: underline;
}

.post-outline h2:after {
  position: absolute;
  content: " ";
  display: block;
  border-bottom: solid 3px #5472cd;
  bottom: -3px;
  width: 20%;
}

</style>
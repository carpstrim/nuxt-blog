<template>
  <v-card flat tile class="mb-5 mr-3 ml-3">
    <v-container class="post-outline">
      <v-layout row wrap>
        <v-flex xs12 sm4>
          <v-img　
            class="ma-1 ml-3 mr-3 mb-2"
            :src="post.image.fields.file.url"
            aspect-ratio="1.3"
            @click="$router.push(`/posts/${post.slug}/`)"
            style="cursor: pointer"
          />
        </v-flex>
        <v-flex xs12 sm8>
          <v-layout row wrap class="ml-3 mr-6 mb-1">
            <span class="mr-5">{{ formatDate(post.createdAt) }}</span>
            <v-btn
              outlined
              color="orange darken-4"
              height="25px"
              :to="'/category/' + post.category.fields.slug"
              class="mb-1 mr-6"
            >{{post.category.fields.title}}</v-btn>
            <v-flex xs12 sm5>
              <v-icon small class="mb-1" color="primary">mdi-pencil</v-icon>
              <span style="color: #5472cd">{{post.author.fields.name}}</span>
            </v-flex>
          </v-layout>
          <nuxt-link :to="'/posts/'+post.slug + '/'" style="text-decoration: none">
            <h2 class="mr-2 ml-2 pb-1">{{ post.title }}</h2>
          </nuxt-link>
          <v-card flat tile class="mr-1 ml-1">
            <v-card-text>{{post.outline}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-card
        outlined
        tile
        color="#EEEEEE"
        :to="'/posts/' + post.slug + '/'"
        style="text-align: center; padding: 10px 0"
      >
        <span style="font-size: 10pt; color: #424242;">この記事を読む</span>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {}
    },
    color: {
      type: String,
      default: null
    }
  },
  created() {},
  methods: {
    formatDate(iso) {
      const date = new Date(iso);
      const yyyy = new String(date.getFullYear());
      const mm = new String(date.getMonth() + 1).padStart(2, "0");
      const dd = new String(date.getDate()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd}`;
    }
  }
};
</script>

<style>
.post-outline h2 {
  border-bottom: solid 3px #cce4ff;
  position: relative;
  color: black;
  font-size: 15pt;
}

.post-outline h2:hover {
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
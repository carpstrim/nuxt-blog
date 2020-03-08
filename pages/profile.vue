<template>
  <v-container style="max-width: 1200px">
    <v-layout row wrap>
      <v-flex xs12 sm8>
        <v-card flat tile class="mb-2 mr-3 ml-3">
          <article class="post">
            <v-container style="white-space: pre-line; word-break: break-all;">
              <p class="date">
                <span>{{ formatDate(post.sys.updatedAt) }}</span>
              </p>
              <h1>プロフィール</h1>
              <!--<v-img　
          class="ma-2" 
          :src="post.fields.image.fields.file.url"
              aspect-ratio="1.77" />-->
              <div class="content" v-html="$md.render(post.fields.content)"></div>
            </v-container>
          </article>
        </v-card>
      </v-flex>

      <v-flex xs12 sm4>
        <article>
          <category-list :categories="categories" class="mt-5 mb-5" style="margin: 0 25px" />
        </article>
        <!--<adsbygoogle ad-slot="7918916412" style="margin: 0 25px" />-->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import client from "~/plugins/contentful";
import CategoryList from "@/components/CategoryList";

export default {
  components: {
    CategoryList
  },
  async asyncData({ params, error, payload }) {
    //    if (payload) return { post: payload }
    const post = await client
      .getEntries({
        content_type: "profile"
      })
      .then(entries => {
        return entries.items[0];
      });
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

    return { post, categories };
  },
  head() {
    return {
      title: "プロフィール"
    };
  },
  mounted() {
    console.log({ post: this.post, categories: this.categories });
  },
  data() {
    return {};
  },
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
.post h1 {
  border-bottom: solid 3px #cce4ff;
  position: relative;
  margin: 20px 10px 0 10px;
}

.post h1:after {
  position: absolute;
  content: " ";
  display: block;
  border-bottom: solid 3px #5472cd;
  bottom: -3px;
  width: 20%;
}
</style>
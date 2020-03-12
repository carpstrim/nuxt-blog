<template>
  <v-container style="max-width: 1200px">
    <v-layout row wrap>
      <v-flex xs12 sm8>
        <v-card flat tile class="mb-7 mr-3 ml-3">
          <article class="post">
            <v-container style="white-space: pre-line; word-break: break-all;">
              <p class="date">
                <span>{{ formatDate(post.createdAt) }}</span>
                <v-btn
                  outlined
                  color="orange"
                  height="30px"
                  :to="'/category/' + post.category.fields.slug"
                  style="margin-left: 20px"
                >{{post.category.fields.title}}</v-btn>
              </p>
              <h1>{{ post.title }}</h1>
              <p class="author">Writer： {{post.author.fields.name}}</p>
              <v-img　 class="ma-3" :src="post.image.fields.file.url" aspect-ratio="1.77" />
              <div class="content" v-html="$md.render(post.content)"></div>
              <span class="mb-2" style="color: #505050; margin: 0 auto">Sponsored Link</span>
              <adsbygoogle ad-slot="2931217575" style="width: 300px; margin: 0 auto" />
            </v-container>
          </article>
          <v-container>
            <div class="mb-7" style="padding: 0 7%" v-if="post.relatedPost">
              <h2 class="ml-2">関連記事</h2>
              <v-divider />
              <v-container v-for="p in post.relatedPost" :key="p.fields.slug">
                <v-card :to="'/posts/' + p.fields.slug" tile outlined color="#ECEFF1">
                  <v-layout class="ma-3" row wrap>
                    <v-flex xs2>
                      <v-img aspect-ratio="1" :src="p.fields.image.fields.file.url" />
                    </v-flex>
                    <v-flex xs10>
                      <div class="ml-4">
                        <span style="font-size: 10pt">{{p.fields.createdAt}}</span>
                        <p style="font-weight: bold">{{p.fields.title}}</p>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-container>
            </div>
            <v-flex xs12 class="mb-2 ml-3">
              <v-btn text x-large color="orange" :to="'/category/' + post.category.fields.slug">
                <v-icon class="mr-2" color="orange">mdi-tag</v-icon>
                {{post.category.fields.title}}
              </v-btn>
            </v-flex>

            <v-flex xs12 class="mb-5">
              <v-btn
                class="ml-5"
                large
                outlined
                color="#00acee"
                :href="'http://twiter.com/share?url=https://color-in-k.com/posts/' + post.slug + '&via=node_mental&text=' + post.title"
              >
                <v-icon>mdi-twitter</v-icon>ツイート
              </v-btn>
              <v-btn
                class="ml-2"
                large
                outlined
                target="_blank"
                rel="noopener noreferrer"
                color="#4267B2"
                :href="'https://www.facebook.com/share.php?u=https://color-in-k.com/posts/' + post.slug"
              >
                <v-icon>mdi-facebook</v-icon>シェア
              </v-btn>
            </v-flex>
          </v-container>
        </v-card>
      </v-flex>

      <v-flex xs12 sm4>
        <article>
          <profile style="margin: 0 25px" />
        </article>
        <article>
          <category-list :categories="categories" class="mt-10 mb-5" style="margin: 0 25px" />
        </article>
        <adsbygoogle ad-slot="7918916412" style="width: 300px; margin: 0 auto" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import client from "~/plugins/contentful";
import CategoryList from "@/components/CategoryList";
import Profile from "@/components/Profile";

export default {
  components: {
    CategoryList,
    Profile
  },
  async asyncData({ params, error, payload }) {
    //    if (payload) return { post: payload }
    const post = await client
      .getEntries({
        content_type: "post",
        "fields.slug": params.slug
      })
      .then(entries => {
        return entries.items[0].fields;
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
      title: this.post.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.outline
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: this.post.title + " - のーど Inc"
        },
        { hid: "og:type", property: "og:type", content: "article" },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://color-in-k.com/posts/" + this.post.slug
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.post.title
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.post.outline
        },
        //{ hid: 'og:image', property: 'og:image', content: this.post.image.fields.file.url },
        { hid: "twitter:card", name: "twitter:card", content: "summary" },
        { hid: "twitter:site", name: "twitter:site", content: "@node_mental" }
      ]
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
  margin: 25px 2% 0 2%;
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
  padding: 0.6em; /*文字周りの余白*/
  color: #494949; /*文字色*/
  background: #cce4ff; /*背景色*/
  border-left: solid 5px #5472cd; /*左線（実線 太さ 色）*/
  margin: 20px 0 20px 0;
}

.post h3 {
  color: #6594e0; /*文字色*/
  /*線の種類（点線）2px 線色*/
  border-bottom: dashed 2px #6594e0;
  margin: 15px 3% 10px 3%;
}

.post p {
  margin: 15px 1rem 0 1rem;
}

.post .author {
  text-align: right;
  margin: 12px 12px;
  color: #5472cd;
  font-size: 13pt;
}

.post .content {
  margin: 50px 0;
}

.post .content p {
  margin: 20px 4%;
  font-size: 1em;
  line-height: 1.5em;
}

.post .content img {
  width: 80%;
  display: block;
  margin: auto;
}

.post .content blockquote {
  border-left: solid 3px #bdbdbd; /*左線（実線 太さ 色）*/
  margin: 0 5%;
  background-color: #f5f5f5;
  line-height: 1em;
}
</style>
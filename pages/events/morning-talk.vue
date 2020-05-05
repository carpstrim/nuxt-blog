<template>
  <div>
    <v-container style="max-width: 1100px">
      <v-layout row wrap>
        <v-flex xs12 sm8>
          <v-card flat tile class="mb-7 mr-3 ml-3">
            <no-ssr>
              <article class="post">
                <v-container style="white-space: pre-line; word-break: break-all;">
                  <h1 class="mt-10">{{ post.title }}</h1>
                  <p class="author">Writer： {{post.author.fields.name}}</p>
                  <v-img　 class="ma-3" :src="post.image.fields.file.url" aspect-ratio="1.77" />
                  <p v-html="$md.render(post.outline)"></p>
                  <div class="content" v-html="$md.render(post.content)"></div>
                </v-container>
              </article>
            </no-ssr>
            <v-container>
              <v-flex xs12 class="mb-5">
                <v-btn
                  class="ml-5"
                  large
                  outlined
                  target="_blank"
                  rel="noopener noreferrer"
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
            <category-list class="mt-10 mb-5" style="margin: 0 25px" />
          </article>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
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
  async asyncData(/*{ params, error, payload }*/) {
    //    if (payload) return { post: payload }
    const post = await client
      .getEntries({
        content_type: "event",
        "fields.slug": "morning-talk" //params.slug
      })
      .then(entries => {
        return entries.items[0].fields;
      });

    return { post };
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
          content: this.post.title + " - のーどインク"
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
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
        { hid: "twitter:site", name: "twitter:site", content: "@node_mental" }
      ]
    };
  },
  created() {
    const now = new Date().getTime();
    console.log({ now });
    console.log(this.post.holdAt);
    const holdDateTime = new Date(this.post.holdAt).getTime();
    if (holdDateTime < now) {
      this.disabled = false;
      this.belowText = "";
    }
  },
  mounted() {
    console.log({ post: this.post });
  },
  data() {
    return {
      dialog: false,
      belowText: "開始時刻までお待ちください",
      disabled: true,
      agree: false,
      twitterId: ""
    };
  },
  methods: {
    formatDate(iso) {
      const date = new Date(iso);
      const yyyy = new String(date.getFullYear());
      const mm = new String(date.getMonth() + 1).padStart(2, "0");
      const dd = new String(date.getDate()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd}`;
    },
    attend() {
      this.dialog = true;
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
  margin: 50px 0 0 0;
}

.post .content p {
  margin: 20px 5%;
  font-size: 1em;
  line-height: 1.5em;
}

.post .content img {
  width: 90%;
  display: block;
  margin: auto;
}

.post .content blockquote {
  border-left: solid 3px #bdbdbd; /*左線（実線 太さ 色）*/
  margin: 0 5%;
  background-color: #f5f5f5;
  line-height: 1em;
}

.below {
  color: red;
}
</style>
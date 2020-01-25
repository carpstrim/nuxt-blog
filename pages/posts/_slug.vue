<template>
  <v-card color="white"
  flat
  tile>
  <article>
    <v-container style="white-space: pre-line; word-break: break-all;">
      <p class="date"><span>{{ formatDate(post.sys.createdAt) }}</span>
      <span class="tag">{{post.fields.category.fields.title}}</span></p>
      <h1>{{ post.fields.title }}</h1>
      <p class="author">Written by {{post.fields.author.fields.name}}</p>
      <v-img　class="ma-5" :src="post.fields.image.fields.file.url" />
      <div class="content" v-html="$md.render(post.fields.content)"></div>
    </v-container>
  </article>
  </v-card>
</template>

<script>
import client from '~/plugins/contentful'

export default {
  asyncData({ params, error, payload }) {
    if (payload) return { post: payload }
    return client
      .getEntries({
        content_type: 'post',
        'fields.slug': params.slug,
      })
      .then(entries => {
        return { post: entries.items[0] }
      })
      .catch(e => console.log(e))
  },
  head() {
    return {
      title: this.post.fields.title,
    }
  },
  mounted() {
    console.log(this.post)
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
h1 {
  border-bottom: solid 3px #cce4ff;
  position: relative;
  margin: 30px 10px 0 10px
}

h1:after {
  position: absolute;
  content: " ";
  display: block;
  border-bottom: solid 3px #5472cd;
  bottom: -3px;
  width: 20%;
}

h2 {
  padding: 0.5em;/*文字周りの余白*/
  color: #494949;/*文字色*/
  background: #cce4ff;/*背景色*/
  border-left: solid 5px #5472cd;/*左線（実線 太さ 色）*/
  margin: 0 0 10px 0
}

h3 {
  color: #6594e0;/*文字色*/
  /*線の種類（点線）2px 線色*/
  border-bottom: dashed 2px #6594e0;
  margin: 10px 1rem 0 1rem;
}

p {
  margin: 0 1rem 0 1rem;
}

.date {
  margin: 10px 10px 0 10px;
}

.tag {
  background: #FFA726;/*背景色*/
  padding: 0.3em 1em 0.3em 1em;/*文字まわり（上下左右）の余白*/
  margin-left: 30px;
}

.author {
  text-align: right;
  margin-top: 4px;
  color: #5472cd;
  font-size: 13pt;
}

.content {
  margin-top: 30px;
}


</style>
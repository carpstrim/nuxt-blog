<template>
  <v-container style="max-width: 1200px">
    <v-layout row wrap>
      <v-flex xs12 sm8>
        <div class="page-title">
        <h1>お問い合わせ</h1>
        </div>

        <v-container>
        <v-card flat tile>
        <v-container>
        <div class="mt-5 mr-5 ml-5">
        <p>以下のフォームに、お問い合わせ事項を記入の上、「送信」ボタンを押してください。</p>
        <p>確認しだい、記入いただいたメールアドレスに返信いたします。</p>
        <p>（ <a href="https://twitter.com/node_mental">Twitter</a>のリプライおよびDM、<a href="https://lin.ee/80IgBws">LINE公式アカウント</a>でもメッセージを受け付けています。)</p>
        </div>
          
        <form name="contact" method="POST" data-netlify="true" action="thank-you">
        <div class="cp_iptxt">
          <input type="hidden" name="form-name" value="contact">
          <p class="mb-10">
          <label class="ef">
            <input type="text" placeholder="お名前" name="name">
          </label>
          </p>

          <p class="mb-10">
          <label class="ef">
            <input type="email" placeholder="e-mail" name="email">
          </label>
          </p>
          </div>
          <div class="cp_textarea">
        <p>
            <label class="ef">Message： <textarea name="message"></textarea></label>
        </p>
          </div>
        <p>
            <v-btn color="primary" style="margin-left: 40px" type="submit">送信</v-btn>
        </p>
        </form>
        </v-container>
        </v-card>
        </v-container>

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
    CategoryCard,
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

.cp_iptxt {
	position: relative;
	width: 60%;
	margin: 50px 3%;
}
.cp_iptxt input[type='text'] {
	font: 15px/24px;
	box-sizing: border-box;
	width: 100%;
	padding: 0.3em;
	transition: 0.3s;
	letter-spacing: 1px;
	color: #424242;
	border: none;
	border-bottom: 2px solid #1b2538;
	background: transparent;
}

.ef input[type='text']:focus {
	border-bottom: 2px solid #cce4ff;
	outline: none;
}


.ef input[type='email']:focus {
	border-bottom: 2px solid #cce4ff;
	outline: none;
}

.cp_iptxt input[type='email'] {
	font: 15px/24px;
	box-sizing: border-box;
	width: 100%;
	padding: 0.3em;
	transition: 0.3s;
	letter-spacing: 1px;
	color: #424242;
	border: none;
	border-bottom: 2px solid #1b2538;
	background: transparent;
}

.cp_textarea{
  position: relative;
	width: 80%;
	margin: 50px 3%;
  color: #424242
}

.cp_textarea textarea {
	font: 15px/24px;
	box-sizing: border-box;
	width: 100%;
	padding: 0.3em;
	transition: 0.3s;
	letter-spacing: 1px;
	color: #424242;
	border: none;
	border-bottom: 2px solid #1b2538;
	background: transparent;
}



</style>
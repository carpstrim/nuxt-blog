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
                <p>メッセージの送信、ありがとうございました。</p>
                <p>確認しだい、記入いただいたメールアドレスに返信いたします。</p>
                <v-btn text color="primary" outlined to="/">Homeに戻る</v-btn>
              </div>
            </v-container>
          </v-card>
        </v-container>
      </v-flex>
      <v-flex xs12 sm4>
        <article>
          <profile style="margin: 0 25px" />
        </article>
        <article>
          <category-list class="mt-10 mb-10" style="margin: 0 25px" />
        </article>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import client from "~/plugins/contentful";
import CategoryList from "@/components/CategoryList";
import Profile from "@/components/Profile";
import CategoryCard from "@/components/CategoryCard";

export default {
  mounted() {},
  head: {
    title: "お問い合わせ"
  },
  components: {
    CategoryList,
    Profile,
    CategoryCard
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
.page-title h1 {
  color: #424242;
  font-size: 20pt;
  position: relative;
  margin: 10px 10px 30px 10px;
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
<template>
  <v-container style="max-width: 1150px">
    <v-layout row wrap>
      <v-flex xs12 sm8>
        <div class="page-title">
          <h1>お問い合わせ</h1>
        </div>

        <v-container>
          <v-card flat tile class="mb-2">
            <v-container>
              <div class="mt-5 mr-5 ml-5">
                <p>以下のフォームに、お問い合わせ事項を記入の上、「送信」ボタンを押してください。</p>
                <p>確認しだい、記入いただいたメールアドレスに返信いたします。</p>
                <p>
                  （
                  <a
                    href="https://twitter.com/node_mental"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Twitter</a>のリプライおよびDM、
                  <a
                    href="https://lin.ee/80IgBws"
                    target="_blank"
                    rel="noopener noreferrer"
                  >LINE公式アカウント</a>でもメッセージを受け付けています。)
                </p>
              </div>
              <v-flex xs8 class="mt-10 mr-7 ml-7">
                <v-text-field v-model="name" label="お名前"></v-text-field>
                <v-text-field v-model="mail" label="メールアドレス"></v-text-field>
              </v-flex>
              <v-flex x12 class="mt-3 mr-7 ml-7">
                <v-textarea v-model="message" outlined label="メッセージ"></v-textarea>
              </v-flex>
              <v-flex x12 class="mb-3 mr-7 ml-7">
                <v-btn :loading="loading" color="primary" @click="send()">送信</v-btn>
                <span class="ml-3" style="color:red">{{warnText}}</span>
              </v-flex>
            </v-container>
          </v-card>
        </v-container>
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
    return {
      loading: false,
      name: "",
      mail: "",
      message: "",
      warnText: ""
    };
  },
  methods: {
    async send() {
      if (this.name && this.mail && this.message) {
        this.loading = true;
        const call = this.$functions.httpsCallable("form");
        await call({
          name: this.name,
          mail: this.mail,
          message: this.message
        }).then(res => {
          console.log({ res });
          this.$router.push("/thank-you");
        });
      } else {
        this.warnText = "上記全ての項目を入力してください";
      }
    }
  }
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
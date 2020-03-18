<template>
  <v-container fill-height>
    <v-layout row justify-center align-center>
      <v-flex xs12 sm8 md8 lg5>
        <v-card>
          <v-img :src="top" aspect-ratio="1" />
          <v-card-text>
            <h4>ようこそ！</h4>
          </v-card-text>
          <v-card-text>
            <v-subheader>非IT会社員がフリーランスエンジニアを目指してプログラミング学習を進める過程で、作ってきたアプリをまとめています。</v-subheader>
          </v-card-text>
          <v-card-actions>
            <v-layout row justify-end>
              <v-flex xs12 style="display:flex; justify-content:flex-end;">
                <v-btn
                  href="https://node-nuxt-apps.firebaseapp.com/apps/"
                  color="info"
                  class="mr-10 mb-3"
                >アプリ一覧</v-btn>
                <!--<v-btn
                  href="https://app-senbonknock.com/"
                  target="_blank"
                  flat
                  outline
                  color="secondary"
                  class="ma-1"
                >ブログ<v-icon
                    small
                    left
                  >mdi-launch</v-icon>
                </v-btn>-->
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import top from "@/static/dev.png";
export default {
  layout: "development",
  data() {
    return { top };
  }
};
</script>
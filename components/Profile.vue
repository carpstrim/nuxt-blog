<template>
  <v-card>
    <v-list>
      <v-list-item to="/profile">
        <v-list-item-content>
          <v-list-item-title class="title categoryList" style="text-align: center">
            <p>Profile</p>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-card-text>
      <!--<p style="margin: 0 15px 0 15px">一見共通点のない2人が、一緒にブログを運営します。</p>-->
      <p style="margin: 0 15px 20px 15px">
        思ったことを、思ったままに表現できる場に。
        <br />メンタルに自信がないけど、自信がないなりに工夫して合理的に生きていく。
      </p>
    </v-card-text>
    <v-divider />
    <v-row no-gutters>
      <v-col cols="4">
        <v-img :src="node" aspect-ratio="1"></v-img>
      </v-col>
      <v-col cols="8" class="node-profile">
        <div style="margin: 10px 10px 0 10px">
          <p>のーど</p>
          <span>フリーランス Webプログラマー</span>
          <br />
          <v-btn
            color="#00acee"
            href="https://twitter.com/node_mental"
            target="_blank"
            rel="noopener noreferrer"
            icon
          >
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn
            color="#FF0000"
            href="https://www.youtube.com/channel/UCn2ebguspaJP5iJ8YWwpI1A"
            target="_blank"
            rel="noopener noreferrer"
            icon
          >
            <v-icon>mdi-youtube</v-icon>
          </v-btn>
          <v-btn
            color="#D93177"
            href="https://www.instagram.com/node_mental/"
            target="_blank"
            rel="noopener noreferrer"
            icon
          >
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn
            color="#00B900"
            href="https://lin.ee/80IgBws"
            target="_blank"
            rel="noopener noreferrer"
            icon
          >
            <v-icon>mdi-chat</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-divider />
    <!--<v-row no-gutters>
      <v-col cols="8" class="node-profile">
        <div style="margin: 10px 10px 0 10px">
          <p>焼きおにぎり</p>
          <span>ひとことプロフィール</span>
          <br />
          <v-btn
            color="#00acee"
            href="https://twitter.com/oni3ume"
            target="_blank"
            rel="noopener noreferrer"
            icon
          >
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="4">
        <v-img class="pa-2" :src="oni" aspect-ratio="1"></v-img>
      </v-col>
    </v-row>
    <v-divider />-->
    <v-layout row wrap>
      <v-spacer />
      <v-btn text large color="primary" to="/profile/" style="margin-right: 15px">プロフィール詳細 ></v-btn>
    </v-layout>
  </v-card>
</template>

<script>
import node from "@/static/node.jpg";
import oni from "@/static/oni.jpg";

export default {
  data() {
    return {
      node,
      oni
    };
  }
};
</script>

<style>
.node-profile p {
  color: #5472cd;
  position: relative;
  margin: 5px 0 0 0;
}

.node-profile span {
  font-size: 9pt;
}
</style>
<template>
    <v-card>
                  <v-list>
                      <v-list-item to="/profile">
                          <v-list-item-content>
                          <v-list-item-title class="title categoryList" style="text-align: center"><p>Profile</p></v-list-item-title>
                          </v-list-item-content>
                      </v-list-item>
                  </v-list>
                <v-card-text><!--<p style="margin: 0 15px 0 15px">一見共通点のない2人が、一緒にブログを運営します。</p>--><p style="margin: 0 15px 0 15px">思ったことを、思ったままに表現できる場に。</p></v-card-text>
                <v-divider />
                  <v-row no-gutters>
                    <v-col cols="4">
                      <v-img
                        :src="node"
                        aspect-ratio="1"
                      >
                      </v-img>
                    </v-col>
                    <v-col cols="8" class="node-profile">
                      <div style="margin: 0 10px 0 10px">
                      <p>のーど</p>
                      <span>運営者・ライター</span><br>
                      <span>フリーランスのプログラマーです</span><br>
                      <v-btn
                      color="primary"
                      href="https://twitter.com/node_mental"
                      small
                      icon
                      outlined
                      >
                      <v-icon>mdi-twitter</v-icon>
                      </v-btn>
                      <v-btn
                      color="red"
                      href="https://www.youtube.com/channel/UCn2ebguspaJP5iJ8YWwpI1A"
                      small
                      icon
                      outlined
                      >
                      <v-icon>mdi-youtube</v-icon>
                      </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                  <v-divider />
                  <!--<v-row no-gutters>
                    <v-col cols="8" class="oni-profile">
                      <div style="margin: 0 10px 0 10px">
                      <p>焼きおにぎり</p>
                      <span>ライター</span><br>
                      <span>ひとことプロフィール</span><br>
                      <v-btn
                      color="primary"
                      href="https://twitter.com/oni3ume"
                      small
                      icon
                      outlined
                      >
                      <v-icon>mdi-twitter</v-icon>
                      </v-btn>
                      </div>
                    </v-col>
                    <v-col cols="4">
                      <v-img
                        class="pa-2"
                        :src="oni"
                        aspect-ratio="1"
                      >
                      </v-img>
                    </v-col>
                  </v-row>
                  <v-divider />-->
                  <v-layout row wrap>
                  <v-spacer />
                  <v-btn
                  text
                  large
                  color="primary"
                  to="/profile"
                  style="margin-right: 15px">プロフィール詳細 ></v-btn>
                  </v-layout>
                </v-card>

</template>

<script>
import node from '@/static/node.jpg'
import oni from '@/static/oni.jpg'

export default {
    data(){
        return {
            node,
            oni
        }
    }
}
</script>

<style>
.node-profile p {
  color: #5472cd;
  position: relative;
  margin: 5px 0 0 0
}


.node-profile span {
  font-size: 9pt;
}

.oni-profile p {
  color: #EF6C00;
  position: relative;
  margin: 5px 0 0 0
}


.oni-profile span {
  font-size: 9pt;
}
</style>
<template>
  <v-card>
    <v-list>
      <v-list-item link to="/category/">
        <v-list-item-content>
          <v-list-item-title class="title categoryList" style="text-align: center">
            <p>Category</p>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list nav>
      <v-list-item-group :color="color">
        <div v-for="(item, i) in categories" :key="i">
          <v-divider />
          <v-list-item :to="'/category/' + item.slug">
            <v-list-item-icon>
              <v-icon :color="color" v-text="item.icon" style="margin-left: 20px"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    /*categories: {
            type: Array,
            default: []
        },*/
    color: {
      type: String,
      default: "#FFA726"
    }
  },
  data() {
    return {
      categories: [
        {
          title: "メンタル",
          slug: "mental",
          icon: "mdi-heart-outline"
        },
        {
          title: "考え方",
          slug: "thought",
          icon: "mdi-thought-bubble-outline"
        },
        {
          title: "人間関係",
          slug: "human-relation",
          icon: "mdi-chat-processing-outline"
        },
        {
          title: "お仕事",
          slug: "work",
          icon: "mdi-file-outline"
        },
        {
          title: "ラジオ",
          slug: "radio",
          icon: "mdi-microphone-outline"
        },
        {
          title: "プログラミング",
          slug: "programming",
          icon: "mdi-laptop-mac"
        },
        {
          title: "日記・雑談",
          slug: "diary",
          icon: "mdi-book-outline"
        }
      ]
    };
  }
};
</script>

<style>
.categoryList p {
  position: relative;
  display: inline-block;
  margin-bottom: 1em;
}
.categoryList p:before {
  content: "";
  position: absolute;
  bottom: -15px;
  display: inline-block;
  width: 60px;
  height: 5px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #ffa726;
  border-radius: 2px;
}
</style>
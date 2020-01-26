<template>
    <v-card>
        <v-list>
            <v-list-item link>
                <v-list-item-content>
                <v-list-item-title class="title categoryList" style="text-align: center"><p>カテゴリー</p></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <v-list
        nav
        >
            <v-list-item-group :color="color">
                <div v-for="(item, i) in categories"
                :key="i">
                <v-divider />
                <v-list-item
                :to="'/category/' + item.slug">
                    <v-list-item-icon>
                        <v-icon :color="item.color || color" v-text="item.icon"  style="margin-left: 20px"></v-icon>
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
    props:{
        categories: {
            type: Array,
            default: []
        },
        color: {
            type: String,
            default: "#FFA726"
        }
    },
}
</script>

<style>
.categoryList p {
  position: relative;
  display: inline-block;
  margin-bottom: 1em;
}
.categoryList p:before {
  content: '';
  position: absolute;
  bottom: -15px;
  display: inline-block;
  width: 60px;
  height: 5px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #FFA726;
  border-radius: 2px;
}
</style>
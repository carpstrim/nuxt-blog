<template>
        <v-card
        tile
        outlined
        :width="width"
        :to="'/category/' + category.slug"
        hover
        >
            <v-card-title><v-icon color="orange" class="mr-5 ml-3">{{category.icon}}</v-icon><span>{{category.title}}</span></v-card-title>
            <v-card-text class="ml-3">{{category.description}}</v-card-text>

        </v-card>
</template>

<script>
export default {
    props:{
        category: {
            type: Object,
            default: () => {}
        },
        color: {
            type: String,
            default: null
        },
        width: {
            type: String,
            default: null
        }
    }
}
</script>

<style>

</style>
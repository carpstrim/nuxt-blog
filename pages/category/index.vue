<!-- display all-categrie list -->
<template>
    <div>カテゴリー</div>
</template>

<script>
import client from '~/plugins/contentful'
export default {
    asyncData({ params }) {
    return client
      .getEntries({
        content_type: 'category',
        order: '-sys.createdAt',
      })
      .then(entries => {
        return { category: entries.items }
      })
      .catch(e => console.log(e))
  },
  mounted() {
    console.log({category: this.category})
  },
    data(){
        return {

        }
    }
}
</script>
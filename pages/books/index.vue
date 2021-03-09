<template>
  <div>
    <section
      class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
    >
      <book-card v-for="book in books" :key="book.isbn" :book="book" />
    </section>
  </div>
</template>

<script>
import BookCard from '~/components/BookCard.vue'
import BookSearch from '~/components/BookSearch.vue'

export default {
  async asyncData({ $axios }) {
    const { books } = await $axios.$get('/.netlify/functions/load-books')

    return { books }
  },
  // computed: {
  //   books() {
  //     return this.$store.getters.getAllBooksByTitle || []
  //   }
  // },
  components: { BookCard, BookSearch }
  // mounted() {
  //   this.$store.dispatch('fetchAllBooks')
  // }
  // beforeMount() {
  //   this.$store.dispatch('fetchAllBooks')
  // }
}
</script>

<style></style>

<template>
  <div>
    <book-search />
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
    const { allBooks } = await $axios.$get(
      '/.netlify/functions/fetch_all_books'
    )
    return { books: allBooks }
  },
  components: { BookCard, BookSearch }
}
</script>

<style></style>

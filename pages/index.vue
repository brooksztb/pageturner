<template>
  <section class="flex flex-col items-center">
    <book-card />
  </section>
</template>

<script>
import BookCard from '~/components/BookCard.vue'
export default {
  // async asyncData({ $axios }) {
  //   // const data = await $axios.get(`/functions/fetch_all_books`)
  //   const { data } = await $axios.get(
  //     `/.netlify/functions/fetch_book_by_isbn?isbn=${'1250256739'}`
  //   )
  //   return { books: data }
  // },
  components: { BookCard }
}
</script>

<style></style>

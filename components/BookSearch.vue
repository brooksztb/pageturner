<template>
  <div>
    <input
      v-model="isbn"
      class="text-white border rounded bg-primary border-secondary"
      placeholder="Search for book by isbn"
    />
    <button class="pageturner-button" @click="search">Search for Book</button>
    <div v-if="error" class="text-base text-red-500">Error: {{ error }}</div>
  </div>
</template>

<script>
import ENV from '~/env.js'

export default {
  data() {
    return {
      isbn: '',
      volumeId: '',
      book: {
        title: '',
        authors: [],
        pageCount: 0,
        thumbnail: ''
      },
      error: ''
    }
  },
  methods: {
    async search() {
      this.error = ''
      const searchParams = `/volumes?q=isbn:${this.isbn}&fields=items(id)&key=${ENV.google.booksApiKey}`
      let volumeId = await this.$gbooks
        .get(searchParams)
        .then(response => {
          if (response.data && response.data.items.length > 0) {
            this.volumeId = response.data.items[0].id
            return response.data.items[0].id
          }
        })
        .catch(error => {
          this.error = error.message
        })

      if (volumeId) {
        const volumeParams = `/volumes/${volumeId}?fields=id, volumeInfo(title, authors, publisher, publishedDate, description, pageCount, imageLinks(thumbnail, medium))&key=${ENV.google.booksApiKey}`
        await this.$gbooks.get(volumeParams).then(response => {
          if (response.data) {
            const volumeInfo = response.data.volumeInfo
            this.book = {
              title: volumeInfo.title,
              authors: volumeInfo.authors,
              pageCount: volumeInfo.pageCount,
              thumbnail: volumeInfo.imageLinks.medium
                ? volumeInfo.imageLinks.medium
                : volumeInfo.imageLinks.thumbnail
            }
          }
        })
      }
    }
  }
}
</script>

<style></style>

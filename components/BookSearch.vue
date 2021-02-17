<template>
  <div class="flex flex-col justify-center w-full">
    <div v-if="error" class="pb-2 text-base text-red">Error: {{ error }}</div>
    <div
      class="flex flex-col items-center justify-center w-full md:flex-row md:items-end"
    >
      <label for="bookSearch" class="flex flex-col w-full">
        <span class="pb-1">Book Search Criteria</span>
        <input
          id="bookSearch"
          v-model="searchTerm"
          class="px-3 py-2 text-white border bg-primary border-accent-3"
          placeholder="Title, Author, or ISBN(10/13)"
        />
      </label>

      <button
        class="w-full mt-3 md:mt-0 md:ml-3 pageturner-button md:w-auto"
        @click="search"
        :disabled="!searchTerm"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script>
import ENV from '~/env.js'

export default {
  data() {
    return {
      searchTerm: '',
      volumeIds: [],
      books: [],
      error: ''
    }
  },
  methods: {
    async search() {
      this.error = ''
      if (this.searchTerm) {
        const searchParams = `/volumes?q=${this.searchTerm}&intitle:${this.searchTerm}&inauthor:${this.searchTerm}&isbn:${this.searchTerm}&fields=items(id)&key=${ENV.google.booksApiKey}`
        let volumeIds = await this.$gbooks
          .get(searchParams)
          .then(response => {
            if (response.data && response.data.items.length > 0) {
              let ids = response.data.items.map(item => item.id)
              this.volumeIds = ids
              return ids
            }
          })
          .catch(error => {
            this.error = error.message
          })

        if (volumeIds && volumeIds.length > 0) {
          volumeIds.forEach(async id => {
            const volumeParams = `/volumes/${id}?fields=id, volumeInfo(title, authors, publisher, publishedDate, description, pageCount, industryIdentifiers, imageLinks(thumbnail, medium))&key=${ENV.google.booksApiKey}`
            await this.$gbooks.get(volumeParams).then(response => {
              if (response.data) {
                const volumeInfo = response.data.volumeInfo
                this.books.push({
                  title: volumeInfo.title,
                  authors: volumeInfo.authors,
                  isbns: volumeInfo.industryIdentifiers.map(
                    isbn => isbn.identifier
                  ),
                  pageCount: volumeInfo.pageCount,
                  publisher: volumeInfo.publisher,
                  publishedDate: volumeInfo.publishedDate,
                  thumbnail: volumeInfo.imageLinks.medium
                    ? volumeInfo.imageLinks.medium
                    : volumeInfo.imageLinks.thumbnail
                })
              }
            })
          })
        }
      }
    }
  }
}
</script>

<style></style>

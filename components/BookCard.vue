<template>
  <div
    class="relative block w-full my-4 bg-no-repeat bg-cover rounded-lg shadow-md bg-half-none h-400px min-h-300px"
  >
    <div
      class="absolute inset-0 h-full rounded-lg bg-book-gradient-to-b bg-blend-multiply"
    ></div>
    <div
      class="relative flex flex-col items-start float-right w-full max-w-full p-4 pt-0 mt-32"
    >
      <div class="w-full mb-8">
        <h1 class="text-4xl text-secondary">{{ book.title }}</h1>
        <h4 class="text-lg text-white">{{ book.author }}</h4>
        <div class="flex justify-between">
          <span class="text-white opacity-75 text-md"
            >{{ completedPages }}/{{ book.pageCount }} Pages</span
          >
          <div>
            <span class="text-white opacity-75 text-md">
              {{ completionPercentage }}%
            </span>
            <fa
              v-if="isCompleted"
              class="text-accent-3"
              :icon="['fas', 'book']"
            />
            <fa
              v-if="isReading"
              class="text-accent-1"
              :icon="['fas', 'bookOpen']"
            />
          </div>
        </div>
      </div>
      <div>
        <span></span>
      </div>
      <div class="flex items-end w-full">
        <nuxt-link
          class="px-4 py-2 text-white border-2 border-white hover:text-secondary hover:border-secondary"
          to="/"
          >View Book Info</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: Object
  },
  computed: {
    latestEntry() {
      const entriesCount = this.book.entries.length
      return this.book.entries && entriesCount > 0
        ? this.book.entries[entriesCount - 1]
        : null
    },
    completedPages() {
      return this.latestEntry && this.latestEntry.endPage
        ? this.latestEntry.endPage
        : 0
    },
    completionPercentage() {
      const totalPages = this.book.pageCount || 0
      if (this.latestEntry && this.latestEntry.endPage && totalPages > 0) {
        let percentage = (
          (this.latestEntry.endPage / totalPages) *
          100
        ).toFixed(2)
        return percentage
      }
      return '0'
    },
    isCompleted() {
      return this.completedPages === this.book.pageCount ? true : false
    },
    isReading() {
      return this.completedPages > 0 && !this.isCompleted ? true : false
    }
  }
}
</script>
<style></style>

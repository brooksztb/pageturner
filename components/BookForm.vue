<template>
  <form
    name="add-book"
    class="flex flex-col justify-start w-full h-full px-6 pt-12 pb-8 md:pt-4"
  >
    <span class="text-2xl text-secondary">Add New Book</span>
    <label for="title" class="flex flex-col py-2">
      <span class="pb-1">* Title</span>
      <input
        id="title"
        class="px-2 py-1 text-white border bg-primary border-accent-3"
        v-model="book.title"
        type="text"
      />
    </label>
    <label for="authors" class="flex flex-col py-2">
      <span class="pb-1">* Author(s)</span>
      <div
        class="w-full px-3 py-1 text-white border bg-primary border-accent-3"
      >
        <div
          v-for="(author, index) in book.authors"
          :key="author"
          class="inline-block px-2 mr-2 text-primary bg-accent-3"
        >
          <span class="opacity-75 cursor-pointer" @click="removeAuthor(index)"
            >x</span
          >
          {{ author }}
        </div>
        <input
          id="authors"
          class="border-none outline-none bg-primary"
          placeholder="Enter an author"
          type="text"
          @keydown.enter="addAuthor"
          @keydown.188="addAuthor"
          @keydown.delete="removeLastAuthor"
        />
      </div>
    </label>
    <label for="isbn" class="flex flex-col py-2">
      <span class="pb-1">* ISBN (10/13)</span>
      <input
        id="isbn"
        class="px-2 py-1 text-white border bg-primary border-accent-3"
        v-model="book.isbn"
        type="text"
      />
    </label>
    <label for="pageCount" class="flex flex-col py-2">
      <span class="pb-1">* Page Count</span>
      <input
        id="pageCount"
        class="px-2 py-1 text-white border bg-primary border-accent-3"
        v-model="book.pageCount"
        type="number"
        min="0"
      />
    </label>
    <label for="thumbnail" class="flex flex-col py-2">
      <span class="pb-1">Thumbnail Link</span>
      <input
        id="thumbnail"
        class="px-2 py-1 text-white border bg-primary border-accent-3"
        v-model="book.thumbnail"
        type="text"
      />
    </label>
    <div class="flex items-center py-4 mx-auto">
      <button class="mx-4 pageturner-button" @click.prevent="$emit('cancel')">
        Cancel
      </button>
      <button class="mx-4 pageturner-button" @click="addBook">Add</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      book: {
        title: '',
        authors: [],
        isbn: '',
        pageCount: 0,
        thumbnail: ''
      }
    }
  },
  methods: {
    addBook() {
      this.$emit('add', this.book)
    },
    addAuthor(event) {
      event.preventDefault()
      var val = event.target.value.trim()
      if (val.length > 0) {
        this.book.authors.push(val)
        event.target.value = ''
      }
    },
    removeAuthor(index) {
      this.book.authors.splice(index, 1)
    },
    removeLastAuthor(event) {
      if (event.target.value.length === 0) {
        this.removeAuthor(this.book.authors.length - 1)
      }
    }
  }
}
</script>

<style></style>

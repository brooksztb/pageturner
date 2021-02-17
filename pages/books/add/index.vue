<template>
  <div class="flex items-center justify-center ">
    <div
      class="flex flex-col items-center justify-center w-full md:max-w-500px "
    >
      <transition
        enter-active-class="transition-all duration-500 ease-in-out"
        leave-active-class="transition-all duration-500 ease-in-out"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="message" class="flex items-center text-2xl text-green">
          <fa class="mr-2" :icon="['far', 'check-square']" size="lg" />
          <span>{{ message }}</span>
        </div>
      </transition>

      <book-search />
      <span class="py-5 text-lg text-secondary">or</span>
      <button
        class="w-full pageturner-button md:w-auto"
        @click="toggleManualView"
      >
        Add Book Manually
      </button>
    </div>
    <transition
      enter-active-class="transition-all duration-150 ease-in-out"
      leave-active-class="transition-all duration-150 ease-in-out"
      enter-class="invisible opacity-0"
      enter-to-class="visible opacity-100"
      leave-class="visible opacity-100"
      leave-to-class="invisible opacity-0"
    >
      <div v-if="manualView" class="relative z-1000">
        <div
          class="fixed inset-0 flex items-center justify-center w-screen h-screen overflow-x-hidden overflow-y-scroll z-100"
        >
          <div
            class="relative w-full h-full px-6 pt-4 pb-8 bg-black rounded md:min-w-320px md:max-w-500px md:max-h-550px"
          >
            <button
              class="absolute top-0 right-0 flex items-center mt-4 mr-6"
              @click="toggleManualView"
            >
              <span class="sr-only">Close</span>
              <fa :icon="['fas', 'times']" size="2x" />
            </button>
            <book-form @cancel="toggleManualView" @add="addBook" />
          </div>
        </div>
        <div
          role="button"
          @click="toggleManualView"
          class="fixed top-0 left-0 hidden w-screen h-screen md:block pointer-events-all bg-modal-gradient bg-blend-multiply z-99"
        ></div>
      </div>
    </transition>
  </div>
</template>

<script>
import BookSearch from '~/components/BookSearch.vue'
import BookForm from '~/components/BookForm.vue'

export default {
  data() {
    return {
      manualView: false,
      message: ''
    }
  },
  methods: {
    toggleManualView() {
      this.manualView = !this.manualView
    },
    addBook() {
      const addedBookMessage = this.$store.dispatch('addNewBook')

      if (addedBookMessage) {
        this.message = addedBookMessage
      }
    }
  },
  components: {
    BookSearch,
    BookForm
  },
  watch: {
    message(val) {
      if (val) {
        window.setTimeout(() => (this.message = ''), 5000)
      }
    }
  }
}
</script>

<style></style>

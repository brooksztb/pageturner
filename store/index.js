export const state = () => ({
  books: [],
  averagePPM: 0, //pages per minute
  totalPagesRead: 0,
  pagesReadByYear: [],
  totalReadTime: 0, //in minutes,
  readTimeByYear: []
})

export const actions = {
  async fetchAllBooks({ commit }) {
    const { allBooks } = await this.$axios.$get(
      '/.netlify/functions/fetch_all_books'
    )

    if (allBooks && allBooks.length > 0) {
      commit('SET_BOOKS', allBooks)
    }
  },
  async addNewBook({ commit }, book) {
    const response = await this.$axios
      .$post('/.netlify/functions/add-book', book)
      .then(res => {
        if (res && res.data.insert_books_one) {
          commit('ADD_BOOK', res.data.insert_books_one)
        }
      })
  }
}

export const mutations = {
  SET_BOOKS(state, books) {
    state.books = books
  },
  ADD_BOOK(state, book) {
    state.books.push(book)
  },
  REMOVE_BOOK(state, book) {
    state.books.splice(state.books.indexOf(book), 1)
  }
}

export const getters = {
  getAllBooksByTitle: state => {
    return state.books.sort((bookA, bookB) => {
      var titleA = bookA.title.toUpperCase() // ignore upper and lowercase
      var titleB = bookB.title.toUpperCase() // ignore upper and lowercase
      if (titleA < titleB) {
        return -1
      }
      if (titleA > titleB) {
        return 1
      }

      // titles must be equal
      return 0
    })
  }
}

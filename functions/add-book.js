const { hasuraRequest } = require('./util/hasura')
exports.handler = async event => {
  const { book } = JSON.parse(event.body)

  const data = await hasuraRequest({
    query: `
        mutation AddBook($book: book_insert_input = {}) {
            insert_books_one(object: $book) {
                id
                title
                authors
                isbns
                page_count
                thumbnail
            }
        }
      `,
    variables: {
      book
    }
  })

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}

import { v4 as uuidv4 } from 'uuid'
const { hasuraRequest } = require('./util/hasura')

exports.handler = async event => {
  const { book } = JSON.parse(event.body)

  //generate a random uuid for our new book
  book.id = uuidv4()

  const data = await hasuraRequest({
    query: `
        mutation AddBook($book: book_insert_input = {}) {
            addedBook: insert_books_one(object: $book) {
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

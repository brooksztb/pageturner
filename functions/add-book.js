import { v4 as uuidv4 } from 'uuid'
const { hasuraRequest } = require('./util/hasura')

exports.handler = async event => {
  const { book } = JSON.parse(event.body)

  //generate a random uuid for our new book
  book.id = uuidv4()

  const data = await hasuraRequest({
    query: `
        mutation AddBook($book: books_insert_input = {}) {
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
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': 'POST',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    //   'Content-Type': 'application/json'
    // },
    body: JSON.stringify(data.addedBook)
  }
}

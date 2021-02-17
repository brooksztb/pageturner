const faunadb = require('faunadb')
exports.handler = async event => {
  const q = faunadb.query
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY
  })

  console.log(event)
  const { book } = event.queryStringParameters
  if (!book) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Book not provided in request'
      })
    }
  }

  const doesDocExist = book.isbns.forEach(async isbn => {
    await client.query(q.Exists(q.Match(q.Index('books_by_isbn'), isbn)))
  })

  if (!doesDocExist) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Book does not exist in database'
      })
    }
  }

  const booksCollection = await client.query(q.Get(q.Collection('books')))

  if (!booksCollection) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'No Collection titled "books" exists in database'
      })
    }
  }

  const addedBook = await client
    .query(
      q.Create(booksCollection.ref, {
        data: {
          title: book.title,
          authors: book.authors,
          isbns: book.isbns,
          publisher: book.publisher,
          pageCount: book.pageCount,
          thumbnail: book.thumbnail,
          entries: []
        }
      })
    )
    .then(ret => {
      return ret
    })

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `${book.title} by ${book.authors.join(
        ', '
      )} successfully added to collection!`,
      addedBook
    })
  }
}

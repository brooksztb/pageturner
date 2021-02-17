const faunadb = require('faunadb')
exports.handler = async event => {
  const q = faunadb.query
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY
  })

  const { isbn } = event.queryStringParameters

  if (!isbn) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Book isbn not provided'
      })
    }
  }

  const doesDocExist = await client.query(
    q.Exists(q.Match(q.Index('books_by_isbn'), isbn))
  )

  if (!doesDocExist) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Book does not exist in database'
      })
    }
  }

  const book = await client
    .query(q.Get(q.Match(q.Index('books_by_isbn'), isbn)))
    .then(document => {
      return document.data
    })

  return {
    statusCode: 200,
    body: JSON.stringify({ book })
  }
}

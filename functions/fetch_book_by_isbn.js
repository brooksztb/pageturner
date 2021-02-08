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
    await client.query(
      q.Create(q.Collection('books'), {
        data: { isbn: isbn, title: '', author: '', entries: [] }
      })
    )
  }

  const document = await client.query(
    q.Get(q.Match(q.Index('books_by_isbn'), isbn))
  )

  return {
    statusCode: 200,
    body: JSON.stringify({
      title: document.data.title,
      author: document.data.author,
      isbn: document.data.isbn
    })
  }
}

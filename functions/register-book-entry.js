const faunadb = require('faunadb')
exports.handler = async event => {
  const q = faunadb.query
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY
  })

  const { isbn, title, author, entry } = event.queryStringParameters
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
        data: { isbn: isbn, title: title, author: author, entries: [] }
      })
    )
  }

  const document = await client.query(
    q.Get(q.Match(q.Index('books_by_isbn'), isbn))
  )

  await client.query(
    q.Update(document.ref, {
      data: {
        entries: document.data.entries.push(entry)
      }
    })
  )

  const updatedDocument = await client.query(
    q.Get(q.Match(q.Index('books_by_isbn'), slug))
  )

  return {
    statusCode: 200,
    body: JSON.stringify({
      entries: updatedDocument.data.entries
    })
  }
}

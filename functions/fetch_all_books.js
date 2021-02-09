const faunadb = require('faunadb')
exports.handler = async event => {
  const q = faunadb.query
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY
  })

  const allBooks = await client
    .query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('books')), { size: 1000 }),
        q.Lambda(x => q.Get(x))
      )
    )
    .then(documents => {
      return documents.data.map(document => {
        return {
          title: document.data.title,
          author: document.data.author,
          isbn: document.data.isbn,
          pageCount: document.data.pageCount,
          entries: document.data.entries
        }
      })
    })

  return {
    statusCode: 200,
    body: JSON.stringify({ allBooks })
  }
}

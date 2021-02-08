const faunadb = require('faunadb')
exports.handler = async event => {
  const q = faunadb.query
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY
  })

  const documents = await client
    .query(q.Get(q.Match(q.Index('all_books'))))
    .then(documents => {
      return documents.map(document => {
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
    body: JSON.stringify(documents)
  }
}

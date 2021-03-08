import { v4 as uuidv4 } from 'uuid'
const { hasuraRequest } = require('./util/hasura')
exports.handler = async event => {
  const { entry } = JSON.parse(event.body)

  //generate a random uuid for our new entry
  entry.id = uuidv4()

  const data = await hasuraRequest({
    query: `
        mutation AddBookEntry($entry: book_entries_insert_input = {}) {
            addedBookEntry: insert_book_entries_one(object: $entry){
                id
                book_id
                date
                minutes
                pages
            }
        }
      `,
    variables: {
      entry
    }
  })

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}

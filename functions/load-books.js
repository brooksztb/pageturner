const { hasuraRequest } = require('./util/hasura')

exports.handler = async event => {
  const data = await hasuraRequest({
    query: `
        query AllBooks {
            books {
                title
                thumbnail
                page_count
                isbns
                id
                authors
                stats {
                completion_percentage
                minutes_to_complete
                page_per_minute
                pages_read
                read_minutes
                }
                entries {
                date
                id
                minutes
                pages
                }
            }
        }
      `,
    variables: {}
  })

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}

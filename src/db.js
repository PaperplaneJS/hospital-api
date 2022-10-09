const { MongoClient } = require('mongodb')

let mongoDB = null

async function connect() {
  const mongoURL =
    process.env.NODE_ENV === 'production'
      ? 'mongodb://root:qwer1234@mongo:27017/'
      : 'mongodb://root:qwer1234@localhost:27017/'

  const client = new MongoClient(mongoURL)
  await client.connect()
  mongoDB = client.db('hospital')
}

function getDB() {
  return mongoDB
}

module.exports = {
  getDB,
  connect
}

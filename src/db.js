const { MongoClient } = require('mongodb')

const mongoDBHost = process.env.NODE_ENV === 'production' ? 'mongo' : 'localhost'

let mongoDB = null

async function connect() {
  const mongoURL = 'mongodb://root:qwer1234@' + mongoDBHost + ':27017/'

  const client = new MongoClient(mongoURL)
  await client.connect()
  mongoDB = client.db('hospital')
}

/**
 * @typedef { import("mongodb").Db } Db
 * @return {Db}
 */
function getDB() {
  return mongoDB
}

module.exports = {
  getDB,
  connect,
}

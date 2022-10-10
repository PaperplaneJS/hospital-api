const { getDB } = require('../db')
const { server } = require('../server')

const db = getDB()

server.get('/test', function (req, res, next) {
  res.send('SUCCESS!!')

  return next()
})

server.get('/test-db', async function (req, res, next) {
  const testCollection = db.collection('test')
  const result = await testCollection.find({}).toArray()

  res.send(result)

  return next()
})

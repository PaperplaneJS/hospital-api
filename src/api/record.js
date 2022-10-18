const { getDB } = require('../db')
const { server } = require('../server')
const { successBody, errorBody } = require('../utils/response')
const { uuid } = require('../utils/uuid')

const db = getDB()

server.post('/addRecord', async function (req, res, next) {
  const recordBody = req.body
  recordBody._id = uuid()

  await db
    .collection('records')
    .insertOne(recordBody)
    .then(() => {
      res.send(successBody({ result: '已成功提交您的信息！' }))
    })
    .catch(() => {
      res.send(errorBody('新增信息时出现错误，请联系医生手动登记'))
    })

  return next()
})

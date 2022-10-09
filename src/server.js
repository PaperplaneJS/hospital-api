const { createServer, plugins } = require('restify')
const corsMiddleware = require('restify-cors-middleware')
const { connect } = require('./db')

const server = createServer({ name: 'hospital-be' })
const { preflight, actual } = corsMiddleware({ origins: [/.*/], credentials: true })

server.pre(preflight)
server.use(actual)

server.use(plugins.queryParser())
server.use(plugins.bodyParser())

module.exports = { server }

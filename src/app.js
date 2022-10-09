const { readdirSync } = require('fs')
const { resolve } = require('path')
const { connect } = require('./db')
const { server } = require('./server')

async function app() {
  await connect()

  for (const fileName of readdirSync(resolve(__dirname, './api'))) {
    require(resolve(__dirname, './api', fileName))
    console.log(`接口[${fileName}]已加载`)
  }

  server.listen(5505, '0.0.0.0', () => void console.log('服务器已成功开启'))
}

app()

// node 服务器
const http = require('http')
const port = 8000
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')


const server = http.createServer(function (request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  response.end('Hello\n Node')
})

server.listen(port)

console.log('Server running at http://10.0.203.83:8000')

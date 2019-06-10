const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const port = 8000
const hostName = '127.0.0.1'
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS')
  res.header('X-Powered-By', 'node.js')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

// 创建 get 接口
app.get('/', function (req, res) {
  // res.send('Hello, express')
  const file = path.join(__dirname, 'data/test1.json')  // __dirname 为当前运行 js 文件的目录
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
      res.send('文件读取失败')
    } else {
      res.send(data)
    }
  })
})

app.listen(port, function () {
  console.log(`Server running at ${port}`)
})

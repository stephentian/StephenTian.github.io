# 在 vue-cli3 中模拟 JSON 数据

### 1. 建立 json 文件

在项目中 建立一个 data 文件夹, 里面放 json 文件

![data 文件图](./data.png)

### 2. 建立 config 文件

在项目中 建立一个 vue.config.js 文件

### 3. 填写配置

```
// 模拟数据
const data1 = require('./data/test1.json')
const data2 = require('./data/test2.json')

module.exports = {
  devServer: {
    port: 8080,
    before(app) {
      app.get('/api/test1', (req, res) => {
        res.json(data1)
      });
      app.get('/api/test2', (req, res) => {
        res.json(data2)
      })
    }
  }
}
```

![config 配置图](./config.png)

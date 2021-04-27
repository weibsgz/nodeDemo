const express = require('express')
const fs = require('fs')
const path = require('path')
const port = 8000

const app = express()

// 设置模板引擎 路径是views目录下
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//form路由打开页面 是个表单 可提交文件  访问路由：http://localhost:8000/form/weibin
app.get('/form/:name', (req, res) => {
  const person = req.params.name

  const data = { age: 18, hobbie: ['eating', 'sleeping', 'working'] }

  //渲染数据并返回html.index.ejs文件
  res.render('index', { person: person, data: data })
})

app.listen(port, () => {
  console.log('server is running at port: ' + port)
})

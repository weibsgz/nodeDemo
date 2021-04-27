const express = require('express')
const path = require('path')
const app = express()

const todoControllers = require('./controllers/todoController.js')

//设置 使用ejs模板引擎
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//设置静态文件，比如图片所在的位置在public下 这样通过访问 localhost:30000/some.jpg 就能访问到图片了
app.use(express.static('./public'))

todoControllers(app)

app.listen(3000, () => {
  console.log(`server is running at port 3000`)
})

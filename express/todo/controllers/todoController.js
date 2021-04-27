//使用POST 好将请求参数挂在到req.body上
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const mongoose = require('mongoose')

//链接mlab.com  其中链接是注册账号后给的一个新手数据库
mongoose.connect(
  'mongodb+srv://weibsgz:wb123456@cluster0.x58m1.mongodb.net/Cluster0?retryWrites=true&w=majority'
)
//Mongoose 的一切始于 Schema。每个 schema 都会映射到一个 MongoDB collection
const Schema = mongoose.Schema

// 处理字段路径各种属性的定义
const todoSchema = new Schema({
  item: String,
})
// 通过操作model 来链接本地操作数据库
const Todo = mongoose.model('Todo', todoSchema)

// const data = [{ item: 'aaa' }, { item: 'bbb' }, { item: 'ccc' }]

function todoControllers(app) {
  app.get('/todo', (req, res) => {
    //从moongoose里查数据并渲染数据并返回html.index.ejs文件
    // find是查询语法
    Todo.find({}, (err, data) => {
      if (err) throw err
      res.render('todo', { todos: data })
    })
  })

  app.post('/todo', urlencodedParser, (req, res) => {
    //前端点击提交
    const pushData = req.body
    Todo(pushData).save((err) => {
      if (err) throw err
      console.log('item saved!')
      res.json({ code: 200 }) //需要返回值（随便什么） 前端才能进入到ajax的success
    })
  })

  app.delete('/todo/:item', (req, res) => {
    //   const deleteData = req.params.item
    //   const index = data.findIndex((item) => item.item == deleteData)
    //   data.splice(index, 1)

    Todo.remove({ item: req.params.item }, (err, data) => {
      if (err) throw err
      console.log('delete success!')
      res.json({ code: 200 })
    })
  })
}

module.exports = todoControllers

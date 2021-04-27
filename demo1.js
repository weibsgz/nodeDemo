const fs = require('fs')
const http = require('http')

const onRequest = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' })
  const readStream = fs.createReadStream(__dirname + '/index.html', 'utf-8')
  readStream.pipe(response)
}

const server = http.createServer(onRequest)

server.listen(3000, () => {
  console.log('http is running at 3000')
})

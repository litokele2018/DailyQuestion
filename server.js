const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  res.setHeader('access-control-allow-origin', '*')
  res.end('hello')
})

server.listen(3000, () => {
  console.log('正在监听3000端口')
})
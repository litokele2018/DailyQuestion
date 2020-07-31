// cluster 开启子进程Demo
const http = require('http')
// cpu的个数
const numCPUs = require('os').cpus().length
// 集群
const cluster = require('cluster')

if (cluster.isMaster) {
  console.log('Master proces id is', process.pid)
  // fork workers
  for (let i = 0; i < numCPUs; i++) {
    // 创建子进程
    cluster.fork()
  }
  cluster.on('exit', function(worker, code, signal) {
    console.log('worker process died,id', worker.process.pid)
  })
} else {
  // Worker可以共享同一个TCP连接
  // 这里是一个http服务器
  http.createServer(function(req, res) {
    res.writeHead(200)
    res.end('hello word')
  }).listen(8000)
}
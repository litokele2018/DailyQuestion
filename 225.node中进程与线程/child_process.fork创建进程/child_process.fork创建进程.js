// child_process.fork
// http://nodejs.cn/api/child_process.html#child_process_child_process

/* child_process.fork()： 衍生新的进程，进程之间是相互独立的，每
个进程都有自己的 V8 实例、内存，系统资源是有限的，
不建议衍生太多的子进程出来，通长根据系统** CPU 核心数**设置 */
const cpus = require('os').cpus()
console.log(cpus.length) // 2

const fork = require('child_process').fork()
const server = http.createServer((req, res) => {
  if (req.url == '/compute') {
    // 开起一个子进程
    const compute = fork('./fork_compute.js');
    compute.send('开启一个新的子进程');

    // 当一个子进程使用 process.send() 发送消息时会触发 'message' 事件
    compute.on('message', sum => {
      res.end(`Sum is ${sum}`);
      compute.kill();
    });

    // 子进程监听到一些错误消息退出
    compute.on('close', (code, signal) => {
      console.log(`收到close事件，子进程收到信号 ${signal} 而终止，
      退出码 ${code}`);
      compute.kill();
    })
  } else {
    res.end(`ok`);
  }
});
server.listen(3000, () => {
  console.log(`server started at http://localhost:${3000}`);
})
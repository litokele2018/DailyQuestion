// https://juejin.im/post/5d43017be51d4561f40adcf9
// 深入理解Node.js 中的进程与线程

// 进程，资源调度和分配的最小单元，应用程序 
// 线程，进行资源调度计算的最小单元

// 1.node 是单线程吗？ 
// 不是 node是封装的V8引擎，是js执行的容器，而js语言是单线程的

// 2.node 进行耗时的计算时，如果避免阻塞
// 利用cpu多核性质， 开启多个进程 多个线程

// 3.node 如何实现多进程的开启和关闭

// 4.node可以创建线程吗？

/**
 * Node 中最核心的是 v8 引擎，在 Node 启动后，会创建 v8 的实例，
 * 这个实例是多线程的。主线程：编译、执行代码。
 * 编译/优化线程：在主线程执行的时候，可以优化代码。
 * 分析器线程：记录分析代码运行时间，为 Crankshaft 优化代码执行提供依据。
 * 垃圾回收的几个线程。
 */



// 除了使用第三方模块，你们自己是否封装过一个多进程架构?

/**
 * node 中进程 process
 */
const http = require('http')

const server = http.createServer()

server.listen(3000, () => {
  process.title = '程序员成长指北测试进程'
  console.log('进程id', process.pid)
})

/**
 * 单线程，一个进程只开一个线程
 * 如果遇到一个比较耗时的计算过程 会造成阻塞
 * Node.js 虽然是单线程模型，但是其是基于事件驱动，异步非阻塞模式
 * 单核 cpu 采用单进程，单线程来进行开发
 * 多核 cpu 可以通过
 *   child_process.fork开启多个进程（多个进程，每个进程一个线程）
 */

// process 模块

process.env // 环境变量
process.nextTick // 放入微任务队列中， 优先级高于promise.then
process.pid // 获取当前进程的 id
process.ppid // 获取当前进程的父进程 id
process.cwd() // 获取当前进程工作的目录
process.platform // 当前进程运行的操作系统平台
process.uptime() // 当前进程已运行时间
process.title // 指定进程名称
//设计一个简单的任务队列, 要求分别在 1,3,4 秒后打印出 "1", "2", "3"

class Queue {
  constructor() {
    this.arr = []
  }
  task(duration, fn) {
    this.arr.push(() => setTimeout(fn, duration))
    return this
  }
  start() {
    this.arr.forEach(item => {
      item.call(null)
    })
  }
}

new Queue()
  .task(1000, () => {
    console.log(1)
  }).task(2000, () => {
    console.log(2)
  }).task(4000, () => {
    console.log(3)
  }).start()
class LimitedPromise {
  constructor(limit) {
    this._count = 0
    this.limit = limit
    this.taskQueue = []
  }

  call(caller, ...args) {
    return new Promise((resolve, reject) => {
      let task = this.createTask(caller, args, resolve, reject)
      if (this._count >= this.limit) {
        // 超过并发限制
        this.taskQueue.push(task)
      } else {
        task()
      }
    })
  }
  // 生产任务事件
  createTask(caller, args, resolve, reject) {
    return () => {
      caller(...args)
        .then(resolve)
        .catch(reject)
        .finally(() => {
          this._count--
          if (this.taskQueue.length) {
            let task = this.taskQueue.shift()
            task()
            this._count++
          }
        })
    }
  }
}
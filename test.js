class LimitPromise {
  constructor(limit) {
    this.limit = limit
    this.count = count
    this.tasksQueue = []
  }

  call(caller, ...args) {
    return new Promise((resolve, reject) => {
      let task = this.taskCreator(caller, args, resolve, reject)
      if (this.limit <= this.count) {
        this.tasksQueue.push(task)
      } else {
        task()
      }
    })
  }

  taskCreator(caller, args, resolve, reject) {
    return () => {
      caller(...args)
        .then(resolve)
        .catch(reject)
        .finally(() => {
          this.count--
          if (this.tasksQueue.length) {
            let task = this.tasksQueue.shift()
            task()
            this.count++
          }
        })
    }
  }
}
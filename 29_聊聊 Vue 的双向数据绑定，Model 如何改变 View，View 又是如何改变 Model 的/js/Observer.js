<<<<<<< HEAD
function defineReactive(data, key, val) {
  observer(val) // 递归查找
  let dep = new Dep() // 订阅这个属性的
  Object.defineProperty(data, key, {
    enumerable: true, //可以枚举
    configurable: true, // 对象的属性可以被删除 
    set(newVal) {
      val = newVal
      console.log(key + '被修改啦')
      dep.notify() // 数据被修改 通知各watcher
    },
    get() {
      console.log(key + '被获取了')
      if (Dep.target) { // 初始化 时 
        dep.addSub(Dep.target)
      }
      return val
    }
  })
}
// 检查是否为数组或对象
function checkType(data) {
  let type = Object.prototype.toString.call(data)
  if (type === '[object Array]' || type === '[object Object]') {
    return true
  }
  return false
}

// observer
function observer(data) {
  if (!data || !checkType(data)) { // 如果data不存在 或者不是数组或对象就返回 他的属性就不用监听了 因为他没有属性
    return
  }
  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key])
  })
=======
function defineReactive(data, key, val) {
  observer(val) // 递归查找
  let dep = new Dep() // 订阅这个属性的
  Object.defineProperty(data, key, {
    enumerable: true, //可以枚举
    configurable: true, // 对象的属性可以被删除 
    set(newVal) {
      val = newVal
      console.log(key + '被修改啦')
      dep.notify() // 数据被修改 通知各watcher
    },
    get() {
      console.log(key + '被获取了')
      if (Dep.target) { // 初始化 时 
        dep.addSub(Dep.target)
      }
      return val
    }
  })
}
// 检查是否为数组或对象
function checkType(data) {
  let type = Object.prototype.toString.call(data)
  if (type === '[object Array]' || type === '[object Object]') {
    return true
  }
  return false
}

// observer
function observer(data) {
  if (!data || !checkType(data)) { // 如果data不存在 或者不是数组或对象就返回 他的属性就不用监听了 因为他没有属性
    return
  }
  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key])
  })
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
}
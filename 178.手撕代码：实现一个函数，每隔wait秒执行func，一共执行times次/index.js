// 手撕代码：实现一个函数，每隔wait秒执行func，一共执行times次
function foo(fn, wait, times, ...args) {
  let p = {}
  let count = 0
  let fnx = () => {
    let timer = setTimeout(() => {
      fn.call(null, ...args)
      count++
      if (count === times) {
        clearTimeout(p.current)
      } else {
        fnx()
      }
    }, wait)
    p.current = timer
  }
  fnx()
}

function sayHello(name) {
  console.log(`hello ${name}`)
}

foo(sayHello, 500, 5, 'litokele')
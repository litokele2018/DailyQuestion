let promise = new Promise((resolve, reject) => {
  resolve(123)
})
let p2 = promise.then(res => {
  console.log(res)
})

setTimeout(() => {
  console.dir(p2) 
  debugger
})
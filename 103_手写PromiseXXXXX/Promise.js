<<<<<<< HEAD
let promise = new Promise((resolve, reject) => {
  resolve(123)
})
let p2 = promise.then(res => {
  console.log(res)
})

setTimeout(() => {
  console.dir(p2) 
  debugger
=======
let promise = new Promise((resolve, reject) => {
  resolve(123)
})
let p2 = promise.then(res => {
  console.log(res)
})

setTimeout(() => {
  console.dir(p2) 
  debugger
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
})
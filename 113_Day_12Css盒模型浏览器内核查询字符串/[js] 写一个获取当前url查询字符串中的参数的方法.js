<<<<<<< HEAD
// [js] 写一个获取当前url查询字符串中的参数的方法

let url = 'https://www.baidu.com?id=376762830&name=litokele&age=18&gender=nan'

function getParams(url) {
  let data = url.split('?')[1]
  let keyAndValue = data.split('&')
  let obj = {}
  keyAndValue.forEach(item => {
    let xx = item.split('=')
    let key = xx[0]
    let value = xx[1]
    obj[key] = value
  })
  return obj
}
getParams(url)
debugger


=======
// [js] 写一个获取当前url查询字符串中的参数的方法

let url = 'https://www.baidu.com?id=376762830&name=litokele&age=18&gender=nan'

function getParams(url) {
  let data = url.split('?')[1]
  let keyAndValue = data.split('&')
  let obj = {}
  keyAndValue.forEach(item => {
    let xx = item.split('=')
    let key = xx[0]
    let value = xx[1]
    obj[key] = value
  })
  return obj
}
getParams(url)
debugger


>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28

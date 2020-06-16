<<<<<<< HEAD
// match() 方法检索返回一个字符串匹配正则表达式的的结果。

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match
function find(S, T) {
  return S.match(T) // 如果传入的不是正则， 会调用 new RegExp(obj) 隐式转化为正则
}

let s = 'asdasfgsdgdcvdfasdas'
let t = 'cv'

console.log(find(s, t)) // [ 'cv', index: 11, input: 'asdasfgsdgdcvdfasdas', groups: undefined ]
=======
// match() 方法检索返回一个字符串匹配正则表达式的的结果。

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match
function find(S, T) {
  return S.match(T) // 如果传入的不是正则， 会调用 new RegExp(obj) 隐式转化为正则
}

let s = 'asdasfgsdgdcvdfasdas'
let t = 'cv'

console.log(find(s, t)) // [ 'cv', index: 11, input: 'asdasfgsdgdcvdfasdas', groups: undefined ]
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28

// search() 方法执行正则表达式和 String 对象之间的一个搜索匹配。
function find(S, T) {
  return S.search(T) // 如果传入的不是正则， 会调用 new RegExp(obj) 隐式转化为正则
}

let s = 'asdasfgsdgd cv dfasdas'
let t = 'cv'

console.log(find(s, t))
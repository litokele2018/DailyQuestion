<<<<<<< HEAD
// slice 方法  可以 取出 一部分
const find = (S, T) => {
  if (S.length < T.length) return -1
  for (let i = 0; i < S.length; i++) {
    if (S.slice(i, i + T.length) === T) return i // 将字符串 按 短的那个长度进行遍历匹配
  }
  return -1
}
let s = 'asdasfgsdgdcvdfasdas'
let t = 'cv'

=======
// slice 方法  可以 取出 一部分
const find = (S, T) => {
  if (S.length < T.length) return -1
  for (let i = 0; i < S.length; i++) {
    if (S.slice(i, i + T.length) === T) return i // 将字符串 按 短的那个长度进行遍历匹配
  }
  return -1
}
let s = 'asdasfgsdgdcvdfasdas'
let t = 'cv'

>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28
console.log(find(s, t))
/* [js] 统计某一字符或字符串在另一个字符串中出现的次数 */
function search(s, p) {
  let n = p.length
  let count = 0
  for (let i = 0; i < s.length - n + 1; i++) {
    let substr = s.substr(i, n)
    if (substr === p) {
      count++
    }
  }
  return count
}
let s = 'asdasdas'
let p = 'as'
search(s, p)
debugger
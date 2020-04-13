/* [js] 写一个方法把下划线命名转成大驼峰命名 */

function underlineToCamelCase(v) {
  let s = []
  for (let i = 0; i < v.length; i++) {
    if (v[i] === '_') {
      s[i + 1] = v[i + 1].toUpperCase()
      i++
    } else {
      s[i] = v[i]
    }
  }
  return s.join('')
}
let v = 'say_hello'
underlineToCamelCase(v)
debugger
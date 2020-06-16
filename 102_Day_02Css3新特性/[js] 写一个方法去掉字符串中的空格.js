function trim(str) {
  let s = ''
  for (let item of str) {
    if (item !== ' ') {
      s += item
    }
  }
  return s
}

let str = ' lito kele hello '
trim(str)
debugger
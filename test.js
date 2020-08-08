// es5模拟模板字符串

let name = 'litokele'
let age = 18
let str = 'hello ${name} ${age}'

function model(str) {
  let reg = /\$\{([^{}]+)\}/g
  let match = str.replace(reg, (match, $1) => {
    return eval($1)
  })
  console.log(match)
}


model(str)

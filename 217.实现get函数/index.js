const o = {
  a: {
    b: {
      c: 1
    },
    d: {
      e: 123
    }
  }
}

function get(obj, str) {
  let res = obj
  str = str.split('.')
  for (let i = 0; i < str.length; i++) {
    res = res[str[i]]
    if (!res) throw new Error('meiyou')
  }
  return res
}

let x = get(o, 'a.d.e') //1
console.log(x)
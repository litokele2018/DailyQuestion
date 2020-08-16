let arr = [1, 2, [3, 4, [5, { a: 1 },
  [6]
]]]

function flat(arr) {
  return arr.reduce((acc, cur) => {
    let v = Object.prototype.toString.call(cur)
    if (v === '[object Array]') {
      return acc.concat(flat(cur))
    } else {
      acc.push(cur)
      return acc
    }
  }, [])
}

let res = flat(arr)
console.log(res)
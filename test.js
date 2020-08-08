// 千分位 1231239812492103.123124
function splitThousand(num) {
  let de = '',
    first = '',
    end = ''
  if (num.includes('.')) {
    de = '.' + num.split('.')[1]
    num = num.split('.')[0]
  }
  if (num.length <= 3) return num + de
  let n = num.length % 3
  if (n !== 0) {
    first = num.substr(0, n) + ','
  }
  end = num.substr(n)
  end = end.match(/\d{3}/g).join(',')
  return first + end + de
}

let num = '31232.123124'
let res = splitThousand(num)
console.log(res)
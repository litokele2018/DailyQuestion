// 硬币找零问题：有面额为d1...dn的硬币，和要找零的钱数，找出所需最小硬币个数的方案，
// 例如，美国有以下面额(硬币）：d1=1, d2=5, d3=10, d4=25，如果要找36美分的零钱，所需最少硬币是 [1, 10, 25]，
// 即满足如下输出：

class MinCoinChange {
  // to do
  constructor(arr) {
    this.coins = arr
    this.min = Infinity
    this.res = []
  }

  makeChange(money) {
    this.handler(this.coins, money, [])
    return this.res
  }

  handler(arr, restMoney, temp) {
    if (restMoney === 0) {
      if (temp.length < this.min) {
        this.min = temp.length
        this.res = [...temp]
      }
      return
    }

    let len = arr.length
    if (!len) return

    for (let i = 0; i < len; i++) {
      let coin = arr[i]
      let maxCount = Math.floor(restMoney / coin)
      let preTemp = [...temp]

      for (let j = 0; j <= maxCount; j++) {
        if (j !== 0) preTemp.push(coin)
        let temp = [...preTemp]
        this.handler(arr.slice(i + 1), restMoney - coin * j, temp)
      }
    }
  }
}

const minCoinChange = new MinCoinChange([1, 5, 10, 25]);
console.log(minCoinChange.makeChange(36)) // [1, 10, 25]
const minCoinChange2 = new MinCoinChange([1, 3, 4]);
console.log(minCoinChange2.makeChange(6)) // [3, 3]
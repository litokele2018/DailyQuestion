var hasGroupsSizeX = function(deck) {
  let set = new Set()
  let uni = []

  deck.forEach(item => {
    if (!set.has(item)) {
      set.add(item)
      uni.push(item)
    }
  })
  let arr = []
  for (let i = 0, length = uni.length; i < length; i ++) {
      let count = 0
      for (let j = 0; j < deck.length; j ++) {
          if (uni[i] === deck[j]) {
              count ++
          }
      }
      arr.push(count)
  }
  arr.sort((a, b) => {
      return a - b
  })
  debugger
  if (arr[0] === 1) {
      return false
  }
  for (let j = 2; j <= arr[0]; j ++) {
    let count = 0
    for (let i in arr) {
      if (arr[i] % j === 0) {
        count ++
      }
      if (count === arr.length) {
        return true
      }
    }
  }
  return false
};

hasGroupsSizeX([1,2,3,4,4,3,2,1])
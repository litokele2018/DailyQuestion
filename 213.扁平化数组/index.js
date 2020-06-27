// js实现[1,[2,3],[[4],[4,[4,5]]]].unique() -> [1,2,3,4,5]

Array.prototype.unique = function() {
  let arr = this
  return arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      return [...acc, ...Array.prototype.unique.call(cur)]
    } else {
      return [...acc, cur]
    }
  }, [])
}
let x = [1, [2, 3],
  [
    [4],
    [4, [4, 5]]
  ]
].unique()
console.log(x)
/* 
三千五百四十一万四千零一->35414001

三千五百四十一万->35410000

八千万->80000000
*/

function changeToNum(s) {
  let map = {
    '一': 1,
    '二': 2,
    '三': 3,
    '四': 4,
    '五': 5,
    '六': 6,
    '七': 7,
    '八': 8,
    '九': 9,
    '零': 0,
  }
  return handler(s, map)
}

function handler(s, map) {
  if (!s.length) return 0
  let index1 = s.indexOf('万')
  let res = 0
  if (index1 !== -1) {
    res += 10000 * handler(s.substring(0, index1), map)
    index1++
  } else {
    index1 = 0
  }

  let index2 = s.indexOf('千', index1)
  if (index2 !== -1) {
    res += 1000 * handler(s.substring(index1, index2), map)
    index2++
  } else {
    index2 = index1
  }

  let index3 = s.indexOf('百', index2)
  if (index3 !== -1) {
    res += 100 * handler(s.substring(index2, index3), map)
    index3++
  } else {
    index3 = index2
  }

  let index4 = s.indexOf('十', index3)
  if (index4 !== -1) {
    res += 10 * handler(s.substring(index3, index4), map)
  }
  map[s[s.length - 1]] && (res += map[s[s.length - 1]])
  return res
}

let n = changeToNum('八千万') // 35410000
debugger
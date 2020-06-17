// 请设计gen_url(requireTree)， 返回值会如上所示的combo url。
// requireTree的数据结构如下页。
/*  */

requireTree = {
  "name": "page.js",
  "require": [{
    "name": "A.js",
    "require": [{
      "name": "C.js",
      "require": [{
        "name": "F.js"
      }]
    }]
  }, {
    "name": "B.js",
    "require": [{
      "name": "D.js",
      "require": [{
        "name": "F.js"
      }]
    }, {
      "name": "E.js",
      "require": []
    }]
  }]
}

function search(tree) {
  let res = []
  let set = new Set()
  handler(tree, res, set)
  res.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))
  res.push(tree.name)
  return res
}

function handler(tree, res, set) {
  if (tree['require']) {
    tree['require'].forEach(item => {
      handler(item, res, set)
      if (!set.has(item.name)) {
        res.push(item.name)
        set.add(item.name)
      }
    })
  }
}
let res = search(requireTree)
console.log(res)
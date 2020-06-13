function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function Serialize(pRoot) {
  // write code here
  if (!pRoot) return ''
  let res = ''
  let queue = [pRoot]
  while (queue.length) {
    let node = queue.shift()
    if (node === '#,') {
      res += '#,'
      continue
    }
    res += node.val + ','
    if (!node.left && !node.right) {
      continue
    }
    if (node.left) {
      queue.push(node.left)
    } else {
      queue.push('#,')
    }

    if (node.right) {
      queue.push(node.right)
    } else {
      queue.push('#,')
    }
  }
  return res
}

function Deserialize(s) {
  // write code here
  if (!s.length) return null
  let arr = s.split(',')
  // 最后一个不要
  arr.pop()
  let root = new TreeNode(arr.shift())
  let queue = [root]
  let tempQueue = []
  while (arr.length) {
    while (queue.length) {
      let pre = queue.shift()
      let left = arr.shift()
      let right = arr.shift()
      if (left === '#') {
        pre.left = null
      } else {
        let leftNode = new TreeNode(left)
        pre.left = leftNode
        tempQueue.push(leftNode)
      }
      if (right === '#') {
        pre.right = null
      } else {
        let rightNode = new TreeNode(right)
        pre.right = rightNode
        tempQueue.push(rightNode)
      }
      if (!arr.length) break
      if (queue.length === 0) {
        queue = tempQueue
        tempQueue = []
      }
    }
  }
  return root
}
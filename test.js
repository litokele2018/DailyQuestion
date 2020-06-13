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
    if (node === '#') {
      res += '#'
      continue
    }
    res += node.val
    if (!node.left && !node.right) {
      continue
    }
    if (node.left) {
      queue.push(node.left)
    } else {
      queue.push('#')
    }

    if (node.right) {
      queue.push(node.right)
    } else {
      queue.push('#')
    }
  }
  return res
}

function Deserialize(s) {
  // write code here
  if (!s.length) return null
  let arr = s.split('')
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

let x = new TreeNode(1)
x.left = new TreeNode(2)
x.left.left = new TreeNode(4)
x.right = new TreeNode(3)
x.right.left = new TreeNode(6)
x.right.right = new TreeNode(7)

let s = Serialize(x)
let node = Deserialize(s)
debugger
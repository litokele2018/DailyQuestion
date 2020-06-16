<<<<<<< HEAD
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let res = ''
  let queue = [root]
  while (queue.length) {
    let node = queue.shift()
    if (node === '#') {
      res += '.#'
      continue
    } else {
      res += '.' + node.val
    }
    node.left ? queue.push(node.left) : queue.push('#')
    node.right ? queue.push(node.right) : queue.push('#')
  }
  return res
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (!data) return null
  data = data.split('.')
  data.shift()
  let head = new TreeNode(data.shift())
  let preLevelNode = [head]
  while (data.length) {
    let val1 = data.shift()
    let val2 = data.shift()
    let preNode = preLevelNode.shift()
    if (val1 !== '#') {
      preNode.left = new TreeNode(val1)
      preLevelNode.push(preNode.left)
    }
    if (val2 !== '#') {
      preNode.right = new TreeNode(val2)
      preLevelNode.push(preNode.right)
    }
  }
  return head
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let node = new TreeNode(5)
node.left = new TreeNode(2)
node.right = new TreeNode(3)
node.right.left = new TreeNode(2)
node.right.left.left = new TreeNode(3)
node.right.left.right = new TreeNode(1)
node.right.right = new TreeNode(4)

deserialize(serialize(node))[5, 2, 3, null, null, 2, 4, 3, 1]
=======
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
>>>>>>> a348e00a339fc4441684e34028cd39c7cf1d6d28

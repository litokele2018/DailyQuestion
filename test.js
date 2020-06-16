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
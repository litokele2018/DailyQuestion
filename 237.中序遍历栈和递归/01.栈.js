// 中序遍历
function inorder(root, op) {
  let cur = root;
  let stack = [];
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    op.call(null, cur);
    cur = cur.right;
  }
}
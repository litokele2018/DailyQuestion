// utils
// 创建节点
function createElm() {}
// 删除节点
function removeNode() {}
// 更新节点
function patchVnode(oldVnode, vnode) {
  // 比较两个子节点是否相同
  if (oldVnode === vnode) return
  // 获取两个节点的子节点
  const oldChild = oldVnode.children
  const newChild = vnode.children
  if (!vnode.text) {
    if (oldChild && newChild) {
      // 都有子节点
      if (oldChild !== newChild) {
        // 循环比较更新子节点
        updateChildren()
      }
    } else if (oldChild) {
      // 只有old 节点有子节点
      // 新节点没有子节点 直接把子节点清空
      removeNodes()
    } else if (newChild) {
      // 只有new 节点有子节点 因为old可能为文本 这里需要清空
      if (oldVnode.text) oldVnode.elm.textContent = ''
      // 将新节点们 添加进去
      addVnodes()
    } else if (oldVnode.text) {
      // 都没有子节点 但是 old中有文本 清空文本
      oldVnode.elm.textContent = ''
    }
  } else if (oldVnode.text !== vnode.text) {
    // 同时都有文本， 还不一样
    // 若不相同：则用vnode的text替换真实DOM的文本
    oldVnode.elm.textContent = vnode.text
  }
}
// 循环更新子节点
function updateChildren() {
  // 获取新旧首尾节点
  let oldStartIndex = 0
  let oldEndIndex = oldChild.length - 1
  let oldStartVNode = oldChild[0]
  let oldEndVNode = oldChild[oldEndIndex]

  let newStartIndex = 0
  let newEndIndex = newChild.length - 1
  let newStartVNode = newChild[0]
  let newEndVNode = newChild[newEndIndex]

  // 进行节点对比
  while (oldStartIndex < oldEndIndex && newStartIndex < newEndIndex) {
    if (!oldStartVNode) {
      // 如果没有 匹配下一个
      oldStartVNode = oldChild[oldStartIndex++]
    } else if (!oldEndVNode) {
      // 如果没有 匹配下一个
      oldEndVNode = oldChild[oldEndIndex--]
    } else if (sameVNode(oldStartVNode, newStartVNode)) {

    } else if (sameVNode(oldEndVNode, newEndVNode)) {

    } else if (sameVNode(oldStartVNode, newEndVNode)) {

    } else if (sameVNode(oldEndVNode, newStartVNode)) {

    } else {
      // 常规比较
      // 如果在oldChild中找不到newChild的节点
      // 通过key 获取index
      if (isUndef(idxInOld)) {
        createElm()
      } else {
        // 如果找到了
        let oldVnode = oldCh[idxInOld]
        if (sameVNode(oldVnode, newStartVNode)) {
          patchVnode(oldVnode, newStartVnode)
        } else {
          createElm()
        }
      }
      newStartVnode = newCh[newStartIdx++]
    }
    if (oldStartIndex > oldEndIndex) {
      // 插入新节点中剩余的所有
    } else if (newStartIndex > newEndIndex) {
      // 清除剩余未匹配的旧节点
    }
  }
}
/**
 * Given a tree can you validate if its same
 */

let isSameTree = (p, q) => {
  if (!p && !q) {
    return false
  }
  if (!p || (!q && p.val !== q.val)) {
    return false
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

let p = {
    val: 2
}
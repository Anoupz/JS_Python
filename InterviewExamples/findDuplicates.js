/**
 * Given an array of integers find the freq of the target
 */

function findFreq(arr, target) {
  let count = 0

  for (let x of arr) {
    if (x === target) {
      count++
    }
  }

  return count
}

function findFreq2(arr, target) {
  const freqMap = new Map()

  for (let x of arr) {
    freqMap.set(x, (freqMap.get(x) || 0) + 1)
  }

  return freqMap.get(target)
}

console.log(findFreq([1, 2, 3, 7, 7, 7, 9, 9], 7))
console.log(findFreq2([1, 2, 3, 7, 7, 7, 9, 9], 7))

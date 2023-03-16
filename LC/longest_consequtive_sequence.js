/**
 * Given unsorted array
 * find the longest consequtive sequence and return its length
 */

function longestConsecutive(nums) {
  let seq = new Set(nums)
  let result = 0

  for (let value of nums) {
    if (seq.has(value - 1)) {
      continue
    }

    let count = 1
    while (seq.has(value + 1)) {
      count++
      value++
    }

    result = Math.max(count, result)
  }

  return result
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))

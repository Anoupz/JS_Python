/**
 * Given unsorted array
 * find the longest consequtive sequence and return its length
 */

function longestConsecutive(nums) {
  let seq = new Set(nums)
  let maxSeq = 0

  for (let value of nums) {
    // check if the value is start of the sequence
    if (seq.has(value - 1)) {
      continue
    }

    // if its start of the seq, then check how far this goes
    let count = 1
    while (seq.has(value + 1)) {
      count++
      value++
    }

    maxSeq = Math.max(count, maxSeq)
  }

  return maxSeq
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))

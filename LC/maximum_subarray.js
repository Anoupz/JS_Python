/***
 *
 * Given an integer array nums, find the subarray
 * with the largest sum, and return its sum.
 */

function maxSubArray(nums) {
  let result = nums[0]
  let sum = 0
  let startIndex = 0
  let endIndex = 0

  for (let i = 0; i < nums.length; i++) {
    if (sum + nums[i] > nums[i]) {
      sum += nums[i]
      endIndex = i
    } else {
      startIndex = i
      sum = nums[i]
    }

    result = Math.max(result, sum)
  }

  console.log(startIndex, endIndex)
  return result
}

console.log(maxSubArray([5, -3, 4, 8, 6, -7, 2]))

/***
 *
 * Given an integer array nums, find the subarray
 * with the largest sum, and return its sum.
 */

function maxSubArray(nums: number[]): number {
  let result = nums[0]
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    if (sum + nums[i] > nums[i]) {
      sum += nums[i]
    } else {
      sum = nums[i]
    }

    result = Math.max(result, sum)
  }

  return result
}

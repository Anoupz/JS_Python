/**
 * Given an array of integers nums containing n + 1 integers 
 * where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums 
and uses only constant extra space.
 */

// Usually u can solve this with a hash and return the max counted value
// but here it says I should not be using any extra space.

function findDuplicate(nums) {
  let fast = 0
  let slow = 0
  let slow2 = 0

  while (true) {
    slow = nums[slow] //move slow pointer once
    fast = nums[nums[fast]] // move fast pointer twice

    if (slow === fast) {
      break
    }
  }

  // have another loop to check if two slow 
  // pointer meet at the same place
  // This is called floyd's algorithm
  while (true) {
    slow = nums[slow]
    slow2 = nums[slow2]

    if (slow === slow2) {
      return slow
    }
  }
}

console.log(findDuplicate([1, 2, 3, 4, 7, 7, 7]))

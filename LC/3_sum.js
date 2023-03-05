/**
 * 3 sum problem but return the values in an array and target is 0
 */

function threeSum(nums) {
  // Always sort like this for negative numbers
  nums.sort((a, b) => a - b)

  const len = nums.length
  const result = []

  for (let currentIndex = 0; currentIndex < len; currentIndex++) {
    if (currentIndex > 0 && nums[currentIndex - 1] === nums[currentIndex]) {
      continue
    }
    let low = currentIndex + 1
    let high = len - 1

    while (low < high) {
      const sum = nums[currentIndex] + nums[low] + nums[high]

      if (sum === 0) {
        result.push([nums[currentIndex], nums[low], nums[high]])

        // This skips dupes in the nums array
        low++
        while (nums[low] === nums[low - 1] && low < high) {
          low++
        }
      } else if (sum > 0) {
        high--
      } else {
        low++
      }
    }
  }
  return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))

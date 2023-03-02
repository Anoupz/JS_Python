function productExceptSelf(nums) {
  const prefix = []
  let prefixMul = 1
  const result = []
  let postFixMul = 1
  const len = nums.length

  for (let i = 0; i < len; i++) {
    prefix[i] = prefixMul
    prefixMul *= nums[i]
  }

  for (i = len - 1; i >= 0; i--) {
    result[i] = postFixMul
    postFixMul *= nums[i]
    //this additional step saves us from having another iteration. We can do the multiplication at the spot.
    result[i] *= prefix[i]
  }

  return result
}

console.log(productExceptSelf([1, 2, 3, 4]))

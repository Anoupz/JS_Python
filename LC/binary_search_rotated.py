def binary_search_rotated(nums, target):
    left = 0
    right = len(nums) - 1
    middle = (right + left) // 2
    target_index = -1

    while left <= right:
        if nums[middle] == target:
            target_index = middle
            break
        elif nums[left] <= nums[middle]:
            if nums[left] <= target <= nums[middle]:
                right = middle - 1
            else:
                left = middle + 1
        else:
            if nums[middle] <= target <= nums[right]:
                left = middle + 1
            else:
                right = middle - 1
        middle = (right + left) // 2
    return target_index


print(binary_search_rotated([4, 5, 6, 7, 0, 1, 2], 0))

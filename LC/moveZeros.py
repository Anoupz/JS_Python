"""
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

"""


def moveZeroes(nums) -> None:
    """
    Do not return anything, modify nums in-place instead.
    """
    zero_counter = 0
    current_index = 0
    list_len = len(nums)
    for i, value in enumerate(nums):
        if value:
            nums[current_index] = value
            current_index += 1
        else:
            zero_counter += 1

    while zero_counter:
        nums[list_len - 1] = 0
        zero_counter -= 1
        list_len -= 1

    print(nums)


moveZeroes([0, 1, 0, 3, 12])
moveZeroes([0, 1, 0, 0])
moveZeroes([0, -1, 0, 5])


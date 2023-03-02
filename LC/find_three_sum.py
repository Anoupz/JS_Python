def find_sum_of_three(nums, target):
    # your code will replace this placeholder return statement
    """
    - Sort the array in ascending order
    - have two pointers low and high
    - low is set to current loop index + 1
    - high is set to last index of the array
    - In the inner loop along with current element sum up to the target
    - If sum is > target then move high pointer backwards
    - if sum is < target then move low pointer forward
    - Terminate if low reached or crosses high
        Then reset the low to current index + 1 and high to last index
    """
    nums.sort()
    for current_index, value in enumerate(nums):
        high = len(nums) - 1
        low = current_index + 1
        while low < high:
            sum = nums[low] + nums[high] + value
            if sum == target:
                return True
            elif sum > target:
                high -= 1
            elif sum < target:
                low += 1

    return False


print(find_sum_of_three([1, 3, 4, 6, 8, 20], 31))
print(find_sum_of_three([1, -1, 0], -1))
print(find_sum_of_three([-1, 2, 1, -4, 5, -3], -8))
print(find_sum_of_three([1, 4, 7, 9, 10], 19))

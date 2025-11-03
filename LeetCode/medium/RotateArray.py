# Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

# Example 1:

# Input: nums = [1,2,3,4,5,6,7], k = 3
# Output: [5,6,7,1,2,3,4]
# Explanation:
# rotate 1 steps to the right: [7,1,2,3,4,5,6]
# rotate 2 steps to the right: [6,7,1,2,3,4,5]
# rotate 3 steps to the right: [5,6,7,1,2,3,4]
# Example 2:

# Input: nums = [-1,-100,3,99], k = 2
# Output: [3,99,-1,-100]
# Explanation: 
# rotate 1 steps to the right: [99,-1,-100,3]
# rotate 2 steps to the right: [3,99,-1,-100]

# Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
# Could you do it in-place with O(1) extra space?

# Dzaiała, ale jest za wolne. Zrobię jeszcze kilka easy i tu wrócę.
def rotate(nums: list[int], k: int) -> None:
    for i in range(k):
        part1 = nums[len(nums)-1:]
        part2 = nums[0:len(nums)-1]
        nums[:] = part1 + part2

    print(nums)
rotate([1,2,3,4,5,6,7],3)
# https://leetcode.com/problems/minimum-size-subarray-sum/

# Złożoność:
# Czas: O(n) - Jedna iteracja
# Pamięć: O(1) - Tylko zmienne pomocnicze


# Po sprawdzeniu:
def minSubArrayLen(target: int, nums: list[int]) -> int:
    answer = float("inf")
    currentSum, j = 0, 0
    for i, num in enumerate(nums):
        currentSum += num
        if currentSum >= target:
            while currentSum - nums[j] >= target:
                currentSum -= nums[j]
                j += 1
            answer = min(i - j + 1, answer)
    return answer if answer != float("inf") else 0


# Moje pierwsze rozwiązanie:
# def minSubArrayLen(target: int, nums: list[int]) -> int:
#     answer, currentLen, currentValue, i, j = float("inf"), 0, 0, 0, 0
#     while i <= len(nums):
#         if currentValue >= target:
#             while currentValue - nums[j] >= target:
#                 currentValue -= nums[j]
#                 j += 1
#                 currentLen -= 1
#             answer = min(answer, currentLen)
#         if i < len(nums):
#             currentValue += nums[i]
#             currentLen += 1
#         i += 1
#     return answer if answer != float("inf") else 0


print(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))  # 2
print(minSubArrayLen(4, [1, 4, 4]))  # 1
print(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]))  # 0

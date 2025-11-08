# https://leetcode.com/problems/two-sum/description/

# Złożoność:
# Czas: O(n) - Jedna iteracja
# Pamięć: O(n) - Dict przechowujący odwiedzone elementy


# Moja implementacja:
def twoSum(nums: list[int], target: int) -> list[int]:
    seen = {}
    for i, element in enumerate(nums):
        if (target - element) in seen:
            return [seen[target - element], i]
        seen[element] = i


print(twoSum([2, 7, 11, 15], 9))  # [0, 1]
print(twoSum([3, 2, 4], 6))  # [1, 2]
print(twoSum([3, 3], 6))  # [0, 1]

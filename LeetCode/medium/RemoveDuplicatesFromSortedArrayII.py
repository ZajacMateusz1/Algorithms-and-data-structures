# https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/

# Złożoność:
# Czas: O(n) - Jedna iteracja
# Pamięć: O(1) - Tylko zmienne pomocnicze


# Moja implementacja:
def removeDuplicates(nums: list[int]) -> int:
    k = 2
    for i in range(2, len(nums)):
        if nums[k - 1] != nums[k - 2]:
            nums[k] = nums[i]
            k += 1
        elif nums[k - 1] != nums[i]:
            nums[k] = nums[i]
            k += 1
    return k


nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
removeDuplicates(nums)
print(nums)  # [0, 0, 1, 1, 2, 3, 3, _, _]

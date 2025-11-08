# https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

# Złożoność:
# Czas: O(n) - Jedna iteracja
# Pamięć: O(1) - Tylko zmienne pomocnicze


# Moja implementacja:
def removeDuplicates(nums: list[int]) -> int:
    i = 1
    k = 1
    while i < len(nums):
        if nums[k - 1] != nums[i]:
            nums[k] = nums[i]
            k += 1
        i += 1
    return k


nums1 = [1, 1, 2]
nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
removeDuplicates(nums1)
removeDuplicates(nums2)
print(nums1)  # 2, [1,2,_]
print(nums2)  # 5, [0,1,2,3,4,_,_,_,_,_]

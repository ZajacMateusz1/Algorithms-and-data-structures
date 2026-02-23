# https://leetcode.com/problems/search-in-rotated-sorted-array/description/

# Złożoność:
# Czas: O(log n) - Zmodyfikowane wyszukiwanie binarne
# Pamięć: O(1) - Tylko zmienne pomocnicze


# Po podpowiedziach:
def search(nums: list[int], target: int) -> int:
    start, end = 0, len(nums) - 1
    while start <= end:
        mid = (start + end) // 2
        if nums[mid] == target:
            return mid
        elif nums[start] <= nums[mid]:
            if nums[start] <= target < nums[mid]:
                end = mid - 1
            else:
                start = mid + 1
        else:
            if nums[mid] <= target <= nums[end]:
                start = mid + 1
            else:
                end = mid - 1
    return -1


print(search([4, 5, 6, 7, 0, 1, 2], 0))  # 4
print(search([4, 5, 6, 7, 0, 1, 2], 3))  # -1
print(search([1], 0))  # -1
print(search([1], 1))  # 0
print(search([5, 1, 3], 5))  # 0
print(search([4, 5, 6, 7, 8, 1, 2, 3], 8))  # 4
print(search([3, 1], 1))  # 1

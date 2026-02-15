# https://leetcode.com/problems/search-insert-position/description/

# Złożoność:
# Czas: O(log n) - Wyszukiwanie binarne
# Pamięć: O(1) - Tylko zmienne pomocnicze


def searchInsert(nums: list[int], target: int) -> int:
    start, end = 0, len(nums) - 1
    mid = 0
    while start <= end:
        mid = (start + end) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            start = mid + 1
        else:
            end = mid - 1
    return mid + 1 if nums[mid] < target else mid


print(searchInsert([1, 3, 5, 6], 5))  # 2
print(searchInsert([1, 3, 5, 6], 2))  # 1
print(searchInsert([1, 3, 5, 6], 7))  # 4
print(searchInsert([1, 3, 5, 6], 0))  # 0

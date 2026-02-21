# https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

# Złożoność:
# Czas: O(log n) - Wyszukiwanie binarne
# Pamięć: O(1) - Tylko zmienne pomocnicze


# Moje rozwiązanie
def findMin(nums: list[int]) -> int:
    start, end = 0, len(nums) - 1
    lowest = float("inf")
    while start <= end:
        mid = (start + end) // 2
        lowest = min(nums[mid], lowest)
        if nums[mid] > nums[end]:
            start = mid + 1
        else:
            end = mid - 1
    return lowest


print(findMin([3, 4, 5, 1, 2]))  # 1
print(findMin([4, 5, 6, 7, 0, 1, 2]))  # 0
print(findMin([3, 1, 2]))  # 1

# https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

# Złożoność:
# - Moje pierwsze podejście:
# Czas: O(n) - W najgorszym wypadku zrobię terację po całej tablicy.
# Pamięć: O(1) - Tylko zmienne pomocnicze
# - Po podpowiedziach
# Czas: O(log n) - Dwa wyszukiwania binarne
# Pamięć: O(1) - Tylko zmienne pomocnicze


def searchRange(nums: list[int], target: int) -> list[int]:
    def binSearch(nums, target, isLeft):
        start, end = 0, len(nums) - 1
        i = -1
        while start <= end:
            mid = (start + end) // 2
            if nums[mid] == target:
                i = mid
                if isLeft:
                    end = mid - 1
                else:
                    start = mid + 1
            elif nums[mid] > target:
                end = mid - 1
            else:
                start = mid + 1
        return i

    return [binSearch(nums, target, True), binSearch(nums, target, False)]


# Moje rozwiązanie
# def searchRange(nums: list[int], target: int) -> list[int]:
#     start, end = 0, len(nums) - 1
#     while start <= end:
#         mid = (start + end) // 2
#         if nums[mid] == target:
#             i, j = mid, mid
#             while i >= 0 and nums[i] == target:
#                 i -= 1
#             while j < len(nums) and nums[j] == target:
#                 j += 1
#             return [i + 1, j - 1]
#         elif nums[mid] > target:
#             end = mid - 1
#         else:
#             start = mid + 1
#     return [-1, -1]


print(searchRange([5, 7, 7, 8, 8, 10], 8))  # [3,4]
print(searchRange([5, 7, 7, 8, 8, 10], 6))  # [-1,-1]
print(searchRange([], 0))  # [-1,-1]

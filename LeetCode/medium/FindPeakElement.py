# https://leetcode.com/problems/find-peak-element/description/

# Złożoność:
# - Moje pierwsze podejście:
# Czas: O(n) - Zgedraduje się do O(n) w najgorszym wypadku
# Pamięć: O(n) - Głębokość stosu wywołań rekurencyjnych w najgorszym wypdaku.
# - Po podpowiedziach
# Czas: O(log n) - Jedno zmodyfikowane wyszukiwanie binarne.
# Pamięć: O(1) - Tylko zmienne pomocnicze


# Po sprawdzeniu
def findPeakElement(nums: list[int]) -> int:
    start, end = 0, len(nums) - 1
    while start <= end:
        mid = start + ((end - start) // 2)  # Bezpieczne liczenie mida dla C++.
        if mid < len(nums) - 1 and nums[mid] < nums[mid + 1]:
            start = mid + 1
        elif mid > 0 and nums[mid] < nums[mid - 1]:
            end = mid - 1
        else:
            return mid


# Moje pierwsze rozwiązanie
# def binarySearch(start, end, nums):
#     if start > end:
#         return None
#     mid = (start + end) // 2
#     if (mid == len(nums) - 1 or nums[mid] > nums[mid + 1]) and (
#         mid == 0 or nums[mid] > nums[mid - 1]
#     ):
#         return mid
#     left = binarySearch(mid + 1, end, nums)
#     if left is not None:
#         return left
#     return binarySearch(start, mid - 1, nums)


# def findPeakElement(nums: list[int]) -> int:
#     return binarySearch(0, len(nums) - 1, nums)


print(findPeakElement([1, 2, 3, 1]))  # 2
print(
    findPeakElement([1, 2, 1, 3, 5, 6, 4])
)  # Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
print(findPeakElement([1]))  # 0
print(findPeakElement([6, 5, 4, 3, 2, 2, 2]))  # 0 or 5

# https://leetcode.com/problems/merge-sorted-array/description/

# Złożoność:
# Czas: O(n + m) - Jedna iteracja
# Pamięć: O(1) - Tylko zmienne pomocnicze


def merge(nums1: list[int], m: int, nums2: list[int], n: int) -> None:
    x = m + n - 1
    i = m - 1
    j = n - 1
    while i >= 0 and j >= 0:
        if nums1[i] >= nums2[j]:
            nums1[x] = nums1[i]
            i -= 1
        else:
            nums1[x] = nums2[j]
            j -= 1
        x -= 1
    while j >= 0:
        nums1[x] = nums2[j]
        j -= 1
        x -= 1
    print(nums1)


merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)  # [1,2,2,3,5,6]
merge([1], 1, [], 0)  # [1]

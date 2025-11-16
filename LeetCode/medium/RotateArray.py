# https://leetcode.com/problems/rotate-array/description/

# Złożoność:
# - Pierwsze podejście
# Czas: O(n) - Jedna iteracja
# Pamięć: O(n) - Nowy dict.
# - Po sprawdzeniu
# Czas: O(n) - Jedna iteracja
# Pamięć: O(1) - Tylko zmienne pomocnicze i odwracanie tablicy.

# Moja pierwsza implementacja, po kilku podpowiedziach
# def rotate(nums: list[int], k: int) -> None:
#     elementsIndex = {}
#     for i, element in enumerate(nums):
#         elementsIndex[i] = element
#     for i in range(len(nums)):
#         index = i + k
#         if index >= len(nums):
#             index %= len(nums)
#         nums[index] = elementsIndex[i]
#     print(nums)


# Moja implementacja po sprawdzeniu rozwiązania z O(1) pamięci, nie chciałem używać wbudowanych metod do odwracania tablicy.
def rotate(nums: list[int], k: int) -> None:
    i = 0
    j = len(nums) - 1
    k %= len(nums)
    while i < j:
        nums[i], nums[j] = nums[j], nums[i]
        i += 1
        j -= 1
    i = 0
    j = k - 1
    while i < j:
        nums[i], nums[j] = nums[j], nums[i]
        i += 1
        j -= 1
    i = k
    j = len(nums) - 1
    while i < j:
        nums[i], nums[j] = nums[j], nums[i]
        i += 1
        j -= 1
    print(nums)


rotate([1, 2, 3, 4, 5, 6, 7], 3)  # [5,6,7,1,2,3,4]
rotate([-1, -100, 3, 99], 2)  # [3,99,-1,-100]
rotate([1, 2], 7)  # [2,1]

# https://leetcode.com/problems/majority-element/description/

# Złożoność:
# Czas: O(n) - Jedna iteracja
# Pamięć: O(1) - Tylko zmienne pomocnicze


# Moja implementacja:
def majorityElement(nums: list[int]) -> int:
    candidate = nums[0]
    counter = 1
    for i in range(1, len(nums)):
        if nums[i] == candidate:
            counter += 1
        elif counter == 0:
            candidate = nums[i]
        else:
            counter -= 1
    return candidate


majorityElement([[3, 2, 3]])  # 3
majorityElement([2, 2, 1, 1, 1, 2, 2])  # 2

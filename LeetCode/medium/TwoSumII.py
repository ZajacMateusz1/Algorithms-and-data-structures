# https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

# Złożoność:
# Czas: O(n) - Jedna iteracja
# Pamięć: O(1) - Tylko zmienne pomocnicze


def twoSum(numbers: list[int], target: int) -> list[int]:
    i, j = 0, len(numbers) - 1
    while i < j:
        if numbers[i] + numbers[j] == target:
            return [i + 1, j + 1]
        elif numbers[i] + numbers[j] > target:
            j -= 1
        else:
            i += 1


print(twoSum([2, 7, 11, 15], 9))  # [1, 2]
print(twoSum([2, 3, 4], 6))  # [1, 3]
print(twoSum([-1, 0], -1))  # [1, 2]
print(twoSum([5, 25, 75], 100))  # [2,3]

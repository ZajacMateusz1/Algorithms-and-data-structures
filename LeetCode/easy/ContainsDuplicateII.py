# https://leetcode.com/problems/contains-duplicate-ii/description/

# Złożoność:
# Czas: O(n) - Jedna iteracja
# Pamięć: O(n) - Nowy dict do przechowywania ostatniej pozycji


# Moje rozwiązanie:
def containsNearbyDuplicate(nums: list[int], k: int) -> bool:
    numberPositions = {}
    for i, num in enumerate(nums):
        if num not in numberPositions:
            numberPositions[num] = i
        else:
            if i - numberPositions[num] <= k:
                return True
            numberPositions[num] = i
    return False


print(containsNearbyDuplicate([1, 2, 3, 1], 3))  # true
print(containsNearbyDuplicate([1, 0, 1, 1], 1))  # true
print(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))  # false

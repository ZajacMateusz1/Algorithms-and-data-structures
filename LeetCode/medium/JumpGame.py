# https://leetcode.com/problems/jump-game/description/

# Złożoność:
# Czas: O(n) - Jedna iteracja
# Pamięć: O(1) - Tylko zmienne pomocnicze


# Moja implementacja, po sprawdzeniu jak działają algorytmy typu greedy i podpowiedzi.
def canJump(nums: list[int]) -> bool:
    i = len(nums) - 1
    j = i
    while i >= 0:
        if i + nums[i] >= j:
            j = i
            if j == 0:
                return True
        i -= 1
    return False


print(canJump([0]))  # True
print(canJump([1, 2, 3]))  # True
print(canJump([2, 3, 1, 1, 4]))  # True
print(canJump([3, 2, 1, 0, 4]))  # False
print(canJump([3, 0, 8, 2, 0, 0, 1]))  # True

# https://leetcode.com/problems/jump-game-ii/description/

# Złożoność:
# - Moje pierwsze podejście:
# Czas: O(n^2) - W najgorszym wypadku będę dla każdego elementu iterował po całej tablicy
# Pamięć: O(1) - Tylko zmienne pomocnicze
# - Po podpowiedziach
# Czas: O(n) - Jedna iteracja
# Pamięć: O(1) - Tylko zmienne pomocnicze


# Return the minimum number of jumps to reach index n - 1. The test cases are generated such that you can reach index n - 1.
# Nie muszę się martwić tym, że może nie dać się dojść do końca.


# Po podpowiedziach
def jump(nums: list[int]) -> int:
    jumps = 0
    farthest = 0
    currentEnd = 0
    for i in range(len(nums) - 1):
        farthest = max(farthest, i + nums[i])
        if currentEnd == i:
            currentEnd = farthest
            jumps += 1
    return jumps


# Moja pierwsza implementacja
# def jump(nums: list[int]) -> int:
#     i = 0
#     j = len(nums) - 1
#     jumps = 0
#     while j != 0:
#         if i + nums[i] >= j:
#             j = i
#             i = 0
#             jumps += 1
#         else:
#             i += 1
#     return jumps


print(jump([2, 3, 1, 1, 4]))  # 2
print(jump([2, 3, 0, 1, 4]))  # 2
print(jump([8, 8]))  # 0

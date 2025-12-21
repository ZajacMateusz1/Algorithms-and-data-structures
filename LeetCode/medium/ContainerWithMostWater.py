# https://leetcode.com/problems/container-with-most-water/description/

# Złożoność:
# Czas: O(n) - Jedna iteracja
# Pamięć: O(1) - Tylko zmienne pomocnicze


# Moje rozwiązanie
def maxArea(height: list[int]) -> int:
    i, j = 0, len(height) - 1
    maxWater = 0
    while i < j:
        smaller = min(height[i], height[j])
        maxWater = max(maxWater, (j - i) * smaller)
        if smaller == height[i]:
            i += 1
        else:
            j -= 1
    return maxWater


print(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))  # 49
print(maxArea([1, 1]))  # 1

# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

# Złożoność:
# Czas: O(n) - Jedna iteracja
# Pamięć: O(1) - Tylko zmienne pomocnicze


# Moja implementacja:
def maxProfit(prices: list[int]) -> int:
    minPrice = prices[0]
    maxProfit = 0
    for i in range(1, len(prices)):
        if prices[i] < minPrice:
            minPrice = prices[i]
        elif prices[i] - minPrice > maxProfit:
            maxProfit = prices[i] - minPrice
    return maxProfit


print(maxProfit([7, 1, 5, 3, 6, 4]))  # 5
print(maxProfit([7, 6, 4, 3, 1]))  # 0

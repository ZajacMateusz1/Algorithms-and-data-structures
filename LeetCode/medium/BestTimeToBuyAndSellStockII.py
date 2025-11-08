# https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/

# Złożoność:
# Czas: O(n) - wszystko dzieje się podczas jednej iteracji.
# Pamięć: O(1) - tworzę tylko 3 zmienne pomocnicze.

# Moja pierwsza implementacja:
# def maxProfit(prices: list[int]) -> int:
#     minPrice = prices[0]
#     maxProfit = 0
#     sumProfit = 0
#     for i in range(1, len(prices)):
#         profit = prices[i] - minPrice
#         if (prices[i] < minPrice) or (profit < maxProfit):
#             sumProfit += maxProfit
#             maxProfit = 0
#             minPrice = prices[i]
#         elif profit > maxProfit:
#             maxProfit = profit
#     sumProfit += maxProfit
#     return sumProfit


# Implementacja po sprawdzeniu odpowiedzi:
def maxProfit(prices: list[int]) -> int:
    sumProfit = 0
    for i in range(1, len(prices)):
        profit = prices[i] - prices[i - 1]
        if profit > 0:
            sumProfit += profit
    return sumProfit


print(maxProfit([7, 1, 5, 3, 6, 4]))  # 7
print(maxProfit([1, 2, 3, 4, 5]))  # 4
print(maxProfit([7, 6, 4, 3, 1]))  # 0

# You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

# On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can sell and buy the stock multiple times on the same day, ensuring you never hold more than one share of the stock.

# Find and return the maximum profit you can achieve.

# Example 1:

# Input: prices = [7,1,5,3,6,4]
# Output: 7
# Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
# Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
# Total profit is 4 + 3 = 7.
# Example 2:

# Input: prices = [1,2,3,4,5]
# Output: 4
# Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
# Total profit is 4.
# Example 3:

# Input: prices = [7,6,4,3,1]
# Output: 0
# Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.

# Na początku tworzę trzy zmienne: minPrice = prices[0], maxProfit = 0 oraz sumProfit = 0.
# Następnie iteruję po tablicy cen.
# Jeśli bieżąca cena jest mniejsza niż minPrice lub aktualny profit spadł względem poprzedniego maksimum, dodaję maxProfit do sumProfit, zeruję maxProfit i ustawiam minPrice na bieżącą wartość.
# W przeciwnym wypadku sprawdzam, czy nowy zysk (profit) jest większy od dotychczasowego maxProfit  jeśli tak to aktualizuję go.

# Złożoność:
# Czas: O(n) - wszystko dzieje się podczas jednej iteracji.
# Pamięć: O(1) - tworzę tylko 3 zmienne pomocnicze.

def maxProfit(prices: list[int]) -> int:
    minPrice = prices[0]
    maxProfit = 0
    sumProfit = 0
    for i in range(1,len(prices)):
        profit = prices[i]-minPrice
        if (prices[i] < minPrice) or (profit<maxProfit):
            sumProfit += maxProfit
            maxProfit = 0
            minPrice = prices[i]
        elif profit>maxProfit:
            maxProfit = profit
    sumProfit+= maxProfit  
    return sumProfit
    
# print(maxProfit([7,1,5,3,6,4]))
print(maxProfit([1,2,3,4,5]))
# 0/1 Knapsack

# You are given two integer arrays weights and values, where:

# weights[i] is the weight of the i-th item.
# values[i] is the value of the i-th item.

# You are also given an integer capacity representing the maximum weight your knapsack can hold.

# You may choose to include at most one copy of each item in the knapsack.

# Return the maximum total value that can be obtained without exceeding the knapsack's capacity.

# Example 1

# Input:

# weights = [2,3,4,5]
# values = [3,4,5,6]
# capacity = 5

# Output:

# 7

# Explanation:

# Choose items with indices 0 and 1.

# Total weight = 2 + 3 = 5
# Total value = 3 + 4 = 7

# No other valid selection has a greater total value.

# Example 2

# Input:

# weights = [1,3,4,5]
# values = [1,4,5,7]
# capacity = 7

# Output:

# 9

# Explanation:

# Choose items with indices 1 and 2.

# Total weight = 3 + 4 = 7
# Total value = 4 + 5 = 9
# Example 3

# Input:

# weights = [5,6,7]
# values = [10,20,30]
# capacity = 4

# Output:

# 0

# Explanation:

# None of the items fit into the knapsack.

# Constraints
# 1 <= weights.length == values.length <= 200
# 1 <= weights[i] <= 100
# 1 <= values[i] <= 1000
# 1 <= capacity <= 1000

from typing import List


class Solution:
    def knapsack(self, weights: List[int], values: List[int], capacity: int) -> int:
        n = len(weights)
        dp = [[0 for _ in range(n + 1)] for _ in range(capacity + 1)]
        for i in range(1, n + 1):
            weight = weights[i - 1]
            value = values[i - 1]
            for c in range(capacity + 1):
                if weight <= c:
                    dp[c][i] = max(dp[c][i - 1], dp[c - weight][i - 1] + value)
                else:
                    dp[c][i] = dp[c][i - 1]
        return dp[capacity][n]


solution = Solution()
print(solution.knapsack([2, 3, 4, 5], [3, 4, 5, 6], 5))
print(solution.knapsack([1, 3, 4, 5], [1, 4, 5, 7], 7))

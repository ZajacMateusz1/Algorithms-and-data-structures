# https://leetcode.com/problems/gas-station/

# Złożoność:
# Czas: O(n) - Jedna iteracja
# Pamięć: O(1) - Tylko zmienne pomocnicze


# Moje rozwiązanie
def canCompleteCircuit(gas: list[int], cost: list[int]) -> int:
    balance = 0
    station = -1
    i = len(gas) - 1
    max = -1
    while i >= 0:
        balance += gas[i]
        balance -= cost[i]
        if balance >= max:
            max = balance
            station = i
        i -= 1
    return station if balance >= 0 else -1


print(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))  # 3
print(canCompleteCircuit([2, 3, 4], [3, 4, 3]))  # -1

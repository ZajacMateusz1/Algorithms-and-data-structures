# https://leetcode.com/problems/product-of-array-except-self/description/

# Złożoność:
# Nie brałęm pod uwagę tablicy z odpowiedzią w złożoności pamięciowej.
# - Po sprawdzeniu:
# Czas: O(n) - Dwie iteracje, które następują po sobie.
# Pamięć: O(1) - Mam tylko zmienną pomocniczą.
# - Moje pierwsze podejście:
# Czas: O(n) - Trzy iteracje, które następują po sobie.
# Pamięć: O(n) - Tworzę dwa nowe dict do przechowywania prefixów i sufixów

# You must write an algorithm that runs in O(n) time and without using the division operation.


# Po sprawdzeniu
def productExceptSelf(nums: list[int]) -> list[int]:
    n = len(nums)
    answer = [1] * n
    for i in range(1, n):
        answer[i] = answer[i - 1] * nums[i - 1]
    suffix = 1
    for i in range(n - 2, -1, -1):
        suffix *= nums[i + 1]
        answer[i] *= suffix
    return answer


# Moje pierwsze podejście
# def productExceptSelf(nums: list[int]) -> list[int]:
#     multiplicationFromStartResults = {}
#     multiplicationFromEndResults = {}
#     answer = []
#     result = 1
#     for i in range(len(nums)):
#         result *= nums[i]
#         multiplicationFromStartResults[i] = result
#     result = 1
#     for i in range(len(nums) - 1, -1, -1):
#         result *= nums[i]
#         multiplicationFromEndResults[i] = result
#     for i in range(len(nums)):
#         toAppend = 1
#         if i - 1 in multiplicationFromStartResults:
#             toAppend *= multiplicationFromStartResults[i - 1]
#         if i + 1 in multiplicationFromEndResults:
#             toAppend *= multiplicationFromEndResults[i + 1]
#         answer.append(toAppend)
#     return answer


print(productExceptSelf([1, 2, 3, 4]))  # [24,12,8,6]
print(productExceptSelf([-1, 1, 0, -3, 3]))  # [0,0,9,0,0]

# https://leetcode.com/problems/longest-consecutive-sequence/description/

# Złożoność:
# Czas: O(n) - Dwie niezagnieżdżone pętle
# Pamięć: O(n) - Nowe struktury na przechowywanie liczb.


# You must write an algorithm that runs in O(n) time.


# Po sprawdzeniu
def longestConsecutive(nums: list[int]) -> int:
    seen = set()
    maxCounter = 0
    for num in nums:
        seen.add(num)
    for num in seen:
        if num - 1 not in seen:
            counter = 1
            i = num + 1
            while i in seen:
                i += 1
                counter += 1
            maxCounter = max(maxCounter, counter)
    return maxCounter


# Moje rozwiązanie
# def longestConsecutive(nums: list[int]) -> int:
#     maxCounter = 0
#     seen = set()
#     for num in nums:
#         seen.add(num)
#     counted = set()
#     for num in nums:
#         if num not in counted:
#             counted.add(num)
#             counter = 1
#             currentLowerNumber = num - 1
#             currentHigherNumber = num + 1
#             while currentLowerNumber in seen:
#                 counted.add(currentLowerNumber)
#                 counter += 1
#                 currentLowerNumber -= 1
#             while currentHigherNumber in seen:
#                 counted.add(currentHigherNumber)
#                 counter += 1
#                 currentHigherNumber += 1
#             maxCounter = max(maxCounter, counter)
#     return maxCounter


print(longestConsecutive([100, 4, 200, 1, 3, 2]))  # 4
print(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))  # 9
print(longestConsecutive([1, 0, 1, 2]))  # 3
print(longestConsecutive([1, 2, 6, 7, 8]))  # 3
print(longestConsecutive([]))  # 0

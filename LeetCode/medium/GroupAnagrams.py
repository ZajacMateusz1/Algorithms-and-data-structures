# https://leetcode.com/problems/group-anagrams/description/
from collections import defaultdict

# Złożoność:
# - Moje pierwsze podejście:
# Czas: O(n * k log k) - Iteruję po stringach i w każdym sortuję litery.
# Pamięć: O(n) - Nowy dict
# - Po podpowiedziach
# Czas: O(n*k) - Dla każdego stringa tworzę zbiornik na litery, iteruję po każdej literze stringa
# Pamięć: O(n) - Pojemniki na litery i nowy dict.


# Po sprawdzeniu odpowiedzi:
def groupAnagrams(strs: list[str]) -> list[list[str]]:
    res = defaultdict(list)
    for str in strs:
        count = [0] * 26

        for char in str:
            count[ord(char) - ord("a")] += 1
        res[tuple(count)].append(str)
    return list(res.values())


# Moje rozwiązanie
# def groupAnagrams(strs: list[str]) -> list[list[str]]:
#     answer = []
#     groups = {}
#     i = 0
#     for str in strs:
#         sortedStr = "".join(sorted(str))
#         if sortedStr not in groups:
#             groups[sortedStr] = i
#             answer.append([])
#             i += 1
#         answer[groups[sortedStr]].append(str)
#     return answer


print(
    groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
)  # [["bat"],["nat","tan"],["ate","eat","tea"]]
print(groupAnagrams([""]))  # [[""]]
print(groupAnagrams(["a"]))  # [["a"]]

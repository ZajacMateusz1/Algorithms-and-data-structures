# https://leetcode.com/problems/longest-common-prefix/description/

# Złożoność:
# Czas: O(n*m) - W najgorszym wypadku, dla każdego elementu tablicy, zrobię m porównań.
# Pamięć: O(1) - Tylko zmienne pomocnicze


def longestCommonPrefix(strs: list[str]) -> str:
    longestPrefix = strs[0]
    i = 1
    j = 0
    while i < len(strs):
        while (
            j < len(longestPrefix)
            and j < len(strs[i])
            and longestPrefix[j] == strs[i][j]
        ):
            j += 1
        longestPrefix = longestPrefix[0:j]
        j = 0
        i += 1
    return longestPrefix


print(longestCommonPrefix(["flower", "flow", "flight"]))  # "fl"
print(longestCommonPrefix(["dog", "racecar", "car"]))  # ""

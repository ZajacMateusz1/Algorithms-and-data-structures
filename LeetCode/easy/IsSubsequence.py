# https://leetcode.com/problems/is-subsequence/description/

# Złożoność:
# Czas: O(n) - Jedna iteracja
# Pamięć: O(1) - Tylko zmienne pomocnicze


# Moje rozwiązanie
def isSubsequence(s: str, t: str) -> bool:
    j = 0
    for i in t:
        if j == len(s):
            return True
        if i == s[j]:
            j += 1
    return j == len(s)


print(isSubsequence("abc", "ahbgdc"))
print(isSubsequence("axc", "ahbgdc"))
print(isSubsequence("", "ahbgdc"))

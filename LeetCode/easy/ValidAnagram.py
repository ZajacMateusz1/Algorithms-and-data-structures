# https://leetcode.com/problems/valid-anagram/description/

# Złożoność:
# Czas: O(n) - Dwie iteracje po n elementach
# Pamięć: O(1) - Ilość małych liter w alfabecie jest skończona.


def isAnagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False
    sLetters = {}
    for char in s:
        if char not in sLetters:
            sLetters[char] = 1
        else:
            sLetters[char] += 1
    for char in t:
        if char not in sLetters:
            return False
        sLetters[char] -= 1
        if sLetters[char] < 0:
            return False
    return True


print(isAnagram("anagram", "nagaram"))  # true
print(isAnagram("rat", "car"))  # false
print(isAnagram("ab", "a"))  # false

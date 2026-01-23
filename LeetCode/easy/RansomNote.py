# https://leetcode.com/problems/ransom-note/

# Złożoność:
# Czas: O(n+m) - Po jednej pętli na stringa
# Pamięć: O(n) - Dict na unikalne litery w magazine


# Moje rozwiązanie:
def canConstruct(ransomNote: str, magazine: str) -> bool:
    letters = {}
    for char in magazine:
        if char in letters:
            letters[char] += 1
        else:
            letters[char] = 1
    for char in ransomNote:
        if char not in letters:
            return False
        letters[char] -= 1
        if letters[char] < 0:
            return False
    return True


print(canConstruct("a", "b"))
print(canConstruct("aa", "ab"))
print(canConstruct("aa", "aab"))

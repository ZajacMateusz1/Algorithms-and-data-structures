# https://leetcode.com/problems/length-of-last-word/description/

# Złożoność:
# Czas: O(n) - Jedna iteracja
# Pamięć: O(1) - Tylko zmienne pomocnicze


# Moja implementacja
def lengthOfLastWord(s: str) -> int:
    i = len(s) - 1
    length = 0
    sawCharacter = False
    while i >= 0:
        if s[i] == " " and sawCharacter:
            return length
        elif s[i] != " ":
            sawCharacter = True
            length += 1
        i -= 1
    return length


print(lengthOfLastWord("a"))
print(lengthOfLastWord("Hello World"))
print(lengthOfLastWord("   fly me   to   the moon  "))
print(lengthOfLastWord("luffy is still joyboy"))

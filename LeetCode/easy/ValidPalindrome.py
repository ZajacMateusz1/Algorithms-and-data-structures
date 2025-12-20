# https://leetcode.com/problems/valid-palindrome/description/

# Złożoność:
# Czas: O(n) - Jedna iteracja
# Pamięć: O(1) - Tylko zmienne pomocnicze


# Moje rozwiązanie
def isPalindrome(s: str) -> bool:
    i, j = 0, len(s) - 1
    while i < j:
        if not s[i].isalnum():
            i += 1
            continue
        if not s[j].isalnum():
            j -= 1
            continue
        if s[i].lower() == s[j].lower():
            i += 1
            j -= 1
        else:
            return False
    return True


print(isPalindrome("A man, a plan, a canal: Panama"))  # true
print(isPalindrome("race a car"))  # false
print(isPalindrome(" "))  # true

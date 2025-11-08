# https://leetcode.com/problems/palindrome-number/description/

# Złożoność:
# - Ze stringiem
# Czas: O(n) - Jedna iteracja
# Pamięć: O(n) - Konwersja na stringa
# - Bez stringa:
# Czas: O(n) - Dwie iteracje, tablica są tej samej długości czyli 2n, ale się uprości.
# Pamięć: O(n) - Tablica z cyframi

# Podejście ze stringiem
# def isPalindrome( x: int) -> bool:
#     x = str(x)
#     i,j = 0,len(x)-1
#     while i<j:
#         if x[i]!=x[j]:
#             return False
#         i+=1
#         j-=1
#     return True


# Podejście bez stringa
def isPalindrome(x: int) -> bool:
    y = x
    reversedDigits = []
    reversedNumber = 0
    i = 0
    while x > 0:
        i += 1
        number = x % 10
        reversedDigits.append(number)
        x //= 10
    print(reversedDigits, i)
    i = 0
    j = len(reversedDigits) - 1
    while j >= 0:
        reversedNumber += reversedDigits[j] * 10**i
        i += 1
        j -= 1
    print(reversedNumber)
    if reversedNumber == y:
        return True
    return False


print(isPalindrome(121))  # True
print(isPalindrome(-121))  # False
print(isPalindrome(10))  # False
print(isPalindrome(1221))  # True

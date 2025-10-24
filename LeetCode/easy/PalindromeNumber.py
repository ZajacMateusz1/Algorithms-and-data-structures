# Given an integer x, return true if x is a palindrome, and false otherwise.

# Example 1:

# Input: x = 121
# Output: true
# Explanation: 121 reads as 121 from left to right and from right to left.
# Example 2:

# Input: x = -121
# Output: false
# Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
# Example 3:

# Input: x = 10
# Output: false
# Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 
# Constraints:
# -231 <= x <= 231 - 1
# Follow up: Could you solve it without converting the integer to a string?
# def isPalindrome( x: int) -> bool:
#     x = str(x)
#     i,j = 0,len(x)-1
#     while i<j:
#         if x[i]!=x[j]:
#             return False
#         i+=1 
#         j-=1
#     return True
def isPalindrome( x: int) -> bool:
    y = x
    reversedDigits = []
    reversedNumber = 0
    i = 0
    while x>0:
        i+=1
        number = x%10
        reversedDigits.append(number)
        x//=10
    print(reversedDigits, i)
    i = 0
    j = len(reversedDigits)-1
    while j>=0:
        reversedNumber+=reversedDigits[j]*10**i
        i+=1
        j-=1
    print(reversedNumber)
    if(reversedNumber == y):return True
    return False
print(isPalindrome(1221))
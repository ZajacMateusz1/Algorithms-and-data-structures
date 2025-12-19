# https://leetcode.com/problems/valid-parentheses/description

# Złożoność:
# - W obydwu wypadkach
# Czas: O(n) - Jedna iteracja
# Pamięć: O(n) - Stos przechowujący odwiedzone elementy

symbols = {")": "(", "]": "[", "}": "{"}


# Po sprawdzeniu odpowiedzi:
def isValid(s: str) -> bool:
    stack = []
    for char in s:
        if char in symbols:
            if stack and stack[-1] == symbols[char]:
                stack.pop()
            else:
                return False
        else:
            stack.append(char)
    return True if len(stack) == 0 else False


# Moje pierwsze podejście:
# def isValid(s: str) -> bool:
#     stack = []
#     for char in s:
#         if len(stack) != 0 and char in symbols and stack[-1] == symbols[char]:
#             stack.pop()
#         else:
#             stack.append(char)
#     return True if len(stack) == 0 else False


print(isValid("()"))  # true
print(isValid("()[]{}"))  # true
print(isValid("(]"))  # false
print(isValid("([])"))  # true
print(isValid("([)]"))  # false
print(isValid(""))  # true
print(isValid("]"))  # false

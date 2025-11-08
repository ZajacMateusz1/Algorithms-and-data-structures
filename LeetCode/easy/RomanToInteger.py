# https://leetcode.com/problems/roman-to-integer/description/

# Złożoność (w obydwu wypadkach):
# Czas: O(n) - Jedna iteracja, sprawdzanie w dict to O(1)
# Pamięć: O(1) - Tylko zmienne pomocnicze

# Moja pierwsza implementacja:
# def romanToInt(s: str) -> int:
#     roman = {
#         "I": 1,
#         "V": 5,
#         "X": 10,
#         "L": 50,
#         "C": 100,
#         "D": 500,
#         "M": 1000,
#     }
#     if s in roman:
#         return roman[s]
#     result = 0
#     i = 1
#     while i < len(s):
#         if roman[s[i - 1]] < roman[s[i]]:
#             result += roman[s[i]] - roman[s[i - 1]]
#             i += 1
#         else:
#             result += roman[s[i - 1]]
#         if i == len(s) - 1 and roman[s[i - 1]] >= roman[s[i]]:
#             result += roman[s[i]]
#         i += 1
#     return result


# Implementacja po sprawdzeniu odpowiedzi:
def romanToInt(s: str) -> int:
    roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    result = 0
    for i in range(len(s)):
        if i + 1 < len(s) and roman[s[i]] < roman[s[i + 1]]:
            result -= roman[s[i]]
        else:
            result += roman[s[i]]
    return result


print(romanToInt("III"))  # 3
print(romanToInt("LVIII"))  # 58
print(romanToInt("MCMXCIV"))  # 1994

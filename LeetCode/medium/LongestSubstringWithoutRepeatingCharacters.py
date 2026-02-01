# https://leetcode.com/problems/longest-substring-without-repeating-characters/description/


# Złożoność:
# - Obie opcje:
# Czas: O(n) - Jedna iteracja
# Pamięć: O(n) - Nowy set na znaki.


# Po sprawdzeniu
def lengthOfLongestSubstring(s: str) -> int:
    seen = set()
    j, answer = 0, 0
    for i in range(len(s)):
        while s[i] in seen:
            seen.remove(s[j])
            j += 1
        seen.add(s[i])
        answer = max(answer, i - j + 1)
    return answer


# Moje rozwiązanie
# def lengthOfLongestSubstring(s: str) -> int:
#     counter, maxCounter = 0, 0
#     i, j = 0, 0
#     seen = set()
#     while i < len(s):
#         if s[i] in seen:
#             seen.remove(s[j])
#             maxCounter = max(counter, maxCounter)
#             j += 1
#             counter -= 1
#         else:
#             seen.add(s[i])
#             counter += 1
#             i += 1
#     return max(counter, maxCounter)


print(lengthOfLongestSubstring("abcabcbb"))  # 3
print(lengthOfLongestSubstring("bbbbb"))  # 1
print(lengthOfLongestSubstring("pwwkew"))  # 3
print(lengthOfLongestSubstring(" "))  # 1

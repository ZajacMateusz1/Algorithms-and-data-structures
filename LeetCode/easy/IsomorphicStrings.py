# https://leetcode.com/problems/isomorphic-strings/

# Złożoność:
# - Pierwsze podejście:
# Czas: O(n^2) - Przez sprawdzanie w chars.values()
# Pamięć: O(n) - Nowy dict
# - Po sprawdzeniu
# Czas: O(n) - Jedna iteracja
# Pamięć: O(n) - Dwa nowe dict o długości n

# t.length == s.length


# Po sprawdzeniu
def isIsomorphic(s: str, t: str) -> bool:
    st, ts = {}, {}
    for i in range(len(s)):
        if (s[i] in st and st[s[i]] != t[i]) or (t[i] in ts and ts[t[i]] != s[i]):
            return False
        st[s[i]] = t[i]
        ts[t[i]] = s[i]
    return True


# Moje pierwsze podejście:
# def isIsomorphic(s: str, t: str) -> bool:
#     chars = {}
#     for i in range(len(t)):
#         if s[i] not in chars:
#             if t[i] in chars.values():
#                 return False
#             chars[s[i]] = t[i]
#         else:
#             if t[i] != chars[s[i]]:
#                 return False
#     return True


print(isIsomorphic("egg", "add"))
print(isIsomorphic("foo", "bar"))
print(isIsomorphic("paper", "title"))
print(isIsomorphic("badc", "baba"))

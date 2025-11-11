# https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

# Złożoność:
# - Wersja naiwna
# Czas: O(n*m) - W najgorszym wypadku, dla każdego elementu tablicy, zrobię m porównań.
# Pamięć: O(1) - Tylko zmienne pomocnicze
# - Wersja KMP
# Czas: O(n+m) - najpierw buduję tablicę lps w O(m), a następnie przeszukuję haystack w O(n),korzystając z lps do cofania indeksu wzorca bez niepotrzebnych porównań.
# Pamięć: O(m) - Nowa tablica lps o długości równej needle.

# Moja implementacja (naiwna)
# def strStr(haystack: str, needle: str) -> int:
#     for i in range(len(haystack) - len(needle) + 1):
#         j = 0
#         k = i
#         while haystack[k] == needle[j]:
#             j += 1
#             k += 1
#             if j == len(needle):
#                 return i
#     return -1


# Moja implementacja po sprawdzeniu jak działa KMP
def strStr(haystack: str, needle: str) -> int:
    i = 1
    l = 0
    lps = []
    for i in range(len(needle)):
        lps.append(0)

    i = 1
    while i < len(needle):
        if needle[i] == needle[l]:
            l += 1
            lps[i] = l
            i += 1
        else:
            if l == 0:
                lps[i] = 0
                i += 1
            else:
                l = lps[l - 1]
    i = 0
    j = 0
    while i <= len(haystack):
        if j == len(needle):
            return i - j
        if i != len(haystack) and haystack[i] == needle[j]:
            i += 1
            j += 1
        else:
            if j == 0:
                i += 1
            else:
                j = lps[j - 1]

    return -1


print(strStr("", "ABABCABAB"))  # -1
print(strStr("a", "a"))  # 0
print(strStr("aaa", "aaaaa"))  # -1
print(strStr("sadbutsad", "sad"))  # 0
print(strStr("leetcode", "leeto"))  # -1
print(strStr("mississippi", "issip"))  # 4
print(strStr("mississippi", "issipi"))  # -1

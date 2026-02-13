# https://leetcode.com/problems/reverse-words-in-a-string/description/

# Złożoność:
# Czas: O(n) - Jedna iteracja
# Pamięć: O(n) - Nowa lista na stringi


# Moje rozwiązanie
def reverseWords(s: str) -> str:
    answer, word = [], ""
    for i in range(len(s) - 1, -1, -1):
        if s[i] != " ":
            word = s[i] + word
        elif len(word) > 0:
            answer.append(word)
            word = ""
    if len(word) > 0:
        answer.append(word)
    return " ".join(answer)


print(reverseWords("the sky is blue"))  # "blue is sky the"
print(reverseWords("  hello world  "))  # "world hello"
print(reverseWords("a good   example"))  # "example good a"

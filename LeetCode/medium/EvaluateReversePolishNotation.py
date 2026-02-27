# https://leetcode.com/problems/evaluate-reverse-polish-notation/description/

# Złożoność:
# Czas: O(n) - Jedna iteracja
# Pamięć: O(n) - Nowy stos na cyfry

# Moje rozwiązanie
operations = {
    "+": (lambda a, b: a + b),
    "-": (lambda a, b: a - b),
    "*": (lambda a, b: a * b),
    "/": (lambda a, b: a / b),
}


def evalRPN(tokens: list[str]) -> int:
    stack = []
    for token in tokens:
        if token in operations:
            b = int(stack.pop())
            a = int(stack.pop())
            stack.append(operations[token](a, b))
        else:
            stack.append(token)
    return int(stack.pop())


print(evalRPN(["2", "1", "+", "3", "*"]))  # 9
print(evalRPN(["4", "13", "5", "/", "+"]))  # 6
print(
    evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
)  # 22
print(evalRPN(["18"]))

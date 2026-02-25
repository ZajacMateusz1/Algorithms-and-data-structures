# https://leetcode.com/problems/min-stack/description/

# Złożoność:
# Czas: O(1) - Każda operacja.
# Pamięć: O(n) - Liczba nodeów.


# Moje rozwiązanie po podpowiedzi
class Node:
    def __init__(self, val, currentMinimum):
        self.val = val
        self.next = None
        self.currentMinimum = currentMinimum


class MinStack:

    def __init__(self):
        self.minElement = None
        self.first = None

    def push(self, val: int) -> None:
        if not self.first:
            self.first = Node(val, val)
            self.minElement = val
        else:
            if val < self.minElement:
                self.minElement = val
            newNode = Node(val, self.minElement)
            newNode.next = self.first
            self.first = newNode

    def pop(self) -> None:
        if not self.first:
            return
        elif not self.first.next:
            self.first = None
            self.minElement = None
        else:
            self.first = self.first.next
            self.minElement = self.first.currentMinimum

    def top(self):
        return self.first.val

    def getMin(self):
        return self.minElement


minStack = MinStack()
print(minStack.push(-2))  # None
print(minStack.push(0))  # None
print(minStack.push(-3))  # None
print(minStack.getMin())  # -3
print(minStack.pop())  # None
print(minStack.top())  # 0
print(minStack.getMin())  # -2

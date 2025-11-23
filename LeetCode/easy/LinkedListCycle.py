# https://leetcode.com/problems/linked-list-cycle/description/

# Złożoność:
# - Pierwsze podejście:
# Czas: O(n) - Jedna iteracja
# Pamięć: O(n) - Nowy dict
# - Po sprawdzeniu
# Czas: O(n) - Jedna iteracja
# Pamięć: O(1) - Tylko zmienne pomocnicze
from typing import Optional


class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def push(self, value):
        newNode = ListNode(value)
        if not self.head:
            self.head = newNode
            self.tail = newNode
        else:
            self.tail.next = newNode
            self.tail = newNode
        self.length += 1
        return newNode

    def pushAllValues(self, values):
        for value in values:
            self.push(value)

    def createCycle(self, index):
        if index < 0 or index >= self.length or not self.head:
            return
        currentNode = self.head
        for i in range(index):
            currentNode = currentNode.next
        self.tail.next = currentNode


# Moja implementacja po sprawdzeniu jak działa: 'Floyd’s Tortoise and Hare Algorithm'
def hasCycle(head: Optional[ListNode]) -> bool:
    if not head:
        return False
    slow = head
    fast = head
    while fast.next and fast.next.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            return True
    return False


# Moja pierwsza implementacja (trochę przekombinowana bo rozwiązanie miało zwracać true lub false):
# def hasCycle(head: Optional[ListNode]) -> bool:
#     if not head:
#         return -1
#     currentNode = head
#     allSeenNodes = {}
#     allSeenNodes[currentNode] = 0
#     i = 1
#     while currentNode.next:
#         if currentNode.next in allSeenNodes:
#             return allSeenNodes[currentNode.next]
#         allSeenNodes[currentNode.next] = i
#         currentNode = currentNode.next
#         i += 1
#     return -1


singlyLinkedList1 = SinglyLinkedList()
singlyLinkedList1.pushAllValues([3, 2, 0, -4])
singlyLinkedList1.createCycle(1)
singlyLinkedList2 = SinglyLinkedList()
singlyLinkedList2.pushAllValues([])
singlyLinkedList3 = SinglyLinkedList()
singlyLinkedList3.pushAllValues([1, 2])
singlyLinkedList3.createCycle(0)
print(hasCycle(singlyLinkedList1.head))  # 1, True
print(hasCycle(singlyLinkedList2.head))  # -1, False
print(hasCycle(singlyLinkedList3.head))  # 0, True

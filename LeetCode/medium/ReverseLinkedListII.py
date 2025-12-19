# https://leetcode.com/problems/reverse-linked-list-ii/description/

# Złożoność:
# - W obydwu wypadkach
# Czas: O(n) - Jedna iteracja
# Pamięć: O(1) - Stała liczba zmiennych

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


def getNode(index, head: Optional[ListNode]):
    currentNode = head
    for i in range(1, index):
        currentNode = currentNode.next
    return currentNode


# Implementacja po sprawdzeniu odpowiedzi:
def reverseBetween(
    head: Optional[ListNode], left: int, right: int
) -> Optional[ListNode]:
    dummy = ListNode(0)
    dummy.next = head
    prevLeftNode, currentNode = dummy, head
    prevNode = None
    for i in range(left - 1):
        prevLeftNode, currentNode = currentNode, currentNode.next
    for i in range(right - left + 1):
        nextNode = currentNode.next
        currentNode.next, prevNode = prevNode, currentNode
        currentNode = nextNode
    prevLeftNode.next.next = currentNode
    prevLeftNode.next = prevNode
    return dummy.next


# Moja pierwsza implementacja
# def reverseBetween(
#     head: Optional[ListNode], left: int, right: int
# ) -> Optional[ListNode]:
#     if left == right:
#         return head
#     i = 1
#     leftNode = None
#     prevLeftNode = None
#     rightNode = None
#     nextNode = None
#     currentNode = head
#     prevNode = None
#     while currentNode and i <= right:
#         if left < i <= right:
#             nextNode = currentNode.next
#             currentNode.next = prevNode
#             prevNode = currentNode
#             currentNode = nextNode
#         elif i == left:
#             leftNode = currentNode
#             currentNode = currentNode.next
#         elif i == left - 1:
#             prevLeftNode = currentNode
#             prevNode = leftNode
#             currentNode = currentNode.next
#         else:
#             currentNode = currentNode.next
#         i += 1
#     leftNode.next.next = leftNode
#     rightNode = prevNode
#     leftNode.next = nextNode
#     if prevLeftNode:
#         prevLeftNode.next = rightNode
#     else:
#         head = rightNode
#     return head


singlyLinkedList1 = SinglyLinkedList()
singlyLinkedList2 = SinglyLinkedList()
singlyLinkedList1.pushAllValues([1, 2, 3, 4, 5])
singlyLinkedList2.pushAllValues([1, 2, 3, 4, 5])

print(reverseBetween(singlyLinkedList1.head, 2, 4))
print(reverseBetween(singlyLinkedList2.head, 1, 5))

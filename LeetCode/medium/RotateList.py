# https://leetcode.com/problems/rotate-list/description/

# Złożoność:
# - Oba warianty
# Czas: O(n) - Kilka niezagnieżdżonych iteracji.
# Pamięć: O(1) - Tylko zmienne pomocnicze

from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


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


# Po sprawdzeniu
def rotateRight(head: Optional[ListNode], k: int) -> Optional[ListNode]:
    if not head:
        return head
    oldTail, listLength = head, 1
    while oldTail.next:
        listLength += 1
        oldTail = oldTail.next
    k %= listLength
    if k == 0:
        return head
    newTail = head
    for _ in range(listLength - k - 1):
        newTail = newTail.next
    newHead = newTail.next
    newTail.next = None
    oldTail.next = head
    return newHead
    # while newHead:
    #     print(newHead.val)
    #     newHead = newHead.next


# Moje rozwiązanie
# def rotateRight(head: Optional[ListNode], k: int) -> Optional[ListNode]:
#     if not head or not head.next:
#         return head
#     currentNode, listLength = head, 0
#     while currentNode:
#         listLength += 1
#         currentNode = currentNode.next
#     k %= listLength
#     if k == 0:
#         return head
#     currentNode, i = head, 1
#     newHead, newTail = None, None
#     while currentNode.next:
#         if i == listLength - k:
#             newTail = currentNode
#             newHead = currentNode.next
#         currentNode = currentNode.next
#         i += 1
#     newTail.next = None
#     currentNode.next = head
#     return newHead
# while newHead:
#     print(newHead.val)
#     newHead = newHead.next


singlyLinkedList1 = SinglyLinkedList()
singlyLinkedList2 = SinglyLinkedList()
singlyLinkedList1.pushAllValues([1, 2, 3, 4, 5])
singlyLinkedList2.pushAllValues([0])
print(rotateRight(singlyLinkedList1.head, 2))
print(rotateRight(singlyLinkedList2.head, 1))

# https://leetcode.com/problems/merge-two-sorted-lists/

# Złożoność:
# Czas: O(n+m) - Jedna iteracja po dwóch listach
# Pamięć: O(1) - Tworzę tylko pierwszy węzeł, resztę przepinam

from typing import Optional


class ListNode:
    def __init__(self, x=0):
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


# Moja implementacja:
def mergeTwoLists(
    list1: Optional[ListNode], list2: Optional[ListNode]
) -> Optional[ListNode]:
    currentNodeList1 = list1
    currentNodeList2 = list2
    first = ListNode()
    currentNodeAnswer = first
    while currentNodeList1 and currentNodeList2:
        if currentNodeList1.val > currentNodeList2.val:
            currentNodeAnswer.next = currentNodeList2
            currentNodeList2 = currentNodeList2.next
        else:
            currentNodeAnswer.next = currentNodeList1
            currentNodeList1 = currentNodeList1.next
        currentNodeAnswer = currentNodeAnswer.next
    while currentNodeList1:
        currentNodeAnswer.next = currentNodeList1
        currentNodeAnswer = currentNodeAnswer.next
        currentNodeList1 = currentNodeList1.next
    while currentNodeList2:
        currentNodeAnswer.next = currentNodeList2
        currentNodeAnswer = currentNodeAnswer.next
        currentNodeList2 = currentNodeList2.next
    return first.next


singlyLinkedList1 = SinglyLinkedList()
singlyLinkedList1.pushAllValues([1, 2, 4])
singlyLinkedList2 = SinglyLinkedList()
singlyLinkedList2.pushAllValues([1, 3, 4])
print(mergeTwoLists(singlyLinkedList1.head, singlyLinkedList2.head))

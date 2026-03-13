# https://leetcode.com/problems/partition-list/description/

# Złożoność:
# Czas: O(n) - Dwie iteracje, które następują po sobie.
# Pamięć: O(1) - Mam tylko zmienne pomocniczą.

from typing import Optional
from DS.LinkedList import ListNode, SinglyLinkedList


# Po sprawdzeniu
def partition(head: Optional[ListNode], x: int) -> Optional[ListNode]:
    smaller, greater = ListNode(0), ListNode(0)
    currentSmaller, currentGreater, currentNode = smaller, greater, head
    while currentNode:
        if currentNode.val < x:
            currentSmaller.next = currentNode
            currentSmaller = currentNode
        else:
            currentGreater.next = currentNode
            currentGreater = currentNode
        currentNode = currentNode.next
    currentGreater.next = None
    currentSmaller.next = greater.next
    return smaller.next
    # currentNode = smaller.next
    # while currentNode:
    #     print(currentNode.val)
    #     currentNode = currentNode.next


# Moje rozwiązanie
# def partition(head: Optional[ListNode], x: int) -> Optional[ListNode]:
#     if not head:
#         return head
#     right = head
#     while right and right.val < x:
#         right = right.next
#     dummy = ListNode(0, right)
#     left = dummy
#     currentNode = head
#     while currentNode:
#         nextNode = currentNode.next
#         if currentNode.val < x:
#             currentNode.next = left.next
#             left.next = currentNode
#             left = currentNode
#         else:
#             right.next = currentNode
#             right = currentNode
#             right.next = None
#         currentNode = nextNode
#     return dummy.next
# currentNode = dummy.next
# while currentNode:
#     print(currentNode.val)
#     currentNode = currentNode.next


singlyLinkedList1 = SinglyLinkedList()
singlyLinkedList2 = SinglyLinkedList()
singlyLinkedList3 = SinglyLinkedList()
singlyLinkedList1.pushAllValues([1, 4, 3, 2, 5, 2])
singlyLinkedList2.pushAllValues([1, 1])
singlyLinkedList3.pushAllValues([1, 4, 3, 0, 2, 5, 2])
partition(singlyLinkedList1.head, 3)  # [1,2,2,4,3,5]
partition(singlyLinkedList2.head, 2)  # [1,1]
partition(singlyLinkedList3.head, 3)  # [1,0,2,2,4,3,5]

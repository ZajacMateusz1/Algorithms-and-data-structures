# https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

# Złożoność:
# - Po sprawdzeniu
# Czas: O(n) - Jedna iteracja
# Pamięć: O(1) - Tylko dummy.
# - Pierwsza wersja
# Czas: O(n) - Jedna iteracja
# Pamięć: O(1) - Tylko dummy.

from typing import Optional
from DS.LinkedList import ListNode, SinglyLinkedList


# Po sprawdzeniu
def removeNthFromEnd(head: Optional[ListNode], n: int) -> Optional[ListNode]:
    if not head:
        return head
    dummy = ListNode(0, head)
    slow = fast = dummy
    for _ in range(n + 1):
        fast = fast.next
    while fast:
        fast = fast.next
        slow = slow.next
    slow.next = slow.next.next
    return dummy.next


# Moje rozwiązanie
# def removeNthFromEnd(head: Optional[ListNode], n: int) -> Optional[ListNode]:
#     if not head:
#         return head
#     currentNode, listLength = head, 0
#     while currentNode:
#         listLength += 1
#         currentNode = currentNode.next
#     DUMMY = ListNode(None, head)
#     currentNode = DUMMY
#     for _ in range(listLength - n):
#         currentNode = currentNode.next
#     currentNode.next = currentNode.next.next
#     return DUMMY.next
#     currentNode = DUMMY.next
#     while currentNode:
#         print(currentNode.val)
#         currentNode = currentNode.next


singlyLinkedList1 = SinglyLinkedList()
singlyLinkedList2 = SinglyLinkedList()
singlyLinkedList3 = SinglyLinkedList()
singlyLinkedList1.pushAllValues([1, 2, 3, 4, 5])
singlyLinkedList2.pushAllValues([1])
singlyLinkedList3.pushAllValues([1, 2])
print(removeNthFromEnd(singlyLinkedList1.head, 2))
print(removeNthFromEnd(singlyLinkedList2.head, 1))
print(removeNthFromEnd(singlyLinkedList3.head, 1))

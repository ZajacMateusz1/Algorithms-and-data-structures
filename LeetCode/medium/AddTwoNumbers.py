# https://leetcode.com/problems/add-two-numbers/description/

# Złożoność:
# - Oba warianty
# Czas: O(Max(n,m)) - Tyle iteracji, ile jest elementów w dłuższej liście.
# Pamięć: O(Max(n,m)) - Wynik będzię miał maksymalnie długość dłuższej listy + 1, ale nawet wtedy się uprości.


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


def addTwoNumbers(l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
    DUMMY = ListNode(0)
    currentNode = DUMMY
    addToNext = 0
    while l1 or l2 or addToNext:
        value1 = l1.val if l1 else 0
        value2 = l2.val if l2 else 0
        result = value1 + value2 + addToNext
        addToNext = result // 10
        result = result % 10
        currentNode.next = ListNode(result)
        currentNode = currentNode.next
        l1 = l1.next if l1 else None
        l2 = l2.next if l2 else None
    return DUMMY.next
    # currentNode = DUMMY.next
    # while currentNode:
    #     print(currentNode.val)
    #     currentNode = currentNode.next


# # Moje rozwiązanie
# def addTwoNumbers(l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
#     currentNode1, currentNode2 = l1, l2
#     DUMMY = ListNode(0)
#     currentAnswerNode = DUMMY
#     addToNext = 0
#     while currentNode1 and currentNode2:
#         result = currentNode1.val + currentNode2.val
#         result += addToNext
#         addToNext = result // 10
#         result %= 10
#         currentAnswerNode.next = ListNode(result)
#         currentAnswerNode = currentAnswerNode.next
#         currentNode1 = currentNode1.next
#         currentNode2 = currentNode2.next
#     while currentNode1:
#         result = currentNode1.val
#         result += addToNext
#         addToNext = result // 10
#         result %= 10
#         currentAnswerNode.next = ListNode(result)
#         currentAnswerNode = currentAnswerNode.next
#         currentNode1 = currentNode1.next
#     while currentNode2:
#         result = currentNode2.val
#         result += addToNext
#         addToNext = result // 10
#         result %= 10
#         currentAnswerNode.next = ListNode(result)
#         currentAnswerNode = currentAnswerNode.next
#         currentNode2 = currentNode2.next
#     if addToNext != 0:
#         currentAnswerNode.next = ListNode(addToNext)
#     return DUMMY.next
# currentNode = DUMMY.next
# while currentNode:
#     print(currentNode.val)
#     currentNode = currentNode.next


SinglyLinkedList1 = SinglyLinkedList()
SinglyLinkedList2 = SinglyLinkedList()
SinglyLinkedList3 = SinglyLinkedList()
SinglyLinkedList4 = SinglyLinkedList()
SinglyLinkedList5 = SinglyLinkedList()
SinglyLinkedList6 = SinglyLinkedList()
SinglyLinkedList1.pushAllValues([2, 4, 3])
SinglyLinkedList2.pushAllValues([5, 6, 4])
SinglyLinkedList3.pushAllValues([2, 4, 9])
SinglyLinkedList4.pushAllValues([5, 6, 4, 9])
SinglyLinkedList5.pushAllValues([9, 9, 9, 9, 9, 9, 9])
SinglyLinkedList6.pushAllValues([9, 9, 9, 9])

print(addTwoNumbers(SinglyLinkedList1.head, SinglyLinkedList2.head))  # [7,0,8]
print(addTwoNumbers(SinglyLinkedList3.head, SinglyLinkedList4.head))  # [0]
print(
    addTwoNumbers(SinglyLinkedList5.head, SinglyLinkedList6.head)
)  # [8,9,9,9,0,0,0,1]

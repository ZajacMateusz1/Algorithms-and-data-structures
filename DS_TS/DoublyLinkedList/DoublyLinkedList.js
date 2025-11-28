"use strict";
// Złożoność:
// - push
// Czas: O(1) - Wykonuję stałą liczbę operacji
// Pamięć: O(1) - tylko zmienne pomocnicze
// - pop
// Czas: O(1) - Wykonuję stałą liczbę operacji
// Pamięć: O(1) - tylko zmienne pomocnicze
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    value;
    next;
    prev;
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}
class DoublyLinkedList {
    head = null;
    tail = null;
    length = 0;
    push(value) {
        const newNode = new Node(value);
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.tail)
            return undefined;
        const oldTail = this.tail;
        if (!this.tail.prev) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length--;
        return oldTail;
    }
}
const doublyLinkedList = new DoublyLinkedList();
// doublyLinkedList.push(1);
// doublyLinkedList.push(2);
// doublyLinkedList.push(3);
const prev = doublyLinkedList.pop();
console.log(prev);
console.log(doublyLinkedList);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Złożoność:
// - push
// Czas: O(1) - Wykonuję stałą liczbę operacji
// Pamięć: O(1) - tylko zmienne pomocnicze
// - pop
// Czas: O(n) - Muszę przejść przez listę, aby dotrzeć do ostatniego elementu. Tak samo dla obydwu implementacji
// Pamięć: O(1) - tylko zmienne pomocnicze
// - shift
// Czas: O(1) - Wykonuję stałą liczbę operacji
// Pamięć: O(1) - tylko zmienne pomocnicze
// - unshift
// Czas: O(1) - Wykonuję stałą liczbę operacji
// Pamięć: O(1) - tylko zmienne pomocnicze
class Node {
    value;
    next;
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class SinglyLinkedList {
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
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // Implementacja metody pop po sprawdzeniu
    pop() {
        if (!this.head)
            return undefined;
        let current = this.head;
        let prev = this.head;
        while (current.next) {
            prev = current;
            current = current.next;
        }
        prev.next = null;
        this.tail = prev;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head)
            return undefined;
        const oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if (!this.head)
            this.tail = null;
        return oldHead;
    }
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}
const singlyLinkedList = new SinglyLinkedList();
console.log(singlyLinkedList.push(1));
console.log(singlyLinkedList.push(2));
console.log(singlyLinkedList.pop());
console.log(singlyLinkedList.shift());
console.log(singlyLinkedList.unshift(4));

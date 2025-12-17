"use strict";
// Złożoność:
// - enqueue
// Czas: O(1) - Wykonuję stałą liczbę operacji
// Pamięć: O(1) - tylko zmienne pomocnicze
// - dequeue
// Czas: O(1) - Wykonuję stałą liczbę operacji
// Pamięć: O(1) - tylko zmienne pomocnicze
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    value;
    next;
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class Queue {
    first = null;
    last = null;
    size = 0;
    enqueue(value) {
        const newNode = new Node(value);
        if (!this.last) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue() {
        if (!this.first)
            return undefined;
        const oldFirst = this.first;
        if (!this.first.next) {
            this.first = null;
            this.last = null;
        }
        else {
            this.first = oldFirst.next;
            oldFirst.next = null;
        }
        this.size--;
        return oldFirst;
    }
}
const queue = new Queue();
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.dequeue());
console.log(queue.enqueue(3));
console.log(queue.dequeue());
console.log(queue);

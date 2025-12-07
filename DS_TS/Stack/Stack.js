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
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class Stack {
    first = null;
    size = 0;
    push(value) {
        const newNode = new Node(value);
        newNode.next = this.first;
        this.first = newNode;
        return ++this.size;
    }
    pop() {
        if (!this.first)
            return undefined;
        const oldFirst = this.first;
        this.first = oldFirst.next;
        oldFirst.next = null;
        this.size--;
        return oldFirst.value;
    }
}
const stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);

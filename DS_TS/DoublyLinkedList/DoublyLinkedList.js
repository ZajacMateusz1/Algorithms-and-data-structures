// Złożoność:
// - push
// Czas: O(1) - Wykonuję stałą liczbę operacji
// Pamięć: O(1) - tylko zmienne pomocnicze
// - pop
// Czas: O(1) - Wykonuję stałą liczbę operacji
// Pamięć: O(1) - tylko zmienne pomocnicze
// - shift
// Czas: O(1) - Wykonuję stałą liczbę operacji
// Pamięć: O(1) - tylko zmienne pomocnicze
// - unshift
// Czas: O(1) - Wykonuję stałą liczbę operacji
// Pamięć: O(1) - tylko zmienne pomocnicze
// - get
// Czas: O(n) - Muszę przejść przez listę, aby dotrzeć do szukanego elementu, dodałem               optymalizajcę, ale i tak przybliży się do O(n)
// Pamięć: O(1) - tylko zmienne pomocnicze
// - set
// Czas: O(n) - Muszę przejść przez listę, aby dotrzeć do szukanego elementu.
// Pamięć: O(1) - tylko zmienne pomocnicze
// - insert
// Jeśli wykorzystuje metody unshift albo push to przyjmuje ich złożoność.
// Czas: O(n) - Muszę przejść przez listę, aby dotrzeć do szukanego elementu.
// Pamięć: O(1) - tylko zmienne pomocnicze
// - remove
// Jeśli wykorzystuje metody shift albo pop to przyjmuje ich złożoność.
// Czas: O(n) - Muszę przejść przez listę, aby dotrzeć do szukanego elementu.
// Pamięć: O(1) - tylko zmienne pomocnicze
// - showAllNodes
// Czas: O(n) - Jedna iteracja
// Pamięć: O(1) - tylko zmienne pomocnicze
// - reverse
// Czas: O(n) - Jedna iteracja
// Pamięć: O(1) - tylko zmienne pomocnicze
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
    shift() {
        if (!this.head)
            return undefined;
        const oldHead = this.head;
        if (!oldHead.next) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length)
            return undefined;
        let currentNode = null;
        if (index >= this.length / 2) {
            currentNode = this.tail;
            let i = this.length - 1;
            while (i > index && currentNode) {
                currentNode = currentNode.prev;
                i--;
            }
        }
        else {
            currentNode = this.head;
            let i = 0;
            while (i < index && currentNode) {
                currentNode = currentNode.next;
                i++;
            }
        }
        return currentNode || undefined;
    }
    set(index, newValue) {
        const node = this.get(index);
        if (!node)
            return false;
        node.value = newValue;
        return true;
    }
    insert(index, newValue) {
        if (index === 0) {
            this.unshift(newValue);
        }
        else if (index === this.length) {
            this.push(newValue);
        }
        else {
            const prevNode = this.get(index - 1);
            if (!prevNode || !prevNode.next)
                return false;
            const newNode = new Node(newValue);
            newNode.prev = prevNode;
            newNode.next = prevNode.next;
            prevNode.next = newNode;
            newNode.next.prev = newNode;
            this.length++;
        }
        return true;
    }
    remove(index) {
        if (index === 0)
            return this.shift();
        else if (index === this.length - 1)
            return this.pop();
        else {
            const nodeToRemove = this.get(index);
            if (!nodeToRemove || !nodeToRemove.prev || !nodeToRemove.next)
                return undefined;
            const prevNode = nodeToRemove.prev;
            const nextNode = nodeToRemove.next;
            nextNode.prev = prevNode;
            prevNode.next = nextNode;
            nodeToRemove.prev = null;
            nodeToRemove.next = null;
            this.length--;
            return nodeToRemove;
        }
    }
    showAllNodes() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode);
            currentNode = currentNode.next;
        }
    }
    reverse() {
        if (!this.head || !this.tail)
            return this;
        const oldHead = this.head;
        this.head = this.tail;
        this.tail = oldHead;
        let currentNode = oldHead;
        while (currentNode) {
            const nextNode = currentNode.next;
            currentNode.next = currentNode.prev;
            currentNode.prev = nextNode;
            currentNode = nextNode;
        }
        return this;
    }
}
const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(1);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
console.log(doublyLinkedList.pop());
console.log(doublyLinkedList.shift());
console.log(doublyLinkedList.unshift(30));
console.log(doublyLinkedList.get(1));
console.log(doublyLinkedList.set(0, 29));
console.log(doublyLinkedList.insert(1, 21));
console.log(doublyLinkedList.get(1));
console.log(doublyLinkedList.remove(1));
console.log(doublyLinkedList.showAllNodes());
doublyLinkedList.reverse();
console.log(doublyLinkedList.showAllNodes());
console.log(doublyLinkedList);
export {};

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
// - get
// Czas: O(n) - Muszę przejść przez listę, aby dotrzeć do szukanego elementu.
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
// - reverse
// Czas: O(n) - Jedna iteracja
// Pamięć: O(1) - tylko zmienne pomocnicze
// - rotate
// Czas: O(n) - Jedna iteracja
// Pamięć: O(1) - tylko zmienne pomocnicze
// - showAllNodes
// Czas: O(n) - Jedna iteracja
// Pamięć: O(1) - tylko zmienne pomocnicze

class Node<T> {
  constructor(public value: T, public next: Node<T> | null = null) {}
}

class SinglyLinkedList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  public length = 0;
  public push(value: T): SinglyLinkedList<T> {
    const newNode = new Node(value);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // Implementacja metody pop po sprawdzeniu
  public pop(): Node<T> | undefined {
    if (!this.head) return undefined;
    let currentNode = this.head;
    let prevNode = this.head;
    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = null;
    this.tail = prevNode;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }
  public shift(): Node<T> | undefined {
    if (!this.head) return undefined;
    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (!this.head) this.tail = null;
    return oldHead;
  }
  public unshift(value: T): SinglyLinkedList<T> {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  public get(index: number): Node<T> | undefined {
    if (index < 0 || index >= this.length) return undefined;
    let currentNode = this.head;
    let i = 0;
    while (i < index) {
      currentNode = currentNode!.next;
      i++;
    }
    return currentNode!;
  }
  public set(index: number, newValue: T): boolean {
    const node = this.get(index);
    if (!node) return false;
    node.value = newValue;
    return true;
  }
  public insert(index: number, value: T): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(value);
    } else if (index === 0) {
      this.unshift(value);
    } else {
      const newNode = new Node(value);
      const prevNode = this.get(index - 1);
      if (!prevNode) return false;
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;
    }
    return true;
  }
  public remove(index: number): Node<T> | undefined {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    else if (index === this.length - 1) return this.pop();
    else {
      const prevNode = this.get(index - 1);
      if (!prevNode || !prevNode.next) return undefined;
      const nodeToRemove = prevNode.next;
      prevNode.next = nodeToRemove.next;
      this.length--;
      return nodeToRemove;
    }
  }
  public reverse(): SinglyLinkedList<T> {
    if (!this.head || !this.tail) return this;
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let prevNode = null;
    while (currentNode.next) {
      let nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.head.next = prevNode;
    return this;
  }
  public rotate(index: number): SinglyLinkedList<T> {
    if (!this.head || !this.tail) return this;
    index %= this.length;
    if (index < 0) {
      index += this.length;
    } else if (index === 0) return this;
    let i = 0;
    let oldHead = this.head;
    let prevIndexNode = this.head;
    while (prevIndexNode.next && i < index - 1) {
      prevIndexNode = prevIndexNode.next;
      i++;
    }
    this.head = prevIndexNode.next;
    prevIndexNode.next = null;
    this.tail.next = oldHead;
    this.tail = prevIndexNode;
    return this;
  }
  public showAllNodes(): undefined {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }
}
// Moja pierwsza implementacja metody pop
// public pop(): Node<T> | undefined {
//   if (!this.head) return undefined;
//   if (!this.head.next) {
//     const valueToReturn = this.head;
//     this.head = null;
//     this.tail = null;
//     this.length--;
//     return valueToReturn;
//   }
//   let currentNode = this.head;
//   let nextNode = this.head.next;
//   while (nextNode.next) {
//     currentNode = nextNode;
//     nextNode = nextNode.next;
//   }
//   currentNode.next = null;
//   this.tail = currentNode;
//   this.length--;
//   return nextNode;
// }
const singlyLinkedList = new SinglyLinkedList<number>();
// console.log(singlyLinkedList.push(1));
// console.log(singlyLinkedList.push(2));
// console.log(singlyLinkedList.pop());
// console.log(singlyLinkedList.shift());
// console.log(singlyLinkedList.unshift(4));
// console.log(singlyLinkedList.unshift(5));
// console.log(singlyLinkedList.unshift(6));
// console.log(singlyLinkedList.get(2));
// console.log(singlyLinkedList.set(2, 7));
// console.log(singlyLinkedList.get(2));
// console.log(singlyLinkedList.insert(0, 10));
// console.log(singlyLinkedList.get(0));
// console.log(singlyLinkedList.remove(1));
for (let i = 5; i <= 25; i += 5) {
  singlyLinkedList.push(i);
}
// console.log(singlyLinkedList.reverse());
console.log(singlyLinkedList.rotate(1000));
// singlyLinkedList.showAllNodes();

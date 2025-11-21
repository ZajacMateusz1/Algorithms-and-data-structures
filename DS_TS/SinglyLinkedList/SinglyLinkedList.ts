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
}
const singlyLinkedList = new SinglyLinkedList<number>();
console.log(singlyLinkedList.push(1));
console.log(singlyLinkedList.push(2));
console.log(singlyLinkedList.pop());
console.log(singlyLinkedList.shift());
console.log(singlyLinkedList.unshift(4));

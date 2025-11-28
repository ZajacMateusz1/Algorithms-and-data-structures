// Złożoność:
// - push
// Czas: O(1) - Wykonuję stałą liczbę operacji
// Pamięć: O(1) - tylko zmienne pomocnicze
// - pop
// Czas: O(1) - Wykonuję stałą liczbę operacji
// Pamięć: O(1) - tylko zmienne pomocnicze

class Node<T> {
  constructor(
    public value: T,
    public next: Node<T> | null = null,
    public prev: Node<T> | null = null
  ) {}
}
class DoublyLinkedList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  public length = 0;

  public push(value: T): DoublyLinkedList<T> {
    const newNode = new Node(value);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  public pop(): Node<T> | undefined {
    if (!this.tail) return undefined;
    const oldTail = this.tail;
    if (!this.tail.prev) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }
}
const doublyLinkedList = new DoublyLinkedList<number>();
doublyLinkedList.push(1);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
const prev = doublyLinkedList.pop();
console.log(prev);
console.log(doublyLinkedList);

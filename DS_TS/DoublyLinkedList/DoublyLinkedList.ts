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
  public shift(): Node<T> | undefined {
    if (!this.head) return undefined;
    const oldHead = this.head;
    if (!oldHead.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  public unshift(value: T): DoublyLinkedList<T> {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  public get(index: number): Node<T> | undefined {
    if (index < 0 || index >= this.length) return undefined;
    let currentNode = null;
    if (index >= this.length / 2) {
      currentNode = this.tail;
      let i = this.length - 1;
      while (i > index && currentNode) {
        currentNode = currentNode.prev;
        i--;
      }
    } else {
      currentNode = this.head;
      let i = 0;
      while (i < index && currentNode) {
        currentNode = currentNode.next;
        i++;
      }
    }
    return currentNode || undefined;
  }
  public set(index: number, newValue: T): boolean {
    const node = this.get(index);
    if (!node) return false;
    node.value = newValue;
    return true;
  }
  public insert(index: number, newValue: T): boolean {
    if (index === 0) {
      this.unshift(newValue);
    } else if (index === this.length) {
      this.push(newValue);
    } else {
      const prevNode = this.get(index - 1);
      if (!prevNode || !prevNode.next) return false;
      const newNode = new Node(newValue);
      newNode.prev = prevNode;
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      newNode.next.prev = newNode;
      this.length++;
    }
    return true;
  }
  public remove(index: number): Node<T> | undefined {
    if (index === 0) return this.shift();
    else if (index === this.length - 1) return this.pop();
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
  public showAllNodes(): undefined {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }
}
const doublyLinkedList = new DoublyLinkedList<number>();
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
console.log(doublyLinkedList);

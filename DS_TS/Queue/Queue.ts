// Złożoność:
// - enqueue
// Czas: O(1) - Wykonuję stałą liczbę operacji
// Pamięć: O(1) - tylko zmienne pomocnicze
// - dequeue
// Czas: O(1) - Wykonuję stałą liczbę operacji
// Pamięć: O(1) - tylko zmienne pomocnicze

class Node<T> {
  constructor(public value: T, public next: Node<T> | null = null) {}
}
export class Queue<T> {
  private first: Node<T> | null = null;
  private last: Node<T> | null = null;
  public size: number = 0;
  public enqueue(value: T): number {
    const newNode = new Node(value);
    if (!this.last) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  public dequeue(): T | undefined {
    if (!this.first) return undefined;
    const oldFirst = this.first;
    if (!this.first.next) {
      this.first = null;
      this.last = null;
    } else {
      this.first = oldFirst.next;
      oldFirst.next = null;
    }
    this.size--;
    return oldFirst.value;
  }
}

const queue = new Queue();
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.dequeue());
console.log(queue.enqueue(3));
console.log(queue.dequeue());
console.log(queue);

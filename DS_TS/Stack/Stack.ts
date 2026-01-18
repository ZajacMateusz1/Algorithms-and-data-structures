// Złożoność:
// - push
// Czas: O(1) - Wykonuję stałą liczbę operacji
// Pamięć: O(1) - tylko zmienne pomocnicze
// - pop
// Czas: O(1) - Wykonuję stałą liczbę operacji
// Pamięć: O(1) - tylko zmienne pomocnicze

class Node<T> {
  constructor(public value: T, public next: Node<T> | null = null) {}
}
export class Stack<T> {
  private first: Node<T> | null = null;
  public size: number = 0;
  public push(value: T): number {
    const newNode = new Node(value);
    newNode.next = this.first;
    this.first = newNode;
    return ++this.size;
  }
  public pop(): T | undefined {
    if (!this.first) return undefined;
    const oldFirst = this.first;
    this.first = oldFirst.next;
    oldFirst.next = null;
    this.size--;
    return oldFirst.value;
  }
}

const stack = new Stack<number>();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);

// Złożoność:
// - enqueue
// Czas: O(log n) - Element jest dodawany na koniec tablicy i może zrobić bubble up maksymalnie
// o wysokość kopca (log n).
// Pamięć: O(1) - Tylko zmienne pomocnicze.
//
// - dequeue
// Czas: O(log n) - Usuwam korzeń i wykonuję bubble down, maksymalnie o wysokość kopca (log n).
// Pamięć: O(1) - Tylko zmienne pomocnicze.
class Node<T> {
  constructor(
    public value: T,
    public priority: number,
  ) {}
}
export class PriorityQueue<T> {
  private values: Node<T>[] = [];
  get size(): number {
    return this.values.length;
  }
  enqueue(value: T, priority: number): void {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    let valueIndex = this.values.length - 1;
    while (valueIndex > 0) {
      const parentIndex = Math.floor((valueIndex - 1) / 2);
      if (
        this.values[valueIndex]!.priority >= this.values[parentIndex]!.priority
      )
        break;
      [this.values[valueIndex], this.values[parentIndex]] = [
        this.values[parentIndex]!,
        this.values[valueIndex]!,
      ];
      valueIndex = parentIndex;
    }
  }
  dequeue(): T | undefined {
    if (!this.values.length) return undefined;
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1]!,
      this.values[0]!,
    ];
    const removed = this.values.pop();
    let bubblingIndex = 0;
    while (true) {
      const leftChildIndex = bubblingIndex * 2 + 1;
      const rightChildIndex = bubblingIndex * 2 + 2;
      if (leftChildIndex >= this.values.length) break;
      let smallestIndex = leftChildIndex;
      if (rightChildIndex < this.values.length) {
        if (
          this.values[smallestIndex]!.priority >
          this.values[rightChildIndex]!.priority
        ) {
          smallestIndex = rightChildIndex;
        }
      }
      if (
        this.values[bubblingIndex]!.priority <=
        this.values[smallestIndex]!.priority
      )
        break;
      [this.values[bubblingIndex], this.values[smallestIndex]] = [
        this.values[smallestIndex]!,
        this.values[bubblingIndex]!,
      ];
      bubblingIndex = smallestIndex;
    }
    return removed!.value;
  }
}

const priorityQueue = new PriorityQueue<number>();

console.log(priorityQueue.enqueue(1, 1));
console.log(priorityQueue.enqueue(5, 6));
console.log(priorityQueue.enqueue(1, 2));
console.log(priorityQueue.enqueue(2, 3));
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());

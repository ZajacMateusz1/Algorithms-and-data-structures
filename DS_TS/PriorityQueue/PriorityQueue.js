class Node {
    value;
    priority;
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}
class PriorityQueue {
    values = [];
    enqueue(value, priority) {
        const newNode = new Node(value, priority);
        this.values.push(newNode);
        let valueIndex = this.values.length - 1;
        while (valueIndex > 0) {
            const parentIndex = Math.floor((valueIndex - 1) / 2);
            if (this.values[valueIndex].priority >= this.values[parentIndex].priority)
                break;
            [this.values[valueIndex], this.values[parentIndex]] = [
                this.values[parentIndex],
                this.values[valueIndex],
            ];
            valueIndex = parentIndex;
        }
    }
    dequeue() {
        if (!this.values.length)
            return undefined;
        [this.values[0], this.values[this.values.length - 1]] = [
            this.values[this.values.length - 1],
            this.values[0],
        ];
        const removed = this.values.pop();
        let bubblingIndex = 0;
        while (this) {
            const leftChildIndex = bubblingIndex * 2 + 1;
            const rightChildIndex = bubblingIndex * 2 + 2;
            if (leftChildIndex >= this.values.length)
                break;
            let smallestIndex = leftChildIndex;
            if (rightChildIndex < this.values.length) {
                if (this.values[smallestIndex].priority -
                    this.values[rightChildIndex].priority >
                    0) {
                    smallestIndex = rightChildIndex;
                }
            }
            [this.values[bubblingIndex], this.values[smallestIndex]] = [
                this.values[smallestIndex],
                this.values[bubblingIndex],
            ];
            bubblingIndex = smallestIndex;
        }
        return removed;
    }
}
const priorityQueue = new PriorityQueue();
console.log(priorityQueue.enqueue(1, 1));
console.log(priorityQueue.enqueue(5, 6));
console.log(priorityQueue.enqueue(1, 2));
console.log(priorityQueue.enqueue(2, 3));
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values);
export {};

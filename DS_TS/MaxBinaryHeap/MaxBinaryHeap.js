class MaxBinaryHeap {
    comparator;
    values = [];
    constructor(comparator) {
        this.comparator = comparator;
    }
    // Po sprawdzeniu
    insert(value) {
        this.values.push(value);
        let valueIndex = this.values.length - 1;
        while (valueIndex > 0) {
            const parentIndex = Math.floor((valueIndex - 1) / 2);
            if (this.comparator(this.values[valueIndex], this.values[parentIndex]) <=
                0) {
                break;
            }
            [this.values[valueIndex], this.values[parentIndex]] = [
                this.values[parentIndex],
                this.values[valueIndex],
            ];
            valueIndex = parentIndex;
        }
    }
    extractMax() {
        if (!this.values.length)
            return undefined;
        const lastElementIndex = this.values.length - 1;
        let sinkElementIndex = 0;
        [this.values[0], this.values[lastElementIndex]] = [
            this.values[lastElementIndex],
            this.values[0],
        ];
        const removed = this.values.pop();
        while (true) {
            const leftChildIndex = sinkElementIndex * 2 + 1;
            const rightChildIndex = sinkElementIndex * 2 + 2;
            if (leftChildIndex >= this.values.length)
                break;
            let greaterIndex = leftChildIndex;
            if (rightChildIndex < this.values.length) {
                if (this.comparator(this.values[leftChildIndex], this.values[rightChildIndex]) < 0) {
                    greaterIndex = rightChildIndex;
                }
            }
            if (this.comparator(this.values[greaterIndex], this.values[sinkElementIndex]) <= 0) {
                break;
            }
            [this.values[greaterIndex], this.values[sinkElementIndex]] = [
                this.values[sinkElementIndex],
                this.values[greaterIndex],
            ];
            sinkElementIndex = greaterIndex;
        }
        return removed;
    }
}
const maxBinaryHeap = new MaxBinaryHeap((a, b) => a - b);
console.log(maxBinaryHeap.insert(1));
console.log(maxBinaryHeap.insert(100));
console.log(maxBinaryHeap.insert(200));
console.log(maxBinaryHeap.insert(50));
console.log(maxBinaryHeap.insert(10));
console.log(maxBinaryHeap.insert(20));
console.log(maxBinaryHeap.insert(1111));
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
export {};

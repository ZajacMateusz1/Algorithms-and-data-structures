// Złożoność:
// - insert
// Czas:
//  - Średni: O(log n) - Za każdym wyborem eliminuję połowę opcji.
//  - Najgorszy: O(n) - w najgorszym wypadku jeśli BST jest w zasadzie listą, poniważ muszę przejść przez wszystkie elementy.
// Pamięć: O(1) - tylko zmienne pomocnicze
// - insertRecursive
// Czas: O(log n) lub O(n) - Tak samo jak insert.
// Pamięć:
//  - Średni: O(log n) - Wyjdzie taka sama jak czasowa, ponieważ od czasowej zależy ile funkcji dodam na stos.
//  - Najgorszy: O(n) - Wyjdzie taka sama jak czasowa, ponieważ od czasowej zależy ile funkcji dodam na stos.
// - find
// Czas: O(log n) lub O(n) - Tak samo jak insert.
// Pamięć: O(1) - tylko zmienne pomocnicze
// - findRecursive
// Czas: O(log n) lub O(n) - Tak samo jak insert.
// Pamięć:
//  - Średni: O(log n) - Wyjdzie taka sama jak czasowa, ponieważ od czasowej zależy ile funkcji dodam na stos.
//  - Najgorszy: O(n) - Wyjdzie taka sama jak czasowa, ponieważ od czasowej zależy ile funkcji dodam na stos.
// - BFS
// Czas: O(n) - Odwiedzam każdy element raz.
// Pamięć: O(n) - kolejka (szerokość drzewa) + tablica answer
// DFS (Wszystkie warianty)
// Czas: O(n) - Odwiedzam każdy element raz.
// Pamięć:
//  - stos rekurencji: O(log n) średnio, O(n) w najgorszym
//  - tablica answer: O(n)
import { Queue } from "../Queue/Queue.js";
class Node {
    value;
    left;
    right;
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
class BinarySearchTree {
    comparator;
    root = null;
    constructor(comparator) {
        this.comparator = comparator;
    }
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            let currentNode = this.root;
            while (currentNode) {
                const comparatorValue = this.comparator(currentNode.value, value);
                if (comparatorValue < 0) {
                    if (currentNode.right) {
                        currentNode = currentNode.right;
                    }
                    else {
                        currentNode.right = newNode;
                        return this;
                    }
                }
                else if (comparatorValue > 0) {
                    if (currentNode.left) {
                        currentNode = currentNode.left;
                    }
                    else {
                        currentNode.left = newNode;
                        return this;
                    }
                }
                else
                    return this;
            }
        }
        return this;
    }
    insertRecursive(value) {
        if (!this.root) {
            const newNode = new Node(value);
            this.root = newNode;
            return this;
        }
        this.insertRecursiveHelper(this.root, value);
        return this;
    }
    insertRecursiveHelper(currentNode, value) {
        const comparatorValue = this.comparator(currentNode.value, value);
        if (comparatorValue < 0) {
            if (currentNode.right) {
                this.insertRecursiveHelper(currentNode.right, value);
            }
            else {
                const newNode = new Node(value);
                currentNode.right = newNode;
            }
        }
        else if (comparatorValue > 0) {
            if (currentNode.left) {
                this.insertRecursiveHelper(currentNode.left, value);
            }
            else {
                const newNode = new Node(value);
                currentNode.left = newNode;
            }
        }
    }
    find(value) {
        if (!this.root)
            return undefined;
        let currentNode = this.root;
        while (currentNode) {
            const comparatorValue = this.comparator(currentNode.value, value);
            if (comparatorValue === 0)
                return currentNode;
            else if (comparatorValue < 0) {
                if (currentNode.right) {
                    currentNode = currentNode.right;
                }
                else
                    return undefined;
            }
            else {
                if (currentNode.left) {
                    currentNode = currentNode.left;
                }
                else
                    return undefined;
            }
        }
    }
    findRecursive(value) {
        if (!this.root)
            return undefined;
        return this.findRecursiveHelper(this.root, value);
    }
    findRecursiveHelper(currentNode, value) {
        const comparatorValue = this.comparator(currentNode.value, value);
        if (comparatorValue === 0)
            return currentNode;
        else if (comparatorValue < 0) {
            if (currentNode.right) {
                return this.findRecursiveHelper(currentNode.right, value);
            }
            else
                return undefined;
        }
        else {
            if (currentNode.left) {
                return this.findRecursiveHelper(currentNode.left, value);
            }
            else
                return undefined;
        }
    }
    BFS() {
        if (!this.root)
            return [];
        const queue = new Queue();
        const answer = [];
        queue.enqueue(this.root);
        while (queue.size > 0) {
            const node = queue.dequeue();
            if (node.left) {
                queue.enqueue(node.left);
            }
            if (node.right) {
                queue.enqueue(node.right);
            }
            answer.push(node.value);
        }
        return answer;
    }
    DFSPreOrder() {
        if (!this.root)
            return [];
        const answer = [];
        this.DFSPreOrderHelper(this.root, answer);
        return answer;
    }
    DFSPreOrderHelper(currentNode, answer) {
        answer.push(currentNode.value);
        if (currentNode.left)
            this.DFSPreOrderHelper(currentNode.left, answer);
        if (currentNode.right)
            this.DFSPreOrderHelper(currentNode.right, answer);
    }
    DFSPostOrder() {
        if (!this.root)
            return [];
        const answer = [];
        this.DFSPostOrderHelper(this.root, answer);
        return answer;
    }
    DFSPostOrderHelper(currentNode, answer) {
        if (currentNode.left)
            this.DFSPostOrderHelper(currentNode.left, answer);
        if (currentNode.right)
            this.DFSPostOrderHelper(currentNode.right, answer);
        answer.push(currentNode.value);
    }
    DFSInOrder() {
        if (!this.root)
            return [];
        const answer = [];
        this.DFSInOrderHelper(this.root, answer);
        return answer;
    }
    DFSInOrderHelper(currentNode, answer) {
        if (currentNode.left)
            this.DFSInOrderHelper(currentNode.left, answer);
        answer.push(currentNode.value);
        if (currentNode.right)
            this.DFSInOrderHelper(currentNode.right, answer);
    }
}
const binarySearchTree = new BinarySearchTree((a, b) => a - b);
binarySearchTree.insert(1);
// console.log(binarySearchTree.insert(2));
// console.log(binarySearchTree.insert(4));
// console.log(binarySearchTree.insert(3));
// console.log(binarySearchTree.insert(-1));
console.log(binarySearchTree.insertRecursive(2));
console.log(binarySearchTree.insertRecursive(4));
console.log(binarySearchTree.insertRecursive(3));
console.log(binarySearchTree.insertRecursive(-1));
console.log(binarySearchTree.insertRecursive(-4));
console.log(binarySearchTree.insertRecursive(-5));
console.log(binarySearchTree.insertRecursive(-2));
// console.log(binarySearchTree.find(3));
// console.log(binarySearchTree.findRecursive(3));
// console.log(binarySearchTree.find(-1));
// console.log(binarySearchTree.findRecursive(-1));
// console.log(binarySearchTree.find(0));
// console.log(binarySearchTree.findRecursive(0));
console.log(binarySearchTree.BFS());
console.log(binarySearchTree.DFSPreOrder());
console.log(binarySearchTree.DFSPostOrder());
console.log(binarySearchTree.DFSInOrder());
//             1
//           /   \
//        -1       2
//        /         \
//     -4            4
//     /  \          /
//  -5    -2       3

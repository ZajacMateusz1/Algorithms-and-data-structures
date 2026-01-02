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

class Node<T> {
  constructor(
    public value: T,
    public left: Node<T> | null = null,
    public right: Node<T> | null = null
  ) {}
}

class BinarySearchTree<T> {
  private root: Node<T> | null = null;
  constructor(private readonly comparator: (a: T, b: T) => number) {}
  public insert(value: T): BinarySearchTree<T> {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode: Node<T> = this.root;
      while (currentNode) {
        const comparatorValue = this.comparator(currentNode.value, value);
        if (comparatorValue < 0) {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = newNode;
            return this;
          }
        } else if (comparatorValue > 0) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = newNode;
            return this;
          }
        } else return this;
      }
    }
    return this;
  }
  public insertRecursive(value: T): BinarySearchTree<T> {
    if (!this.root) {
      const newNode = new Node(value);
      this.root = newNode;
      return this;
    }
    this.insertRecursiveHelper(this.root, value);
    return this;
  }
  private insertRecursiveHelper(currentNode: Node<T>, value: T): void {
    const comparatorValue = this.comparator(currentNode.value, value);
    if (comparatorValue < 0) {
      if (currentNode.right) {
        this.insertRecursiveHelper(currentNode.right, value);
      } else {
        const newNode = new Node(value);
        currentNode.right = newNode;
      }
    } else if (comparatorValue > 0) {
      if (currentNode.left) {
        this.insertRecursiveHelper(currentNode.left, value);
      } else {
        const newNode = new Node(value);
        currentNode.left = newNode;
      }
    }
  }
  public find(value: T): Node<T> | undefined {
    if (!this.root) return undefined;
    let currentNode = this.root;
    while (currentNode) {
      const comparatorValue = this.comparator(currentNode.value, value);
      if (comparatorValue === 0) return currentNode;
      else if (comparatorValue < 0) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else return undefined;
      } else {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else return undefined;
      }
    }
  }
  public findRecursive(value: T): Node<T> | undefined {
    if (!this.root) return undefined;
    return this.findRecursiveHelper(this.root, value);
  }
  private findRecursiveHelper(
    currentNode: Node<T>,
    value: T
  ): Node<T> | undefined {
    const comparatorValue = this.comparator(currentNode.value, value);
    if (comparatorValue === 0) return currentNode;
    else if (comparatorValue < 0) {
      if (currentNode.right) {
        return this.findRecursiveHelper(currentNode.right, value);
      } else return undefined;
    } else {
      if (currentNode.left) {
        return this.findRecursiveHelper(currentNode.left, value);
      } else return undefined;
    }
  }
  public BFS(): T[] {
    if (!this.root) return [];
    const queue = new Queue<Node<T>>();
    const answer = [];
    queue.enqueue(this.root);
    while (queue.size > 0) {
      const node = queue.dequeue()!;
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
  public DFSPreOrder(): T[] {
    if (!this.root) return [];
    const answer: T[] = [];
    this.DFSPreOrderHelper(this.root, answer);
    return answer;
  }
  private DFSPreOrderHelper(currentNode: Node<T>, answer: T[]): void {
    answer.push(currentNode.value);
    if (currentNode.left) this.DFSPreOrderHelper(currentNode.left, answer);
    if (currentNode.right) this.DFSPreOrderHelper(currentNode.right, answer);
  }
  public DFSPostOrder(): T[] {
    if (!this.root) return [];
    const answer: T[] = [];
    this.DFSPostOrderHelper(this.root, answer);
    return answer;
  }
  private DFSPostOrderHelper(currentNode: Node<T>, answer: T[]): void {
    if (currentNode.left) this.DFSPostOrderHelper(currentNode.left, answer);
    if (currentNode.right) this.DFSPostOrderHelper(currentNode.right, answer);
    answer.push(currentNode.value);
  }
  public DFSInOrder(): T[] {
    if (!this.root) return [];
    const answer: T[] = [];
    this.DFSInOrderHelper(this.root, answer);
    return answer;
  }
  private DFSInOrderHelper(currentNode: Node<T>, answer: T[]): void {
    if (currentNode.left) this.DFSInOrderHelper(currentNode.left, answer);
    answer.push(currentNode.value);
    if (currentNode.right) this.DFSInOrderHelper(currentNode.right, answer);
  }
}

const binarySearchTree = new BinarySearchTree<number>(
  (a: number, b: number) => a - b
);
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

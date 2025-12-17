"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
                if (this.comparator(currentNode.value, newNode.value) < 0) {
                    if (currentNode.right) {
                        currentNode = currentNode.right;
                    }
                    else {
                        currentNode.right = newNode;
                        return this;
                    }
                }
                else if (this.comparator(currentNode.value, newNode.value) > 0) {
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
        if (this.comparator(currentNode.value, value) < 0) {
            if (currentNode.right) {
                this.insertRecursiveHelper(currentNode.right, value);
            }
            else {
                const newNode = new Node(value);
                currentNode.right = newNode;
            }
        }
        else if (this.comparator(currentNode.value, value) > 0) {
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
            if (this.comparator(currentNode.value, value) === 0)
                return currentNode;
            else if (this.comparator(currentNode.value, value) < 0) {
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
        if (this.comparator(currentNode.value, value) === 0)
            return currentNode;
        else if (this.comparator(currentNode.value, value) < 0) {
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
// console.log(binarySearchTree.find(3));
// console.log(binarySearchTree.findRecursive(3));
console.log(binarySearchTree.find(-1));
console.log(binarySearchTree.findRecursive(-1));
// console.log(binarySearchTree.find(0));
// console.log(binarySearchTree.findRecursive(0));

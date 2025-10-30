"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListNode {
    value;
    nextNode = null;
    constructor(value) {
        this.value = value;
    }
}
class LinkedList {
    root = null;
    lastNode;
    length = 0;
    get getLength() {
        return this.length;
    }
    add(value) {
        const node = new ListNode(value);
        if (!this.root) {
            this.root = node;
            this.lastNode = node;
        }
        else {
            this.lastNode.nextNode = node;
            this.lastNode = node;
        }
        this.length++;
    }
    remove(value) {
        if (!this.root)
            return "Your list is empty";
        if (this.root.value === value) {
            if (!this.root.nextNode) {
                this.root.nextNode = null;
                this.lastNode = this.root;
            }
            else {
                this.root = this.root.nextNode;
            }
            this.length--;
            return "Deleted";
        }
        let node = this.root;
        while (node.nextNode) {
            if (node.nextNode.value === value) {
                if (!node.nextNode.nextNode) {
                    node.nextNode = null;
                    this.lastNode = node;
                }
                else {
                    node.nextNode = node.nextNode.nextNode;
                }
                this.length--;
                return "Deleted";
            }
            node = node.nextNode;
        }
        return "Value not found";
    }
    insertAfter(value, target) {
        if (!this.root || target > this.length)
            return "Can't add value";
        let node = this.root;
        const newNode = new ListNode(value);
        if (target === 0) {
            newNode.nextNode = node.nextNode;
            node.nextNode = newNode;
            this.length++;
            return "Inserted value";
        }
        for (let i = 1; i < target; i++) {
            if (!node.nextNode) {
                node.nextNode = newNode;
                this.length++;
                return "Inserted value";
            }
            else {
                node = node.nextNode;
            }
        }
        newNode.nextNode = node.nextNode;
        node.nextNode = newNode;
        this.length++;
        return "Inserted value";
    }
    showAllNodes() {
        let node = this.root;
        while (node) {
            console.log(node.value);
            node = node.nextNode;
        }
    }
}
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.remove(1);
linkedList.add(4);
// linkedList.insertAfter(7, 2);
linkedList.insertAfter(7, 3);
// linkedList.insertAfter(4, 4);
console.log(linkedList.getLength);
linkedList.showAllNodes();

class ListNode<T> {
  public value: T;
  public nextNode: ListNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}
class LinkedList<T> {
  private root: ListNode<T> | null = null;
  private lastNode?: ListNode<T>;
  private length: number = 0;
  get getLength() {
    return this.length;
  }
  add(value: T) {
    const node = new ListNode<T>(value);
    if (!this.root) {
      this.root = node;
      this.lastNode = node;
    } else {
      this.lastNode!.nextNode = node;
      this.lastNode = node;
    }
    this.length++;
  }
  remove(value: T) {
    if (!this.root) return "Your list is empty";
    if (this.root.value === value) {
      if (!this.root.nextNode) {
        this.root.nextNode = null;
        this.lastNode = this.root;
      } else {
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
        } else {
          node.nextNode = node.nextNode.nextNode;
        }
        this.length--;
        return "Deleted";
      }
      node = node.nextNode;
    }
    return "Value not found";
  }
  insertAfter(value: T, target: number) {
    if (!this.root || target > this.length) return "Can't add value";
    let node = this.root;
    const newNode = new ListNode<T>(value);
    if (target === 0) {
      newNode.nextNode = node.nextNode;
      node.nextNode = newNode;
      this.length++;
      return "Inserted value";
    }
    for (let i = 1; i < target; i++) {
      if (!node.nextNode) {
        node.nextNode = newNode;
        this.lastNode = newNode;
        this.length++;
        return "Inserted value";
      } else {
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

const linkedList = new LinkedList<number>();
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

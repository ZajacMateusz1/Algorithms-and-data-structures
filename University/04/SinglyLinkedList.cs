using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SinglyLinkedList
{
    internal class SinglyLinkedList<T>
    {
        private Node<T> head;
        private Node<T> tail;
        public int length = 0;
        public SinglyLinkedList<T> Unshift(T value)
        {
            Node<T> newNode = new Node<T>(value);
            if (this.head == null)
            {
                this.head = newNode;
                this.tail = newNode;
            }
            else
            {
                newNode.next = this.head;
                this.head = newNode;
            }
            this.length++;
            return this;
        }
        public void ShowAllNodes()
        {
            Node<T> currentNode = this.head;
            while (currentNode != null)
            {
                Console.WriteLine(currentNode.value);
                currentNode = currentNode.next;
            }
        }
        public Node<T> GetElement(int index)
        {
            if (index < 0 || index >= this.length || this.head == null) return null;
            Node<T> currentNode = this.head;
            for (int i = 0; i < index; i++)
            {
                currentNode = currentNode.next;
            }
            return currentNode;
        }
        public Node<T> RemoveNode(int index)
        {
            if (index < 0 || index >= this.length || this.head == null) return null;
            else if (index == 0)
            {
                Node<T> oldHead = this.head;
                this.head = oldHead.next;
                this.length--;
                if (this.length == 0) this.tail = null;
                return oldHead;
            }
            Node<T> prevNode = this.GetElement(index - 1);
            Node<T> nodeToRemove = prevNode.next;
            prevNode.next = nodeToRemove.next;
            if (index == this.length - 1) { this.tail = prevNode; }
            this.length--;
            return nodeToRemove;
        }
        public void Clear() {
            Node<T> currentNode = this.head;
            Node<T> prevNode = this.head;
            while (currentNode != null) {
                prevNode = currentNode;
                currentNode = currentNode.next;
                prevNode.next = null;
            }
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
    }
}

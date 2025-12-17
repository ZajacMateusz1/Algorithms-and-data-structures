using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SinglyLinkedList
{
    internal class Stack<T>
    {
        private Node<T> head;
        public int length = 0;
        public Stack<T> Push(T value)
        {
            Node<T> newNode = new Node<T>(value);
            if (this.head == null)
            {
                this.head = newNode;
            }
            else
            {
                newNode.next = this.head;
                this.head = newNode;
            }
            this.length++;
            return this;
        }
        public Node<T> Pop()
        {
            if (this.head == null) return null;
            Node<T> nodeToRemove = this.head;
            this.head = nodeToRemove.next;
            nodeToRemove.next = null;
            this.length--;
            return nodeToRemove;
        }
    }
}

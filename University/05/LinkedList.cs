using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublyLinkedList
{
    internal class LinkedList
    {
        private Node head;
        public int length = 0;
        public int AddElementInOreder(int value)
        {
            Node newNode = new Node(value);
            if (this.head == null)
            {
                this.head = newNode;
            }
            else if (this.head.value < value)
            {
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;
            }
            else
            {
                Node currentNode = this.head;
                while (currentNode.next != null && currentNode.next.value >= value)
                {
                    currentNode = currentNode.next;
                }

                if (currentNode.next == null)
                {
                    currentNode.next = newNode;
                    newNode.prev = currentNode;
                }
                else
                {
                    newNode.next = currentNode.next;
                    newNode.prev = currentNode;
                    currentNode.next.prev = newNode;
                    currentNode.next = newNode;
                }
            }
            return this.length++;
        }
        public void ShowAllNodes()
        {
            Node currentNode = this.head;
            while (currentNode != null)
            {
                Console.WriteLine(currentNode.value);
                currentNode = currentNode.next;
            }
        }
    }
}

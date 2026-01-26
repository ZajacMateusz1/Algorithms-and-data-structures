using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublyLinkedList
{
    internal class Node
    {
        public int value;
        public Node next = null;
        public Node prev = null;
        public Node(int value) {
            this.value = value;
        }
    }
}

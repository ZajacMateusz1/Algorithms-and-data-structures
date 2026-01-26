using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoublyLinkedList
{
    internal class Program
    {
        static void Main(string[] args)
        {
            LinkedList linkedList = new LinkedList();
            linkedList.AddElementInOreder(5);
            linkedList.AddElementInOreder(1);
            linkedList.AddElementInOreder(9);
            linkedList.AddElementInOreder(3);
            linkedList.AddElementInOreder(7);
            linkedList.ShowAllNodes();
            Console.ReadKey();
        }
    }
}

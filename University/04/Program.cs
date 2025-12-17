using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SinglyLinkedList
{
    internal class Program
    {
        static void Main(string[] args)
        {
            SinglyLinkedList<int> singlyLinkedList = new SinglyLinkedList<int>();
            Stack<int> stack = new Stack<int>();
            singlyLinkedList.Unshift(1);
            singlyLinkedList.Unshift(2);
            singlyLinkedList.Unshift(3);
            singlyLinkedList.Unshift(4);
            //Console.WriteLine(singlyLinkedList.GetElement(2).value);
            //Console.WriteLine(singlyLinkedList.RemoveNode(3).value);
            //Console.WriteLine(singlyLinkedList.RemoveNode(1).value);
            //singlyLinkedList.ShowAllNodes();
            //singlyLinkedList.Clear();
            //singlyLinkedList.ShowAllNodes();
            stack.Push(1);
            stack.Push(2);
            stack.Push(3);
            Console.WriteLine(stack.Pop().value);
            Console.WriteLine(stack.Pop().value);
            Console.WriteLine(stack.Pop().value);
            //Console.WriteLine(stack.Pop().value);
            Console.ReadKey();
        }
    }
}

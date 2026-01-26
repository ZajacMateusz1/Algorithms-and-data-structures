using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BRT
{
    internal class Program
    {
        static void Main(string[] args)
        {
            RandomBinaryTree<int> tree = new RandomBinaryTree<int>(10, 0.5);

            for (int i = 1; i <= 10; i++)
            {
                tree.Insert(i);
            }

            Console.WriteLine("\nDFS PreOrder:");
            tree.DFSPreOrder();
            Console.WriteLine("\nDFS PostOrder:");
            tree.DFSPostOrder();
            Console.WriteLine("\nDFS InOrder:");
            tree.DFSInOrder();

            Console.ReadLine();
        }
    }
}

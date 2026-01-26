using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace BRT
{
    internal class RandomBinaryTree<T>
    {
        private readonly double p;
        private T[] tree;
        private bool[] used;
        private Random random = new Random();
    public RandomBinaryTree(int n, double p) { 
        if (n <= 0) throw new ArgumentOutOfRangeException("n musi być dodatnie");
        if (p < 0 || p > 1) throw new ArgumentOutOfRangeException("p musi być z przedziału od 0 do 1");
        tree = new T[n];
        used = new bool[n];
        this.p = p;
        }
    public bool Insert(T value) {
                int index = 0;
                while (index<tree.Length) {
                if (used[index] == false) {
                    used[index] = true;
                    tree[index] = value;
                    return true;
                }
                    if (random.NextDouble() <= p) {
                        index = index * 2 + 1;
                    }
                    else {
                        index = index * 2 + 2;
                    }
                }
            return false;
        }
        public void DFSPreOrder() {
            DFSPreOredrHelper(0);
        }
        private void DFSPreOredrHelper(int index) {
            if (index >= tree.Length || used[index] == false) return;
            Console.WriteLine(tree[index]);
            this.DFSPreOredrHelper(index * 2 + 1);
            this.DFSPreOredrHelper(index * 2 + 2);
        }
        public void DFSPostOrder()
        {
            DFSPostOrder(0);
        }
        private void DFSPostOrder(int index)
        {
            if (index >= tree.Length || used[index] == false) return;
            this.DFSPostOrder(index * 2 + 1);
            this.DFSPostOrder(index * 2 + 2);
            Console.WriteLine(tree[index]);
        }
        public void DFSInOrder()
        {
            DFSInOrder(0);
        }
        private void DFSInOrder(int index)
        {
            if (index >= tree.Length || used[index] == false) return;
            this.DFSInOrder(index * 2 + 1);
            Console.WriteLine(tree[index]);
            this.DFSInOrder(index * 2 + 2);
        }
    }
}

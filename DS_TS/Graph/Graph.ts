import { Stack } from "../Stack/Stack.js";
import { Queue } from "../Queue/Queue.js";

class Graph<T> {
  private adjacencyList = new Map<T, Set<T>>();
  addVertex(vertex: T): boolean {
    if (this.adjacencyList.has(vertex)) {
      return false;
    }
    this.adjacencyList.set(vertex, new Set<T>());
    return true;
  }
  addEdge(vertex1: T, vertex2: T): boolean {
    const vertex1Set = this.adjacencyList.get(vertex1);
    const vertex2Set = this.adjacencyList.get(vertex2);
    if (!vertex1Set || !vertex2Set || vertex1 === vertex2) return false;
    vertex1Set.add(vertex2);
    vertex2Set.add(vertex1);
    return true;
  }
  removeEdge(vertex1: T, vertex2: T): boolean {
    const vertex1Set = this.adjacencyList.get(vertex1);
    const vertex2Set = this.adjacencyList.get(vertex2);
    if (!vertex1Set || !vertex2Set) return false;
    const removed1 = vertex1Set.delete(vertex2);
    const removed2 = vertex2Set.delete(vertex1);
    return removed1 && removed2;
  }
  removeVertex(vertex: T): boolean {
    const vertexSet = this.adjacencyList.get(vertex);
    if (!vertexSet) return false;
    for (const vertexElement of vertexSet) {
      this.adjacencyList.get(vertexElement)?.delete(vertex);
    }
    this.adjacencyList.delete(vertex);
    return true;
  }
  DFS(vertex: T): T[] | null {
    if (!this.adjacencyList.get(vertex)) return null;
    const stack = new Stack<T>();
    const visited = new Set<T>();
    const answer: T[] = [];
    stack.push(vertex);
    visited.add(vertex);
    while (stack.size) {
      const removedElement = stack.pop()!;
      answer.push(removedElement);
      for (const neighbor of this.adjacencyList.get(removedElement)!) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      }
    }
    return answer;
  }
  DFSRecursive(vertex: T): T[] | null {
    if (!this.adjacencyList.get(vertex)) return null;
    const answer: T[] = [];
    const visited = new Set<T>();
    visited.add(vertex);
    answer.push(vertex);
    this.DFSRecursiveHelper(vertex, visited, answer);
    return answer;
  }
  private DFSRecursiveHelper(vertex: T, visited: Set<T>, answer: T[]) {
    for (const neighbor of this.adjacencyList.get(vertex)!) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        answer.push(neighbor);
        this.DFSRecursiveHelper(neighbor, visited, answer);
      }
    }
  }
  BFS(vertex: T): T[] | null {
    if (!this.adjacencyList.get(vertex)) return null;
    const queue = new Queue<T>();
    const visited = new Set<T>();
    const answer: T[] = [];
    queue.enqueue(vertex);
    visited.add(vertex);
    answer.push(vertex);
    while (queue.size) {
      const removedElement = queue.dequeue()!;
      for (const neighbor of this.adjacencyList.get(removedElement)!) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.enqueue(neighbor);
          answer.push(neighbor);
        }
      }
    }
    return answer;
  }
}

const graph = new Graph<string>();

console.log(graph.addVertex("A"));
console.log(graph.addVertex("B"));
console.log(graph.addVertex("C"));
console.log(graph.addVertex("D"));
console.log(graph.addVertex("E"));
console.log(graph.addVertex("F"));
console.log(graph.addEdge("A", "B"));
console.log(graph.addEdge("A", "C"));
console.log(graph.addEdge("B", "D"));
console.log(graph.addEdge("C", "E"));
console.log(graph.addEdge("D", "E"));
console.log(graph.addEdge("D", "F"));
console.log(graph.addEdge("E", "F"));
console.log(graph.DFSRecursive("A"));
console.log(graph.DFS("A"));
console.log(graph.BFS("A"));

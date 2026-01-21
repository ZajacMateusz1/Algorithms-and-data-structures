import { PriorityQueue } from "../PriorityQueue/PriorityQueue.js";

class WeightedGraph<T> {
  private adjacencyList = new Map<T, Map<T, number>>();
  addVertex(vertex: T): boolean {
    if (this.adjacencyList.has(vertex)) return false;
    this.adjacencyList.set(vertex, new Map<T, number>());
    return true;
  }
  addEdge(vertex1: T, vertex2: T, weight: number): boolean {
    const vertex1Map = this.adjacencyList.get(vertex1);
    const vertex2Map = this.adjacencyList.get(vertex2);
    if (!vertex1Map || !vertex2Map || vertex1 === vertex2) return false;
    vertex1Map.set(vertex2, weight);
    vertex2Map.set(vertex1, weight);
    return true;
  }
  removeEdge(vertex1: T, vertex2: T): boolean {
    const vertex1Map = this.adjacencyList.get(vertex1);
    const vertex2Map = this.adjacencyList.get(vertex2);
    if (!vertex1Map || !vertex2Map) return false;
    const removed1 = vertex1Map.delete(vertex2);
    const removed2 = vertex2Map.delete(vertex1);
    return removed1 && removed2;
  }
  removeVertex(vertex: T): boolean {
    const vertexMap = this.adjacencyList.get(vertex);
    if (!vertexMap) return false;
    for (const neighbor of vertexMap.keys()) {
      this.adjacencyList.get(neighbor)?.delete(vertex);
    }
    this.adjacencyList.delete(vertex);
    return true;
  }
  dijkstra(
    start: T,
    end: T,
  ): {
    distance: number | undefined;
    previous: Map<T, T | null>;
    path: T[];
  } | null {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      return null;
    }
    const distance = new Map<T, number>();
    const previous = new Map<T, T | null>();
    const visited = new Set<T>();
    const priorityQueue = new PriorityQueue<T>();
    distance.set(start, 0);
    previous.set(start, null);
    priorityQueue.enqueue(start, 0);
    for (const vertex of this.adjacencyList.keys()) {
      if (vertex === start) continue;
      distance.set(vertex, Infinity);
      previous.set(vertex, null);
    }
    while (priorityQueue.size) {
      const removedVertex = priorityQueue.dequeue()!;
      if (visited.has(removedVertex)) continue;
      visited.add(removedVertex);
      if (removedVertex === end) {
        const path = [];
        let currentVertex = removedVertex;
        while (currentVertex) {
          path.push(currentVertex);
          currentVertex = previous.get(currentVertex)!;
        }
        return { distance: distance.get(end), previous, path };
      }
      for (const [neighbor, weight] of this.adjacencyList.get(removedVertex)!) {
        if (visited.has(neighbor)) continue;
        const distanceFromStart = weight + distance.get(removedVertex)!;
        if (distanceFromStart < distance.get(neighbor)!) {
          distance.set(neighbor, distanceFromStart);
          previous.set(neighbor, removedVertex);
          priorityQueue.enqueue(neighbor, distanceFromStart);
        }
      }
    }
    return null;
  }
}

const weightedGraph = new WeightedGraph();

console.log(weightedGraph.addVertex("A"));
console.log(weightedGraph.addVertex("B"));
console.log(weightedGraph.addVertex("C"));
console.log(weightedGraph.addVertex("D"));
console.log(weightedGraph.addVertex("E"));
console.log(weightedGraph.addVertex("F"));
console.log(weightedGraph.addEdge("A", "B", 4));
console.log(weightedGraph.addEdge("A", "C", 2));
console.log(weightedGraph.addEdge("B", "E", 3));
console.log(weightedGraph.addEdge("C", "D", 2));
console.log(weightedGraph.addEdge("C", "F", 4));
console.log(weightedGraph.addEdge("D", "E", 3));
console.log(weightedGraph.addEdge("D", "F", 1));
console.log(weightedGraph.addEdge("E", "F", 1));
console.log(weightedGraph.dijkstra("A", "E"));

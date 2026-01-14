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
}

const graph = new Graph<number>();

console.log(graph.addVertex(1));
console.log(graph.addVertex(2));
console.log(graph.addVertex(3));
console.log(graph.addVertex(4));
console.log(graph.addEdge(1, 4));
console.log(graph.addEdge(1, 3));
console.log(graph.addEdge(3, 4));
console.log(graph.removeEdge(0, 4));
console.log(graph.removeEdge(1, 3));
console.log(graph.removeVertex(1));
console.log(graph.addVertex(1));
console.log(graph.addVertex(1));

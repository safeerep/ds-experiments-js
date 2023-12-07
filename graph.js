class Graph {
  constructor () {
    this.vertices = {}
  }

  addVertex (vertex) {
    if (!this.vertices[vertex]) {
      this.vertices[vertex] = []
    }
  }

  addUniDirectionalEdge (vertex1, vertex2) {
    if (!this.vertices[vertex1]) {
      this.addVertex(vertex1)
    } 
    if (!this.vertices[vertex2]) {
      this.addVertex(vertex2)
    }
    this.vertices[vertex1].push(vertex2)
  }

  addBiDirectionalEdge (vertex1, vertex2) {
    if (!this.vertices[vertex1]) {
      this.addVertex(vertex1)
    } 
    if (!this.vertices[vertex2]) {
      this.addVertex(vertex2)
    }
    this.vertices[vertex1].push(vertex2)
    this.vertices[vertex2].push(vertex1)
  }

  displayGraph () {
    for (let vertex in this.vertices) {
      console.log(`${vertex} : ${this.vertices[vertex]}`);
    }
  }
}

const obj = new Graph()
obj.addVertex('safeer')
obj.addVertex('nabeel')
obj.addVertex('karthik')
obj.addVertex('anirudh')
obj.addVertex('sharoon')
obj.addBiDirectionalEdge('safeer', 'karthik')
obj.addUniDirectionalEdge('safeer', 'nabeel')
obj.addBiDirectionalEdge('safeer', 'akshay')
obj.displayGraph()


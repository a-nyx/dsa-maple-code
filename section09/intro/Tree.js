class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  search() {
    // dfs vs bfs?
  }
}

// see [Implementation of Binary Search Tree in Javascript]
// https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/

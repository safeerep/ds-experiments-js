class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let node = this.root;
    while (node) {
      if (node.value <= value) {
        if (node.right === null) {
          node.right = newNode;
          return;
        } else node = node.right;
      } else {
        if (!node.left) {
          node.left = newNode;
          return;
        } else node = node.left;
      }
    }
  }

  display() {
    if (!this.root) return;
    else {
      this.displayHelper(this.root);
    }
  }

  displayHelper(node) {
    if (node !== null) {
      this.displayHelper(node.left);
      console.log(node.value);
      this.displayHelper(node.right);
    }
  }
}

const obj = new BinarySearchTree();
obj.addNode(10);
obj.addNode(200);
obj.addNode(100);
obj.addNode(12);
obj.addNode(189);
obj.display();

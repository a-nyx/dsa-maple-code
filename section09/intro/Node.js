class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(5);
root.left = new Node(10);
root.right = new Node(0);

// root.right.right = new Node(1);
const rightLevel1 = root.right;
rightLevel1.right = new Node(1);

console.log(root.right.right.value); // 1
console.log(root.right.right.right); // null

//        5
//    10      0
//              1

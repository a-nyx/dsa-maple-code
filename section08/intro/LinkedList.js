class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0; // optional
  }

  isEmpty() {
    return this.head === null;
  }

  append(data) {
    const newNode = new Node(data);
    this.size++; // optional

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(data) {
    const newNode = new Node(data);
    this.size++; // optional

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  display() {
    let result = "";
    let current = this.head;
    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }
    console.log(result);
  }

  printSize() {
    console.log("Link List Size: " + this.size);
  }
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.display(); // Output: 1 -> 2 -> 3 ->
linkedList.prepend(0);
linkedList.display(); // Output: 0 -> 1 -> 2 -> 3 ->
linkedList.printSize(); // Output: Link List Size: 4

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const head = new Node(5);
head.next = new Node(10);
head.next.next = new Node(15);

const secondNode = head.next;
console.log(secondNode.value); // 10

secondNode.next.next = new Node(20);
console.log(head.next.next.next.value); // 20

const fourthNode = head.next.next.next;
console.log(fourthNode.value); // 20
console.log(fourthNode.next); // null
console.log(fourthNode.next.value); // error

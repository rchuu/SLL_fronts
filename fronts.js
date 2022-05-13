// 1. Add front - Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

class SLLnode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        let newNode = new SLLnode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
}
let mySLL = new SLL(); //to start us off with an empty list
mySLL.addFront(10);
mySLL.addFront(8);
mySLL.addFront(3);

console.log(mySLL);
console.log(mySLL.head.next);//to print the second node

// 2. Remove Front - Write a method to remove the head node and return the new list head node. If the list is empty, return null.



// 3. Front - Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.


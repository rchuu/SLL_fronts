

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

    // 1. Add front - Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

    addFront(value) {
        let newNode = new SLLnode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    // 2. Remove Front - Write a method to remove the head node and return the new list head node. If the list is empty, return null.

    removeFront() {
        if (this.head == null) { //to no excute anything this is empty
            return this.head;
        }
        let removeNode = this.head; // to create a variable to hold the node we're going to move
        this.head = removeNode.next; //moving the head to ths next head in line
        removeNode.next = null; //to point the arrow to nothing(away from the next node)
        return this.head;
    }

    // 3. Front - Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
    front() {
        if (this.head == null) {
            return null;
        } else {
            return this.head.value;
        }
        // or use
        return this.head ? this.head.value : null;
    }
}
let mySLL = new SLL(); //to start us off with an empty list

mySLL.addFront(10);
mySLL.addFront(8);
mySLL.addFront(3);
mySLL.removeFront();
console.log(mySLL);
// console.log(mySLL.head.next);//to print the second node






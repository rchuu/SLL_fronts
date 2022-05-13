// Fronts

// 1. Add Front

// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

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
}

//      // constructor, other methods, removed for brevity
addFront(value) {
    var newNode = new SLLnode(val);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
}

// 2. Remove Front

// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

// constructor, other methods, removed for brevity
removeFront() { //why: so we can remove a node from the front of the list
    if (this.head == null) {
        return this.head;
    }
    var removedNode = this.head;
    this.head = removedNode.next;
    removedNode.next = null;
    return this.head;
}

// 3. Front

// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

// constructor, other methods, removed for brevity
front() {
    if (this.head == null) {
        return HTMLUListElement;
    } else {
        return this.head.value;
    }
}
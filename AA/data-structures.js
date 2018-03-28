class DoubleLinkedList {
    constructor(){
        this.head = new Node(null);
        this.tail = new Node(null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    append(val) {
        let newNode = new Node(val);
        let temp = this.tail.prev;

        temp.next = newNode;
        newNode.prev = temp;
        newNode.next = this.tail;
        this.tail.prev = newNode;
    }

    remove(val) {
        let node = this.head;
        let foundNode = null;
        while (node) {
            if (node.val === node.val) {
                foundNode = node;
                break;
            }
            node = node.next;
        }
        if (!node) { return null; }

        let previousNode = foundNode.prev;
        let nextNode = foundNode.next;

        previousNode.next = nextNode;
        nextNode.prev = previousNode;
        foundNode.prev = null;
        foundNode.next = null;
    }

    include(val) {
        let node = this.head;
        while (node) {
            if (node.val === val) {
                return true;
            }
        }

        return false;
    }

    first() {
        if (this.empty()) { return null; }

        return this.head.next;
    }

    last() {
        if (this.empty()) { return null; }

        return this.tail.prev;
    }

    empty() {
        if ((this.head.next === this.tail) && this.tail.prev === this.head) {
            return true;
        }
    }

    push(val) {
        if (this.last()) { 
            this.last().append(val); 
        } else {
            return null;
        }
    }

    pop(val) {
        if (this.first()) {
            this.remove(this.first.val);
        } else {
            return null;
        }
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class MaxStack {
    constructor() {
        this.stack = [];
        this.maxStack = [];
    }

    push(val) {
        let pushed = this.stack.push(val);
        if (pushed > this.maxStack[this.maxStack.length - 1]) {
            this.pushToMax(val);
        } 
    }

    pushToMax(val) {
        this.maxStack.push(val);
    }

    pop() {
        let popped = this.stack.pop();
        if (this.maxStack === popped) {
            this.maxStack.pop();
        }
    }

    max() {
        return this.maxStack[this.maxStack.length -1];
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }
}

class StackQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    push(val) {
        this.stack1.push(val);
    }

    pop() {
        if (this.stack1.length === 0 && this.stack2.length === 0) { return null; }
        if (this.stack2.length > 0) {
            return this.stack2.pop();
        }

        while (this.stack1.length > 1) {
            let popped = this.stack1.pop();
            this.stack2.push(popped);
        }
        
        return this.stack1.pop();
    }

    peek() {
        if (this.stack1.length > 0) {
            return this.stack1[0];
        } else if (this.stack2.length > 0) {
            return this.stack2[this.stack2.length - 1];
        } else {
            return null;
        }
    }
}
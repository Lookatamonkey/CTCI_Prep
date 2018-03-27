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
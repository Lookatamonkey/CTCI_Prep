class DoubleLinkedList {
  constructor() {
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
    if (!node) {
      return null;
    }

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
    if (this.empty()) {
      return null;
    }

    return this.head.next;
  }

  last() {
    if (this.empty()) {
      return null;
    }

    return this.tail.prev;
  }

  empty() {
    if (this.head.next === this.tail && this.tail.prev === this.head) {
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
    return this.maxStack[this.maxStack.length - 1];
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
    if (this.stack1.length === 0 && this.stack2.length === 0) {
      return null;
    }
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

class MinHeap {
  constructor() {
    this.store = [];
    this.index = 0;
  }

  peek() {
    return this.store[this.store.length - 1];
  }

  insert(num) {
    this.store.push(num);
    if (this.store.length === 1) {
      return this.store;
    }
    const findParentIdx = currentIdx => {
      return Math.floor((currentIdx - 1) / 2);
    };

    const swap = (parentIdx, currentIdx) => {
      let temp = this.store[parentIdx];
      this.store[parentIdx] = this.store[currentIdx];
      this.store[currentIdx] = temp;
    };

    let currentIdx = this.store.length - 1;
    let parentIdx = findParentIdx(currentIdx);
    while (this.store[parentIdx] > this.store[currentIdx]) {
      swap(parentIdx, currentIdx);
      currentIdx = parentIdx;
      parentIdx = findParentIdx(currentIdx);
    }

    return this.store;
  }

  pop() {
    const swap = (parentIdx, childIdx) => {
      let temp = this.store[parentIdx];
      this.store[parentIdx] = this.store[childIdx];
      this.store[childIdx] = temp;
    };

    let num = this.store[0];
    this.store[0] = this.store[this.store.length - 1];
    this.store.pop();

    let currentIdx = 0;
    /* children may be undefined if accessing an element in the array that does not exist */
    let leftChildIdx = findLeftChildIdx(currentIdx);
    let rightChildIdx = findRightChildIdx(currentIdx);
    while (
      this.store[currentIdx] > this.store[leftChildIdx] ||
      this.store[currentIdx] > this.store[rightChildIdx]
    ) {
      if (
        this.store[currentIdx] > this.store[leftChildIdx] &&
        this.store[currentIdx] > this.store[rightChildIdx]
      ) {
        if (this.store[leftChildIdx] > this.store[rightChildIdx]) {
          swap(currentIdx, rightChildIdx);
          currentIdx = rightChildIdx;
        } else {
          swap(currentIdx, leftChildIdx);
          currentIdx = leftChildIdx;
        }
      } else if (this.store[currentIdx] > this.store[leftChildIdx]) {
        swap(currentIdx, leftChildIdx);
        currentIdx = leftChildIdx;
      } else if (store[currentIdx] > store[rightChildIdx]) {
        swap(currentIdx, rightChildIdx);
        currentIdx = rightChildIdx;
      }
      leftChildIdx = findLeftChildIdx(currentIdx);
      rightChildIdx = findRightChildIdx(currentIdx);
    }
    return num;

    function findLeftChildIdx(idx) {
      return 2 * idx + 1;
    }

    function findRightChildIdx(idx) {
      return 2 * idx + 2;
    }
  }
}

let minheap = new MinHeap();
minheap.insert(3);
minheap.insert(1);
minheap.insert(6);
minheap.insert(5);
minheap.insert(2);
minheap.insert(4);
console.log(minheap);
minheap.pop();
console.log(minheap);
